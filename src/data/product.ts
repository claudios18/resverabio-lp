import type { Product, ProductVariant, BenefitSection, ComparisonProduct } from '../types';

export const productData: Product = {
  id: 'resverabio-collagen',
  name: 'Resverabio® Collagen',
  tagline: 'Beleza que vem de dentro.',
  description: 'O Collagen Protein é feito com tecnologia alemã Verisol®, comprovada cientificamente como o melhor colágeno do mundo para a pele.',
  price: 221.97,
  originalPrice: 279.90,
  highlights: [
    'Tecnologia Verisol® alemã',
    'Alta biodisponibilidade',
    'Com biotina para pele, cabelo e unhas',
    'Sem açúcar ou adoçantes',
    'Fácil digestão e assimilação'
  ],
  variants: [
    { id: 'neutro', name: 'Neutro', label: 'SABOR NEUTRO 450 G', color: '#f5f0e8' },
    { id: 'chocolate', name: 'Chocolate Língua de Gato', label: 'SABOR CHOCOLATE', color: '#5e524f' },
    { id: 'berries', name: 'Berries Silvestres', label: 'SABOR BERRIES', color: '#8a4b6d' },
    { id: 'abacaxi', name: 'Abacaxi com Hortelã', label: 'SABOR ABACAXI', color: '#7d8471' }
  ]
};

export const productVariants: ProductVariant[] = productData.variants;

export const benefitSections: BenefitSection[] = [
  {
    id: 'beauty',
    label: 'BELEZA QUE VEM DE DENTRO',
    title: 'Beleza que vem de dentro.',
    content: [
      'O Collagen Protein é feito com a tecnologia alemã Verisol®, comprovada cientificamente como o melhor colágeno do mundo para a pele.',
      'É uma fonte de proteína de excepcional biodisponibilidade. Sua digestão é simples e fácil, e os aminoácidos são normalmente assimilados em poucos minutos, sem demandar esforço digestivo.',
      'Especialmente desenvolvido com biotina, vitamina que auxilia no metabolismo de proteínas, carboidratos e gorduras, contribui para a manutenção do cabelo, da pele e ajuda na preservação das mucosas.'
    ],
    layout: 'left'
  },
  {
    id: 'neutral',
    label: 'SABOR NEUTRO',
    title: 'Para você usar em qualquer receita.',
    subtitle: 'PARA VOCÊ USAR EM QUALQUER RECEITA.',
    content: [
      'O Collagen Protein Neutro é perfeito para quem deseja suplementar proteína de fácil absorção. É sem sabor, sem açúcar ou adoçantes.',
      'É leve, saúdavel e altamente versátil, sendo excelente para incrementar o aporte proteico diário de diversas formas.',
      'Pode ser consumido em diferentes bebidas e receitas, como smoothies, saladas de frutas ou iogurtes, em qualquer momento do dia ou após os exercícios físicos.'
    ],
    layout: 'right'
  },
  {
    id: 'muscles',
    label: 'MÚSCULOS',
    title: 'Sua fábrica de saúde.',
    content: [
      'Fazer exercícios não é um mero capricho ou vaidade, é um cuidado essencial que se reflete no equilíbrio hormonal e fica mais importante conforme a idade avança.',
      'Você pode ganhar décadas de saúde ao implementar este hábito e ser recompensado com uma boa qualidade de vida e longevidade, além de usufruir de mais vitalidade, bem-estar e autoestima desde o momento em que insere esta prática na rotina.',
      'A proteína é um dos principais nutrientes que auxiliam no fortalecimento muscular para uma vida mais ativa e saudável.',
      'Consuma o Collagen Protein durante 3 meses após o exercício físico para experimentar os benefícios. Nos dias em que não treinar, consuma a dose recomendada no momento em que preferir.'
    ],
    layout: 'left'
  },
  {
    id: 'longevity',
    label: 'LONGEVIDADE',
    title: 'Um importante aliado da longevidade.',
    content: [
      'O Collagen Protein é particularmente útil na maturidade, quando nossos mecanismos naturais de assimilação e transporte de proteínas estão menos eficientes, e a saúde é beneficiada por um aporte maior deste importante nutriente.',
      'Os peptídeos bioativos de colágeno hidrolisado com peso molecular médio de 2kDa auxiliam na manutenção da saúde da pele e são ideais para complementar a alimentação e servir de matéria-prima para inúmeras funções do organismo.',
      'Suplementar com boas fontes de proteína é de grande auxílio para quem já passou dos 35 anos e quer continuar a nutrição de qualidade rumo à longevidade saudável.',
      'Afinal, viver é bom. Mas viver com saúde é muito melhor.'
    ],
    layout: 'right'
  }
];

export const nutritionData = {
  portion: '23 g (1 scoop)',
  servingsPerContainer: 'cerca de 20',
  values: [
    { nutrient: 'Valor energético (kcal)', amount: '84', dailyValue: '4' },
    { nutrient: 'Carboidratos (g)', amount: '0', dailyValue: '0' },
    { nutrient: 'Açúcares (g)', amount: '0', dailyValue: '' },
    { nutrient: 'Açúcares adicionados (g)', amount: '0', dailyValue: '0' },
    { nutrient: 'Proteínas (g)', amount: '21', dailyValue: '42' },
    { nutrient: 'Gorduras totais (g)', amount: '0', dailyValue: '0' },
    { nutrient: 'Gorduras saturadas (g)', amount: '0', dailyValue: '0' },
    { nutrient: 'Gorduras trans (g)', amount: '0', dailyValue: '' },
    { nutrient: 'Fibras alimentares (g)', amount: '0', dailyValue: '0' },
    { nutrient: 'Sódio (mg)', amount: '58', dailyValue: '3' },
    { nutrient: 'Biotina (µg)', amount: '38', dailyValue: '127' },
    { nutrient: 'Peptídeos Bioativos de Colágeno (g)', amount: '2,5', dailyValue: '' }
  ],
  ingredients: 'Peptídeos bioativos de colágeno hidrolisado Verisol®, proteína isolada da soja, biotina.',
  allergens: 'ALÉRGICOS: PODE CONTER AMÊNDOA, AMENDOIM, AVELÃS, CASTANHA-DE-CAJU, CASTANHA-DO-PARÁ, CASTANHAS, MACADÂMIAS, NOZES, PECÃS E PISTACHES. NÃO CONTÉM GLUTÉN.'
};

export const comparisonProducts: ComparisonProduct[] = [
  {
    id: 'clear-whey',
    name: 'Clear Whey',
    variants: ['Limão Tahiti & Yuzu', 'Abacaxi & Hortelã'],
    proteinPerServing: '11g',
    features: ['Leve e refrescante', 'Sem textura ou sabor lácteo', 'Tecnologia Clear', 'Proteína isolada do soro do leite']
  },
  {
    id: 'whey-isolado',
    name: 'Whey Isolado',
    variants: ['Dark Chocolate', 'Natural Vanilla', 'Neutro'],
    proteinPerServing: '22-23g',
    features: ['100% whey protein', 'Proteína isolada do soro do leite', 'Contém todos os aminoácidos essenciais', 'Oferece boas doses de glutamina']
  },
  {
    id: 'vegan-protein',
    name: 'Vegan Protein',
    variants: ['Neutro', 'Natural Vanilla'],
    proteinPerServing: '22g',
    features: ['100% plant based', 'Proteína de ervilha e girassol', 'Contém todos os aminoácidos essenciais', '+ 12 vitaminas e minerais']
  },
  {
    id: 'collagen-protein',
    name: 'Collagen Protein',
    variants: ['Puro', 'Abacaxi e Hortelã', 'Berries Silvestres'],
    proteinPerServing: '21g',
    features: ['100% proteína de colágeno', '2,5g de peptídeos Verisol®', '4,8g de glicina', 'Fácil digestão e assimilação']
  }
];
