import React from 'react';
import './App.css';
import Button from './components/Button/Button';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {counter: 0};
  }

  render() {
    return <div className="App">
      <div style={{textAlign:'center',}}> Valeur de COUNTER {this.counter}</div>
      <Button 
        text="Ajouter 1" 
        bgcolor = "skyblue" 
        onButtonClicked = {()=>{
            this.setState({counter: this.state.counter+1}) 
            console.log(this.state.counter)
          }}

          />
      <Button 
        text="Soustraire 1" 
        bgcolor = "tomato" 
        onButtonClicked = {()=>{
            this.setState({counter: this.state.counter-1}) 
            console.log(this.state.counter)
          }}

          />
    </div>;
  }
}

export default App;
