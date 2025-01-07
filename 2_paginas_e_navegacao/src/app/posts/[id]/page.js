const PostPage = ({params}) => {
    
        // Load de dados baseado em params.id

        const id = params.id;

  return (
    <div>
      <h1>Título: {id}</h1>
      <p>Texto do post...</p>
    </div>
  )
}

export default PostPage