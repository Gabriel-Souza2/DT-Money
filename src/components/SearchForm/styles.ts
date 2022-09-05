import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    background-color: ${({ theme }) => theme['gray-900']};
    border: 0;
    padding: 1rem;
    border-radius: 6px;
    color: ${({ theme }) => theme['gray-300']};
    font-size: 16px;

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  button {
    padding: 0.875rem 2rem;
    background: transparent;
    color: ${({ theme }) => theme['green-300']};
    border: 1px solid ${({ theme }) => theme['green-300']};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      color: ${({ theme }) => theme.white};
      background-color: ${({ theme }) => theme['green-300']};
      transition: background-color 0.2s, color 0.2s;
    }
  }
`
