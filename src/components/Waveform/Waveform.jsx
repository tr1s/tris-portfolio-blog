import React from 'react';
import { peaks } from '../peaks.js';
import WaveSurfer from 'wavesurfer.js';

import rain from '../../assets/audio/nightizm-ambient-rain.mp3';
import play from '../../assets/images/play.svg';
// import pause from '../../assets/images/pause.svg';

import waveformStyles from './Waveform.module.scss';

class Waveform extends React.Component {
  componentDidMount() {
    const audio = document.querySelector('#song');

    this.wavesurfer = WaveSurfer.create({
      barWidth: 4,
      cursorWidth: 1,
      container: '#waveform',
      backend: 'MediaElement',
      height: 80,
      progressColor: '#2D5BFF',
      responsive: true,
      waveColor: '#333333',
      cursorColor: 'transparent',
    });

    this.wavesurfer.load(audio, peaks);
    console.log(peaks.length);
  }

  playIt = () => {
    this.wavesurfer.playPause();
  };

  render() {
    return (
      <div className={waveformStyles.container}>
        <button onClick={this.playIt}>
          <img src={play} alt=""/>
        </button>
        <div id="waveform" />
        {/* eslint-disable jsx-a11y/media-has-caption */}
        <audio
          id="song"
          // src="https://reelcrafter-east.s3.amazonaws.com/aux/test.m4a"
          src={rain}
        />
      </div>
    );
  }
}

export default Waveform;
