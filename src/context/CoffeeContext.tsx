import React, {
  createContext,
  ReactNode,
  useState,
  SetStateAction,
} from 'react'

export interface ProdutosNoCarrinhoType {
  id: number
  img: string
  name: string
  quantity: number
  price: number
}

interface CoffeeContextType {
  selectedCoffees: ProdutosNoCarrinhoType[]
  setSelectedCoffees: React.Dispatch<SetStateAction<ProdutosNoCarrinhoType[]>>
  totalQuantity: number
  setTotalQuantity: React.Dispatch<SetStateAction<number>>
  singularCoffeeQuantity: number
  setSingularCoffeeQuantity: React.Dispatch<number>
  rua: string
  setRua: React.Dispatch<SetStateAction<string>>
  numero: number
  setNumero: React.Dispatch<SetStateAction<number>>
  bairro: string
  setBairro: React.Dispatch<SetStateAction<string>>
  cidade: string
  setCidade: React.Dispatch<SetStateAction<string>>
  uf: string
  setUf: React.Dispatch<SetStateAction<string>>
  PaymentType: string
  setPaymentType: React.Dispatch<SetStateAction<string>>
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}
export function CoffeContextProvider({ children }: CoffeeContextProviderProps) {
  const [selectedCoffees, setSelectedCoffees] = useState<
    ProdutosNoCarrinhoType[]
  >([])

  const [totalQuantity, setTotalQuantity] = useState(0)
  const [singularCoffeeQuantity, setSingularCoffeeQuantity] = useState(0)
  const [rua, setRua] = useState('')
  const [numero, setNumero] = useState<number>(0)
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [uf, setUf] = useState('')
  const [PaymentType, setPaymentType] = useState('')

  return (
    <CoffeeContext.Provider
      value={{
        selectedCoffees,
        setSelectedCoffees,
        totalQuantity,
        setTotalQuantity,
        singularCoffeeQuantity,
        setSingularCoffeeQuantity,
        rua,
        setRua,
        numero,
        setNumero,
        bairro,
        setBairro,
        cidade,
        setCidade,
        uf,
        setUf,
        PaymentType,
        setPaymentType,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
