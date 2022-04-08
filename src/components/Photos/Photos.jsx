import '../Photos/Photos.scss';

export const Photos = () => {
  return (
    <>
      <div className="photos">
        <h1 className="photos__title">Photos Page</h1>
        <input placeholder='input id' className="photos__input" type="text" />
        <button className="photos__btn">Get Photos</button>
      </div>
    </>
  )
};
