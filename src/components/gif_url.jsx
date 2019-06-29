import React from 'react';

const GifUrl = (props) => {

  const src = `https://media.giphy.com/media/${props.id}/giphy.gif`;

  return (
    <div>
      <a href={src} target="_blank" className="url">{src}</a>
    </div>
  );
};

export default GifUrl;
