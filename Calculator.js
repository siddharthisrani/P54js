 let store="" // empty string

 let cal=(value)=>{

let Display=document.querySelector("#screen")

store=store+value  //  ""+1=> 1     1+ +=> 1+   1+ + 2=> 1+2

Display.innerHTML=store

 }

 let res=()=>{
    
let Display=document.querySelector("#screen")

     store=   eval(store).toString() 

     Display.innerHTML=store

 }


 let ac=()=>{
let Display=document.querySelector("#screen")
    store=""
Display.innerHTML=store

 }


 let del=()=>{
let Display=document.querySelector("#screen")

 store= store.slice(0,-1)
Display.innerHTML=store
   

 }