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

  
`
export const Input = styled.input`
  display: flex;
  width: 20rem;
  height: 2.4rem;
  border-radius: 5px;
  padding-left: 10px;
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

&:hover{
  background: darkgray;
}

`