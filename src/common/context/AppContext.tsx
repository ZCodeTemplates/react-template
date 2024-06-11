import React, { ReactNode } from "react"
import { UserContext } from "./UserContext/UserContext"

type Props = { children: ReactNode }

const userCtx = { user: true }
export default function AppContext({ children }: Props) {
  return <UserContext.Provider value={userCtx}>{children}</UserContext.Provider>
}
