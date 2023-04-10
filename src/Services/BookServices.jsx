import { db } from "../firebase";

import {collection , addDoc,doc,getDoc,getDocs,updateDoc,deleteDoc } from "firebase/firestore";

const bookCollectionRef = collection(db ,"books")
class bookDataService {

    addBooks =(newBook)=>{
        return addDoc(bookCollectionRef ,newBook)
    };
    updateBook=(id,updatedBook)=>{
        const bookDoc=doc(db ,"books",id)
        return updateDoc(bookDoc ,updatedBook);

    };
    deleteBook =(id)=>{
        const bookDoc=doc(db ,"books",id)
        return deleteDoc(bookDoc)


    };
    getAllBook=()=>{
        return getDocs(bookCollectionRef)
    };
    getBook =(id)=>{
        const bookDoc=doc(db ,"books",id)
        return getDoc(bookDoc)


    };

}

export default new bookDataService