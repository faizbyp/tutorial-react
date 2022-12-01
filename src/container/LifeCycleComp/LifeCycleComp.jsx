import React, { Component } from 'react'
import './LifeCycleComp.css'

export class LifeCycleComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
        console.log('constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('componentDidMount')
        setTimeout(() => {
            this.setState({
                count: '2 (Berubah)'
            })
        }, 5000)

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

  render() {
    return (
      <button className='btn'>CompButton {this.state.count}</button>
    )
  }
}

export default LifeCycleComp