function redirectToAppOrStore() {
  const androidStore = "https://play.google.com/store/apps/details?id=com.alhuda.duas.iyykanastaeen";
  const iosStore = "https://apps.apple.com/pk/app/wa-iyyaka-nastaeen/id972441057";
  const userAgent = navigator.userAgent;
  const isAndroid = /android/i.test(userAgent);
  const isIOS = /iPhone|iPad|iPod/.test(userAgent);

  if (!isAndroid && !isIOS) {
      showFallback();
      return;
  }

  // Directly redirect to the App Store or Play Store
  if (isIOS) {
      window.location.href = iosStore;
  } else if (isAndroid) {
      window.location.href = androidStore;
  }
}

function showFallback() {
  document.getElementById("fallback-ui").style.display = "flex";
}

window.onload = redirectToAppOrStore;
