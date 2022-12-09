import styled from "styled-components"

export const MainHeader = styled.div`
    height: 20vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    border-radius: 30px 30px;
    margin-bottom: 30px;
    color: #ffffff;
    font-size: 55pt;

    div:first-child{
        width: 60%;
    }

    div:nth-child(2){
        display: flex;
        align-items: center;
        width: 60%;
        img{
            width: 15vw;
            min-width: 150px;
        }
    }

    div:nth-child(3){
        display: flex;
        /* justify-content: center; */
        align-items: center;
        width: 20%;
        font-size: 54px;

        img{
            border: 2px solid #ffffff;
            border-radius: 50%;
            padding: 8px;
            height: 16px;
            margin-right: 8px;
        }
    }

    div:last-child{
        display: flex;
        justify-content: end;
        align-items: flex-end;
        width: 50%;
        gap: 40px;      
        
        img{
            height: 16px;
            transition: transform .3s;
        }

        img:hover{
            cursor: pointer;
            transform: scale(1.2)
        }
    }
` 

export const Imagem = styled.img`
    height: 22vh;
    width: auto;
    animation: float 6s ease-in-out infinite;
    
    @keyframes float {
        0%{
        transform: translateY(0px);      
        }

        50%{
        transform: translateY(-20px);    
        }

        100%{
        transform: translateY(0px);
        }}`
