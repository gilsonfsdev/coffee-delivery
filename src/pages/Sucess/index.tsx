import { CoffeeContext } from '../../context/CoffeeContext'
import { useContext } from 'react'
import { FontWeight, OrderDetails, SucessContainer } from './style'
import delivery from '../../assets/delivery.svg'
import localization from '../../assets/localization.svg'
import money from '../../assets/money.svg'
import clock from '../../assets/home_two.svg'

export function Sucess() {
  const { rua, numero, cidade, bairro, uf, PaymentType } =
    useContext(CoffeeContext)
  return (
    <SucessContainer>
      <div>
        <h2>Uhu! Pedido Confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <OrderDetails>
          <div>
            <img src={localization} alt="" />
            <div>
              <p>
                Entrega em
                <FontWeight>
                  {' '}
                  {rua}, {numero}
                </FontWeight>
              </p>
              <p>
                {bairro}, {cidade} - {uf}
              </p>
            </div>
          </div>

          <div>
            <img src={clock} alt="" />
            <div>
              <p>Previsão de entrega</p>
              <FontWeight>20min - 30 minutos</FontWeight>
            </div>
          </div>

          <div>
            <img src={money} alt="Cifra de Dinheiro" />
            <div>
              <p>Pagamento na entrega</p>
              <FontWeight>{PaymentType}</FontWeight>
            </div>
          </div>
        </OrderDetails>
      </div>
      <img src={delivery} alt="Ilustração de uma moto indo entregar o pedido" />
    </SucessContainer>
  )
}
