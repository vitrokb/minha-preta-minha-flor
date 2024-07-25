import { Typography } from '@mui/material';
import YouTube from 'react-youtube';
import './VideoPlayer.css';

interface VideoPlayerProps {
  title: string;
  videoId: string;
}

function VideoPlayer({ title, videoId }: VideoPlayerProps) {
  return (
    <div className="videoplayer-wrapper">
      <Typography variant="h6" sx={{ fontWeight: '700' }}>
        {title}
      </Typography>
      <YouTube
        videoId={videoId}
        id={videoId}
        opts={{ height: window.innerHeight * 0.6, width: window.innerWidth * 0.8 }}
      />
    </div>
  );
}

export default VideoPlayer;
