browser.browserAction.onClicked.addListener((tab) => {
  const markdownLink = `[${tab.title}](${tab.url})`;
  const textArea = document.createElement("textarea");
  textArea.value = markdownLink;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
})
