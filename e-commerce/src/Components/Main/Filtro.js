import {BoxLateral} from "./styles"


function Filtro(props){

    const handleMinSearch = (event)=>{
        props.setMinimo(event.target.value)
    }

    const handleMaxSearch = (event)=>{
        props.setMaximo(event.target.value)
    }

    const handleNomeSearch = (event)=>{
        props.setPesquisa(event.target.value)
    }

    return (
        <>
        <BoxLateral>
            <h2>Filtrar por:</h2><br/>
            <p>Menor Preço:</p>
            <input type="text" className="Input-Dados" value={props.minimo} onChange={handleMinSearch} placeholder="R$ 0.00"/><br/><br/>
            <p>Maior Preço:</p>
            <input type="text" className="Input-Dados" value={props.maximo} onChange={handleMaxSearch} placeholder="R$ 0.00" /><br/><br/>
            <p>Busca por nome:</p>
            <input type="text" className="Input-Dados" value={props.pesquisa} onChange={handleNomeSearch} placeholder="Camiseta"/>
        </BoxLateral>
        </>
    )
}

export default Filtro