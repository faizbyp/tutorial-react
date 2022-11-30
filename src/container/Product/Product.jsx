import React, { Component, Fragment } from 'react'
import CardProduct from './CardProduct'
import './Product.css'

export class Product extends Component {
  state = {
    order: 0
  }

  handleCounterChange = (newValue) => {
    this.setState({
        order: newValue // Nilai order diubah sesuai dengan nilai dari parameter props onCunterChange
    })
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

        {/* Props onCounterChange dikirimi nilai `this.state.order` dari CardProduct */}
        <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
      </Fragment>
    )
  }
}

export default Product