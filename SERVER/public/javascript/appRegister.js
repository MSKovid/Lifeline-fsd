function verifyRegistration(){
    var mobileNo = document.getElementById("MobileNumber").value;
    var dob=new Date(document.getElementById("dobInput").value);
    var curr_date=new Date().getTime();
    var dob_input = dob.getTime();
    var mobile  = new RegExp(/^\d{10}$/);
    var email = document.getElementById('mailID').value;
    var mail = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    if(!mail.test(email)){
        alert("Invalid email address!!");
        return false;
    }
    else if(!mobile.test(mobileNo)) {
        alert("Invalid Mobile number!!");
        return false;
    }else if(curr_date < dob_input){
        alert("Invalid Date of Birth!!");
        return false;
    }else{
        return true;
    }
}
   
var regform=document.getElementById("register-form");
regform.addEventListener("submit",function(e){
    if(verifyRegistration()==false){
        e.preventDefault();
    }
    else{
        console.log("Registered successfully")
    }
})