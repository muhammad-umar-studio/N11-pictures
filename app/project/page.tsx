import { notFound } from "next/navigation";
import { ProjectDetail, getProjectBySlug } from "./ProjectDetail";

type SearchParams = {
  slug?: string | string[];
};

export default async function ProjectPage({
  searchParams,
}: {
  searchParams?: Promise<SearchParams> | SearchParams;
}) {
  const params = searchParams ? await Promise.resolve(searchParams) : {};
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
