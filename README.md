<h2 align="center"> Pomodoro Timer </h2>

<p align="center">
  Pomodoro Timer - Projeto IGNITE ( RocketSeat ) 💻 
</p>

<br>

## 💻 Projeto
[https://user-images.githubusercontent.com/92122337/222561778-1aa9a0ba-9cd3-4e36-a046-fd31753cca07.mp4](https://github.com/Kayqueew/Pomodoro-Timer/assets/92122337/b96adba7-1c28-46e3-b472-96684786a7c0)



### É uma aplicação da técnica pomodoro, feita para gerenciar o tempo da tarefa.

## Funções:

### • Adicionar uma tarefa
### • Ajustar o cronômetro
### • Pausar e despausar o tempo da tarefa
### • Armazenar e Exibir histórico de tarefas realizados
### • Armazenamento local

</br>

##  Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- React
- TypeScript
- Styled-components
- React-router-dom
- React-hook-form
- Figma
- Vite
- date-fns
- zod

</br>

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
