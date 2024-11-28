import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function BlogDetail() {
  const [data, setData] = useState([])

  const param = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${param.id}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        // console.log( data);
      })
  }, [])

  console.log(data)

  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </>
  )
}

export default BlogDetail;