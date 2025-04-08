export const TEXTS = {
  tabs: {
    home: 'Home',
    shoppingCart: 'Carrito',
    menu: 'Menu',
  },
  buttons: {
    addToCart: 'Agregar al carrito',
    darkTheme: 'Dark Theme',
    lightTheme: 'Light Theme',
    startPay: (items: number) => `Proceder al pago(${items})`,
  },
  placeholders: {
    search: 'Buscar en better challenge',
  },
  titles: {
    shoppingCart: 'Carrito de compras',
    menu: 'Menu',
    detailProduct: 'Detalle del producto',
  },
  messagesEmpty: {
    products: 'Sin productos',
    cart: 'Sin productos en el carrito de compras',
    resultProduct: 'Sin productos que coincidan con la busqueda',
  },
  messages: {
    cartAdded: 'Producto añadido al carrito',
    cantLoadedProducts: 'Error al cargar los productos',
    generalError: 'Error inesperado',
    unauthorized: 'No autorizado. Por favor inicia sesión',
    notFound: 'Error, no se encontro el recurso',
    serverError: 'Estamos teniendo problemas con nuestros servicios',
    connectionError: 'Error de red. Verifica tu conexión',
  },
};
