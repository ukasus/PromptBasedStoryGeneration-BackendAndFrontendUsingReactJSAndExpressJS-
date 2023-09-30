import * as dotenv from "dotenv";
import * as mongoDB from "mongodb";

export class DatabaseConnectionProvider {
    
    static INSTANCE:DatabaseConnectionProvider;
    private mongoClient: mongoDB.MongoClient;
    
    private constructor () {
        dotenv.config();
        this.mongoClient = new mongoDB.MongoClient(process.env.DATABASE_URL?.toString()|| ""); 
        this.initializeConnection();
    }

    static getDataConnectionProviderInstance() {
        if (this.INSTANCE === undefined) {
            this.INSTANCE = new DatabaseConnectionProvider();
        }
        return this.INSTANCE;
    }

    private async initializeConnection() {
        await this.mongoClient.connect();

    }

    getClient():mongoDB.MongoClient {
        return this.mongoClient;
    }
}


