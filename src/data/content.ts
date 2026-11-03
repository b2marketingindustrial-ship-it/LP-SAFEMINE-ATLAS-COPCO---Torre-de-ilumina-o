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

/** Ponto da caixa de ícones do hero: `line1` e `line2` ficam sempre em duas linhas. */
export interface HeroPoint {
  icon: IconName
  line1: string
  line2: string
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
} as const

/* ------------------------------------------------------------------ header */

export const header = {
  /** Tagline central da barra (estrutura fixa 4.1.1): o produto principal. */
  tagline: 'Torres de iluminação',
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
    widths: [640, 1024, 1536, 1981],
    sizes: '(min-width: 1024px) 1700px, 100vw',
  },
  points: [
    { icon: 'sun', line1: 'HiLight MS4 solar', line2: 'até 4.000 m²' },
    { icon: 'engine', line1: 'HiLight V7+ diesel', line2: 'até 7.000 m²' },
    { icon: 'refresh', line1: 'HiLight MI6+ híbrida', line2: 'até 6.000 m²' },
  ],
  /** Aviso sob os botões: os dados acima variam por modelo e configuração. */
  note: 'Cobertura e autonomia dependem do modelo e da configuração.',
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  highlight: string
  banner: Photo & { widths: readonly number[]; sizes: string }
  points: readonly [HeroPoint, HeroPoint, HeroPoint]
  note: string
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
    { icon: 'pin', label: 'Atendimento em MG' },
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
