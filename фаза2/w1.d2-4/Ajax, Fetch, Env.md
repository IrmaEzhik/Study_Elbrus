**1. Делаем отображение карточки сразу после сабмита:**

**На фронте:**
- Создаём в `public/js` новый скрипт
- Подключаем скрипт на страницу (`<script defer src=“js/название.js” />`)
- Получаем ссылку на форму (`document.querySelector`) и сохраняем её в переменную
- Вешаем на форму обработчик событий по submit (`addEventListener`)
- Запрещаем стандартное поведение формы (`e.preventDefault`)
- Создаём объект с данными из инпутов (`const data = { title: e.target.title.value, text: e.target.text.value };`).
- Делаем функцию асинхронной (`try/catch`, `async/await`)
- Настраиваем fetch

```javascript
const response = await fetch('/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

- Получаем от сервера ответ (тот же fetch) и парсим его (`const result = await response.json();`)

**На бэкенде:**
- Отправляем результат обратно на клиент (`res.json(результат)`)

**Обновляем DOM-дерево:**
**На фронте:**
- Создаём новый div (`const card = document.createElement(‘div’);`)
- В JS нет className, поэтому мы должны добавить на созданный div аттрибут class как на нашей карточке (`card.classList.add(‘название класса’)`).
- Вставляем HTML карточки в созданный div (`card.innerHTML`) в бэктиках ``
- Заменяем отсутствующие переменные на те, что получили из нашего fetch
- Находим контейнер, в который будем вставлять нашу новую карточку (`const todoList = document.querySelector(’.todosContainer’);`)
- Вставляем: `todoList.appendChild(card)`
- Очищаем наши инпуты

```javascript
e.target.title.value = null;
e.target.text.value = null;
```

**2. Делаем удаление:**

**На фронте:**
- Добавляем в карточку кнопку, не забываем сделать то же самое для вёрстки, которую мы инжектим при помощи JS
- Добавляем на кнопку айдишник из базы, не забываем сделать то же для вёрстки в скрипте
- Пишем новый слушатель событий, уже на клик по контейнеру
- Определяем, что клик был внутри контейнера по конкретному элементу, для этого смотрим на его тэг (`if(e.target.tagName === “BUTTON”)`)
- Внутри if-а - берём из атрибута кнопки айдишник

```javascript
const id = e.target.id;
```

- Пишем fetch

```javascript
const response = await fetch('/', {
  method: 'DELETE',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ id }),
});
```

**На бэке:**
- Пишем ручку, которая будет принимать наш fetch () (помним про async/await)
- Вытаскиваем id из `req.body`
- Реализуем удаление записи из базы (`await Todo.destroy({ where: { id } });`)
- Отдаём на фронт какой-то ответ, например `res.sendStatus(200);`

**На фронте:**
- Пишем удаление карточки из контейнера (`контейнер.removeChild(e.target.parentNode.parentNode);`), оборачивая его в проверку статуса (`if(response.status === 200)`)

**…PROFIT Вы восхитительны**