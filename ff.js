$(document).ready(function() {

            $("#order").click(function(){
                var counter = parseInt($("#hiddenVal").val());
                counter++;
                $("#hiddenVal").val(counter);
                $("#counter").text(counter);
            });

        });