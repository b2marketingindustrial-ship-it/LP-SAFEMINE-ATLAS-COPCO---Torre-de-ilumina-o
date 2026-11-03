# Registro da LP — o que a ficha decidiu e o que a execução fez

> Existe para que, meses depois e sem a conversa, se saiba de onde veio cada coisa — e porque `docs/briefing-cliente/` fica fora do git.

## Origem

| Campo                     | Valor                                                                                                                                                         |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ficha de execução         | `docs/FICHA-LP.md`                                                                                                                                            |
| Data da ficha             | 2026-10-30                                                                                                                                                    |
| Versão do padrão          | 2.8.0                                                                                                                                                         |
| Estrutura                 | LP de compressores portáteis, por pedido do usuário em 30/10/2026, a partir da cópia já adaptada na LP de geradores (`LP-ATLAS-COPCO---Geradores-de-energia`) |
| Material bruto do cliente | `docs/briefing-cliente/briefing-safe-mine-torres-hilight.md` (fora do git) e o site safeminesolucoes.com.br                                                   |
| Campanha                  | `ATC_PESQ_TORRES_B2B`                                                                                                                                         |

**Cliente e fabricante.** A Safe Mine Soluções anuncia como distribuidor autorizado Atlas Copco, em Minas Gerais. "Autorizado" saiu da lista de claims proibidos por decisão do usuário registrada no briefing.

**Pedido do usuário.** A mensagem de 30/10/2026 dizia "geradores de energia", mas o texto colado, o briefing, a pasta e o repositório indicados são de torres de iluminação, e a LP de geradores já estava publicada. A LP foi feita para torres.

## Campanha

| Campo                   | Valor                                                                                                                                                       |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Palavra-chave principal | `torre de iluminação atlas copco` — no H1 e no title                                                                                                        |
| Área atendida           | Minas Gerais — selo e texto da cotação, hero e meta description                                                                                             |
| Negativas de oferta     | torre residencial, luminária de jardim, poste decorativo, abajur, lâmpada led avulsa, festa infantil; cruzadas: gerador de energia, bomba, compressor de ar |
| Claims proibidos        | locação em qualquer forma, manutenção como serviço próprio, fabricante ou filial, canal oficial, cobertura nacional                                         |

"Locadoras" não está na lista: é público comprador, e o briefing permite o termo. A MS4 não é chamada de gerador, como a Atlas Copco faz, porque "gerador de energia" é negativa desta campanha.

| Família           | Bloco que responde | Status                                                         |
| ----------------- | ------------------ | -------------------------------------------------------------- |
| produto-categoria | `linhas`           | coberta                                                        |
| marca             | `linhas`           | coberta                                                        |
| aplicacao         | `aplicacoes`       | coberta                                                        |
| cotacao           | `identificar`      | parcial: sem preço, prazo ou condições, só o pedido de cotação |

## Composição

`linhas` · `identificar` · `aplicacoes` · `diferenciais`, iguais às da LP de compressores. A biblioteca do starter não está nesta cópia: `npm run ficha` e, portanto, `npm run verify` não rodam aqui. A verificação usada é a do CI: `check:lp`, lint, prettier e build. `lp.manifest.json` foi ajustado à mão, só nos assets de `linhas`.

## Desvios herdados da LP de compressores

Header, Hero e os layouts de `linhas`, `identificar`, `aplicacoes`, `diferenciais` e Cotação seguem o mockup aprovado em 29/10/2026 para a LP de compressores. `scripts/check-lp.mjs` confere essas assinaturas. `npm run compose` sobrescreveria as seções com as da biblioteca: não rode sem guardá-las.

## Desvio desta LP

- `Hero.astro` e `ProductLines.astro`: 3 colunas em vez de 4, porque são 3 modelos.
- `ProductLines.astro`: fotos com `object-contain` e `mix-blend-multiply`, como em compressores (a LP de geradores usava `object-cover`). Rótulos dos dados: Cobertura e Energia. O ícone do recurso virou `zap`.
- `icons.ts`: ícone `sun`, para a MS4 e o diferencial de fonte de energia.
- `src/assets/linhas/linha-4.png` saiu; a especificação foi atualizada no manifesto.

## Dados usados

| Modelo | Cobertura    | Outros dados                                                            | Fonte                                                                                                               |
| ------ | ------------ | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| MS4    | até 4.000 m² | LiFePO₄; 3 painéis de 430 Wp                                            | cobertura do site da Safe Mine (o catálogo Atlas Copco dá 3.846 m² a 20 lux de média); demais dados do catálogo MS4 |
| V7+    | até 7.000 m² | até 105 h; 4 LEDs SMD de 350 W; carenagem HardHat; chassi Spillage Free | catálogo Atlas Copco, p. 8; HardHat e Spillage Free do site da Safe Mine                                            |
| MI6+   | até 6.000 m² | bateria e motor a diesel                                                | só a apresentação corporativa da Safe Mine                                                                          |

A autonomia da MS4 não aparece: 11 h a 100% e até 43 h dimerizada a 25%, e o planejamento pede para não usar 43 h sem a condição. O catálogo Atlas Copco de jul/2025 não traz a MI6+.

O "Indicada para" de cada card segue a seção "Uma torre para cada necessidade" da página de torres do site da Safe Mine (decisão do usuário em 03/11/2026).

## Assets

| Arquivo                  | Origem                                                                                    |
| ------------------------ | ----------------------------------------------------------------------------------------- |
| `heroBg.png`             | `torres-de-iluminacao-20260812162638`, site da Safe Mine                                  |
| `linhas/linha-1`         | catálogo Atlas Copco, p. 4 (MS4)                                                          |
| `linhas/linha-2`         | catálogo Atlas Copco, p. 8, imagem da direita, 4×350 W (V7+)                              |
| `linhas/linha-3`         | apresentação corporativa Safe Mine, p. 8 (MI6+), 301×258 ampliada e sem a moldura amarela |
| `aplicacoes/aplicacao-1` | `imagens-torres-iluminacao-site-safe-mine3`, site da Safe Mine                            |
| `aplicacoes/aplicacao-2` | `imagens-torres-iluminacao-site-safe-mine2`, site da Safe Mine                            |
| `aplicacoes/aplicacao-3` | `torres-de-iluminacao-20260812162614`, site da Safe Mine                                  |
| `aplicacoes/aplicacao-4` | apresentação HiLight MS4, Atlas Copco, p. 1                                               |
| `diferenciais/cenario`   | `torres-de-iluminacao-20260812170915`, site da Safe Mine                                  |

A foto do card de obra mostra a torre solar em terreno aberto com guindaste ao fundo; a do card de eventos é uma foto de catálogo. Não há foto real nesses dois contextos.

## Estado da entrega

Pendências em `docs/FICHA-LP.md`. Na Vercel não há o plugin de atendimento: o formulário aparece como shortcode em texto e só o botão flutuante de WhatsApp funciona. Formulário e demais botões dependem da publicação no WordPress, pela branch `wp-build`, como nas LPs de compressores e geradores.

## Desvios do padrão

- **Header:** desvio pedido pelo usuário em 03/11/2026: mesma estrutura do header da LP SEIVE Lubrificação centralizada. Barra branca sticky com a logo da Safe Mine dentro dela (sem a placa pendurada), filete da marca no topo, tagline central com selo, CTA e sombra só ao rolar. Sem menu (regra 1). Logos Safe Mine e Atlas Copco lado a lado, nessa ordem, separadas por um filete (pedido do usuário, 03/11/2026); a da Atlas Copco é a do Wikimedia Commons (`Atlas-Copco-Logo.svg`, PNG de 960 px, em `src/assets/atlas-copco-logo.png`), a trocar pela oficial se chegar. Assinatura A8 do `check-lp.mjs` repinada.
- **Hero:** sem desvio. O Hero da primeira versão (fundo claro, sem a coluna do chat) foi substituído em 01/11/2026 pelo da estrutura fixa 4.1.2: grid `1fr · 270px · 300px`, coluna 2 vazia, slot `shortcode` de 300px, foto de 1700px ancorada na borda do container. A faixa de prioridades e o cartão de ajuda do hero saíram; a nota ficou sob os botões. A foto foi reenquadrada em 1981×900, com o grupo em ~70% da largura.
- **Aplicações:** desvio pedido pelo usuário em 03/11/2026: estrutura da seção "Segmentos atendidos" das LPs SEIVE, nas cores da Safe Mine. Faixa navy (`navy-premium`) de largura total com cantos arredondados, cabeçalho centrado, carrossel de cards brancos com ícone, chamada e seta, e a faixa branca "Sua aplicação não está aqui?". O manifesto segue com `carriesNavy: false`, como na LP SEIVE.
- **Perguntas:** seção `perguntas` (componente `Faq.astro` da LP SEIVE Supressão de incêndio) entre aplicações e diferenciais, pedido do usuário em 03/11/2026. Fundo cinza, ritmo `flow`; `index.astro` e `lp.manifest.json` estendidos à mão. As 6 perguntas usam só dados já publicados na LP; falta a lista real do comercial (prazo, garantia).
- **Diferenciais:** desvio pedido pelo usuário em 03/11/2026: layout "Por que a Safe Mine" das LPs SEIVE, nas cores da Safe Mine. Bloco navy em largura total que sobe por baixo da base arredondada do FAQ (`--lp-round`, global.css), título com a última linha em verde, texto, 3 números (2017, +20 anos da equipe, 3 fontes) e CTA; foto à direita; 5 cards brancos sobrepostos à base. Sem selos de certificação.
- **Cotação:** como na LP SEIVE Lubrificação: só o espaço do shortcode, sem card nem nota de LGPD. Ritmo `pt-8 pb-20` mantido.
- **Linhas:** a faixa "Não sabe qual torre escolher?" saiu em 03/11/2026 por repetir o painel `identificar` logo abaixo, como na LP SEIVE.
- **Recursos HiLight:** seção própria (`FieldFeatures.astro`, `recursos.ts`, fase prova) acima do FAQ, pedido do usuário em 03/11/2026. 6 recursos do site oficial da Atlas Copco que a página não citava, cada um com o modelo ou a linha a que se aplica. Fora da biblioteca: `npm run compose` a removeria.
- **Números divergentes:** o site da Atlas Copco (03/11/2026) traz V7+ com 7.360 m² e até 142 h, MS4 com 4.340 m² e de 11 a 85 h, e o nome "HiLight MI+ 6". A LP mantém 7.000 m², 105 h, 4.000 m² e MI6+ por decisão do usuário; pendência na ficha.
- **Rótulos:** `Eyebrow.astro` da LP SEIVE (traço verde de 36px) em toda a página, no lugar do quadrado.
- **Clientes:** os logos de clientes SEIVE da LP de lubrificação não entram: são clientes da fabricante SEIVE, não de torres nem comprovadamente da Safe Mine (decisão do usuário, 03/11/2026).
- **Paleta:** os véus do hero usam o azul `#0a1d4d` da marca no lugar do navy `#001830` do template. O token `accent-orange-light` (`#7ba249`) existe só para o destaque do H1 sobre o fundo escuro.

## Header restaurado ao padrão (01/11/2026)

A pedido do usuário, o Header deixou a barra branca flutuante do mockup de 29/10/2026 e voltou à estrutura fixa 4.1.1, como nas demais LPs da B2: barra navy `sticky`, a placa branca traz o logo da Safe Mine, tagline central "Torres de iluminação" e CTA laranja em caixa-alta ("Cotação" no celular). As âncoras do topo saíram. O Hero voltou ao padding do padrão (`py-20 lg:py-24`), já que o header não é mais sobreposto. A assinatura A8 do Header em `scripts/check-lp.mjs` voltou à da estrutura fixa.
