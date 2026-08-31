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
    description: `Por que a beterraba é uma potência contra a inflamação?

O vegetal atua de forma direta e indireta no organismo por meio de três pilares principais:

Betalaínas: São os pigmentos que dão a cor roxa intensa à beterraba. Elas atuam diretamente bloqueando marcadores inflamatórios e citocinas (como a proteína C reativa e o TNF-alpha), aliviando o estresse oxidativo das células.

Nitratos Naturais: O organismo converte esses nitratos em óxido nítrico. Esse gás relaxa e dilata os vasos sanguíneos, melhorando o fluxo de sangue, reduzindo a pressão arterial e diminuindo a sobrecarga mecânica e inflamatória no sistema cardiovascular.

Peptídeos Específicos: Cientistas austríacos isolaram moléculas da beterraba capazes de inibir enzimas associadas a doenças inflamatórias e neurodegenerativas.`,
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
    description: "A castanha de baru é a castanha com maior quantidade de proteínas da natureza (cerca de 30%), mas também está entre as que tem menos gorduras (em torno de 37%). O baru traz uma combinação única de Zinco e vitamina E, que atua diretamente na saúde imunológica e regulação hormonal. Poderosa em antioxidantes: possui também alta capacidade ORAC (poder antioxidante), cerca de 7.460 a 21.000 µmol TE, mais que o dobro da média dentre as castanhas da natureza.",
    badge: "Bioma Brasileiro",
    image: "/castanha-de-baru.webp"
  }
];
