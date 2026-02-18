const storageKey ="feedback-form-state" 

const formData ={
    email: "", message: ""
}

const formEl = document.querySelector(".feedback-form")

formEl.addEventListener("input", handlerInput)
formEl.addEventListener("submit", handlerSubmit)


populatInput()


function handlerInput(event){
    if(event.target.name === "email"){
        formData.email=event.target.value.trim()
        localStorage.setItem(storageKey, JSON.stringify(formData))
        return
    } formData.message=event.target.value.trim()
    localStorage.setItem(storageKey, JSON.stringify(formData))
    }




function populatInput(){
    const newMes = JSON.parse(localStorage.getItem(storageKey))
if(newMes){
 formEl.elements.email.value = newMes.email;
 formEl.elements.message.value = newMes.message ;
 formData.email=newMes.email;
 formData.message = newMes.message;
}

}


function handlerSubmit(event){
    event.preventDefault();
   if(formEl.elements.email.value.length===0 ||formEl.elements.message.value.length===0 )
   {return alert("Fill please all fields") 
}else {console.log(formData);
localStorage.removeItem(storageKey);
formEl.reset();}

formData.email="",
formData.message = ""
    
}



    

