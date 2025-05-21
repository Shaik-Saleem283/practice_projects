function reg(){
    const name=document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const password=document.getElementById("password").value;
    const cpassword=document.getElementById("confirm_password").value;
    let v={
        "name":name,
        "password":password
    }
    if(!name || !email || !password || !cpassword){
        document.getElementById("passerror").innerText="* fields cannot be empty";
        return;
    }
    if(cpassword !== password){
        document.getElementById("passerror").innerText="* Password do not match";
    }
    else{
        localStorage.setItem(email,JSON.stringify(v))
        window.location.href="welcome.html";

    }
}
function login(){
    const email=document.getElementById("email").value.trim();
    const password=document.getElementById("password").value;
    
    const storage=localStorage.getItem(email);
    const data=JSON.parse(storage);
    if(!email){
        document.getElementById("email_error").innerHTML="please enter email";
        return;
    }
     if(!password){
        document.getElementById("error").innerHTML="Password fields cannot be empty";
        return;
    }
     if(!storage){
        document.getElementById("email_error").innerHTML="please enter valid email";
        return;
    }
    if(password !== data.password){
        document.getElementById("error").innerHTML="please enter valid password";
        return;
    }
    window.location.href="welcome.html"
    
}