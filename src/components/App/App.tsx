import Colors from '../Colors/Colors';
import DirectionButtons from '../DirectionButtons/DirectionButtons';
import Gradient from '../Grandient/Gradient';
import NbColors from '../NbColors/NbColors';
import RandomButtons from '../RandomButtons/RandomButtons';

function App() {
  return (
    <div className="app">
      <NbColors />

      <RandomButtons />

      <Colors />

      <Gradient />

      <DirectionButtons />
    </div>
  );
}

export default App;
