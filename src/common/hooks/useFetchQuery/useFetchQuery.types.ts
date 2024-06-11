import { UseQueryResult } from "@tanstack/react-query"

export namespace _useFetchQuery {
  export type Query<Res, Initial, SetDataFn> = Omit<UseQueryResult<Res | Initial, Error>, "data"> & {
    data: Res | Initial
  } & {
    setData: SetDataFn
  }
}
