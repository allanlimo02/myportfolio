username=document.getElementById('username');
useremail=document.getElementById('useremail');
function validator(){
    if(username==''){
        alert('Dear user, kindly input your Name');
        username.focus();
        return validator;
    }else
    if (useremail.equals('')){
        alert('Dear '+username.value+' KIndly input your email')
        useremail.focus();
        return validator;
    }else{
        alert('Dear '+username.value +' I have receive your email\I will get back to you soon.\n Thanks')
        return validator;
    }
    

}