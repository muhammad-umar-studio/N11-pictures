import { notFound, redirect } from "next/navigation";
import { getProjectBySourcePath, ProjectDetail } from "../../project/ProjectDetail";

export default async function LegacyProjectPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;

  if (category === "work" && slug === "our-work") redirect("/work");
  if (category === "contact" && slug === "contact-us") redirect("/contact");

  const project = await getProjectBySourcePath(category, slug);
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
