$(document).ready(function(){
    init();
    tools();
});
function tools(){
  $('.modal-trigger').leanModal();
}
function init(){
  var config = {
    apiKey: "API KEY DE LA BASE DE DATOS",
    authDomain: "DOMINIO DE LA BASE DE DATOS",
    databaseURL: "URL DE LA BASE DE DATOS",
    storageBucket: "ID DE LA BASE DE DATOS",
    messagingSenderId: "ID DE MENSAJERIA"
  };
  firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user){
  if (user) {
    console.log("el usuario esta conectado.");
    window.location.href = 'http://localhost:5000/panel/vistas/editor.html';
  } else {
    console.log("el usuario esta desconectado.");
  }
});

//ingresar al panel
    $("#ingresar").on('click', function(){
      var correo = $("#usuario").val();
      var pass = $("#pass").val();
      firebase.auth().onAuthStateChanged(function(user){
        if (user){
          var correo = user.email;
          console.log(correo);
          Materialize.toast('Bienvenido '+correo, 3000, 'rounded');
          $("#usuario,#pass").val("");
        } else {
          console.log("usuario o conraseña erroneas!");
          Materialize.toast('usuario o conraseña erroneas!');
          $("#usuario,#pass").val("");
        }
      });
        firebase.auth().signInWithEmailAndPassword(correo, pass);
    });

//restablecer contraseña
    $("#restablecer").on('click', function(){
      var correo = $("#correo-recovery").val();
      var auth = firebase.auth();
      var emailAddress = correo;
      auth.sendPasswordResetEmail(emailAddress).then(function() {
        Materialize.toast('correo enviado...');
        $("#correo-recovery").val("");
      }, function(error) {
        Materialize.toast('correo no valido ' + error);
        $("#correo-recovery").val("");
      });
    });
}
