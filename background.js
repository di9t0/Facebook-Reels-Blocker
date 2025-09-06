chrome.webNavigation.onCommitted.addListener((details) => {
  if (details.url.includes("facebook.com/reel")) {
    chrome.tabs.update(details.tabId, { url: "https://www.facebook.com/" });
  }
});
