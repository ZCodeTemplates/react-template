import { createContext } from "react"
import { CONTEXT_INITIAL_VALUE } from "../context.consts"

type Users = { user: boolean }
type UsersCtx = Users | typeof CONTEXT_INITIAL_VALUE
export const UserContext = createContext<UsersCtx>(CONTEXT_INITIAL_VALUE)
