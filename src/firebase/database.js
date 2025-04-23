import { getFirestore, getDocs, collection, doc, getDoc, query, where } from 'firebase/firestore';
import { app } from './config.js';


const db = getFirestore(app);
const collectionInfo=[db, 'items'];
const collectionItems=(collection(...collectionInfo))

export const getItems = async (category) => {

    if(!category){

        const querySnapshot = await getDocs(collectionItems);
        let documents= querySnapshot.docs.map(prod => ({...prod.data()}));
        return documents
        
    }else{
        const q= query(collectionItems, where("category", '==', category))
        const querySnapshot2 = await getDocs(q);

        let documents= querySnapshot2.docs.map(prod => ({...prod.data()}));
        return documents
    }

}

export const getItem= async(id) => {

    const consult= doc(...collectionInfo, id)
    const querySnapshot = await getDoc(consult);

    if(querySnapshot.exists()){
         let document= {...querySnapshot.data()};
         return document
    
    }else{
        return false
    }
    

}