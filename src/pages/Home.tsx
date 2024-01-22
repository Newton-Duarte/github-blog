import { Posts } from '../components/Posts'
import { Profile } from '../components/Profile'
import { useFetchGithubIssues } from '../hooks/useFetchGithubIssues'
import { useFetchGithubUser } from '../hooks/useFetchGithubUser'

export function Home() {
  const { user } = useFetchGithubUser()
  const { issues } = useFetchGithubIssues()

  return (
    <>
      <Profile user={user} />
      <Posts posts={issues} />
    </>
  )
}
