import React, { useEffect } from 'react';
import Modal from 'react-modal';
import css from './ImageModal.module.css'

const ImageModal = ({ image, isOpen, onRequestClose }) => {
  // Використання useEffect для обробки події натискання ESC
  useEffect(() => {
    const handleEsc = (event) => {
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
      <img src={image?.urls?.regular} alt={image?.alt} className={css.modalImage} />
    </Modal>
  );
};

// Налаштування React Modal для рендерингу в певний елемент
Modal.setAppElement('#root');

export default ImageModal;

