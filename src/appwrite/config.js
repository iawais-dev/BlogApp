import conf from "../conf/conf";
import { Client , ID , Databases , Storage , Query } from "appwrite";

export class Service {
Client = new Client()
databases
storage
constructor (){
    this.Client
    .setEndpoint(conf.appwrite_url)
    .setProject(conf.appwrite_projectId)
    this.databases = new Databases(this.Client)
    this.storage = new Storage(this.Client)
}

async createPost({title , slug , content , featuredImage ,status , userId }){
    
    try {
    return await this.databases.createDocument(
        conf.appwrite_database,
        conf.appwrite_collectionId,
        
        slug,
        {
           title ,
           content , 
           featuredImage,
           status , 
           userId
        }
       )
       
    } catch (error) {
        throw error
    }
}
async updatePost (slug , {title , content , featuredImage ,status }){
  try {
    return await this.databases.updateDocument(
        conf.appwrite_database,
        conf.appwrite_collectionId,
       slug,
       {
        title , 
        content , 
        featuredImage ,
         status
       }
    )
  } catch (error) {
    throw error
  }
}

async deletePost (slug ){
    try {
         await this.databases.deleteDocument(
            conf.appwrite_database,
            conf.appwrite_collectionId,
            slug
        )
        return true
    } catch (error) {
        throw error
        return false
    }
}

async getPost (slug){
   try {
   return await this.databases.getDocument(
        conf.appwrite_database,
        conf.appwrite_collectionId,
        slug
    )
   } catch (error) {
    throw error
    return false
   }
}
async getallPosts (){

    try {
        return await this.databases.listDocuments(
            conf.appwrite_database,
            conf.appwrite_collectionId,
            [  
                Query.equal("status", "active")
            ]
        )
    } catch (error) {
        
        throw error
        return false
    }
}

//file Service

async fileUpload(fileId){
    try {
        return await this.storage.createFile(
            conf.appwrite_bucket,
            ID.unique(),
            fileId
        )
    } catch (error) {
        throw error
    }
}

async fileDelete (fileId){
    try {
     await this.storage.deleteFile(
            conf.appwrite_bucket,
            fileId
        )
        return true
    } catch (error) {
        throw error
    }
}

//getFilePreview doesnt need asnc because its response is very fast
 getfilePreview(fileId){
    return this.storage.getFilePreview(
        conf.appwrite_bucket,
       fileId
    )
 }

}

const service = new Service();
export default service
