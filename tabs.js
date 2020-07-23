document.addEventListener("DOMContentLoaded", () => {  
    let tabHeader = document.getElementsByClassName('tabs__header');
    let tabContent = document.getElementsByClassName('tabs__content');
  
    const newTab = (Id) => {
        //loop through the titles
      for (i = 0; i < tabHeader.length; i++) {
        tabHeader[i].classList.remove('tabs__header--active');
      }

      //loop through the text
      for (i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove('tabs__content--active');
      }
      //add class active on header
      event.target.classList.add('tabs__header--active');
      
      //find id and add class active -  show text
      document.getElementById('tabs__content--' + Id).classList.add('tabs__content--active');
    }
  
        //loop through titles and click event
        for (i = 0; i < tabHeader.length; i++) {
        tabHeader[i].addEventListener('click', function() {
            //replace text inside 
            newTab(this.innerHTML.replace(/\s+/g, '-').toLowerCase());
        });
    }
  });