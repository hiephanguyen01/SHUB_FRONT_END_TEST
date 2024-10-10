export type Transaction = {
  timestamp: Date;
  amount: number;
};

export interface QueryFormData {
  startTime: string;
  endTime: string;
}

export type FileUploadProps = {
  onDataLoaded: (data: Transaction[]) => void;
};


export type ResultDisplayProps = {
    totalAmount: number | null;
  };
  