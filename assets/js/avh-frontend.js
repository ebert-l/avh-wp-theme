/***
 * Header Submenu Functions
 * Open and close the corresponding Submenu according to mouse Position
 */
let siteHeader = document.getElementsByClassName("site-header")[0];
siteHeader.addEventListener("mouseleave", closeHeaderSubMenu);

let headerSubMenus = document.getElementsByClassName("avh-header-submenu");
function closeHeaderSubMenu(){
    for (const subMenu of headerSubMenus) {
        subMenu.classList.add("none");
        subMenu.setAttribute("aria-hidden", "true");
    }
}
closeHeaderSubMenu();

let headerMainNavigation = document.getElementsByClassName("avh-header-menu")[0].getElementsByTagName("a");
for(let menuPointIndex = 0; menuPointIndex < headerMainNavigation.length; menuPointIndex++){
    headerMainNavigation[menuPointIndex].addEventListener("mouseover", () => {
        openHeaderSubMenu(menuPointIndex);
    })
    headerMainNavigation[menuPointIndex].addEventListener("focus", () => {
        openHeaderSubMenu(menuPointIndex);
    })
}

function openHeaderSubMenu(menuIndex){
    closeHeaderSubMenu();
    let subMenu = headerSubMenus[menuIndex];
    subMenu.classList.remove("none");
    subMenu.classList.remove("hideonfrontend");
    subMenu.setAttribute("aria-hidden", "false");
}


/***
 * Text Scroller Scripts
 */
let textScrollers = document.getElementsByClassName("avh-text-scroller");
// ToDo: Listen to scroll Event
// ToDo: change left position according to viewport position