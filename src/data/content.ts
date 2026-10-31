/**
 * COPY DA ESTRUTURA FIXA.
 *
 * Só o que aparece em Header, Hero, Cotação e Footer — as quatro peças presentes
 * em toda LP do padrão. O copy das seções do meio vive em
 * `src/data/sections/<slug>.ts`, um arquivo por seção escolhida da biblioteca.
 *
 * Transcrito da ficha de execução (`docs/FICHA-LP.md`), campo `conteudo`. O conteúdo
 * que vem no template é o exemplo de referência, com imagens placeholder.
 */
import type { IconName } from './icons'
import type { Photo } from './types'
import { site } from './site'

import heroBg from '@assets/heroBg.png'

/* ------------------------------------------------------------------ tipos */

/** Linha da faixa "Encontre a linha" no pé do hero. Cada card é um CTA. */
export interface HeroLine {
  id: string
  icon: IconName
  title: string
  /** Dado de destaque sob o título; mais de um item entra separado por divisória. */
  spec: readonly string[]
  description: string
}

export interface TrustItem {
  icon: IconName
  label: string
}

/* ----------------------------------------------------------- vocabulário */

/** Vocabulário fixo de CTA (PROMPT-PADRAO-LP, item 8). Não variar. */
export const cta = {
  primary: 'Solicitar cotação',
  primaryShort: 'Cotação',
  secondary: 'Identifique sua torre',
  card: 'Falar com especialista',
  whatsapp: 'Chamar no WhatsApp',
  /** Link do hero que rola até a seção de linhas. Não é CTA de atendimento. */
  findLine: 'Encontrar minha torre',
} as const

/* ------------------------------------------------------------------ header */

export const header = {
  /** Âncoras da barra (desvio do padrão herdado da LP de compressores): rolam até as seções. */
  nav: [
    { id: 'torres', label: 'Torres', href: '#linhas' },
    { id: 'aplicacoes', label: 'Aplicações', href: '#aplicacoes' },
  ],
} as const

/* -------------------------------------------------------------------- hero */

export const hero = {
  eyebrow: 'Linha HiLight para operações exigentes',
  title: `${site.product} para ${site.context}`,
  /** Trecho do H1 em verde. */
  highlight: 'obras e mineração',
  text: 'Modelos HiLight solar, diesel e híbrido para canteiros, frentes de mineração e operações remotas. Distribuidora autorizada em Minas Gerais, a Safe Mine entende sua aplicação e indica a torre certa.',
  banner: {
    src: heroBg,
    alt: 'Quatro torres de iluminação Atlas Copco acesas em área portuária',
    /** Larguras geradas: as mesmas no <Picture> do Hero e no preload do Layout. */
    widths: [480, 768, 1020],
    sizes: '(min-width: 1024px) 46vw, 100vw',
  },
  help: {
    title: 'Não sabe qual modelo escolher?',
    text: 'Descreva a aplicação. Nós indicamos a torre.',
  },
  lines: {
    title: 'Encontre a torre para a sua operação',
    note: 'Cobertura e autonomia dependem do modelo e da configuração.',
    items: [
      {
        id: 'hilight-ms4',
        icon: 'sun',
        title: 'HiLight MS4',
        spec: ['Solar', '3.846 m²'],
        description: 'Bateria de lítio, sem consumo de combustível.',
      },
      {
        id: 'hilight-v7-plus',
        icon: 'engine',
        title: 'HiLight V7+',
        spec: ['Diesel', 'Até 7.000 m²'],
        description: 'Áreas grandes e autonomia de até 105 h.',
      },
      {
        id: 'hilight-mi6-plus',
        icon: 'refresh',
        title: 'HiLight MI6+',
        spec: ['Híbrida', 'Até 6.000 m²'],
        description: 'Combina bateria e motor a diesel.',
      },
    ],
  },
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  highlight: string
  banner: Photo & { widths: readonly number[]; sizes: string }
  help: { title: string; text: string }
  lines: {
    title: string
    note: string
    items: readonly [HeroLine, HeroLine, HeroLine]
  }
}

/* ----------------------------------------------------------------- cotação */

export const quote = {
  eyebrow: 'Cotação de torres',
  title: 'Fale com quem entende de torres de iluminação.',
  /** Trecho do título em verde, na segunda linha. */
  titleHighlight: 'torres de iluminação.',
  text: 'Solicite cotação de torres de iluminação adequadas à sua operação. Atendimento em Minas Gerais: preencha o formulário ou fale direto conosco pelo WhatsApp.',
  /** Linha sob o botão de WhatsApp. */
  help: 'Não sabe o modelo? Basta descrever a aplicação.',
  trust: [
    { icon: 'users', label: 'Atendimento consultivo' },
    { icon: 'pin', label: 'Atendimento em Minas Gerais' },
    { icon: 'badge-check', label: 'Distribuidor autorizado Atlas Copco' },
  ],
  /** Nota de LGPD exibida abaixo do formulário. */
  lgpd: 'Seus dados serão usados apenas para responder à sua solicitação de cotação, conforme a LGPD.',
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  text: string
  help: string
  trust: readonly [TrustItem, TrustItem, TrustItem]
  lgpd: string
}

/* ------------------------------------------------------------------ footer */

export const footer = {
  credit: { label: 'B2 Marketing Industrial', url: 'https://b2marketingindustrial.com.br' },
} as const
