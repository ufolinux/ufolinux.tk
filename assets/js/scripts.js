$.get("navigation.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});

document.body.addEventListener("scroll", function(event) {
  var opacity = (document.body.offsetHeight - document.body.scrollTop) / document.body.offsetHeight;
  var scale = (document.body.offsetHeight - document.body.scrollTop) / document.body.offsetHeight;
  document.documentElement.style.setProperty('--headerOpacity', opacity);
  document.documentElement.style.setProperty('--headerScale', scale);
});

function changeTheme(){
   const togle = document.getElementById("toggle");
   if (togle.checked == true){
		document.getElementById("theme").setAttribute("href" , 'dark.css');
   }
   else{
		document.getElementById("theme").setAttribute("href" , 'style.css');
   }
}
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 170
      }, 400, function(){
        window.location.hash = hash;
      });
    }
  });
var sn = document.getElementById("Snav");
function dump(){
	sn.style.left = "-120%";
}
function pull(){
	sn.style.left = "0";
}