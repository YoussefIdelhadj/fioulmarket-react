import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      Youssef IDEL <br/>

      <Button text="Hello" 
        onButtonClicked={() => {console.log();}}
        bgcolor = "tomato"
        color = "green"
        />
      <Button text="Button value" onButtonClicked={() => {console.log();}}/>
      <Button text="Click here" onButtonClicked={() => {console.log();}}/>
    </div>
  );
}

export default App;
