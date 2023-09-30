import express from 'express';
import {StoryService} from '../services/StoryService';

const router = express.Router()
const storyService = StoryService.getStoryServiceInstance();
export {router};

//Create a story using given prompt from the body with the help of openai and persist in mongodb
router.post('/createStory', (req, res) => {
    try {
        storyService.createAndInsertStory(req.body);
    } catch (err){
        console.log(err);
        res.send({status:500,msg:err})
    }
    
    res.sendStatus(200);
})

//Get all Stories
router.get('/getAllStories',async (req, res) => {
    await storyService.fetchAllStories().then((response:any)=>{
        res.send(response);
    }).catch((error:any) => {
        console.error(error);
        throw new Error;
      });
})

//Get by ID Method
router.get('/getAllStories/:order',async (req, res) => {
    console.log(req.params)
    await storyService.fetchAllStories({upVotes: req.params.order==='asc'?1:-1}).then((response:any)=>{
        res.send(response);
    }).catch((error:any) => {
        console.error(error);
        throw new Error;
      });
})

//Get Story by ID Method
router.get('/getStory/:id', async (req, res) => {
    await storyService.fetchStory(req.params.id).then((response:any)=>{
        res.send(response);
    }).catch((error:any) => {
        console.error(error);
        throw new Error;
      });
})

//upVote for a story by ID Method
router.patch('/upVote/:id',async (req, res) => {
    await storyService.upVoteForStory(req.params.id).then((response:any)=>{
        res.send(response);
    }).catch((error:any) => {
        console.error(error);
        throw new Error;
      });
})