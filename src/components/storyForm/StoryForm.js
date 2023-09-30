import React, { useState } from 'react';
import './StoryForm.css';
import StoryIntegrationService from '../../services/StoryIntegrationService';
import { useNavigate } from 'react-router-dom';

const storyIntegrationService = new StoryIntegrationService();

function StoryForm() {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState('')
  const [userName, setUserName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the prompt to the server for story generation.
    // Handle the response to display the generated story.
    storyIntegrationService.createStory(prompt,userName).then(res=>{
      console.log(res)
      navigate('/', { replace: true });

    }).catch(err=>{
      console.log(err)
    })
  };

  return (
    <div className="container-form">
      <h2 className='h2'>Provide a Story Prompt</h2>
      <form onSubmit={handleSubmit}>
        <textarea className='textarea'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your story prompt here..."
        ></textarea>
        <input className='input' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter your name to be tagged with the story"></input>
        <button className='button' type="submit">Generate Story</button>
      </form>
    </div>
  );
}

export default StoryForm;
