import styled from 'styled-components'

export const Wrapper = styled.div`
  border-radius: 2rem;
  height: 100%;
  background: linear-gradient(225deg, #f0e9fd 0%, #e9ecf7 49.56%, #e9f7f3 100%);
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    margin-bottom: 1.4rem;
    color: #1b41aa;
    font-size: 2.6rem;
  }

  div {
    width: 100%;
    justify-content: space-between;
    display: flex;
  }
`

export const Form = styled.form`
  background: #fff;
  //padding: 2rem;
`

export const FormField = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.8rem;
    color: #1b41aa;
    font-weight: 500;
    margin-bottom: 0.8rem;
  }

  input {
    border-radius: 0.8rem;
    padding: 0.5rem 1rem;
    border: 0.1rem solid #d1d9ee;
    background: #fff;
  }
`

export const Select = styled.select`
  border-radius: 0.8rem;
  padding: 0.5rem 0.3rem;
  border: 0.1rem solid #d1d9ee;
  background: #fff;
`

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 2rem;
  border-radius: 1.6rem;
  background: linear-gradient(270deg, #5602e4 0%, #1b41aa 49.56%, #1baa84 100%);
  border: 0;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
`

export const FromFieldWrapper = styled.div`
  padding: 2rem;
  margintop: 2rem;
  display: flex;
  justify-content: center;
  background: linear-gradient(225deg, #f0e9fd 0%, #e9ecf7 49.56%, #e9f7f3 100%);

  .wrapper {
    width: 60%;
    background-color: #fff;
    padding: 2rem;
    border-radius: 1.4rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }
`

export const Back = styled.div`
  a {
    display: flex;
    justify-content: space-between;
    padding: 0.8rem 2rem;
    border-radius: 1.6rem;
    font-size: 1.2rem;
    cursor: pointer;
    border: 0.1rem solid #1b41aa;
    color: #1b41aa;
    text-decoration: none;
  }
`
