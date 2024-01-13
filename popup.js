chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let sitename = tabs[0].url
    document.getElementById("site").innerHTML = sitename
})