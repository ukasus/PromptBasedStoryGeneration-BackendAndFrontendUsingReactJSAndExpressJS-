import axios from './Axios';

export default class StoryIntegrationService {
    static hostUrl = process.env.BACKEND_URL
    constructor () {

    }

    createStory(prompt,userName){
        return axios.post("story/createStory",{
            prompt: prompt,
            userName: userName
        });
    }

    fetchAllStories() {
        return axios.get('story/getAllStories')
    }

    fetchAllStoriesByOrder(sortOrder) {
        return axios.get('story/getAllStories/'+sortOrder)
    }

    fetchStory(id) {
        return axios.get('story/getStory/'+id)
    }

    upVoteForStory(id) {
       return axios.patch('story/upVote/'+id)
    }
}