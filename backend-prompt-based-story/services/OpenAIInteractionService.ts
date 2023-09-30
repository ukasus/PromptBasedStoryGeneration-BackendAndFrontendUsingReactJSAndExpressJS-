import dotenv from "dotenv";
import {OpenAI} from 'openai';


export default class OpenAIInteractionService {
    static INSTANCE: OpenAIInteractionService;
    private client:OpenAI;
    constructor() {
        dotenv.config();
        let apiKey = process.env.OPENAI_TOKEN1;
        this.client = new OpenAI({apiKey});
        
    }
    static getOpenAIInteractionServiceInstance(){
        if (this.INSTANCE == undefined) {
            this.INSTANCE = new OpenAIInteractionService();
        }
        return this.INSTANCE;
    }
    async generateStory(prompt:string) {
        const options:any = {
            messages: [{ role: 'user', content: prompt }],
            model: 'gpt-3.5-turbo',
          };
        let storyGenerated:string= "";
        await this.client.chat.completions.create(options).then((res:any)=>{
            storyGenerated = res.choices[0].message.content;
        }).catch((error:any) => {
            console.error(error);
            throw new Error;
          });
        return storyGenerated;
    }

}