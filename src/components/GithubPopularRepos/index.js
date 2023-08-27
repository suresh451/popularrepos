import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {
    repositoriesData: [],
    isLoading: false,
    activeId: languageFiltersData[0].id,
  }

  componentDidMount() {
    this.getRepositoriesData()
  }

  getRepositoriesData = async () => {
    const {activeId} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeId}`
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      const populaRepos = data.popular_repos
      const formattedData = populaRepos.map(eachItem => ({
        id: eachItem.id,
        name: eachItem.name,
        issuesCount: eachItem.issues_count,
        avatarUrl: eachItem.avatar_url,
        starsCount: eachItem.stars_count,
        forksCount: eachItem.forks_count,
      }))

      this.setState({repositoriesData: formattedData, isLoading: false})
    }
  }

  updateActiveId = activeId => {
    this.setState({activeId}, this.getRepositoriesData)
  }

  render() {
    const {repositoriesData, isLoading} = this.state
    return (
      <div className="main-div">
        <h1>Popular</h1>
        <ul className="ul-list">
          {languageFiltersData.map(eachData => (
            <LanguageFilterItem
              filterItemDetails={eachData}
              key={eachData.id}
              updateActiveId={this.updateActiveId}
            />
          ))}
        </ul>
        <div>
          {isLoading ? (
            <div className="products-loader-container" data-testid="loader">
              <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
            </div>
          ) : (
            <ul className="ul-list">
              {repositoriesData.map(eachRepo => (
                <RepositoryItem itemDetails={eachRepo} key={eachRepo.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default GithubPopularRepos
