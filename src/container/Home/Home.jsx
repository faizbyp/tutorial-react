import React, { Component } from 'react'
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp'
// import YoutubeComp from '../../component/YoutubeComp/YoutubeComp'
// import Product from '../Product/Product'

export class Home extends Component {
  state = {
    showComponent: true
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     showComponent: false
    //   })
    // }, 7000)
  }

  render() {
    return (
      <div>
        {/* <h2>Youtube Components</h2>
        <hr />
        <YoutubeComp 
            img='https://raw.githubusercontent.com/faizbyp/keindahan-alam/master/img/calum-lewis-srxmFx025MI-unsplash.jpg'
            time='12.34' 
            title='Anjay 123 Bro' 
            desc='Ini video anjay' />
        <YoutubeComp 
            img='https://raw.githubusercontent.com/faizbyp/keindahan-alam/master/img/david-clode-o-S8EiQVo_g-unsplash.jpg'
            time='22.22' 
            title='Video Kedua' 
            desc='222.222.222.222' />
        <YoutubeComp 
            img='https://raw.githubusercontent.com/faizbyp/keindahan-alam/master/img/sutirta-budiman-DxmBSgUYKis-unsplash.jpg'
            time='06.43' 
            title='Tiga Bersaudara' 
            desc='ksdjlakdjlasfh' />
        <YoutubeComp 
            img='https://raw.githubusercontent.com/faizbyp/keindahan-alam/master/img/william-kusno-tq_h8bCNhKQ-unsplash.jpg'
            time='24.12' 
            title='Yutub Ampek' 
            desc='Lorem Ipsum Dolor Sit Amet' />
        <YoutubeComp /> */}

        {/* <h2>Product Component</h2>
        <hr />
        <Product /> */}

        <h2>LifeCycle Component</h2>
        <hr />
        {
          this.state.showComponent
          ?
          <LifeCycleComp />
          : null
        }
      </div>
    )
  }
}

export default Home