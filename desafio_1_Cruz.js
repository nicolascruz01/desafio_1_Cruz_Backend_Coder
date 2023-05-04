class ProductManager {
    constructor() {
      this.products = [];
      this.lastProductId = 0;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      // Validar que todos los campos sean obligatorios
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log("Error: Todos los campos son obligatorios");
        return;
      }
  
      // Validar que el campo "code" no se repita
      if (this.products.some(product => product.code === code)) {
        console.log("Error: El código del producto ya existe");
        return;
      }
  
      const newProduct = {
        id: ++this.lastProductId,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
  
      this.products.push(newProduct);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
  
      if (product) {
        return product;
      } else {
        console.log("Error: Producto no encontrado");
      }
    }
  }
  
  // Ejemplo de uso:
  const manager = new ProductManager();
  manager.addProduct("Camiseta", "Camiseta de algodón", 19.99, "/path/to/thumbnail1.jpg", "123", 10);
  manager.addProduct("Pantalón", "Pantalón vaquero", 29.99, "/path/to/thumbnail2.jpg", "456", 5);
  manager.addProduct("Zapatos", "Zapatos de cuero", 59.99, "/path/to/thumbnail3.jpg", "789", 3);
  
  const products = manager.getProducts();
  console.log(products);
  
  const productById = manager.getProductById(2);
  console.log(productById);
  
  const nonExistentProduct = manager.getProductById(5); // Producto no encontrado, muestra un error en la consola
  