   //nodemailer used to send   mail 
const nodemailer=require("nodemailer")

//WE SEND MAIL THROUGH SMTP   PROTOCOL
const  sendEmail=async(req,resp)=>{
  let testAccount=await nodemailer.createTestAccount();
    //connect to smtp protocol,smtp  is used  for sending mail from server//
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: 'magali.bahringer92@ethereal.email',
          pass: 'TD47gwaCE7DH1pW25r'
      }
  });
     
  const info = await transporter.sendMail({
    from: '"ompandey 👻" <foo@example.com>', // sender address
    to: "ompandey092@gmail.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Mai hu don</b>", // html body
  });

  // let testAccount=await nodemailer.createTestAccount();
    resp.json(info)
}  
  module.exports=sendEmail;