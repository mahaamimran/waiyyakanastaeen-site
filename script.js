function redirectToAppOrStore() {
  const queryString = window.location.search;
  const deepLink = "waiyyakanastaeen.site" + queryString; 
  const androidStore = "https://play.google.com/store/apps/details?id=com.alhuda.duas.iyykanastaeen";
  const iosStore = "https://apps.apple.com/pk/app/wa-iyyaka-nastaeen/id972441057";
  const userAgent = navigator.userAgent;
  const isAndroid = /android/i.test(userAgent);
  const isIOS = /iPhone|iPad|iPod/.test(userAgent);

  if (!isAndroid && !isIOS) {
      showFallback();
      return;
  }

  const start = new Date().getTime();
  
  if (isIOS) {
      window.location.href = deepLink;
  } else {
      // Use an iframe for Android to attempt opening the app silently
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = deepLink;
      document.body.appendChild(iframe);
  }

  // If the app is not installed, redirect to the store
  setTimeout(() => {
      const now = new Date().getTime();
      if (now - start < 2000) {
          if (isIOS) {
              window.location.href = iosStore;
          } else if (isAndroid) {
              window.location.href = androidStore;
          }
      }
  }, 1000); // Reduced timeout to 1 second for faster redirection
}

function showFallback() {
  document.getElementById("fallback-ui").style.display = "flex";
}

window.onload = redirectToAppOrStore;
