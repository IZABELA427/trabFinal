import React from 'react';
import axios from 'axios';
import Link from 'next/link';

function Products ({products}){
    return (
        <div>
            {products.map((products) => (
                <div>
                    <Link href='/profile/[id]' as={`/profile/${products.id}`} >
                       <h1> {products.title}</h1>
                       <p>DESCRIÇÃO:{products.description} </p>
                       <p> PREÇO: {products.price}</p>
                       <p> IMAGEM: {products.image}</p>
                     </Link>
                </div>
            ))}
        </div>
    )
}


export async function getStaticProps(context){
    const response = await axios.get(
        ' https://fakestoreapi.com/products'
    )
    const data = await response.data;
    return{
        props: {products:data},
    }
}

export default Products;
