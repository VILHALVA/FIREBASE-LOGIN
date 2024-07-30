var mainApp = {};
(function() {
    var mainContainer = document.getElementById("main_container");
    var welcomeMessage = mainContainer.querySelector('h1');

    var logout = function() {
        firebase.auth().signOut().then(function() {
            console.log('success');
            window.location.replace("login.html");
        }, function(error) {
            console.error('Logout error:', error);
        });
    }

    var init = function() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log("stay");
                mainContainer.style.display = "";
                var userName = user.displayName ? user.displayName : user.email; 
                welcomeMessage.textContent = `SEJA BEM VINDO, ${userName}`;
            } 
            else {
                mainContainer.style.display = "none";
                console.log("redirect");
                window.location.replace("login.html");
            }
        });
    }
    
    init();

    mainApp.logout = logout;
})();
