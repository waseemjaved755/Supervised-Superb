
import DatasetUpload from "./components/DatasetUpload";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white px-8 py-5">
        <h1 className="text-2xl font-bold text-blue-600">
          ML Visualizer
        </h1>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-3xl font-bold text-slate-900">
          Machine Learning Dashboard
        </h2>

        <p className="mt-2 text-slate-500">
          Upload, train, compare and visualize supervised ML models.
        </p>

        <DatasetUpload />
      </main>
    </div>
  );
}
