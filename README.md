## ⚙️ Funcionalidades principales

- 🔧 **Gestión de productos:**  
  Los productos son creados y almacenados en Firebase Firestore con propiedades como nombre, ID, stock, precio e imagen (almacenada en Firebase Storage).

- 🛒 **Carrito de compras:**  
  Los usuarios pueden agregar productos al carrito (estado global por contexto), con visualización continua del número de ítems agregados.

- 🧭 **Navegación por rutas:**  
  Implementación de rutas con React Router:
  - `/` → Muestra todos los productos.
  - `/category/:category` → Filtra productos por categoría.
  - Los `NavLink` resaltan la ruta activa con color amarillo.

- 🔍 **Detalle de producto:**  
  Vista individual con detalles y la posibilidad de añadir al carrito (si hay stock). El botón se desactiva si no hay unidades disponibles.

- 🔄 **Control de cantidad:**  
  Si el producto ya está en el carrito, se incrementa su propiedad `quantityAdded` para evitar elementos duplicados.

- ✅ **Feedback de acciones:**  
  Al agregar un producto, se muestra una notificación verde en la parte superior derecha para confirmar la acción.

- 🎯 **Renderizado condicional en el carrito:**  
  Se muestra la lista de productos o una vista alternativa si el carrito está vacío.

- ➖ **Disminuir cantidad:**  
  Cada producto en el carrito puede reducir su cantidad. Si la cantidad llega a menos de 2, se elimina del carrito.

- 📦 **Validación en el checkout:**  
  Solo se puede acceder al formulario si el carrito contiene productos, de lo contrario redirige a `/`.

- 📝 **Validaciones de formulario:**  
  Validación de:
  - Formato correcto del email.
  - Que el número de teléfono no contenga letras o espacios.
  - Que el nombre no esté vacío ni contenga caracteres inválidos.
  - Inputs con valores predefinidos para facilitar pruebas.

- 📃 **Generación de orden de compra:**  
  - Al finalizar, se muestra un mensaje con el ID de compra usando SweetAlert.
  - Se guarda en una colección `orders` de Firestore.
  - Se actualiza el stock de los productos.
  - Se reinicia el carrito y el total, redirigiendo al inicio.

---

## 👤 Autor

**Brayan David Díaz Tabares**  
2025

---
