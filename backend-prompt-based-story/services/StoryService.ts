
import { StorySchema} from '../model/Story'
import OpenAIInteractionService from './OpenAIInteractionService';

export class StoryService {
    
    static INSTANCE:StoryService;
    openAiService:OpenAIInteractionService;
    
    private  constructor () {
        this.openAiService = OpenAIInteractionService.getOpenAIInteractionServiceInstance();
    }

    static getStoryServiceInstance():StoryService {
        if (this.INSTANCE === undefined) {
            this.INSTANCE = new StoryService();
        }
        return this.INSTANCE;
    }

    async insertItem(item:any) {
       return await StorySchema.build(item).save();
    }

    async createAndInsertStory(body: any) {
        if (!body.prompt) {
            throw new Error("prompt can not be empty");
        }
        await this.openAiService.generateStory(body.prompt).then(res=>{
            body.story = res;
        });
        body.upVotes = 0;
        StorySchema.build(body).save().then((res:any)=>{
            console.log(res);
        });
    }

    async fetchAllStories (sort:any={}) {
        console.log(sort);
        return await StorySchema.find().sort(sort);
    } 

    async fetchStory(id:string) {
        return await StorySchema.findById(id);
    }  

    async upVoteForStory(id:string) {
       return await StorySchema.find({_id:id}).then(async (res:any)=>{
            let vote = res[0].upVotes + 1;
            await StorySchema.updateOne({_id:id},{ $set :{upVotes:vote}});
        });
    }  
}