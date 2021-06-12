const title = document.querySelector('h1');
const element = document.querySelector('.element');
const popup = document.querySelector('.popup');

title.addEventListener('click', () =>{
  element.classList.toggle('frosted');
  popup.classList.add('hidden');
})

title.addEventListener('mouseenter', ()=>{
  popup.classList.remove('hidden');
})

title.addEventListener('mouseleave', ()=>{
  popup.classList.add('hidden');
})