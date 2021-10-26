//responsive function
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
 
//defining sticky function
window.onscroll = function (){
    stickyFunction()
};
    
var navbar = document.getElementById("myTopnav");
var sticky = navbar.offsetTop;

//sticky function   
function stickyFunction(){
    if (window.pageYOffset >= sticky){
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }
}

document.getElementsByClassName('tablinks')[0].click()

function clickHandle(evt, jobName) {
    let i, tabcontent, tablinks;
  
    // This is to clear the previous clicked content.
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Set the tab to be "active".
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Display the clicked tab and set it to active.
    document.getElementById(jobName).style.display = "block";
    evt.currentTarget.className += " active";
  }  
  
  

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }