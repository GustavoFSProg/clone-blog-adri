import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  /* align-items: flex-end; */
  justify-content: center;
  background: #f2f2f2;
  width: 15.2rem;
  height: 99vh;
  margin-right: 4rem;
  border: solid 1px #b3b3b3;
  margin-top: 20px;

  @media screen and (max-width: 850px) {
    display: none;
  }
`
