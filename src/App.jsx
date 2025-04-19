import React from "react";
import "./app.css";
import { Footer, Header, MainContent, ResumeContent } from "./components";

function App() {
  return (
    <div className="px-5 md:px-20 py-5 md:py-10">
      <Header />
      <MainContent />
      {/* <ResumeContent /> */}
      <hr />
      <Footer />
    </div>
  );
}

export default App;
