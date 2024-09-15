import React, { useEffect } from 'react';
import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { Image } from '../../types'; // Import the consistent interface

interface ImageModalProps {
  image: Image | null;
  isOpen: boolean;
  onRequestClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, isOpen, onRequestClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onRequestClose();
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onRequestClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      {image ? (
        <img src={image.urls.regular} alt={image.alt_description} className={css.modalImage} />
      ) : (
        <p>No image available</p>
      )}
    </Modal>
  );
};

Modal.setAppElement('#root');

export default ImageModal;
