import styled from 'styled-components'

export const HeaderContent = styled.header`
  background-color: ${({ theme }) => theme['gray-900']};
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2.5rem 1rem 7.625rem;
`

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1120px;
  display: flex;
  justify-content: space-between;
`

export const NewTransactionButton = styled.button`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.white};

  background-color: ${({ theme }) => theme['green-500']};
  padding: 0.75rem 1.25rem;
  border: 0;
  border-radius: 6px;

  &:hover {
    background-color: ${({ theme }) => theme['green-300']};
    transition: background-color 0.2s;
  }
`
