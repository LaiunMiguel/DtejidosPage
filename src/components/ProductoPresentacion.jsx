import React from 'react';

const ProductoPresentacion = ({ producto }) => {
  return (
    <div className="productosPresentacionUnica">
        <div className="cartaPresentacionUnica">
          <div>
            <img src={producto.imagen} alt={producto.nombre} className="imagenMuestraUnica" />
          </div>
          
              <div className="tituloUnico">
                {producto.nombre}
              </div>
        </div>
    </div>
  );
};

export default ProductoPresentacion;
