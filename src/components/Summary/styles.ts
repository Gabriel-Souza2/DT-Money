import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  max-width: 1120px;
  margin: -5.125rem auto 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

interface SymmaryCardProps {
  variant?: 'green'
}
export const SummaryCard = styled.div<SymmaryCardProps>`
  padding: 1.5rem 2rem;
  background-color: ${({ theme }) => theme['gray-600']};
  border-radius: 6px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
    font-size: 1rem;
  }

  strong {
    font-size: 2rem;
    color: ${({ theme }) => theme.white};
    font-weight: bold;
  }

  ${({ theme, variant }) =>
    variant === 'green' &&
    css`
      background-color: ${theme['green-700']};
    `}
`
