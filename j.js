$(document).ready(function() {
function qty(val){
pqty = $('#prdqty').val();
if (val == "plus") {
      var newVal = parseFloat(pqty) + 1;
    } else {
    if (pqty > 1) {
      var newVal = parseFloat(pqty) - 1;
    } else {
      newVal = 1;
    }
}
$('#prdqty').val(newVal);
}
});