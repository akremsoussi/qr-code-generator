function generate(){
const userInput = document.getElementById("input").value;

const qrContainer = document.getElementById("Qr");

if(userInput == ""){
    alert("please enter a valid input");
    return;
}

if(qrContainer.innerHTML===""){
    var qrcode = new QRCode(qrContainer,userInput);
}
else{
    qrContainer.innerHTML = "";
    var qrcode = new QRCode(qrContainer,userInput);
}




}