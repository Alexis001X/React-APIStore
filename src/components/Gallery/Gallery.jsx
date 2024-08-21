import React, { useState, useEffect } from 'react';
import './Gallery.css';
import { FaShoppingCart } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";


const Gallery = () => {
    const [products, setProducts] = useState([]); // Estado para almacenar los productos
    const [showData, setShowData] = useState(false); // Estado para controlar si se muestran los datos
    const [selectedCategory, setSelectedCategory] = useState(''); // Estado para controlar la categoría seleccionada


    // useEffect para hacer la llamada a la API solo cuando se presione el botón
    useEffect(() => {
        if (showData) {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => {
                    const filteredProducts = selectedCategory
                        ? json.filter(product => product.category === selectedCategory)
                        : json;
                    setProducts(filteredProducts);
                })
                .catch(err => console.error('Error fetching data:', err));
        }
    }, [showData, selectedCategory]);
    

    // Función para manejar el clic del botón y mostrar los datos
    const handleShowData = () => {
        setShowData(true); // Cambia el estado para mostrar los datos
    };

    return (
        <div className='filtrer-list'>
            <div className='input-group mb-3'>
                <label className="input-group-text category-label" htmlFor="inputGroupSelect01"><FaFilter /> Categoría</label>
                <select 
                className="form-select" 
                id="inputGroupSelect01" 
                value={selectedCategory} 
                onChange={e => setSelectedCategory(e.target.value)}
                >
                    <option value="">Todas</option>
                    <option value="electronics">Electronicos</option>
                    <option value="jewelery">Joyeria</option>
                    <option value="men's clothing">Ropa de hombre</option>
                    <option value="women's clothing">Ropa de mujer</option>
                </select>
            </div>

            <button onClick={handleShowData} className="show-data-button" >Mostrar Datos</button>
            <div className='gallery-grid'>
                {products.map((product) => (
                    <div key={product.id} className='gallery-card'>
                        <img src={product.image} alt={product.title} className='product-image'/>
                        <h2 className='product-title'>{product.title}</h2>
                        <p className='product-price'>{product.price}</p>
                        <p className='product-description'>{product.description}</p>
                        <p className='product-category'>Category: {product.category}</p>
                        <div className='button-container'>
                        <button className='buy-button'><FaShoppingCart/> Comprar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
