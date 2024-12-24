import Glide from './libs/glide.min.js';
const sliders = () => {
    try{
        const mainSlider = new Glide('.mainslider', {
            type: 'carousel',
            gap: 0,
            autoplay: 6000,
            dragThreshold: false,
            animationDuration: 1500
        }).mount();

        bindActionsToArrows(mainSlider, '.mainslider .glide__arrow--left', '.mainslider .glide__arrow--right');
    } catch(e){}
        
    try {
        createBullets('.newsslider');
        const newsSlider = new Glide('.newsslider', {
            type: 'carousel',
            perView: 3,
            gap: 10,
            autoplay: 6000,
            dragThreshold: false,
            animationDuration: 600,
            breakpoints: {
                769: {
                    perView: 2
                },
                576: {
                    perView: 1
                }
            }
        }).mount();

        bindActionsToArrows(newsSlider, '.newsslider .glide__arrow--left', '.newsslider .glide__arrow--right');
        
    }catch(e){}
        
    try {
        createBullets('.feedslider');
        const feedSlider = new Glide('.feedslider', {
            type: 'carousel',
            perView: 1,
            gap: 10,
            dragThreshold: false,
            animationDuration: 600
        }).mount();
    }catch(e){}

    function bindActionsToArrows(slider, prevSelector, nextSelector) {
        document.querySelectorAll(prevSelector).forEach(item => {
            item.addEventListener('click', () => {
                slider.go('<');
            });
        });
        document.querySelectorAll(nextSelector).forEach(item => {
            item.addEventListener('click', () => {
                slider.go('>');
            });
        });
    }

    function createBullets(slider) {
        const parent = document.querySelector(slider),
              number = parent.querySelectorAll('.glide__track > .glide__slides > li:not(.glide__slide--clone)').length;

        let div = document.createElement('div');
        div.classList.add('glide__bullets');
        div.setAttribute('data-glide-el', 'controls[nav]');
        let html = '';

        for (let i = 0; i < number; i++) {
            html += `<button class="glide__bullet" data-glide-dir="=${i}"></button>`;
        }

        div.innerHTML = html;

        parent.appendChild(div);
    }
};

export default sliders;