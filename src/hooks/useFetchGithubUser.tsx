import { useEffect, useState } from 'react'
import { githubApi } from '../lib/github-api'

export type GithubUser = {
  avatar_url: string
  bio: string
  name: string
  blog: string
  followers: number
  html_url: string
  location: string
  login: string
  public_repos: number
  company: string
}

export function useFetchGithubUser() {
  const [user, setUser] = useState<GithubUser>({} as GithubUser)

  async function getGithubUser() {
    try {
      const response = await githubApi.get('/users/newton-duarte')
      setUser(response.data)
    } catch (error) {
      console.log('Something went wrong', error)
    }
  }

  useEffect(() => {
    getGithubUser()
  }, [])

  return {
    user,
  }
}
