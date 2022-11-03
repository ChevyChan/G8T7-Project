
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDaa4E6_70V4giloehQSPALsd247XEqH3k",
    authDomain: "ihelpartists-app.firebaseapp.com",
    databaseURL: "https://ihelpartists-app-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ihelpartists-app",
    storageBucket: "ihelpartists-app.appspot.com",
    messagingSenderId: "1078317726292",
    appId: "1:1078317726292:web:0cadf1ec10d51359fdcbc1",
    measurementId: "G-P21FPFFWWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const database = getDatabase(app);

function createBiddingProduct(id, title, artistName, startBid, subBid, countdownTimer, videoURL, productPic) {
    //const user = user

    set(ref(database, 'auction/' + id), {
    id: id,
    title : title,
    artistName: artistName,
    startBid: startBid,
    subBid: subBid,
    countdownTimer: countdownTimer, 
    videoURL: videoURL,
    productPic: productPic
    })
    .then(() => {
    // Data saved successfully!
    alert("Bidding Created Successfully!");
    })
    .catch((error) => {
    // The write failed...
    alert(error);
    });
}

function retrieveBiddingProductsByArtist(userId){

    /*let url = new URL('http://localhost/Project/UpdateBidding.html');
    let params = new URLSearchParams(url.search);

    // Add a third parameter.
    params.set('id', id);
    params.toString();*/

    get(child(database, 'auction/' + '778c86fd-df7e-45dc-b7d2-0e34aa1a2438')).then((snapshot) => {
        if(snapshot.exist()) {
            console.log(snapshot.val());
        }else{
            console.log("No data found");
        }
    }).catch((error) => {
        console.log(error);
    });
}

function updateBiddingProduct(title, startBid, subBid, countdownTimer, videoURL, productPic) {
    update(ref(database, 'auction/' + id), {
        title : title,
        startBid: startBid,
        subBid: subBid,
        countdownTimer: countdownTimer, 
        videoURL: videoURL,
        productPic: productPic
    })
    .then(() => {
        // Data saved successfully!
        alert("Bidding Updated Successfully!");
    })
    .catch((error) => {
        // The write failed...
        alert(error);
    });
}


