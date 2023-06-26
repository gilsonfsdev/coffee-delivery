import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
  padding: 5rem 0;

  @media (max-width: 980px) {
    flex-direction: column-reverse;
  }
`

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const DescriptionDiv = styled.div`
  h1 {
    font-weight: 800;
    font-size: 3rem;
    line-height: 4rem;
    margin-bottom: 1rem;

    @media (max-width: 980px) {
      text-align: center;
    }
  }

  p {
    font-size: 1.25rem;
    @media (max-width: 980px) {
      text-align: center;
    }
  }
`

export const AdvantagesDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.4rem;

  align-items: center;
  @media (max-width: 980px) {
    margin: 0 auto;
  }
  p {
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const ProductsDiv = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3.35;

  h2 {
    margin-bottom: 3rem;
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 250px));
  grid-auto-flow: dense;
  grid-gap: 2rem;

  align-items: flex-start;
`
