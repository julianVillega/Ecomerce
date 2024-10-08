# Como Ejecutar Este Proyecto
Este proyecto fue creado utilizando **vite**.
Para Ejecutarlo se siga los pasos:

1. Clone este repositorio utilizando su url.

2. Abra una terminal en el directorio en el que clono el 
repositorio.

3. Ejecute el comando "npm i" para instalar todas las dependencias necesarias.

4. Ejecute el comando "npm run dev" para levantar el servidor de desarrollo.

5. Ingrese a la url retornado por el comando "npm run dev"  

<br>


# Descripción general:
**Tienda Tuya** es un Ecomerce en el cual encontraras productos de las siguientes categorías:

* ### Tecnologia
* ### Electrodomesticos
* ### Herramientas
* ### Construcción
* ### Moda

## Implementación:
* ### Front End
    * **Tienda Tuya** esta implementada como una **SPA** (Single Page Application) utilizando el framework **React Js**.

        A diferencia de una página web tradicional, una **SPA** carga el contenido que compone la página a medida en que este se hace necesario. Esto permite que el usuario navegue por las distintas partes del sitio, sin la necesidad de recargarlo por completo.

        De este modo, se logra una mejor experiencia de usuario.
* ### Back End
    * Si bien **Tienda Tuya** no cuenta con un back end, esta aplicación, utiliza dos servicios provistos por *Firebase*, siendo estos:
        * **FireStore**: Para almacenar los datos de los distintos productos y los pedidos de los usuarios.
        * **FireStorage**: Para almacenar las fotos de los productos.

### Navegabilidad:

**Tienda Tuya** cuenta con las siguientes rutas:
* "/" : Esta ruta muestra el listado de todos los productos que se ofrecen en el ecomerce

* "/category/\[categoryId\]": Esta ruta muestra el listado de productos que pertenecen a la categoria indicada por el "*parametro de url*" **categoryId**

* "/detail/productId": Esta ruta muestra la vista detallada del producto identificado por el "*parametro de url*" **productId**. En esta vista el usuario puede agregar el producto a su carrito

* "/chekout": Esta ruta muestra el formulario que debe completar el usuario para finalizar su compra, asi como en resumen de la misma.

Para navegar entre las distintas partes del sitio el usuario tiene a su disposición un **NavBar** que esta disponible durante toda la experiencia de usuario.

Este **NavBar** cuenta con links a las distintas categorías de productos, además de un botón que permite visualizar y manipular el contenido del carrito.


## Proceso de checkout:

Para realizar el chekout, una vez que haya agregado al menos un producto al carrito, el usuario debe hacer click sobre el botón del carrito en el navbar. Luego debe hacer click en finalizar compra. Esto le redigirá a la página de checkout.

Una vez en la página de chekout, el usuario debera completar sus datos personales, y hacer click en el botón **finalizar pedido**. 

Finalmente, se le informa al cliente su número de orden.

## Otras tecnologias:
además de **React Js** y los servicios de **Firebase**, fueron utilizadas las siguientes tecnologías:

* **React Bootstrap**: Para darle estilos a los componentes
* **React Router DOM**: Para implementar la navegabilidad
* **Font Awesome**: Para agregar iconos.

Todas estas tecnologías fueron instaladas através del gestor de paquetes de node.js, **npm**

