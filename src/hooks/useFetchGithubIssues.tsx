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
  const [search, setSearch] = useState('')
  const [issues, setIssues] = useState<GithubIssue[]>([])

  async function getGithubIssue() {
    const query = search
      ? encodeURI(`${search} repo:newton-duarte/github-blog`)
      : ''

    try {
      const response = await githubApi.get(
        '/repos/newton-duarte/github-blog/issues',
        {
          params: {
            q: query,
          },
        },
      )
      setIssues(response.data)
    } catch (error) {
      console.log('Something went wrong', error)
    }
  }

  function updateSearch(term: string) {
    setSearch(term)
  }

  useEffect(() => {
    getGithubIssue()
  }, [search])

  return {
    issues,
    updateSearch,
  }
}
