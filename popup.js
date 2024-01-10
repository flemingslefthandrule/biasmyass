chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let pp = tabs[0].url
    document.getElementById("site").innerHTML = pp
})