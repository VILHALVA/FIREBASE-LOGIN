var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_AUTH_DOMAIN",
    databaseURL: "SEU_DATABASE_URL",
    projectId: "SEU_PROJECT_ID",
    storageBucket: "SEU_STORAGE_BUCKET",
    messagingSenderId: "SEU_MESSAGING_SENDER_ID"
  };

if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


