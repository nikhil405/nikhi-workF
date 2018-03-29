// function showInput() {
//         document.getElementById('display').innerHTML = 
//                     document.getElementById("user_input").value;
//     }
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    var x = document.forms["myForm"]["Sname"].value;
    var x = document.forms["myForm"]["email"].value;
    var x = document.forms["myForm"]["adress"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}
function showInput() {
        document.getElementById('display').innerHTML = 
                    document.getElementById("user_input").value;
    }