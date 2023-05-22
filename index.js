// form
function submitForm() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    
    // Set the modal body content
    var modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = "<b> Name:  </b> " + name + "<br> <b> Age:  </b> " + age;
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector(".next");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Open modal
btn.onclick = function() {
  modal.style.display = "block";
};

// Close modal
span.onclick = function() {
  modal.style.display = "none";
};

// Close modal when clicking outside it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
