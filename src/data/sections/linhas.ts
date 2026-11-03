/**
 * Dados da seção "Linhas de produto" (biblioteca B2, fase: oferta).
 *
 * 3 ou 4 cards, exatamente um deles escuro — normalmente o card de marcas, que
 * fecha o grid com peso visual. Cada linha tem 3 features de 2–4 palavras.
 *
 * Aqui são os 3 modelos da campanha, um por fonte de energia. Os cards são claros, e
 * `dark` fica só para o contrato da biblioteca. `features` é posicional: cobertura,
 * fonte de energia, recurso principal. Os dados da MI6+ vêm só da apresentação
 * corporativa da Safe Mine: o catálogo Atlas Copco de jul/2025 não traz esse modelo.
 *
 * Fotos de produto sobre fundo branco: MS4 e V7+ do catálogo Atlas Copco; MI6+ da
 * apresentação corporativa, onde só existe em 301×258 (ver pendências da ficha).
 */
import type { Photo } from '@data/types'

import linha1 from '@assets/linhas/linha-1.png'
import linha2 from '@assets/linhas/linha-2.png'
import linha3 from '@assets/linhas/linha-3.png'

export interface ProductLine {
  id: string
  tag: string
  title: string
  description: string
  photo: Photo
  features: readonly [string, string, string]
  /** Quando escolher esta torre: o critério da fonte de energia, do site da Safe Mine. */
  idealFor: string
  /** Exatamente um card escuro por grid. Informe sempre (true/false). */
  dark: boolean
}

export const productLines = {
  eyebrow: 'Linha HiLight',
  title: 'Torres HiLight para cada fonte de energia',
  /** Trecho do título em verde, na segunda linha. */
  titleHighlight: 'cada fonte de energia',
  text: 'Torres HiLight para obras e operações industriais. Conheça as opções solar, diesel e híbrida da Atlas Copco e consulte a indicada para a sua aplicação.',
  /** Rótulos das duas primeiras features de cada card. */
  specLabels: ['Cobertura', 'Energia'],
  /** Rótulo da linha "quando escolher" de cada card. */
  idealForLabel: 'Indicada para',
  help: {
    title: 'Não sabe qual torre escolher?',
    text: 'Informe a aplicação e a área a iluminar. A Safe Mine indica o modelo.',
    cta: 'Receber orientação',
  },
  note: 'Cobertura e autonomia dependem do modelo e da configuração.',
  items: [
    {
      id: 'hilight-ms4',
      tag: 'Solar',
      title: 'HiLight MS4',
      description: 'Bateria de lítio e 3 painéis de 430 Wp, sem consumo de combustível.',
      photo: { src: linha1, alt: 'Torre de iluminação solar HiLight MS4 Atlas Copco' },
      features: ['Até 4.000 m²', 'Solar', 'Bateria de lítio LiFePO₄'],
      idealFor: 'Locais sem combustível ou com restrição de emissões.',
      dark: false,
    },
    {
      id: 'hilight-v7-plus',
      tag: 'Diesel',
      title: 'HiLight V7+',
      description: 'Carenagem HardHat e chassi Spillage Free, que contém vazamentos de óleo e fluidos.',
      photo: { src: linha2, alt: 'Torre de iluminação a diesel HiLight V7+ Atlas Copco' },
      features: ['Até 7.000 m²', 'Diesel', 'Autonomia de até 105 h'],
      idealFor: 'Ambientes severos e operação contínua.',
      dark: false,
    },
    {
      id: 'hilight-mi6-plus',
      tag: 'Híbrida',
      title: 'HiLight MI6+',
      description: 'Combina bateria e motor a diesel, para maior flexibilidade e eficiência.',
      photo: { src: linha3, alt: 'Torre de iluminação híbrida HiLight MI6+ Atlas Copco' },
      features: ['Até 6.000 m²', 'Híbrida', 'Bateria e motor a diesel'],
      idealFor: 'Operações que alternam as fontes conforme a demanda.',
      dark: true,
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  text: string
  specLabels: readonly [string, string]
  idealForLabel: string
  help: { title: string; text: string; cta: string }
  note: string
  items:
    | readonly [ProductLine, ProductLine, ProductLine]
    | readonly [ProductLine, ProductLine, ProductLine, ProductLine]
}
