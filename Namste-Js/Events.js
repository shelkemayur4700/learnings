// EVENT BUBBLING AND CAPTURING--------->
document.querySelector("#grandParent").addEventListener(
  "click",
  () => {
    console.log("GrandParent clicked");
  }
  //   ,  true //useCapture/tickling == true
);
document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("parent clicked");
  }
  //   true
);
document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child clicked");
  },
  true
);

//Combinations

// 1. Event Bubbling ==> Cilck on child
// child clicked
// parent clicked
// GrandParent clicked

// 2. Event Capture ==> click on child
// GrandParent clicked
// clicked
// child clicked

// 3. When grandParent => useCapture = true ==> clicked on child
// GrandParent clicked
// child clicked
//  parent clicked'

// 4. When child => useCapture = true ==> clicked on child
// child clicked
//  parent clicked
// GrandParent clicked

// EVENT Delegation--------->
// it works on principle of event bubbling , we put event
//  listener on parent element, as we click on child ele
// it bubbles up to parent and then we on the basis of id of ele
// we do further operation like redirection and all
document.querySelector("#category").addEventListener("click", (e) => {
  console.log(e.target.id);
  window.location.href = "/" + e.target.id;
});
