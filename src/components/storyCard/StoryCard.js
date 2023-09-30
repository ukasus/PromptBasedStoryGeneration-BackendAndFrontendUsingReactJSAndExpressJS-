import React, { useEffect, useState } from 'react';
import './StoryCard.css';
import { useParams } from 'react-router-dom';
import StoryIntegrationService from '../../services/StoryIntegrationService';

const storyIntegrationService = new StoryIntegrationService();

function StoryCard(props) {
    const {storyId} = useParams()
    const [storyData, setStoryData] = useState({})

    const fetchStory =  (id) => {
      storyIntegrationService.fetchStory(storyId || id).then(res => {
        setStoryData(res.data)
      }).catch(error=>{
        console.log("Invalid fetchStory based on id response!")
      })
    }
    useEffect(()=>{
        console.log(props)
        if (props['story']) {
            console.log("from props")
            setStoryData(props['story'])
        } else {
            console.log("from path variable")
            fetchStory()
        }

    },[])
    function populateSaveShare() {
        if (!props['story']) {
            return <><button>AppendStory</button><button>Share</button></>;
        }
    }
    function upVoteForStory(){
      let id = storyId;
      if ( id == undefined) {
        id = storyData._id
      }
      console.log(id)
      storyIntegrationService.upVoteForStory(id).then(res => {
        fetchStory(id)
      }).catch(error=>{
        console.log("Invalid fetchStory based on id response!")
      })
    }

  return (
   
    <div className="story-card">
      <h3 className="card-title">{storyData.prompt}</h3>
      <p className="card-content">{storyData.story}</p>
      <div className="card-votes">
        {
            populateSaveShare()
        }
        <span>By user: {storyData.userName}</span>
        <button onClick={upVoteForStory}><span>Upvotes: {storyData.upVotes}</span></button>
      </div>
    </div>
  );
}

export default StoryCard;
