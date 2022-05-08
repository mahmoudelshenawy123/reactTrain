function blogDetails(props){
    let Blog = props.blog

    let blogId = Blog.id;
    let blogTitle = Blog.title;
    let blogDesc = Blog.title;
    let blogAuthor = Blog.author;

    return (
        <div className='blog-container' key={blogId}>
            <h2>{blogTitle}</h2>
            <p>{blogAuthor}</p>
            <p>{blogDesc}</p>
            <button onClick={()=>{props.deleteBlog(blogId)}}>
                Delete
            </button>
        </div>
    )
}

export default blogDetails;