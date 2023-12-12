import React from 'react';
import ReactPlayer from 'react-player'
//import video from '../../assets/Video.mp4'
//import '/styles/style.css'; // Make sure the path matches your CSS file location

const MyPlayer = () => {
  return (
    <div className='video-container relative w-90 max-w-1000 mx-auto'>
      {/* Add your video element here */}
      <video controls>
        <source src='./assets/Video.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Add the video controls container */}
      <div className="video-controls-container absolute bottom-0 left-0 right-0 text-white z-10 opacity-0 transition-opacity duration-150 ease-in-out">
        {/* Add the rest of your HTML content here */}
        {/* Ensure to replace class names with Tailwind CSS utility classes */}
      </div>
    </div>
  );
};

export default MyPlayer;