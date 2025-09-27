import Editor from "react-simple-code-editor"
import prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"
import "./CodeEditor.css"

function CodeEditor({ code, setCode }) {
  return (
    <div className="code">
      <div className="editor-wrap">
        <Editor
          value={code}
          onValueChange={setCode}
          highlight={c => prism.highlight(c, prism.languages.javascript, "javascript")}
          padding={10}
          className="editor"
          style={{
            fontFamily: '"Fira Code", monospace',
            fontSize: 16
          }}
        />
      </div>
    </div>
  )
}

export default CodeEditor
