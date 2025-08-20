function sendMail(){
    let parm={
        name:document.getElementById("exampleInputname1").Value,
        email:document.getElementById("exampleInputEmail1").Value,
        number:document.getElementById("exampleInputnumber1").Value,
        subject:document.getElementById("exampleInputsubject1").Value,
        message:document.getElementById("message").Value,
      
        
    }
    emailjs.send("service_trqzybf","template_1hcmib6",parm).then(alert("Email Sent!!"))
}