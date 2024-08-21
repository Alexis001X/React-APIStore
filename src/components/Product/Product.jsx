import React from 'react'

const Product = ({product}) => {
  return (
    <div style={{display:'flex', width:'30%', border: '1px solid white', justifyContent:'center', flexDirection:'column', margin: '1rem',}}>
        <img src={product.imagenes[0]['url'] ?? './sinimagen.jpg'} style={{width:'100%', height:'20vh', objectFit:'contain'}}></img>
        <hr></hr>
        <div style={{height: '30vh'}}>
            <div>
                <h3 style={{overflowX:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', maxHeight:'100%', }}>{product.nombre}</h3>
            </div>
            <div style={{height: '20vh'}}>
                <p style={{overflow:'hidden', maxHeight:'15vh', textOverflow:'ellipsis'}}>{product.descripcion}</p>
            </div>
        </div>
        <div style={{display:'flex', 
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            height:'10vh',
        }}>
            <div>
                Precio: {product.precio}
            </div>
            <div>
                SKU: {product.sku}
            </div>
        </div>        
    </div>
  )
}

export default Product