import {ContainerFinalizado} from "./styledPedidoFinalizado"

function PedidoFinalizado(props){

    return (
        <>
        <ContainerFinalizado>
            <div>
                <h1>Compra realizada com SUCESSO!.</h1>
            </div>
        
            <div>
                <h2>Seu pedido está a caminho e chegará em 10 dias.</h2>      
            </div>
 
           
            <div>
                <button onClick={()=>props.mudarTela(1)}>Realizar novo Pedido</button>
            </div>
        </ContainerFinalizado>
        
        </>
    )
}

export default PedidoFinalizado;