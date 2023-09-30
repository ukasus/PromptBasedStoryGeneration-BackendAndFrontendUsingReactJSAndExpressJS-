import logo from './logo.svg';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import StoryForm from './components/storyForm/StoryForm';
import StoryCard from './components/storyCard/StoryCard';
import Leaderboard from './components/leaderboard/Leaderboard';
import Home from './components/home/Home';

function App() {

  return (
      <>
      <Navbar />
      <Routes>
      <Route path='/'  Component={Home} />
        <Route path='/storyForm' exact Component={StoryForm} />
        <Route path='/storyCard/:storyId' exact  Component={StoryCard} />
        <Route path='/leaderboard' exact  Component={Leaderboard} />
        {/* <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/events' component={Events} />
        <Route path='/annual' component={AnnualReport} />
        <Route path='/team' component={Teams} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/sign-up' component={SignUp} /> */}
      </Routes>
    </>
  );
}

export default App;
