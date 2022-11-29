import React from 'react'
import './YoutubeComp.css'

const YoutubeComp = (props) => {
  return (
    <div className="youtube-wrapper">
        <div className="img-thumb">
            <img src={props.img} alt="Thumbnail" />
            <p className="time">{props.time}</p>
        </div>
        <p className="title">{props.title}</p>
        <p className="desc">{props.desc}</p>
    </div>
  )
}

YoutubeComp.defaultProps = {
    img: 'https://raw.githubusercontent.com/faizbyp/keindahan-alam/master/img/akudui-SP3H5t8dEms-unsplash.jpg',
    time: '00.00',
    title: 'Title Here',
    desc: 'Desc Here'
}

export default YoutubeComp