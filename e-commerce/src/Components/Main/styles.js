import styled from "styled-components"

export const Card = styled.div`
    border: 1px solid #EAEAEA;
    border-radius: 15px;
    height: 400px;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    div:first-child{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60%;
        border-radius: 8px 8px 0 0;

        img{
            height: 180px;
            width: auto;
            max-width: 100%;
        }

    }

    div:last-child{
        height: 40%;
        border-radius: 0 0 8px 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        span{
            font-size: 12px;
            width: 90%;
            text-align: center;
        }

        h3{
            font-size: 20px;
            color: #000000;
        }

        button{
            background-color: #000000;
            border-radius: 8px;
            color: white;
            width: 200px;
            height: 40px;
            border: none;
            font-weight: bold;
            transition: transform .3s;
        }

        button:hover{
            cursor: pointer;
            font-weight: light;
            transform: scale(1.1)
        }
    }

    :hover{
        border: #000000 2px solid;
        transform: scale(1.2);
        transition: "all .3s ease"
    }
`
export const BoxCard = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: white;
    flex-wrap: wrap;
    `
export const Container = styled.div`
    width: 100%;
    display: flex;
    background-color: white;
    margin-bottom: 30px;
    justify-content: center;
`
export const BoxLateral = styled.div`
    width: 15%;
    padding-left: 10px;
    padding-top: 50px;

    h2{
        color: black;
    }

    input{
        border: 1px #000000 solid;
        border-radius: 4px;
        height: 30px;
        padding-left: 8px;
        background-color: white;
    }

    input:active{
        border: 1px black solid; 
    }

`
export const BoxLateralCarrinho = styled.div`
    width: 20%;
    padding-left: 10px;
    padding-top: 50px;
    display: flex;
    flex-direction: column;

    h2{
        color: black;
    }

    button{
        background-color: black;
        border-radius: 8px;
        font-size: 16px;
        color: white;
        width: 90%;
        height: 40px;
        border: none;
        transition: transform .3s;
    }

    button:hover{
        cursor: pointer;
        transform: scale(1.1);
    }

    div:hover{
        cursor: pointer;
    }

    span{
        font-size: 12px;
    }
`

export const BoxCentral = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    gap: 10px;
    flex-wrap: wrap;
   

    .boxcentral-topo{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .boxcentral-topo-select{
        border-radius: 8px;
    }

`