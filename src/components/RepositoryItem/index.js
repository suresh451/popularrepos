// Write your code here

import './index.css'

const RepositoryItem = props => {
  const {itemDetails} = props
  const {avatarUrl, name, starsCount, forksCount, issuesCount, id} = itemDetails

  return (
    <li className="list-item">
      <img src={avatarUrl} className="img" alt={name} />
      <h1>{name}</h1>
      <p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          className="item-img"
          alt="stars"
        />
        {starsCount}
      </p>
      <p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          className="item-img"
          alt="forks"
        />
        {forksCount}
      </p>
      <p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          className="item-img"
          alt="open issues"
        />
        {issuesCount}
      </p>
    </li>
  )
}

export default RepositoryItem
