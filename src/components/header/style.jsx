import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #e6e6e6;
  width: 100%;
  height: 4.5rem;
  border-bottom: solid 1px #b3b3b3;
`
export const Form = styled.form`
  display: flex;
  margin-left: 13px;
  align-items: center;
  justify-content: center;
`

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 800px) {
    display: none;
  }
`

export const Input = styled.input`
  display: flex;
  width: 20rem;
  height: 2.4rem;
  border: solid 1px #cccccc;
  border-radius: 5px;
  padding-left: 10px;

  @media screen and (max-width: 800px) {
    width: 12rem;
    height: 2.1rem;
    margin-left: -5px;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 38px;
  margin-left: 3px;
  background: #e6e6e6;
  cursor: pointer;
  transition: ease 0.7s;

  &:hover {
    background: darkgray;
  }
`
export const ImgLogo = styled.img`
  width: 42px;
  height: 40px;

  @media screen and (max-width: 800px) {
    width: 35px;
    height: 32px;
    margin-left: 10px;
  }
`

export const ImgLupa = styled.img`
  width: 32px;

  @media screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -9px;
  }
`
