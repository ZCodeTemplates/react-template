import { Context, useContext } from "react"
import { CONTEXT_INITIAL_VALUE } from "../context/context.consts"

type Ctx<T> = Context<T | typeof CONTEXT_INITIAL_VALUE>

export default function useAppContext<T>(ctx: Ctx<T>) {
  const context = useContext(ctx)

  if (context === CONTEXT_INITIAL_VALUE) {
    throw new Error("context is empty, might be used outside of its wrapper")
  }

  return context
}
