function validator(){
    username=document.getElementById('username');
    useremail=document.getElementById('useremail');
    if(username==''){
        alert('Dear user, kindly input your Name');
        username.focus();
        return validator;
    }
    if (useremail==''){
        alert('Dear '+username.value+' KIndly input your email')
        useremail.focus();
        return validator;
    }
    alert('Dear '+username.value +' I have receive your email\I will get back to you soon.\n Thanks')

}