/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Frase de autoridade e CTA ao lado de uma foto, e os 5 diferenciais num painel navy.
 * São 5 exatos: o painel é `lg:grid-cols-5`. Sem a pessoa recortada do padrão.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'
import { site } from '@data/site'

import cenario from '@assets/diferenciais/cenario.jpg'

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: `Diferenciais ${site.brandShort}`,
  /** Cada item é uma linha do H2 (quebra forçada); a segunda sai em verde. 3–6 palavras no total. */
  titleLines: ['Operação noturna', 'exige visibilidade.'],
  text: `A ${site.brandShort} entende a aplicação antes de indicar a torre, avaliando cobertura, autonomia, fonte de energia e condições do terreno.`,
  /** Linha de apoio sob o botão. */
  help: 'Informe o que souber. Nós ajudamos na escolha da torre.',
  scene: {
    src: cenario,
    alt: 'Vista aérea noturna de uma mineração iluminada por torres Atlas Copco',
  },
  reasons: [
    {
      icon: 'badge-check',
      title: 'Distribuidor autorizado',
      description: 'Conectamos sua operação à linha HiLight Atlas Copco.',
    },
    {
      icon: 'user',
      title: 'Atendimento consultivo',
      description: 'Entendimento da necessidade antes da indicação.',
    },
    {
      icon: 'clock',
      title: 'Resposta rápida',
      description: 'Resposta rápida aos desafios e demandas da operação.',
    },
    {
      icon: 'layers',
      title: 'Experiência de mercado',
      description: 'Conhecimento técnico e relacionamentos sólidos no setor.',
    },
    {
      icon: 'sun',
      title: 'Solar, diesel ou híbrida',
      description: 'Escolha conforme a necessidade da aplicação.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly string[]
  text: string
  help: string
  scene: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
