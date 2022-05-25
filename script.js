//Aos initialization
AOS.init();

//MenuBar Animation
var sn = document.getElementById("Snav");
function dump(){
	sn.style.left = "-120%";
}
function pull(){
	sn.style.left = "0";
}

//All Products
var productA = {
	name : "Matte Fabric" ,
	color : "Blue / Green" ,
	price : "180₹",
	image : ["./assets/img/matte/B1.png" , "./assets/img/matte/B2.png" , "./assets/img/matte/G2.png"]
};
var productB = {
	name : "Non-wooven Fabric" ,
	color : "Blue / Green" ,
	price : "80₹" ,
	image : ["./assets/img/nw/G1.png" , "./assets/img/nw/G2.png" , "./assets/img/nw/G3.png"]
};
var productC = {
	name : "Basic-rubber Stamp" ,
	color : "" ,
	price : "" ,
	image : ["./assets/img/stamps/b-r-s.jpg"]
};
var productD = {
	name : "Round Stamp" ,
	color : "" ,
	price : "" ,
	image : ["./assets/img/stamps/r-s.jpg"]
};
var productE = {
	name : "Self-inking Stamp" ,
	color : "" ,
	price : "" ,
	image : ["./assets/img/stamps/s-i-s.jpg"]
};

//vars
const cd = document.querySelector('.container-details');
const name = cd.querySelector("#name");
const price = cd.querySelector("#price");
const buy = document.getElementById("Buy");
const img = document.getElementsByClassName("image");
const section = document.getElementById("section");
const iname = document.getElementById("input-name");
const prompt = document.getElementById("prompt");

//Automate script for products at home
$(document).ready(function(){
	const pct = document.querySelector('#p-a');
		const img = pct.querySelectorAll(".p-i");
		const set = document.querySelector('.setA');
		const name = set.querySelectorAll("#name");
		const price = set.querySelectorAll("#price");
		name[0].innerHTML = "Type : " + productA.name ;
		price[0].innerHTML = "&nbsp;&nbsp; Price :" + productA.price;
		for (var i = 0, len = img.length; i < len; i++) {
			img[i].setAttribute("src" , productA.image[i]);
		}
	}
);
$("#p-a").ready(function(){
	const pct = document.querySelector('#p-b');
		const img = pct.querySelectorAll(".p-i");
		const set = document.querySelector('.setA');
		const name = set.querySelectorAll("#name");
		const price = set.querySelectorAll("#price");
		name[1].innerHTML = "Type : " + productB.name ;
		price[1].innerHTML = "&nbsp;&nbsp; Price :" + productB.price;
		for (var i = 0, len = img.length; i < len; i++) {
			img[i].setAttribute("src" , productB.image[i]);
		}
	}
);
$("#p-b").ready(function(){
	const pct = document.querySelector('#p-c');
		const img = pct.querySelectorAll(".p-i");
		const set = document.querySelector('.setB');
		const name = set.querySelectorAll("#name");
		const price = set.querySelectorAll("#price");
		name[0].innerHTML = "Type : " + productC.name ;
		price[0].innerHTML = "&nbsp; Price :" + productC.price;
		for (var i = 0, len = img.length; i < len; i++) {
			img[i].setAttribute("src" , productC.image[i]);
		}
	}
);
$("#p-c").ready(function(){
	const pct = document.querySelector('#p-d');
		const img = pct.querySelectorAll(".p-i");
		const set = document.querySelector('.setB');
		const name = set.querySelectorAll("#name");
		const price = set.querySelectorAll("#price");
		name[1].innerHTML = "Type : " + productD.name ;
		price[1].innerHTML = "&nbsp; Price :" + productD.price;
		for (var i = 0, len = img.length; i < len; i++) {
			img[i].setAttribute("src" , productD.image[i]);
		}
	}
);
$("#p-d").ready(function(){
	const pct = document.querySelector('#p-e');
		const img = pct.querySelectorAll(".p-i");
		const set = document.querySelector('.setB');
		const name = set.querySelectorAll("#name");
		const price = set.querySelectorAll("#price");
		name[2].innerHTML = "Type : " + productE.name ;
		price[2].innerHTML = "&nbsp; Price :" + productE.price;
		for (var i = 0, len = img.length; i < len; i++) {
			img[i].setAttribute("src" , productE.image[i]);
		}
	}
);

//Hiding login page
function hidee(){
	prompt.style.left = "-300%";
	$("#prompt").hide(1000);
}

//Automate script for products at pro-container
function openA(){
	let user = iname.value;
	name.innerHTML = "Type : " + productA.name + " |";
	price.innerHTML = "|  Price :" + productA.price;
	buy.setAttribute("href", "https://wa.me/918950661477?text=Hi%20Ankit,%20I'm%20" + user + "%20and%20am%20interested%20in%20your%20this%20product-%20*Name*:%20" + productA.name + "%20,%20*Color*:%20Any%20.%20Can%20you%20please%20provide%20me%20more%20details%20about%20it?%20");
	for (var i = 0, len = img.length; i < len; i++) {
		img[i].setAttribute("src" , productA.image[i]);
	}
	section.style.bottom = "0";

}
function openB(){
	let user = iname.value;
	name.innerHTML = "Type : " + productB.name + " |";
	price.innerHTML = "|  Price :" + productB.price;
	buy.setAttribute("href", "https://wa.me/918950661477?text=Hi%20Ankit,%20I'm%20" + user + "%20and%20am%20interested%20in%20your%20product-%20*Name*:%20" + productB.name + "%20,%20*Color*:%20Any%20.%20Can%20you%20please%20provide%20me%20more%20details%20about%20it?%20");
	for (var i = 0, len = img.length; i < len; i++) {
		img[i].setAttribute("src" , productB.image[i]);
	}
	section.style.bottom = "0";
}
function openC(){
	let user = iname.value;
	name.innerHTML = "Type : " + productC.name + " |";
	price.innerHTML = "|  Price :" + productC.price;
	buy.setAttribute("href", "https://wa.me/918950661477?text=Hi%20Ankit,%20I'm%20" + user + "%20and%20am%20interested%20in%20your%20product-%20*Name*:%20" + productC.name + "%20,%20*Color*:%20Any%20.%20Can%20you%20please%20provide%20me%20more%20details%20about%20it?%20");
	for (var i = 0, len = img.length; i < len; i++) {
		img[i].setAttribute("src" , productC.image[i]);
	}
	section.style.bottom = "0";
}
function openD(){
	let user = iname.value;
	name.innerHTML = "Type : " + productD.name + " |";
	price.innerHTML = "|  Price :" + productD.price;
	buy.setAttribute("href", "https://wa.me/918950661477?text=Hi%20Ankit,%20I'm%20" + user + "%20and%20am%20interested%20in%20your%20product-%20*Name*:%20" + productD.name + "%20,%20*Color*:%20Any%20.%20Can%20you%20please%20provide%20me%20more%20details%20about%20it?%20");
	for (var i = 0, len = img.length; i < len; i++) {
		img[i].setAttribute("src" , productD.image[i]);
	}
	section.style.bottom = "0";
}
function openE(){
	let user = iname.value;
	name.innerHTML = "Type : " + productE.name + " |";
	price.innerHTML = "|  Price :" + productE.price;
	buy.setAttribute("href", "https://wa.me/918950661477?text=Hi%20Ankit,%20I'm%20" + user + "%20and%20am%20interested%20in%20your%20product-%20*Name*:%20" + productE.name + "%20,%20*Color*:%20Any%20.%20Can%20you%20please%20provide%20me%20more%20details%20about%20it?%20");
	for (var i = 0, len = img.length; i < len; i++) {
		img[i].setAttribute("src" , productE.image[i]);
	}
	section.style.bottom = "0";
}

//Hiding pro-container
function drop(){
	section.style.bottom = "-120%";
}


//Scroll functions
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

//Broken images script
  document.addEventListener("DOMContentLoaded", function(event) {
	document.querySelectorAll('img').forEach(function(img){
	   img.onerror = function(){this.style.display='none';};
	   img.onload = function(){this.style.display='block';};
	})
 });