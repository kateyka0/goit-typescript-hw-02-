import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import axios from 'axios';
import './App.css';
import { Image } from './types'; // Import the interface

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(false);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=HTOowemuFyO0qOqT2X65pwniYefQn2yCUa0rkzU8ppE`
        );
        setImages((prevImages) => [...prevImages, ...response.data.results]);
        setHasMore(response.data.results.length > 0);
      } catch (error) {
        setError('Something went wrong. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {error && <ErrorMessage text={error} />}
      {loading && <Loader />}
      {hasMore && !loading && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal
        image={selectedImage}
        isOpen={!!selectedImage}
        onRequestClose={handleCloseModal}
      />
    </div>
  );
};

export default App;


