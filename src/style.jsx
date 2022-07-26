import styled from 'styled-components'

export const ContainerApp = styled.div`
  color: black;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -24rem;

  @media screen and (max-width: 800px) {
    /* margin-top: -34.4rem; */
    margin-top: -11rem;
    width: 97%;
    margin-left: 7px;
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
  margin-top: 5px;
  margin-bottom: 5px;
  width: 66px;

  @media screen and (max-width: 800px) {
    margin-left: -10px;
  }
`

export const H1 = styled.h1`
  font-size: 2rem;

  @media screen and (max-width: 800px) {
    font-size: 1.2rem;
    margin-left: -20px;
  }
`
export const ContainerParagraph = styled.div`
  display: flex;
  width: 89%;
  align-items: center;
  justify-content: left;
  margin-left: 45px;

  @media screen and (max-width: 700px) {
    margin-left: 25px;
    width: 88%;
  }
`
export const Span = styled.span`
  font-size: 1.1rem;
  line-height: 25px;
  color: #333333;
  text-indent: 15px;
  font-family: Roboto;


  @media screen and (max-width: 670px){
  /* font-size: 1.4rem; */

  }
`
