const Movie = (eachObj) => {
    const {imgUrl, title, description} = eachObj;
    return (
      <article>
        <img 
          src= {imgUrl}
          alt={title}
        />
        <h3>{title}</h3>
        <p>{description}</p>
      </article>
    );
}
export default Movie;