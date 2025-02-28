import React, { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import LoadingSpinner from "./components/LoadingSpinner";
import MainContent from "./MainContent";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <DndProvider backend={HTML5Backend}>
      <ParallaxProvider>
        <BrowserRouter future={{ v7_startTransition: true }}>
          <div style={{ minHeight: "100vh" }}>
            <MainContent />
          </div>
        </BrowserRouter>
      </ParallaxProvider>
    </DndProvider>
  );
}

export default App;
