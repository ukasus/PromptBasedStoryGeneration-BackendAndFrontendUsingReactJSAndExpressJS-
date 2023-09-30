import mongoose, { ObjectId } from "mongoose";

interface Story {
    key:string;
    value:string;
    _id?:ObjectId;
}

interface StoryResponse extends mongoose.Document {
    key:string;
    value:string;
    _id?:string;
}

interface storyModelInterface extends mongoose.Model<any>{
    build (obj: Story): any;
}

const storySchema = new mongoose.Schema({
    prompt: {
        type: String,
        required: true
    },
    story:{
        type: String,
        required: true
    },
    upVotes:{
        type: Number,
        required: true
    },
    userName:{
        type:String,
        required: true
    }
})

storySchema.statics.build = (obj:Story) => {
    return new StorySchema(obj);
}


const StorySchema = mongoose.model<StoryResponse,storyModelInterface>('Story',storySchema);

export {StorySchema};
