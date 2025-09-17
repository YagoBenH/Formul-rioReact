Um projeto de exemplo em React + TypeScript com configuração completa de ESLint, Prettier e Husky para manter o código limpo e padronizado.

1- Instalar Eslint
npm init @eslint/config@latest

Configurar de acordo com o projeto, tipo de linguagens e frameworks.
   >Escolha o tipo de projeto (React + TS).

   >Defina ambiente (browser + node).

   >Selecione o formato de config 

2- Instalar Prettier
npm install --save-dev --save-exact prettier

Criar arquivo .prettierrc.json (js ou json)
  > aplicar as regras de preferencia para os codigos
   > {
       "singleQuote": true, // Todas as aspas "" dulpas irão formartar para ''.
       "semi": true // Sempre com ; no final 
     }


Pronto, foi criado Eslint e Prettier. 
3- Agora precisamos que os dois se comuniquem e aceitem as mudanças que o Prettier quer sem o Eslint reclamar

npm i -D eslint-config-prettier

npm install --save-dev eslint eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin

Criar arquivo .eslintrc.json
   Nesse arquivo será aplicado o codigo para que seu ESLint entenda TypeScript + React + Hooks, use boas práticas recomendadas, ignore conflitos com o Prettier e ainda permita código moderno do navegador e Node.
  > {
  "root": true,
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": ["react", "react-hooks", "@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}


4 - Rode os comandos:

npm run lint // Para verificar os erros 
npx prettier --write . // Para formatar todos o codigo automaticamente


5 - Opcional 

Crie um arquivo 
 > .prettierignore
Para ignorar arquivos que não quer formatar


Crie um arquivo 
  > .editorconfig
Para padronizar o VScode 
  > root = true
    [*]
    charset = utf-8
    indent_style = space
    indent_size = 4  // No TAB pule 4x o espaço


Depois das alterações rode:

npm run lint // Para verificar
npx prettier --write . // Para formatar todos o codigo automaticamente


6 - Instalar Husky 

   > npm install husky --save-dev
    
    Inicializar Husky 

   > npx husky-init (Vai criar a pasta .husky/pre-commit. Apague "npm test" e cole "npm run lint"  "npx prettier --check" ) 

  Obs: Só vai dar commit caso esses comandos não encontrar nenhum erro nos codigos

A partir daqui continue o commit para seu repositorio.
