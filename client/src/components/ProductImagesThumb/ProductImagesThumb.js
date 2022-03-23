import './ProductImagesThumb.scss'

export const ProductImagesThumb = ({ image, changeImage }) => (
  <div className="thumbnail-container" onClick={() => changeImage(image.id)}>
    <img src={image.url} alt="prod_img" className="thumbnail-container__image"/>
  </div>
)