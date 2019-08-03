
var tour2 = new Tour({
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
      element: "#yes",
      title: "!!!",
      content: "this is the step with the path change and flashes to tour2",
      path: "/redirect_here",
      onPrev: function (tour) {
        console.log("you have called onPrev");
        // path: "/jquery_page"
        window.location.href='/jquery_page'
      },
    }
  {
    element: "#try_separate_tour",
    title: "this is tour2!",
    content: "Content of my step"
  },

]});


// Initialize the tour
tour2.init();

// Start the tour
tour2.start();

// this makes the tour continue on another page (not just redirect) and the user can even navigate away and back and it should still let them continue the tour (https://stackoverflow.com/questions/24525748/bootstrap-tour-for-multipage-redirect-but-not-strat-next-page-tour)
if (tour2){
  if(tour2.started() && !tour2.ended())
      {
          tour2.init();
          tour2.start();
      }
}

// add an onPrev to redirect back to a previous page when the previous step is on a different page.
// have the first step of the next page match the last step of the previous page for continuity if you start a completely new tour instance
