import { ProductItem } from '../types';
import { productConfig } from '../config/product';

export const productsList: ProductItem[] = [
  {
    id: "power-nature",
    slug: "power-nature",
    name: "Power Nature",
    headline: "Pré-Treino Beterraba & Baru",
    subtitle: "Nutrição funcional e energia natural à base de plantas.",
    category: "Pré-Treino / Nutrição Funcional",
    categoryBadge: "Produto Protagonista",
    weight: "300g • Rende até 30 porções",
    shortDescription: "O Power Nature, é um suplemento alimentar desenvolvido com beterraba em pó desidratada, castanha de baru do Cerrado e proteína vegetal isolada. Entrega nutrição limpa sem corantes artificiais",
    fullDescription: "O Power Nature, é um suplemento alimentar desenvolvido com beterraba em pó desidratada, castanha de baru do Cerrado e proteína vegetal isolada. Entrega nutrição limpa sem corantes artificiais",
    image: "/imagem-hero.webp",
    keyIngredients: ["Beterraba em Pó", "Castanha de Baru", "Proteína Vegetal"],
    mainBenefit: "Resistência natural, vitalidade e suporte para treinos e rotinas ativas sem picos artificiais.",
    status: "active",
    badge: "Disponível • Mais Vendido",
    href: "/produtos/power-nature",
    packs: productConfig.packs,
    nutritionTable: productConfig.nutritionTable
  },
  {
    id: "vital-immunity",
    slug: "vital-immunity",
    name: "Vital Imuno Shot",
    headline: "Superalimento Diário & Defesa",
    subtitle: "Complexo botânico concentrado para o equilíbrio imunológico diário.",
    category: "Saúde Diária / Imunidade",
    categoryBadge: "Em Breve",
    weight: "150g • Rende 30 doses",
    shortDescription: "Blend concentrado de cúrcuma, própolis verde brasileira, camu-camu e gengibre orgânico em pó solúvel.",
    fullDescription: "Desenvolvido para fortalecer as defesas naturais do organismo com fitoquímicos nobres da biodiversidade brasileira.",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800&auto=format&fit=crop",
    keyIngredients: ["Cúrcuma", "Própolis Verde", "Camu-Camu", "Gengibre"],
    mainBenefit: "Aporte de antioxidantes naturais e suporte imunológico com facilidade no ritual matinal.",
    status: "coming_soon",
    badge: "Próximo Lançamento",
    href: "#"
  },
  {
    id: "vital-protein-pure",
    slug: "vital-protein-pure",
    name: "Proteína Nativa Cerrado",
    headline: "Proteína Vegetal Isolada & Enzimas",
    subtitle: "Nutrição proteica vegetal nobre com alto teor de aminoácidos essenciais.",
    category: "Recuperação / Proteína Plant-Based",
    categoryBadge: "Em Desenvolvimento",
    weight: "600g • Rende 20 doses",
    shortDescription: "Proteína isolada de ervilha amarela e castanha de baru com textura aveludada e digestão ultraleve.",
    fullDescription: "Criada para atletas e praticantes de atividades que buscam síntese proteica e saciedade com ingredientes puros e sabor natural.",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=800&auto=format&fit=crop",
    keyIngredients: ["Proteína de Ervilha", "Farinha de Baru", "Enzimas Digestivas"],
    mainBenefit: "22g de proteína vegetal pura por dose com digestibilidade superior e zero lactose.",
    status: "coming_soon",
    badge: "Em Desenvolvimento",
    href: "#"
  }
];

export const getProductBySlug = (slug: string): ProductItem | undefined => {
  return productsList.find(p => p.slug === slug || p.id === slug);
};
