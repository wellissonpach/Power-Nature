# Power Nature | Pré-Treino Beterraba e Baru (300g)

Landing page institucional e de alta conversão para o suplemento funcional **Power Nature Pré-Treino de Beterraba & Baru**. Desenvolvida com foco em design sofisticado no estilo *Natural Tones*, alta velocidade de carregamento, responsividade total e transparência regulatória.

---

## 🌿 Sobre o Produto

O **Power Nature** une a riqueza nutricional da **raiz de beterraba** (fonte natural de nitratos que auxiliam no fluxo e oxigenação celular) com as propriedades da **castanha de baru** do Cerrado brasileiro (proteínas vegetais, antioxidantes e minerais como zinco e magnésio).

- **Peso Líquido:** 300g (rende ~30 porções de 10g)
- **Origem:** Ingredientes botânicos 100% plant-based
- **Diferenciais:** Zero cafeína sintética, sem adição de açúcares, sem lactose ou glúten

---

## ✨ Funcionalidades e Seções

1. **Header Fixo & Navegação Fluida:** Acesso rápido às seções e botão de compra direta.
2. **Hero Section:** Apresentação do produto, principais selos de qualidade e chamada para ação com renderização visual 3D do pote.
3. **Benefícios Funcionais:** 4 pilares de performance (Vasodilatação natural, aporte sustentado de energia, nutrição do Cerrado e digestibilidade leve).
4. **Deep Dive de Ingredientes:**
   - *Beterraba & Nitrato:* Explicação sobre a via do óxido nítrico e oxigenação.
   - *Castanha de Baru:* Riqueza botânica, perfil de micronutrientes e biodiversidade do Cerrado.
5. **Filosofia da Marca:** Conexão com o ritual de treino e respeito à fisiologia corporal.
6. **Tabela Comparativa de Diferenciais:** Comparativo entre o Pré-Treino Power Nature e fórmulas convencionais ultraprocessadas.
7. **Público & Casos de Uso:** Cards direcionados para corredores, ciclistas, praticantes de musculação e entusiastas da vida saudável.
8. **Configurador de Ofertas & Kits:**
   - Seleção de 1 Pote (Experimentação), 2 Potes (Tratamento) ou 3 Potes (Melhor Custo-Benefício).
   - Simulador de CEP e prazo de frete.
   - Validador de cupom de desconto promocional (`PRIMEIRACOMPRA`).
   - Cálculo automático e dinâmico de parcelas e descontos.
9. **Modo de Uso:** Passo a passo prático de preparo e consumo sugerido.
10. **Compromisso, Confiança & Avaliações:** Pilares de segurança, rastreabilidade e espaço de avaliações verificadas.
11. **Perguntas Frequentes (FAQ):** Accordion interativo com as dúvidas mais comuns.
12. **Comunidade Digital & Instagram:** Vitrine com links diretos para o perfil oficial da marca (@araizvital).
13. **Modais Interativos:**
    - Modal de Tabela Nutricional & Rótulo Completo.
    - Modal de Checkout Seguro com seleção de forma de pagamento (Pix, Cartão, Boleto).
    - Modais de Termos de Uso e Política de Privacidade (LGPD).
14. **CTA Flutuante Mobile:** Barra inferior com compra em 1 clique em dispositivos móveis.

---

## 🛠️ Tecnologias Utilizadas

- **Framework:** [React 19](https://react.dev/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server:** [Vite 6](https://vitejs.dev/)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animações:** [Motion](https://motion.dev/)
- **Ícones:** [Lucide React](https://lucide.dev/)

---

## 📁 Estrutura de Pastas

```text
├── src/
│   ├── components/            # Componentes modulares da landing page
│   │   ├── Audience.tsx       # Seção de público-alvo
│   │   ├── BaruSection.tsx    # Destaque da Castanha de Baru
│   │   ├── BeetrootSection.tsx# Destaque da Beterraba & Nitratos
│   │   ├── Benefits.tsx       # Benefícios principais
│   │   ├── CheckoutModal.tsx  # Modal de finalização de compra
│   │   ├── Differentials.tsx  # Tabela comparativa
│   │   ├── FAQ.tsx            # Accordion de perguntas frequentes
│   │   ├── FinalCTA.tsx       # Seção final de conversão
│   │   ├── FloatingMobileCTA.tsx # Botão flutuante mobile
│   │   ├── Footer.tsx         # Rodapé institucional e links legais
│   │   ├── Header.tsx         # Cabeçalho e navegação
│   │   ├── Hero.tsx           # Seção principal de apresentação
│   │   ├── HowToUse.tsx       # Guia de consumo e preparo
│   │   ├── InstagramSection.tsx # Feed e link para o Instagram
│   │   ├── LegalModals.tsx    # Termos e Política de Privacidade
│   │   ├── NutritionModal.tsx # Tabela nutricional oficial
│   │   ├── PhilosophySection.tsx # Manifesto da marca
│   │   ├── ProductJarVisual.tsx # Visual realista do pote 300g
│   │   ├── ProductOffer.tsx   # Seletor de kits, frete e cupom
│   │   └── TrustProof.tsx     # Prova de qualidade e avaliações
│   ├── config/
│   │   └── product.ts         # Dados de preços, kits, FAQ e tabela nutricional
│   ├── utils/
│   │   └── analytics.ts       # Disparo de eventos e rastreamento
│   ├── types.ts               # Tipos TypeScript compartilhados
│   ├── App.tsx                # Componente raiz da aplicação
│   ├── index.css              # Importação do Tailwind CSS
│   └── main.tsx               # Ponto de entrada do React
├── metadata.json              # Configurações de metadados da aplicação
├── package.json               # Dependências e scripts do projeto
└── tsconfig.json              # Configuração do compilador TypeScript
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- Gerenciador de pacotes npm, yarn ou bun

### Instalação

```bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev

# 3. Compilar para produção
npm run build

# 4. Executar verificação de tipos (Lint)
npm run lint
```

O servidor iniciará localmente na porta padrão (`http://localhost:3000`).

---

## 📜 Licença e Transparência

Este projeto é desenvolvido para o comércio e apresentação do suplemento alimentar **Power Nature**. Todas as informações nutricionais e advertências respeitam as diretrizes de rotulagem de alimentos e suplementos funcionais.
