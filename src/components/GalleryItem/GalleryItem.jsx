import { useState } from 'react';


function GalleryItem(galleryItem) {
    const imageLike = galleryItem.imageLike
    const image = galleryItem.image
    const [showImage, setShowImage] = useState(true);
    const handleImageClick = () => {
        setShowImage(!showImage)
    }
    console.log('g', galleryItem);
    return (
        <>
            {showImage ? <img src={image.path} onClick={handleImageClick} /> : <span onClick={handleImageClick}>{image.description}</span> }
            <button onClick={ () =>  imageLike(image.id) }>Like It!</button>
            <p>{image.likes} People love this!</p>
        </>
    )
}

export default GalleryItem