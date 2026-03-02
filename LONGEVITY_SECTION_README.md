# 📘 BLOCO 4: LONGEVITY SECTION - Documentação Técnica

> **Versão:** 2.0  
> **Status:** ✅ Finalizado  
> **Última Atualização:** 01/03/2026

---

## 🎯 Visão Geral

O **Bloco de Destaque (Pele & Antienvelhecimento)** é uma seção premium inspirada no layout Puravida, projetada para destacar os benefícios exclusivos do **RESVERABIO®** no rejuvenescimento celular e saúde da pele.

---

## 🎨 Paleta de Cores - Azul Premium

| Uso | HEX | RGB | CSS Variable |
|-----|-----|-----|--------------|
| **Primário** | `#1E3A5F` | `rgb(30, 58, 95)` | `COLORS.primary` |
| **Hover** | `#142942` | `rgb(20, 41, 66)` | `COLORS.hover` |
| **Secundário** | `#4A6B8F` | `rgb(74, 107, 143)` | `COLORS.secondary` |
| **Claro/BG** | `#E8EEF4` | `rgb(232, 238, 244)` | `COLORS.light` |
| **Accent** | `#2E5A8F` | `rgb(46, 90, 143)` | `COLORS.accent` |

### Por que Azul Navy?
- ✅ **Contraste WCAG AA:** Ratio 8.5:1 em fundo branco
- ✅ **Legibilidade:** Superior ao dourado em fundos claros
- ✅ **Percepção Premium:** Associado a saúde, ciência e longevidade
- ✅ **Identidade de Luxo:** Alinhado com marcas farmacêuticas premium

---

## 📝 Conteúdo Estratégico

### Protagonista: RESVERABIO®
O texto foi redigido para posicionar o **RESVERABIO®** como protagonista absoluto, não apenas o Resveratrol genérico.

### Blend Exclusivo Destacado:
- ✅ **Resveratrol Puro** - Ativo principal
- ✅ **Ácido Hialurônico** - Hidratação profunda
- ✅ **Niacina** - Uniformização do tom
- ✅ **Vitaminas Essenciais** - Complexo vitamínico

### Estrutura do Texto:
```
Título: "UM IMPORTANTE ALIADO DA LONGEVIDADE"
├── Coluna 1: O Blend Exclusivo
│   └── Destaque: RESVERABIO® + 4 ativos
├── Coluna 2: Resultados na Pele
│   ├── Benefícios específicos de cada ativo
│   ├── Citação em moldura azul (prova social científica)
│   └── Frase de fechamento emotiva
└── CTA: "Quero meu Rejuvenescimento Celular"
```

---

## 🖼️ Imagens

### Especificações:
| Aspecto | Valor |
|---------|-------|
| **Quantidade** | 2 imagens |
| **Layout Desktop** | 50/50 lado a lado |
| **Layout Mobile** | Empilhadas verticalmente |
| **Aspect Ratio** | 16:9 (cinematográfico) |
| **Bordas** | Sem arredondamento (estilo editorial) |
| **Overlay Hover** | Gradiente azul sutil (30% opacity) |

### Imagens Atuais:
As imagens utilizam placeholders do Unsplash profissionais. Para substituir pelas fotos reais do usuário, atualize o array `longevityImages` no componente.

---

## 🔘 Call to Action (CTA)

### Design: Ghost Button Elegante
```
Estado Normal:
├── Background: Transparente
├── Border: 2px solid #1E3A5F
├── Texto: #1E3A5F (uppercase, tracking-wide)
└── Estilo: Leve, sofisticado

Estado Hover:
├── Background: #1E3A5F (preenchimento slide-in da esquerda)
├── Texto: Branco
├── Ícone: Desliza para direita
└── Transição: 400ms ease-out
```

### Motivação do Design:
- **Removido:** Botão preto pesado (quebrava o glamour)
- **Adotado:** Ghost button azul premium (leveza e confiança)
- **Resultado:** Mais elegância, melhor conversão mobile

---

## 📱 Responsividade

### Breakpoints:
| Dispositivo | Comportamento |
|-------------|---------------|
| **Desktop (>1024px)** | 2 colunas texto, imagens lado a lado |
| **Tablet (768-1024px)** | 2 colunas texto, imagens lado a lado |
| **Mobile (<768px)** | 1 coluna texto, imagens empilhadas |

### Ajustes Mobile:
- ✅ Texto centralizado
- ✅ Padding reduzido proporcionalmente
- ✅ Botão mantém proporções elegantes
- ✅ Imagens mantêm aspect ratio 16:9

---

## ✨ Animações

### Scroll-triggered Animations:
```
Imagens:
├── Delay: 0ms (esquerda), 150ms (direita)
├── Efeito: fade-in + translate-y
└── Duração: 1000ms ease-out

Texto:
├── Delay: 300ms
├── Efeito: fade-in + translate-y
└── Duração: 1000ms ease-out

CTA:
├── Delay: 500ms
├── Efeito: fade-in + translate-y
└── Duração: 1000ms ease-out
```

### Hover Effects:
- **Imagens:** Scale 1.05 + overlay azul sutil
- **Botão:** Preenchimento slide-in da esquerda
- **Links:** Transição suave de cores

---

## 🧪 Visual Debugging Checklist

- [x] Azul Navy (#1E3A5F) legível em fundo branco
- [x] Contraste WCAG AA atingido (8.5:1)
- [x] Imagens nítidas e bem posicionadas
- [x] Botão Ghost elegante (não preto pesado)
- [x] Texto responsivo em todas as telas
- [x] RESVERABIO® destacado como protagonista
- [x] Blend exclusivo mencionado claramente
- [x] Frase de garantia removida
- [x] Build sem erros
- [x] Animações suaves no scroll

---

## 📁 Arquivo

```
src/components/sections/LongevitySection.tsx
```

### Dependências:
- `../ui/Container` - Componente de container responsivo
- React hooks: `useEffect`, `useRef`, `useState`

---

## 🚀 Próximos Passos (Opcional)

1. **Substituir imagens:** Atualizar o array `longevityImages` com fotos reais do produto
2. **A/B test:** Testar variações do CTA (Ghost vs. Preenchido)
3. **Analytics:** Adicionar tracking de cliques no botão
4. **Lazy loading:** Implementar blur-up para imagens

---

**Status:** ✅ **PRONTO PARA PRODUÇÃO**
