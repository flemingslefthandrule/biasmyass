import type { PlasmoCSConfig } from "plasmo"
 
export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: true
}
const authorLink = document.querySelector('a[data-testid="authorName"]')
const authorName = authorLink.innerHTML
console.log(authorName)

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.msg === "send author name") {
            sendResponse({ authorName : authorName })
        }
    }
);
  
