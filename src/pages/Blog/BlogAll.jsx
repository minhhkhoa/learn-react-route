import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BlogAll() {

  const [post, setPost] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/post")
    .then(res => res.json())
    .then(data => {
      setPost(data.posts);
    })
  }, [])
  return (
    <>
      <h2>Trang Tin Tuc</h2> 
      <ul>
        {post.map(item => (
          <li key = {item.id}>
            {/* route động */}
            <Link to={`/blog/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default BlogAll;