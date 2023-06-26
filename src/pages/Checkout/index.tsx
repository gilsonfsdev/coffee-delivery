import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  AdressContainer,
  AdressDiv,
  ComplementGrid,
  Container,
  DivFlex,
  Form,
  PaymentContainer,
  PaymentDiv,
  PaymentMethod,
  PurshaseConfirm,
  SelectedCoffeesConfirm,
} from './style'
import { useContext, useState, useEffect } from 'react'
import { SelectedCoffeesView } from './components/SelectedCoffeesView'
import { CoffeeContext } from '../../context/CoffeeContext'
import { Link } from 'react-router-dom'

export function CheckOut() {
  const [cep, setCep] = useState(0)
  const [complemento, setComplemento] = useState('')
  const [totalCoffees, setTotalCoffees] = useState(0)
  const [total, setTotal] = useState(0)

  const {
    selectedCoffees,
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
    setPaymentType,
  } = useContext(CoffeeContext)

  const isDisabled = selectedCoffees.length

  useEffect(() => {
    let totalPriceCoffees = 0
    for (const coffee of selectedCoffees) {
      if (coffee.quantity === 1) {
        totalPriceCoffees += coffee.price
      } else if (coffee.quantity > 1) {
        totalPriceCoffees += coffee.quantity * coffee.price
      }
    }
    setTotalCoffees(totalPriceCoffees)

    setTotal(totalCoffees + 3.5)
  }, [selectedCoffees, totalCoffees])

  return (
    <Container>
      <PaymentContainer>
        <h3>Complete seu pedido</h3>
        <AdressContainer>
          <AdressDiv>
            <MapPinLine />
            <div>
              <h4>Endereço de entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </AdressDiv>

          <Form>
            <input
              type="number"
              placeholder="CEP"
              value={cep !== 0 ? cep : ''}
              onChange={(e) => setCep(parseFloat(e.target.value))}
            />
            <input
              type="text"
              placeholder="Rua"
              value={rua}
              onChange={(e) => setRua(e.target.value)}
              width={100}
              style={{ width: '100%' }}
            />

            <ComplementGrid>
              <input
                type="number"
                placeholder="Número"
                value={numero !== 0 ? numero : ''}
                onChange={(e) => setNumero(parseFloat(e.target.value))}
              />
              <input
                type="text"
                placeholder="Complemento"
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
              />
            </ComplementGrid>

            <div>
              <input
                type="text"
                placeholder="Bairro"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
              />

              <input
                type="text"
                placeholder="Cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              />

              <input
                type="text"
                placeholder="UF"
                value={uf}
                onChange={(e) => setUf(e.target.value)}
              />
            </div>
          </Form>
        </AdressContainer>

        <AdressContainer>
          <PaymentDiv>
            <div>
              <DivFlex>
                <CurrencyDollar />
                <div>
                  <h4>Pagamento</h4>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </DivFlex>
              <PaymentMethod>
                <button onClick={() => setPaymentType('Cartão de Crédito')}>
                  <CreditCard />
                  <span>Cartão de crédito</span>
                </button>
                <button onClick={() => setPaymentType('Cartão de Débito')}>
                  <Bank />
                  <span>Cartão de débito</span>
                </button>
                <button onClick={() => setPaymentType('Dinheiro')}>
                  <Money />
                  <span>Dinheiro</span>
                </button>
              </PaymentMethod>
            </div>
          </PaymentDiv>
        </AdressContainer>
      </PaymentContainer>

      <div>
        <h3>Cafés selecionados</h3>
        <PurshaseConfirm>
          <SelectedCoffeesView />
          <SelectedCoffeesConfirm>
            <div>
              <p>Total de itens</p> <span>R$ {totalCoffees}</span>
            </div>
            <div>
              <p>Entrega</p> <span>R$ 3,50</span>
            </div>
            <div>
              <p>Total</p> <span>R$ {total}0</span>
            </div>
            <Link to="./sucess">
              <button disabled={!isDisabled}>Confirmar pedido</button>
            </Link>
          </SelectedCoffeesConfirm>
        </PurshaseConfirm>
      </div>
    </Container>
  )
}
