import React, {useRef, useState} from 'react';
// import logo from './logo.svg';
import './App.css';

function PlayButton(props) {
    const className = props.isMusicPlaying ? 'play active' : 'play';
    return <a onClick={props.onClick} href="#" title="Play video" className={className} />;
}

function Header() {
    return <h1>Play Music</h1>;
}

function LoadFiles() {
  return <input type="file" id="files" name="files[]" multiple />;
}
// function ImageUpload() {
//     const [file, setFile] = useState('');
//     const [imagePreviewUrl, setImagePreviewUrl] = useState('');
//
//     const _handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('handle uploading-', file);
//     }
//
//     const _handleImageChange = (e) => {
//         e.preventDefault();
//
//         let reader = new FileReader();
//         let newFile = e.target.files[0];
//
//
//         reader.onloadend = () => {
//             // установить новое состояние file
//             setFile(newFile);
//             // установить новое состояние imagePreviewUrl
//             setImagePreviewUrl(reader.result);
//         }
//
//         reader.readAsDataURL(file)
//     }
//
//     return (
//         <div className="previewComponent">
//             <form onSubmit={(e)=>_handleSubmit(e)}>
//                 <input className="fileInput"
//                        type="file"
//                        onChange={(e)=>_handleImageChange(e)} />
//             </form>
//         </div>
//     );
// }

// class ImageUpload extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {file: '',imagePreviewUrl: ''};
//   }
//
//   _handleSubmit(e) {
//     e.preventDefault();
//     console.log('handle uploading-', this.state.file);
//   }
//
//   _handleImageChange(e) {
//     e.preventDefault();
//
//     let reader = new FileReader();
//     let file = e.target.files[0];
//
//     reader.onloadend = () => {
//       this.setState({
//         file: file,
//         imagePreviewUrl: reader.result
//       });
//     }
//
//     reader.readAsDataURL(file)
//   }
//
//   render() {
//     let {imagePreviewUrl} = this.state;
//     return (
//         <div className="previewComponent">
//           <form onSubmit={(e)=>this._handleSubmit(e)}>
//             <input className="fileInput"
//                    type="file"
//                    onChange={(e)=>this._handleImageChange(e)} />
//           </form>
//         </div>
//     )
//   }
// }

function App() {
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);
    const audio = useRef(null);

    const handleClick = () => {
        if (isMusicPlaying) {
            audio.current.pause();
        } else {
            audio.current.play();
        }

        //Обновить состояние isMusicPlaying на противоположное
        setIsMusicPlaying(!isMusicPlaying);
    };
        return (
            <div>
                <PlayButton
                    onClick={handleClick.bind(this)}
                    isMusicPlaying={isMusicPlaying}
                />
                <Header />
                <audio id="audio" ref={audio} />
                {/*<LoadFiles/>*/}
            </div>
        );
}

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { isMusicPlaying: false };
//     }
//     handleClick() {
//         if (this.state.isMusicPlaying) {
//             this.audio.pause();
//         } else {
//             this.audio.play();
//         }
//         this.setState(prevState => {
//             return {
//                 isMusicPlaying: !prevState.isMusicPlaying
//             };
//         });
//     };
//     render() {
//         return (
//             <div>
//                 <PlayButton
//                     onClick={this.handleClick.bind(this)}
//                     isMusicPlaying={this.state.isMusicPlaying}
//                 />
//                 <Header />
//                 <audio id="audio" ref={(audioTag) => { this.audio = audioTag }} />
//                 {/*<LoadFiles/>*/}
//                 <ImageUpload />
//             </div>
//         );
//     }
// }

export default App;
