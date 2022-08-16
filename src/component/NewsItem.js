import React from 'react'
import PropTypes from 'prop-types'

const NewsItem =(props)=> {
 

   
        let {title,description,imageUrl,newsUrl,author,date,source}=props
        return (
            <div className="my-3">
            <div className="card" >
            <div style={{
                dispaly:'flex',
                justifyContent:'flex-end',
                position:'absolute',
                right:'0'
            }
            }>
            <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90% ',zIndex:'1'}}>{source}</span>
            </div>
            <img src={!imageUrl?"https://static.news.bitcoin.com/wp-content/uploads/2021/09/india.jpg": imageUrl } className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}..
    </h5>
              <p className="card-text">{description}..</p>
              <p className="card-text"><small className="text-muted">By {!author?"Unkonow":author} on { new Date(date).toGMTString()} </small></p> 
              <a href={newsUrl}  target="_blank" className="btn  btn-sm btn-dark">READ MORE</a>
            </div>
            </div>
            </div>
        
        )
    
}

export default NewsItem
