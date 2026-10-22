
import { useState } from "react";
import DatasetUpload from "../components/DatasetUpload";

export default function DatasetPage() {
  const [uploadedFile, setUploadedFile] = useState(null);

  async function handleDatasetUpload(file) {
    // Temporary mock until FastAPI endpoint is ready
    await new Promise((resolve) => setTimeout(resolve, 800));

    setUploadedFile({
      name: file.name,
      size: file.size,
    });
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold text-slate-900">
          Dataset Management
        </h1>

        <DatasetUpload onUpload={handleDatasetUpload} />

        {uploadedFile && (
          <div
            role="status"
            className="mx-auto mt-6 max-w-2xl rounded-lg border border-green-200 bg-green-50 p-4 text-green-800"
          >
            Demo upload complete: {uploadedFile.name}
          </div>
        )}
      </div>
    </main>
  );
}
