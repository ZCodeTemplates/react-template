import { Query } from "./useFetchQuery.types"
import { useQuery, useQueryClient } from "@tanstack/react-query"

const defaultOnReject = (err: $TSFixMe, initialData: $TSFixMe) => {
  // eslint-disable-next-line no-console
  console.log(err)
  return initialData
}

const defaultOnSuccess = (res: $TSFixMe) => res

type Params<Res, Initial> = {
  queryParams: {
    queryFn: () => Promise<Res>
    queryKey: string[]
    [key: string]: $TSFixMe
  }
  initialData: Initial
  onSuccess?: (res: Res) => Res
  onReject?: (res: Res, initialData: Initial) => Initial
}

export default function useFetchQuery<Res, Initial>({
  queryParams,
  initialData,
  onSuccess = defaultOnSuccess,
  onReject = defaultOnReject,
}: Params<Res, Initial>) {
  const queryClient = useQueryClient()
  const { queryKey, queryFn } = queryParams
  const wrappedQueryFn = () =>
    queryFn()
      .then(onSuccess)
      .catch((err) => onReject(err, initialData))

  const setDataAndCache = (cb: (prevState: Res | Initial) => never) => {
    const cbWithInitialData = (prevState: Res | Initial = initialData) => cb(prevState)
    queryClient.setQueryData(queryKey, cbWithInitialData)
  }

  const queryFields = useQuery({
    ...queryParams,
    queryFn: wrappedQueryFn,
  })

  const { data: queryData = initialData } = queryFields

  type QueryType = Query<Res, Initial, typeof setDataAndCache>

  return {
    ...queryFields,
    data: queryData,
    setData: setDataAndCache,
  } satisfies QueryType
}
