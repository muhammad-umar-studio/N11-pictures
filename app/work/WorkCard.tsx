"use client";

import Link from "next/link";
import Image from "next/image";
import type { PointerEvent } from "react";

type WorkProject = {
  _id: string;
  title: string;
  category?: string;
  slug?: string;
  imageUrl?: string;
  sourceUrl?: string;
};

type WorkCardProps = {
  project: WorkProject;
  href: string;
  itemClassName?: string;
};

function moveArrow(event: PointerEvent<HTMLDivElement>) {
  if (event.pointerType !== "mouse") return;

  const image = event.currentTarget;
  const bounds = image.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - 0.5;
  const y = (event.clientY - bounds.top) / bounds.height - 0.5;
  const arrow = image.querySelector<HTMLElement>(".block-arrow");

  arrow?.style.setProperty("--arrow-x", `${x * 40}%`);
  arrow?.style.setProperty("--arrow-y", `${y * 40}%`);
}

function resetArrow(event: PointerEvent<HTMLDivElement>) {
  const arrow = event.currentTarget.querySelector<HTMLElement>(".block-arrow");
  arrow?.style.removeProperty("--arrow-x");
  arrow?.style.removeProperty("--arrow-y");
}

export default function WorkCard({
  project,
  href,
  itemClassName = "collection-item-3 w-dyn-item",
}: WorkCardProps) {
  return (
    <div role="listitem" className={itemClassName}>
      <Link href={href} className="link-work-3 w-inline-block">
        <div
          className="bg-img-work-3"
          style={{
            backgroundImage: project.imageUrl
              ? `url(${project.imageUrl})`
              : undefined,
            backgroundSize: "cover",
          }}
          onPointerMove={moveArrow}
          onPointerLeave={resetArrow}
        >
          <div className="block-arrow" aria-hidden="true">
            <Image src="/images/arrow.svg" width={20} height={20} alt="" className="arrow" />
          </div>
        </div>
        <div className="block-work">
          <h6 className="heading-work">{project.title}</h6>
          <div className="info-work">{project.category}</div>
        </div>
      </Link>
    </div>
  );
}
