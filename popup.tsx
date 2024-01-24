import { useState } from "react"
import "./popup.css"

function IndexPopup() {
  const [sitename, setSitename] = useState("site name")
  const [author, setAuthor] = useState("no author was identified")

  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    setSitename(tabs[0].url || "site has no name")
  })
  
  return (
    <div className="container">
    <h1>
      <div id="author">{author}</div>
      <div id="site">{sitename}</div>
    </h1>
    <div id="prejudice-summary">
      <h2>Detected Prejudice</h2>
      <div id="prejudice-level">
        <span className="level-indicator mild">Mild</span>
      </div>
      <div id="prejudice-details">
         no details
      </div>
    </div>
    <div id="people-summary">
      <h2>People's Insights</h2>
      <div id="pplsummary">
         no summary
      </div>
    </div>
    <div id="actions">
      <button>Add Comment</button>
      <button>Report Site as Fraudulent</button>
      <button>Learn More About Bias</button>
      <button>Fact-Check with Credible Sources?</button>
      <button>View Diverse Perspectives</button>
    </div>
  </div>
  )
}

export default IndexPopup
