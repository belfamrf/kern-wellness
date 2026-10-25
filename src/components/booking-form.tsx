"use client";

import { useRef, useState, type FormEvent } from "react";
import {
  setPreferredFormat,
  usePreferredFormat,
  type TrainingFormat,
} from "@/lib/training-format";

type Status = "idle" | "submitting" | "demo" | "success" | "error";
type Errors = Partial<Record<"name" | "email" | "goal" | "format", string>>;

const goals = [
  { value: "strength", label: "Build strength" },
  { value: "ease", label: "Move more easily" },
  { value: "routine", label: "Keep a routine" },
  { value: "people", label: "Train with others" },
  { value: "other", label: "Something else" },
];

const formats: { value: TrainingFormat; label: string; note: string }[] = [
  {
    value: "foundation",
    label: "Foundation 1-on-1",
    note: "12 weeks, one to one",
  },
  {
    value: "small-group",
    label: "Small group",
    note: "Up to four people",
  },
  {
    value: "not-sure",
    label: "Not sure",
    note: "Help me choose",
  },
];

const statusCopy: Record<Exclude<Status, "idle" | "submitting">, string> = {
  demo: "Demo only. Nothing was sent.",
  success: "Thank you. Your intro request has been sent.",
  error: "That did not send. Please try again.",
};

export function BookingForm() {
  const preferred = usePreferredFormat();
  const [values, setValues] = useState({
    name: "",
    email: "",
    goal: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const goalRef = useRef<HTMLSelectElement>(null);
  const formatRef = useRef<HTMLFieldSetElement>(null);

  function update(field: "name" | "email" | "goal" | "message", value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field as keyof Errors]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  function validate(): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Enter your name.";
    if (!values.email.trim()) {
      next.email = "Enter an email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = "Check the email address.";
    }
    if (!values.goal) next.goal = "Choose a goal.";
    if (!preferred) next.format = "Choose a format, or pick Not sure.";
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status !== "submitting") setStatus("idle");
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      if (nextErrors.name) nameRef.current?.focus();
      else if (nextErrors.email) emailRef.current?.focus();
      else if (nextErrors.goal) goalRef.current?.focus();
      else if (nextErrors.format) formatRef.current?.focus();
      return;
    }

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      setStatus("demo");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          goal: values.goal,
          format: preferred,
          message: values.message,
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      setValues({ name: "", email: "", goal: "", message: "" });
      setPreferredFormat("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      noValidate
      aria-busy={status === "submitting"}
    >
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            ref={nameRef}
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            autoComplete="name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p className="field-error" id="name-error">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            ref={emailRef}
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            autoComplete="email"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p className="field-error" id="email-error">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="field">
        <label htmlFor="goal">What brings you here?</label>
        <select
          id="goal"
          name="goal"
          ref={goalRef}
          value={values.goal}
          onChange={(event) => update("goal", event.target.value)}
          aria-invalid={errors.goal ? true : undefined}
          aria-describedby={errors.goal ? "goal-error" : undefined}
        >
          <option value="">Choose one</option>
          {goals.map((goal) => (
            <option value={goal.value} key={goal.value}>
              {goal.label}
            </option>
          ))}
        </select>
        {errors.goal ? (
          <p className="field-error" id="goal-error">
            {errors.goal}
          </p>
        ) : null}
      </div>

      <fieldset
        className="field format-field"
        ref={formatRef}
        tabIndex={-1}
        aria-describedby={errors.format ? "format-error" : undefined}
      >
        <legend>Format</legend>
        <div className="format-options">
          {formats.map((format) => (
            <label
              className={`format-option${preferred === format.value ? " is-selected" : ""}`}
              key={format.value}
            >
              <input
                type="radio"
                name="format"
                value={format.value}
                checked={preferred === format.value}
                onChange={() => {
                  setPreferredFormat(format.value);
                  setErrors((current) => ({ ...current, format: undefined }));
                }}
              />
              <span className="format-copy">
                <span className="format-label">{format.label}</span>
                <span className="format-note">{format.note}</span>
              </span>
            </label>
          ))}
        </div>
        {errors.format ? (
          <p className="field-error" id="format-error">
            {errors.format}
          </p>
        ) : null}
      </fieldset>

      <div className="field">
        <label htmlFor="message">
          Anything we should know? <span className="label-optional">Optional</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
        />
      </div>

      <div className="form-actions">
        <button
          className="button button-primary"
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Request intro"}
        </button>
        <p className="form-note">
          Concept project. Demo form, no real bookings.
        </p>
      </div>

      <div className="form-status" role="status" aria-live="polite">
        {status === "demo" || status === "success" || status === "error"
          ? statusCopy[status]
          : ""}
      </div>
    </form>
  );
}
