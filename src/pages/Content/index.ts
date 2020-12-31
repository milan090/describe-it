// Listen for messages from the popup.
chrome.runtime.onMessage.addListener((msg, sender, response) => {
  // First, validate the message's structure.
  console.log("OK");
  if (msg.from === "popup" && msg.subject === "getSelectedText") {
    // Collect the necessary data.
    // (For your specific requirements `document.querySelectorAll(...)`
    //  should be equivalent to jquery's `$(...)`.)
    const selectedText = window.getSelection()?.toString();

    // Directly respond to the sender (popup),
    // through the specified callback.
    console.log("SENDING MESSAGE");
    response(selectedText);
  }
});
