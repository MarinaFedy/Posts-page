import React, { useEffect, useState } from 'react';
import PostList from '../components/PostList';
import '../styles/index.css';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/MyModal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import { usePosts } from '../components/hooks/usePosts';
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import {useFetching} from "../components/hooks/useFetching";
import { getPageCount} from '../utils/pages';
import Plagination from '../components/UI/plagination/plagination';



function Posts() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)    

    const [fetchPost, isPostsLoading, postError] = useFetching(async () =>{
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount =response.headers["x-total-count"]
        setTotalPages(getPageCount(totalCount, limit))
        }
    )

    useEffect(() => {
        fetchPost()
    }, [page])

  const createPost =(newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) =>{
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (p) =>{
    setPage(p)
  }

  return (    
    <div className='App'>
      <MyButton onClick={fetchPost}>GET DATA</MyButton>

      <MyButton style={{marginTop: 30}} onClick={() => {setModal(true)}}>
        Create post
      </MyButton>

      <hr style={{margin: "15px 0"}}></hr> 

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>           

      {console.log(postError)}
      <PostFilter filter={filter} setFilter={setFilter}/>        
      <hr style={{margin: "15px 0"}}></hr>
        {isPostsLoading
            ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
            : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов"/>
        }
      <Plagination
        page={page}
        changePage = {changePage}
        totalPages = {totalPages}
      />
    </div>
  ) ;
}

export default Posts;
