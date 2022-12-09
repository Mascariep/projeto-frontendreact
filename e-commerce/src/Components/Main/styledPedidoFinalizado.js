import styled from "styled-components"

export const ContainerFinalizado = styled.div`
    width: 50%;
    min-height: 481px;
    border-radius: 8px;
    box-shadow: 1px 1px 4px rgb(191,191,191);
    display: flex;
    flex-direction: column;
    background-color: #EAEAEA;
    color: #000000;
    justify-content: space-around;
  
    h1,h2,h3{
    text-align: center;
    }

    div:last-child{
        display: flex;
        justify-content: center;
    }

    button{
        background-color: #000000;
        border-radius: 8px;
        font-size: 16px;
        color: white;
        width: 50%;
        height: 40px;
        border: none;
    }

    button:hover{
        cursor: pointer;
        font-weight: light;
        transform: scale(1.05)
    }
`