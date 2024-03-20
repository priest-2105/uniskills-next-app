



// FUNCTION TO CONTROLLER THE PRELOADER SHOWING EACH TIME THE PAGE LOADS FOR THE FIRST TIME
export function PRELOADER_CONTROLLER(){
    var preloader = document.querySelector('.cs-page-loading');
    if(preloader){
        preloader.classList.remove('active');
        setTimeout(function () {
            preloader.remove();
        }, 2000);
    }
};