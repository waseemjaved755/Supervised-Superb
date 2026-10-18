
import { useState } from "react";

export default function DatasetUpload() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0];

    setError("");

    if (!selectedFile) {
      setFile(null);
      return;
    }

    if (!selectedFile.name.toLowerCase().endsWith(".csv")) {
      setError("Please select a CSV file.");
      setFile(null);
      return;
    }

    setFile(selectedFile);
  };

  return (
    <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-800">
        Upload Your Dataset
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        Upload a CSV file to start machine learning analysis.
      </p>

      <label className="mt-6 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-blue-300 bg-blue-50 p-10 transition hover:bg-blue-100">
        <div className="mb-3 text-5xl">📁</div>

        <span className="font-medium text-slate-700">
          Click to select your dataset
        </span>

        <span className="mt-1 text-sm text-slate-500">
          CSV files only
        </span>

        <input
          type="file"
          accept=".csv,text/csv"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {error && (
        <p className="mt-4 text-sm text-red-600">{error}</p>
      )}

      {file && (
        <div className="mt-6 flex items-center gap-3 rounded-lg bg-slate-100 p-4">
          <div className="h-8 w-8 text-blue-600">📄</div>

          <div className="min-w-0 flex-1">
            <p className="truncate font-medium">{file.name}</p>
            <p className="text-sm text-slate-500">
              {(file.size / 1024).toFixed(2)} KB
            </p>
          </div>
        </div>
      )}

      <button
        type="button"
        disabled={!file}
        className="mt-6 w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Upload Dataset
      </button>
    </div>
  );
}
