import { CapsuleProduct } from '../types';
import { productConfig } from '../config/product';

// Link padrão da loja oficial Raiz Vital no Mercado Livre caso o produto não tenha um link individual específico ainda
const DEFAULT_MERCADO_LIVRE_URL = productConfig.checkoutUrl;

export const capsuleProducts: CapsuleProduct[] = [
  {
    id: "capsula-berinjela",
    slug: "berinjela",
    name: "Berinjela",
    fullName: "Berinjela 500mg em Cápsulas - Raiz Vital",
    subtitle: "Auxílio no controle lipídico, digestão e saciedade",
    tagline: "Concentrado botânico puro de Solanum melongena rico em fibras e antocianinas.",
    category: "Saúde Cardiovascular & Digestiva",
    badge: "100% Puro • Rico em Fibras",
    badgeColor: "bg-[#4a154b]",
    capsulesCount: "60 Cápsulas",
    dosage: "500mg",
    spec: "Contém 60 Cápsulas | 500mg",
    price: 49.90,
    priceFormatted: "R$ 49,90",
    originalPriceFormatted: "R$ 69,90",
    mercadoLivreUrl: DEFAULT_MERCADO_LIVRE_URL,
    image: "/novos-produtos/berinjela.jpeg",
    shortDescription: "A Berinjela em cápsulas da Raiz Vital fornece fibras solúveis, minerais e compostos bioativos que auxiliam no equilíbrio dos níveis de colesterol e favorecem o trânsito intestinal com total praticidade.",
    fullDescription: "Desenvolvida com a polpa desidratada e selecionada da Solanum melongena, a Berinjela em Cápsulas Raiz Vital concentra os benefícios das fibras solúveis, polifenóis e da nasunina. É uma grande aliada para quem busca manter os níveis saudáveis de colesterol e triglicerídeos no sangue, além de promover saciedade natural e estimular o bom funcionamento gastrointestinal sem o sabor amargo característico do vegetal in natura.",
    keyIngredients: ["Berinjela em pó (Solanum melongena L.)", "Fibras Solúveis", "Antocianinas"],
    mainBenefit: "Auxilia no controle do colesterol, favorece a eliminação de toxinas e apoia o controle do peso.",
    benefits: [
      {
        title: "Equilíbrio dos Níveis de Colesterol",
        description: "As fibras solúveis da berinjela ligam-se aos ácidos biliares no intestino, favorecendo o controle lipídico e níveis saudáveis de LDL."
      },
      {
        title: "Sensação de Saciedade Natural",
        description: "Ajuda a retardar o esvaziamento gástrico, auxiliando no gerenciamento do apetite e controle de peso saudável."
      },
      {
        title: "Proteção Antioxidante Vascular",
        description: "Contém nasunina e antocianinas, potentes fitoquímicos que protegem as células endoteliais contra o estresse oxidativo."
      },
      {
        title: "Digestão & Desintoxicação",
        description: "Contribui para a regularidade intestinal e estímulo às funções purificadoras do fígado."
      }
    ],
    highlights: [
      "Contém 60 cápsulas de 500mg cada",
      "Berinjela 100% pura desidratada",
      "Fonte natural de fibras solúveis e polifenóis",
      "Zero açúcares, zero corantes artificiais e zero glúten",
      "Praticidade diária sem sabor amargo"
    ],
    suggestedUse: "Sugere-se a ingestão de 2 cápsulas ao dia com um copo de água, preferencialmente 30 minutos antes das principais refeições (almoço e jantar), ou conforme orientação médica/nutricional.",
    storageInfo: "Conservar ao abrigo da luz, calor e umidade. Após aberto, manter o frasco bem fechado e consumir preferencialmente em até 60 dias.",
    ingredientsText: "Berinjela em pó desidratada (Solanum melongena). Cápsula: gelatina vegetal e água purificada.",
    allergenWarning: "NÃO CONTÉM GLÚTEN. NÃO CONTÉM LACTOSE. PRODUTO 100% VEGETAL."
  },
  {
    id: "capsula-beterraba",
    slug: "beterraba",
    name: "Beterraba",
    fullName: "Beterraba 500mg em Cápsulas - Raiz Vital",
    subtitle: "Oxigenação celular, óxido nítrico e vigor físico natural",
    tagline: "Concentrado puro de nitratos bioativos da raiz de Beta vulgaris.",
    category: "Energia & Oxigenação Celular",
    badge: "Óxido Nítrico • Vigor Físico",
    badgeColor: "bg-[#801438]",
    capsulesCount: "60 Cápsulas",
    dosage: "500mg",
    spec: "Contém 60 Cápsulas | 500mg",
    price: 49.90,
    priceFormatted: "R$ 49,90",
    originalPriceFormatted: "R$ 69,90",
    mercadoLivreUrl: DEFAULT_MERCADO_LIVRE_URL,
    image: "/novos-produtos/beterraba.jpeg",
    shortDescription: "A Beterraba em cápsulas Raiz Vital oferece uma fonte concentrada de nitratos vegetais que estimulam o óxido nítrico, melhorando o fluxo sanguíneo, a entrega de oxigênio muscular e a disposição diária.",
    fullDescription: "A Beterraba em Cápsulas Raiz Vital é obtida a partir da desidratação a frio de raízes nobres de Beta vulgaris, preservando integralmente seus nitratos naturais, betalaínas e antioxidantes. No corpo, os nitratos são convertidos em óxido nítrico, composto fundamental para a vasodilatação, melhor oxigenação dos tecidos, redução da fadiga física e suporte à saúde cardiovascular, sem açúcar adicionado e sem corantes.",
    keyIngredients: ["Beterraba em pó integral (Beta vulgaris L.)", "Nitratos Naturais", "Betalaínas"],
    mainBenefit: "Vasodilatação natural, melhora da resistência física, oxigenação celular e combate à fadiga.",
    benefits: [
      {
        title: "Estímulo ao Óxido Nítrico & Vasodilatação",
        description: "Os nitratos naturais são convertidos em óxido nítrico no organismo, promovendo o relaxamento dos vasos sanguíneos e circulação otimizada."
      },
      {
        title: "Mais Resistência & Menos Fadiga",
        description: "Melhora a eficiência mitocondrial na produção de energia (ATP), permitindo treinos e jornadas de trabalho com mais fôlego."
      },
      {
        title: "Aporte de Betalaínas Protetoras",
        description: "Pigmentos antioxidantes da beterraba que combatem radicais livres e atuam na proteção dos vasos sanguíneos."
      },
      {
        title: "Praticidade Sem Açúcares Adicionados",
        description: "Aproveite todos os benefícios funcionais da beterraba sem precisar descascar, cozinhar ou bater sucos."
      }
    ],
    highlights: [
      "Contém 60 cápsulas de 500mg cada",
      "Raiz de beterraba pura e selecionada",
      "Concentração de nitratos bioativos e antioxidantes",
      "Auxilia na vasodilatação e resistência aeróbica",
      "Zero conservantes sintéticos e zero glúten"
    ],
    suggestedUse: "Sugere-se a ingestão de 2 cápsulas ao dia, preferencialmente pela manhã ou cerca de 45 a 60 minutos antes da prática de exercícios físicos, acompanhadas de água.",
    storageInfo: "Conservar ao abrigo da luz, calor e umidade. Após aberto, manter o frasco bem fechado e consumir preferencialmente em até 60 dias.",
    ingredientsText: "Beterraba em pó desidratada pura (Beta vulgaris). Cápsula: gelatina vegetal e água purificada.",
    allergenWarning: "NÃO CONTÉM GLÚTEN. NÃO CONTÉM LACTOSE."
  },
  {
    id: "capsula-curcuma-acafrao",
    slug: "curcuma-acafrao-da-terra",
    name: "Cúrcuma 100% Açafrão da Terra",
    fullName: "Cúrcuma 100% Açafrão da Terra 500mg - Raiz Vital",
    subtitle: "O mais consagrado anti-inflamatório e antioxidante da natureza",
    tagline: "Raiz pura de Curcuma longa integral, rica em curcuminoides para imunidade e articulações.",
    category: "Anti-inflamatório & Longevidade",
    badge: "100% Puro • Raiz Selecionada",
    badgeColor: "bg-[#b85d19]",
    capsulesCount: "60 Cápsulas",
    dosage: "500mg",
    spec: "Contém 60 Cápsulas | 500mg",
    price: 54.90,
    priceFormatted: "R$ 54,90",
    originalPriceFormatted: "R$ 74,90",
    mercadoLivreUrl: DEFAULT_MERCADO_LIVRE_URL,
    image: "/novos-produtos/curcuma-da-terra.jpeg",
    shortDescription: "Cúrcuma 100% pura da raiz do Açafrão da Terra. Potente ação antioxidante e anti-inflamatória natural para blindar suas defesas, articulações e vitalidade.",
    fullDescription: "A Cúrcuma 100% Açafrão da Terra Raiz Vital entrega a essência da Curcuma longa em sua forma mais nobre e preservada. Reconhecida mundialmente por suas propriedades terapêuticas e rica em curcuminoides ativos, esta fórmula atua diretamente no combate às microinflamações celulares cotidianas, proporcionando alívio articular, recuperação pós-esforço e proteção antioxidante profunda para as células do corpo.",
    keyIngredients: ["Cúrcuma pura em pó (Curcuma longa L.)", "Curcuminoides Ativos", "Óleos Essenciais Naturais"],
    mainBenefit: "Ação anti-inflamatória articular, proteção antioxidante celular e suporte contínuo ao sistema imunológico.",
    benefits: [
      {
        title: "Ação Anti-inflamatória Sistêmica",
        description: "Auxilia na modulação de vias inflamatórias corporais, aliviando desconfortos articulares, tendíneos e musculares."
      },
      {
        title: "Escudo Antioxidante Celular",
        description: "Neutraliza radicais livres com eficácia superior, combatendo o envelhecimento precoce dos tecidos."
      },
      {
        title: "Saúde Articular & Flexibilidade",
        description: "Favorece a mobilidade e o conforto articular de praticantes de exercícios e pessoas com dores crônicas."
      },
      {
        title: "Fortalecimento Imunológico",
        description: "Estimula as respostas de defesa do organismo para maior resiliência biológica diária."
      }
    ],
    highlights: [
      "Contém 60 cápsulas de 500mg cada",
      "100% Açafrão da Terra puro (Curcuma longa)",
      "Alta concentração natural de curcuminoides",
      "Sem aditivos, sem conservantes e sem corantes",
      "Embalagem lacrada com segurança máxima"
    ],
    suggestedUse: "Ingerir 2 cápsulas ao dia com um copo de água, preferencialmente junto a uma refeição principal (como almoço ou jantar) para favorecer a absorção dos curcuminoides.",
    storageInfo: "Conservar em local seco, fresco e ao abrigo da luz solar direta. Manter a embalagem bem vedada após cada abertura.",
    ingredientsText: "Cúrcuma em pó (Curcuma longa L.). Cápsula: gelatina vegetal e água.",
    allergenWarning: "NÃO CONTÉM GLÚTEN. NÃO CONTÉM ALÉRGICOS COMUNS."
  },
  {
    id: "capsula-curcuma-haridra-kumari",
    slug: "curcuma-babosa-haridra-kumari",
    name: "Cúrcuma com Babosa (Haridra Kumari)",
    fullName: "Cúrcuma com Babosa Haridra Kumari 500mg - Raiz Vital",
    subtitle: "Sinergia Ayurvédica para saúde gástrica, regeneração e desintoxicação",
    tagline: "A aliança milenar da Cúrcuma (Haridra) com o poder cicatrizante da Babosa (Kumari).",
    category: "Equilíbrio Digestivo & Regeneração",
    badge: "Sinergia Ayurvédica • Haridra Kumari",
    badgeColor: "bg-[#2d5236]",
    capsulesCount: "60 Cápsulas",
    dosage: "500mg",
    spec: "Contém 60 Cápsulas | 500mg",
    price: 59.90,
    priceFormatted: "R$ 59,90",
    originalPriceFormatted: "R$ 79,90",
    mercadoLivreUrl: DEFAULT_MERCADO_LIVRE_URL,
    image: "/novos-produtos/curcuma-haridra.jpeg",
    shortDescription: "Fórmula inspirada na medicina tradicional Ayurvédica unindo Cúrcuma e Babosa (Aloe Vera). Proporciona regeneração celular, conforto para o trato digestivo e ação purificadora.",
    fullDescription: "Haridra Kumari é a reverenciada combinação ayurvédica entre a Cúrcuma (Haridra) e a Babosa (Kumari / Aloe Vera). Enquanto a curcumina oferece uma potente ação anti-inflamatória e protetora, os polissacarídeos e mucilagens da Aloe Vera atuam acalmando e regenerando a mucosa gástrica e intestinal. O resultado é um composto único que restaura a harmonia digestiva, alivia queimações, apoia a desintoxicação hepática e revitaliza a imunidade de dentro para fora.",
    keyIngredients: ["Cúrcuma (Curcuma longa)", "Extrato de Babosa (Aloe vera L.)", "Polissacarídeos Bioativos"],
    mainBenefit: "Proteção da mucosa gástrica, regeneração celular, conforto digestivo e ação anti-inflamatória sinérgica.",
    benefits: [
      {
        title: "Proteção da Mucosa Estomacal & Intestinal",
        description: "A Aloe Vera age como um bálsamo biológico protetor das paredes gástricas, auxiliando no alívio de refluxo, acidez e desconfortos estomacais."
      },
      {
        title: "Ação Anti-inflamatória Potencializada",
        description: "A fusão de curcumina com os ativos da babosa proporciona um alívio anti-inflamatório holístico e equilibrado."
      },
      {
        title: "Suporte à Desintoxicação Hepática",
        description: "Ajuda o fígado a metabolizar e eliminar toxinas acumuladas, revitalizando o organismo."
      },
      {
        title: "Sabedoria Ayurvédica Autêntica",
        description: "Formulação balanceada de acordo com os princípios tradicionais de purificação e rejuvenescimento biológico."
      }
    ],
    highlights: [
      "Contém 60 cápsulas de 500mg cada",
      "Combinação nobre de Cúrcuma pura com Aloe Vera (Babosa)",
      "Acalma o trato gastrointestinal e previne azia e desconforto",
      "100% natural, sem corantes e livre de solventes químicos",
      "Lacre hermético protetor"
    ],
    suggestedUse: "Tomar 2 cápsulas ao dia com bastante água, preferencialmente 15 a 30 minutos antes do almoço ou conforme orientação de profissional de saúde.",
    storageInfo: "Armazenar em local seco, fresco e arejado. Proteger do calor excessivo e da luz solar.",
    ingredientsText: "Cúrcuma em pó (Curcuma longa), extrato concentrado de Babosa desidratada (Aloe vera). Cápsula: gelatina vegetal e água purificada.",
    allergenWarning: "NÃO CONTÉM GLÚTEN. NÃO CONTÉM LACTOSE."
  },
  {
    id: "capsula-curcuma-pimenta-preta",
    slug: "curcuma-com-pimenta-preta",
    name: "Cúrcuma com Pimenta Preta",
    fullName: "Cúrcuma com Pimenta Preta (Piperina) 500mg - Raiz Vital",
    subtitle: "Máxima absorção celular com biodisponibilidade ampliada em até 2000%",
    tagline: "A consagrada união de Curcuma longa e Piperina (Piper nigrum) validada pela ciência.",
    category: "Máxima Biodisponibilidade & Articulações",
    badge: "+2000% Biodisponibilidade • Piperina",
    badgeColor: "bg-[#253942]",
    capsulesCount: "60 Cápsulas",
    dosage: "500mg",
    spec: "Contém 60 Cápsulas | 500mg",
    price: 54.90,
    priceFormatted: "R$ 54,90",
    originalPriceFormatted: "R$ 74,90",
    mercadoLivreUrl: DEFAULT_MERCADO_LIVRE_URL,
    image: "/novos-produtos/curcuma-pimenta.jpeg",
    shortDescription: "A clássica fórmula ouro da nutrição funcional: a curcumina combinada à piperina da pimenta preta, que aumenta a absorção no organismo em até 20 vezes para máxima eficácia anti-inflamatória.",
    fullDescription: "A curcumina pura possui uma taxa de absorção naturalmente desafiadora no organismo quando consumida isolada. Ao combiná-la com a piperina natural da Pimenta Preta (Piper nigrum), a absorção intestinal é multiplicada em até 2000%. Esta fórmula garante que cada miligrama de curcuminoide seja aproveitado ao máximo pelas suas células, entregando alívio rápido para dores articulares, proteção contra o desgaste das cartilagens e renovação celular de alta potência.",
    keyIngredients: ["Cúrcuma pura em pó (Curcuma longa)", "Pimenta Preta em pó (Piper nigrum)", "Piperina Ativa"],
    mainBenefit: "Absorção máxima de curcuminoides no sangue, alívio de dores nas articulações e potente regeneração celular.",
    benefits: [
      {
        title: "Biodisponibilidade Ampliada em até 2000%",
        description: "A piperina inibe o metabolismo hepático rápido da curcumina, permitindo que ela permaneça ativa no sangue por muito mais tempo."
      },
      {
        title: "Alívio Rápido de Dores Articulares & Rigidez",
        description: "Eficácia comprovada no alívio de desconfortos nos joelhos, ombros, coluna e mãos após esforço físico ou com o avanço da idade."
      },
      {
        title: "Combate ao Estresse Oxidativo Sistêmico",
        description: "Fitoquímicos nobres que combatem o envelhecimento celular precoce e reforçam a integridade vascular."
      },
      {
        title: "Apoio à Saúde Cerebral & Imunidade",
        description: "Suporte neuroprotetor e modulação equilibrada dos processos de defesa do organismo."
      }
    ],
    highlights: [
      "Contém 60 cápsulas de 500mg cada",
      "Proporção ideal e segura de Cúrcuma e Pimenta Preta",
      "Absorção e aproveitamento até 20 vezes superior",
      "Livre de transgênicos, lactose e corantes químicos",
      "Ideal para atletas e pessoas com dores articulares"
    ],
    suggestedUse: "Sugere-se a ingestão de 2 cápsulas ao dia, preferencialmente após as refeições principais com auxílio de água.",
    storageInfo: "Conservar em temperatura ambiente, longe de fontes de calor e umidade. Manter bem fechado.",
    ingredientsText: "Cúrcuma em pó (Curcuma longa), pimenta preta em pó (Piper nigrum). Cápsula: gelatina vegetal e água purificada.",
    allergenWarning: "NÃO CONTÉM GLÚTEN. NÃO CONTÉM LACTOSE."
  },
  {
    id: "capsula-gengibre",
    slug: "gengibre",
    name: "Gengibre",
    fullName: "Gengibre 500mg em Cápsulas - Raiz Vital",
    subtitle: "Ação termogênica natural, aceleração metabólica e conforto digestivo",
    tagline: "Concentrado nobre do rizoma de Zingiber officinale rico em gingeróis e shogaóis.",
    category: "Termogênico & Digestão",
    badge: "Termogênico Natural • Gingerol",
    badgeColor: "bg-[#9c511e]",
    capsulesCount: "60 Cápsulas",
    dosage: "500mg",
    spec: "Contém 60 Cápsulas | 500mg",
    price: 49.90,
    priceFormatted: "R$ 49,90",
    originalPriceFormatted: "R$ 69,90",
    mercadoLivreUrl: DEFAULT_MERCADO_LIVRE_URL,
    image: "/novos-produtos/gengibre.jpeg",
    shortDescription: "O Gengibre em cápsulas da Raiz Vital fornece compostos termogênicos que auxiliam na queima calórica, ativam o metabolismo, reduzem o inchaço estomacal e fortalecem o sistema imune.",
    fullDescription: "O Gengibre em Cápsulas Raiz Vital preserva integralmente os gingeróis e óleos voláteis do rizoma fresco da Zingiber officinale. Sua ação termogênica fisiológica estimula o gasto energético basal sem provocar palpitações ou ansiedade comum em estimulantes sintéticos. Além disso, é um dos tônicos digestivos mais tradicionais da fitoterapia, aliviando sensações de estufamento, gases, digestão lenta e reforçando as vias respiratórias.",
    keyIngredients: ["Gengibre em pó desidratado (Zingiber officinale)", "Gingeróis Bioativos", "Shogaóis"],
    mainBenefit: "Aceleração do metabolismo basal, suporte à queima de gordura, alívio de estufamento e reforço imunológico.",
    benefits: [
      {
        title: "Ação Termogênica Limpa & Natural",
        description: "Estimula o consumo calórico e a oxigenação celular de forma fisiológica, sem picos de adrenalina ou agitação."
      },
      {
        title: "Digestão Ágil & Fim do Estufamento",
        description: "Acelera o esvaziamento gástrico, aliviando a sensação de peso, azia e gases após as refeições."
      },
      {
        title: "Ação Anti-náusea Comprovada",
        description: "Auxilia no alívio de enjoo, náuseas de movimento e indisposições estomacais com eficácia clínica."
      },
      {
        title: "Fortalecimento das Vias Respiratórias & Imunidade",
        description: "Propriedades antimicrobianas e antioxidantes que blindam o sistema imunológico ao longo do ano."
      }
    ],
    highlights: [
      "Contém 60 cápsulas de 500mg cada",
      "Gengibre 100% puro e desidratado com rigor técnico",
      "Alta concentração de gingeróis naturais",
      "Termogênico suave e seguro para a rotina diária",
      "Livre de cafeína sintética, corantes e glúten"
    ],
    suggestedUse: "Sugere-se a ingestão de 2 cápsulas ao dia com um copo de água, de preferência pela manhã ou antes das principais refeições. Evitar o consumo tarde da noite caso seja sensível a termogênicos.",
    storageInfo: "Manter o frasco em local seco e fresco, fechado após o uso e protegido da luz solar direta.",
    ingredientsText: "Gengibre puro em pó desidratado (Zingiber officinale Roscoe). Cápsula: gelatina vegetal e água purificada.",
    allergenWarning: "NÃO CONTÉM GLÚTEN. NÃO CONTÉM LACTOSE."
  }
];

export const getCapsuleProductBySlug = (slug: string): CapsuleProduct | undefined => {
  return capsuleProducts.find(p => p.slug === slug || p.id === slug);
};
