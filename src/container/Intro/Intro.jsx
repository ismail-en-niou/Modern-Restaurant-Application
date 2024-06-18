import React from 'react';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const vidRef = React.useRef();

  React.useEffect(() => {
    if (vidRef.current) {
      vidRef.current.play();
    }
  }, []);

  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        muted
        autoPlay
        controls={false}
      />
     
    </div>
  );
};

export default Intro;
