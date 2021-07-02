import styled from 'styled-components'

export const FormGroup = styled.div`
    position: relative;
    margin: 45px 0;
`

export const StyledInput = styled.input`
background: none;
background-color: black;
color: #ADD8E6;
font-size: 18px;
padding: 10px 10px 10px 5px;
display: block;
width: 100%;
border: none;
border-radius: 0;
border-bottom: 1px solid #ADD8E6;
margin: 25px 0;

&:focus {
  outline: none;
}

&:focus ~ .form-input-label {
    color: #ADD8E6;
  @include shrinkLabel();
}
`