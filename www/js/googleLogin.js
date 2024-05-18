export const loginGoogle = ()=> {
    window.plugins.googleplus.login(
        {},
        function (obj) {
          console.log(JSON.stringify(obj));
        //   document.querySelector("#image").src = obj.imageUrl;
        //   document.querySelector("#image").style.visibility = 'visible';
        //   document.querySelector("#feedback").innerHTML = "Hi, " + obj.displayName + ", " + obj.email;
        let usuarioN = document.querySelector("#usuario") 
        usuarioN.value = obj.givenName;
        let imageUrl = document.querySelector("#imageUrl") 
        imageUrl.value = obj.imageUrl;
        },
        function (msg) {
          alert(msg);
        }
    );
   //window.plugins.googleplus.getSigningCertificateFingerprint(function(res){console.log(res)}, function(res){console.log(res)})
  }
  export const logout = ()=> {
    window.plugins.googleplus.logout(
        function (msg) {
          //document.querySelector("#image").style.visibility = 'hidden';
          alert(msg);
        },
        function (msg) {
          alert(msg);
        }
    );
  }