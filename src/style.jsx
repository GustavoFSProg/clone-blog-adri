import styled from 'styled-components'

export const ContainerApp = styled.div`
  color: black;
  width: 95%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: -26rem;

  @media screen and (max-width: 800px) {
      /* margin-top: -34.4rem; */
  margin-top: -15rem;


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
export const ImgFace = styled.img`
  margin-top: 25px;
   margin-left: 15px;
   width: 67px;

  @media screen and (max-width: 800px) {
   margin-left: 5px;
   
  }
`
