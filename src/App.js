import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { render } from '@testing-library/react';
import backgroundImage from './images/card-img.jpg';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      elements: []
    }
  }

  componentDidMount() {
    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(data => {
        this.setState({
          elements: data
        });
      })
  }

    render() {
      return (
        <div className = "grid">
          {this.state.elements.length && this.state.elements.map((item, index) => {
            return (
              <div className = "card" style = {{backgroundImage: `url(${backgroundImage})`}}> 
              {/* <img className = "card" src = "/card-img.jpg"/> */}
                <div className = "quoteText" key={index}>{item.text}</div><br></br>
                <div className = "quoteAuthor">- {item.author}</div>
              </div>
            );
          })}
        </div>
      );
    }
    

  
}

export default App;


  // const [userData, setUserData] = useState({});

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // async function fetchData() {
  //   const response = await fetch('https://type.fit/api/quotes');
  //   const jsonData = await response.json();
  //   setUserData(jsonData)
  // }


  
  
  // for(let i = 0; i < 20; i++){
  //   elements.push(
  //     <div className = "item">item {0}</div>
  //     );
  //   }
