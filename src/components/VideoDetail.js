import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div className='selected-video-container'>
      <div className='ui embed'>
        <iframe
          title='video player'
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
        />
      </div>
      <div className='ui segment'>
        <h4 className='header'>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
