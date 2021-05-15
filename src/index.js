import App from './App'

const root = document.getElementById('root')

root.innerHTML = `
    <h1> learning webpack today </h1>
    ${App({name : 'Rishabh'})}
`;