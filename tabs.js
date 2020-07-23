document.addEventListener("DOMContentLoaded", function() { 
    //get titles and texts
    const titleTabs = document.getElementsByClassName('tabs-header__title');
    const textTabs = document.getElementsByClassName('tabs-content__txt');
        
    //first remove any --active class on titles
    const openedTab = (Id) => {
        for (i = 0; i < titleTabs.length; i++) {
            titleTabs[i].classList.remove('tabs-header__title--active');
        }
    
        //first remove any --active class on text
        for (i = 0; i < textTabs.length; i++) {
            textTabs[i].classList.remove('tabs-content__txt--active');
        }

        //add class on event.target
        event.target.classList.add('tabs-header__title--active');

        //find id and add class --active
        document.getElementById('tabs__txt--' + Id).classList.add('tabs-content__txt--active');
        }

        //loop through titles again and add event click
        for (i = 0; i < titleTabs.length; i++) {
            titleTabs[i].addEventListener('click', () => {
                openedTab(this.innerHTML.replace(/\s+/g, '-').toLowerCase());
        });
    }
});