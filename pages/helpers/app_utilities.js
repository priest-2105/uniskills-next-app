



// // FUNCTION TO CONTROLLER THE PRELOADER SHOWING EACH TIME THE PAGE LOADS FOR THE FIRST TIME
// export function PRELOADER_CONTROLLER(){
//     var preloader = document.querySelector('.cs-page-loading');
//     if(preloader){
//         preloader.classList.remove('active');
//         setTimeout(function () {
//             preloader.remove();
//         }, 2000);
//     }
// };

import { useEffect } from 'react';

// Function to control the preloader
export function PRELOADER_CONTROLLER() {
  useEffect(() => {
    const removePreloader = () => {
      const preloader = document.querySelector('.cs-page-loading');
      if (preloader) {
        preloader.classList.remove('active');
        setTimeout(() => {
          preloader.remove();
        }, 2000);
      }
    };

    // Call the function when the component mounts
    removePreloader();

    // Cleanup the function on component unmount
    return () => {
      // You can perform cleanup tasks if needed
    };
  }, []); // Empty dependency array ensures this effect runs once on mount
}
