/**
 * Dados da seção "Painel de apoio" (biblioteca B2, fase: apoio).
 *
 * Painel navy com 6 dados que o visitante pode enviar sem ter a especificação em
 * mãos. São 6 exatos: a faixa é um grid de 2/3/6 colunas com divisórias, e
 * qualquer outro número deixa célula órfã.
 *
 * Bloco navy com o CTA à esquerda e, à direita, os 6 dados em dois grupos.
 *
 * Os 6 dados saem do formulário do planejamento e dos critérios de escolha da torre
 * (cobertura, autonomia, fonte de energia, terreno). O modelo entra como opcional: quem
 * não o sabe pede cotação descrevendo a aplicação.
 */
import type { IconName } from '@data/icons'

export interface SupportItem {
  icon: IconName
  label: string
  hint: string
}

export const supportPanel = {
  eyebrow: 'Dados para cotação',
  title: 'Não sabe o modelo exato?',
  text: 'Informe o que souber da aplicação. A Safe Mine avalia cobertura, autonomia, fonte de energia e terreno e indica a torre adequada.',
  microcopy: 'Você pode pedir cotação sem saber o modelo.',
  /** Rótulo do botão do bloco navy. */
  ctaLabel: 'Receber indicação e cotação',
  /** Lado claro: os 3 primeiros itens são o essencial; os demais, "se souber". */
  list: {
    title: 'O que ajuda na sua cotação',
    text: 'Comece pela aplicação. Os dados técnicos podem ficar para depois.',
    essentialLabel: 'Essencial',
    optionalLabel: 'Se souber, envie também',
    optionalFrom: 3,
  },
  items: [
    { icon: 'target', label: 'Aplicação', hint: 'Obra, mina ou evento' },
    { icon: 'ruler', label: 'Área a iluminar', hint: 'Tamanho aproximado em m²' },
    { icon: 'pin', label: 'Localização', hint: 'Cidade e UF' },
    { icon: 'bolt', label: 'Fonte de energia', hint: 'Solar, diesel ou híbrida' },
    { icon: 'layers', label: 'Modelo de interesse', hint: 'MS4, V7+ ou MI6+' },
    { icon: 'mountain', label: 'Condições do terreno', hint: 'Acesso e ambiente' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  microcopy: string
  ctaLabel: string
  list: {
    title: string
    text: string
    essentialLabel: string
    optionalLabel: string
    optionalFrom: number
  }
  items: readonly [SupportItem, SupportItem, SupportItem, SupportItem, SupportItem, SupportItem]
}
