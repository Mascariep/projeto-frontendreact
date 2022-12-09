import {BoxCentral, Card, BoxCard} from "./styles"
import {useState, useEffect} from 'react'
import Carrinho from "./Carrinho"
import Filtro from "./Filtro"

function Home (props){

  const produtos = [{
    id: 1,
    nome: "Camiseta Astronauta",
    preco: 39.90,
    imagem: "https://www.dogemoon.com.br/wp-content/uploads/2021/08/unisex-jersey-t-shirt-black-front-61142116ed0fc.jpg",
  },
  {
    id: 2,
    nome: "Camiseta Astronauta Skate",
    preco: 39.90,
    imagem: "https://static.netshoes.com.br/produtos/camiseta-astronauta-skatista-camisa-espaco-skate-sk8-espaco/06/9I2-0122-006/9I2-0122-006_zoom1.jpg?ts=1646155911",
  },
  {
    id: 3,
    nome: "Camiseta Astronauta Planeta",
    preco: 29.90,
    imagem: "https://static.netshoes.com.br/produtos/camiseta-astronauta-horizonte-espacial-camisa-planeta-espaco/06/9I2-0187-006/9I2-0187-006_zoom1.jpg?ts=1646162930&ims=544x",
  },
  {
    id: 4,
    nome: "Camiseta Planetas",
    preco: 45.90,
    imagem: "https://static.netshoes.com.br/produtos/camiseta-darkwood-planetas-camisa-espaco-galaxias/06/3C3-0004-006/3C3-0004-006_zoom1.jpg?ts=1617036808&ims=544x",
  },
  {
    id: 5,
    nome: "Camiseta Astronauta Moon",
    preco: 45.90,
    imagem: "https://static.netshoes.com.br/produtos/camiseta-darkwood-astronauta-camisa-espaco/06/3C3-0024-006/3C3-0024-006_zoom1.jpg?ts=1617041724&ims=544x",
  },
  {
    id: 6,
    nome: "Camiseta Feminina Planetas",
    preco: 29.90,
    imagem: "https://static.netshoes.com.br/produtos/camiseta-feminina-nove-planetas/42/Z76-1289-342/Z76-1289-342_zoom1.jpg?ts=1621855135&ims=544x",
  },
  {
    id: 7,
    nome: "Camiseta Space Today",
    preco: 33.90,
    imagem: "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/azul-marinho1-7f78c7f70c1f7e618116136551726503-1024-1024.png",
  },
  {
    id: 8,
    nome: "Camiseta Saturno",
    preco: 19.90,
    imagem: "https://images-americanas.b2w.io/produtos/4012099765/imagens/camiseta-saturno-planeta-galaxia-camisa-espaco-sideral/4012099837_1_large.jpg",
  },
  {
    id: 9,
    nome: "Camiseta Alien",
    preco: 15.90,
    imagem: "https://static.netshoes.com.br/produtos/camisa-et-alien-extra-terrestre-camiseta-alienigena/06/9I2-0265-006/9I2-0265-006_zoom1.jpg?ts=1646327936",
  }]

  const [pesquisa, setPesquisa] = useState("")
  const [valorMinimo, setValorMinimo] = useState("")
  const [valorMaximo, setValorMaximo] = useState("")
  const [ordem, setOrdem] = useState("") 

  const produtosFiltradosTela = produtos
  .filter((produto) => produto.nome.includes(pesquisa))
  .filter((produto) => produto.preco >= valorMinimo)
  .filter((produto) => {return valorMaximo ? produto.preco <= valorMaximo:produto})
  .sort((a,b) =>{
    switch(ordem){
      case "Maior":
        if (a.preco < b.preco){
          return 1
        }else{
          return -1
        }
      case "Menor":
        if(a.preco<b.preco){
          return -1
        }else{
          return 1
        }
        
    }
  })
  
    const onChangeCarrinho = (event)=>{
      props.setCarrinho(event.target.value)
    }

    const onChangeOrdem =(event)=>{
      setOrdem(event.target.value)
    }

    //FUNÇÃO PARA COMPRA DE PRODUTOS NO CARRINHO
    const compraProduto = (produto) =>{
      const novoCarrinho = [...props.carrinho]
      const produtoAdicionado = produto
      const produtoExistente = novoCarrinho.find((produto)=>{
          return produto.id === produtoAdicionado.id 
      })
          if (produtoExistente){
            produtoExistente.quantidade++
            produtoExistente.precototal = produtoExistente.quantidade * produtoExistente.preco
          }else{
            novoCarrinho.push({...produtoAdicionado, quantidade: 1, precototal: produtoAdicionado.preco})
          } 
        props.setCarrinho(novoCarrinho)
    }

    //HOOK UTILIZADO PARA ARMAZENAR OS DADOS DO CARRINHO NO LOCALSTORAGE
    useEffect(() => {
          if(props.carrinho.length>0){
          const listaStringCarrinho = JSON.stringify(props.carrinho)
          localStorage.setItem("carrinho",listaStringCarrinho)
        }
        },[props.carrinho])

     //HOOK UTILIZADO PARA CARREGAR OS DADOS DO CARRINHO DO LOCALSTORAGE PARA A TELA
    useEffect(() => {
        const novoCarrinho = JSON.parse(localStorage.getItem("carrinho"))
          if(novoCarrinho !== null){
            props.setCarrinho(novoCarrinho)
          }   
    },[])   

    return(
        <>
        <Filtro
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
        minimo={valorMinimo}
        setMinimo={setValorMinimo}
        maximo={valorMaximo}
        setMaximo={setValorMaximo}
        />
        <BoxCentral>
          <div className="boxcentral-topo">
            <div>
            <h3>
              Resultado da busca:
            </h3>
            <p>
              {produtosFiltradosTela.length} produtos 
            </p>
            </div>
            <div>
            <select value={ordem} onChange={onChangeOrdem} className="boxcentral-topo-select">
              <option value="">Ordenar por</option>
              <option value="Maior">Preço: do maior para o menor</option>
              <option value="Menor">Preço: do menor para o maior</option>
            </select>
            </div>
          </div>
        <BoxCard>

          {produtosFiltradosTela
          .map((produto, index)=>{
            return(
            <Card key={index}>
            <div>
                <img src={produto.imagem} alt="Produto-Loja"/>
            </div>
            <div>
                <span>{produto.nome}</span><br/>
                <h3>R$ {produto.preco.toFixed(2)}</h3><br/>
                <button onClick={()=>compraProduto(produto)} onChange={onChangeCarrinho}>Comprar</button>             
            </div>
            </Card>)
          })}

        </BoxCard>
        </BoxCentral>
        <Carrinho
        cesta={props.carrinho}
        setCesta={props.setCarrinho}
        carrinhoCompleto={props.mudarTela}
        />
        </>
    )
}

export default Home