import { useEffect, useState } from 'react'
import { githubApi } from '../lib/github-api'
import { GithubIssue } from './useFetchGithubIssues'

type UseFetchGithubIssuesProps = {
  issueNumber: number
}

export function useFetchGithubIssueById({
  issueNumber,
}: UseFetchGithubIssuesProps) {
  const [issue, setIssue] = useState<GithubIssue>()

  async function getGithubIssue() {
    try {
      const response = await githubApi.get(
        `/repos/newton-duarte/github-blog/issues/${issueNumber}`,
      )
      setIssue(response.data)
    } catch (error) {
      console.log('Something went wrong', error)
    }
  }

  useEffect(() => {
    getGithubIssue()
  }, [])

  return {
    issue,
  }
}
