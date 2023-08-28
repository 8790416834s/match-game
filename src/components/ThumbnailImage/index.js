import './index.css'

const ThumbnailImage = props => {
  const {imagesDetails, clickThumbnail} = props
  const {imageUrl, thumbnailUrl} = imagesDetails

  const onClickThumbnail = () => {
    clickThumbnail(imageUrl)
  }

  return (
    <li className="thumbnail-list-item">
      <div className="thumbnail-container">
        <button
          type="button"
          onClick={onClickThumbnail}
          className="thumbnail-btn"
        >
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
        </button>
      </div>
    </li>
  )
}
export default ThumbnailImage
