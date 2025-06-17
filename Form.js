

  let Valid=()=>{

    let Name=document.querySelector("#name").value.trim()
    let Num=document.querySelector("#number").value.trim()
    let Email=document.querySelector("#email").value.trim()
    let Pass=document.querySelector("#pass").value.trim()
    let Cpass=document.querySelector("#cpass").value.trim()


    let errname=document.querySelector("#errname")
    let errnum=document.querySelector("#errnum")
    let erremail=document.querySelector("#erremail")
    let errpass=document.querySelector("#errpass")
    let errcpass=document.querySelector("#errcpass")

    errname.innerHTML=""
    errnum.innerHTML=""

    if(Name==""){
        errname.innerHTML="Please enter the name"
        // Name.placeholder="error"
        return false
    }

    else if ( Num.length!=10  ){

        errnum.innerHTML="Please enter 10 digits only"
        // errname.innerHTML="" 
        return false

    }

    else if ( isNaN(Num) ){

     errnum.innerHTML="Please enter Number Only" 
     return false       
    }


    else if(!(Email.includes('@') && Email.includes('.com'))){
     
         erremail.innerHTML="Please enter correct email"
         return false

    }

    else if (Pass!=Cpass){
      errcpass.innerHTML="Please enter same password"
      document.querySelector("#cpass").value=""
      document.querySelector("#cpass").focus()
      return false
    }

    else if(!(  Pass.match(/[0-9]/) &&
              Pass.match(/[!@#$%^&*()]/) &&
              Pass.match(/[a-z]/) &&
              Pass.match(/[A-Z]/)
  
  )){

    errpass.innerHTML="Please enter Strong Password"
    return false

  }

  }