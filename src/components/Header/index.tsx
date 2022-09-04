import LogoImg from '../../assets/Logo.svg'
import { HeaderContent, ContentWrapper, NewTransactionButton } from './styles'

import * as Dialog from '@radix-ui/react-dialog'
import { NewTransaction } from '../NewTransaction'

export function Header() {
  return (
    <HeaderContent>
      <ContentWrapper>
        <img src={LogoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransaction />
        </Dialog.Root>
      </ContentWrapper>
    </HeaderContent>
  )
}
