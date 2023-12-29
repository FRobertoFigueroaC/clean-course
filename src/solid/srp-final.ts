(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.

    class ProductService {

      private _httpAdapter : Object;

        getProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
          // Realiza una petición para salvar en base de datos 
          console.log('Guardando en base de datos', product );
      }
    }
    class CartBloc {

      private _itemsInCart : Object[];

        addToCart ( productId: number ) {
          // Agregar al carrito de compras
          console.log('Agregando al carrito ', productId );
        }
    }
    class Mailer {
      private _masterEmail: string = 'test@testers.com';

      sendEmail(emailList:string[], template: 'to-clients' | 'to-admins'){
        console.log('Enviando correo a los clientes', template);
      }
    }
    class ProductBloc {

      private _productService : ProductService;
      private _mailer : Mailer;

      constructor(productService: ProductService, mailer : Mailer) {
        this._mailer = mailer;
        this._productService = productService
      }
    
      loadProduct( id: number ) {
         this._productService.getProduct(id);
      }

      saveProduct( product: Product ) {
        this._productService.saveProduct(product);
      }

      notifyClients() {
        this._mailer.sendEmail(['client@google.com'],'to-clients')
      }
    
    }


    const productService = new ProductService();
    const mailer = new Mailer();

    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10);
})();
