function removeReels() {
  const selectors = [
    'a[aria-label="Reels"]',
    'div[aria-label="Reels"]',
    'a[href*="/reel/"]',
    'div[aria-label="Reels and short videos"]'
  ];

  // Remove by static selectors
  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.style.display = "none";
    });
  });

  // Extra: remove blocks containing the word "Reels"
  document.querySelectorAll('div').forEach(el => {
    if (el.innerText && el.innerText.trim() === "Reels") {
      let container = el.closest('div[data-pagelet], div[role="feed"] > div, div[role="complementary"], div[role="presentation"]');
      if (container) container.style.display = "none";
    }
  });
}

removeReels();
const observer = new MutationObserver(removeReels);
observer.observe(document.body, { childList: true, subtree: true });
