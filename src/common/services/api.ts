import { axiosInstance } from "./axiosInstance"

type ObjResponse = { twina: "hello"; eilon: string }

export const api = {
  get: {
    FETCH_DATA: {
      queryKey: ["FETCH_DATA"],
      queryFn: (): Promise<ObjResponse> => axiosInstance.get("repos/TanStack/query"),
    },
  },
}
