import ProjectsPage from '@/components/pages/projects/ProjectsPage'
import { loadProjects } from '@/sanity/loader/loadQuery'

export default async function Projects() {
  const projects = await loadProjects()

  return <ProjectsPage projects={projects.data} />
}
