import { ProductConfig, BenefitItem, AudienceItem, FaqItem } from '../types';

export const productConfig: ProductConfig = {
  name: "Power Nature",
  fullName: "Power Nature Pré-Treino Beterraba e Baru",
  tagline: "Natureza transformada em performance.",
  category: "Suplemento Funcional",
  weight: "300g",
  servings: "Rende até 30 porções",
  priceFormatted: "R$ 139,90", // Placeholder configurável: [INSERIR PREÇO]
  checkoutUrl: "https://www.mercadolivre.com.br/up/MLBU3918928553?matt_tool=38524122&pdp_filters=item_id:MLB6673563802&ua=zEvQXhstzQcaJN2Hf8M05JhR6sTd4o9D-6xPbGB4bIPspA#origin=share&sid=share&wid=MLB6673563802&action=whatsapp",
  instagramHandle: "@araizvital",
  instagramUrl: "https://instagram.com/araizvital",
  whatsappContact: "+55 61 8326-6395",
  supportEmail: "contato@raizvital.com.br",
  highlights: [
    "300g • Conteúdo líquido",
    "Beterraba em pó selecionada",
    "Castanha de baru do Cerrado",
    "Proteína vegetal isolada",
    "Zero corantes ou aromas artificiais",
    "100% Origem Vegetal"
  ],
  suggestedUse: "Sugere-se a ingestão de 2 scoops ao dia, antes ou depois do treino. Siga sempre as orientações presentes na embalagem.",
  storageInfo: "Conservar ao abrigo da luz, calor e umidade. Após aberto, consumir preferencialmente em até 60 dias.",
  ingredientsText: "Beterraba em pó desidratada, castanha de baru torrada e micronizada, proteína vegetal isolada e nutrientes naturalmente presentes nos ingredientes.",
  allergenWarning: "ALÉRGICOS: CONTÉM CASTANHA DE BARU. PODE CONTER DERIVADOS VEGETAIS. NÃO CONTÉM GLÚTEN.",
  
  packs: [
    {
      id: "pack-1",
      name: "1 Pote (300g)",
      subtitle: "Para experimentar e iniciar sua rotina",
      units: 1,
      originalPrice: 159.90,
      price: 139.90,
      installmentText: "ou 3x de R$ 46,63 sem juros",
      badge: "Ideal para experimentar",
      popular: false,
      savings: "Economia de R$ 20,00",
      shippingFree: false
    },
    {
      id: "pack-2",
      name: "Kit 2 Potes (600g)",
      subtitle: "Tratamento contínuo para 60 dias",
      units: 2,
      originalPrice: 319.80,
      price: 249.90,
      installmentText: "ou 6x de R$ 41,65 sem juros",
      badge: "Mais Escolhido • 22% OFF",
      popular: true,
      savings: "Economia de R$ 69,90",
      shippingFree: true
    },
    {
      id: "pack-3",
      name: "Kit 3 Potes (900g)",
      subtitle: "Melhor custo-benefício para atletas e rotinas ativas",
      units: 3,
      originalPrice: 479.70,
      price: 349.90,
      installmentText: "ou 10x de R$ 34,99 sem juros",
      badge: "Melhor Valor • Frete Grátis",
      popular: false,
      savings: "Economia de R$ 129,80",
      shippingFree: true
    }
  ],

  nutritionTable: [
    { nutrient: "Valor Energético", amountPerServing: "36 kcal = 151 kJ", dailyValuePercent: "2%" },
    { nutrient: "Carboidratos", amountPerServing: "5,8 g", dailyValuePercent: "2%" },
    { nutrient: "Açúcares Totais", amountPerServing: "3,2 g", dailyValuePercent: "*" },
    { nutrient: "Proteínas Vegetais", amountPerServing: "2,4 g", dailyValuePercent: "3%" },
    { nutrient: "Gorduras Totais", amountPerServing: "0,6 g", dailyValuePercent: "1%" },
    { nutrient: "Gorduras Saturadas", amountPerServing: "0,1 g", dailyValuePercent: "1%" },
    { nutrient: "Fibra Alimentar", amountPerServing: "1,8 g", dailyValuePercent: "7%" },
    { nutrient: "Sódio", amountPerServing: "28 mg", dailyValuePercent: "1%" },
    { nutrient: "Potássio (natural)", amountPerServing: "180 mg", dailyValuePercent: "5%" },
    { nutrient: "Ferro (natural)", amountPerServing: "1,2 mg", dailyValuePercent: "9%" },
    { nutrient: "Magnésio (natural)", amountPerServing: "32 mg", dailyValuePercent: "12%" }
  ]
};

export const benefitsData: BenefitItem[] = [
  {
    id: "beterraba",
    title: "BETERRABA EM PÓ",
    subtitle: "Riqueza botânica selecionada",
    description: "Ingrediente natural utilizado na composição do produto, fornecendo a cor vibrante característica e os nutrientes naturais da raiz desidratada.",
    tag: "Ingrediente Chave",
    iconName: "Flame",
    image: "/beterraba-po.webp"
  },
  {
    id: "baru",
    title: "CASTANHA DE BARU",
    subtitle: "Do coração do Cerrado brasileiro",
    description: "Ingrediente típico do Cerrado brasileiro que agrega valor nutricional, perfil de lipídios benéficos e identidade autêntica ao produto.",
    tag: "Origem Brasil",
    iconName: "Nut",
    image: "/castanha-de-baru.webp"
  },
  {
    id: "proteina",
    title: "PROTEÍNA VEGETAL",
    subtitle: "Nutrição pura de base vegetal",
    description: "Componente vegetal presente na composição, ideal para quem busca complementar a ingestão diária sem ingredientes de origem animal.",
    tag: "100% Plant-Based",
    iconName: "Leaf",
    image: "/proteina-vegetal1.webp"
  }
];

export const audienceData: AudienceItem[] = [
  {
    id: "corredores",
    title: "CORREDORES",
    description: "",
    iconName: "Footprints",
    image: "https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ciclistas",
    title: "CICLISTAS",
    description: "",
    iconName: "Bike",
    image: "/ciclismo.webp"
  },
  {
    id: "musculacao",
    title: "PRATICANTES DE ACADEMIA",
    description: "",
    iconName: "Dumbbell",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "atletas",
    title: "ATLETAS",
    description: "",
    iconName: "HeartPulse",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop"
  }
];

export const differentialsData = [
  {
    id: "diff-1",
    title: "INGREDIENTES NATURAIS",
    description: "Composição baseada em ingredientes naturais selecionados, sem corantes ou aromatizantes artificiais.",
    icon: "ShieldCheck"
  },
  {
    id: "diff-2",
    title: "ORIGEM VEGETAL",
    description: "Proposta alinhada a uma nutrição 100% de origem vegetal, livre de lactose e derivados animais.",
    icon: "Sprout"
  },
  {
    id: "diff-3",
    title: "INGREDIENTES BRASILEIROS",
    description: "Destaque para a valorização da castanha de baru, fruto nobre e autêntico do Cerrado brasileiro.",
    icon: "MapPin"
  },
  {
    id: "diff-4",
    title: "PRATICIDADE",
    description: "Formato em pó de fácil diluição em água ou sucos para acompanhar sua rotina em qualquer lugar.",
    icon: "Zap"
  }
];

export const faqData: FaqItem[] = [
  {
    question: "O que é o Power Nature Beterraba e Baru?",
    answer: "O Power Nature é um suplemento funcional pré-treino formulado com beterraba em pó desidratada, castanha de baru micronizada, proteína vegetal e minerais naturais. Foi desenvolvido para acompanhar pessoas ativas antes ou depois das atividades físicas.",
    category: "Sobre o Produto"
  },
  {
    question: "Quais são os principais ingredientes da fórmula?",
    answer: "A composição destaca beterraba em pó selecionada, castanha de baru típica do Cerrado brasileiro, proteína vegetal isolada e nutrientes naturalmente presentes nesses ingredientes vegetais, sem adição de corantes sintéticos.",
    category: "Ingredientes"
  },
  {
    question: "O produto contém proteína vegetal?",
    answer: "Sim. A formulação conta com proteína vegetal que complementa o aporte nutricional dos ingredientes naturais de forma 100% plant-based.",
    category: "Ingredientes"
  },
  {
    question: "O produto possui ingredientes naturais?",
    answer: "Sim. A proposta principal da Power Nature é oferecer um suplemento construído a partir de ingredientes de matriz vegetal, reduzindo aditivos químicos desnecessários.",
    category: "Qualidade"
  },
  {
    question: "Como devo consumir o produto?",
    answer: "Conforme indicação do rótulo: sugere-se a ingestão de 2 scoops ao dia, antes ou depois do treino, diluído em aproximadamente 150ml a 200ml de água ou bebida vegetal de sua preferência. Siga sempre as orientações presentes na embalagem.",
    category: "Modo de Uso"
  },
  {
    question: "Qual é o tamanho e rendimento da embalagem?",
    answer: "O pote contém 300g de produto em pó. Seguindo a porção diária sugerida de 2 scoops (aprox. 10g), o frasco rende cerca de 30 porções.",
    category: "Embalagem"
  },
  {
    question: "Para quem o produto é indicado?",
    answer: "É indicado para adultos ativos que praticam corrida, ciclismo, musculação ou esportes variados, além de pessoas que buscam uma alternativa funcional de base vegetal para o dia a dia.",
    category: "Indicação"
  },
  {
    question: "Como funciona a compra e entrega?",
    answer: "A compra é realizada em ambiente seguro e criptografado. Após a confirmação do pagamento, seu pedido é separado e despachado com código de rastreamento enviado diretamente para o seu e-mail e WhatsApp.",
    category: "Compra e Envio"
  }
];
