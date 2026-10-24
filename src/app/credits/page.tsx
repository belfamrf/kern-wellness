import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Photography credits",
  description:
    "Sources and licences for the photography used in the KERN concept project.",
  alternates: {
    canonical: "/credits",
  },
};

const photos = [
  {
    title: "Gymnastic rings 20190613",
    author: "Santeri Viinamäki",
    source:
      "https://commons.wikimedia.org/wiki/File:Gymnastic_rings_20190613.jpg",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    note: "Used in the hero panel. Resized, re-encoded, cropped by the layout, and colour-treated.",
  },
  {
    title: "Two weight training benches",
    author: "Wolfgang1018",
    source:
      "https://commons.wikimedia.org/wiki/File:Two_weight_training_benches.jpg",
    licence: "CC BY-SA 3.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    note: "Used in the Studio section. Resized, re-encoded, cropped by the layout, and colour-treated.",
  },
  {
    title: "Dumbbells on rack 20180112",
    author: "Santeri Viinamäki",
    source:
      "https://commons.wikimedia.org/wiki/File:Dumbbells_on_rack_20180112.jpg",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    note: "Used in the Studio section. Resized, re-encoded, cropped by the layout, and colour-treated.",
  },
];

export default function Credits() {
  return (
    <main className="credits-page">
      <div className="site-shell credits-inner">
        <div className="credits-top">
          <Link className="brand-link" href="/" aria-label="KERN home">
            <Image
              src="/brand/kern-horizontal.svg"
              alt="KERN"
              width={820}
              height={256}
              unoptimized
            />
          </Link>
          <Link className="text-link" href="/">
            Back to site
          </Link>
        </div>

        <p className="eyebrow">Credits</p>
        <h1>Photography</h1>
        <p className="credits-lead">
          The three photographs on this site come from Wikimedia Commons. Each
          file was resized, re-encoded, cropped by the layout, and colour-treated;
          those adaptations are shared under the same licence as the original.
        </p>

        <ul className="credits-list">
          {photos.map((photo) => (
            <li key={photo.title}>
              <h2>{photo.title}</h2>
              <p>
                Photograph by {photo.author}. Source:{" "}
                <a href={photo.source}>Wikimedia Commons</a>. Licence:{" "}
                <a href={photo.licenceUrl}>{photo.licence}</a>.
              </p>
              <p>{photo.note}</p>
            </li>
          ))}
        </ul>

        <p className="credits-note">
          KERN is a concept project. The photographs show training equipment;
          they do not depict KERN&apos;s real studio, clients, or staff.
        </p>
        <Link className="text-link credits-back" href="/">
          Back to KERN
        </Link>
      </div>
    </main>
  );
}
