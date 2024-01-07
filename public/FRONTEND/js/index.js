window.onload = function () {

  /***************************
  PRELOADER COUNTER  
  ***************************/

  // let counts = setInterval(updated, 10);
  // let upto = 0;
  // let width = 0;

  // function updated() {}

  // function updated() {
  //   const count = document.getElementById("counter");
  //   const hr = document.getElementById("hr");
  //   ++upto;
  //   count.innerHTML = "LOADING<br/>" + upto + "%";
  //   hr.style.width = upto + "%";
  //   if (upto === 100) {
  //     clearInterval(counts);
  //     count.innerHTML = "DONE!";
  //   }
  // }

  /***************************
  PRELOADER COUNTER ENDS 
  ***************************/

  // let businessHero = document.getElementById('business-hero-tab');
  // let studentHero = document.getElementById('student-hero-tab');

  /***************************
  SCROLL TO TOP BUTTON  
  ***************************/

  // var docbody = document.getElementById("scroll-top");

  // window.onscroll = function () {
  //   scroll_function();
  // };

  // function scroll_function() {
  //   if (
  //     document.body.scrollTop > 100 ||
  //     document.documentElement.scrollTop > 100
  //   ) {
  //     docbody.className = "scroll-to-top";
  //   } else {
  //     docbody.className = " ";
  //   }
  // }

  /***************************
SCROLL TO TOP BUTTON ENDS
***************************/

  //  function heroChange(){
  //   if(document.body.scrollTop >= 1 || document.documentElement.scrollTop >= 1)
  //   {
  //    studentHero.click();
  //   }
  //   else{
  //      businessHero.click();
  //   }
  // }
};

/***************************
NAVBAR BUTTON  
***************************/

const menuBtn = document.querySelector(".navbar-toggler");

var menuOpen = false;

const navbarOpen = () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
};

const navbarFocusClose = () => {
  if (menuOpen) {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
};

menuBtn.addEventListener("click", () => {
  navbarOpen();
});

menuBtn.addEventListener("focus", () => {
  navbarFocusClose();
});

/***************************
NAVBAR BUTTON ENDS 
***************************/

/***************************
BOOTSTRAP TRIGGER  
***************************/

var triggerTabList = [].slice.call(document.querySelectorAll("pill-tab"));
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl);

  triggerEl.addEventListener("click", function (event) {
    event.preventDefault();
    tabTrigger.show();
  });
});

/***************************
BOOTSTRAP TRIGGER ENDS
***************************/
