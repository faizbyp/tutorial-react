import React, { Component } from 'react'
import './Product.css'

export class Product extends Component {
  state = {
    order: 0
  }

  handleCounterChangeCard = (newValue) => {
    this.props.onCounterChange(newValue) // Mengirim nilai parameter ke props
  }

  handlePlus = () => {
    this.setState({
      order: this.state.order + 1
    }, () => {
      this.handleCounterChangeCard(this.state.order) // Mengirim nilai parameter ke `handleCounterChangeCard`
    })

  }

  handleMinus = () => {
    if(this.state.order > 0){
      this.setState({
        order: this.state.order - 1
      }, () => {
        this.handleCounterChangeCard(this.state.order) // Mengirim nilai parameter ke `handleCounterChangeCard`
      })
    }
  }

  render() {
    return (
        <div className="card">
            <div className="img-thumb-prod">
                <img src="https://raw.githubusercontent.com/faizbyp/keindahan-alam/master/img/calum-lewis-srxmFx025MI-unsplash.jpg" alt="" />
            </div>
            <p className="product-title">Lada Pulau Bintan</p>
            <p className="product-price">Rp.40.000</p>
            <div className="counter">
                <button className="minus" onClick={this.handleMinus}>-</button>
                <input type="text" value={this.state.order} />
                <button className="plus" onClick={this.handlePlus}>+</button>
            </div>
        </div>
    )
  }
}

export default Product