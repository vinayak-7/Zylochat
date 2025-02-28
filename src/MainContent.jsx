import React, {
  Suspense,
  lazy,
  useEffect,
  useTransition,
  useMemo,
} from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import FooterFancy from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

const About = lazy(() => import("./pages/About"));
const Brand = lazy(() => import("./pages/Brand"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Automations = lazy(() => import("./pages/Automations"));
const AutomationEditor = lazy(() => import("./pages/AutomationEditor"));

function MainContent() {
  const location = useLocation();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {});
  }, [location.pathname]);

  const showSidebar = useMemo(
    () =>
      ["/dashboard", "/automations", "/automations/new"].includes(
        location.pathname
      ),
    [location.pathname]
  );

  const hideFooter = useMemo(
    () => location.pathname === "/" || location.pathname === "/home",
    [location.pathname]
  );

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-grow">
          {showSidebar && <Sidebar className="min-h-screen" />}
          <main
            className={`flex-grow transition-all duration-300 ${
              showSidebar ? "md:ml-64" : ""
            }`}
          >
            <Suspense fallback={<LoadingSpinner />}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex flex-col flex-grow"
                >
                  <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/brand" element={<Brand />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/automations" element={<Automations />} />
                    <Route
                      path="/automations/new"
                      element={<AutomationEditor />}
                    />
                  </Routes>
                </motion.div>
              </AnimatePresence>
            </Suspense>
          </main>
        </div>
        {!hideFooter && <FooterFancy className="mt-auto w-full" />}
      </div>
    </div>
  );
}

export default MainContent;
