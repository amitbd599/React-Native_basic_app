
import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';
export const config = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.jsm.aora_amit",
    projectId: "66eade4f0039f8ecf5c7",
    databaseId: "66eae0880034faa85cc3",
    userCollectionId: "66eae0ef00318817f876",
    videoCollectionId: "66eae11a000022fc7208",
    storageId: "66eae2ab0021548e6140"
}




// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
    ;


const account = new Account(client);
const avatars = new Avatars(client);
const database = new Databases(client);


export const createUser = async (email, password, username) => {
    try {
        // Register User
        let result = await account.create(ID.unique(), email, password, username)

        if (!result) throw Error

        const avatarUrl = avatars.getInitials(username)
        // await SignInAccount(email, password)

        const newUser = await database.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: result.$id,
                email: email,
                username: username,
                avatar: avatarUrl
            }
        )
        return newUser

    } catch (err) {
        console.log(err);
        throw new Error(err);
    }

}


export const SignInAccount = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password)
        return session
    } catch (err) {
        throw new Error(err);
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get()
        if (!currentAccount) throw Error

        const currentUser = await database.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )
        if (!currentUser) throw Error
        return currentUser.documents[0]
    } catch (error) {
        console.log(error)
    }
}

export const getAllPost = async () => {
    try {

        const posts = await database.listDocuments(
            config.databaseId,
            config.videoCollectionId
        )

        return posts.documents;

    } catch (err) {
        throw new Error(err)
    }
}
export const getLatestPosts = async () => {
    try {

        const posts = await database.listDocuments(
            config.databaseId,
            config.videoCollectionId,
            [Query.orderDesc("$createdAt", Query.limit(8))]
        )

        return posts.documents;

    } catch (err) {
        throw new Error(err)
    }
}