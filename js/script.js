//---------------------------Funciones y animaciones de la página---------------------------------

const gitbar = document.querySelector('.bar-git');
const htmlbar = document.querySelector('.bar-html');
const cssbar = document.querySelector('.bar-css');
const jsbar = document.querySelector('.bar-javascript');
const sqlbar = document.querySelector('.bar-sql');
const mongobar = document.querySelector('.bar-mongo');

let t1 = new TimelineLite();

t1.fromTo(gitbar, .75, {width: `calc(0% - 6px)`}, {width: `calc(70% - 6px)`, ease: Power4.easeOut})
    .fromTo(htmlbar, .75, {width: `calc(0% - 6px)`}, {width: `calc(65% - 6px)`, ease: Power4.easeOut})
    .fromTo(cssbar, .75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut})
    .fromTo(jsbar, .75, {width: `calc(0% - 6px)`}, {width: `calc(80% - 6px)`, ease: Power4.easeOut})
    .fromTo(sqlbar, .75, {width: `calc(0% - 6px)`}, {width: `calc(85% - 6px)`, ease: Power4.easeOut})
    .fromTo(mongobar, .75, {width: `calc(0% - 6px)`}, {width: `calc(75% - 6px)`, ease: Power4.easeOut});

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
})

.setTween(t1)
.addTo(controller);

function showRequiredCategory(event){
    const getId = event.id;
    const links = document.querySelectorAll('.work-category button')
    for(i = 0; i < links.length; i++){
        if(links[i].hasAttribute('class')) {
            links[i].classList.remove('active')
        }
    }

    event.classList.add('active')
    const getCategory = document.querySelector(`.category-${getId}`)
    const categories = document.querySelectorAll(`div[class ^= "category-"]`)
    for(i = 0; i < categories.length; i++){
        if(categories[i].hasAttribute('class')) {
            categories[i].classList.remove('showCategory')
            categories[i].classList.add('hideCategory')
        }
    }
    console.log(event);

    getCategory.classList.remove('hideCategory');
    getCategory.classList.add('showCategory');

};
