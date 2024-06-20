import {addDoc, collection, doc, getDoc, getDocs, query, updateDoc} from "firebase/firestore";
import {db} from "../App";
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";

class Request {
    async postBody(path, body) {
        try {
            const docRef = await addDoc(collection(db, path), body);
            console.log("Document written with ID: ", docRef.id);
            await updateDoc(docRef, {
                uuid: docRef.id
            });
            return docRef.id;
        } catch (e) {
            console.error("Error adding document: ", e);
            return false;
        }
    }

    async get(path) {
        const q = query(collection(db, path))
        const snapshot = await getDocs(q);
        if (snapshot != null) {
            return snapshot;
        }else{
            console.log("No data available");
            return null;
        }
    }

    async getOne(path, uuid){
        const q = doc(db, path, uuid)
        const docSnap = await getDoc(q);
        if (docSnap.exists()) {
            return docSnap.data()
        } else {
            console.log("No data available")
            return null;
        }

    }

    async uploadFile(blob, uuid){
        const storage = getStorage();
        const storageRef = ref(storage, `${uuid}/` + 'image');
        uploadBytes(storageRef, blob).then((snapshot) => {
            console.log('Uploaded a blob or file!', snapshot);
            return snapshot;
        }).catch(() => {
            console.log('Uploaded a blob or file failed!');
            return '';
        })
    }

    async getFile(uuid) {
        const storage = getStorage();
        try {
            return await getDownloadURL(ref(storage, `${uuid}/image`));
        } catch (error) {
            console.error('Error fetching download URL:', error);
            return null; // or handle the error as needed
        }
    }

    async addTags(tags){
        tags.map((tag) => {
            const value = {
                tagsValue: tag
            }
            this.postBody('tags', value)
        })
    }

}

export default Request;
