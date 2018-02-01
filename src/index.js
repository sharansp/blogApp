import React from 'react';
import ReactDOM from 'react-dom';
//import ChatBot from 'react-simple-chatbot';
//import './index.css';
import TopNav from "./components/Header/TopNav";

class Bot extends React.Component{
  /*constructor(props){
    super();
  }*/
  render(){
    return(
      <h1><TopNav/></h1>
    )

  }
    

}


ReactDOM.render(
  <Bot />,
  document.getElementById('root')
); 