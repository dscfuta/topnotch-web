var config = {
    apiKey: "AIzaSyDexK17sL_1W2mShAchVwSTgc231lpUBOc",
    authDomain: "t-euphoria.firebaseapp.com",
    databaseURL: "https://t-euphoria.firebaseio.com",
    projectId: "t-euphoria",
    storageBucket: "t-euphoria.appspot.com",
    messagingSenderId: "331178327824"
  };

  firebase.initializeApp(config);

var database = firebase.firestore();
database.settings({timestampsInSnapshots : true })
// var messageRef  = database.ref('UserProfile');//creating a collection

// function validateForm() {
//     var x = document.forms["myForm"]["email"].value;
//     // var y = document.forms["myForm"]["phone"].value;
//     if (x == "") {
//       alert("Name  and phone numbers required must be filled out");
//       return false;
//     }

//   }




document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){ 
    e.preventDefault();
    var email = getInputValue('email');
    var event_location = getInputValue('event_location');
    var event_type = getInputValue('event_type');
    var name = getInputValue('name');
    var phone = getInputValue('phone');
    var event_date = getInputValue('event_date');
   
     //getting input from a checkbox
    var service_type = []; 
    var inputElements = document.getElementsByClassName('messageCheckbox');
    for(var i=0; inputElements[i] ; i++){
      if(inputElements[i].checked === true){
           service_type.push (inputElements[i].value);
      } 
    }
        console.log(service_type);

        for (var i = 0 ; i < service_type.length ; i++){
                console.log(service_type[i]);
            }

            console.log(event_date);
         
            
               saveMessage(email,event_location,event_type,name,phone,service_type,event_date);
                 
          
       
               getConfirmation();
        

    
}
    

          async function getConfirmation() {
               var retVal = confirm("Do you still want to make a request ?");
               if( retVal == true ) {
                 window.location.href = "form.html";
                   return await true;
               } else {
                  window.location.href = "index.html";
                  return await false;
               }
            }


function saveMessage(email,event_location,event_type,name,phone,service_type,event_date){
    // var newMessageRef = messageRef.push();
    database.collection('UsersRequestss').add({
        email:email,
        event_location:event_location,
        event_type:event_type,
        name:name,
        phone:phone,
        service_type:service_type,
        event_date: event_date

    });
}

function getInputValue (id){
   return document.getElementById(id).value;
}

