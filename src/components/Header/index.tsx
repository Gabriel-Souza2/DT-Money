import LogoImg from '../../assets/Logo.svg'
import { HeaderContent, ContentWrapper, NewTransactionButton } from './styles'

export function Header() {
  return (
    <HeaderContent>
      <ContentWrapper>
        <img src={LogoImg} alt="" />

        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </ContentWrapper>
    </HeaderContent>
  )
}
