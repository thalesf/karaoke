import React from 'react';
import ReactPlayer from 'react-player'
// import SpeechRecognition from './speech';
import SpeechRecognition from "react-speech-recognition";


const VoiceRecorder = ({
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition,
  children,
  text
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  setTimeout(() => {
    resetTranscript()
  }, 20000);


  return (
    <div>
      <button onClick={resetTranscript}>Reset</button>
      {children}
      <span>{transcript}</span>
    </div>
  );
};

export const Phone = SpeechRecognition(VoiceRecorder);


class App extends React.Component {

  state = {
    play: true,
    text: ''
  }


  componentDidMount() {
    setTimeout(() => {
      this.setState({
        text: 'Ah, por que estou tão sozinho?'
      })
    }, 40000);

    setTimeout(() => {
      this.setState({
        play: false,
        text: 'Ah, ___ ___ ____ _____?'
      })
    }, 50000);
  }

  render() {
    return (
      <div className="App">
        <ReactPlayer url='https://www.youtube.com/watch?v=2XT5wvoMMyc' playing={this.state.play} />
        <Phone text={this.state.text}>
          <h2>{this.state.text}</h2>
        </Phone>
        {/* <button id="start">Click and say something!</button> */}
      </div>
    )
  }

}

export default App;
