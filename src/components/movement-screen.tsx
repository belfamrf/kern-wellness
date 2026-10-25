"use client";

import { useEffect, useRef, useState } from "react";
import { setPreferredFormat, type TrainingFormat } from "@/lib/training-format";

type QuestionId = "sitting" | "limits" | "experience" | "goal";
type Answers = Record<QuestionId, string>;

type Question = {
  id: QuestionId;
  legend: string;
  options: { value: string; label: string }[];
};

const questions: Question[] = [
  {
    id: "sitting",
    legend: "How long do you sit on a working day?",
    options: [
      { value: "under3", label: "Under 3 hours" },
      { value: "3to6", label: "3–6 hours" },
      { value: "6to8", label: "6–8 hours" },
      { value: "8plus", label: "More than 8 hours" },
    ],
  },
  {
    id: "limits",
    legend: "Where do you feel most limited?",
    options: [
      { value: "hips", label: "Hips and lower back" },
      { value: "neck", label: "Neck and shoulders" },
      { value: "knees", label: "Knees and ankles" },
      { value: "none", label: "No clear limit" },
    ],
  },
  {
    id: "experience",
    legend: "What is your training experience?",
    options: [
      { value: "new", label: "New to strength training" },
      { value: "returning", label: "Returning after a break" },
      { value: "inconsistent", label: "Training, but not consistently" },
      { value: "regular", label: "Training regularly" },
    ],
  },
  {
    id: "goal",
    legend: "What would you like from the next 12 weeks?",
    options: [
      { value: "ease", label: "Move more easily day to day" },
      { value: "strength", label: "Get stronger" },
      { value: "routine", label: "Build a routine I can keep" },
      { value: "people", label: "Train with other people" },
    ],
  },
];

const emptyAnswers: Answers = {
  sitting: "",
  limits: "",
  experience: "",
  goal: "",
};

const nextSteps = [
  "A free 30-minute intro, in the studio or by video.",
  "A short movement screen and a conversation about your week.",
  "A written starting point, whether or not you book.",
];

type Recommendation = {
  format: TrainingFormat;
  title: string;
  reason: string;
};

function recommend(answers: Answers): Recommendation {
  const foundation: Recommendation = {
    format: "foundation",
    title: "Foundation 1-on-1",
    reason:
      "Your answers point to one-to-one work for the first 12 weeks, so the plan can start from where your movement and strength are now.",
  };
  const smallGroup: Recommendation = {
    format: "small-group",
    title: "Small group",
    reason:
      "You already train with some consistency, so a group of four gives you structure without losing the plan.",
  };
  const intro: Recommendation = {
    format: "not-sure",
    title: "Start with an intro",
    reason:
      "Your answers point in more than one direction, and that is worth talking through before you choose a format.",
  };

  if (answers.goal === "people") return smallGroup;
  if (
    answers.experience === "new" ||
    answers.experience === "returning" ||
    answers.goal === "ease"
  ) {
    return foundation;
  }
  if (answers.experience === "regular") return smallGroup;
  return intro;
}

function secondSentence(answers: Answers) {
  if (answers.sitting === "6to8" || answers.sitting === "8plus") {
    return "You spend most of the working day seated, so hips and mid-back come first.";
  }
  switch (answers.limits) {
    case "hips":
      return "We will begin with hips and lower back, at a pace you can repeat.";
    case "neck":
      return "We will start with neck and shoulders in the first block.";
    case "knees":
      return "We will start with knees and ankles in the first block.";
    default:
      return "The plan starts at a pace you can repeat in a working week.";
  }
}

export function MovementScreen() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(emptyAnswers);
  const [finished, setFinished] = useState(false);
  const legendRef = useRef<HTMLLegendElement>(null);
  const resultRef = useRef<HTMLHeadingElement>(null);
  const interacted = useRef(false);

  useEffect(() => {
    if (!interacted.current) return;
    if (finished) {
      resultRef.current?.focus();
    } else {
      legendRef.current?.focus();
    }
  }, [step, finished]);

  const question = questions[step];
  const selected = answers[question.id];
  const progress = finished ? questions.length : step + 1;

  function choose(value: string) {
    setAnswers((current) => ({ ...current, [question.id]: value }));
  }

  function goBack() {
    if (step === 0) return;
    interacted.current = true;
    setStep((current) => current - 1);
  }

  function goForward() {
    if (!selected) return;
    interacted.current = true;
    if (step === questions.length - 1) {
      setFinished(true);
      setPreferredFormat(recommend(answers).format);
      return;
    }
    setStep((current) => current + 1);
  }

  function startOver() {
    interacted.current = true;
    setAnswers(emptyAnswers);
    setStep(0);
    setFinished(false);
    setPreferredFormat("");
  }

  if (finished) {
    const result = recommend(answers);
    return (
      <div className="screen-card">
        <div className="screen-progress" aria-hidden="true">
          <div className="screen-bars">
            {questions.map((item) => (
              <span className="screen-bar is-filled" key={item.id} />
            ))}
          </div>
          <span className="screen-count">04 / 04</span>
        </div>
        <div className="screen-result" aria-live="polite">
          <p className="label">Suggested starting point</p>
          <h3 ref={resultRef} tabIndex={-1}>
            {result.title}
          </h3>
          <p>
            {result.reason} {secondSentence(answers)}
          </p>
          <ol className="screen-next">
            {nextSteps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <div className="screen-actions">
            <a
              className="button button-primary"
              href="#booking"
              onClick={() => setPreferredFormat(result.format)}
            >
              Book this intro
            </a>
            <button className="text-button" type="button" onClick={startOver}>
              Start over
            </button>
          </div>
        </div>
        <p className="screen-note">
          A training preference guide, not a medical assessment.
        </p>
      </div>
    );
  }

  return (
    <div className="screen-card">
      <div className="screen-progress">
        <div className="screen-bars" aria-hidden="true">
          {questions.map((item, index) => (
            <span
              className={`screen-bar${index < progress ? " is-filled" : ""}`}
              key={item.id}
            />
          ))}
        </div>
        <span className="screen-count" aria-hidden="true">
          {String(progress).padStart(2, "0")} / 04
        </span>
        <span className="sr-only">
          Question {progress} of {questions.length}
        </span>
      </div>
      <div className="screen-step" key={step}>
        <fieldset className="screen-question">
          <legend ref={legendRef} tabIndex={-1}>
            {question.legend}
          </legend>
          <div className="screen-options">
            {question.options.map((option) => (
              <button
                className="screen-option"
                type="button"
                key={option.value}
                aria-pressed={selected === option.value}
                onClick={() => choose(option.value)}
              >
                <span>{option.label}</span>
                <span className="screen-tick" aria-hidden="true" />
              </button>
            ))}
          </div>
        </fieldset>
      </div>
      <div className="screen-actions">
        <button
          className="text-button"
          type="button"
          onClick={goBack}
          disabled={step === 0}
        >
          Back
        </button>
        <button
          className="button button-primary"
          type="button"
          onClick={goForward}
          disabled={!selected}
        >
          {step === questions.length - 1 ? "See my starting point" : "Continue"}
        </button>
      </div>
    </div>
  );
}
