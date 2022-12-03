setTimeout(() => {
    if (confirm("Login to Continue more ...")) {
      document.body.style.display ="none";
      window.open("login.html");
    } else {
      alert("You Can't Access the Primary Contents of the Page ");
    }
    }, 20000);

function Tamil(){
  document.getElementById("heading").innerText="சந்தோஷ்_ஷாப்பிங்ஸ்";
  document.getElementById("heading").style.fontSize="32px";
  document.getElementById("signin").innerText="உள்நுழைவு";
  document.getElementById("catogories").innerText="வகைகள்";
  document.getElementById("signup").innerText="பதிவுபெறு";
  document.getElementById("dark").innerText="புதிய இருண்ட தீம் முயற்சிக்கவும்";
  document.getElementById("discover").innerText="கண்டறியவும்";
  document.getElementById("discover").style.fontSize ="40px";
  document.getElementById("new").dir="ltr";
  document.getElementById("new").style.textAlign ="end";
  document.getElementById("copyright").innerText="பதிப்புரிமை @ 2022 ச&நி. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை";
  document.getElementById("copyright").style.fontSize = "10px";
  document.getElementById("new").innerText="...புதிதாக";
  document.getElementById("contact").innerText="தொடர்பு";
  document.getElementById("aboutus").innerText ="நாம் என்ன செய்கிறோம் ??";
  document.getElementById("aboutus").style.fontSize = "20px"
  document.getElementById("quotee1").innerText="இதைப் பற்றி யோசிப்பதை நிறுத்த முடியாவிட்டால்,அதை வாங்கவும் ";
  document.getElementsByClassName("navbar").style.height = "200px";
}
function history(){
  document.getElementById("course").innerText="HISTORY";
  document.getElementById("image").style.backgroundImage ="url('images/historypic.jpg')"
  document.getElementById("image").style.backgroundPosition = "0px 0px";
}
function product(){
  document.getElementById("course").innerText="PRODUCT";
  document.getElementById("image").style.backgroundImage ="url('images/product.webp')"
  document.getElementById("image").style.backgroundPosition = "0px 0px";
}
function shipping(){
  document.getElementById("course").innerText="SHIPPING";
  document.getElementById("image").style.backgroundImage ="url('images/shipping.jpg')"
  document.getElementById("image").style.backgroundPosition = "0px 0px";
}
function customercare(){
  document.getElementById("course").innerText="CUSTOMER CARE";
  document.getElementById("image").style.backgroundImage ="url('images/support_services.jpg')"
  document.getElementById("image").style.backgroundPosition = "0px 0px";
}
function services(){
  document.getElementById("course").innerText="SERVICES";
  document.getElementById("image").style.backgroundImage ="url('images/services.png')"
  document.getElementById("image").style.backgroundPosition ="50px 2px";
}


function English(){
  document.getElementById("heading").innerText="Santhosh_Shopping's";
  document.getElementById("heading").style.fontSize="50px"
  document.getElementById("signin").innerText="Login";
  document.getElementById("signup").innerText="Register";
  document.getElementById("dark").innerText="Try the new Dark theme";
  document.getElementById("discover").innerText="Discover";
  document.getElementById("discover").style.fontSize ="50px";
  document.getElementById("new").dir="rtl";
  document.getElementById("new").style.textAlign ="start";
  document.getElementById("discover").style.fontSize ="40px";
  document.getElementById("new").innerText="New ...";
  document.getElementById("aboutus").innerText ="What we are doing ??";
  document.getElementById("copyright").innerText = "copyright @ 2022 S&N.All rights reserved ";
  document.getElementById("copyright").style.fontSize = "initial";
  document.getElementById("aboutus").style.fontSize = "20px"
  document.getElementById("catogories").innerText="Catogories";
  document.getElementById("contact").innerText="Contact";
  document.getElementById("quotee1").innerText="If you can't stop thinking about it,BUY IT";
}