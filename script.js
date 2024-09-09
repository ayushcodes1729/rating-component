const rates = document.querySelectorAll(".ratings");
const ratings = document.getElementById("rate-card");
const thanks = document.getElementById("thanks-card");
const submit = document.getElementById("submit");
const ratingNo = document.getElementById("rating-no");

for (let i = 0; i < rates.length; i++) {
  rates[i].addEventListener("click", function(){

    rates.forEach(rate => {
      rate.style.backgroundColor=""
    });
    this.style.backgroundColor="#fc7814";
    ratingNo.innerHTML=i+1;
  })
}

submit.addEventListener("click", ()=>{
  thanks.classList.toggle("hidden");
  ratings.classList.toggle("hidden");

})
