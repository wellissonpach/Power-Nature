import { IngredientItem } from '../types';

export const ingredientsCatalogData: IngredientItem[] = [
  {
    id: "beterraba",
    name: "Beterraba em Pó Desidratada",
    scientificOrType: "Beta vulgaris",
    origin: "Cultivo Nacional Selecionado",
    role: "Melhora Saúde Cardiovascular; Melhora Energia; Antioxidante.",
    benefits: [
      "Melhora Saúde Cardiovascular",
      "Melhora Energia",
      "Antioxidante"
    ],
    description: "Desidratada em processo controlado para preservar seus nutrientes naturais, a beterraba é uma das raízes mais valorizadas na nutrição funcional para quem mantém uma rotina ativa e dinâmica.",
    badge: "Raiz Funcional",
    image: "/beterraba-po.webp"
  },
  {
    id: "baru",
    name: "Castanha de Baru do Cerrado",
    scientificOrType: "Dipteryx alata Vogel",
    origin: "Cerrado Brasileiro",
    role: "Ajuda a ganhar músculos e sacia a fome; Protege o coração; Previne a anemia; Combate o envelhecimento.",
    benefits: [
      "Ajuda a ganhar músculos e sacia a fome",
      "Protege o coração",
      "Previne a anemia",
      "Combate o envelhecimento"
    ],
    description: "Fruto autêntico da biodiversidade do Cerrado, a castanha de baru passa por torra e micronização cuidadosas para agregar sabor marcante e densidade nutricional autêntica aos produtos da Raiz Vital.",
    badge: "Bioma Brasileiro",
    image: "/castanha-de-baru.webp"
  }
];
