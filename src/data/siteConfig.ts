export const siteConfig = {
  name: 'CANTINHO DIGITAL',
  domain: 'cantinhodigital.shop',
  url: 'https://cantinhodigital.shop',
  title: 'Cantinho Digital | IPTV 2 e 3 Telas Premium | Planos Mensais e Anuais em 4K',
  tagline: 'IPTV 2 e 3 Telas Simultâneas | Alta Estabilidade em 4K',
  subTagline: 'Assista canais ao vivo, filmes, séries e esportes em até 3 telas simultâneas sem travamentos. Mais de 80.000 conteúdos em um único aplicativo!',
  whatsapp: {
    number: '5551997965853',
    display: '(51) 99796-5853',
    defaultMsg: 'Olá! Vim do site cantinhodigital.shop e quero solicitar meu Teste Grátis de 2 e 3 Telas.',
    planMsg: (duration: string, price: string, screens: string) => `Quero o plano de ${duration} por R$ ${price} (${screens})! Vim do cantinhodigital.shop`
  },
  stats: {
    channels: '+2.500 Canais Ao Vivo',
    contents: '+80.000 Filmes & Séries',
    quality: '4K Ultra HD & 60FPS',
    screens: '2 e 3 Telas Simultâneas Liberadas'
  },
  seo: {
    keywords: [
      'cantinho digital iptv',
      'cantinho digital',
      'iptv 2 telas simultaneas',
      'iptv 3 telas simultaneas',
      'iptv 2 telas',
      'iptv 3 telas',
      'plano iptv 2 telas',
      'plano iptv 3 telas',
      '2 telas ao mesmo tempo',
      '3 telas ao mesmo tempo',
      'iptv cantinho digital',
      'teste gratis iptv',
      'iptv futebol 4k',
      'iptv smart tv celular'
    ].join(', ')
  },
  plans: [
    {
      id: 'mensal',
      duration: '1 Mês',
      price: '30',
      oldPrice: '50',
      screens: '2 Telas Simultâneas',
      desc: 'Ideal para testar em 2 aparelhos',
      popular: false,
      color: 'from-blue-500 to-cyan-500',
      shadow: 'shadow-cyan-500/50'
    },
    {
      id: 'trimestral',
      duration: '3 Meses',
      price: '70',
      oldPrice: '120',
      screens: '2 Telas Simultâneas',
      desc: 'Economia garantida no trimestre',
      popular: false,
      color: 'from-purple-500 to-pink-500',
      shadow: 'shadow-purple-500/50'
    },
    {
      id: 'semestral',
      duration: '6 Meses',
      price: '130',
      oldPrice: '240',
      screens: '3 Telas Simultâneas',
      desc: 'SUPER DESCONTO! Família Toda',
      popular: true,
      color: 'from-pink-500 via-yellow-500 to-cyan-500',
      shadow: 'shadow-pink-500/80'
    },
    {
      id: 'anual',
      duration: '12 Meses',
      price: '240',
      oldPrice: '480',
      screens: '3 Telas Simultâneas',
      desc: 'METADE DO PREÇO! Apenas R$ 20/mês',
      popular: false,
      color: 'from-green-500 to-emerald-500',
      shadow: 'shadow-green-500/50'
    }
  ],
  testimonials: [
    {
      name: 'Carlos M.',
      text: 'Muito estável, não trava e funciona perfeitamente na minha Smart TV e no celular. Melhor IPTV que já usei!',
      stars: 5,
      avatar: '/avatar-carlos.png'
    },
    {
      name: 'Renata S.',
      text: 'Atendimento rápido no WhatsApp e qualidade excelente. Assistimos em 2 TVs na sala e no quarto sem nenhum engasgo!',
      stars: 5,
      avatar: '/avatar-renata.png'
    },
    {
      name: 'João P.',
      text: 'Uso em 3 telas ao mesmo tempo sem problema. Minha esposa assiste novela, meu filho desenhos e eu futebol ao mesmo tempo!',
      stars: 5,
      avatar: '/avatar-joao.png'
    }
  ],
  faqs: [
    {
      q: 'Funciona em quais dispositivos?',
      a: 'Funciona em Smart TV (Samsung, LG, TCL, Philips), TV Box Android, Fire TV Stick, computadores, notebooks, tablets e celulares (Android e iPhone/iOS).'
    },
    {
      q: 'Quantas telas posso usar ao mesmo tempo?',
      a: 'Nossos planos Mensal e Trimestral liberam 2 telas simultâneas. Já os planos Semestral e Anual liberam até 3 telas simultâneas para toda a casa!'
    },
    {
      q: 'Todo o conteúdo fica reunido em um único aplicativo?',
      a: 'Sim! Com o Cantinho Digital, você não precisa de vários aplicativos nem de pagar assinaturas separadas. Todos os canais ao vivo, futebol, filmes, séries e conteúdo infantil ficam organizados em um único aplicativo leve e rápido.'
    },
    {
      q: 'Tem teste grátis?',
      a: 'SIM! Solicite seu teste gratuito pelo WhatsApp e receba seu login de demonstração em minutos para comprovar a qualidade do sinal sem travar.'
    },
    {
      q: 'Como é o suporte técnico?',
      a: 'Suporte 100% humanizado e direto pelo WhatsApp. Você não fala com robôs. Nossa equipe ajuda na instalação passo a passo.'
    },
    {
      q: 'Tem futebol ao vivo em 4K e sem delay?',
      a: 'SIM! Transmissão completa do Brasileirão Séries A e B, Libertadores, Sul-Americana, Champions League, canais Premiere, ESPN e SporTV em qualidade 4K a 60 FPS.'
    }
  ]
};
