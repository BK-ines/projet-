// remove menu Bar 
const navLink = document.querySelectorAll('.nav-link');
function linkAction(){
    const navMenu = document.querySelector('.nav');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Change Color Link 
const linkColor = document.querySelectorAll('.nav-link');
function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
}
linkColor.forEach(l => l.addEventListener('click' , colorLink));
// Swipe Home Section
var swiper = new Swiper(".home-slider", {
    loop:true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },  
  });

  //swiper schedule section
  var swiper = new Swiper(".time-images", {
    loop:true,
    spaceBetween: 0,
    grapCursor:true,
    autoplay: {
      delay: 2500,   
    },
   breakpoints: 
   {
     0:{
       slidesPerview : 1,
     } ,

     640:{
      slidesPerview : 3,
    } ,

    768:{
      slidesPerview : 4,
    } ,
    
    1024:{
      slidesPerview : 5,
    } ,


   }
  });

  //change header backgroun when scroll

  const header =document.querySelector('.header')
  window.addEventListener('scroll', ()=>{
    if(window.scrollY >=70){
      header.classList.add('header-shadow')
    }
    else header.classList.remove('header-shadow')
  })

  //scroll Top Button
const up =document.querySelector('.up')

window.onscroll =() => {
up.classList.toggle('show', window.scrolly >= 560)
}
up.onclick = () => {
window.scrollTo({behavior: 'smooth', top: 'e'})

}
// script.js

function calculateCalories() {
  // Récupérer la valeur du champ d'entrée
  var caloriesInput = document.getElementById('caloriesInput').value;

  // Vérifier si la valeur est un nombre
  if (!isNaN(caloriesInput)) {
      // Calculer le nombre total de calories
      var result = parseInt(caloriesInput) + 500; // Ajouter 500 calories à titre d'exemple

      // Afficher le résultat
      document.getElementById('result').innerHTML = 'Nombre total de calories : ' + result + ' calories.';
  } else {
      // Afficher un message d'erreur si la valeur n'est pas un nombre
      document.getElementById('result').innerHTML = 'Veuillez entrer un nombre valide.';
  }
}
