import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"

const SUCCESS_STATUS = "success"

export default function useFetchQuery(queryOptions, initialData) {
  const queryData = useQuery({ ...queryOptions, initialData })
  const { status, data } = queryData
  const [state, setState] = useState(data)

  useEffect(() => {
    if (status === SUCCESS_STATUS) {
      setState(data)
    }
  }, [status, data])

  return { ...queryData, data: state }
}
