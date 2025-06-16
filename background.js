// Listen for when the user navigates to a new page
chrome.webNavigation.onCompleted.addListener(async (details) => {
  try {
    const tab = await chrome.tabs.get(details.tabId);
    const url = tab.url;

    // Simple fake check: does the URL contain "g00gle" or "faceb00k"
    if (url.includes("g00gle") || url.includes("faceb00k")) {
      chrome.notifications.create({
        type: "basic",
        iconUrl: "icons/icon128.png",
        title: "⚠️ Suspicious Site Detected!",
        message: `The site "${url}" looks suspicious. Please proceed with caution.`,
        priority: 2
      });
    }
  } catch (error) {
    console.error("Error in background check:", error);
  }
});
