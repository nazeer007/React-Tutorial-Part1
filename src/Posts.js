
const Posts = (eachObj) => {
    const {title, body} = eachObj;
    return (
        <article>
            <h2>{title}</h2>
            <p>{body}</p>
        </article>
    );
}

export default Posts;