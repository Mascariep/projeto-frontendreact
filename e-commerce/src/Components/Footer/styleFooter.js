import styled from 'styled-components'

export const MainFooter = styled.div`
    background-color: #000000;
    color: white;
    border-radius: 10px 10px;

    .footer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 8vh;

        img{
            height: 30px;
            margin-left: 8px;
        }

        img:hover{
        cursor: pointer;
        transform: scale(1.3);
        }
    }
`

export const Imagem = styled.img` 
    min-height: 120px;
    height: 40vh; 
`