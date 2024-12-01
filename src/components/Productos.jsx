import React, { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductoPresentacion from '../components/ProductoPresentacion';
import productosData from '../assets/data/productos.json';
import '../assets/styles/productos.css';

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [pagina, setPagina] = useState(1);
  const productosPorPagina = 9;
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setProductos(productosData);
  }, []);

  const productosPagina = useMemo(() => {
    const indexOfLastProducto = pagina * productosPorPagina;
    const indexOfFirstProducto = indexOfLastProducto - productosPorPagina;
    return productos.slice(indexOfFirstProducto, indexOfLastProducto);
  }, [pagina, productos]);

  const manejarClick = (producto) => {
    setProductoSeleccionado(producto.id);
    setTimeout(() => {
      navigate(`/producto/${producto.id}`);
    }, 800); // tiempo de la animación antes de redirigir
  };

  const paginaSiguiente = () => {
    if (pagina < Math.ceil(productos.length / productosPorPagina)) {
      setPagina(pagina + 1);
    }
  };

  const paginaAnterior = () => {
    if (pagina > 1) {
      setPagina(pagina - 1);
    }
  };

  return (
    <section className="productosContenedorUnico">
      <div className="productosPaginacionUnico" id="productosContainer">
        {productosPagina.map((producto) => (
          <Link
            to={`/producto/${producto.id}`}
            key={producto.id}
            className={`productoTarjeta ${productoSeleccionado === producto.id ? 'productoCaida' : ''}`}
            onClick={(e) => {
              e.preventDefault(); // Evita la navegación instantánea
              manejarClick(producto);
            }}
          >
            {/* Este contenido está ahora directamente dentro del Link */}
            <ProductoPresentacion producto={producto} />
          </Link>
        ))}
      </div>

      <nav className="contBotonesUnicos">
        <button
          className="botonUnico izq"
          onClick={paginaAnterior}
          disabled={pagina === 1}
          aria-label="Página anterior"
        >
          &#8249;
        </button>
        <button
          className="botonUnico der"
          onClick={paginaSiguiente}
          disabled={pagina * productosPorPagina >= productos.length}
          aria-label="Página siguiente"
        >
          &#8250;
        </button>
      </nav>
    </section>
  );
};

export default Productos;
