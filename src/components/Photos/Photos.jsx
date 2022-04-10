import { useState } from 'react';
import classnames from 'classnames'

import '../Photos/Photos.scss';

const BASE_URL = 'https://jsonplaceholder.typicode.com/photos?albumId=';

export const Photos = () => {
  const [items, setItems] = useState([]);
  const [photoId, setPhotoId] = useState('');
  const [photoIdError, setPhotoIdError] = useState(false);

  const handleChange = (e) => {
    setPhotoId(e.target.value);
  }

  const setId = () => {
    if (photoId > 0 && photoId <= 100) {
      setPhotoIdError(false);
      fetch(`${BASE_URL}${photoId}`)
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
          },
        )
    }
    else {
      setPhotoIdError(true);
    }
  };

  return (
    <div className="photos">
      <h1 className="photos__title">Photos Page</h1>
      <input
        placeholder='Enter a number from 0 to 100'
        className={classnames('photos__input', { 'photos__input--error': photoIdError })}
        type="number"
        min={1}
        max={100}
        value={photoId}
        onChange={handleChange}
      />
      <button
        typeof="button"
        className="photos__btn"
        onClick={setId}
      > Get Photos
      </button>
      <ul>
        {items.map(item => (
          <img src={item.thumbnailUrl} alt={item.id} />
        ))}
      </ul>
    </div >
  );
}
