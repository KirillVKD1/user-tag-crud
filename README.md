Тестовое задание:

Необходимо реализовать небольшой web server
Разместить код надо в публичном репозитории GitHub/GitLab

Стек: strict typescript, postgres.js
Фреймворк на выбор: hono/elysia/fastify/express/nest
Таблицы в базе данных: users, items, purchases, схему необходимо добавить в репозиторий

endpoint 1:
Аутентификация пользователя, включающая в себя пароль, регистрация не нужна

endpoint 2:
Смена пароля пользователем

endpoint 3:
Нужно отобразить массив объектов с двумя минимальными ценами на предмет (одна цена — tradable, другая — нет)
В отдачу предметов необходимо добавить кеширование через redis
Получить данные можно через API: https://docs.skinport.com/#items
Параметры app_id и currency - default

endpoint 4:
Нужно реализовать покупку предмета из таблицы items, у пользователя должен быть баланс
В ответе должен быть обновленный баланс пользователя

npm run start:dev

docker-compose up

make start

make stop



tradable = 1
{
  "market_hash_name": "10 Year Birthday Sticker Capsule",
  "currency": "EUR",
  "suggested_price": 0.9,
  "item_page": "https://skinport.com/item/10-year-birthday-sticker-capsule",
  "market_page": "https://skinport.com/market?item=10%20Year%20Birthday%20Sticker%20Capsule&cat=Container",
  "min_price": 0.94,
  "max_price": 4.05,
  "mean_price": 1.46,
  "median_price": 1.18,
  "quantity": 295,
  "created_at": 1661324437,
  "updated_at": 1730135879
},


tradable = 0
{
  "market_hash_name": "10 Year Birthday Sticker Capsule",
  "currency": "EUR",
  "suggested_price": 0.9,
  "item_page": "https://skinport.com/item/10-year-birthday-sticker-capsule",
  "market_page": "https://skinport.com/market?item=10%20Year%20Birthday%20Sticker%20Capsule&cat=Container",
  "min_price": 0.92,
  "max_price": 4.05,
  "mean_price": 1.43,
  "median_price": 1.18,
  "quantity": 313,
  "created_at": 1661324437,
  "updated_at": 1730135944
}, 

 
all
{
  "market_hash_name": "10 Year Birthday Sticker Capsule",
  "currency": "EUR",
  "suggested_price": 0.9,
  "item_page": "https://skinport.com/item/10-year-birthday-sticker-capsule",
  "market_page": "https://skinport.com/market?item=10%20Year%20Birthday%20Sticker%20Capsule&cat=Container",
  "min_price": 0.92,
  "max_price": 4.05,
  "mean_price": 1.43,
  "median_price": 1.18,
  "quantity": 313,
  "created_at": 1661324437,
  "updated_at": 1730136006
},


// item
id pk

//  
item_id pk
is_tradable pk
quantity

