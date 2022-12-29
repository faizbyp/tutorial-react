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
    },
    isUpdate: false
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
        this.setState({
          formBlogPost: {
            userId: 1,
            id: 1,
            title: '',
            body: ''
          },
        })
      }, (err) => {
        console.log('error: ', err)
      })
  }

  putDataToAPI = (data) => {
    axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
      .then((res) => {
        console.log(res)
        this.getPostAPI()
        this.setState({
          formBlogPost: {
            userId: 1,
            id: 1,
            title: '',
            body: ''
          },
          isUpdate: false
        })
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

  handleUpdate = (data) => {
    console.log(data)
    this.setState({
      formBlogPost: data,
      isUpdate: true
    })
  }

  handleFormChange = (event) => {
    console.log('breubah cuy')
    let formBlogPostNew = {...this.state.formBlogPost}
    let timestamp = new Date().getTime()
    if(!this.state.isUpdate){
      formBlogPostNew['id'] = timestamp // Buat id dengan timestamp agar unik
    }
    formBlogPostNew[event.target.name] = event.target.value // Memasukkan value ke dalam variabel sementara (sblm value masuk ke state)
    this.setState({
      formBlogPost: formBlogPostNew
    }, () => {
      console.log(this.state.formBlogPost)
    })
  }

  handleSubmit = () => {
    console.log('sambit coy')
    if(this.state.isUpdate){
      this.putDataToAPI()
    } else{
      this.postDataToAPI()
    }
  }

  handleCancel = () => {
    this.setState({
      formBlogPost: {
        userId: 1,
        id: 1,
        title: '',
        body: ''
      },
      isUpdate: false
    })
  }

  componentDidMount(){
    this.getPostAPI()
  }

  render() {
    return (
      <Fragment>
        <p className='section-title'>BlogPost</p>
        <div>
          {this.state.isUpdate ? <p>Update Data</p> : null}
          <label htmlFor="title">Title</label> <br />
          <input type="text" value={this.state.formBlogPost.title} name="title" placeholder='Type the title' onChange={this.handleFormChange} /> <br />
          <label htmlFor="body">Body</label> <br />
          <input type="text" value={this.state.formBlogPost.body} name="body" placeholder='Type your blog' onChange={this.handleFormChange} /> <br />
          <button type="submit" onClick={this.handleSubmit}>Simpan</button>
          {
            this.state.isUpdate
            ? <button type="submit" onClick={this.handleCancel}>Cancel</button>
            : null
          }
        </div>
        {
          this.state.post.map(post => {
            return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} />
          })
        }
      </Fragment>
    )
  }
}

export default BlogPost