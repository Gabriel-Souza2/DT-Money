import LogoDTMoney from '../../assets/logoDtMoney.svg'
import { HeaderContent, ContentWrapper, NewTransactionButton } from './styles'

export function Header() {
  return (
    <HeaderContent>
      <ContentWrapper>
        <img src={LogoDTMoney} alt="" />
        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </ContentWrapper>
    </HeaderContent>
  )
}
