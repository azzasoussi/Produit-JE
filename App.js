import './App.css';
import  Article from './Article';
import Products from './Products';
import React, { useState } from 'react';
import JsonData from './MOCK_DATA.json';
import ReactPaginate from 'react-paginate';
let article1={
  cover: "https://th.bing.com/th/id/R.897e690b09704c1b4224d83b5e29a145?rik=VU1fdZSWJaFVOQ&riu=http%3a%2f%2fwww.unbox.ph%2fwp-content%2fuploads%2f2011%2f05%2findiana_jones_hat.jpeg&ehk=d2v8zlA1k49fq0BPcpUbRTUCf0oaUchvsgyr0sSyiLU%3d&risl=&pid=ImgRaw&r=0",
  category: 'product',
  prices: 200 ,
  titles: 'product1',
}
function App() {
  const [articles, setArticles]=useState(JsonData.slice(0,30));
  const [pageNumber, setPageNumber]= useState(0);

  const articlesPerPage=6;
  const pagesVisited = pageNumber * articlesPerPage;

  const displayArticles = articles.slice(pagesVisited, pagesVisited + articlesPerPage).map((article)=>{
    return (
      <div className='Article'>
        <img/>
        <div className='title'>{article.title}</div>
        <div className='price'>Price : {article.price}</div>
        <button className='seeMore'>See more</button>    
      </div>
    );
  });
  const pageCount = Math.ceil(articles.length/
  articlesPerPage);
  const changePage=({selected})=>{
    setPageNumber(selected);
  }
  return (
    <div className="App">
      <Products/>
      <h2 className=''>Showing all products</h2>
      <div className='displayArticles'>
      {displayArticles}
      </div>
      <br/>
      <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"paginationButtons"}
      previousLinkClassName={'nextButton'}
      activeClassName={"paginationActive"}
      />
    </div>
  );
     
}

export default App;
