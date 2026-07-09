# Projeto 1 - Layout E-commerce Avanti

Desafio técnico do processo seletivo de estágio da Avanti (Innovation Class).
A proposta era reproduzir com fidelidade o layout de e-commerce do Figma usando
HTML, CSS e JavaScript, com busca funcional e carrosséis interativos.

## Funcionalidades

- Busca: ao digitar e clicar na lupa (ou dar Enter), a mensagem
  `Você buscou por: 'assunto buscado'` aparece abaixo do cabeçalho
- Dois carrosséis de produtos com setas, paginação e arrasto (Swiper)
- Mega-menu nos departamentos e no "Todas as Categorias", com hover no
  desktop e clique no mobile
- Layout responsivo (desktop, tablet e celular)

## Tecnologias

- HTML5 e CSS3 (Flexbox, Grid e variáveis CSS)
- JavaScript puro
- [Swiper 11](https://swiperjs.com/) via CDN para os carrosséis
- Fontes Nunito Sans, Nunito e Heebo (Google Fonts)

## Como rodar

O projeto é estático, não precisa instalar nada. Basta clonar e abrir o
`index.html` no navegador:

```bash
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
```

Se preferir rodar num servidor local (recomendado), dá pra usar a extensão
Live Server do VS Code ou, pelo terminal:

```bash
python3 -m http.server 8000
# ou
npx serve .
```

e acessar `http://localhost:8000`.

Obs.: é preciso estar com internet, já que as fontes e o Swiper vêm de CDN.

## Estrutura

```
Projeto 1/
├── index.html      # estrutura da página
├── CSS/style.css   # estilos e responsividade
├── JS/script.js    # busca, carrosséis e mega-menus
└── assets/         # imagens e ícones exportados do Figma
```

---

Feito por **Warley Ferraz** para o processo seletivo da Avanti.
