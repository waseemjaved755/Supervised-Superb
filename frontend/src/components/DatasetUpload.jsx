
import { useRef, useState } from "react";
import { validateDatasetFile } from "../../utils/fileValidation";

export default function DatasetUpload({ onUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const inputRef = useRef(null);

  function handleFileChange(event) {
    const file = event.target.files?.[0] ?? null;
    const validationError = validateDatasetFile(file);

    setError(validationError ?? "");
    setSelectedFile(validationError ? null : file);
  }

  async function handleUpload() {
    if (!selectedFile || isUploading) return;

    setIsUploading(true);
    setError("");

    try {
      await onUpload(selectedFile);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsUploading(false);
    }
  }

  function handleRemove() {
    setSelectedFile(null);
    setError("");

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  return (
    <section className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-semibold text-slate-900">
        Upload Dataset
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        Select a CSV dataset to begin machine learning analysis.
      </p>

      <label
        htmlFor="dataset-file"
        className="mt-6 flex cursor-pointer flex-col items-center rounded-xl border-2 border-dashed border-blue-300 bg-blue-50 p-8 text-center hover:bg-blue-100"
      >
        <span className="text-4xl" aria-hidden="true">📁</span>

        <span className="mt-3 font-medium text-slate-700">
          Choose a CSV file
        </span>

        <span className="mt-1 text-sm text-slate-500">
          Maximum size: 5 MB
        </span>
      </label>

      <input
        id="dataset-file"
        ref={inputRef}
        type="file"
        accept=".csv,text/csv"
        onChange={handleFileChange}
        className="sr-only"
        aria-describedby={error ? "file-error" : undefined}
      />

      {error && (
        <p
          id="file-error"
          role="alert"
          className="mt-4 text-sm text-red-600"
        >
          {error}
        </p>
      )}

      {selectedFile && (
        <div className="mt-5 flex items-center justify-between gap-3 rounded-lg bg-slate-50 p-4">
          <div className="min-w-0">
            <p className="truncate font-medium text-slate-800">
              {selectedFile.name}
            </p>
            <p className="text-sm text-slate-500">
              {(selectedFile.size / 1024).toFixed(1)} KB
            </p>
          </div>

          <button
            type="button"
            onClick={handleRemove}
            disabled={isUploading}
            className="rounded-lg px-3 py-2 text-sm text-red-600 hover:bg-red-50 disabled:opacity-50"
          >
            Remove
          </button>
        </div>
      )}

      <button
        type="button"
        onClick={handleUpload}
        disabled={!selectedFile || isUploading}
        className="mt-6 w-full rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isUploading ? "Uploading..." : "Upload Dataset"}
      </button>
    </section>
  );
}
