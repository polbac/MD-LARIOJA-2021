# Sequelize Init

## Instalar Postgre

https://geekflare.com/es/postgresql-installation-guide/

## Librería

https://sequelize.org/

## sequelize-cli

https://www.npmjs.com/package/sequelize-cli

```
npm install --save-dev sequelize-cli
```

### Inicializar proyecto con sequelize

```
npm init // inicializar proyecto node
sequelize init  // inicializar carpetas de sequelize
npm install sequelize pg pg-hstore // instalar dependencias
```

### Configurar conexion

```
// live-coding/config/config.json
{
    "username": "",
    "password": "",
    "database": "",
    "host": "",
    "dialect": "",
    "port": 
  }
```

### Crear modelo

Este comando generara dentro de la carpate models user.js
```
sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string
```

### El modelo

```
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.FLOAT,
    email: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users', // nombre de la tabla
    timestamps: true, // con true generara las columnas createdAt y updatedAt
    paranoid: true, // con true generara la columna deletedAt para soft delete
    
  });
  return User;
};
```


### Importar el modelo en nuestro controlador

```
const db = require('./models)

app.get('/users', (req, res) => {
    const users = await db.Users.findAll() // findAll() devuelve todos los elementos de la tabla
    res.send(users)
})
```