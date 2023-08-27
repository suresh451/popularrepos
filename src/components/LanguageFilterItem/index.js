// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {filterItemDetails, updateActiveId} = props
  const {language, id} = filterItemDetails

  const clickOnId = () => {
    updateActiveId(id)
  }

  return (
    <li>
      <button type="button" onClick={clickOnId}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
