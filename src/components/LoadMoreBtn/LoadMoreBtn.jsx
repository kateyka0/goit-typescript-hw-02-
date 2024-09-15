import React from 'react';
import css from './LoadMoreBtn.module.css'
const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={css.more}>
      <button className={css.loadMoreBtn} onClick={onClick}>
      Load more
    </button>
    </div>
    
  );
};

export default LoadMoreBtn;
