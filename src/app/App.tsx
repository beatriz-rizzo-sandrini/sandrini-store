import { useState, useEffect, useRef } from "react";
import {
  ShoppingBag,
  Search,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  Heart,
  Star,
  Instagram,
  Youtube,
  Facebook,
  Check,
  Copy,
  Truck,
  RotateCcw,
  Tag,
  ShieldCheck,
  CreditCard,
  User,
  Flame,
  Play,
  Share2,
  Sparkles,
  ArrowRight,
  Lock,
  Percent,
  SlidersHorizontal,
} from "lucide-react";
import logoImg from "@/imports/logonew-v1-01.png";
import logoFooterImg from "@/imports/logo_cortado.png";

// Import imagens do repositório
const globImages = import.meta.glob('@/imports/**/*.{jpg,png,webp}', { eager: true, import: 'default' }) as Record<string, string>;
import heroBanner1Img from "@/imports/BANNERS PRINCIPAIS 1400X900/1/1400x900.jpg";
import heroBanner2Img from "@/imports/BANNERS PRINCIPAIS 1400X900/2/1400x900.jpg";
import banner1400x400Img from "@/imports/BANNER 1400X400/1400X400.jpg";

import tenisCasualCategoriaImg from "@/imports/FOTOS DE CAPA DAS CATEGORIAS/TÊNIS CASUAL/TÊNIS-CASUAL-500X500.jpg";
import undewearCategoriaImg from "@/imports/FOTOS DE CAPA DAS CATEGORIAS/UNDERWEAR/UNDERWEAR-500X500.jpg";
import fitnessCategoriaImg from "@/imports/FOTOS DE CAPA DAS CATEGORIAS/FITNESS/FITNESS-500X500.jpg";
import basicosCategoriaImg from "@/imports/FOTOS DE CAPA DAS CATEGORIAS/BÁSICOS/BASICOS-500X500.jpg";
import tenisEsportivoCategoriaImg from "@/imports/FOTOS DE CAPA DAS CATEGORIAS/TÊNIS ESPORTIVO/TÊNIS-ESPORTIVO-500X500.jpg";

import camisetaEssenciaisImg from "@/imports/ESSENCIAIS/CAMISETAS/CAMISETAS-800X800.jpg";
import shortsEssenciaisImg from "@/imports/ESSENCIAIS/SHORTS/SHORTS-800X800.jpg";
import tenisEssenciaisImg from "@/imports/ESSENCIAIS/TÊNIS/TENIS 800X800.jpg";
import cuecaEssenciaisImg from "@/imports/ESSENCIAIS/CUECAS/CUECA-800X800.jpg";
import meiaEssenciaisImg from "@/imports/ESSENCIAIS/MEIAS/MEIAS-800X800.jpg";
import relogioEssenciaisImg from "@/imports/ESSENCIAIS/RELÓGIOS/RELOGIOS-800X800.jpg";

import n1MaisVendidosImg from "@/imports/MAIS VENDIDOS/1-CUECA-ALGODÃO-SANDRINI.jpg";
import n2MaisVendidosImg from "@/imports/MAIS VENDIDOS/2-KIT-4-DRY-FIT-SANDRINI.jpg";
import n3MaisVendidosImg from "@/imports/MAIS VENDIDOS/3-KIT-15-MEIAS-CANO-MEDIO-SANDRINI.jpg";
import n4MaisVendidosImg from "@/imports/MAIS VENDIDOS/4-KIT-3-CAMISETAS-ALGODÃO-SANDRINI.jpg";
import n5MaisVendidosImg from "@/imports/MAIS VENDIDOS/5-KIT-4-BERMUDAS-TACTEL-SANDRINI.jpg";
import n6MaisVendidosImg from "@/imports/MAIS VENDIDOS/6-AERO-RUN-SANDRINI.jpg";
import n7MaisVendidosImg from "@/imports/MAIS VENDIDOS/7-KIT-3-REGATAS-DRY-SANDRINI.jpg";
import n8MaisVendidosImg from "@/imports/MAIS VENDIDOS/8 SPRYTE-SANDRINI.jpg";
import n9MaisVendidosImg from "@/imports/MAIS VENDIDOS/9-KIT-2-BERMUDAS-COMPRESSÃO-SANDRINI.jpg";
import n10MaisVendidosImg from "@/imports/MAIS VENDIDOS/10-AERO-SPARK-SANDRINI.jpg";
import n11MaisVendidosImg from "@/imports/MAIS VENDIDOS/11-SHORT-LINHO-SANDRINI.jpg";
import n12MaisVendidosImg from "@/imports/MAIS VENDIDOS/12-KIT-12-MEIAS-SOQUETE-SANDRINI.jpg";

import tenisAeroRunImg from "@/imports/Tênis Aero Run - Sandrini/PRETO E CINZA/TSSF1801005PTOCINZA-01.jpg";
import tenisAeroRunAmareloImg from "@/imports/Tênis Aero Run - Sandrini/BRANCO PRETO E AMARELO/TSSF1801118BCOPTOAMARELO-01.jpg";
import tenisAeroRunVermelhoImg from "@/imports/Tênis Aero Run - Sandrini/PRETO PRETO E VERMELHO/TSSF1801012PTOPTOVERMELHO-01.jpg";

import tenisAeroSparkBrancoImg from "@/imports/Tênis Aero Spark - Sandrini/BRANCO CINZA E LARANJA/TênisMasculinoSandriniAeroSparkBranco408-CAPA.jpg";
import tenisAeroSparkPretoImg from "@/imports/Tênis Aero Spark - Sandrini/PRETO E LARANJA/TênisMasculinoSandriniAeroSparkPreto034-CAPA.jpg";
import tenisAeroSparkVerdeImg from "@/imports/Tênis Aero Spark - Sandrini/VERDE MARINHO/TênisMasculinoSandriniAeroSparkVerde412-CAPA.jpg";

import tenisSpryteBrancoImg from "@/imports/Tênis Spryte - Sandrini/BRANCO GELO/TenisSandriniSpryteMasculinoBranco-CAPA.jpg";
import tenisSprytePretoBrancoImg from "@/imports/Tênis Spryte - Sandrini/PRETO/TenisSandriniSpryteMasculinoPretoBranco-CAPA.jpg";
import tenisSpryteVerdeImg from "@/imports/Tênis Spryte - Sandrini/VERDE/TenisSandriniSpryteMasculinoVerdeMilitar-CAPA.jpg";

import shortsLinhoBegeImg from "@/imports/Shorts Linho - Sandrini/BEGE/ShortLinhoMasculinoSandrini2032CR-CAPA.jpg";
import shortsLinhoPretoImg from "@/imports/Shorts Linho - Sandrini/PRETO/ShortLinhoMasculinoSandriniPreto2159-5.jpg";
import shortsLinhoTerracotaImg from "@/imports/Shorts Linho - Sandrini/TERRACOTA/ShortLinhoMasculinoSandrini2032TC-CAPA.jpg";
import shortsLinhoVerdeImg from "@/imports/Shorts Linho - Sandrini/VERDE MILITAR/ShortLinhoMasculinoSandriniVerdeMilitar-CAPA.jpg";

import kit3CamisetasSortidoImg from "@/imports/Kit 3 Camisas Algodão - Sandrini/Kit3CamisetasAlgodãoSandrini-CAPA.jpg";
import kit3CamisetasBrancoImg from "@/imports/Kit 3 Camisas Algodão - Sandrini/Kit3CamisetasAlgodãoSandriniBranco-CAPA.jpg";
import kit3CamisetasPretoImg from "@/imports/Kit 3 Camisas Algodão - Sandrini/Kit3CamisetasAlgodãoSandriniPreto-CAPA.jpg";

const NAV_LINKS = [
  { label: "LANÇAMENTO", category: "Novidades" },
  { label: "TREINO & ACADEMIA", category: "Fitness" },
  { label: "CORRIDA", category: "Corrida" },
  { label: "ESSENCIAIS", category: "Básicos" },
  { label: "KITS", category: "Kits" },
  { label: "UNDERWEAR", category: "Underwear" },
  { label: "PROMOÇÕES", category: "Promoções" },
];

const TORX_TOPBAR_MESSAGES = [
  "ATÉ 6X SEM JUROS",
  "Frete Grátis para o Sudeste",
  "Frete Grátis acima de R$ 259",
  "Utilize o cupom BEMVINDOSANDRINI e ganhe 7% OFF",
];

const TORX_CATEGORY_GRID = [
  {
    title: "CORRIDA",
    subtitle: "Amortecimento, leveza e alta impulsão",
    category: "Corrida",
    img: tenisEsportivoCategoriaImg,
    badge: "TECNOLOGIA RUNNING",
  },
  {
    title: "TREINO & ACADEMIA",
    subtitle: "Resistência, respirabilidade e alta performance",
    category: "Fitness",
    img: fitnessCategoriaImg,
    badge: "DRY PERFORMANCE",
  },
  {
    title: "ESSENCIAIS & CASUAL",
    subtitle: "Conforto anatômico para todas as ocasiões",
    category: "Básicos",
    img: tenisCasualCategoriaImg,
    badge: "COLEÇÃO 2026",
  },
];

interface ProductColor {
  name: string;
  img: string;
  hex: string;
  folderPath?: string;
}

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number | null;
  img: string;
  secondImg?: string;
  badge?: string;
  discountBadge?: string;
  rating: number;
  reviews: number;
  sizes: string[];
  brand: string;
  colors?: ProductColor[];
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Tênis Sandrini Aero Run Performance",
    category: "Corrida",
    price: 349.90,
    originalPrice: 399.90,
    discountBadge: "13% OFF",
    badge: "NOVO",
    img: n6MaisVendidosImg,
    secondImg: tenisAeroRunImg,
    rating: 4.9,
    reviews: 348,
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    brand: "SANDRINI",
    colors: [
      { name: "Preto/Cinza", img: tenisAeroRunImg, hex: "#4b5563", folderPath: "Tênis Aero Run - Sandrini/PRETO E CINZA" },
      { name: "Branco/Amarelo", img: tenisAeroRunAmareloImg, hex: "#eab308", folderPath: "Tênis Aero Run - Sandrini/BRANCO PRETO E AMARELO" },
      { name: "Preto/Vermelho", img: tenisAeroRunVermelhoImg, hex: "#ef4444", folderPath: "Tênis Aero Run - Sandrini/PRETO PRETO E VERMELHO" },
    ],
  },
  {
    id: 2,
    name: "Tênis Sandrini Aero Spark Treino & Corrida",
    category: "Corrida",
    price: 299.90,
    originalPrice: 339.90,
    discountBadge: "12% OFF",
    badge: "MAIS VENDIDO",
    img: n10MaisVendidosImg,
    secondImg: tenisAeroSparkPretoImg,
    rating: 4.9,
    reviews: 521,
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    brand: "SANDRINI",
    colors: [
      { name: "Branco", img: tenisAeroSparkBrancoImg, hex: "#ffffff", folderPath: "Tênis Aero Spark - Sandrini/BRANCO CINZA E LARANJA" },
      { name: "Preto", img: tenisAeroSparkPretoImg, hex: "#111111", folderPath: "Tênis Aero Spark - Sandrini/PRETO E LARANJA" },
      { name: "Verde", img: tenisAeroSparkVerdeImg, hex: "#166534", folderPath: "Tênis Aero Spark - Sandrini/VERDE MARINHO" },
    ],
  },
  {
    id: 101,
    name: "Tênis Sandrini Aero Run Nitro Pro",
    category: "Corrida",
    price: 349.90,
    originalPrice: 399.90,
    discountBadge: "13% OFF",
    badge: "LANÇAMENTO",
    img: tenisAeroRunAmareloImg,
    secondImg: tenisAeroRunVermelhoImg,
    rating: 4.9,
    reviews: 215,
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    brand: "SANDRINI",
    colors: [
      { name: "Branco/Amarelo", img: tenisAeroRunAmareloImg, hex: "#eab308", folderPath: "Tênis Aero Run - Sandrini/BRANCO PRETO E AMARELO" },
      { name: "Preto/Cinza", img: tenisAeroRunImg, hex: "#4b5563", folderPath: "Tênis Aero Run - Sandrini/PRETO E CINZA" },
      { name: "Preto/Vermelho", img: tenisAeroRunVermelhoImg, hex: "#ef4444", folderPath: "Tênis Aero Run - Sandrini/PRETO PRETO E VERMELHO" },
    ],
  },
  {
    id: 102,
    name: "Tênis Sandrini Aero Spark Speed",
    category: "Corrida",
    price: 299.90,
    originalPrice: 339.90,
    discountBadge: "12% OFF",
    badge: "DESTAQUE",
    img: tenisAeroSparkPretoImg,
    secondImg: tenisAeroSparkVerdeImg,
    rating: 4.8,
    reviews: 189,
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    brand: "SANDRINI",
    colors: [
      { name: "Preto", img: tenisAeroSparkPretoImg, hex: "#111111", folderPath: "Tênis Aero Spark - Sandrini/PRETO E LARANJA" },
      { name: "Branco", img: tenisAeroSparkBrancoImg, hex: "#ffffff", folderPath: "Tênis Aero Spark - Sandrini/BRANCO CINZA E LARANJA" },
      { name: "Verde", img: tenisAeroSparkVerdeImg, hex: "#166534", folderPath: "Tênis Aero Spark - Sandrini/VERDE MARINHO" },
    ],
  },
  {
    id: 3,
    name: "Tênis Sandrini Spryte Grip Academia & Treino",
    category: "Fitness",
    price: 229.90,
    originalPrice: 260.90,
    discountBadge: "12% OFF",
    badge: "LANÇAMENTO",
    img: n8MaisVendidosImg,
    secondImg: tenisSpryteBrancoImg,
    rating: 4.8,
    reviews: 412,
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    brand: "SANDRINI",
    colors: [
      { name: "Preto/Branco", img: tenisSprytePretoBrancoImg, hex: "#111111", folderPath: "Tênis Spryte - Sandrini/PRETO" },
      { name: "Branco/Gelo", img: tenisSpryteBrancoImg, hex: "#ffffff", folderPath: "Tênis Spryte - Sandrini/BRANCO GELO" },
      { name: "Verde Militar", img: tenisSpryteVerdeImg, hex: "#4b5320", folderPath: "Tênis Spryte - Sandrini/VERDE" },
    ],
  },
  {
    id: 4,
    name: "Kit 4 Camisetas Dry Fit Sandrini Performance",
    category: "Fitness",
    price: 99.99,
    originalPrice: 149.99,
    discountBadge: "33% OFF",
    badge: "DESTAQUE",
    img: n2MaisVendidosImg,
    secondImg: n7MaisVendidosImg,
    rating: 4.8,
    reviews: 188,
    sizes: ["P", "M", "G", "GG"],
    brand: "SANDRINI",
  },
  {
    id: 5,
    name: "Kit 2 Bermudas de Compressão Sandrini Treino",
    category: "Fitness",
    price: 78.99,
    originalPrice: 139.99,
    discountBadge: "43% OFF",
    badge: "NOVO",
    img: n9MaisVendidosImg,
    secondImg: n5MaisVendidosImg,
    rating: 4.9,
    reviews: 167,
    sizes: ["P", "M", "G", "GG"],
    brand: "SANDRINI",
  },
  {
    id: 6,
    name: "Kit 10 Cuecas Boxer Algodão Premium Sandrini",
    category: "Underwear",
    price: 99.99,
    originalPrice: 139.99,
    discountBadge: "28% OFF",
    badge: "MAIS VENDIDO",
    img: n1MaisVendidosImg,
    secondImg: cuecaEssenciaisImg,
    rating: 4.9,
    reviews: 645,
    sizes: ["P", "M", "G", "GG"],
    brand: "SANDRINI",
  },
  {
    id: 7,
    name: "Kit 3 Camisetas Algodão Penteado Sandrini",
    category: "Básicos",
    price: 95.72,
    originalPrice: 129.90,
    discountBadge: "26% OFF",
    badge: "ESSENCIAL",
    img: n4MaisVendidosImg,
    secondImg: kit3CamisetasBrancoImg,
    rating: 4.9,
    reviews: 312,
    sizes: ["P", "M", "G", "GG"],
    brand: "SANDRINI",
    colors: [
      { name: "Sortido", img: kit3CamisetasSortidoImg, hex: "#9ca3af" },
      { name: "Branco", img: kit3CamisetasBrancoImg, hex: "#ffffff" },
      { name: "Preto", img: kit3CamisetasPretoImg, hex: "#111111" },
    ],
  },
  {
    id: 8,
    name: "Shorts Linho Premium Alfaiataria Sandrini",
    category: "Básicos",
    price: 89.90,
    originalPrice: 129.90,
    discountBadge: "30% OFF",
    badge: "NOVO",
    img: n11MaisVendidosImg,
    secondImg: shortsLinhoBegeImg,
    rating: 4.8,
    reviews: 145,
    sizes: ["P", "M", "G", "GG"],
    brand: "SANDRINI",
    colors: [
      { name: "Bege", img: shortsLinhoBegeImg, hex: "#d6c5b3" },
      { name: "Preto", img: shortsLinhoPretoImg, hex: "#111111" },
      { name: "Terracota", img: shortsLinhoTerracotaImg, hex: "#c86d51" },
      { name: "Verde Militar", img: shortsLinhoVerdeImg, hex: "#4b5320" },
    ],
  },
  {
    id: 9,
    name: "Kit 15 Meias Cano Médio Sandrini Sport",
    category: "Underwear",
    price: 109.99,
    originalPrice: 149.99,
    discountBadge: "26% OFF",
    badge: "OFERTA",
    img: n3MaisVendidosImg,
    secondImg: meiaEssenciaisImg,
    rating: 4.7,
    reviews: 132,
    sizes: ["Único (38-43)"],
    brand: "SANDRINI",
  },
  {
    id: 10,
    name: "Kit 4 Bermudas Tactel Sandrini Active",
    category: "Fitness",
    price: 124.99,
    originalPrice: 169.90,
    discountBadge: "26% OFF",
    badge: "POPULAR",
    img: n5MaisVendidosImg,
    secondImg: shortsEssenciaisImg,
    rating: 4.8,
    reviews: 194,
    sizes: ["P", "M", "G", "GG"],
    brand: "SANDRINI",
  },
  {
    id: 11,
    name: "Kit 3 Regatas Dry Fit Sandrini Training",
    category: "Fitness",
    price: 81.99,
    originalPrice: 119.90,
    discountBadge: "31% OFF",
    badge: "NOVO",
    img: n7MaisVendidosImg,
    secondImg: camisetaEssenciaisImg,
    rating: 4.9,
    reviews: 167,
    sizes: ["P", "M", "G", "GG"],
    brand: "SANDRINI",
  },
  {
    id: 12,
    name: "Kit 12 Meias Soquete Invisível Sandrini",
    category: "Underwear",
    price: 79.90,
    originalPrice: 109.90,
    discountBadge: "27% OFF",
    badge: "ESSENCIAL",
    img: n12MaisVendidosImg,
    secondImg: meiaEssenciaisImg,
    rating: 4.8,
    reviews: 210,
    sizes: ["Único (38-43)"],
    brand: "SANDRINI",
  },
];

const INSTAGRAM_POSTS = [
  { img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&h=600&fit=crop&auto=format", link: "https://www.instagram.com/sandrini.oficial" },
  { img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop&auto=format", link: "https://www.instagram.com/sandrini.oficial" },
  { img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&h=600&fit=crop&auto=format", link: "https://www.instagram.com/sandrini.oficial" },
  { img: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&h=600&fit=crop&auto=format", link: "https://www.instagram.com/sandrini.oficial" },
  { img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop&auto=format", link: "https://www.instagram.com/sandrini.oficial" },
  { img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop&auto=format", link: "https://www.instagram.com/sandrini.oficial" },
  { img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=600&h=600&fit=crop&auto=format", link: "https://www.instagram.com/sandrini.oficial" },
  { img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=600&fit=crop&auto=format", link: "https://www.instagram.com/sandrini.oficial" },
];

function formatPrice(val: number) {
  return val.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function calculatePixPrice(val: number) {
  // 5% de desconto extra no PIX estilo Torx
  return val * 0.95;
}

// Card de produto idêntico à Torx Brasil
function TorxProductCard({
  product,
  onAddToCart,
  onClickDetails,
  isFavorite,
  onToggleFavorite,
}: {
  product: Product;
  onAddToCart: (product: Product, size: string) => void;
  onClickDetails: (product: Product, defaultColor: string | null) => void;
  isFavorite?: boolean;
  onToggleFavorite?: (productId: number) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const pixPrice = calculatePixPrice(product.price);
  const installmentValue = product.price / 6;

  return (
    <div
      className="group flex flex-col bg-white border border-[#F0F0F0] hover:border-black/20 transition-all duration-300 relative rounded-none hover:shadow-md"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Imagem com Hover Flip */}
      <div
        className="relative aspect-square w-full overflow-hidden bg-[#FAFAFA] cursor-pointer"
        onClick={() => onClickDetails(product, null)}
      >
        {/* Wishlist Heart */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (onToggleFavorite) onToggleFavorite(product.id);
          }}
          className="absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-black/70 hover:text-[#D94A2F] hover:bg-white transition-all shadow-xs cursor-pointer"
          title="Favoritar"
        >
          <Heart size={16} className={isFavorite ? "fill-[#D94A2F] text-[#D94A2F]" : ""} />
        </button>

        {/* Badges Torx Style */}
        <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1 pointer-events-none">
          {product.discountBadge && (
            <span className="bg-[#D94A2F] text-white text-[11px] font-bold tracking-wider uppercase px-2 py-0.5">
              {product.discountBadge}
            </span>
          )}
          {product.badge && (
            <span className="bg-[#0B0B0B] text-white text-[10px] font-bold tracking-widest uppercase px-2 py-0.5">
              {product.badge}
            </span>
          )}
        </div>

        {/* Imagem Principal */}
        <img
          src={product.img}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-contain p-3 transition-opacity duration-300 ease-in-out ${
            hovered && product.secondImg ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Segunda Imagem no Hover */}
        {product.secondImg && (
          <img
            src={product.secondImg}
            alt={`${product.name} detalhe`}
            className={`absolute inset-0 w-full h-full object-contain p-3 transition-opacity duration-300 ease-in-out ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>

      {/* Info do Produto Torx */}
      <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between gap-2.5">
        <div>
          <h3
            onClick={() => onClickDetails(product, null)}
            className="font-semibold text-[13px] sm:text-[14px] text-[#0B0B0B] leading-snug line-clamp-2 cursor-pointer hover:text-[#D94A2F] transition-colors"
          >
            {product.name}
          </h3>
        </div>

        {/* Cores disponíveis em swatches */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center gap-1.5 py-0.5">
            {product.colors.map((c) => (
              <span
                key={c.name}
                className="w-3.5 h-3.5 rounded-full border border-black/20 shadow-2xs"
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
            <span className="text-[10px] text-black/50 ml-1 font-medium">
              +{product.colors.length} cores
            </span>
          </div>
        )}

        {/* Bloco de Preços Estilo Torx Brasil */}
        <div className="pt-2 border-t border-black/5 flex flex-col gap-0.5">
          {product.originalPrice && (
            <span className="text-xs text-black/40 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
          <div className="flex items-baseline gap-1.5 flex-wrap">
            <span className="text-base font-extrabold text-[#0B0B0B]">
              {formatPrice(pixPrice)}
            </span>
            <span className="text-xs font-bold text-[#D94A2F]">no PIX</span>
          </div>
          <p className="text-[11px] text-black/60 font-medium">
            ou {formatPrice(product.price)} em outros meios
          </p>
          <p className="text-[11px] text-black/60 font-medium">
            <b className="text-black">6x de {formatPrice(installmentValue)}</b> sem juros
          </p>
        </div>

        {/* Botão de Compra Torx */}
        <button
          onClick={() => onAddToCart(product, product.sizes[0] || "M")}
          className="w-full bg-[#0B0B0B] hover:bg-[#D94A2F] text-white text-xs font-bold tracking-widest py-2.5 uppercase transition-colors cursor-pointer flex items-center justify-center gap-2 mt-1"
        >
          <ShoppingBag size={14} />
          COMPRAR
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState<{ product: Product; quantity: number; selectedSize: string; selectedColor?: string | null }[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [chosenSize, setChosenSize] = useState("41");
  const [chosenColor, setChosenColor] = useState<string | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [activeVitrineTab, setActiveVitrineTab] = useState<string>("CORRIDA");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [couponCopied, setCouponCopied] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState<string>("");
  const [couponInput, setCouponInput] = useState<string>("");
  const [couponError, setCouponError] = useState<string>("");
  const [cepInput, setCepInput] = useState<string>("");
  const [shippingCalculated, setShippingCalculated] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [currentTopNoticeIdx, setCurrentTopNoticeIdx] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Topbar Notice Rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTopNoticeIdx((prev) => (prev + 1) % TORX_TOPBAR_MESSAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Hero Slides com dimensões exatas da Torx (aspect 150/61 no desktop e 96/145 no mobile)
  const heroSlides = [
    {
      title: "SANDRINI ULTRA RUN",
      subtitle: "PERFORMANCE, AMORTECIMENTO & VELOCIDADE",
      desc: "Desenvolvido com tecnologia de absorção de impacto para impulsionar seus treinos e corridas.",
      image: heroBanner1Img,
      badge: "LANÇAMENTO 2026",
      cta: "EXPLORAR CORRIDA",
      category: "Corrida",
    },
    {
      title: "COLEÇÃO TREINO & ACADEMIA",
      subtitle: "MÁXIMA RESISTÊNCIA E RESPIRABILIDADE",
      desc: "Camisetas Dry Fit, bermudas de compressão e tênis leves para elevar sua rotina fitness.",
      image: heroBanner2Img,
      badge: "ALTA PERFORMANCE",
      cta: "VER TREINO & ACADEMIA",
      category: "Fitness",
    },
    {
      title: "KITS ESSENCIAIS SANDRINI",
      subtitle: "MAIS ECONOMIA E PRATICIDADE",
      desc: "Kits de cuecas boxer, meias esportivas e camisetas com descontos exclusivos de fábrica.",
      image: banner1400x400Img,
      badge: "CUPOM 7% OFF",
      cta: "VER KITS COMPLETOS",
      category: "Kits",
    },
  ];

  // Auto Hero Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const copyCouponCode = () => {
    navigator.clipboard.writeText("BEMVINDOSANDRINI");
    setCouponCopied(true);
    setTimeout(() => setCouponCopied(false), 3000);
  };

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponInput.trim().toUpperCase() === "BEMVINDOSANDRINI" || couponInput.trim().toUpperCase() === "SANDRINI7") {
      setAppliedCoupon("BEMVINDOSANDRINI");
      setCouponError("");
    } else {
      setCouponError("Cupom inválido. Tente BEMVINDOSANDRINI");
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon("");
    setCouponInput("");
    setCouponError("");
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  const addToCart = (product: Product, size: string = "41", color: string | null = null) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === size &&
          item.selectedColor === color
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id &&
          item.selectedSize === size &&
          item.selectedColor === color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1, selectedSize: size, selectedColor: color }];
    });
    setCartOpen(true);
  };

  const updateQuantity = (productId: number, size: string, color: string | null | undefined, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (
            item.product.id === productId &&
            item.selectedSize === size &&
            item.selectedColor === color
          ) {
            const newQty = item.quantity + delta;
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId: number, size: string, color: string | null | undefined) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.product.id === productId &&
            item.selectedSize === size &&
            item.selectedColor === color
          )
      )
    );
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const rawSubtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const couponDiscount = appliedCoupon ? rawSubtotal * 0.07 : 0;
  const finalSubtotal = rawSubtotal - couponDiscount;
  const freeShippingThreshold = 259;
  const freeShippingPercent = Math.min(100, (finalSubtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - finalSubtotal);

  const openProductDetails = (product: Product, defaultColor: string | null = null) => {
    setChosenSize(product.sizes[0] || "M");
    setChosenColor(defaultColor || (product.colors ? product.colors[0].name : null));
    setSelectedProduct(product);
    setActiveImageIdx(0);
  };

  const navigateToCategory = (catName: string) => {
    setCurrentPage(catName);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Filtragem de produtos para a vitrine
  const vitrineProducts = PRODUCTS.filter((p) => {
    if (activeVitrineTab === "CORRIDA") return p.category === "Corrida";
    if (activeVitrineTab === "TREINO & ACADEMIA") return p.category === "Fitness";
    if (activeVitrineTab === "MAIS VENDIDOS") return p.badge?.includes("VENDIDO") || p.rating >= 4.8;
    if (activeVitrineTab === "LANÇAMENTOS") return p.badge?.includes("NOVO") || p.badge?.includes("LANÇAMENTO");
    if (activeVitrineTab === "KITS") return p.name.includes("Kit");
    return true;
  });

  const activeColorObj = selectedProduct?.colors?.find((c) => c.name === chosenColor);
  let galleryImages = activeColorObj ? [activeColorObj.img] : selectedProduct ? [selectedProduct.img] : [];
  if (selectedProduct?.secondImg && !galleryImages.includes(selectedProduct.secondImg)) {
    galleryImages.push(selectedProduct.secondImg);
  }

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0B0B0B] font-['Open_Sans',sans-serif] antialiased">
      {/* 1. TOPO ANÚNCIO ROTATIVO (Torx Header Ticker #js-texto-header) */}
      <div className="bg-[#141414] border-b border-white/10 text-white py-2 px-4 text-center text-[12px] font-bold tracking-[0.08em] uppercase overflow-hidden relative select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
          <span className="inline-flex items-center gap-2 animate-fade-in key={currentTopNoticeIdx}">
            {TORX_TOPBAR_MESSAGES[currentTopNoticeIdx]}
          </span>
        </div>
      </div>

      {/* 2. HEADER PRINCIPAL (Dark Style com Logo Branca e Letras Brancas) */}
      <header className="sticky top-0 z-40 bg-[#0B0B0B] border-b border-[#222222] transition-all duration-300 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
          {/* Mobile Menu Trigger & Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#D94A2F] transition-colors cursor-pointer"
              aria-label="Abrir menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigateToCategory("home");
              }}
              className="flex items-center gap-2 cursor-pointer group py-1"
            >
              <img
                src={logoImg}
                alt="Sandrini"
                className="h-11 sm:h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => navigateToCategory(link.category)}
                className={`text-[13px] font-extrabold tracking-[0.08em] uppercase transition-all relative py-2 cursor-pointer ${
                  currentPage === link.category
                    ? "text-[#D94A2F]"
                    : "text-white hover:text-[#D94A2F]"
                }`}
              >
                {link.label}
                {currentPage === link.category && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D94A2F]" />
                )}
              </button>
            ))}
          </nav>

          {/* Tools & Actions (Search, Account, Wishlist, Cart) */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search Button / Input */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center bg-[#1E1E1E] rounded-full px-3 py-1.5 border border-white/20">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Pesquisar produtos..."
                    className="bg-transparent text-xs text-white outline-none w-36 sm:w-48 placeholder:text-white/50"
                    autoFocus
                  />
                  <button onClick={() => setSearchOpen(false)} className="text-white/60 hover:text-white p-0.5">
                    <X size={14} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 text-white hover:text-[#D94A2F] transition-colors rounded-full hover:bg-white/10 cursor-pointer"
                  title="Pesquisar"
                >
                  <Search size={20} />
                </button>
              )}
            </div>

            {/* Favoritos */}
            <button
              onClick={() => navigateToCategory("Favoritos")}
              className="p-2 text-white hover:text-[#D94A2F] transition-colors rounded-full hover:bg-white/10 relative cursor-pointer hidden sm:flex"
              title="Favoritos"
            >
              <Heart size={20} />
              {favorites.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#D94A2F] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </button>

            {/* Conta / Perfil */}
            <button
              onClick={() => alert("Área do cliente Sandrini - Login & Pedidos")}
              className="p-2 text-white hover:text-[#D94A2F] transition-colors rounded-full hover:bg-white/10 cursor-pointer hidden sm:flex"
              title="Minha Conta"
            >
              <User size={20} />
            </button>

            {/* Sacola / Cart (.header__second--tools-cart) */}
            <button
              onClick={() => setCartOpen(true)}
              className="flex items-center gap-2 bg-[#D94A2F] hover:bg-white hover:text-[#0B0B0B] text-white px-3.5 sm:px-4 py-2.5 rounded-full transition-all cursor-pointer shadow-sm group"
            >
              <ShoppingBag size={18} />
              <span className="text-xs font-bold">{cartCount}</span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#0B0B0B] border-t border-[#222222] px-6 py-6 flex flex-col gap-4 shadow-xl">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => navigateToCategory(link.category)}
                className="text-left font-bold text-sm tracking-wider uppercase text-white py-2 border-b border-white/10 hover:text-[#D94A2F]"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* 3. FAIXA CUPOM (Torx .faixa-cupom) */}
      <div className="bg-[#FFFFFF] border-b border-[#EBEBEB] py-3 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold">
          <span className="text-[#0B0B0B]">
            Ganhe <b>7% OFF</b> com Cupom:
          </span>
          <div className="inline-flex items-center gap-2 bg-[#F9F9F9] border border-[#D94A2F] px-3 py-1 rounded-none">
            <span className="font-extrabold text-[#D94A2F] tracking-wider uppercase">
              BEMVINDOSANDRINI
            </span>
            <button
              onClick={copyCouponCode}
              className="text-[11px] font-bold bg-[#D94A2F] text-white px-2.5 py-0.5 hover:bg-black transition-colors flex items-center gap-1 cursor-pointer"
            >
              {couponCopied ? (
                <>
                  <Check size={12} /> Copiado!
                </>
              ) : (
                <>
                  <Copy size={12} /> Copiar
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {currentPage === "home" ? (
        <>
          {/* 4. HERO BANNER PRINCIPAL (Torx .home__banner com aspect-ratio 150/61 desktop e 96/145 mobile) */}
          <section className="relative w-full overflow-hidden bg-black aspect-[96/145] sm:aspect-[150/61] flex items-center group">
            {heroSlides.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover opacity-80 object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent sm:bg-gradient-to-r sm:from-black/80 sm:via-black/35 sm:to-transparent" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 w-full h-full flex flex-col justify-end sm:justify-center pb-12 sm:pb-0">
                  <div className="max-w-xl text-white">
                    <span className="inline-block bg-[#D94A2F] text-white text-[11px] font-black tracking-widest uppercase px-3 py-1 mb-3">
                      {slide.badge}
                    </span>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none mb-3 font-['Montserrat',sans-serif]">
                      {slide.title}
                    </h1>
                    <p className="text-xs sm:text-sm font-semibold tracking-wider text-white/90 uppercase mb-2">
                      {slide.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-white/75 mb-6 line-clamp-2 max-w-md">
                      {slide.desc}
                    </p>
                    <button
                      onClick={() => navigateToCategory(slide.category)}
                      className="bg-[#D94A2F] hover:bg-white hover:text-black text-white text-xs font-extrabold tracking-widest px-8 py-3.5 uppercase transition-all duration-300 shadow-md cursor-pointer inline-flex items-center gap-2"
                    >
                      {slide.cta}
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Slider Arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 hover:bg-[#D94A2F] hover:text-white text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 hover:bg-[#D94A2F] hover:text-white text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>

            {/* Slider Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1.5 transition-all rounded-full cursor-pointer ${
                    i === currentSlide ? "w-8 bg-[#D94A2F]" : "w-2.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </section>

          {/* 5. GRADE DE 3 BANNERS DE CATEGORIAS (Torx .banner-grid com proporção vertical 4:5) */}
          <section className="py-8 sm:py-12 bg-[#FFFFFF]">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {TORX_CATEGORY_GRID.map((item) => (
                  <div
                    key={item.title}
                    onClick={() => navigateToCategory(item.category)}
                    className="group relative overflow-hidden bg-black aspect-[4/5] cursor-pointer shadow-sm"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-85 transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                      <span className="text-[10px] font-black tracking-widest text-[#D94A2F] uppercase mb-1">
                        {item.badge}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight font-['Montserrat',sans-serif] leading-tight mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-white/75 mb-3 line-clamp-2">
                        {item.subtitle}
                      </p>
                      <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-white group-hover:text-[#D94A2F] transition-colors">
                        CONFERIR <ChevronRight size={14} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 6. VITRINES ROTATIVAS (Torx .rotation-vitrine) */}
          <section className="py-10 sm:py-14 bg-[#FAFAFA] border-y border-[#EBEBEB]">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              {/* Vitrine Tabs */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 border-b border-[#EBEBEB] pb-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black uppercase font-['Montserrat',sans-serif] tracking-tight text-[#0B0B0B]">
                    {activeVitrineTab}
                  </h2>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["CORRIDA", "TREINO & ACADEMIA", "MAIS VENDIDOS", "LANÇAMENTOS", "KITS"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveVitrineTab(tab)}
                      className={`text-xs font-bold tracking-wider px-4 py-2 uppercase transition-all cursor-pointer ${
                        activeVitrineTab === tab
                          ? "bg-[#0B0B0B] text-white"
                          : "bg-white text-black/70 border border-[#E0E0E0] hover:border-black hover:text-black"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Vitrine Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
                {vitrineProducts.slice(0, 8).map((p) => (
                  <TorxProductCard
                    key={p.id}
                    product={p}
                    onAddToCart={(prod, size) => addToCart(prod, size)}
                    onClickDetails={(prod, color) => openProductDetails(prod, color)}
                    isFavorite={favorites.includes(p.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>

              {/* Ver Todos Button */}
              <div className="text-center mt-8">
                <button
                  onClick={() => navigateToCategory(activeVitrineTab === "KITS" ? "Kits" : "Todos")}
                  className="inline-flex items-center gap-2 border border-black text-black hover:bg-black hover:text-white font-extrabold text-xs tracking-widest px-8 py-3.5 uppercase transition-all cursor-pointer"
                >
                  VER MAIS PRODUTOS ({vitrineProducts.length})
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </section>

          {/* 7. FAIXA COMUNICADO / 4 PILARES (Torx .faixa-comunicado) */}
          <section className="py-10 bg-white border-b border-[#EBEBEB]">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="flex items-center gap-4 p-4 border border-[#EBEBEB] bg-[#FAFAFA]">
                  <div className="w-12 h-12 rounded-full bg-[#D94A2F]/10 text-[#D94A2F] flex items-center justify-center shrink-0">
                    <RotateCcw size={22} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs sm:text-sm uppercase tracking-wider text-black">
                      TROCA FACILITADA
                    </h4>
                    <p className="text-xs text-black/60 mt-0.5 leading-snug">
                      Você tem 30 dias para realizar a troca de qualquer produto
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border border-[#EBEBEB] bg-[#FAFAFA]">
                  <div className="w-12 h-12 rounded-full bg-[#D94A2F]/10 text-[#D94A2F] flex items-center justify-center shrink-0">
                    <Truck size={22} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs sm:text-sm uppercase tracking-wider text-black">
                      FRETE GRÁTIS
                    </h4>
                    <p className="text-xs text-black/60 mt-0.5 leading-snug">
                      Para todo Brasil em compras a partir de R$ 259,00
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border border-[#EBEBEB] bg-[#FAFAFA]">
                  <div className="w-12 h-12 rounded-full bg-[#D94A2F]/10 text-[#D94A2F] flex items-center justify-center shrink-0">
                    <Tag size={22} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs sm:text-sm uppercase tracking-wider text-black">
                      GANHE 7% OFF
                    </h4>
                    <p className="text-xs text-black/60 mt-0.5 leading-snug">
                      Utilize o cupom BEMVINDOSANDRINI em sua 1ª Compra
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border border-[#EBEBEB] bg-[#FAFAFA]">
                  <div className="w-12 h-12 rounded-full bg-[#D94A2F]/10 text-[#D94A2F] flex items-center justify-center shrink-0">
                    <Flame size={22} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs sm:text-sm uppercase tracking-wider text-black">
                      CLUBE
                    </h4>
                    <p className="text-xs text-black/60 mt-0.5 leading-snug">
                      Seja membro de nosso club e receba ofertas exclusivas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 8. QUEM SOMOS / BRAND VIDEO SECTION */}
          <section className="py-16 bg-[#0B0B0B] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-[#D94A2F] text-xs font-black tracking-[0.25em] uppercase">
                  NOSSA HISTÓRIA & PROPÓSITO
                </span>
                <h2 className="text-3xl sm:text-5xl font-black uppercase font-['Montserrat',sans-serif] tracking-tight mt-1">
                  QUEM SOMOS
                </h2>
                <p className="text-xs sm:text-sm text-white/70 mt-2">
                  Criamos produtos esportivos e casuais com design inovador, tecnologia anatômica e conforto absoluto para o seu dia a dia.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                {/* Video Card */}
                <div
                  onClick={() => setVideoModalOpen(true)}
                  className="lg:col-span-2 relative aspect-video bg-black rounded-xs overflow-hidden group cursor-pointer border border-white/10 min-h-[300px]"
                >
                  <img
                    src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1200&h=700&fit=crop&auto=format"
                    alt="Vídeo Institucional Sandrini"
                    className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#D94A2F] text-white flex items-center justify-center pl-1 shadow-2xl group-hover:scale-110 group-hover:bg-white group-hover:text-[#D94A2F] transition-all">
                      <Play size={28} />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="bg-black/80 text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-widest">
                      VÍDEO DE PERFORMANCE
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black uppercase font-['Montserrat',sans-serif] mt-2">
                      A tecnologia por trás de cada passo
                    </h3>
                  </div>
                </div>

                {/* Side Lifestyle Cards */}
                <div className="flex flex-col gap-6">
                  <div className="flex-1 bg-white/5 border border-white/10 p-6 rounded-xs flex flex-col justify-between">
                    <div>
                      <span className="text-[#D94A2F] text-xs font-black tracking-widest uppercase">
                        QUALIDADE COMPROVADA
                      </span>
                      <h4 className="text-xl font-bold uppercase mt-1 mb-2">
                        Mais de 500.000 clientes satisfeitos
                      </h4>
                      <p className="text-xs text-white/60 leading-relaxed">
                        Foco em matérias-primas nobres, amortecimento durável e corte anatômico com padrão internacional.
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-amber-400 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-amber-400" />
                      ))}
                      <span className="text-xs text-white/80 ml-2 font-bold">4.9 / 5.0</span>
                    </div>
                  </div>

                  <div className="flex-1 bg-white/5 border border-white/10 p-6 rounded-xs flex flex-col justify-between">
                    <div>
                      <span className="text-[#D94A2F] text-xs font-black tracking-widest uppercase">
                        PRODUÇÃO NACIONAL
                      </span>
                      <h4 className="text-xl font-bold uppercase mt-1 mb-2">
                        Direto da fábrica para sua casa
                      </h4>
                      <p className="text-xs text-white/60 leading-relaxed">
                        Preço justo, entrega rastreada e suporte dedicado de segunda a sexta para você comprar com tranquilidade.
                      </p>
                    </div>
                    <a
                      href="#newsletter"
                      className="text-xs font-bold text-[#D94A2F] hover:underline uppercase inline-flex items-center gap-1 mt-3"
                    >
                      FAÇA PARTE DO CLUBE <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 9. INSTAGRAM GRID (Torx .banner-instagram) */}
          <section className="py-10 bg-[#FFFFFF] border-t border-[#EBEBEB]">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <div className="mb-5">
                <h2 className="text-xl sm:text-2xl font-normal uppercase text-[#0B0B0B]">
                  INSTAGRAM <b className="font-extrabold text-black">@SANDRINI.OFICIAL</b>
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
                {INSTAGRAM_POSTS.map((post, i) => (
                  <a
                    key={i}
                    href={post.link}
                    target="_blank"
                    rel="noreferrer"
                    className="relative aspect-square overflow-hidden group bg-black/10"
                  >
                    <img
                      src={post.img}
                      alt={`Instagram Sandrini ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      <Instagram size={22} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        /* PÁGINA DE CATEGORIA / BUSCA / FAVORITOS */
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 min-h-[70vh]">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black/50 mb-6">
            <button onClick={() => setCurrentPage("home")} className="hover:text-black cursor-pointer">
              Home
            </button>
            <ChevronRight size={12} />
            <span className="text-black">{currentPage}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-black/10 pb-6 mb-8 gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black uppercase font-['Montserrat',sans-serif]">
                {currentPage === "Favoritos" ? "Meus Favoritos" : currentPage}
              </h1>
              <p className="text-xs text-black/60 mt-1">
                {currentPage === "Favoritos"
                  ? `${favorites.length} itens salvos`
                  : "Produtos com tecnologia de ponta e entrega expressa"}
              </p>
            </div>
            <button
              onClick={() => setCurrentPage("home")}
              className="text-xs font-bold text-[#D94A2F] hover:underline uppercase"
            >
              ← Voltar para a Home
            </button>
          </div>

          {/* Grid de Produtos da Categoria */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
            {PRODUCTS.filter((p) => {
              if (currentPage === "Favoritos") return favorites.includes(p.id);
              if (currentPage === "Corrida") return p.category === "Corrida";
              if (currentPage === "Fitness" || currentPage === "TREINO & ACADEMIA") return p.category === "Fitness";
              if (currentPage === "Underwear") return p.category === "Underwear";
              if (currentPage === "Básicos" || currentPage === "ESSENCIAIS") return p.category === "Básicos";
              if (currentPage === "Kits") return p.name.includes("Kit");
              if (currentPage === "Novidades" || currentPage === "LANÇAMENTO") return p.badge?.includes("NOVO") || p.badge?.includes("LANÇAMENTO");
              if (currentPage === "Promoções") return p.originalPrice !== null;
              if (currentPage === "Todos") return true;
              return p.category.toLowerCase().includes(currentPage.toLowerCase()) || p.name.toLowerCase().includes(currentPage.toLowerCase());
            }).map((p) => (
              <TorxProductCard
                key={p.id}
                product={p}
                onAddToCart={(prod, size) => addToCart(prod, size)}
                onClickDetails={(prod, color) => openProductDetails(prod, color)}
                isFavorite={favorites.includes(p.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </div>
      )}

      {/* 10. NEWSLETTER (Torx #newsletter .newsletter) */}
      <div id="newsletter" className="bg-[#FFFFFF] border-t border-[#EBEBEB] py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase text-black/50 tracking-widest block mb-1">
            Newsletter
          </span>
          <span className="text-base sm:text-lg font-bold uppercase text-[#0B0B0B] block mb-4">
            CADASTRE-SE E GANHE ATÉ 7% OFF EM SUA PRIMEIRA COMPRA!
          </span>

          {newsletterSent ? (
            <div className="bg-green-50 border border-green-200 text-green-800 p-3 text-xs font-bold">
              ✓ E-mail cadastrado! Utilize o cupom BEMVINDOSANDRINI na sua primeira compra.
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (newsletterEmail) setNewsletterSent(true);
              }}
              className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="E-mail"
                className="flex-1 bg-[#F9F9F9] text-black placeholder:text-black/40 border border-[#E0E0E0] px-4 py-3 text-xs outline-none focus:border-black"
              />
              <button
                type="submit"
                className="bg-[#D94A2F] hover:bg-black text-white text-xs font-bold tracking-widest px-8 py-3 uppercase transition-colors cursor-pointer"
              >
                ENVIAR
              </button>
            </form>
          )}
        </div>
      </div>

      {/* 11. FOOTER COMPLETO (Torx .footer #footer) */}
      <footer className="bg-[#FFFFFF] text-[#0B0B0B] text-xs border-t border-[#EBEBEB] pt-12 pb-24 sm:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {/* Logo & Redes */}
            <div className="md:col-span-1 flex flex-col items-center text-center sm:items-center sm:text-center">
              <img src={logoFooterImg} alt="Sandrini" className="h-14 sm:h-16 w-auto object-contain mb-4 mx-auto" />
              <div className="flex justify-center gap-2.5 text-black/60">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 border border-[#E0E0E0] flex items-center justify-center hover:border-black hover:text-black transition-colors">
                  <Instagram size={14} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 border border-[#E0E0E0] flex items-center justify-center hover:border-black hover:text-black transition-colors">
                  <Youtube size={14} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 border border-[#E0E0E0] flex items-center justify-center hover:border-black hover:text-black transition-colors">
                  <Facebook size={14} />
                </a>
              </div>
            </div>

            {/* Sua Conta */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wide mb-3 text-black">
                Sua Conta
              </h4>
              <ul className="space-y-2 text-black/70">
                <li><a href="#" className="hover:text-black">Acesso ao Painel</a></li>
                <li><a href="#" className="hover:text-black">Meus Pedidos</a></li>
                <li><a href="#" className="hover:text-black">Meus Dados</a></li>
              </ul>
            </div>

            {/* Institucional */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wide mb-3 text-black">
                Institucional
              </h4>
              <ul className="space-y-2 text-black/70">
                <li><a href="#" className="hover:text-black">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-black">Quem Somos</a></li>
                <li><a href="#" className="hover:text-black">Garantia e Reembolso</a></li>
                <li><a href="#" className="hover:text-black">Como cuidar do seu produto</a></li>
              </ul>
            </div>

            {/* Dúvidas */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wide mb-3 text-black">
                Dúvidas
              </h4>
              <ul className="space-y-2 text-black/70">
                <li><a href="#" className="hover:text-black">Fale Conosco</a></li>
                <li><a href="#" className="hover:text-black">Dúvidas Frequentes</a></li>
                <li><a href="#" className="hover:text-black">Troca e Devoluções</a></li>
              </ul>
            </div>

            {/* Atendimento */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wide mb-3 text-black">
                Atendimento
              </h4>
              <p className="text-black/70">Seg à Sex das 8h às 17h</p>
              <p className="text-black font-bold mt-2">contato@sandrini.com.br</p>
            </div>
          </div>

          {/* Formas de Pagamento e Segurança (Torx .bottom) */}
          <div className="border-t border-[#EBEBEB] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h5 className="text-[11px] font-bold text-black/50 uppercase tracking-widest mb-1.5 text-center md:text-left">
                Pagamento
              </h5>
              <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start text-[10px] font-bold text-black/70">
                <span className="border border-[#E0E0E0] px-2 py-1">PIX</span>
                <span className="border border-[#E0E0E0] px-2 py-1">VISA</span>
                <span className="border border-[#E0E0E0] px-2 py-1">MASTERCARD</span>
                <span className="border border-[#E0E0E0] px-2 py-1">ELO</span>
                <span className="border border-[#E0E0E0] px-2 py-1">HIPERCARD</span>
                <span className="border border-[#E0E0E0] px-2 py-1">AMERICAN EXPRESS</span>
              </div>
            </div>

            <div>
              <h5 className="text-[11px] font-bold text-black/50 uppercase tracking-widest mb-1.5 text-center md:text-right">
                Segurança
              </h5>
              <div className="flex items-center gap-2 text-black/70 text-[10px] font-bold">
                <span className="border border-[#E0E0E0] px-2 py-1 flex items-center gap-1">
                  <ShieldCheck size={12} className="text-green-600" /> SSL 256 BITS
                </span>
                <span className="border border-[#E0E0E0] px-2 py-1 flex items-center gap-1">
                  <Check size={12} className="text-green-600" /> GOOGLE SAFE BROWSING
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-[#EBEBEB] mt-6 pt-4 text-center text-[11px] text-black/50">
            <p>SANDRINI COMERCIO DIGITAL LTDA - CNPJ 00.000.000/0001-00 © Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* 12. FLOATING QUICK MENU MOBILE (Torx .quick-menu) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#EBEBEB] px-3 py-2 flex items-center justify-around text-[10px] font-bold uppercase shadow-lg">
        <button onClick={() => navigateToCategory("Corrida")} className="flex flex-col items-center gap-1 text-[#0B0B0B]">
          <Flame size={18} />
          <span>Calçados</span>
        </button>
        <button onClick={() => navigateToCategory("Kits")} className="flex flex-col items-center gap-1 text-[#0B0B0B]">
          <Tag size={18} />
          <span>CLUBE</span>
        </button>
        <button onClick={() => navigateToCategory("Favoritos")} className="flex flex-col items-center gap-1 text-[#0B0B0B] relative">
          <Heart size={18} />
          <span>Favoritos</span>
          {favorites.length > 0 && (
            <span className="absolute -top-1 right-2 w-3.5 h-3.5 bg-[#D94A2F] text-white text-[8px] rounded-full flex items-center justify-center">
              {favorites.length}
            </span>
          )}
        </button>
        <button onClick={() => setCartOpen(true)} className="flex flex-col items-center gap-1 text-[#D94A2F] relative">
          <ShoppingBag size={18} />
          <span>Sacola ({cartCount})</span>
        </button>
      </nav>

      {/* 13. SIDE CART PREVIEW (Torx .header__second--tools-cart-preview .cart-preview) */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity" onClick={() => setCartOpen(false)} />

          <div className="absolute inset-y-0 right-0 max-w-full flex">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col animate-slide-in-right">
              {/* Cart Header */}
              <div className="px-6 py-4 border-b border-[#EBEBEB] flex items-center justify-between bg-white">
                <span className="font-bold text-black text-sm uppercase tracking-wide">
                  Minha sacola ({cartCount})
                </span>
                <button onClick={() => setCartOpen(false)} className="p-1 text-black/60 hover:text-black cursor-pointer">
                  <X size={20} />
                </button>
              </div>

              {/* Free Shipping Progress Bar (.cart-preview-free-shipping) */}
              <div className="bg-[#F9F9F9] border-b border-[#EBEBEB] px-6 py-3.5">
                <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                  {remainingForFreeShipping > 0 ? (
                    <span className="text-black/80">
                      Faltam <b className="text-[#D94A2F]">{formatPrice(remainingForFreeShipping)}</b> para Frete Grátis
                    </span>
                  ) : (
                    <span className="text-green-700 font-bold flex items-center gap-1">
                      <Check size={14} /> Você ganhou Frete Grátis!
                    </span>
                  )}
                  <span className="text-[10px] text-black/50">{Math.round(freeShippingPercent)}%</span>
                </div>
                <div className="w-full h-1.5 bg-[#E0E0E0] overflow-hidden">
                  <div
                    className="h-full bg-[#D94A2F] transition-all duration-500"
                    style={{ width: `${freeShippingPercent}%` }}
                  />
                </div>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-12">
                    <ShoppingBag size={52} className="text-black/20" />
                    <p className="text-sm font-semibold text-black/70">Sua sacola está vazia.</p>
                    <button
                      onClick={() => setCartOpen(false)}
                      className="border border-black text-black text-xs font-bold tracking-widest px-6 py-3 uppercase hover:bg-black hover:text-white transition-colors cursor-pointer"
                    >
                      CONTINUAR COMPRANDO
                    </button>
                  </div>
                ) : (
                  cartItems.map((item, idx) => {
                    const activeColor = item.product.colors?.find((c) => c.name === item.selectedColor);
                    const thumb = activeColor ? activeColor.img : item.product.img;
                    return (
                      <div key={idx} className="flex gap-3 border-b border-[#EBEBEB] pb-4">
                        <img
                          src={thumb}
                          alt={item.product.name}
                          className="w-18 h-18 object-contain bg-[#FAFAFA] border border-[#EBEBEB] p-1"
                        />
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start gap-2">
                              <h4 className="font-semibold text-xs text-black leading-snug line-clamp-2">
                                {item.product.name}
                              </h4>
                              <button
                                onClick={() => removeFromCart(item.product.id, item.selectedSize, item.selectedColor)}
                                className="text-black/40 hover:text-[#D94A2F] p-0.5"
                              >
                                <X size={16} />
                              </button>
                            </div>
                            <p className="text-[10px] text-black/50 font-semibold uppercase mt-0.5">
                              {item.selectedColor ? `Cor: ${item.selectedColor} | ` : ""}Tam: {item.selectedSize}
                            </p>
                          </div>

                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center border border-[#D0D0D0]">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, -1)}
                                className="px-2 py-0.5 text-black/70 hover:bg-black/5"
                              >
                                -
                              </button>
                              <span className="px-2 text-xs font-bold">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, 1)}
                                className="px-2 py-0.5 text-black/70 hover:bg-black/5"
                              >
                                +
                              </button>
                            </div>
                            <span className="font-extrabold text-sm text-black">
                              {formatPrice(item.product.price * item.quantity)}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Cart Footer com Cupom, Frete e Total */}
              {cartItems.length > 0 && (
                <div className="border-t border-[#EBEBEB] p-6 bg-[#FAFAFA] space-y-4">
                  {/* Cupom */}
                  <div>
                    {appliedCoupon ? (
                      <div className="flex items-center justify-between bg-green-50 border border-green-200 text-green-800 px-3 py-2 text-xs font-bold">
                        <span>Cupom BEMVINDOSANDRINI (-7%)</span>
                        <button onClick={removeCoupon} className="text-red-600 hover:underline cursor-pointer">
                          Remover
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleApplyCoupon} className="flex gap-2">
                        <input
                          type="text"
                          value={couponInput}
                          onChange={(e) => setCouponInput(e.target.value)}
                          placeholder="Cupom Desconto"
                          className="flex-1 bg-white border border-[#D0D0D0] px-3 py-2 text-xs uppercase outline-none"
                        />
                        <button
                          type="submit"
                          className="bg-[#0B0B0B] text-white text-xs font-bold px-4 py-2 uppercase hover:bg-[#D94A2F] transition-colors cursor-pointer"
                        >
                          Usar
                        </button>
                      </form>
                    )}
                    {couponError && <p className="text-[10px] text-red-600 mt-1 font-semibold">{couponError}</p>}
                  </div>

                  {/* Cálculo de CEP */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      maxLength={9}
                      value={cepInput}
                      onChange={(e) => setCepInput(e.target.value)}
                      placeholder="Digite o CEP"
                      className="flex-1 bg-white border border-[#D0D0D0] px-3 py-2 text-xs outline-none"
                    />
                    <button
                      onClick={() => setShippingCalculated(true)}
                      className="bg-white border border-black text-black text-xs font-bold px-4 py-2 uppercase hover:bg-black hover:text-white transition-colors cursor-pointer"
                    >
                      Calcular
                    </button>
                  </div>
                  {shippingCalculated && (
                    <div className="text-[11px] bg-white border border-[#EBEBEB] p-2.5 space-y-1">
                      <div className="flex justify-between font-semibold">
                        <span>Sedex Expresso:</span>
                        <span className="text-green-600 font-bold">{remainingForFreeShipping === 0 ? "GRÁTIS" : "R$ 14,90"}</span>
                      </div>
                    </div>
                  )}

                  {/* Resumo de Valores */}
                  <div className="pt-2 border-t border-[#EBEBEB] space-y-1 text-xs">
                    {couponDiscount > 0 && (
                      <div className="flex justify-between text-green-700 font-bold">
                        <span>Descontos:</span>
                        <span>-{formatPrice(couponDiscount)}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-baseline pt-1">
                      <span className="font-bold text-sm text-black">Subtotal:</span>
                      <span className="font-extrabold text-xl text-black">{formatPrice(finalSubtotal)}</span>
                    </div>
                  </div>

                  {/* CTA Finalizar */}
                  <button
                    onClick={() => {
                      setCartItems([]);
                      setCartOpen(false);
                      setCheckoutSuccess(true);
                    }}
                    className="w-full bg-[#D94A2F] hover:bg-[#0B0B0B] text-white text-xs font-extrabold tracking-widest py-3.5 uppercase transition-colors shadow-md cursor-pointer text-center"
                  >
                    FINALIZAR COMPRA
                  </button>

                  <button
                    onClick={() => setCartOpen(false)}
                    className="w-full text-center text-xs font-bold text-black/60 hover:text-black uppercase tracking-wider py-1 cursor-pointer block"
                  >
                    CONTINUAR COMPRANDO
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 14. PRODUCT DETAILS MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden animate-fade-in">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setSelectedProduct(null)} />

          <div className="relative bg-white max-w-3xl w-full shadow-2xl flex flex-col md:flex-row overflow-y-auto max-h-[90vh] md:max-h-none z-10 border border-[#EBEBEB]">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 bg-white border border-[#EBEBEB] rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>

            {/* Imagem do Modal */}
            <div className="md:w-1/2 bg-[#FAFAFA] p-6 flex flex-col items-center justify-center border-r border-[#EBEBEB]">
              <div className="aspect-square w-full flex items-center justify-center relative">
                <img
                  src={galleryImages[activeImageIdx] || selectedProduct.img}
                  alt={selectedProduct.name}
                  className="max-h-[320px] max-w-full object-contain"
                />
              </div>

              {galleryImages.length > 1 && (
                <div className="flex gap-2 mt-4">
                  {galleryImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImageIdx(i)}
                      className={`w-12 h-12 p-1 bg-white border cursor-pointer ${
                        activeImageIdx === i ? "border-2 border-[#D94A2F]" : "border-[#E0E0E0]"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Detalhes do Modal */}
            <div className="md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#D94A2F] bg-[#D94A2F]/10 px-2 py-0.5">
                  {selectedProduct.badge || selectedProduct.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold uppercase text-black mt-2 mb-2 leading-tight">
                  {selectedProduct.name}
                </h2>

                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs text-black/60 ml-2 font-semibold">
                    {selectedProduct.rating} ({selectedProduct.reviews} avaliações)
                  </span>
                </div>

                {/* Bloco de Preços Modal */}
                <div className="py-3 border-y border-[#EBEBEB] mb-4">
                  {selectedProduct.originalPrice && (
                    <span className="text-xs text-black/40 line-through block">
                      {formatPrice(selectedProduct.originalPrice)}
                    </span>
                  )}
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-extrabold text-black">
                      {formatPrice(calculatePixPrice(selectedProduct.price))}
                    </span>
                    <span className="text-xs font-bold text-[#D94A2F]">no PIX</span>
                  </div>
                  <span className="text-xs text-black/60 font-medium block mt-0.5">
                    ou {formatPrice(selectedProduct.price)} em até 6x de {formatPrice(selectedProduct.price / 6)} sem juros
                  </span>
                </div>

                {/* Cores */}
                {selectedProduct.colors && (
                  <div className="mb-4">
                    <span className="text-xs font-bold text-black uppercase block mb-2">
                      Cor: {chosenColor}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.colors.map((c) => (
                        <button
                          key={c.name}
                          onClick={() => {
                            setChosenColor(c.name);
                            setActiveImageIdx(0);
                          }}
                          className={`px-3 py-1.5 border text-xs font-semibold uppercase flex items-center gap-2 cursor-pointer ${
                            chosenColor === c.name
                              ? "bg-[#0B0B0B] text-white border-black"
                              : "bg-white text-black border-[#D0D0D0] hover:border-black"
                          }`}
                        >
                          <span className="w-3 h-3 rounded-full border border-black/20" style={{ backgroundColor: c.hex }} />
                          {c.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tamanhos */}
                {selectedProduct.sizes.length > 0 && (
                  <div className="mb-5">
                    <span className="text-xs font-bold text-black uppercase block mb-2">
                      Selecione o Tamanho
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.sizes.map((s) => (
                        <button
                          key={s}
                          onClick={() => setChosenSize(s)}
                          className={`min-w-[38px] h-9 px-2 border text-xs font-bold uppercase cursor-pointer transition-colors ${
                            chosenSize === s
                              ? "bg-[#D94A2F] text-white border-[#D94A2F]"
                              : "bg-white text-black border-[#D0D0D0] hover:border-black"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => {
                  addToCart(selectedProduct, chosenSize, chosenColor);
                  setSelectedProduct(null);
                }}
                className="w-full bg-[#D94A2F] hover:bg-[#0B0B0B] text-white text-xs font-bold tracking-widest py-3.5 uppercase transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-2"
              >
                <ShoppingBag size={16} />
                ADICIONAR À SACOLA
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 15. CHECKOUT SUCCESS MODAL */}
      {checkoutSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setCheckoutSuccess(false)} />
          <div className="relative bg-white max-w-md w-full p-8 shadow-2xl text-center flex flex-col items-center gap-4 z-10 border border-[#EBEBEB] animate-fade-in">
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl font-black">
              ✓
            </div>
            <h2 className="text-2xl font-black uppercase text-black font-['Montserrat',sans-serif]">
              PEDIDO CONCLUÍDO!
            </h2>
            <p className="text-xs text-black/60 leading-relaxed">
              Obrigado por comprar na Sandrini! Enviamos todos os detalhes e o código de rastreamento para o seu e-mail.
            </p>
            <button
              onClick={() => setCheckoutSuccess(false)}
              className="mt-2 w-full bg-[#0B0B0B] hover:bg-[#D94A2F] text-white text-xs font-black tracking-widest py-3 uppercase transition-colors cursor-pointer"
            >
              CONTINUAR COMPRANDO
            </button>
          </div>
        </div>
      )}

      {/* 16. VIDEO MODAL INSTITUCIONAL */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-4xl aspect-video bg-black overflow-hidden shadow-2xl">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/80 text-white rounded-full flex items-center justify-center hover:bg-[#D94A2F] transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
            <iframe
              className="w-full h-full border-0"
              src="https://www.youtube.com/embed/67EMFQhCpc4?autoplay=1"
              title="Sandrini Performance"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
