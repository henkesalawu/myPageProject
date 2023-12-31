import React, { useState, useRef} from 'react';
import './MusicDance.css';
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';
import tracks from '../../../constants/data/tracks';
import TopBar from './TopBar';


function MusicDance() {
    const [trackIndex, setTrackIndex] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);

   const [timeProgress, setTimeProgress] = useState(0);
   const [duration, setDuration] = useState(0);


   const audioRef = useRef();
   const progressBarRef = useRef();
   
   const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
        setTrackIndex(0);
        setCurrentTrack(tracks[0]);
    }else {
        setTrackIndex((prev) => prev +1);
        setCurrentTrack(tracks[trackIndex + 1]);
    }
   }
    
    return(
        <>
            <TopBar />
    <div className='audioplayer'>
    <div className='inside-content'>
    <DisplayTrack 
    {...{ currentTrack, audioRef, setDuration, progressBarRef, handleNext}} />
    <Controls 
    {...{
        audioRef, 
        progressBarRef, 
        duration, 
        setTimeProgress,
        tracks,
        trackIndex,
        setTrackIndex,
        setCurrentTrack,
        handleNext,
    }}
     />
    <ProgressBar 
    {...{ progressBarRef, audioRef, timeProgress, duration }} />

    </div>

    
    </div>
    </>
    );
}

export default MusicDance;
