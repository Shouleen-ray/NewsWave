import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {

  static defaultProps={
    country:"in",
    pagesize:6,
    category:"sports"
  }

  articles=[]

  constructor(){
    super();
    this.state={
      articles:this.articles,
      loading:false,
      page:1
    }
  }

  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e4beb640dfe94b9988d1a41c0a7f179b&pagesize=${this.props.pagesize}`;
    let data=await fetch(url);
    let parseData=await data.json();
    this.setState({articles:parseData.articles});
  }

  nextClick=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e4beb640dfe94b9988d1a41c0a7f179b&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
    let data=await fetch(url);
    let parseData=await data.json();
    this.setState({page:this.state.page + 1,
      articles:parseData.articles
    })
    console.log(this.state.page)
  }

  render() {
    return (
      <>
              <div className='container my-5'>
                <div className="row">
                  {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>

                      {/*Rendering newsittem components*/}

                    <Newsitem title={element.title} desc={element.description} imgUrl={element.urlToImage} readmore={element.url} />
                  </div>
                  })}
                </div>
                <div className="d-flex justify-content-between my-3">
                  <button type="button" className="btn btn-secondary mx-7" onClick={this.nextClick}>Next</button>
{/*                   <button type="button" class="btn btn-secondary" onClick={this.prevClick}>Previous</button>
 */}                </div>
              </div>
      </>
    )
  }
}
