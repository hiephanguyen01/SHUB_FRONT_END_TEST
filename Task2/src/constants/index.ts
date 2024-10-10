import * as Yup from "yup";
import { TransactionFormData } from "@/types";

export const pumpOptions = [
  { value: "Trụ 1", label: "Trụ 1" },
  { value: "Trụ 2", label: "Trụ 2" },
  { value: "Trụ 3", label: "Trụ 3" },
  { value: "Trụ 4", label: "Trụ 4" },
];

export const schema = Yup.object().shape({
  timestamp: Yup.date().required("Thời gian là bắt buộc"),
  quantity: Yup.number()
    .positive("Số lượng phải là số dương")
    .required("Số lượng là bắt buộc"),
  pump: Yup.string().required("Vui lòng chọn trụ"),
  revenue: Yup.number()
    .positive("Doanh thu phải là số dương")
    .required("Doanh thu là bắt buộc"),
  price: Yup.number()
    .positive("Đơn giá phải là số dương")
    .required("Đơn giá là bắt buộc"),
});

export const initialValues: TransactionFormData = {
  timestamp: new Date(),
  quantity: 0,
  pump: "",
  revenue: 0,
  price: 0,
};
