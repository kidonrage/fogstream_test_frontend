## Проблемы, не решенные из-за ограничений API:
- [ ] Приложение по итогу может загрузить не все 100 постов. Например, когда в приложении на странице отображается 15 постов. На 6 загрузке постов становится 90, а в загрузку 7-й страницы API отвечает ошибкой (а не отправляет, например, 10 оставшихся до порога новостей). Я не успел найти решение для обхода этого недостатка и предотвращаю загрузку таких страниц с помощью простой проверки
- [ ] Сейчас детальная страница поста открывается как бы искусственно. API не предоставляет возможности собирать данные по отдельно взятому посту и отправляет все новости без id. Именно поэтому при помещении каждой новости в хранилище я вставляю id новости сам и потом, когда пользователь переходит по ссылке, указывающей на определённую новость (ссылки формируются как раз с помощью этих id), ищу в хранилище соответствующий пост. Также, иногда API отправляет совсем уж невнятный контент для новости

## Проблемы, не решенные из-за ограничения во времени:
- [ ] Иногда возникают проблемы с загрузкой картинок (особенно если это gif)
- [ ] Для удобства навигации детальный просмотр новости лучше сделать с возможностью вернуться в то место списка всех новостей, откуда ты перешел на эту страницу 
- [ ] Возможно, нужно будет создать разные хранилища - для настроек приложения и для постов
- [ ] Избавиться от important’ов в стилях тем
- [ ] Сохранение ВСЕХ настроек в local storage. Сейчас сохраняются только настройки темы
- [ ] Приложение сейчас в некоторых местах на английском, а в некоторых - на русском языке . Это случилось только из-за того, что мне на определенном языке удобнее было в некоторых моментах писать



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
