import { getFirestore, getDocs, collection, doc, getDoc, query, where, updateDoc, addDoc } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { app } from './config.js';
import { useEffect, useState } from "react";

const db = getFirestore(app);
const collectionInfo = [db, 'items'];
const collectionItems = (collection(...collectionInfo))

export const getItems = async (category) => {

    if (!category) {

        const querySnapshot = await getDocs(collectionItems);
        let documents = querySnapshot.docs.map(prod => ({ ...prod.data() }));
        return documents

    } else {
        const q = query(collectionItems, where("category", '==', category))
        const querySnapshot2 = await getDocs(q);

        let documents = querySnapshot2.docs.map(prod => ({ ...prod.data() }));
        return documents
    }

}

export const getItem = async (id) => {

    const consult = doc(...collectionInfo, id)
    const querySnapshot = await getDoc(consult);

    if (querySnapshot.exists()) {
        let document = { ...querySnapshot.data() };
        return document

    } else {
        return false
    }


}

export const useGetItemImg = (productImg) => {
    const [imgUrl, setImgUrl] = useState(null);

    useEffect(() => {
        if (!productImg) return;

        const fetchImage = async () => {
            try {
                const storage = getStorage();
                const imgRef = ref(storage, productImg);

                const url = await getDownloadURL(imgRef);

                setImgUrl(url);
            } catch (error) {
                console.error("Error al obtener la imagen:", error);
            }
        };

        fetchImage();
    }, [productImg]);

    return imgUrl;
};

export const updateItems = async (items, order) => {

    const orderCollection = collection(db, "orders");
    await addDoc(orderCollection, order);

    for (const element of items) {

        const itemRef = doc(db, "items", element.item.id);
        const dataToUpdate = {
            stock: element.item.stock - element.quantityAdded,
        };
        await updateDoc(itemRef, dataToUpdate);
    }
}