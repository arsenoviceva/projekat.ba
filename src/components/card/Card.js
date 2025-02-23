export const Card = ({
  src,
  text,
  onClickHandler,
  id,
  imgFolder,
  imgCount,
}) => {
  return (
    <div className="card" onClick={() => onClickHandler(imgFolder, imgCount)}>
      <div>
        <img src={src} className="card-img" />
      </div>
      <p className="card-text"> {text} </p>
    </div>
  );
};
