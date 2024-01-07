// app_utilities.js
import { useEffect } from 'react';

// Custom hook to perform some utility logic
export function Preloader_Controller() {
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

    // Cleanup (if needed)
    return () => {
      // Cleanup tasks (if any)
    };
  }, []); // Empty dependency array ensures this effect runs once on mount
}
