const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

// Add an event listener to the search button
// When teh button is clicked the search bar is active & will expand
btn.addEventListener("click", () => {
    search.classList.toggle('active');//On the search, toggle the class of active on the search to widen once clicked
    input.focus();//When search button is clicked focus is placed inside search bar (blinker is active)
})


