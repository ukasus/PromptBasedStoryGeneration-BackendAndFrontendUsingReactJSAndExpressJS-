import React, { useEffect, useState } from 'react';
import './Leaderboard.css';
import { Link, generatePath } from 'react-router-dom';
import StoryIntegrationService from '../../services/StoryIntegrationService';

const storyIntegrationService = new StoryIntegrationService();

function Leaderboard({ topStories }) {
    const [stories,setStories] = useState([])
    const fetchStories = () => {
      storyIntegrationService.fetchAllStoriesByOrder("desc").then(res => {
        console.log(res)
        setStories(res.data)
      })
    }
    useEffect(() => {
      fetchStories()
    }, [])
  return (
    <div className="container-leader">
      <h2>Top Voted Stories</h2>
      <div className="card-container-leader">
        {stories.map((story, index) => (
            <Link style={{textDecoration: 'none'}} to={generatePath("/storyCard/:id", { id: story._id })}>
                <div key={index} className="story-card-leader">
                    <h3 className="card-title-leader">Story Prompt : {story.prompt}</h3>
                    <p className="card-content-leader">{story.story}</p>
                    <div className="card-votes-leader">
                    <span>Upvotes: {story.upVotes}</span>
                    </div>
                </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard
