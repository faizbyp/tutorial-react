import React, { Component, Fragment } from 'react'
import Post from '../Post/Post'
import './BlogPost.css'
import axios from 'axios'

export class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      userId: 1,
      id: 1,
      title: '',
      body: ''
    }
  }

  getPostAPI = () => {
    axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
      .then((res) => {
        this.setState({
          post: res.data
        })
      })
  }

  postDataToAPI = () => {
    axios.post('http://localhost:3004/posts', this.state.formBlogPost)
      .then((res) => {
        console.log(res)
        this.getPostAPI()
      }, (err) => {
        console.log('error: ', err)
      })
  }

  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`)
    .then((res) => {
      this.getPostAPI()
    })
  }

  handleFormChange = (event) => {
    console.log('breubah cuy')
    let formBlogPostNew = {...this.state.formBlogPost}
    let timestamp = new Date().getTime()
    formBlogPostNew['id'] = timestamp // Buat id dengan timestamp agar unik
    formBlogPostNew[event.target.name] = event.target.value // Memasukkan value ke dalam variabel sementara (sblm value masuk ke state)
    this.setState({
      formBlogPost: formBlogPostNew
    }, () => {
      console.log(this.state.formBlogPost)
    })
  }

  handleSubmit = () => {
    console.log('sambit coy')
    this.postDataToAPI()
  }

  componentDidMount(){
    this.getPostAPI()
  }

  render() {
    return (
      <Fragment>
        <p className='section-title'>BlogPost</p>
        <div>
          <label htmlFor="title">Title</label> <br />
          <input type="text" name="title" placeholder='Type the title' onChange={this.handleFormChange} /> <br />
          <label htmlFor="body">Body</label> <br />
          <input type="text" name="body" placeholder='Type your blog' onChange={this.handleFormChange} /> <br />
          <button type="submit" onClick={this.handleSubmit}>Simpan</button>
        </div>
        {
          this.state.post.map(post => {
            return <Post key={post.id} data={post} remove={this.handleRemove} />
          })
        }
      </Fragment>
    )
  }
}

export default BlogPost