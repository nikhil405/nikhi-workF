


function plus(field) {
 nr = parseInt(document.getElementById(field).value);
 document.getElementById(field).value = nr + 1;
}
 
function minus(field) {
 nr = parseInt(document.getElementById(field).value);
 if (nr > 0) {
   if( (nr - 1) >= 0) {
     document.getElementById(field).value = nr - 1;
   }
 }
} 
