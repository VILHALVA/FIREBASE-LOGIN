var uiConfig = {
  signInSuccessUrl: 'index.html',
  signInOptions: [
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  tosUrl: 'index.html'
};

var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', uiConfig);