import React from 'react';
import css from './ImageCard.module.css';

interface Image {
  urls: {
    small: string;
  };
  alt_description: string;
}

interface ImageCardProps {
  image: Image;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={css.card} onClick={onClick}>
      <img className={css.img} src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageCard;

