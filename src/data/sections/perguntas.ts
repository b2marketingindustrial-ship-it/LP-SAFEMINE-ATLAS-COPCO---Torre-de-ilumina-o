/**
 * Dados da seção "Perguntas frequentes" (biblioteca B2, fase: autoridade).
 *
 * Entrou em 03/11/2026, a pedido do usuário, entre as aplicações e os diferenciais.
 * Respostas só com dados já usados na LP: catálogo Atlas Copco (MS4, V7+), página de torres
 * do site da Safe Mine (critério por fonte de energia, HardHat, Spillage Free) e o endereço.
 * Pendente: a lista real de dúvidas do comercial (prazo, garantia), como pede a biblioteca.
 */
export interface Question {
  question: string
  answer: string
}

export const faq = {
  eyebrow: 'Perguntas frequentes',
  title: 'O que perguntam antes de cotar',
  /** Trecho do título em verde. */
  titleHighlight: 'antes de cotar',
  text: 'As dúvidas mais comuns sobre as torres HiLight e o atendimento. Não encontrou a sua? Fale com a nossa equipe.',
  items: [
    {
      question: 'Preciso saber o modelo para pedir cotação?',
      answer:
        'Não. Informe a aplicação, a área aproximada e a cidade. A Safe Mine avalia cobertura, autonomia, fonte de energia e terreno e indica a torre.',
    },
    {
      question: 'Como escolher entre a torre solar, a diesel e a híbrida?',
      answer:
        'A diesel atende ambientes severos e operação contínua. A solar dispensa combustível e serve onde há restrição de emissões ou falta abastecimento. A híbrida alterna as fontes conforme a demanda.',
    },
    {
      question: 'Como a torre solar funciona à noite?',
      answer:
        'Na HiLight MS4, 3 painéis de 430 Wp carregam a bateria de lítio LiFePO₄ durante o dia, e a torre ilumina à noite sem consumir combustível. A autonomia depende da configuração e da intensidade da luz.',
    },
    {
      question: 'A HiLight V7+ é indicada para mineração?',
      answer:
        'Sim. Ela tem carenagem HardHat, chassi Spillage Free, que contém vazamentos de óleo e fluidos, e autonomia de até 105 horas, o que reduz as paradas para abastecimento.',
    },
    {
      question: 'Quantas torres preciso para a minha área?',
      answer:
        'Depende da área, do nível de iluminação exigido e do layout do local. Com a área em m² e a aplicação, a Safe Mine indica a quantidade de torres.',
    },
    {
      question: 'Onde fica a Safe Mine?',
      answer:
        'Em Contagem, na Grande Belo Horizonte. O atendimento é para operações em Minas Gerais, pelo formulário ou pelo WhatsApp.',
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  text: string
  items: readonly Question[]
}
