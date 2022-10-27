function retrieveAllProducts(){
    const dbRef = ref(database, "auction");

    onValue(dbRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();
      
    });
})
}