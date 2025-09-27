import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"

function ReviewPanel({ review }) {
  return (
    <Markdown rehypePlugins={[rehypeHighlight]}>
      {review}
    </Markdown>
  )
}

export default ReviewPanel
