import './App.css';
import React from 'react';
import {FaQuoteRight} from "react-icons/fa";
import ReactPaginate from 'react-paginate';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      elements: [],
      offset: 0,
      // data: [],
      perPage: 12,
      currentPage: 0
    };

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(data => {

        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);

        const postData = slice.map((item, index) => {
          return (
            <div className = "card">
              {/* <p>{item.text}</p> */}
              <div className = "quoteText" key={index}>{item.text}</div><br></br>
              <div className = "quoteAuthor">- {item.author}</div>
            </div>
          );
        });

        this.setState({
          elements: data,
          pageCount: Math.ceil(data.length / this.state.perPage),
          postData
        });
      })
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;
    
    this.setState({
      currentPage: selectedPage,
      offset: offset
    }, () => {
      this.fetchData()
    });
    
    // to scroll page to the top when clicked
    window.scrollTo(0,0);

  };

  render() {
    // style = {{backgroundImage: `url(${backgroundImage})`}} inside card
    return (
      <div>
        <div className = "topContainer">
          <div>Quotes from great personalities</div>
          {/* <div>Button</div> */}
          <FaQuoteRight />
        </div>
        <div>
          <div className = "grid">
            {this.state.postData}
          </div>
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}/>
        </div>
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
