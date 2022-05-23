//Loading data files
console.log("loading...");
$.get("navigation.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});
$.get("footer.html", function(data){
    $("#footer-placeholder").replaceWith(data);
});
$.get("head.html", function(data){
    $("#head-placeholder").replaceWith(data);
});
$.get('head.html', function (response) {
        $('#head-placeholder').html(response);
    });
console.log("//All files loaded succesfully...");

//Useless Functions
document.body.addEventListener("scroll", function(event) {
  var opacity = (document.body.offsetHeight - document.body.scrollTop) / document.body.offsetHeight;
  var scale = (document.body.offsetHeight - document.body.scrollTop) / document.body.offsetHeight;
  document.documentElement.style.setProperty('--headerOpacity', opacity);
  document.documentElement.style.setProperty('--headerScale', scale);
});

//Theme Toggle
function changeTheme(){
   const togle = document.getElementById("toggle");
   const themeA = document.getElementById("theme");
   const themeB = document.getElementById("themeR");
   const themeC = document.getElementById("themeH");
   if (togle.checked == true){
		themeA.setAttribute("href" , './assets/css/dark.css');
    themeB.setAttribute("href" , './assets/css/responsive-dark.css');
    themeC.setAttribute("content" , '#fff');
   }
   else{
		themeA.setAttribute("href" , './assets/css/style.css');
    themeB.setAttribute("href" , './assets/css/responsive.css');
    themeC.setAttribute("content" , '#000');
   }
}

//Scroll Functions
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

//MenuBar Toggle
var sn = document.getElementById("Snav");
function dump(){
	sn.style.left = "-120%";
}
function pull(){
	sn.style.left = "0";
}