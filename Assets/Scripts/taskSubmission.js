const firebaseConfig = {
    apiKey: config.API_KEY,
    authDomain: config.AUTH_DOMAIN,
    projectId: config.PROJECT_ID,
    storageBucket: config.STORAGE_BUCKET,
    messagingSenderId: config.MESSAGE_SENDER_ID,
    appId: config.APP_ID,
    measurementId: config.MESSUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

var storage = firebase.app().storage("gs://codequest-7ac27.appspot.com").ref();

document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const fileInput = document.getElementById('file');
    if (fileInput.files.length == 1) {
        const selectedFile = fileInput.files[0];
        storage.child(selectedFile.name).put(selectedFile)
        console.log('Uploading file:', selectedFile);
    } else {
        console.log('Upload only one file.');
    }
})