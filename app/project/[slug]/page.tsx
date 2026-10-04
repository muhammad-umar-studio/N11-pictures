import { notFound } from "next/navigation";
import { ProjectDetail, getProjectBySlug } from "../ProjectDetail";

export default async function ProjectSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
