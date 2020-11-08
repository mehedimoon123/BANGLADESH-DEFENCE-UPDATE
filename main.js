


// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  var firebaseConfig = {
    apiKey: "AIzaSyChe-OHvuj2361Ya1bHS-Turv2MWQsW49A",
    authDomain: "bdu2019-a6dd2.firebaseapp.com",
    databaseURL: "https://bdu2019-a6dd2.firebaseio.com",
    projectId: "bdu2019-a6dd2",
    storageBucket: "bdu2019-a6dd2.appspot.com",
    messagingSenderId: "909049036150",
    appId: "1:909049036150:web:50342c5d3796d951198e57",
    measurementId: "G-XFDJ9RJHGK"
  };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   var arr = [];


var rootRef = firebase.database().ref("messages");
rootRef.on("value", snap => {
    var temp = snap.val();

    for (var i in temp) {
        arr.push(temp[i]);
    }

    console.log(arr);
  //ACCESS LIKE THIS:
    // console.log(arr[0].company);

    //put values from arr[] to HTML <DO WITH FUNCTION>
    loadFromDatabase();
})

function loadFromDatabase() {
    var myTable = document.getElementById("main_table");
    for (var i = 0; i < arr.length; i++) {
        var tableRow = document.createElement("tr");

        var tableData1 = document.createElement("td");
        var tableData2 = document.createElement("td");
        var tableData3 = document.createElement("td");
        tableData1.innerHTML = arr[i].contact_name;
        tableData2.innerHTML = arr[i].contact_email;
        tableData3.innerHTML = arr[i].contact_message;


        tableRow.appendChild(tableData1);
        tableRow.appendChild(tableData2);
        tableRow.appendChild(tableData3);

        myTable.appendChild(tableRow);
      }
  }
  // Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contact').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var contact_name = getInputVal('contact_name');
    var contact_email = getInputVal('contact_email');
    var contact_message = getInputVal('contact_message');
  


    // Save message
    saveMessage(contact_name,contact_email,contact_message);
 // Show alert
 document.querySelector('.alert').style.display = 'block';

 // Hide alert after 3 seconds
 setTimeout(function () {
     document.querySelector('.alert').style.display = 'none';
 }, 3000);

 // Clear form
 document.getElementById('contact').reset();
}

// Function to get get form values
function getInputVal(id) {
 return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(contact_name,contact_email,contact_message) {
 var newMessageRef = messagesRef.push();
 newMessageRef.set({
     contact_name:contact_name,
     
     contact_email: contact_email,
     
     contact_message: contact_message
 });
}
