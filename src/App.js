import './App.css';
import PackingList from './Conditional Rendering/PackingList';
import data from './data';
import SpicedChai from './Keeping Components Pure/SpicedChai';
import TeaGathering from './Keeping Components Pure/TeaGathering';
import TeaSet from './Keeping Components Pure/TeaSet';
import Movie from './Movie';
import Posts from './Posts';
import postData from './postsData';
import ChemistList from './Rendering Lists/ChemistList';
import ListItems from './Rendering Lists/People';
import FancyText from './Understanding Your UI as a Tree/FancyText';
import InspirationGenerator from './Understanding Your UI as a Tree/InspirationGenerator';
import Copyright from './Understanding Your UI as a Tree/Copyright';


function App() {
  return (
    <div>
      <h1>New Movies</h1>
      <section className = "movie-container">
        {
          data.map((eachObj, index) => {
            const {title, imgUrl, description} = eachObj;
            return <Movie 
              key = {index}
              title={title}
              imgUrl={imgUrl}
              description={description}
            />
          })
        }
      </section>
      <h1>Posts</h1>
      <section className="posts-container">
        {
          postData.map((eachObj) => {
            const {id, title, body} = eachObj;
            return (
              <Posts 
                key = {id}
                title = {title}
                body = {body}
              />
            );
          })
        }
      </section>
      <section>
        <PackingList />
      </section>
      <section>
        <h2>List Items</h2>
        <ListItems />
        <h2>Chemist List</h2>
        <ChemistList />
        <SpicedChai />
        <TeaSet />
        <h1>Tea Gathering</h1>
        <TeaGathering />
      </section>
      <section>
        <FancyText title text="Get Inspired App" />
        <InspirationGenerator>
          <Copyright year={2004} />
        </InspirationGenerator>
      </section>
    </div>
  );
}

export default App;
