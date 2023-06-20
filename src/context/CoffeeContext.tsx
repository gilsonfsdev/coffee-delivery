import { createContext, ReactNode, useState } from 'react'

interface CoffeeContextType {}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}
export function CoffeContextProvider({ children }: CoffeeContextProviderProps) {
  return <CoffeeContext.Provider value={{}}>{children}</CoffeeContext.Provider>
}
