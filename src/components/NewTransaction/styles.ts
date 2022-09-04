import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  inset: 0;
`
export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 3rem;

  background-color: ${({ theme }) => theme['gray-800']};
  color: ${({ theme }) => theme.white};
`
export const CloseButton = styled(Dialog.Close)`
  background: transparent;
  border: 0;

  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  color: ${({ theme }) => theme['gray-500']};
`

export const NewTransactionForm = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    padding: 1rem;
    background-color: ${({ theme }) => theme['gray-900']};
    border-radius: 6px;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  button[type='submit'] {
    align-items: center;
    justify-content: center;

    padding: 1rem 0;
    border: 0;
    border-radius: 6px;

    background-color: ${({ theme }) => theme['green-300']};
    color: ${({ theme }) => theme.white};
  }
`
export const TransactionType = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`
interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
  background-color: ${({ theme }) => theme['gray-700']};
  color: ${({ theme }) => theme['gray-300']};
  padding: 1rem 0;
  border-radius: 6px;
  border: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`
