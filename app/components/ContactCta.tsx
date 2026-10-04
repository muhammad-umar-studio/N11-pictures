import Link from "next/link";

const contactLabel = ["C", "o", "n", "t", "a", "c", "t", " ", "\u00a0", "u", "s"];

export default function ContactCta() {
  return (
    <section
      data-w-id="ef2baa8f-fa15-715e-ca23-592e2441581e"
      data-scroll-reveal
      className="section-call-to-action"
    >
      <div className="block-cta">
        <div className="text-cta">Let’s make something together</div>
        <Link href="/contact-2" className="link-cta w-inline-block" aria-label="Contact us">
          {contactLabel.map((character, index) => (
            <span key={`${character}-${index}`} className="letter-cta" aria-hidden="true">
              {character}
            </span>
          ))}
        </Link>
      </div>
    </section>
  );
}
