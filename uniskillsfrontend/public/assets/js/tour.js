const toggleSidebar = () => {
  $(() => {
    if($(window).width() < 770){
        $(".hamburger").trigger('click');
    }
  })
}

const hasClass = (className) => document.getElementsByClassName(className).length > 0;


const handleTourGuide = () => {
  toggleSidebar();

  const tour = new Shepherd.Tour({
    useModalOverlay: true,
    defaultStepOptions: {
      classes: 'shadow-md bg-purple-dark',
      topClass: 'bg-danger',
      scrollTo: {
        behavior: 'smooth',
        block: 'center'
      }
    }
  });

  [
  {
    element: '.business-sidebar-dashboard-tour',
    title : 'Track your Business',
    text: "Keep a constant track on your business with our comprehensive dashboard",
    position : "bottom",
    show: hasClass('business-sidebar-dashboard-tour')
  },
  {
    element: '.student-sidebar-dashboard-tour',
    title : 'Track your Performance',
    text: "Keep a constant track on your performance with our comprehensive dashboard",
    position : "bottom",
    show: hasClass('student-sidebar-dashboard-tour')
  },
  {
    element: '.business-sidebar-appointment-tour',
    title : 'All Appointments at one place',
    text: "In this section, you have the ability to access and monitor all of your appointments, as well as create new ones and maintain records of them.",
    position : "top",
    show: hasClass('business-sidebar-appointment-tour')
  },
  {
    element: '.student-sidebar-appointment-tour',
    title : 'All Appointments at one place',
    text: "In this section, you have the ability to access and monitor all of your appointments.",
    position : "top",
    show: hasClass('student-sidebar-appointment-tour')
  },
  {
    element: '.business-sidebar-application-tour',
    title : 'Job Application',
    text: "Here you will be able to keep track of all your Job Applications",
    position : "right",
    show: hasClass('business-sidebar-application-tour')
  },
  {
    element: '.student-sidebar-application-tour',
    title : 'Job Application',
    text: "Here you will be able to keep track of all your Job Applications",
    position : "right",
    show: hasClass('student-sidebar-application-tour')
  },
].map((item, index) => {

  tour.addStep({
    title : item.title,
    text: item.text,
    showDoneButton : true,
    showOn: () => item.show,
    attachTo: {
      element: item.element,
      on: item.position
    },
    buttons: [
      {
        text: 'Skip',
        action(){
          this.cancel();
          toggleSidebar();
        },
        classes: 'bg-white text-dark fw-bold px-0'
      },
      {
        text: item.element == '.business-sidebar-application-tour' || item.element == '.student-sidebar-application-tour' ? 'Done' : 'Next',
        action() {

          if (item.element == '.business-sidebar-application-tour' || item.element == '.student-sidebar-application-tour') {
            toggleSidebar();
          }

          return this.next();
        },
        classes: 'bg-white text-primary fw-bold px-0 shepherd-next-button'
      }
    ]
  });


});

setTimeout(() => tour.start(), 1000);

}


handleTourGuide();