
//SE RETIRAN CIERTAS FUNCIONES QUE PUEDEN AGREGARLAS EN App.js
// En caso de querer borrar archivos , cambiar nombre , o actualizar desde la url , hacia Firebase. Puede hacerlo con el codigo aqui debajo




// const deleteProduct = async (id) => {
  //   const productsDoc = doc(db, "products", id);
  //   await deleteDoc(productsDoc);
  //   getProductsList();
  // };

  // const updateProductName = async (id) => {
  //   const productsDoc = doc(db, "products", id);
  //   await updateDoc(productsDoc, { name: updatedName });
  //   getProductsList();
  // };





/*      
      <div>
        <div>
          <h2>Nuevo producto</h2>
          <input
            placeholder="name"
            onChange={(e) => setNewProductsName(e.target.value)}
          />
          <input
            placeholder="price"
            onChange={(e) => setNewProductsPrice(Number(e.target.value))}
          />
          <input
            placeholder="stock"
            onChange={(e) => setNewProductsStock(Number(e.target.value))}
          />
          <button onClick={onSubmitTitle}>Enviar</button>
        </div>

        {productsList.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.stock}</p>
            <div>
              <button onClick={() => deleteProduct(product.id)}>
                Eliminar
              </button>
              <input
                type="text"
                placeholder="Nuevo nombre"
                onChange={(e) => setUpdatedName(e.target.value)}
              />
              <button onClick={() => updateProductName(product.id)}>
                Actualizar nombre
              </button>
            </div>
          </div>
        ))}
      </div>
*/