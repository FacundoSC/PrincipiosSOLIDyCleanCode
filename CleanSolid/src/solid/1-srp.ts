(() => {

    interface Product { 
        id:   number;
        name: string;
    }


    class ProductService{
        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
    

    }

    class Mailer{
        notifyClients() {
            console.log('Enviando correo a los clientes');
        }
    }

    class Cart{

        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }

    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private  productoService :ProductService;
        private  mailer          :Mailer;
        private  cart            :Cart;
        constructor(productoService : ProductService, mailer :Mailer, cart :Cart){
          this.productoService = productoService;
          this.mailer = mailer;
          this.cart = cart;
        }  
        loadProduct( id: number ) {
            this.productoService.loadProduct(id);
        }
    
        saveProduct( product: Product ) {
            this.productoService.saveProduct(product);
        }

        notifyClients() {
            this.mailer.notifyClients();
        }
    
        onAddToCart( productId: number ) {
            this.cart.onAddToCart(productId);
        }
    
    }
    
    const  productService = new ProductService();
    const  mailer = new Mailer();
    const  cart = new Cart(); 

    const productBloc = new ProductBloc(productService, mailer, cart);

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    productBloc.onAddToCart(10);








})();

