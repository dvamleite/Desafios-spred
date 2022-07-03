const idMenu = document.querySelectorAll('nav a')

idMenu.forEach(itens =>{
    itens.addEventListener('click', scrollToIdSection)
})

function scrollToIdSection(e){
   e.preventDefault()
   const element = e.target
   const idRef = element.getAttribute('href')
   const to = document.querySelector(idRef).offsetTop

   window.scroll({
    top: to - 56,
    behavior: "smooth",
   })
}

