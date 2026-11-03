/**
 * Dados da seção "Recursos HiLight" (fase: prova). Seção própria desta LP, criada em
 * 03/11/2026 a pedido do usuário, acima do FAQ, só com o que a página ainda não dizia.
 *
 * Fonte: site oficial da Atlas Copco (pt-BR), lido em 03/11/2026:
 * - light-towers/solar e solar/hilight-ms-4-ms-5: sensor de luz, painéis que recolhem para o
 *   transporte, mastro de 7,5 m e estabilidade ao vento de 80 km/h, LEDs IK 10 e IP 69,
 *   ECOController™;
 * - diesel/hilight-v7-plus-v5-plus-neo: fotocélula opcional, pronta em minutos;
 * - light-towers/diesel: LEDs IK 10 e IP 69;
 * - hybrid/hilight-mi-plus-6 e light-towers/hybrid: mastro hidráulico, 4 modos de operação
 *   (rede opcional), baixo ruído e sem emissões no modo bateria, ECOController™.
 *
 * `scope` diz a que modelo ou linha o recurso se aplica: vários não valem para os 3 modelos.
 * A híbrida segue chamada de MI6+, como no resto da LP (o nome oficial é "MI+ 6").
 */
import type { IconName } from '@data/icons'

export interface Feature {
  icon: IconName
  title: string
  description: string
  scope: string
}

export const features = {
  eyebrow: 'Recursos HiLight',
  title: 'Recursos que fazem diferença no campo',
  /** Trecho do título em verde. */
  titleHighlight: 'no campo',
  text: 'O que as torres HiLight trazem para acender sozinhas, montar rápido e aguentar o ambiente da operação.',
  items: [
    {
      icon: 'power',
      title: 'Acende sozinha ao escurecer',
      description:
        'O sensor de luz liga e desliga a torre conforme a luminosidade, sem depender do operador.',
      scope: 'MS4 · V7+ com fotocélula opcional',
    },
    {
      icon: 'clock',
      title: 'Pronta em minutos',
      description:
        'Implantação rápida no local, com mastro hidráulico de desdobramento vertical na híbrida.',
      scope: 'V7+ · MI6+',
    },
    {
      icon: 'shield',
      title: 'LEDs IK 10 e IP 69',
      description: 'Refletores certificados contra impacto e contra jatos de água em alta pressão.',
      scope: 'Linhas diesel e solar',
    },
    {
      icon: 'ruler',
      title: 'Mastro de 7,5 m',
      description: 'Estável com ventos de até 80 km/h. Os painéis recolhem para o transporte.',
      scope: 'MS4',
    },
    {
      icon: 'refresh',
      title: '4 modos de operação',
      description:
        'Bateria, diesel, híbrido ou rede elétrica. No modo bateria, baixo ruído e sem emissões.',
      scope: 'MI6+ · rede opcional',
    },
    {
      icon: 'cpu',
      title: 'ECOController™',
      description: 'Controlador que automatiza a iluminação e reúne os comandos da torre.',
      scope: 'Linhas solar e híbrida',
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  text: string
  items: readonly Feature[]
}
