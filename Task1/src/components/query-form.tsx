import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { QueryFormData } from "@/types";

const schema = yup.object().shape({
  startTime: yup.string().required("Giờ bắt đầu không bỏ trống"),
  endTime: yup.string().required("Giờ kết thúc không bỏ trống"),
});

type QueryFormProps = {
  onSubmit: (data: QueryFormData) => void;
  isEnabled: boolean;
};

export function QueryForm({ onSubmit, isEnabled }: QueryFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<QueryFormData>({
    resolver: yupResolver(schema),
  });

  const isButtonEnabled = isEnabled && isValid;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="startTime" className="block mb-1">
          Giờ bắt đầu :
        </label>
        <input
          type="time"
          id="startTime"
          {...register("startTime")}
          className="w-full p-2 border rounded"
        />
        {errors.startTime && (
          <p className="text-red-500">{errors.startTime.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="endTime" className="block mb-1">
          Giờ kết thúc :
        </label>
        <input
          type="time"
          id="endTime"
          {...register("endTime")}
          className="w-full p-2 border rounded"
        />
        {errors.endTime && (
          <p className="text-red-500">{errors.endTime.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={!isButtonEnabled}
        className={`w-full p-2 text-white rounded ${
          isButtonEnabled
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Tính toán
      </button>
    </form>
  );
}
