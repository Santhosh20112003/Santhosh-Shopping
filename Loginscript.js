const {Student} = require('test.js');
//login page
localStorage.setItem("santhosh","sandy")
    function updaters(name,pas1){
      localStorage.setItem(name,pas1)
    }

    function idAndPassword(){
        var id = document.getElementById("id").value;
        var password = document.getElementById("password").value;
        if(localStorage.getItem(id) == password){
          window.open("otp.html")
          loged=0;
        }
        else{
          alert("Login Failed");
        }

    }
    
//reservation page
    function registering(){
        var pas1 = document.getElementById("password").value;
        var pas2 = document.getElementById("repassword").value;
        var name = document.getElementById("user_id").value;
        if(pas1 == pas2 && pas1 != name && name != 0 && pas1!=0 && pas2!=0){
          alert("Account Registered :)");
          updaters(name,pas1)
        }
        else if(name == 0 && pas1 == 0 && pas2 == 0){
          alert("Enter all Details :(");
        }
        else{
          alert("Account not Registered :(");
        }
    }
    
    function myfunction() {
        var x = document.getElementById("password");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }
      function myclass() {
        var x = document.getElementById("passwordconfirm");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }




//for icons

function youtube(){
  console.log("youtube");
  var link = "https://youtube.com/channel/UCdaIDs1Zv4aBFnDAb8hBvPQ"
  window.open(link)
}

function instagram(){
  console.log("instagram")
  var link ="https://www.instagram.com/santhosh_shanmugam_20/";
  window.open(link)
}

function telegram(){
  console.log("telegram")
  var link ="https://web.telegram.org/?legacy=1#/im?p=@sandy20112003";
  window.open(link);
}

//whatsapp
function gotowhatsapp() {    
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  if (name == null) {
      alert("Please Enter your full Name");
  } else if(phone.toString().length != 10 && typeof(phone) != 'number') {
      alert("Please Enter your Phone Number");
  } else if (email == 0){
      alert("Please Enter your Email Id");
  }else{
      var url = "https://wa.me/919952598921?text=" 
      +"hi santhosh I am"+"%0a"
      + "Name: " + name + "%0a"
      + "Phone: " + phone + "%0a"
      + "Email: " + email  + "%0a"
      + "It is My number and Email id Kindly Save This...."; 
      if(name != null && phone != null && email != null){
      window.open(url, '_blank').focus();
      }
  }
  }