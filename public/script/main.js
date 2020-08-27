//Set the first date available to the current day
$(function(){
    var today = new Date();

    var month = today.getMonth() + 1;
    var day = today.getDate();
    var year = today.getFullYear();

    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();

    var minDate = year + '-' + month + '-' + day;    
    $('#dateFrom').attr('min', minDate);    
});

//Clear dateTo input field when dateFrom changes
$("#dateFrom").on("change paste keyup", function() {   
    $('#dateTo').val('');
});

//Set the first date of the field dateTo available according to dateFrom value
$("#dateFrom").on("change paste keyup", function() {   
    $('#dateTo').attr('min', $(this).val());
});

//
$("#phone").on("change paste keyup", function() {
    var phone = $('#phone').val();
    phone = phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    $('#phone').val(phone);
});







// https://www.w3schools.com/howto/howto_css_modal_images.asp
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
function reply_click(obj){
  console.log(obj);
  modal.style.display = "block";
  modalImg.src = obj.src;
  captionText.innerHTML = obj.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}