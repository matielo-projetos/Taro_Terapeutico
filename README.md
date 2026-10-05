# Tarô Terapêutico

Landing page responsiva de Maria Eduarda, taróloga brasileira, feita com HTML, CSS e JavaScript puro, sem frameworks ou dependências.

## Identidade e conteúdo

- Nome da marca: Maria Eduarda — Tarô Terapêutico.
- Conceito: “Desenvolvimento pessoal e direcionamento.”
- Público: brasileiros residentes em Portugal; atendimento online.
- Serviços: Tarô Terapêutico, Baralho Cigano e Rituais Energéticos.
- O Tarô é apresentado como ferramenta simbólica de autoconhecimento, reflexão, consciência, compreensão de padrões e direcionamento — não como previsão do futuro.
- A interface segue a referência editorial fornecida: papel creme e pêssego, tipografia serifada nos títulos, grafite e verde-terroso, detalhes artesanais e símbolos celestiais discretos.
- A referência completa está em `referencias/referencia-site.png`. A colagem original do site é uma ilustração vetorial própria, em `assets/images/hero-collage.svg`.
- Nenhum retrato, depoimento, dado profissional, contato ou perfil social foi inventado. A foto original da Maria não está disponível isoladamente em `assets/images/` e não foi recriada.

## Estrutura

- `index.html`: página semântica, conteúdo e metadados iniciais para SEO.
- `css/style.css`: identidade visual e layout mobile-first com adaptações para telas maiores.
- `js/config.js`: configuração de marca, público, serviços e telefone opcional do WhatsApp.
- `js/main.js`: ativa os botões de agendamento somente quando há um telefone válido configurado.
- `assets/images/hero-collage.svg`: ilustração editorial criada para a composição principal.
- `referencias/referencia-site.png`: referência visual fornecida.

## Configurar o WhatsApp

Preencha `whatsappPhone` em `js/config.js` com 8 a 15 dígitos, incluindo o código do país, sem espaços ou sinais. Enquanto o valor permanecer vazio ou inválido, os botões de agendamento ficam desativados e nenhum telefone é presumido.

## Visualizar localmente

Abra `index.html` diretamente em um navegador. A página não requer instalação de pacotes nem servidor de desenvolvimento.
