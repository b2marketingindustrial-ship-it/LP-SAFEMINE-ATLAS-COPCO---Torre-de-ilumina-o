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
  titleLines: ['Operações em movimento,', 'com segurança.'],
  /** Trajetória e posicionamento da página "Quem somos" de safeminesolucoes.com.br. */
  text: `Fundada em 2017 em Belo Horizonte, a ${site.brandShort} aproxima mineração e indústria das tecnologias que mantêm a operação segura, produtiva e sem paradas. Entendemos a aplicação antes de indicar a torre.`,
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
      icon: 'layers',
      title: 'Mais de 20 anos de experiência',
      description: 'Profissionais com mais de duas décadas em mineração e indústria.',
    },
    {
      icon: 'user',
      title: 'Atendimento consultivo',
      description: 'Avaliamos cobertura, autonomia, energia e terreno antes de indicar.',
    },
    {
      icon: 'shield',
      title: 'Segurança e continuidade',
      description: 'Visibilidade para operar à noite com segurança e menos paradas.',
    },
    {
      icon: 'leaf',
      title: 'Menos emissões',
      description: 'Opções solar e híbrida para reduzir consumo, emissões e custo.',
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
