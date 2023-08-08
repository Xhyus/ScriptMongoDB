# **Script MongoDB**

Este script se ha creado con el propósito de generar consultas a una base de datos MongoDB para pruebas. Uno de los objetivos de este script es observar el comportamiento de una consulta en una versión específica del controlador de MongoDB. Por esta razón, el código ha sido diseñado para ser compatible tanto con los controladores antiguos como con los modernos. Otro punto importante es que se ha desarrollado con la idea de utilizar scripts npm que pueden ejecutarse desde el package.json, lo que facilita las operaciones de manera sencilla.

Para ejecutar las operaciones en MongoDB, utiliza:

```shell
npm run <operacion>
```

Ejemplo:

```shell
npm run find
```

Para modificar cada uno de los parametros que se ingresaran a la operación de MongoDB, es necesario ir a la carpeta **methods/** y modificar el archivo **<operacion>.js**. En este archivo se encuentran los parametros que se ingresaran a la operación de MongoDB.

**Es importante que en el archivo _config.json_ se agreguen las credenciales de la base de datos**

### **Operaciones disponibles:**

1. find
2. findOne
3. insertOne
4. insertMany
5. updateOne
6. updateMany
7. deleteOne
8. deleteMany
9. aggregate
10. count
11. countDocuments
12. populate

La operación populate esta pensaba en ser utilizada para poblar una base de datos con datos de prueba utilizando **[FakerJS](https://www.npmjs.com/package/@faker-js/faker)**
