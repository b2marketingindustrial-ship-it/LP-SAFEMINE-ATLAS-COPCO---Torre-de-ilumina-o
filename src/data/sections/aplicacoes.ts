/**
 * Dados da seção "Aplicações" (biblioteca B2, fase: prova).
 *
 * 4 cards-botão com foto 4:3. O card inteiro é o CTA.
 *
 * As quatro aplicações são as do planejamento da campanha: obra e mineração têm palavra-chave
 * própria; operações remotas e eventos vêm depois. Locadoras são público comprador, não
 * aplicação, e por isso entram na faixa abaixo dos cards. Fotos do site da Safe Mine e da
 * apresentação da MS4 (Atlas Copco): ainda não há foto da torre em canteiro real.
 */
import type { Photo } from '@data/types'

import app1 from '@assets/aplicacoes/aplicacao-1.png'
import app2 from '@assets/aplicacoes/aplicacao-2.png'
import app3 from '@assets/aplicacoes/aplicacao-3.png'
import app4 from '@assets/aplicacoes/aplicacao-4.png'

export interface Application {
  id: string
  label: string
  description: string
  photo: Photo
}

export const applications = {
  eyebrow: 'Aplicações',
  title: 'Iluminação temporária para cada operação',
  /** Trecho do título em verde, na segunda linha. */
  titleHighlight: 'cada operação',
  text: 'Iluminação temporária para mineração, construção e operações remotas, com a fonte de energia adequada a cada aplicação.',
  /** Chamada no pé de cada card (o card inteiro é o botão). */
  cardCta: 'Cotar para esta aplicação',
  /** Faixa abaixo dos cards, para quem não se vê nas 4 aplicações. */
  help: {
    title: 'Sua aplicação não está aqui?',
    text: 'Locadora, indústria, floresta ou porto? Descreva a operação e a Safe Mine indica a torre.',
  },
  items: [
    {
      id: 'canteiros-de-obra',
      label: 'Canteiros de obra',
      description: 'Iluminação de canteiros, frentes de obra e áreas operacionais.',
      photo: {
        src: app1,
        alt: 'Torre de iluminação solar HiLight em terreno aberto, com guindaste ao fundo',
      },
    },
    {
      id: 'mineracao-pedreiras',
      label: 'Mineração e pedreiras',
      description: 'Iluminação das áreas de trabalho em mineração e pedreiras.',
      photo: { src: app2, alt: 'Torre de iluminação HiLight a diesel em área de mineração' },
    },
    {
      id: 'operacoes-remotas',
      label: 'Operações remotas',
      description: 'Iluminação temporária para operações remotas e de alta exigência.',
      photo: {
        src: app3,
        alt: 'Equipe com colete refletivo junto a torres de iluminação na entrada de um túnel',
      },
    },
    {
      id: 'eventos-temporarias',
      label: 'Eventos e operações temporárias',
      description: 'Iluminação móvel para eventos, conforme o local e o projeto.',
      photo: {
        src: app4,
        alt: 'Torres de iluminação Atlas Copco acesas à noite, com prédios ao fundo',
      },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  text: string
  cardCta: string
  help: { title: string; text: string }
  items: readonly [Application, Application, Application, Application]
}
