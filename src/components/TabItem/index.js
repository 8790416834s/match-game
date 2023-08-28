import './index.css'

const TabItem = props => {
  const {tabsList, clickTab, isActive} = props
  const {tabId, displayText} = tabsList

  const onTabClick = () => {
    clickTab(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-list-item">
      <div className="button-container">
        <button
          type="button"
          onClick={onTabClick}
          className={`tab-button ${activeTabClassName}`}
        >
          {displayText}
        </button>
      </div>
    </li>
  )
}
export default TabItem
