//Google drive API Key
//AIzaSyAbPClnjsAJxZ7PZk_Imm7c25Jjux7_QGM
//Client id
//428423907807-2533cnljspk5ttlah9h37elh5od5b908.apps.googleusercontent.com
//Folder id
//103yQuDOIYeLcn5EBaxu5v7G2fLNioqhh
const fileName = document.querySelector(".file-name");
const fileInput = document.querySelector('input[name="file"]')

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

fileInput.addEventListener('change', (e) => {
    var name = fileInput.value.split("\\").pop()
    fileName.innerHTML = name;
})

document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    if (fileInput.files.length == 1) {
        var selectedFile = fileInput.files[0];
        uploadToDrive(selectedFile);
        // storage.child(selectedFile.name).put(selectedFile)
        console.log('Uploading file:', selectedFile);
    } else {
        console.log('Upload only one file.');
    }
})

// Replace with your Google Drive API client ID and API key
const CLIENT_ID = '428423907807-2533cnljspk5ttlah9h37elh5od5b908.apps.googleusercontent.com';
const API_KEY = 'AIzaSyAbPClnjsAJxZ7PZk_Imm7c25Jjux7_QGM';
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];
const SCOPES = 'https://www.googleapis.com/auth/drive.file';

let authorizeButton = document.getElementById('authorizeButton');
let signoutButton = document.getElementById('signoutButton');
gapi.load('client:auth2', initClient);

function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
    }).then(() => {
        console.log(gapi.auth2.getAuthInstance().isSignedIn.get());
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
}

function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        console.log('User is signed in.');
    } else {
        console.log('User is not signed in.');
    }
}

function handleAuthClick() {
    gapi.auth2.getAuthInstance().signIn().then((e) => {
        console.log(e)
    });
}

function handleSignoutClick() {
    gapi.auth2.getAuthInstance().signOut();
}

function uploadToDrive(selectedFile) {

    if (selectedFile) {
        const metadata = {
            name: file.name,
            parent: ['103yQuDOIYeLcn5EBaxu5v7G2fLNioqhh'],
            mimeType: file.type,
        };

        const form = new FormData();
        form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
        form.append('file', file);

        gapi.client.drive.files.create({
            resource: metadata,
            media: {
                mimeType: file.type,
                body: form,
            },
        }).then((response) => {
            console.log('File uploaded to Google Drive:', response.result);
        }).catch((error) => {
            console.error('Error uploading file to Google Drive:', error);
        });
    } else {
        console.error('No file selected.');
    }
}
