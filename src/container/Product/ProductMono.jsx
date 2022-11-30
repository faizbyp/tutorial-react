import React, { Component, Fragment } from 'react'
import './Product.css'

export class ProductMono extends Component {
  state = {
    order: 0
  }

  handlePlus = () => {
    this.setState({
      order: this.state.order + 1
    })
  }

  handleMinus = () => {
    if(this.state.order > 0){
      this.setState({
        order: this.state.order - 1
      })
    }
  }

  render() {
    return (
      <Fragment>
        <div className="header">
            <div className="logo">
                <img src="https://raw.githubusercontent.com/faizbyp/keindahan-alam/master/img/fb-black.svg" alt="" />
            </div>
            <div className="troley">
                <img src="https://raw.githubusercontent.com/faizbyp/keindahan-alam/master/img/emerald.svg" alt="" />
                <div className="count">{this.state.order}</div>
            </div>
        </div>
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
      </Fragment>
    )
  }
}

export default ProductMono