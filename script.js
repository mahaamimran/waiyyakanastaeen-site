function redirectToAppOrStore() {
  const androidStore = "https://play.google.com/store/apps/details?id=com.alhuda.duas.iyykanastaeen";
  const iosStore = "https://apps.apple.com/pk/app/wa-iyyaka-nastaeen/id972441057";
  const userAgent = navigator.userAgent;
  const isAndroid = /android/i.test(userAgent);
  const isIOS = /iPhone|iPad|iPod/.test(userAgent);

  // if not iOS or Android, show fallback immediately
  if (!isAndroid && !isIOS) {
    hideSpinner();
    showFallback();
    return;
  }

  // attempt to redirect user to store (simulate user click)
  const link = document.createElement("a");
  link.href = isIOS ? iosStore : androidStore;
  document.body.appendChild(link);
  link.click();

  // after 2 seconds, hide the spinner and show fallback
  setTimeout(() => {
    hideSpinner();
    showFallback();
  }, 2000);
}

function hideSpinner() {
  const spinner = document.querySelector(".spinner");
  if (spinner) {
    spinner.style.display = "none";
  }
}

function showFallback() {
  const fallbackUI = document.getElementById("fallback-ui");
  if (fallbackUI) {
    fallbackUI.style.display = "flex";
  }
}

window.onload = redirectToAppOrStore;
