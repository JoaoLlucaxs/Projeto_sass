import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import axios from '../../axios'
import Head from '../Head'

const Products=()=>{
    const[products,setProducts]=useState(null)

    useEffect(()=>{
        async function fetchApi(){
            const response=await axios.get()
            const json=await response.data

            setProducts(json)
        }
        fetchApi()
    },[])

    if(products === null) return null
    return(
        <section className="products_style + animeLeft">
            <Head title='Produtos' description='Todos os Produtos'/>
            {products.map((product)=>
            <Link to={`product/${product.id}`} key={product.id}>
                <h1 className="name_products">{product.nome}</h1>
                <img src={product.fotos[0].src} alt={product.fotos[0].titulo}/>
            </Link>
            )}
        </section>
    )
}


export default Products;
