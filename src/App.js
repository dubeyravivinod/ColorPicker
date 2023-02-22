import './App.css';
import ColorPicker from './Components/ColorPicker';

function App() {
  return (
    <div className="App">
      <ColorPicker color="#ff6663" colorCode="#ff6663" name="pink" />
      <ColorPicker color="#333333" colorCode="#333333" name="Gray" />
      <ColorPicker color="#000000" colorCode="#000000" name="Black" />
      <ColorPicker color="#38bb14" colorCode="#38bb14" name="Green" />
      <ColorPicker color="#c90b0b" colorCode="#c90b0b" name="Red" />
      <ColorPicker color="#ff8000" colorCode="#ff8000" name="Orange" />
      <ColorPicker color="#fff500" colorCode="#fff500" name="Yellow" />
      <ColorPicker color="#cccccc" colorCode="#cccccc" name="Light-Grey" />
      <ColorPicker color="#fe41a2" colorCode="#fe41a2" name="purple" />
      <ColorPicker color="#c14911" colorCode="#c14911" name="Brown" />
    </div>
  );
}

export default App;
