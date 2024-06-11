import useFetchQuery from "./common/hooks/useFetchQuery/useFetchQuery"
import { api } from "./common/services/api"
import "./App.module.less"

export default function App() {
  const { data } = useFetchQuery({
    queryParams: api.get.FETCH_DATA,
    initialData: null,
  })

  // eslint-disable-next-line no-console
  console.log(data)

  return <div>hello</div>
}
