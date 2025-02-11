function redirectToAppOrStore() {
    // Check if we've already attempted a redirect
    if (sessionStorage.getItem('redirectAttempted')) {
      showFallback();
      return;
    }
  
    sessionStorage.setItem('redirectAttempted', 'true');
  
    const queryString = window.location.search;
    const deepLink = "https://waiyyakanastaeen.site/dua" + queryString;
    const androidStore = "https://play.google.com/store/apps/details?id=com.alhuda.duas.iyykanastaeen";
    const iosStore = "https://apps.apple.com/pk/app/wa-iyyaka-nastaeen/id972441057";
    const userAgent = navigator.userAgent;
    const isMobile = /iPhone|iPad|iPod|android/i.test(userAgent);
  
    if (!isMobile) {
      showFallback();
      return;
    }
  
    // Attempt to open app immediately
    window.location.href = deepLink;
  
    // Fallback to app stores if still visible after delay
    setTimeout(() => {
      if (!document.hidden) {
        if (/iPhone|iPad|iPod/.test(userAgent)) {
          window.location.href = iosStore;
        } else if (/android/i.test(userAgent)) {
          window.location.href = androidStore;
        }
      }
    }, 1000); // Reduced timeout to 1 second
  }
  
  function showFallback() {
    document.getElementById("fallback-ui").style.display = "flex";
  }
  
  window.onload = redirectToAppOrStore;