import { axiosInstance } from "./axiosInstance"

export const api = {
  get: {
    FETCH_DATA: {
      queryKey: ["FETCH_DATA"],
      queryFn: () => axiosInstance.get("repos/TanStack/query"),
    },
  },
}
