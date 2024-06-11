import { UserContext } from "./common/context/UserContext/UserContext"
import useAppContext from "./common/hooks/useAppContext"
import useFetchQuery from "./common/hooks/useFetchQuery/useFetchQuery"
import { api } from "./common/services/api"
import "./App.module.less"

export default function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const userCtx = useAppContext(UserContext)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data } = useFetchQuery({
    queryParams: api.get.FETCH_DATA,
    initialData: null,
  })
  return <div>hello</div>
}
