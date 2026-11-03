/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Layout das LPs SEIVE (03/11/2026, pedido do usuário), nas cores da Safe Mine: bloco navy
 * em largura total com a frase de autoridade (última linha em verde), texto, 3 números e
 * CTA; foto à direita; os 5 diferenciais em cards brancos sobrepostos à base do bloco.
 * São 5 exatos: o grid é `xl:grid-cols-5`.
 *
 * Texto e números da página "Quem somos" de safeminesolucoes.com.br: fundação em 2017 em
 * Belo Horizonte e mais de duas décadas de experiência da equipe (não da empresa).
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'
import { site } from '@data/site'

import cenario from '@assets/diferenciais/cenario.jpg'

export interface Metric {
  value: string
  label: string
}

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
  scene: {
    src: cenario,
    alt: 'Vista aérea noturna de uma mineração iluminada por torres Atlas Copco',
  },
  /** 3 números entre o texto e o CTA. */
  metrics: [
    { value: '2017', label: 'fundada em Belo Horizonte' },
    { value: '+20 anos', label: 'de experiência da equipe' },
    { value: '3 fontes', label: 'solar, diesel e híbrida' },
  ],
  /** Título em uma linha e descrição em duas (até ~50 caracteres) nos cards do desktop. */
  reasons: [
    {
      icon: 'badge-check',
      title: 'Distribuidor autorizado',
      description: 'Conectamos sua operação à linha HiLight.',
    },
    {
      icon: 'user',
      title: 'Atendimento consultivo',
      description: 'Cobertura, autonomia e energia antes de indicar.',
    },
    {
      icon: 'shield',
      title: 'Menos paradas',
      description: 'Visibilidade para operar à noite com segurança.',
    },
    {
      icon: 'leaf',
      title: 'Menos emissões',
      description: 'Solar e híbrida reduzem consumo, emissões e custo.',
    },
    {
      icon: 'pin',
      title: 'Atendimento em MG',
      description: 'Sede em Contagem, na Grande Belo Horizonte.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly string[]
  text: string
  scene: Photo
  metrics: readonly [Metric, Metric, Metric]
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
