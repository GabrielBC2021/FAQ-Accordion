//Getting the buttons and body accordion to add classes
const accordion_buttons = document.querySelectorAll(".accordion-header");
const accordion_body = document.querySelectorAll(".accordion-body");

//Creating forEach to add classes in children
accordion_buttons.forEach( button => {

  button.addEventListener( "click", event => {
    accordion_body.forEach( accordion => {

      if (event.target.nextElementSibling !== accordion && accordion.classList.contains("active")) {
        accordion.classList.remove("active");
        accordion_buttons.forEach( button => button.classList.remove("active") );
      }
    });

    //We toggle the class ".active" 
    const panel = button.nextElementSibling;
    panel.classList.toggle("active");
    button.classList.toggle("active");
  });
});

window.onclick = ( event ) => {

  //When we click on the event and if it doesn't match with the class ".accordion-header" we remove the class ".active"
  if (event.target.matches(".accordion-header") && !event.target.matches(".accordion-header")) {

    accordion_buttons.forEach( button => button.classList.remove("active"));
    
    accordion_body.forEach( accordion => accordion.classList.remove("active")); 
  
  }
};


