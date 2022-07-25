import styled from 'styled-components'

export const ContainerApp = styled.div`
  color: black;
  width: 95%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: -28rem;

  @media screen and (max-width: 800px) {
      /* margin-top: -34.4rem; */
  margin-top: -19rem;


  }
`
export const ImgBody = styled.img`
  /* width: 710px; */
  height: 325px;
    width: 95%;


  display: flex;
  border-radius: 9px;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 165px;

  }
`
export const ImgLupa = styled.img`
  width: 32px;

  @media screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -8px;
  }
`
