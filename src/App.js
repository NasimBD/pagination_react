import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Posts } from './components/Posts';
import { Pagination } from './components/Pagination';
import LoadingGif from './loading-7.gif';

const API = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const IndexOfFirstPost = (currentPage - 1) * postsPerPage;
  const IndexOfLastPost = IndexOfFirstPost + (postsPerPage - 1);
  const CURRENT_POSTS = posts && posts.slice(IndexOfFirstPost, IndexOfLastPost);
  const TotalPosts = posts.length;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(API);
      setPosts(res.data);
      setLoading(false);
    }

    fetchData();
  }, [])


  const paginate = (pageNum) => setCurrentPage(pageNum);

  if(loading){
    return <div id="loading">
       <img src={LoadingGif} alt="Loading..."/>
      </div> 
  }

  return (
    <div className="container">
      <header>
        <h1>Blogger's Blog</h1>
      </header>

      <div id="main">
        <Posts
        loading={loading}
        posts={CURRENT_POSTS}
        />

        <Pagination
        TotalPosts={TotalPosts}
        postsPerPage={postsPerPage}
        paginate={paginate}
        currentPage={currentPage}
        setPostsPerPage={setPostsPerPage}
        />
      </div>
    </div>
    );
}

export default App;
