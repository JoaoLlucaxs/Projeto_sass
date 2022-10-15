import { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from '../../axios'
import Head from '../Head'

const Product=()=>{
    const[productId,setProductId]=useState(null)
    const[loading,setLoading]=useState(false)
    const[error,setError]=useState(null)
    const{id}=useParams()

    useEffect(()=>{
        async function paramsProduct(url){
            try{
                setLoading(true)
                const response=await axios.get(url)
                const json=await response.data

                setProductId(json)
            }catch(erro){
                setError('Algo deu errado')
            }finally{
                setLoading(false)
            }

        }
        paramsProduct(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
    },[id])


    if(loading) return <div className='loading'></div>
    if(error) return <p>{error}</p>
    if(productId === null) return null

    return(
        <section className="product_id + animeLeft">
            <Head title={`Comprar | ${productId.nome}` } description={`Produto a comprar :${productId.nome}`}/>

            <div>
            {productId.fotos.map((photo)=>(
                <img key={photo.src} src={photo.src} alt={photo.titulo}/>
            ))}
            </div>

           <div>
            {productId.nome}
            <span className='price'>{productId.preco}</span>
            <p className='description'>{productId.descricao}</p>
            <button>Adicionar ao carrinho</button>
           </div>
        </section>
    )
}

export default Product;
