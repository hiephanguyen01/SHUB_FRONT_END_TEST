"use client";

import { useState, useCallback, useMemo } from "react";
import { FileUpload } from "@/components/file-upload";
import { QueryForm } from "@/components/query-form";
import { ResultDisplay } from "@/components/result-display";
import { Transaction, QueryFormData } from "@/types";
import { filterTransactions, calculateTotal } from "@/utils/transaction";

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [totalAmount, setTotalAmount] = useState<number | null>(null);

  const handleDataLoaded = useCallback((data: Transaction[]) => {
    setTransactions(data);
    setTotalAmount(null);
  }, []);

  const handleQuery = useCallback(
    ({ startTime, endTime }: QueryFormData) => {
      if (startTime && endTime) {
        const filteredTransactions = filterTransactions(
          transactions,
          startTime,
          endTime
        );
        const total = calculateTotal(filteredTransactions);
        setTotalAmount(total);
      } else {
        setTotalAmount(null);
      }
    },
    [transactions]
  );

  const isQueryEnabled = useMemo(() => transactions.length > 0, [transactions]);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">DATA REPORT</h1>
      <div className="max-w-md mx-auto space-y-8">
        <FileUpload onDataLoaded={handleDataLoaded} />
        <QueryForm onSubmit={handleQuery} isEnabled={isQueryEnabled} />
        <ResultDisplay totalAmount={totalAmount} />
      </div>
    </div>
  );
}
