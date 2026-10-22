
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DatasetPage from "./pages/DatasetPage";

function Placeholder({ title }) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-900">
        {title}
      </h1>
      <p className="mt-3 text-slate-500">
        This page is under development.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<Placeholder title="Dashboard" />}
          />
          <Route path="/dataset" element={<DatasetPage />} />
          <Route
            path="/models"
            element={<Placeholder title="Model Selection" />}
          />
          <Route
            path="/results"
            element={<Placeholder title="Results" />}
          />
          <Route
            path="*"
            element={<Placeholder title="404 - Page Not Found" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
