export {}

chrome.runtime.onMessage.addListener(
    (result) => {
        if(result.url == "https://google.com/"){
            chrome.action.openPopup()
        }
      }
  )