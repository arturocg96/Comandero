# Instrucciones para el Proyecto: Calculadora de Propinas y Consumo

## Descripción

**Calculadora de Propinas y Consumo** es una aplicación web que permite a los usuarios seleccionar artículos de un menú, calcular el costo total de su orden, añadir una propina y visualizar el total a pagar. La aplicación está construida en React y utiliza TypeScript para mayor seguridad en el manejo de datos.

## Descripción de Archivos

### 1. `Header.tsx`

- **Función principal:** Muestra un encabezado con el título de la aplicación: "Calculadora de Propinas y Consumo". Utiliza clases de TailwindCSS para estilizar el encabezado de forma atractiva.

### 2. `MenuItem.tsx`

- **Props:** Recibe un objeto `item` (con propiedades `id`, `name`, `price`) y una función `addItem` que permite añadir el artículo al pedido.
- **Función principal:** Muestra un botón que representa cada ítem del menú, con el nombre del artículo y su precio.
- **Botón:** Incluye un botón que, al hacer clic, añade el artículo a la orden.

### 3. `db.ts`

Este archivo simula una base de datos y exporta un array de objetos de artículos del menú. Cada artículo incluye:
- `id`: ID único del artículo.
- `name`: Nombre del artículo.
- `price`: Precio del artículo.

### 4. `useOrder.ts`

Este hook personalizado maneja el estado y la lógica de la orden:
- **Funciones de Orden:**
  - `addItem`: Agrega un artículo a la orden o incrementa su cantidad si ya existe en la orden.
  - `removeItem`: Elimina un artículo de la orden.
  - `placeOrder`: Vacía la orden y reinicia el valor de la propina.
- **Estados Derivados:**
  - `tip`: Almacena el porcentaje de propina seleccionado.
  - `order`: Mantiene la lista de artículos en la orden.

### 5. `OrderContents.tsx`

- **Props:** Recibe la lista de artículos de la orden (`order`) y la función `removeItem`.
- **Función principal:** Muestra una lista de los artículos seleccionados en la orden, incluyendo la cantidad, el precio total y un botón para eliminar cada artículo.

### 6. `TipPercentageForm.tsx`

- **Props:** Recibe `tip` y `setTip` para gestionar el porcentaje de propina.
- **Función principal:** Muestra una lista de opciones de propina (10%, 20%, 50%) para que el usuario seleccione una. Al cambiar la selección, el porcentaje de propina se actualiza en el estado.

### 7. `OrderTotals.tsx`

Este componente calcula y muestra los totales de la orden:
- **Props:** Recibe la lista de artículos en la orden (`order`), el porcentaje de propina (`tip`) y la función `placeOrder`.
- **Cálculos:** Utiliza `useMemo` para calcular el subtotal de la orden, la propina y el total a pagar, optimizando los cálculos.
- **Botón:** Incluye un botón para guardar la orden y resetear el estado de la orden y la propina.

### 8. `App.tsx`

Este es el componente principal de la aplicación:
- **Integración de Componentes:** Integra todos los componentes, incluyendo `Header`, `MenuItem`, `OrderContents`, `TipPercentageForm`, y `OrderTotals`.
- **Gestión de Estado:** Utiliza el hook `useOrder` para manejar el estado de la orden y la propina y pasa las funciones y valores derivados a los componentes correspondientes.


## Notas Adicionales

- **Estilización:** La aplicación utiliza TailwindCSS para estilizar todos los componentes de forma modular y personalizada.
- **Prevención de Duplicados en la Orden:** La función `addItem` evita duplicados en la orden incrementando la cantidad de un artículo existente en lugar de añadirlo nuevamente.
- **Propinas Personalizadas:** La aplicación permite que el usuario seleccione un porcentaje de propina entre opciones predefinidas.
