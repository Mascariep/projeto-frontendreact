import {BoxLateralCarrinho} from "./styles"
import lixeira from "../../assets/lixeira.png";


function Carrinho (props){

    let totalCarrinho = 0

    const somaCarrinho = ()=>{
        for (let i = 0;i<props.cesta.length;i++){
            totalCarrinho += props.cesta[i].precototal
        }
        return
    }

    const removeItem = (produto)=>{
        const buscaItem = props.cesta.filter((item) => item !== produto)
        
        props.setCesta(buscaItem)
    }

    somaCarrinho()

    return(
        <BoxLateralCarrinho>
        <h2>Carrinho:</h2><br/>
        
            {props.cesta.map((produto,index)=>{
            return(
                <div key={index} onClick={()=>removeItem(produto)}>
                    <img src={lixeira} alt="excluir" width="16px" />
                <p><span>X{produto.quantidade} </span><span>{produto.nome} </span><span> <b>{produto.precototal.toFixed(2)}</b></span></p><br/><br/>
                </div>
            )    
        })}
        
        <p><b>Valor total: R$ {totalCarrinho.toFixed(2)}</b></p><br/><br/>
        <button onClick={()=>props.carrinhoCompleto(2)}>Acessar Carrinho</button>
        </BoxLateralCarrinho>
    )
}

export default Carrinho