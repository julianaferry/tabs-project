
const tabActive = () => {
    // get the title and the texts
    let titleElm = document.querySelectorAll('.tabs-header__title');   
    let NewActiveTab = document.querySelectorAll('.tabs-content__txt');
 
//for loop throught the titles
 for (const i = 0; i < titleElm; i++) {
     //click event add
    titleElm[i].addEventListener('click', function() {
       for (const i = 0; i < titleElm; i++) {
            NewActiveTab[i].className = 'tabs-content__txt';
       }
 

    document.getElementById(this.dataset.id).className = 'tabs-content__txt active';


    for (const i = 0; i < titleElm; i++) {
        titleElm[i].className = 'tabs-header__title active';
   }
    this.className = 'tabs-header__title active';
})
}
  
}
  
tabActive();

