import React, { useEffect ,useState} from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import LoadingBar from 'react-top-loading-bar'
import InfiniteScroll from "react-infinite-scroll-component";
//import Spinner from './component/Spinner'
//
const News =(props)=> {
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, settotalResults] = useState(0)

     const captilizefirstletter=(string)=>{
        return string.charAt(0).toUpperCase()+string.slice(1);
    }


   
    const updatenews= async ()=>{
        props.setProgress(10)
        const url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=77814b3fbe61410db5e91fedc75464e8&page=${page}&pageSize=${props.pageSize}`

      
        setloading(true)
        let data=await fetch(url)
        props.setProgress(30)
        let parsedata=await data.json()
        props.setProgress(70)
        setarticles(parsedata.articles)
        settotalResults(parsedata.totalResults)
        setloading(false)
       // this.setState({articless:parsedata.articless,totalResults:parsedata.totalResults,loading:false})
        //this.setState({loading:false})
        props.setProgress(100)
        console.log(parsedata)

    }
    useEffect(() => {
        document.title=`${captilizefirstletter (props.category)}-NEWS-IDIOTS`
        updatenews()
       
    }, [])
    //async componentDidMount(){
       //let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=77814b3fbe61410db5e91fedc75464e8&//page=1&pageSize=${props.pageSize}`
       //this.setState({loading:true})
       //let data=await fetch(url)
       //let parsedata=await data.json()
       //this.setState({articless:parsedata.articless,totalResults:parsedata.totalResults})
       ////this.setState({loading:false})
       //console.log(parsedata)
      // this.updatenews()
    
   const preClick= async ()=>{
        //console.log("previous")
        //let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=77814b3fbe61410db5e91fedc75464e8&page=$//{this.state.page-1}&pageSize=${props.pageSize}`
        //this.setState({loading:true})
        //let data=await fetch(url)
        //let parsedata=await data.json()
     //
        //console.log(parsedata)
        //    console.log("previous")
        //this.setState({
        //    page:this.state.page-1,
        //    articless:parsedata.articless,
        //    loading:false
//
        //})
       // this.setState({page:this.state.page-1})
        //this.updatenews()
        setPage(page-1)
        updatenews()
   
    }
    const nextClick=async ()=>{
        //console.log("next")
        //if(!(this.state.page+1 >Math.ceil(this.state.totalResults/props.pageSize))){
        //let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&//apiKey=77814b3fbe61410db5e91fedc75464e8&page=${this.state.page+1} &pageSize=${props.pageSize}`
        //this.setState({loading:true})
        //let data=await fetch(url)
        //let parsedata=await data.json()
     //
        //console.log(parsedata)
        //    console.log("previous")
        //this.setState({
        //    page:this.state.page+1,
        //    articless:parsedata.articless,
        //    loading:false
//
        //})
   // }
 //  this.setState({page:this.state.page+1})
   setPage(page+1)
    updatenews()

    }
   const fetchMoreData =  async () => {
        //this.setState({page: this.state.page + 1})
     
        const url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=77814b3fbe61410db5e91fedc75464e8&page=${page+1}&pageSize=${props.pageSize}`
        setPage(page+1)
        
        let data=await fetch(url)
        let parsedata=await data.json()
        setarticles(articles.concat( parsedata.articles))
        settotalResults(parsedata.totalResults)
       // this.setState({articless: this.state.articless.concat( parsedata.articless),
         //   totalResults:parsedata.totalResults,
           // })
        //this.setState({loading:false})
        console.log(parsedata)
      };
   
   
        return (
            <>
               
               <h2 className="text-center"  style={{margin: "35px 0px",marginTop:"90px"}}>NEWS-IDOTS- TOP  {captilizefirstletter(props.category)}HEADLINES</h2>
               <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
               {loading && <Spinner/>}
               <div className="container">
               <div className="row">
               { /*!this.state.loading &&*/ articles.map((element)=>{
                   return <div className="col-md-4" key={element.url} >
                <NewsItem title={ element.title?element.title.slice(0,44): " "} description={ element.description?element.description.slice(0,88):""}  imageUrl={element.urlToImage}  newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
                })}
               </div>
               </div>
               </InfiniteScroll>
               {/*<div className="conatiner d-flex justify-content-between">
               <button disabled={this.state.page<=1} type="button" className="btn btn-primary my-3 " onClick={this.preClick}>&larr; Previous</button>
               <button  disabled={this.state.page+1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-primary   my-3 "  onClick={this.nextClick}> Next &rarr;</button>
               </div>*/}
            
            </>
            
        )
            }


News.defaultProps={
    country:"in",
    pageSize:8
}
News.propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
}

export default News
