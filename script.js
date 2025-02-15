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

  // Simulate a user click by creating an anchor element and triggering click()
  let storeUrl = "";
  if (isIOS) {
    storeUrl = iosStore;
  } else if (isAndroid) {
    storeUrl = androidStore;
  }

  const link = document.createElement("a");
  link.href = storeUrl;
  document.body.appendChild(link);
  link.click();
}

function showFallback() {
  document.getElementById("fallback-ui").style.display = "flex";
}

window.onload = redirectToAppOrStore;
