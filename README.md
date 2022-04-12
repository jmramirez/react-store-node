# CoreStoreNET

The idea for this application is to create an e-commerce application, using an Node with Express API and React.js Single-Page Application (SPA) frontend.

## Backend

The web API is developed defining all the elements including controllers and routes in different files, using and object-oriented approach.

**`Data access:`** necessary to store information in a database, in this case Prisma is used as ORM, which made simple to define all the models as well as the relation between them.

## Frontend

Frontend consists of a single page application made using react.js, sass for styling, and redux to manage state of the shopping cart as well as authentication token.

## Stripe

The application uses Stripe gateway in order to allow users to complete their purchases and process their payment information.

## Checkout Process

To initiate the checkout process, the user needs to be registered in the system, a demo account has been created for testing purposes.

Once the user has logged in, and filled the information required, name, address, country, postal code, the payment details for the **`Stripe API`** to work, are **`any name`**, and **`4242 4242 4242 4242`** as credit card number, a future date, and any CVC and ZIP code.

### Link to App: [https://corestorenet.com/](https://corestorenet.com/) 
