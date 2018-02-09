import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCm5zZ8oIu2miRn0XJWxDGBjPXIlU056U8",
    authDomain: "varsle-hackathon.firebaseapp.com",
    databaseURL: "https://varsle-hackathon.firebaseio.com",
    projectId: "varsle-hackathon",
    storageBucket: "varsle-hackathon.appspot.com",
    messagingSenderId: "790373743895"

}




if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}


export default firebase
