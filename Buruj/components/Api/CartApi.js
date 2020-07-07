import firebase from 'react-native-firebase';

export function addCart(data,color,image,quantity){

        firebase.firestore()
        .collection('CartList')
        .add({
            name: data.name,
            color: color,
            image: image,
            quantity: quantity,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        .catch((error) => console.log(error))
}

export async function getCart(CartRetreieved){
    
    let cartlist = [];

    let snapshot = await firebase.firestore()
    .collection('CartList')
    .orderBy('createdAt')
    .get()

    snapshot.forEach((doc) =>{

        cartlist.push(doc.data());
    });

    CartRetreieved(cartlist);
}