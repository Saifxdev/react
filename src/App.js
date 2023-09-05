import './App.css'; 
import Compn from './components/Comp';
import En from './components/Event';
import Prop from './components/Prop';
import R2 from './components/Render';
//import Prop from './components/Prop';
//import Comp1 from './components/Comp'; 
 
function App() {
  return (
    <div className="App">
       <Compn/>
        <Prop/>
        <R2/>
        <En/>
    </div>
  );
}

export default App;
