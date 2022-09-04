import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleUp, X, ArrowCircleDown } from 'phosphor-react'
import { useTheme } from 'styled-components'
import {
  Overlay,
  Content,
  CloseButton,
  NewTransactionForm,
  TransactionType,
  TransactionTypeButton,
} from './styles'

export function NewTransaction() {
  const theme = useTheme()

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <NewTransactionForm>
          <input type="text" placeholder="Descrição" />
          <input type="text" placeholder="Preço" />
          <input type="text" placeholder="Categoria" />

          <TransactionType>
            <TransactionTypeButton variant="income">
              <ArrowCircleUp size={32} color={theme['green-300']} />
              entrada
            </TransactionTypeButton>
            <TransactionTypeButton variant="outcome">
              <ArrowCircleDown size={32} color={theme['red-300']} />
              Saida
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">Cadastrar</button>
        </NewTransactionForm>
      </Content>
    </Dialog.Portal>
  )
}
