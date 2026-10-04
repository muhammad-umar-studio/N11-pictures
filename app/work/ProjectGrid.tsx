"use client";

import WorkCard from "./WorkCard";

type WorkProject = {
  _id: string;
  title: string;
  category?: string;
  slug?: string;
  imageUrl?: string;
  sourceUrl?: string;
  href: string;
};

type ProjectGridProps = {
  projects: WorkProject[];
  listClassName: string;
  itemClassName?: string;
  emptyClassName?: string;
  emptyTextClassName?: string;
};

export default function ProjectGrid({
  projects,
  listClassName,
  itemClassName,
  emptyClassName = "w-dyn-empty",
  emptyTextClassName,
}: ProjectGridProps) {
  return (
    <>
      <div role="list" className={`${listClassName} w-dyn-items`}>
        {projects.map((project) => (
          <WorkCard
            key={project._id}
            project={project}
            href={project.href}
            itemClassName={itemClassName}
          />
        ))}
      </div>
      {projects.length === 0 && (
        <div className={emptyClassName}>
          <div className={emptyTextClassName}>No items found.</div>
        </div>
      )}
    </>
  );
}
