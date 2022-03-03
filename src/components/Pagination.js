import React from 'react'


export const Pagination = ({TotalPosts, postsPerPage,currentPage, paginate, setPostsPerPage}) => {

  let pageNumbers = [];
  for(let i = 1; i <= Math.ceil(TotalPosts / postsPerPage); i++){
    pageNumbers.push(i);
  }


return (
  <>
    <h5>{TotalPosts} posts</h5>
    <nav>
              <ul id="pagination">
            {
              pageNumbers.map(number => <li key={number} className={number === currentPage ? 'active' : ''} onClick={() => paginate(number)}>{number}</li>)
            }
          </ul>
          <div id="postsPerPageWrapper">
            <label htmlFor="postsPerPageSelector">posts per page:</label>
            <select id="postsPerPageSelector" value={postsPerPage} onChange={(e) => setPostsPerPage(e.target.value)}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
         
        </nav>
  </>
    
  )
}
