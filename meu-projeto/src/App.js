
import './App.css';
import SayMyName from './Components/SayMyName';
import Pessoa from './Components/Pessoa';

function App() {
  const nome = "Heitor"
  return (
    <div className="App">
      
      <SayMyName nome="Sanderson"/>
      <SayMyName nome="Melanie"/>
      <SayMyName nome="Maria"/>
      <SayMyName nome={nome}/>
      <Pessoa 
      nome="Sanderson"
      idade="34"
      profissão="Vendedor"
      foto="https://via.placeholder.com/150"
      />
    </div>
  );
}
 



export default App;
