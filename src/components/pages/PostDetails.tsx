import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom' 
import IPost from '../../models/IPost';

function PostDetails() {
    const {id} = useParams();
    const [idPost, setIdPost] = useState(id)
    useEffect(()=>{
        setIdPost(id)
    },[id])
    
  return (
    <div>Post # {idPost}</div>
  )
}

export default PostDetails

