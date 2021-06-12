import './App.css';
import { Component } from 'react';


class BookmarkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      title: '',
      tag: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleAddBlogPost = this.handleAddBlogPost.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });

  }

  handleAddBlogPost(event){
  event.preventDefault();
  this.props.addBlogPost({
    url: this.state.url,
    title: this.state.title,
    tag: this.state.tag,
  })
  }

  render() {
    return(
      <form onSubmit={this.handleAddBlogPost}>
        <input type="url" name="url" placeholder="Enter the blog's url" value={this.state.url} onChange={this.handleInput}/>
        <input type="text" name="title" placeholder="Enter the blog's title" value={this.state.title} onChange={this.handleInput}/>
        <input type="text" name="tag" placeholder="Enter #tag" value={this.state.tag} onChange={this.handleInput}/>
        <button type='submit'>Add Blog Post</button>
      </form>
    )
  }
}

function BlogList(props) {
  const blogs = props.blogs.map((blog) =>(
    <li key={blog.url}>
      <div>
        <h3><a href={blog.url}>{blog.title}</a></h3>
      </div>
    </li>
  ));
  return(
    <ul>{blogs}</ul>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogList: [],
      filter: null,
    }
    this.addBlogPost = this.addBlogPost.bind(this)
  }

  addBlogPost(blog){
    const blogList = [ ...this.state.blogList];
    blogList.push(blog);
    this.setState( {blogList} )
  }

  componentDidMount() {
    const blogList = [
      {url: 'https://www.huffpost.com/', title: 'Huffington Post', tag: '', tag: 'business'},
      {url: "https://boingboing.net/", title: 'Boing Boing', tag: 'adventure'},
      {url: "https://techcrunch.com/", title: 'Techcrunch', tag: 'technology'},
    ];
    this.setState({ blogList })
  }

  render() {
    const tags = this.state.blogList.map(blog => blog.tag);
    const groupedTags = [ ...new Set(tags)];
    const tagLinks = groupedTags.map((tag, index)=> <button key={index} onClick={() => this.setState({filter: tag})}>{tag.toUpperCase()}</button>)
    const blogList = this.state.filter ? this.state.blogList.filter(blog => blog.tag === this.state.filter) : this.state.blogList;
    return (
      <>
      {tagLinks}
      <button onClick={() => this.setState( {filter: null}) }>ALL</button>
      <BookmarkForm addBlogPost={this.addBlogPost}/>
      <BlogList blogs={blogList}/>
      </>
    )
  }
}

export default App;
