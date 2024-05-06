const BlogForm = ({ handleSubmit, title, author, url, handleTitle, handleAuthor, handleUrl }) => {
    return (
        <div>
            <h2>Create new blog</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    title
                    <input
                        value={title}
                        onChange={handleTitle}
                    />
                </div>
                <div>
                    author
                    <input
                        value={author}
                        onChange={handleAuthor}
                    />
                </div>
                <div>
                    url
                    <input
                        value={url}
                        onChange={handleUrl}
                    />
                </div>
                <button type="submit">create</button>
            </form>
        </div>
    )
}




export default BlogForm