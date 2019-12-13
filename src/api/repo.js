import request from './index'

export const getRepos = keyword => {
  return request.get(
    `https://api.github.com/search/repositories?q=${keyword}&sort=stars&order=desc`
  )
}
