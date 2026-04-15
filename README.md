# Mini Snippet Vault

Невеликий fullstack сервіс для збереження сніпетів (посилання, нотатки, команди) з можливістю пошуку та фільтрації.

## Stack

- Next.js (App Router)
- NestJS
- MongoDB (Mongoose)
- TypeScript

## Функціонал

- створення сніпетів  
- перегляд списку  
- пошук по title/content  
- фільтр по тегу  
- перегляд детальної сторінки  
- редагування  
- видалення  


## Запуск локально

### Backend

```bash
cd backend
npm install
npm run start:dev
````

.env:

```
MONGO_URI=your_mongodb_connection_string
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

.env.local:

```
NEXT_PUBLIC_API_URL=http://127.0.0.1:3001
```

## API

* POST /snippets
* GET /snippets?q=&tag=
* GET /snippets/:id
* PATCH /snippets/:id
* DELETE /snippets/:id

## Production

### Backend

```bash
npm run build
npm run start:prod
```

### Frontend

```bash
npm run build
npm start
```

## Примітки

* Реалізовано валідацію DTO та обробку помилок (400 / 404)
* Пошук через query параметр `q`
* Фільтрація по тегу через `tag`

## Що не встиг реалізувати

* UI для пагінації (планувалось через page/limit)
