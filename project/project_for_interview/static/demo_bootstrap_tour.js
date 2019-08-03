var tour = new Tour({
  storage: false,
  backdrop: false,
  onStart: function (tour) {
    console.log("tour has started")
    },
  onEnd: function (tour) {
    console.log("tour has ended")
    },
  steps: [
  {
    element: "#titlejq",
    title: "Title of my step",
    content: "Content of my step",
    placement: "bottom",
    // animation: false,
    // smartPlacement: true,
    backdrop: true,
  },
  {
    element: "#button1jq",
    title: "Title of my step",
    content: "Content of my step",
    placement: "bottom"
  },
  {
    element: "#yes",
    title: "!!!",
    content: "this is the step with the path change and flashes to tour2",
    path: "/redirect_here",
    onPrev: function (tour) {
      console.log("you have called onPrev");
      // path: "/jquery_page"
      window.location.href='/jquery_page'
    },
    // onNext: function (tour) {
    //   console.log("you have called onNext");
    //   tour2.init();
    //   tour2.start();
    // },
  },
  // {
  //   element: "#title_index",
  //   title: "you have navigated, noice!",
  //   content: "Content of my step"
  // },

]});


// Initialize the tour
tour.init();

// Start the tour
tour.start();

// this makes the tour continue on another page (not just redirect) and the user can even navigate away and back and it should still let them continue the tour (https://stackoverflow.com/questions/24525748/bootstrap-tour-for-multipage-redirect-but-not-strat-next-page-tour)
if (tour){
  if(tour.started() && !tour.ended())
      {
          tour.init();
          tour.start();
      }
}
