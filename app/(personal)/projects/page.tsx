import ProjectsPage from '@/components/pages/projects/ProjectsPage'
import { loadProjects } from '@/sanity/loader/loadQuery'

export default async function Projects() {
  const projects = await loadProjects()
  console.log('projects:', projects.data)
  return <ProjectsPage projects={projects.data} />
}
