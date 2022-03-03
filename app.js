var db = firebase.firestore();

function saveData(email) {
    return db.collection("leads").add({
        email: email,
    });
}

