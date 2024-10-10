import { FileUploadProps, Transaction } from "@/types";
import { useState } from "react";
import * as XLSX from "xlsx";

export const FileUpload: React.FC<FileUploadProps> = ({ onDataLoaded }) => {
  const [fileName, setFileName] = useState<string>("");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    const reader = new FileReader();

    reader.onload = (evt: ProgressEvent<FileReader>) => {
      const bstr = evt.target?.result;
      if (typeof bstr !== "string") return;

      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json<string[]>(ws, { header: 1 });

      const transactions: Transaction[] = data
        .slice(1)
        .reduce((acc: Transaction[], row) => {
          if (
            row[1] &&
            row[2] &&
            row[8] &&
            typeof row[1] === "string" &&
            typeof row[2] === "string"
          ) {
            const [day, month, year] = row[1].split("/");
            if (day && month && year) {
              const timestamp = new Date(
                `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}T${
                  row[2]
                }`
              );
              if (!isNaN(timestamp.getTime())) {
                acc.push({
                  timestamp,
                  amount: parseFloat(row[8]),
                });
              }
            }
          }
          return acc;
        }, []);

      onDataLoaded(transactions);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Upload File
      </label>
      <input
        type="file"
        accept=".xlsx,.xls"
        onChange={handleFileUpload}
        className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100"
      />
      {fileName && <p className="mt-2 text-sm text-gray-500">{fileName}</p>}
    </div>
  );
};
