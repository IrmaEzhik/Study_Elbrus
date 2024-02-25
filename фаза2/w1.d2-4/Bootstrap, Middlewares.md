```javascript
/* eslint-disable max-len */
// инициализация проекта
* npm init -y
* npm i express morgan
* npx create-gitignore node
* npx eslint --init
* npm i -D nodemon
* сразу настроим eslint, чтобы он не мешал нам работать:

  rules: {
    'react/function-component-definition': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
  },

* пишем скрипт для запуска ("dev": "nodemon app.js --ext js,jsx")

// создаём app.js
* импортим экспресс (const express = require('express');)
* импортим морган (const morgan = require('morgan');)
* создаём экземпляр сервера (const app = express();)
* подключаем морган (app.use(morgan('dev'));)
* прописываем порт (const PORT = 3000;)
* и поднимаем сервер (app.listen(PORT, () => {});)
* пишем ручку, проверяем что сервер работает

  app.get('/', (req, res) => {
    res.send('Привет!');
  });


// делаем отображение реакт-компонентов
* установим React(ssr) Babel
* npm i react react-dom @babel/core @babel/preset-env @babel/preset-react @babel/register
* создаём конфиг для бабеля (touch .babelrc)

  {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
  }


// работаем над views
* создаём папку views, в ней файлы Layout.jsx и Main.jsx
* напишем Layout

```jsx
  const React = require('react');

  const Layout = (props) => {
    const { children } = props;
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Document</title>
        </head>
        <body>
          {children}
        </body>
      </html>
    );
  };

  module.exports = Layout;
```

* напишем Main и добавим Layout

```jsx
  const React = require('react');

  const Layout = require('./Layout');

  const Main = () => (
    <Layout>
      <form action="/" method="POST">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
            <input name="title" type="text" className="form-control" id="exampleInputEmail1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Text</label>
            <input name="text" type="text" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </Layout>
  );

  module.exports = Main;
```


// делаем функцию для отображения
* создаём папку lib, в ней файл renderTemplate.js
* импортим бабель (require('@babel/register');)
* импортим реакт и реакт-дом
* const React = require('react');
* const ReactDOMServer = require('react-dom/server');
* пишем функцию:

```javascript
  const renderTemplate = (reactElement, properties, response) => {
    const reactEl = React.createElement(reactElement, properties);

    const html = ReactDOMServer.renderToStaticMarkup(reactEl);

    response.write('<!DOCTYPE html>');
    response.write(html);
    response.end();
  };
```

* пробуем отрендерить Main
* импортим бабель в app.js (require('@babel/register');)
* импортим renderTemplate и компонент Main в app.js

```javascript
  const renderTemplate = require('./lib/renderTemplate');
  const Main = require('./views/Main');
```

* вызываем renderTemplate в ручке (renderTemplate(Main, null, res);)

// подключим базу
* установим зависимости (npm i sequelize sequelize-cli pg pg-hstore)
* создадим конфиг (touch .sequelizerc)

```javascript
    const path = require('path');
    module.exports = {
      'config': path.resolve('db', 'config', 'database.json'),
      'models-path': path.resolve('db', 'models'),
      'seeders-path': path.resolve('db', 'seeders'),
      'migrations-path': path.resolve('db', 'migrations'),
    };
```

* создаём структуру базы в проекте (npx sequelize init)
* подправим конфиги под нашу базу
* npx sequelize db:create
* создадим модель (npx sequelize model:generate --name Todo --attributes title:string,text:string)
* накатим миграции (npx sequelize db:migrate)

// записываем данные в базу
* подключаем миддлвары для того, чтобы уметь работать с JSON

```javascript
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
```

* пишем ручку на POST, делаем её асинхронной (не забываем про try/catch!)
* деструктурируем нужные нам данные (const { title, text } = req.body;)
* пишем их в базу (await Todo.create({ title, text });)

// отображаем тудухи
* делаем ручку асинхронной, пишем try/catch
* вынимаем данные из базы в ручке (const todos = await Todo.findAll();)
* очищаем от мета-информации (const plainTodos = todos.map((item) => item.get({ plain: true }));)
* прокидываем тудухи в компонент (renderTemplate(Main, { plainTodos }, res);)
* маппим тудухи в компоненте

```jsx
  {plainTodos && plainTodos.map(({ id, title, text }) => (
    <div key={id}>
      <h2>{title}</h2>
      <h3>{text}</h3>
   

 </div>
  ))}
```

// Делаем красиво, подключим Bootstrap
* Идём в документацию, находим стили и скрипты, подключаем в Layout

```html
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"/>
```

// вынесем переменные в .env
* устанавливаем пакет (npm i dotenv)
* создаём файл .env
* переносим в файл порт
* реквайрим библиотеку в app.js (require('dotenv').config();)
* заменяем порт на process.env.PORT
* можем вынести подключение к БД, в конфиге пишем следующее:

```json
    "development": {
      "use_env_variable": "DATABASE"
    },
```

* а в .env помещаем строку подключения к БД со своими данными
* DATABASE = "postgres://user:pass@example.com:5432/dbname"

// Подключим пользовательские скрипты
* создаём в корне папку public
* импортим в app.js библиотеку path (const path = require('path');)
* пишем миддлвару, чтобы указать приложению путь до папки (app.use(express.static(path.join(__dirname, 'public/')));)
* создаём в паблике папку js
* создаём любой файл .js, пишем в нём скрипт
* подключаем скрипт на страницу, проверяем

// Поработаем с миддлварами
* напишем ручку на тестовую страницу
* напишем миддлвару, которая будет добавлять признак админа в app.locals

```javascript
    app.use((req, res, next) => {
      const admin = Boolean(Math.round(Math.random()));
      app.locals.isAdmin = admin;
      next();
    });
```

* теперь напишем миддлвару в отдельном файле, которая будет проверять этот признак

```javascript
    const isAdminCheck = (req, res, next) => {
      if (req.app.locals.isAdmin) {
        next();
      } else {
        res.redirect('/');
      }
    };

    module.exports = isAdminCheck;
```

* попробуем подключить миддлвару ко всем ручкам, потом к отдельной