import './ProductImages.scss'
import { ProductImagesThumb } from "../ProductImagesThumb/ProductImagesThumb";
import {useEffect, useState} from "react";

export const ProductImages= ({ images}) => {
  const [imagesList, setImagesList] = useState(images)
  const [image, setImage] = useState(images[1])
  const [imageId, setImageId] = useState('')

  useEffect(() => {
    const filteredImages = images.filter(imageSelected => imageSelected.id !== image.id)
    setImagesList(filteredImages)
  }, [imageId, image.id, images])

  const changeImage = (imageId) => {
    const newImage = images.find(image => image.id === imageId)
    setImage(newImage)
    setImageId(imageId)
  }

  return(
    <div className="image-container">
      <div className="image-container-main">
        <img src={image.url} alt="product_img" className="image-container-main__img"/>
      </div>
      <div className="image-container-thumbs">
        <ul className="image-container-thumbs__list">
          {imagesList.map((image) => (
            <li key={image.id}>
              <ProductImagesThumb image={image} changeImage={changeImage}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

}