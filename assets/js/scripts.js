//Loading data files
console.log("//Loading Files...");
$.get("navigation.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});
$.get("footer.html", function(data){
    $("#footer-placeholder").replaceWith(data);
});
$.get("head.html", function(data){
    $("#head-placeholder").replaceWith(data);
});
console.log("//All Files loaded succesfully...");

/*
//Theme Toggle
function changeTheme(){
   const togle = document.getElementById("toggle");
   const thm = document.getElementById('theme-re');
   const themeA = document.getElementById("theme");
   const themeB = document.getElementById("themeR");
   const themeC = document.getElementById("themeH");
   if (togle.checked == true){
		themeA.setAttribute("href" , './assets/css/dark.css');
	    themeB.setAttribute("href" , './assets/css/responsive-dark.css');
	    themeC.setAttribute("content" , '#fff');
	    thm.setAttrubute("href" , '');
	    console.log('55');
   }
   else{
		themeA.setAttribute("href" , './assets/css/style.css');
		thm.setAttrubute("href" , './assets/css/style.css');
	    themeB.setAttribute("href" , './assets/css/responsive.css');
	    themeC.setAttribute("content" , '#000');
	    console.log('77');
   }
}


//MenuBar Toggle
var sn = document.getElementById("Snav");
function dump(){
	sn.style.left = "-120%";
}
function pull(){
	sn.style.left = "0";
}


//Useless Functions

document.body.addEventListener("scroll", function(event) {
  var opacity = (document.body.offsetHeight - document.body.scrollTop) / document.body.offsetHeight;
  var scale = (document.body.offsetHeight - document.body.scrollTop) / document.body.offsetHeight;
  document.documentElement.style.setProperty('--headerOpacity', opacity);
  document.documentElement.style.setProperty('--headerScale', scale);
});
//Scroll Functions
/*
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 250
      }, 0, function(){
        window.location.hash = hash;
      });
    }
  });
*/