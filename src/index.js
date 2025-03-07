import colors from './colors.scss';
console.log(colors);

const app = document.getElementById('app');
app.innerHTML = `<h1>Hello, I found those colors: ${JSON.stringify(colors)}</h1>`;
