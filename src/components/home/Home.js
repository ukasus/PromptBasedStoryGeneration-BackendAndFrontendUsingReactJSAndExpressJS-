import React, { useEffect, useState } from 'react';
import './Home.css';
import StoryCard from '../storyCard/StoryCard';
import { Link, generatePath } from "react-router-dom";
import StoryIntegrationService from '../../services/StoryIntegrationService';

const storyIntegrationService = new StoryIntegrationService();
function Home({ topStories }) {
    const [stories,setStories] = useState([])

    const fetchStories = () => {
        storyIntegrationService.fetchAllStories().then(res => {
          console.log(res)
          setStories(res.data);
        })
      }
      useEffect(() => {
        fetchStories()
      }, [])
  return (
    <div className="container">
      <h2>All Stories</h2>
      <div className="card-container">
        {stories.map((story, index) => (
        <Link style={{textDecoration: 'none'}} to={generatePath("/storyCard/:id", { id: story._id })}>
            <StoryCard story={story} ></StoryCard>
        </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
