function redirectToAppOrStore() {
  // Check if redirection has already been attempted
  if (sessionStorage.getItem('redirectAttempted')) {
      showFallback();
      return;
  }

  sessionStorage.setItem('redirectAttempted', 'true');

  const queryString = window.location.search;
  const deepLink = "waiyyakanastaeen://dua" + queryString; // Change to your custom scheme
  const androidStore = "https://play.google.com/store/apps/details?id=com.alhuda.duas.iyykanastaeen";
  const iosStore = "https://apps.apple.com/pk/app/wa-iyyaka-nastaeen/id972441057";
  const userAgent = navigator.userAgent;
  const isMobile = /iPhone|iPad|iPod|android/i.test(userAgent);

  if (!isMobile) {
      showFallback();
      return;
  }

  // Attempt to open the app
  const now = new Date().getTime();
  setTimeout(() => {
      if (new Date().getTime() - now < 2000) {
          // If the user is still on this page, it means the app did not open. Redirect to store.
          if (/iPhone|iPad|iPod/.test(userAgent)) {
              window.location.href = iosStore;
          } else if (/android/i.test(userAgent)) {
              window.location.href = androidStore;
          } else {
              showFallback();
          }
      }
  }, 1500); // Check if app opened after 1.5 seconds

  window.location.href = deepLink;
}

function showFallback() {
  document.getElementById("fallback-ui").style.display = "flex";
}

window.onload = redirectToAppOrStore;
