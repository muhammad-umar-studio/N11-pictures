import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../sanity";

export const metadata: Metadata = {
  title: "About N11 Pictures | Independent Film & Content Production",
  description:
    "Meet the filmmaker-led team behind N11 Pictures and explore our films, music videos and commercial productions.",
};

type AboutProject = {
  title: string;
  category?: string;
  sourceUrl: string;
  imageUrl?: string;
};

const featuredDefinitions = [
  {
    sourceUrl: "https://www.n11pictures.com/project/showreel1",
    href: "/project/showreel1",
    category: "Short film",
    linkLabel: "View film",
  },
  {
    sourceUrl: "https://www.n11pictures.com/project/spectrum",
    href: "/project/spectrum",
    category: "Short film",
    linkLabel: "View film",
  },
  {
    sourceUrl: "https://www.n11pictures.com/music-video/re-arranger",
    href: "/music-video/re-arranger",
    category: "Music video",
    linkLabel: "Watch video",
  },
] as const;

const featuredQuery = `*[_type == "film" && sourceMetadata.url in $sourceUrls]{
  title,
  category,
  "sourceUrl": sourceMetadata.url,
  "imageUrl": heroImage.asset->url
}`;

const commercialSourceUrl =
  "https://www.n11pictures.com/hospitality/german-doner-kebab";

export default async function AboutPage() {
  const [featuredResults, commercialProject] = await Promise.all([
    client.fetch<AboutProject[]>(
      featuredQuery,
      { sourceUrls: featuredDefinitions.map((project) => project.sourceUrl) },
    ),
    client.fetch<AboutProject | null>(
      `*[_type == "film" && sourceMetadata.url == $sourceUrl][0]{
        title,
        category,
        "sourceUrl": sourceMetadata.url,
        "imageUrl": heroImage.asset->url
      }`,
      { sourceUrl: commercialSourceUrl },
    ),
  ]);

  const featuredProjects = featuredDefinitions.map((definition) => {
    const project = featuredResults.find(
      (result) => result.sourceUrl === definition.sourceUrl,
    );

    if (!project?.imageUrl) {
      throw new Error(
        `Sanity project is missing for About page feature: ${definition.sourceUrl}`,
      );
    }

    return {
      ...definition,
      project: { ...project, imageUrl: project.imageUrl },
    };
  });

  if (!commercialProject?.imageUrl) {
    throw new Error(
      `Sanity project is missing for About page commercial feature: ${commercialSourceUrl}`,
    );
  }

  return (
    <div className="about-redesign">
      <main className="about-main">
        <section className="about-hero about-shell" data-scroll-reveal>
          <div className="about-hero__copy">
            <p className="about-eyebrow">About N11 Pictures</p>
            <h1>
              Independent films.
              <br />
              Stories with character.
            </h1>
            <p className="about-lead">
              N11 Pictures creates short films, music videos and commercial
              content. Founded by writer, director and producer Naveed Mir, we
              bring a filmmaking perspective to every project.
            </p>
            <div className="about-actions">
              <Link className="about-button about-button--primary" href="/work">
                Watch our work
              </Link>
              <Link className="about-button about-button--outline" href="/contact">
                Discuss a project
              </Link>
            </div>
          </div>
          <div className="about-image-frame about-hero__image">
            <Image
              src="/images/449A5816-1-1-1.png"
              alt="Filmmaker operating a camera on location"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 48vw"
            />
          </div>
        </section>

        <section className="about-section about-shell" data-scroll-reveal>
          <div className="about-story-copy">
            <div>
              <p className="about-eyebrow">01 / Our story</p>
              <h2>A filmmaker-led production company.</h2>
            </div>
            <div className="about-prose">
              <p>
                N11 Pictures is an independent production company founded by
                Naveed Mir. Our work spans narrative short films, music videos,
                actor showreels and commercial productions for hospitality,
                fitness and lifestyle businesses.
              </p>
              <p>
                We begin with the story: what you want to say, who you want to
                reach and how it should feel on screen. From developing the
                idea to filming and editing, we work with collaborators whose
                skills fit the project.
              </p>
              <p>
                Whether we are creating an original film or capturing the
                character of a business, our aim is the same: considered
                images, strong performances and a clear sense of purpose.
              </p>
            </div>
          </div>
          <div className="about-image-frame about-story-image">
            <Image
              src="/images/449A9348-1-1-1.png"
              alt="N11 Pictures crew filming together on location"
              fill
              sizes="(max-width: 767px) 100vw, 90vw"
            />
          </div>
        </section>

        <section className="about-section about-shell" data-scroll-reveal>
          <div className="about-section-heading">
            <p className="about-eyebrow">02 / Selected work</p>
          </div>
          <div className="about-project-grid">
            {featuredProjects.map(({ project, href, category, linkLabel }) => (
              <article className="about-project-card" key={project.sourceUrl}>
                <Link
                  className="about-image-frame about-project-image"
                  href={href}
                  aria-label={`${linkLabel}: ${project.title}`}
                >
                  <Image
                    src={project.imageUrl}
                    alt={`${project.title} — ${category.toLowerCase()} still`}
                    fill
                    sizes="(max-width: 767px) 100vw, 31vw"
                  />
                </Link>
                <h3>
                  <Link href={href}>{project.title}</Link>
                </h3>
                <p className="about-project-category">{category}</p>
                <Link className="about-text-link" href={href}>
                  {linkLabel} <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section about-shell" data-scroll-reveal>
          <div className="about-section-heading">
            <p className="about-eyebrow">03 / Founder &amp; collaborators</p>
          </div>
          <article className="about-founder">
            <div className="about-image-frame about-founder__image">
              <Image
                src="/images/Untitled-design-13.png"
                alt="Black-and-white portrait of Naveed Mir"
                fill
                sizes="(max-width: 767px) 90vw, (max-width: 1280px) 28vw, 360px"
              />
            </div>
            <div className="about-founder__copy">
              <h2>Naveed Mir</h2>
              <p className="about-role">Founder / Writer / Director / Producer</p>
              <p>
                Naveed Mir is a writer, director, producer and actor, and the
                founder of N11 Pictures. His work brings together narrative
                filmmaking, music videos and commercial content. He develops
                projects from the initial idea through production, working
                closely with cast, crew and clients to shape the finished
                piece.
              </p>
            </div>
          </article>
          <div className="about-collaborators">
            <article className="about-collaborator">
              <div className="about-image-frame about-collaborator__image">
                <Image
                  src="/images/image_2025-02-23_150333724.png"
                  alt="Portrait of Mirco Iannelli"
                  fill
                  sizes="(max-width: 767px) 30vw, 14vw"
                />
              </div>
              <div>
                <h3>Mirco lannelli</h3>
                <p className="about-role">Cinematography / Editing</p>
                <p>
                  Mirco works across cinematography and editing, helping shape
                  the visual language, rhythm and final finish of our
                  productions.
                </p>
              </div>
            </article>
            <article className="about-collaborator">
              <div className="about-image-frame about-collaborator__image">
                <Image
                  src="/images/Untitled-design-7.png"
                  alt="Portrait of Muhammad Umar"
                  fill
                  sizes="(max-width: 767px) 30vw, 14vw"
                />
              </div>
              <div>
                <h3>Muhammad Umar</h3>
                <p className="about-role">
                  Web &amp; Software Development / 3D Animation / Social media / Content marketing
                </p>
                <p>
                  Muhammad Umar is a full-stack engineer and 3D artist specializing in scalable web, mobile, and e-commerce solutions. Combining custom software architecture with digital strategy, he produces high-fidelity 3D animations while leading social media and content marketing to perfectly adapt creative work for its audience and platform.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="about-section about-shell" data-scroll-reveal>
          <div className="about-section-heading about-section-heading--stacked">
            <p className="about-eyebrow">04 / Festival recognition</p>
            <p>
              Our films and music videos have received festival recognition.
              Explore the individual projects for their awards, selections and
              screening history.
            </p>
          </div>
          <div className="about-awards-grid">
            <Link
              className="about-award"
              href="/project/spectrum"
              aria-label="Explore Appetence and its festival recognition"
            >
              <Image
                src="/images/WhatsApp-Image-2025-02-10-at-11.26.34_5276c1a8.jpg"
                alt="Appetence festival award poster"
                fill
                sizes="(max-width: 767px) 45vw, 22vw"
              />
            </Link>
            <Link
              className="about-award"
              href="/project/showreel1"
              aria-label="Explore Strange Fruit and its festival recognition"
            >
              <Image
                src="/images/RYAN-GOSLING-EMMA-STONE-LA-LA-LAND-LOVE-CAN-CHANGE-YOUR-LIFE.-3.png"
                alt="Strange Fruit festival award poster"
                fill
                sizes="(max-width: 767px) 45vw, 22vw"
              />
            </Link>
            <Link
              className="about-award"
              href="/music-video/re-arranger"
              aria-label="Explore Re-arranger and its festival recognition"
            >
              <Image
                src="/images/Athens-International-Monthly-Art-Film-Festival-3.png"
                alt="Re-arranger festival award poster"
                fill
                sizes="(max-width: 767px) 45vw, 22vw"
              />
            </Link>
            <Link
              className="about-award"
              href="/project/obsidian"
              aria-label="Explore Folie: Cabin Fever and its festival recognition"
            >
              <Image
                src="/images/WhatsApp-Image-2025-02-25-at-18.37.48_f1b53c16.jpg"
                alt="Folie: Cabin Fever festival award poster"
                fill
                sizes="(max-width: 767px) 45vw, 22vw"
              />
            </Link>
          </div>
        </section>

        <section className="about-section about-shell" data-scroll-reveal>
          <div className="about-section-heading about-section-heading--stacked">
            <p className="about-eyebrow">05 / Commercial collaborations</p>
            <p>
              We create films and content for hospitality, fitness and lifestyle
              businesses, from food and venue features to athlete profiles and
              promotional videos. Browse our commercial work to see the
              projects and businesses behind it.
            </p>
          </div>
          <article className="about-commercial-card">
            <Link
              className="about-image-frame about-commercial-card__image"
              href="/hospitality/german-doner-kebab"
              aria-label="View German Doner Kebab hospitality content"
            >
              <Image
                src={commercialProject.imageUrl}
                alt="German Doner Kebab hospitality feature"
                fill
                sizes="(max-width: 767px) 100vw, 48vw"
              />
            </Link>
            <div className="about-commercial-card__copy">
              <p className="about-project-title">{commercialProject.title}</p>
              <p className="about-project-category">Hospitality content</p>
            </div>
            <div className="about-commercial-card__action">
              <h2>Explore commercial work</h2>
              <p>Hospitality / Fitness / Lifestyle</p>
              <Link className="about-button about-button--primary" href="/work">
                View commercial work
              </Link>
            </div>
          </article>
          <div className="about-services" id="services">
            <div className="about-services__heading">
              <p className="about-eyebrow">Services</p>
              <p>
                From an original story to a finished production, we bring the
                right creative team to each project.
              </p>
            </div>
            <div className="about-services-grid">
              <article>
                <h3>Narrative films</h3>
                <p>Original stories developed for the screen.</p>
              </article>
              <article>
                <h3>Music videos</h3>
                <p>Visual storytelling shaped around the track and artist.</p>
              </article>
              <article>
                <h3>Commercial content</h3>
                <p>
                  Productions for hospitality, fitness and lifestyle
                  businesses.
                </p>
              </article>
              <article>
                <h3>Actor showreels</h3>
                <p>Filmed scenes that showcase performance.</p>
              </article>
              <article>
                <h3>Social media / Content marketing</h3>
                <p>
                  Helping adapt creative work for its audience and platform.
                </p>
              </article>
              <article>
                <h3>Web &amp; software development</h3>
                <p>
                  Web development, robust backend systems and custom software
                  architecture.
                </p>
              </article>
              <article>
                <h3>3D animation</h3>
                <p>High-fidelity 3D animations and visual assets.</p>
              </article>
              <article>
                <h3>Mobile applications</h3>
                <p>Cross-platform applications built for mobile devices.</p>
              </article>
              <article>
                <h3>E-commerce stores</h3>
                <p>Scalable online stores built around business needs.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="about-section about-enquiry about-shell" data-scroll-reveal>
          <p className="about-eyebrow">06 / Start a conversation</p>
          <h2>Have a story to tell?</h2>
          <p>
            Tell us what you are planning, who it is for and when you would
            like to make it. We can discuss the creative approach and what the
            production will involve.
          </p>
          <div className="about-actions">
            <Link className="about-button about-button--primary" href="/contact-2">
              Discuss your project
            </Link>
            <a
              className="about-button about-button--outline"
              href="https://calendly.com/n11pictures-picturesof?background_color=171717&text_color=faf5f5"
              target="_blank"
              rel="noreferrer"
            >
              Book an introductory call
            </a>
          </div>
        </section>
      </main>

      <footer className="about-footer">
        <div className="about-footer__inner">
          <p>N11 PICTURES / Films, music videos &amp; commercial content</p>
          {/* <Link href="/shop">Shop</Link> */}
        </div>
      </footer>
    </div>
  );
}