# ML SIMPLE API

🔎 Search and see the detail of your next product.

## 🚀 Getting Started

To run the project, just follow these steps:

1. Clone this repository.
2. Install dependencies `npm install`
3. Make sure you have the requested env vars (`.env` file). You can check the file `.env.example`
4. Run the development command and have fun! `npm run dev`

## 🔗 Endpoints

### Search Items

GET `/search`

#### Query Params

| Name  | Type   | Description              | Default | Example                  |
| ----- | ------ | ------------------------ | ------- | ------------------------ |
| q     | String | Query you want to search | ''      | q='Telefono inteligente' |
| limit | Number | Quantity of results      | 50      | limit=1                  |

#### Response

```js
{
  author: {
    name: String,
    lastname: String,
  },
  categories: [String],
  items: [
    {
      id: String,
      title: String,
      price: {
        currency: String,
        amount: Number,
        decimals: Number,
      },
      picture: String,
      condition: String,
      free_shipping: Boolean,
    }
  ],
}
```

### Get Item Info

GET `/items/:id`

#### Response

```js
{
  author: {
    name: String,
    lastname: String,
  },
  item: {
    id: String,
    title: String,
    price: {
      currency: String,
      amount: Number,
      decimals: Number,
    },
    picture: String,
    condition: String,
    free_shipping: Boolean,
    sold_quantity: Number,
    description: String
  }
}
```

## 🛠 Deployment
This project has CI with Heroku.

## 🖥 Technologies
* Express
* Husky

## 👉🏼 Methodologies
* Git Flow

## 🧾 License
The MIT License (MIT)