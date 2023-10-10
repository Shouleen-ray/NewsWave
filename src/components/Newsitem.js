import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    const {title,desc,imgUrl,readmore} =this.props;
    return (
      
        <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={imgUrl} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{desc}...</p>
          <a href={readmore} className="btn btn-sm btn-primary" target="_blank">Read More</a>
        </div>
      </div>
    )
  }
}
