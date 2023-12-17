
class ProductManager {

    constructor() {
        this.products = [];
    }

    static id = 0;


    addProduct(title, descrption, price, thumbnail, code, stock) {

        for (let i = 0; i < this.products.length; i++) {

            if (this.products[i].code == code) {
                console.log(`El codigo ${code} esta repetido`);
                break;
            }
        }

        const newProduct = {
            title,
            descrption,
            price,
            thumbnail,
            code,
            stock,
        }

        if (!Object.values(newProduct).includes(undefined)) {
            ProductManager.id++;
            this.products.push({
                ...newProduct,
                id: ProductManager.id,
            });
        } else {
            console.log("Todos los campos son requeridos")
        }
    }

    getProduct() {
        return this.products;
    }

    existe(id) {
        return this.products.find((producto) => producto.id == id)
    }

    getProductById(id) {
        !this.existe(id) ? console.log("Not Found") : console.log(this.existe(id))
    }
}


const productos = new ProductManager();

//llama al arreglo vacio
console.log(productos.getProduct());

//agregar productos al arreglo
productos.addProduct("remera", "remera talle 4", 5000, "renera1.jpg", "1", 5);
productos.addProduct("pantalon", "pantalon jean", 15000, "pantalon1.jpg", "2", 2);


//llamar al arreglo para comprobar que tenga los productos cargados
console.log(productos.getProduct())

// Validacion de Code repetido
productos.addProduct("remera", "remera talle 4", 5000, "renera1.jpg", "1", 5);

//Busqueda por Id
productos.getProductById(4);





