import GalleryItem from '../GalleryItem/GalleryItem.jsx'

function GalleryList({ galleryList, imageLike }) {

    return (
        <>
            {galleryList.map(image => {
                return (<GalleryItem image={image} imageLike={(event) => { imageLike(event); }} />)
            })}
        </>
    )
}


export default GalleryList;


