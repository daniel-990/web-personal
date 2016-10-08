$(document).ready(function(){
    init();
    toolsAdmin();
})
function toolsAdmin(){

}
function init(){
    var config = {
    apiKey: "AIzaSyAA2oobvOeDZUEx-wzj7FJlL4CZIvv0v64",
    authDomain: "danielarango990-29a5e.firebaseapp.com",
    databaseURL: "https://danielarango990-29a5e.firebaseio.com",
    storageBucket: "danielarango990-29a5e.appspot.com",
    messagingSenderId: "887049675040"
  };
  firebase.initializeApp(config);


firebase.auth().onAuthStateChanged(function(user){
  if (user) {
    console.log("el usuario esta conectado.");
  } else {
    console.log("el usuario esta desconectado.");
    window.location.href = 'http://localhost:5000/panel/';
  }
});

//cerrar sesion
    $("#cerrar-sesion").on('click', function(){
        firebase.auth().signOut().then(function() {
        Materialize.toast('cerrando sesion.');
      }, function(error) {
        Materialize.toast('error al cerrar sesion.');
      });
    });



}