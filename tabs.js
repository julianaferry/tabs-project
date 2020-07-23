
const TabActive = (event) => {
    let activeTabs = document.querySelectorAll('.tabs-header__txt');
    
    activeTabs.forEach((tab) => {
      tab.className = tab.className.replace('active', '');
    });
    
    // activate new tab and panel
    event.target.parentElement.className += ' active';
    document.getElementsByClassName(event.target.href.split('#')[1]).className += ' active';
  }
  
  const element = document.getElementsByClassName('tabs-header__title');
  
  element.addEventListener('click', tabActive, false);
