import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productosData from '../assets/data/productos.json';
import '../assets/styles/prod.css';

const ProductoPage = () => {
  const { id } = useParams(); // Obtén el productoId desde la URL
  const [producto, setProducto] = useState(null);
  const [imagenPrincipal, setImagenPrincipal] = useState('');

  useEffect(() => {
    const producto = productosData.find((p) => p.id === Number(id));
    setProducto(producto);
    setImagenPrincipal(producto.imagen);
  }, [id]);

  if (!producto) {
    return <div>Cargando...</div>;
  }

  const actualizarImagen = (num) => {
    setImagenPrincipal(`/images/prod${id}/${num}.jpg`);
  };


  const scrollGallery = (direction) => {
    const gallery = document.querySelector('.imagenesCont');
    const scrollAmount = gallery.clientWidth * 0.3;
    gallery.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fondoProdPage">
      <div className="contenedor">
        <div className="fotoZoom">
          <img
            id="imgActual"
            className="imagen"
            src={imagenPrincipal}
            alt="Producto"
          />
        </div>
        <div className="miniContenedor">
          <div className="detalles">
            <div className="titulo">
              <h1 id="tituloProducto">{producto.nombre}</h1>
            </div>
            <div className="descripcion" id="descripcionProducto">
              {producto.descripcion.map((linea, index) => (
                <p key={index}>{linea}</p>
              ))}
            </div>
            <div className="precio">
              <h1 id="precioProducto">Precio: ${producto.precio}</h1>
            </div>
          </div>
          <div className="galeria">
            <button
              className="btn-scroll left"
              onClick={() => scrollGallery(-1)}
              aria-label="Desplazar galería izquierda"
            >
              &#8249;
            </button>
            <div className="imagenesCont" id="galeriaImagenes">
              {producto.galeria.map((imagen, index) => (
                <img
                  key={index}
                  src={imagen}
                  className="miniImagen"
                  alt={`Miniatura ${index + 1}`}
                  onClick={() => actualizarImagen(index + 1)}
                />
              ))}
            </div>
            <button
              className="btn-scroll right"
              onClick={() => scrollGallery(1)}
              aria-label="Desplazar galería derecha"
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoPage;
