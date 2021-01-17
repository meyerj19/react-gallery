import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';


function App() {

  const [galleryList, setGalleryList] = useState([]);
  const [imagePath, setImagePath] = useState();
  const [imageLike, setImageLike] = useState();




  const fetchGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
      .then((response) => {
        console.log('Entire response:', response);
        console.log('Just the data:', response.data);

        setGalleryList(response.data);
      })
      .catch(function (error) {
        console.log('Error on get:', error);
      });
  }
  useEffect(() => {
    fetchGallery();
  }, [])

  const handleLike = (id) => {

    axios({
      method: 'PUT',
      url: `/gallery/like/` +id
    })
      .then((response) => {
        console.log('Response:', response);
        fetchGallery();

        setImagePath('');
        setImageLike('')
      })
      .catch(function (error) {
        console.log('Error on add:', error);
      });
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>
        <GalleryList galleryList={galleryList} imageLike={handleLike} />
      </p>
    </div>
  );
}

export default App;
