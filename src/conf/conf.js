const conf = {
appwrite_url : String(import.meta.env.VITE_APPWRITE_URL) ,
appwrite_projectId :String(import.meta.env.VITE_APPWRITE_PROJECT_ID), 
appwrite_database :String(import.meta.env.VITE_APPWRITE_DATABASE_ID), 
appwrite_collectionId :String(import.meta.env.VITE_APPWRITE_COLLLECTION_ID), 
appwrite_bucket :String(import.meta.env.VITE_APPWRITE_BUCKET_ID), 
}

export default conf