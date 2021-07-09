function validator(){
    username=document.getElementById('username').value;
    useremail=document.getElementById('useremail').value;
    if(username==''){
        alert('Dear user, kindly input your Name');
        username.focus();
        return false;
    }
    if (useremail==''){
        alert('Dear '+username.value+' KIndly input your email')
        useremail.focus();
        return false;
    }
    alert('Dear '+username.value+' I have receive your email\I will get back to you soon.\n Thanks')

}