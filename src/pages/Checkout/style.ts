import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 6.5rem;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 2.1rem;
  justify-content: space-between;
  align-items: flex-start;

  h3 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 998px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  div {
    @media (max-width: 998px) {
      max-width: 500px;
    }
  }
`
export const PaymentContainer = styled.div`
  max-width: 600px;
`
export const AdressContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 1.5rem;
  margin-bottom: 1rem;
`

export const AdressDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 1.5rem;
  }

  div {
    h4 {
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
    }
    p {
      font-size: 0.9rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;

  input {
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    padding: 0.75rem;
    border-radius: 4px;
    color: ${(props) => props.theme['base-label']};
    font-size: 0.9rem;
    width: 100%;
  }

  input:nth-child(1) {
    width: 40%;
  }

  div {
    display: flex;
    gap: 0.75rem;
  }
`
export const ComplementGrid = styled.div`
  input:nth-child(2) {
    width: 24.5rem;
  }
`
export const PaymentDiv = styled(AdressDiv)`
  svg {
    color: ${(props) => props.theme['purple-dark']};
  }
`
export const DivFlex = styled.div`
  display: flex;
  gap: 1rem;
`

export const PaymentMethod = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;

  button {
    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    padding: 1rem;
    border: 1px solid transparent;
    display: flex;
    gap: 0.75rem;
    align-items: center;
    text-transform: uppercase;
    justify-content: center;
    font-size: 0.75rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:focus {
      border: 1px solid ${(props) => props.theme['purple-base']};
    }
  }

  span {
    color: ${(props) => props.theme['base-text']};
  }
`
export const PurshaseConfirm = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  border-radius: 0.375rem 2.75rem;
`
export const SelectedCoffeesConfirm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;

  div {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: ${(props) => props.theme['base-text']};
  }

  div:nth-child(3) {
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 700;
    font-size: 1.25rem;
  }

  button {
    background: ${(props) => props.theme['yellow-base']};
    color: #fff;
    border-radius: 6px;
    padding: 0.75rem 0.5rem;
    border: 1px solid transparent;
    text-transform: uppercase;
    font-size: 0.9rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    width: 100%;

    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`
