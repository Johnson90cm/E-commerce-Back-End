## Object-Relational Mapping (ORM) Challenge: E-commerce Back End

### Description

*Build the back end for an e-commerce site. Take a working Express.js API and configure it to use Sequelize to interact with a MySQL database.*


### App Demo


Link: https://watch.screencastify.com/v/3juALpm7u5HiZ3HO8ak0


### Associations

*You'll need to execute association methods on your Sequelize models to create the following relationships between them:*

- Product belongs to Category, as a category can have multiple products but a product can only belong to one category.

- Category has many Product models.

- Product belongs to many Tag models. Using the ProductTag through model, allow products to have multiple tags and tags to have many products.

- Tag belongs to many Product models.

### Instructions on how to run the app

- Add a .env file to the root of the app with the following details

```text
DB_NAME='ecommerce_db'
DB_USER='root'
DB_PW='<yourpasswordhere>'
```