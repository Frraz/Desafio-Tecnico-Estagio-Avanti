# Projeto 2 - Busca de Perfil no GitHub

Desafio técnico do processo seletivo de estágio da Avanti (Innovation Class).
Aplicação React que busca perfis do GitHub pelo nome de usuário e mostra
nome, foto e bio, seguindo o layout proposto no Figma.

## Funcionalidades

- Busca de usuário consumindo a API pública do GitHub (`api.github.com/users/:usuario`)
- Exibição de nome, foto de perfil e bio no cartão de resultado
- Mensagem de erro quando o perfil não é encontrado
- Indicador de carregamento durante a requisição
- Alternância de tema (variação de fundo presente no Figma)

## Tecnologias

- React 19 + Vite
- CSS
- Fonte Nunito Sans (Google Fonts)

## Como rodar

Precisa do Node.js 20 ou superior.

```bash
git clone https://github.com/Frraz/Desafio-Tecnico-Estagio-Avanti.git
cd "Desafio-Tecnico-Estagio-Avanti/Projeto 2"
npm install
npm run dev
```

O Vite mostra a URL local no terminal (normalmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
├── App.jsx                    # estado da busca e composição da tela
├── App.css                    # estilos (medidas do Figma)
├── components/
│   ├── Header.jsx             # logo + título "Perfil GitHub"
│   ├── SearchBar.jsx          # input e botão de busca
│   └── ProfileCard.jsx        # cartão com foto, nome e bio
└── main.jsx
```

---

Feito por **Warley Ferraz** para o processo seletivo da Avanti.
