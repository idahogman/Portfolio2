function sendMessage(event) {
    event.preventDefault();
    var data = event.srcElement;

    var name = data.name.value;
    var email = data.email.value;
    var message = document.getElementById("message").value;
    console.log(message);
    var messageLength = message.length;

    var thankyouheader = document.getElementById("thankyouMessage");
    // var valid = false;

    // while (valid == true) {
        if (messageLength > 1) {
            thankyouheader.innerText = "Tack för din feedback " + name + "! Ha en toppendag!";
            document.getElementById("message").style.borderColor = "black";
            document.getElementById("message").style.borderWidth = "1px";
            // var valid = true;
    }
        if (message == "") {
            thankyouheader.innerText = "Var vänlig och skriv in ett meddelande!";
            document.getElementById("message").style.borderColor = "red";
            document.getElementById("message").style.borderWidth = "2px";
        }
        
//  }
} 