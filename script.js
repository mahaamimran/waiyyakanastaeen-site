function redirectToAppOrStore() {
    const queryString = window.location.search;
    // Construct the deep link using your universal link
    const deepLink = "https://waiyyakanastaeen.site/dua" + queryString;
    
    const androidStore = "https://play.google.com/store/apps/details?id=com.alhuda.duas.iyykanastaeen";
    const iosStore = "https://apps.apple.com/pk/app/wa-iyyaka-nastaeen/id972441057";
    
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    console.log("User Agent:", userAgent);
    
    // Check if the device is mobile
    const isMobile = /iPhone|iPad|iPod|android/i.test(userAgent);
    
    if (isMobile) {
      // Attempt deep linking after 1.5 seconds
      setTimeout(() => {
        window.location.href = deepLink;
      }, 1500);
    
      // For iOS and Android, redirect to the store after 3 seconds as a fallback
      if (/iPhone|iPad|iPod/.test(userAgent)) {
        console.log("Detected iOS, redirecting to App Store");
        setTimeout(() => {
          window.location.href = iosStore;
        }, 3000);
      } else if (/android/i.test(userAgent)) {
        console.log("Detected Android, redirecting to Play Store");
        setTimeout(() => {
          window.location.href = androidStore;
        }, 3000);
      }
    } else {
      console.log("Non-mobile device detected, showing fallback UI.");
      document.getElementById("fallback-ui").style.display = "flex";
    }
  }
  
  window.onload = redirectToAppOrStore;
  