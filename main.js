/* crear una variable de la lista que aparecen y desaparecen */
let listElements = document.querySelectorAll('.list__button--click');
/* recorrer los submenus con forEach para ejecutar una función */
listElements.forEach(listElement =>{
    listElement.addEventListener('click', ()=>{
        /* al tocar el elemento le agrega la clase arrow */
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        //validar cuanto heigth necesita el submenu
        //console.log(menu.scrollHeight);
        //minimizar el menu
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }
        //aumentar el menu
        menu.style.height = `${height}px`
        
    })
});