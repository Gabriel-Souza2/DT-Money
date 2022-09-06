import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleUp, X, ArrowCircleDown } from 'phosphor-react'
import { useContext } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import {
  Overlay,
  Content,
  CloseButton,
  NewTransactionForm,
  TransactionType,
  TransactionTypeButton,
} from './styles'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransaction() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income',
    },
  })

  const { createTransaction } = useContext(TransactionsContext)

  async function handleAddNewTransaction(data: NewTransactionFormInputs) {
    createTransaction(data)
    reset()
  }
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <NewTransactionForm onSubmit={handleSubmit(handleAddNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço"
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            {...register('category')}
          />

          <Controller
            name="type"
            control={control}
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={32} />
                    entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={32} />
                    Saida
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </NewTransactionForm>
      </Content>
    </Dialog.Portal>
  )
}
