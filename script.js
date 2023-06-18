const hambergerBtn=document.querySelector(".hamburger");
const closeBtn=document.querySelector(".cross");
hambergerBtn.addEventListener("click",()=>{
  console.log("h")
  document.querySelector(".menu").classList.remove("hidden")
  document.querySelector(".cross").classList.remove("hidden")
  document.querySelector(".hamburger").classList.add("hidden")
})
closeBtn.addEventListener("click",()=>{
  document.querySelector(".menu").classList.add("hidden")
  document.querySelector(".cross").classList.add("hidden")
  document.querySelector(".hamburger").classList.remove("hidden")
})