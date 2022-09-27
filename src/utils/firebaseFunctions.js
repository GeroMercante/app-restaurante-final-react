import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore"
import { firestore } from "../firebase.config"

// Guardando nuevos items 
export const saveItem = async(data) => {
    await setDoc(
        doc(firestore, 'foodItems', `${Date.now()}`), data, { 
            merge: true,    // Recibe parametros booleanos. Recorre los arrays con un ciclo while, compara cada item del array y va guardando el mas pequeño en una nueva lista hasta que llegamos al final de alguno de los arrays
        });
};

export const getAllFoodItems = async () => {
    const items = await getDocs(
        query(collection(firestore, 'foodItems'), orderBy('id', 'desc'))
    );

    return items.docs.map((doc) => doc.data());
}