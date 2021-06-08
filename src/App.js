import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogList: [], 
    }
  }

  componentDidMount() {
    const blogList = [
      {
        url: 'huffingtonpost.com', title: 'Huffington Post', tag: '',
      },
      {
        url: 'boingboing.net', title: 'Boing Boing', tag: '',
      },
      {
        url: 'techcrunch.com', title: 'Techcrunch', tag: '',
      },
    ]
  }

  render() {
    return (
      <>
        <form action="">
          <input type="text" placeholder="Enter the blog's url"/>
          <input type="text" placeholder="Enter the blog's title"/>
          <input type="text" placeholder="Enter #tag"/>
        </form>
      </>
    )
  }
}

export default App;
