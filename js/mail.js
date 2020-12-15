function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "hardwoodfloorsdfw@gmail.com",
	Password : "dfw!gmail",
	To : 'hardwoodfloorsdfw@gmail.com',
	From: $("#contactemail").val() ,
	Subject: $("#contactname").val() + ' ' + $("#contactsubject").val(),
	Body : $("#contactmessage").val(),
	}).then(
		message => alert("Correo enviado")
	);
}