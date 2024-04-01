function validateUser() {
  var usr = document.getElementById('user').value;

    if( (usr.startsWith("0") || usr.startsWith( "1") || usr.startsWith( "2")
        || usr.startsWith( "3") || usr.startsWith( "4") || usr.startsWith( "5")
          || usr.startsWith( "6") || usr.startsWith( "7") || usr.startsWith( "8")
            || usr.startsWith( "9") ) === true )
              alert("Invalid UserName");
}

function validatePass(){
  var pass = document.getElementById('userPass').value;
  if ( pass.length > 10)
  alert("Invalid Password");
}
