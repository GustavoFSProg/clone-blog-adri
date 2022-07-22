import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #f2f2f2;
  width: 15.2rem;
  height: 99vh;
  border: solid 1px #b3b3b3;
  margin-left: 4rem;
  margin-top: 20px;

  @media screen and (max-width: 850px){
    display: none;
  }
`
