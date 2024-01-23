import { useEffect, useState } from 'react'
import { githubApi } from '../lib/github-api'
import { GithubUser } from './useFetchGithubUser'

export type GithubIssue = {
  id: number
  number: number
  title: string
  body: string
  html_url: string
  comments: number
  updated_at: string
  user: GithubUser
}

export function useFetchGithubIssues() {
  const [issues, setIssues] = useState<GithubIssue[]>([])

  async function getGithubIssue() {
    try {
      const response = await githubApi.get(
        '/repos/newton-duarte/github-blog/issues',
      )
      setIssues(response.data)
    } catch (error) {
      console.log('Something went wrong', error)
    }
  }

  useEffect(() => {
    getGithubIssue()
  }, [])

  return {
    issues,
  }
}
