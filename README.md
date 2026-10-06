# Tarô Terapêutico

Landing page responsiva de Maria Eduarda, taróloga brasileira, feita com HTML, CSS e JavaScript puro, sem frameworks ou dependências.

## Identidade e conteúdo

- Seções públicas: Hero, O Tarô Terapêutico, Quem sou eu? e Um método de integração interior.
- A lista pública de Atendimentos, o CTA final e o rodapé foram removidos para acompanhar a estrutura do mockup; a configuração dos serviços permanece em `js/config.js`.
- Nome da marca: Maria Eduarda — Tarô Terapêutico.
- Conceito: “Desenvolvimento pessoal e direcionamento.”
- Público: brasileiros residentes em Portugal; atendimento online.
- Serviços: Tarô Terapêutico, Baralho Cigano e Rituais Energéticos.
- O Tarô é apresentado como ferramenta simbólica de autoconhecimento, reflexão, consciência, compreensão de padrões e direcionamento — não como previsão do futuro.
- A interface reproduz a composição editorial de `referencias/referencia-site.png`, com recortes retirados diretamente da própria referência para manter a colagem fotográfica, as cartas e os elementos botânicos originais.
- Os recortes utilizados são `assets/images/reference-hero-collage.png`, `assets/images/reference-tarot-collage.png`, `assets/images/reference-about-collage.png` e `assets/images/reference-method-collage.png`. Eles são derivados do mockup, não os arquivos-fonte originais.
- A fotografia original de uma leitura de Tarô do hero e os arquivos separados das cartas, texturas e elementos botânicos ainda precisam ser fornecidos: esses itens aparecem incorporados somente em `referencias/referencia-site.png`. Os recortes permitem reproduzir visualmente a composição da referência, mas não substituem os originais em resolução/fonte independentes. Não foi criada nem presumida uma fotografia substituta.
- Nenhum retrato, depoimento, dado profissional, contato ou perfil social foi inventado.

## Estrutura

- `index.html`: página semântica, conteúdo e metadados iniciais para SEO.
- `css/style.css`: identidade visual e layout mobile-first com adaptações para telas maiores.
- `js/config.js`: configuração de marca, público, serviços, telefone e mensagens do WhatsApp.
- `js/main.js`: monta os links de WhatsApp com o telefone e a mensagem definidos na configuração.
- `assets/images/hero-collage.svg`: ilustração editorial anterior, mantida no projeto; o hero atual utiliza o recorte fotográfico da referência.
- `assets/images/reference-*.png`: recortes das composições fotográficas/editoriais incorporadas ao mockup.
- `referencias/referencia-site.png`: referência visual fornecida.

## Configurar o WhatsApp

Preencha `whatsappPhone` em `js/config.js` com 8 a 15 dígitos, incluindo o código do país, sem espaços ou sinais. Enquanto o valor permanecer vazio ou inválido, os botões de agendamento ficam desativados e nenhum telefone é presumido.

## Visualizar localmente

Abra `index.html` diretamente em um navegador. A página não requer instalação de pacotes nem servidor de desenvolvimento.
