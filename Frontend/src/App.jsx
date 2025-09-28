import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CodeEditor from "./components/CodeEditor";
import ReviewPanel from "./components/ReviewPanel";
import axios from "axios";
import ReviewButton from "./components/ReviewButton";
import "./App.css";

function App() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1
}`);
  const [review, setReview] = useState(
    "Submit code for review by clicking the button."
  );

  async function reviewCode() {
    setReview("⏳ Waiting for review...");
    try {
      // const response = await fetch(
      //   "http://localhost:3000/ai/get-review",
      //   {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({ code }),
      //   }
      // );
      // const data = await response.json();
      const data = await axios.post("/ai/get-review", {
        code,
      });

      setReview(data.data);
    } catch (err) {
      console.error(err);
      setReview("❌ Error: Could not fetch review.Try Again Later");
    }
  }

  return (
    <div className="app-container">
      <Header />

      <main>
        <div className="left">
          <CodeEditor code={code} setCode={setCode} />
          <div className="review" onClick={reviewCode}>
            Review
          </div>
        </div>

        <div className="right">
          <ReviewPanel review={review} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
