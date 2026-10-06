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
  ChevronDown,
  Zap,
  Award,
  Activity,
  Layers,
  Eye,
  CheckCircle2,
  PackageCheck,
  Cpu,
} from "lucide-react";
import logoImg from "@/imports/logonew-v1-01.png";
import logoFooterImg from "@/imports/logonew-v1-01.png";

// Import imagens do repositório
const globImages = import.meta.glob('@/imports/**/*.{jpg,png,webp}', { eager: true, import: 'default' }) as Record<string, string>;
import heroBanner1Img from "@/imports/BANNERS PRINCIPAIS 1400X900/1/1400x900.jpg";
import heroBanner2Img from "@/imports/BANNERS PRINCIPAIS 1400X900/2/1400x900.jpg";
import bannerMaster1 from "@/imports/Desktop_1920x500px.jpg";
import banner1Img from "@/imports/banner-1.png";
import banner2Img from "@/imports/banner-2.png";
import banner3Img from "@/imports/banner-3.png";
import bannerFilaAdizeroImg from "@/imports/banner-fila-adizero.jpg";
import bannerFilaSpeedZoneImg from "@/imports/banner-fila-speedzone.jpg";
import bannerAeroRunVermelho from "@/imports/Tênis Aero Run - Sandrini/PRETO PRETO E VERMELHO/ambientada 2 ajuste pequeno no logo.png";
import bannerAeroSparkBranco from "@/imports/Tênis Aero Spark - Sandrini/BRANCO CINZA E LARANJA/TênisMasculinoSandriniAeroSparkBranco408-CAPA2.jpg";
import bannerSprytePreto from "@/imports/Tênis Spryte - Sandrini/PRETO/TenisSandriniSpryteMasculinoPretoBranco-CAPA.jpg";

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

const BRANDS_LIST = [
  "Umbro", "Fila", "Penalty", "New Balance", "Topper", "Mormaii",
  "Adidas", "Poker", "Rainha", "Mikasa", "Kagiva", "Wilson"
];

const NAV_LINKS = [
  { label: "LANÇAMENTO", category: "Novidades" },
  { label: "TREINO & ACADEMIA", category: "Fitness" },
  { label: "CORRIDA", category: "Corrida" },
  { label: "LIFESTYLE", category: "Lifestyle" },
  { label: "MARCAS", category: "Marcas" },
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
  { img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&h=600&fit=crop&auto=format", link: "https://www.instagram.com/sandrini_oficial" },
  { img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop&auto=format", link: "https://www.instagram.com/sandrini_oficial" },
  { img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&h=600&fit=crop&auto=format", link: "https://www.instagram.com/sandrini_oficial" },
  { img: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&h=600&fit=crop&auto=format", link: "https://www.instagram.com/sandrini_oficial" },
  { img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop&auto=format", link: "https://www.instagram.com/sandrini_oficial" },
  { img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop&auto=format", link: "https://www.instagram.com/sandrini_oficial" },
  { img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=600&h=600&fit=crop&auto=format", link: "https://www.instagram.com/sandrini_oficial" },
  { img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=600&fit=crop&auto=format", link: "https://www.instagram.com/sandrini_oficial" },
];

function formatPrice(val: number) {
  return val.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function calculatePixPrice(val: number) {
  // 5% de desconto extra no PIX estilo Torx
  return val * 0.95;
}

// Card de produto moderno Sandrini Performance
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
      className="group flex flex-col bg-white border border-black/8 hover:border-black/20 rounded-2xl overflow-hidden transition-all duration-300 relative hover:shadow-xl hover:-translate-y-1.5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Imagem com Hover Flip & Aura */}
      <div
        className="relative aspect-square w-full overflow-hidden bg-[#F8F9FB] group-hover:bg-[#F3F5F9] transition-colors cursor-pointer p-4 flex items-center justify-center"
        onClick={() => onClickDetails(product, null)}
      >
        {/* Wishlist Heart */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (onToggleFavorite) onToggleFavorite(product.id);
          }}
          className="absolute top-3 right-3 z-10 w-8.5 h-8.5 rounded-full bg-white/90 backdrop-blur-xs border border-black/8 flex items-center justify-center text-black/60 hover:text-[#D94A2F] hover:bg-white transition-all shadow-xs cursor-pointer"
          title="Favoritar"
        >
          <Heart size={16} className={isFavorite ? "fill-[#D94A2F] text-[#D94A2F]" : ""} />
        </button>

        {/* Badges Pill Modernas */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 pointer-events-none items-start">
          {product.discountBadge && (
            <span className="bg-[#D94A2F] text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full shadow-xs font-['Chakra_Petch',sans-serif]">
              {product.discountBadge}
            </span>
          )}
          {product.badge && (
            <span className="bg-[#0B0B0B] text-white text-[9.5px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full shadow-xs font-['Chakra_Petch',sans-serif]">
              {product.badge}
            </span>
          )}
        </div>

        {/* Imagem Principal */}
        <img
          src={product.img}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-contain p-4 transition-all duration-300 ease-out group-hover:scale-105 ${
            hovered && product.secondImg ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Segunda Imagem no Hover */}
        {product.secondImg && (
          <img
            src={product.secondImg}
            alt={`${product.name} detalhe`}
            className={`absolute inset-0 w-full h-full object-contain p-4 transition-all duration-300 ease-out group-hover:scale-105 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>

      {/* Info do Produto */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px] text-black/40 font-semibold font-['Chakra_Petch',sans-serif] uppercase tracking-wider">
            <span>{product.category || "PERFORMANCE"}</span>
            <span className="text-emerald-700 font-bold">• EM ESTOQUE</span>
          </div>

          <h3
            onClick={() => onClickDetails(product, null)}
            className="font-bold text-[13.5px] sm:text-[14.5px] text-[#0B0B0B] leading-snug line-clamp-2 cursor-pointer hover:text-[#D94A2F] transition-colors font-['Chakra_Petch',sans-serif] tracking-[0.01em]"
          >
            {product.name}
          </h3>
        </div>

        {/* Cores disponíveis em swatches minimalistas */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center gap-1.5 py-0.5">
            {product.colors.map((c) => (
              <span
                key={c.name}
                className="w-3.5 h-3.5 rounded-full border border-black/20 shadow-2xs hover:scale-125 transition-transform"
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
            <span className="text-[10.5px] text-black/45 ml-1 font-medium font-['Chakra_Petch',sans-serif]">
              +{product.colors.length} cores
            </span>
          </div>
        )}

        {/* Bloco de Preços Limpo & Esportivo */}
        <div className="pt-2.5 border-t border-black/6 flex flex-col gap-1">
          {product.originalPrice && (
            <span className="text-xs text-black/40 line-through font-medium">
              De {formatPrice(product.originalPrice)}
            </span>
          )}
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-lg sm:text-xl font-bold text-[#0B0B0B] font-['Chakra_Petch',sans-serif] tracking-tight">
              {formatPrice(pixPrice)}
            </span>
            <span className="text-[10px] font-bold uppercase text-[#D94A2F] bg-[#D94A2F]/10 px-1.5 py-0.5 rounded font-['Chakra_Petch',sans-serif]">
              NO PIX
            </span>
          </div>
          <p className="text-[11px] text-black/60 font-medium">
            ou <b className="text-black font-semibold">6x de {formatPrice(installmentValue)}</b> sem juros
          </p>
        </div>

        {/* Botão de Compra Moderno (Redireciona para a Página do Produto) */}
        <button
          onClick={() => onClickDetails(product, null)}
          className="w-full bg-[#0B0B0B] hover:bg-[#D94A2F] text-white text-xs font-bold tracking-wider py-3 rounded-xl uppercase transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-xs hover:shadow-md font-['Chakra_Petch',sans-serif] group/btn mt-1"
        >
          <ShoppingBag size={14} className="transition-transform group-hover/btn:scale-110" />
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

  // 3 Banners Principais Originais (1920x500 Nítidos)
  const heroSlides = [
    {
      title: "Banner Sandrini Aero Spark",
      fullBannerImg: bannerMaster1,
      category: "Corrida",
    },
    {
      title: "Banner Fila Adizero",
      fullBannerImg: bannerFilaAdizeroImg,
      category: "Fitness",
    },
    {
      title: "Banner Fila SpeedZone",
      fullBannerImg: bannerFilaSpeedZoneImg,
      category: "Corrida",
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

  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [productQty, setProductQty] = useState(1);
  const [productCep, setProductCep] = useState("");
  const [productShippingResult, setProductShippingResult] = useState(false);
  const [activeTab, setActiveTab] = useState<"descricao" | "especificacoes" | "avaliacoes" | "medidas">("descricao");
  const [productLayoutVersion, setProductLayoutVersion] = useState<"v1" | "v2">("v1");
  const [v2ActiveTab, setV2ActiveTab] = useState<"tecnologia" | "especificacoes" | "avaliacoes" | "medidas">("tecnologia");
  const [v2ImageIdx, setV2ImageIdx] = useState(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openProductDetails = (product: Product, defaultColor: string | null = null) => {
    setChosenSize(product.sizes[0] || "41");
    const initialColor = defaultColor || (product.colors ? product.colors[0].name : null);
    setChosenColor(initialColor);
    setSelectedProduct(product);
    setActiveImageIdx(0);
    setV2ImageIdx(0);
    setProductQty(1);
    setProductShippingResult(false);
    setCurrentPage("product");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToCategory = (catName: string) => {
    setCurrentPage(catName);
    setSelectedProduct(null);
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

  const activeColorObj = selectedProduct?.colors?.find((c) => c.name === chosenColor) || selectedProduct?.colors?.[0];

  // Recupera todas as fotos da cor selecionada ou do produto
  let galleryImages: string[] = [];
  if (selectedProduct) {
    if (activeColorObj?.folderPath) {
      const matched = Object.entries(globImages)
        .filter(([path]) => path.includes(activeColorObj.folderPath!))
        .map(([_, url]) => url);
      if (matched.length > 0) {
        galleryImages = matched;
      }
    }
    if (galleryImages.length === 0) {
      if (activeColorObj?.img) galleryImages.push(activeColorObj.img);
      else if (selectedProduct.img) galleryImages.push(selectedProduct.img);
      if (selectedProduct.secondImg && !galleryImages.includes(selectedProduct.secondImg)) {
        galleryImages.push(selectedProduct.secondImg);
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0B0B0B] font-['Outfit',sans-serif] antialiased">
      {/* 1. TOPO ANÚNCIO ROTATIVO (Torx Header Ticker - Mais Fino & Delicado) */}
      <div className="bg-[#111111] border-b border-white/10 text-white py-1 px-4 text-center text-[10.5px] font-semibold tracking-[0.1em] uppercase overflow-hidden relative select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
          <span className="inline-flex items-center gap-2 animate-fade-in key={currentTopNoticeIdx}">
            {TORX_TOPBAR_MESSAGES[currentTopNoticeIdx]}
          </span>
        </div>
      </div>

      {/* 2. HEADER PRINCIPAL (Dark Style com Logo Branca e Letras Brancas) */}
      <header className="sticky top-0 z-40 bg-[#0B0B0B] border-b border-[#222222] transition-all duration-300 shadow-md">
        <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 h-18 sm:h-20 flex items-center justify-between gap-6">
          {/* 1. Esquerda: Menu Mobile Trigger + Logo Sandrini (Bem à esquerda) */}
          <div className="flex items-center gap-3 shrink-0">
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

          {/* 2. Centro: Todas as Categorias juntas e uniformes (Letras Mais Altas e Elegantes) */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9 font-['Chakra_Petch',sans-serif]">
            <button
              onClick={() => navigateToCategory("Novidades")}
              className={`text-[14px] sm:text-[14.5px] font-medium tracking-[0.06em] uppercase transition-all relative py-2 cursor-pointer whitespace-nowrap ${currentPage === "Novidades" ? "text-[#D94A2F]" : "text-white hover:text-[#D94A2F]"
                }`}
            >
              LANÇAMENTO
              {currentPage === "Novidades" && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D94A2F]" />
              )}
            </button>
            <button
              onClick={() => navigateToCategory("Fitness")}
              className={`text-[14px] sm:text-[14.5px] font-medium tracking-[0.06em] uppercase transition-all relative py-2 cursor-pointer whitespace-nowrap ${currentPage === "Fitness" ? "text-[#D94A2F]" : "text-white hover:text-[#D94A2F]"
                }`}
            >
              TREINO & ACADEMIA
              {currentPage === "Fitness" && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D94A2F]" />
              )}
            </button>
            <button
              onClick={() => navigateToCategory("Corrida")}
              className={`text-[14px] sm:text-[14.5px] font-medium tracking-[0.06em] uppercase transition-all relative py-2 cursor-pointer whitespace-nowrap ${currentPage === "Corrida" ? "text-[#D94A2F]" : "text-white hover:text-[#D94A2F]"
                }`}
            >
              CORRIDA
              {currentPage === "Corrida" && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D94A2F]" />
              )}
            </button>
            <button
              onClick={() => navigateToCategory("Lifestyle")}
              className={`text-[14px] sm:text-[14.5px] font-medium tracking-[0.06em] uppercase transition-all relative py-2 cursor-pointer whitespace-nowrap ${currentPage === "Lifestyle" ? "text-[#D94A2F]" : "text-white hover:text-[#D94A2F]"
                }`}
            >
              LIFESTYLE
              {currentPage === "Lifestyle" && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D94A2F]" />
              )}
            </button>

            {/* MARCAS DROPDOWN */}
            <div className="relative group py-2">
              <button
                onClick={() => navigateToCategory("Marcas")}
                className={`text-[14px] sm:text-[14.5px] font-medium tracking-[0.06em] uppercase transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${currentPage === "Marcas" ? "text-[#D94A2F]" : "text-white group-hover:text-[#D94A2F]"
                  }`}
              >
                MARCAS
                <ChevronDown
                  size={14}
                  className="transition-transform group-hover:rotate-180 text-white/70 group-hover:text-[#D94A2F] stroke-[1.5]"
                />
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[640px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-[#111111] border border-[#282828] border-t-2 border-t-[#D94A2F] rounded-lg p-5 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-[#222222] pb-2.5 mb-3.5">
                    <span className="text-[11px] font-bold tracking-wider text-[#888888] uppercase">Nossas Marcas</span>
                    <button
                      onClick={() => navigateToCategory("Marcas")}
                      className="text-[11px] font-semibold tracking-wider text-[#D94A2F] hover:text-white uppercase transition-colors"
                    >
                      Ver todas as marcas &rarr;
                    </button>
                  </div>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                    {BRANDS_LIST.map((brand) => (
                      <button
                        key={brand}
                        onClick={() => {
                          setSearchQuery(brand);
                          navigateToCategory("busca");
                        }}
                        className="bg-[#1A1A1A] hover:bg-white hover:text-black border border-[#282828] hover:border-[#D94A2F] rounded p-2 text-center text-[11px] font-medium uppercase text-white transition-all transform hover:-translate-y-0.5 shadow-sm"
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* 3. Direita: Ícones de Ação Juntinhos e Alinhados à Direita (Torx Style) */}
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0 ml-auto lg:ml-0">
            {/* Search Button / Expandable Input */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center bg-[#1A1A1A] rounded-full px-3 py-1 border border-white/20 shadow-xl animate-fade-in">
                  <Search size={16} className="text-white/60 mr-2 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && searchQuery.trim()) {
                        navigateToCategory("busca");
                      }
                    }}
                    placeholder="Pesquisar..."
                    className="bg-transparent text-xs text-white outline-none w-28 sm:w-36 placeholder:text-white/50"
                    autoFocus
                  />
                  <button
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery("");
                    }}
                    className="text-white/60 hover:text-white p-0.5 ml-1 cursor-pointer"
                  >
                    <X size={14} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-1.5 text-white hover:text-[#D94A2F] transition-colors rounded-full hover:bg-white/10 cursor-pointer"
                  title="Pesquisar"
                >
                  <Search size={20} />
                </button>
              )}
            </div>

            {/* Favoritos */}
            <button
              onClick={() => navigateToCategory("Favoritos")}
              className="p-1.5 text-white hover:text-[#D94A2F] transition-colors rounded-full hover:bg-white/10 relative cursor-pointer hidden sm:flex"
              title="Favoritos"
            >
              <Heart size={20} />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D94A2F] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </button>

            {/* Conta / Perfil */}
            <button
              onClick={() => alert("Área do cliente Sandrini - Login & Pedidos")}
              className="p-1.5 text-white hover:text-[#D94A2F] transition-colors rounded-full hover:bg-white/10 cursor-pointer hidden sm:flex"
              title="Minha Conta"
            >
              <User size={20} />
            </button>

            {/* Sacola / Cart Torx Pill */}
            <button
              onClick={() => setCartOpen(true)}
              className="bg-[#D94A2F] hover:bg-[#c23e25] text-white px-3.5 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer shadow-sm hover:scale-105 shrink-0"
              title="Sacola de Compras"
            >
              <ShoppingBag size={17} />
              <span className="text-xs font-bold leading-none">{cartCount}</span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#0B0B0B] border-t border-[#222222] px-6 py-6 flex flex-col gap-4 shadow-xl font-['Chakra_Petch',sans-serif]">
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

      {currentPage === "home" ? (
        <>
          {/* 4. HERO BANNER PRINCIPAL (Proporção Torx 2032x774) */}
          <section className="relative w-full overflow-hidden bg-[#0B0B0B] aspect-[2032/774] flex items-center group">
            {heroSlides.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  } bg-[#0B0B0B] flex items-center justify-center`}
              >
                {slide.fullBannerImg ? (
                  <div
                    className="relative w-full h-full cursor-pointer flex items-center justify-center bg-black group/master"
                    onClick={() => navigateToCategory(slide.category)}
                  >
                    <img
                      src={slide.fullBannerImg}
                      alt={slide.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/master:scale-[1.01]"
                    />
                  </div>
                ) : (
                  <>
                    {/* Fundo Gradiente com Efeito de Luz / Aura Atlética */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#060606] via-[#0D0D0D] to-[#120806]" />

                    {/* Aura de Luz Dinâmica com a cor do modelo */}
                    <div
                      className="absolute right-4 sm:right-16 top-1/2 -translate-y-1/2 w-64 sm:w-[500px] h-64 sm:h-[500px] rounded-full blur-[100px] opacity-25 pointer-events-none transition-colors duration-1000"
                      style={{ backgroundColor: slide.glowColor || "#D94A2F" }}
                    />

                    {/* Grid Sutil de Performance */}
                    <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

                    <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 w-full h-full flex flex-col-reverse sm:flex-row items-center justify-between gap-6 sm:gap-12 py-8 sm:py-0">
                      {/* Coluna da Esquerda: Textos, Badges, Tech Specs & CTA */}
                      <div className="max-w-xl text-white text-center sm:text-left z-10">
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2 sm:mb-3">
                          <span className="inline-block bg-[#D94A2F] text-white text-[10px] sm:text-[11px] font-black tracking-widest uppercase px-3 py-1">
                            {slide.badge}
                          </span>
                          {slide.pixPrice && (
                            <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-[#FAFAFA] text-[10px] sm:text-[11px] font-extrabold uppercase px-2.5 py-1">
                              À VISTA <b className="text-[#D94A2F]">{slide.pixPrice}</b> NO PIX
                            </span>
                          )}
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-[0.03em] leading-none mb-2 sm:mb-3 font-['Chakra_Petch',sans-serif]">
                          {slide.title}
                        </h1>

                        <p className="text-xs sm:text-sm font-bold tracking-wider text-[#D94A2F] uppercase mb-2">
                          {slide.subtitle}
                        </p>

                        <p className="text-xs sm:text-sm text-white/75 mb-4 line-clamp-2 max-w-md font-medium hidden sm:block">
                          {slide.desc}
                        </p>

                        {/* Chips de Tecnologia Torx */}
                        {slide.techSpecs && (
                          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-4 sm:mb-6">
                            {slide.techSpecs.map((spec) => (
                              <span
                                key={spec}
                                className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md border border-white/15 text-white text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 shadow-sm"
                              >
                                <Sparkles size={11} className="text-[#D94A2F]" />
                                {spec}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center justify-center sm:justify-start gap-4">
                          <button
                            onClick={() => navigateToCategory(slide.category)}
                            className="bg-[#D94A2F] hover:bg-white hover:text-black text-white text-xs font-extrabold tracking-widest px-8 py-3.5 uppercase transition-all duration-300 shadow-xl cursor-pointer inline-flex items-center gap-2 group/btn"
                          >
                            {slide.cta}
                            <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                          </button>
                        </div>
                      </div>

                      {/* Coluna da Direita: Foto Real do Tênis Sandrini (100% visível, sem cortes!) */}
                      <div className="w-full sm:w-1/2 flex items-center justify-center relative select-none py-2 sm:py-0">
                        <div className="relative group/shoe flex flex-col items-center">
                          <img
                            src={slide.shoeImage}
                            alt={slide.title}
                            className="max-h-[200px] sm:max-h-[300px] md:max-h-[360px] w-auto max-w-[90%] sm:max-w-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.95)] transition-all duration-700 hover:scale-105 hover:-translate-y-1"
                          />
                          {/* Sombra de apoio no chão */}
                          <div className="w-3/4 h-3.5 bg-black/90 blur-md rounded-full mt-1 sm:mt-2" />
                        </div>
                      </div>
                    </div>
                  </>
                )}
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
                  className={`h-1.5 transition-all rounded-full cursor-pointer ${i === currentSlide ? "w-8 bg-[#D94A2F]" : "w-2.5 bg-white/50"
                    }`}
                />
              ))}
            </div>
          </section>

          {/* 3. FAIXA CUPOM MODERNA (Abaixo do Banner) */}
          <div className="bg-[#FFFFFF] border-b border-black/6 py-3.5 px-4 text-center">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold">
              <span className="text-[#0B0B0B]">
                Ganhe <b>7% OFF</b> com Cupom:
              </span>
              <div className="inline-flex items-center gap-2 bg-[#FAFAFC] border border-[#D94A2F]/40 px-3.5 py-1.5 rounded-full shadow-2xs">
                <span className="font-bold text-[#D94A2F] tracking-wider uppercase font-['Chakra_Petch',sans-serif]">
                  BEMVINDOSANDRINI
                </span>
                <button
                  onClick={copyCouponCode}
                  className="text-[11px] font-bold bg-[#D94A2F] hover:bg-black text-white px-3 py-1 rounded-full transition-colors flex items-center gap-1 cursor-pointer font-['Chakra_Petch',sans-serif]"
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

          {/* 5. GRADE DE 3 BANNERS DE CATEGORIAS MODERNOS */}
          <section className="py-10 sm:py-14 bg-[#FFFFFF]">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {TORX_CATEGORY_GRID.map((item) => (
                  <div
                    key={item.title}
                    onClick={() => navigateToCategory(item.category)}
                    className="group relative overflow-hidden bg-black aspect-[4/5] rounded-3xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-85 transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
                    <div className="absolute inset-0 p-7 flex flex-col justify-end text-white">
                      <span className="text-[10px] font-bold tracking-widest text-[#D94A2F] uppercase mb-1.5 font-['Chakra_Petch',sans-serif]">
                        {item.badge}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-[0.03em] font-['Chakra_Petch',sans-serif] leading-tight mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-white/75 mb-4 line-clamp-2 leading-relaxed">
                        {item.subtitle}
                      </p>
                      <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-white group-hover:text-[#D94A2F] transition-colors font-['Chakra_Petch',sans-serif]">
                        CONFERIR <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 6. VITRINES ROTATIVAS SANDRINI PERFORMANCE */}
          <section className="py-12 sm:py-16 bg-[#FAFAFC] border-y border-black/6">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              {/* Vitrine Tabs */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#D94A2F] block mb-1 font-['Chakra_Petch',sans-serif]">
                    COLEÇÃO 2026
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold uppercase font-['Chakra_Petch',sans-serif] tracking-[0.03em] text-[#0B0B0B]">
                    {activeVitrineTab}
                  </h2>
                </div>

                <div className="bg-white p-1 rounded-2xl border border-black/8 shadow-2xs inline-flex flex-wrap gap-1">
                  {["CORRIDA", "TREINO & ACADEMIA", "MAIS VENDIDOS", "LANÇAMENTOS", "KITS"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveVitrineTab(tab)}
                      className={`text-xs font-bold tracking-wider px-4 py-2 rounded-xl uppercase transition-all cursor-pointer font-['Chakra_Petch',sans-serif] ${
                        activeVitrineTab === tab
                          ? "bg-[#0B0B0B] text-white shadow-xs"
                          : "text-black/60 hover:text-black hover:bg-black/5"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Vitrine Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
              <div className="text-center mt-10">
                <button
                  onClick={() => navigateToCategory(activeVitrineTab === "KITS" ? "Kits" : "Todos")}
                  className="inline-flex items-center gap-2.5 bg-white hover:bg-[#0B0B0B] text-[#0B0B0B] hover:text-white border border-black/15 hover:border-[#0B0B0B] font-bold text-xs tracking-widest px-8 py-3.5 rounded-xl uppercase transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md font-['Chakra_Petch',sans-serif] group"
                >
                  VER MAIS PRODUTOS ({vitrineProducts.length})
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </section>

          {/* 7. FAIXA COMUNICADO / 4 PILARES MODERNOS */}
          <section className="py-12 bg-white border-b border-black/6">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="flex items-center gap-4 p-5 rounded-2xl border border-black/8 bg-[#FAFAFC] shadow-2xs hover:shadow-md hover:border-black/20 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-[#D94A2F]/10 text-[#D94A2F] flex items-center justify-center shrink-0">
                    <RotateCcw size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-black font-['Chakra_Petch',sans-serif]">
                      TROCA FACILITADA
                    </h4>
                    <p className="text-xs text-black/60 mt-0.5 leading-snug">
                      Você tem 30 dias para realizar a troca de qualquer produto
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 rounded-2xl border border-black/8 bg-[#FAFAFC] shadow-2xs hover:shadow-md hover:border-black/20 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-[#D94A2F]/10 text-[#D94A2F] flex items-center justify-center shrink-0">
                    <Truck size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-black font-['Chakra_Petch',sans-serif]">
                      FRETE GRÁTIS
                    </h4>
                    <p className="text-xs text-black/60 mt-0.5 leading-snug">
                      Para todo Brasil em compras a partir de R$ 259,00
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 rounded-2xl border border-black/8 bg-[#FAFAFC] shadow-2xs hover:shadow-md hover:border-black/20 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-[#D94A2F]/10 text-[#D94A2F] flex items-center justify-center shrink-0">
                    <Tag size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-black font-['Chakra_Petch',sans-serif]">
                      GANHE 7% OFF
                    </h4>
                    <p className="text-xs text-black/60 mt-0.5 leading-snug">
                      Utilize o cupom BEMVINDOSANDRINI em sua 1ª Compra
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 rounded-2xl border border-black/8 bg-[#FAFAFC] shadow-2xs hover:shadow-md hover:border-black/20 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-[#D94A2F]/10 text-[#D94A2F] flex items-center justify-center shrink-0">
                    <Flame size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-black font-['Chakra_Petch',sans-serif]">
                      CLUBE VIP
                    </h4>
                    <p className="text-xs text-black/60 mt-0.5 leading-snug">
                      Seja membro do nosso clube e receba lançamentos em primeira mão
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 8. QUEM SOMOS / BRAND VIDEO SECTION MODERNO */}
          <section className="py-16 sm:py-20 bg-[#0B0B0B] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-[#D94A2F] text-xs font-bold tracking-[0.2em] uppercase font-['Chakra_Petch',sans-serif] block mb-1">
                  NOSSA HISTÓRIA & PROPÓSITO
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold uppercase font-['Chakra_Petch',sans-serif] tracking-[0.03em]">
                  QUEM SOMOS
                </h2>
                <p className="text-xs sm:text-sm text-white/70 mt-2 max-w-lg mx-auto leading-relaxed">
                  Criamos produtos esportivos e casuais com design inovador, tecnologia anatômica e conforto absoluto para o seu dia a dia.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                {/* Video Card */}
                <div
                  onClick={() => setVideoModalOpen(true)}
                  className="lg:col-span-2 relative aspect-video bg-black rounded-3xl overflow-hidden group cursor-pointer border border-white/10 shadow-2xl min-h-[320px]"
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
                    <span className="bg-black/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-['Chakra_Petch',sans-serif]">
                      VÍDEO DE PERFORMANCE
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold uppercase font-['Chakra_Petch',sans-serif] mt-2 tracking-[0.02em]">
                      A tecnologia por trás de cada passo
                    </h3>
                  </div>
                </div>

                {/* Side Lifestyle Cards */}
                <div className="flex flex-col gap-6">
                  <div className="flex-1 bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between hover:border-white/20 transition-all">
                    <div>
                      <span className="text-[#D94A2F] text-xs font-bold tracking-wider uppercase font-['Chakra_Petch',sans-serif]">
                        QUALIDADE COMPROVADA
                      </span>
                      <h4 className="text-lg sm:text-xl font-bold uppercase mt-1 mb-2 font-['Chakra_Petch',sans-serif]">
                        Mais de 500.000 clientes
                      </h4>
                      <p className="text-xs text-white/60 leading-relaxed">
                        Foco em matérias-primas nobres, amortecimento durável e corte anatômico com padrão internacional.
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-amber-400 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-amber-400" />
                      ))}
                      <span className="text-xs text-white/80 ml-2 font-bold font-['Chakra_Petch',sans-serif]">4.9 / 5.0</span>
                    </div>
                  </div>

                  <div className="flex-1 bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between hover:border-white/20 transition-all">
                    <div>
                      <span className="text-[#D94A2F] text-xs font-bold tracking-wider uppercase font-['Chakra_Petch',sans-serif]">
                        PRODUÇÃO NACIONAL
                      </span>
                      <h4 className="text-lg sm:text-xl font-bold uppercase mt-1 mb-2 font-['Chakra_Petch',sans-serif]">
                        Direto da fábrica para você
                      </h4>
                      <p className="text-xs text-white/60 leading-relaxed">
                        Preço justo, entrega rastreada e suporte dedicado para você comprar com total tranquilidade.
                      </p>
                    </div>
                    <a
                      href="#newsletter"
                      className="text-xs font-bold text-[#D94A2F] hover:underline uppercase inline-flex items-center gap-1 mt-3 font-['Chakra_Petch',sans-serif]"
                    >
                      FAÇA PARTE DO CLUBE <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 9. INSTAGRAM GRID MODERNO */}
          <section className="py-12 bg-[#FFFFFF] border-t border-black/6">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#D94A2F] uppercase tracking-widest block mb-1 font-['Chakra_Petch',sans-serif]">
                    FEED SOCIAL
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold uppercase text-[#0B0B0B] font-['Chakra_Petch',sans-serif]">
                    INSTAGRAM <b className="text-[#D94A2F]">@SANDRINI_OFICIAL</b>
                  </h2>
                </div>
                <a
                  href="https://www.instagram.com/sandrini_oficial/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold uppercase text-black hover:text-[#D94A2F] transition-colors font-['Chakra_Petch',sans-serif] hidden sm:inline-flex items-center gap-1"
                >
                  Seguir no Instagram →
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                {INSTAGRAM_POSTS.map((post, i) => (
                  <a
                    key={i}
                    href={post.link}
                    target="_blank"
                    rel="noreferrer"
                    className="relative aspect-square overflow-hidden rounded-2xl group bg-black/5 shadow-2xs hover:shadow-md transition-all"
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
      ) : currentPage === "product" && selectedProduct ? (
        /* ========================================================================= */
        /* PÁGINA DE PRODUTO OFICIAL SANDRINI                                       */
        /* ========================================================================= */
        <div className="bg-[#FFFFFF] min-h-screen pb-16 animate-fade-in text-[#111111] font-['Open_Sans',sans-serif]">
          {productLayoutVersion === "v1" ? (
            /* ========================================================================= */
            /* VERSÃO 1: TORX MINIMAL CLÁSSICO                                           */
            /* ========================================================================= */
            <div className="max-w-[1400px] mx-auto px-4 sm:px-8 pt-6 sm:pt-10">
              {/* 1. Breadcrumb Discreto */}
              <div className="flex items-center justify-between border-b border-black/5 pb-4 mb-8">
                <nav className="flex items-center gap-2 text-xs font-normal text-black/50">
                  <button
                    onClick={() => {
                      setCurrentPage("home");
                      setSelectedProduct(null);
                    }}
                    className="hover:text-black transition-colors cursor-pointer"
                  >
                    Início
                  </button>
                  <span className="text-black/30">/</span>
                  <button
                    onClick={() => {
                      setCurrentPage(selectedProduct.category);
                      setSelectedProduct(null);
                    }}
                    className="hover:text-black transition-colors cursor-pointer"
                  >
                    {selectedProduct.category}
                  </button>
                  <span className="text-black/30">/</span>
                  <span className="text-black font-medium truncate max-w-[240px] sm:max-w-md">
                    {selectedProduct.name}
                  </span>
                </nav>

                <button
                  onClick={() => {
                    setCurrentPage("home");
                    setSelectedProduct(null);
                  }}
                  className="text-xs font-semibold text-black/60 hover:text-[#D94A2F] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  ← Voltar para o catálogo
                </button>
              </div>

              {/* 2. Grid Principal: Galeria (Esquerda) + Compra (Direita) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                {/* COLUNA ESQUERDA: GALERIA DE FOTOS EM GRADE DE 2 COLUNAS */}
                <div className="lg:col-span-7">
                  <div className="relative">
                    {/* Selo de Desconto Minimalista */}
                    {selectedProduct.discountBadge && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-[#D94A2F] text-white text-[11px] font-bold tracking-wider px-3 py-1 uppercase shadow-xs">
                          {selectedProduct.discountBadge}
                        </span>
                      </div>
                    )}

                    {/* Grade de 2 Colunas */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {galleryImages.map((imgUrl, idx) => (
                        <div
                          key={idx}
                          className="group relative bg-[#F8F8F8] overflow-hidden aspect-square flex items-center justify-center p-6 transition-all duration-300 hover:bg-[#F3F3F3]"
                        >
                          <img
                            src={imgUrl}
                            alt={`${selectedProduct.name} vista ${idx + 1}`}
                            className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 ease-out group-hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Garantia Oficial Sandrini */}
                  <div className="mt-8 py-5 px-6 bg-[#FAFAFA] border border-[#EAEAEA] flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <ShieldCheck className="text-[#D94A2F] shrink-0" size={24} />
                      <div>
                        <h4 className="text-xs font-bold text-black uppercase tracking-wide">Produto Oficial Sandrini</h4>
                        <p className="text-xs text-black/60 mt-0.5">Garantia oficial de 90 dias com Nota Fiscal direta de fábrica.</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-[#D94A2F] uppercase tracking-wider whitespace-nowrap">
                      100% Original
                    </span>
                  </div>
                </div>

                {/* COLUNA DIREITA: INFORMAÇÕES & COMPRA STICKY */}
                <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
                  {/* 1. Header do Produto */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold tracking-widest text-[#D94A2F] uppercase font-['Chakra_Petch',sans-serif]">
                        {selectedProduct.badge || "Sandrini Performance"}
                      </span>
                      <span className="text-[11px] text-black/40 font-mono">
                        SAN-{selectedProduct.id}90
                      </span>
                    </div>

                    <h1 className="text-2xl sm:text-[28px] font-bold tracking-[0.03em] text-black leading-tight uppercase font-['Chakra_Petch',sans-serif]">
                      {selectedProduct.name}
                    </h1>

                    {/* Avaliações */}
                    <div className="flex items-center gap-2 pt-1 text-xs">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="font-bold text-black">{selectedProduct.rating}</span>
                      <span className="text-black/40">({selectedProduct.reviews} avaliações)</span>
                      <span className="text-black/20">•</span>
                      <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded text-[11px]">
                        +1.200 vendidos
                      </span>
                    </div>
                  </div>

                  {/* 2. Preços (Limpo & Destaque) */}
                  <div className="py-4 border-y border-black/10 space-y-1">
                    {selectedProduct.originalPrice && (
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-black/40 line-through">
                          De {formatPrice(selectedProduct.originalPrice)}
                        </span>
                        <span className="text-[#D94A2F] font-bold text-[11px]">
                          Economize {formatPrice(selectedProduct.originalPrice - calculatePixPrice(selectedProduct.price))}
                        </span>
                      </div>
                    )}

                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-bold text-black tracking-[0.02em] font-['Chakra_Petch',sans-serif]">
                        {formatPrice(calculatePixPrice(selectedProduct.price))}
                      </span>
                      <span className="text-xs font-bold text-[#D94A2F] uppercase tracking-wider font-['Chakra_Petch',sans-serif]">
                        no PIX
                      </span>
                      <span className="text-xs text-black/40 font-normal">
                        (10% de desconto)
                      </span>
                    </div>

                    <p className="text-xs text-black/60 pt-1 font-normal">
                      ou <b className="font-semibold text-black">{formatPrice(selectedProduct.price)}</b> em até <b className="font-semibold text-black">6x de {formatPrice(selectedProduct.price / 6)}</b> sem juros no cartão
                    </p>
                  </div>

                  {/* 3. Seleção de Cor com Miniaturas Fotográficas Reais */}
                  {selectedProduct.colors && selectedProduct.colors.length > 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-black/70">
                          Cor: <b className="text-black font-bold">{chosenColor}</b>
                        </span>
                        <span className="text-[11px] text-black/40">
                          {selectedProduct.colors.length} opções
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2.5">
                        {selectedProduct.colors.map((c) => {
                          const isSelected = chosenColor === c.name;
                          return (
                            <button
                              key={c.name}
                              onClick={() => {
                                setChosenColor(c.name);
                                setActiveImageIdx(0);
                                setV2ImageIdx(0);
                              }}
                              className={`relative w-16 h-16 p-1 bg-[#F9F9F9] border-2 cursor-pointer transition-all ${
                                isSelected
                                  ? "border-black shadow-xs scale-105"
                                  : "border-transparent hover:border-black/30"
                              }`}
                              title={c.name}
                            >
                              <img
                                src={c.img}
                                alt={c.name}
                                className="w-full h-full object-contain mix-blend-multiply"
                              />
                              {isSelected && (
                                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-black text-white flex items-center justify-center text-[9px] font-bold">
                                  ✓
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* 4. Seleção de Tamanho */}
                  {selectedProduct.sizes && selectedProduct.sizes.length > 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-black/70">
                          Tamanho: <b className="text-black font-bold">{chosenSize}</b>
                        </span>

                        <button
                          onClick={() => setSizeGuideOpen(true)}
                          className="text-xs font-semibold text-[#D94A2F] hover:underline uppercase inline-flex items-center gap-1 cursor-pointer"
                        >
                          <SlidersHorizontal size={12} /> Tabela de Medidas
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.sizes.map((s) => {
                          const isSelected = chosenSize === s;
                          return (
                            <button
                              key={s}
                              onClick={() => setChosenSize(s)}
                              className={`w-12 h-11 border text-xs font-bold uppercase cursor-pointer transition-all flex items-center justify-center ${
                                isSelected
                                  ? "bg-black text-white border-black font-extrabold shadow-xs"
                                  : "bg-white text-black/80 border-[#E2E2E2] hover:border-black hover:text-black"
                              }`}
                            >
                              {s}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* 5. Alerta de Estoque Discreto */}
                  <div className="flex items-center gap-2 text-xs font-medium text-amber-900 bg-amber-50/80 border border-amber-200/60 px-3.5 py-2.5">
                    <Flame size={15} className="text-[#D94A2F] shrink-0" />
                    <span>Poucas unidades restantes no tamanho {chosenSize}.</span>
                  </div>

                  {/* 6. Botões de Compra */}
                  <div className="space-y-2.5 pt-1">
                    <div className="flex gap-2.5">
                      {/* Quantidade */}
                      <div className="flex items-center border border-[#D0D0D0] bg-white">
                        <button
                          onClick={() => setProductQty((q) => Math.max(1, q - 1))}
                          className="w-10 h-12 flex items-center justify-center text-sm font-semibold text-black hover:bg-black/5 cursor-pointer"
                        >
                          -
                        </button>
                        <span className="w-10 text-center font-bold text-xs text-black">
                          {productQty}
                        </span>
                        <button
                          onClick={() => setProductQty((q) => q + 1)}
                          className="w-10 h-12 flex items-center justify-center text-sm font-semibold text-black hover:bg-black/5 cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      {/* Adicionar à Sacola */}
                      <button
                        onClick={() => {
                          for (let i = 0; i < productQty; i++) {
                            addToCart(selectedProduct, chosenSize, chosenColor);
                          }
                        }}
                        className="flex-1 bg-[#0B0B0B] hover:bg-[#222222] text-white text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer flex items-center justify-center gap-2 h-12"
                      >
                        <ShoppingBag size={16} />
                        Adicionar à Sacola
                      </button>
                    </div>

                    {/* Comprar Agora (Coral Sandrini) */}
                    <button
                      onClick={() => {
                        for (let i = 0; i < productQty; i++) {
                          addToCart(selectedProduct, chosenSize, chosenColor);
                        }
                        setCartOpen(true);
                      }}
                      className="w-full bg-[#D94A2F] hover:bg-[#c23e25] text-white text-xs font-extrabold tracking-widest uppercase transition-all py-4 shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-2"
                    >
                      Comprar Agora
                      <ArrowRight size={16} />
                    </button>
                  </div>

                  {/* 7. Cálculo de Frete Limpo */}
                  <div className="pt-4 border-t border-black/10 space-y-3">
                    <span className="text-xs font-bold text-black uppercase tracking-wider flex items-center gap-1.5">
                      <Truck size={15} className="text-[#D94A2F]" />
                      Calcular Frete e Prazo
                    </span>

                    <div className="flex gap-2">
                      <input
                        type="text"
                        maxLength={9}
                        value={productCep}
                        onChange={(e) => setProductCep(e.target.value.replace(/\D/g, "").slice(0, 8))}
                        placeholder="00000-000"
                        className="flex-1 bg-white border border-[#D0D0D0] px-3.5 py-2.5 text-xs outline-none focus:border-black font-medium uppercase"
                      />
                      <button
                        onClick={() => {
                          if (productCep.length >= 8) setProductShippingResult(true);
                        }}
                        className="bg-black hover:bg-[#D94A2F] text-white text-xs font-bold px-5 py-2.5 uppercase transition-colors cursor-pointer"
                      >
                        Calcular
                      </button>
                    </div>

                    {productShippingResult && (
                      <div className="space-y-2 pt-2 text-xs">
                        <div className="flex items-center justify-between bg-emerald-50 text-emerald-950 p-3 border border-emerald-200">
                          <span className="font-semibold">🚚 PAC Econômico (4 a 6 dias úteis)</span>
                          <span className="font-bold text-emerald-700 uppercase">GRÁTIS</span>
                        </div>
                        <div className="flex items-center justify-between bg-white text-black p-3 border border-[#E0E0E0]">
                          <span className="font-semibold">⚡ Sedex Expresso (1 a 2 dias úteis)</span>
                          <span className="font-bold text-black">R$ 14,90</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 8. 4 Benefícios e Confiança */}
                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-black/80">
                    <div className="flex items-center gap-2.5">
                      <Truck size={17} className="text-[#D94A2F] shrink-0" />
                      <span className="font-medium text-[11.5px] leading-tight">Frete Grátis &gt; R$ 259</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <RotateCcw size={17} className="text-[#D94A2F] shrink-0" />
                      <span className="font-medium text-[11.5px] leading-tight">1ª Troca Grátis 30 Dias</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CreditCard size={17} className="text-[#D94A2F] shrink-0" />
                      <span className="font-medium text-[11.5px] leading-tight">Até 6x Sem Juros</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck size={17} className="text-[#D94A2F] shrink-0" />
                      <span className="font-medium text-[11.5px] leading-tight">Garantia Sandrini 90D</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Abas de Conteúdo Detalhado Versão 1 */}
              <div className="mt-16 border-t border-[#EBEBEB] pt-10">
                <div className="flex flex-wrap items-center gap-2 border-b border-[#EBEBEB] pb-3 mb-8">
                  {[
                    { id: "descricao", label: "DESCRIÇÃO DO PRODUTO" },
                    { id: "especificacoes", label: "ESPECIFICAÇÕES TÉCNICAS" },
                    { id: "avaliacoes", label: `AVALIAÇÕES (${selectedProduct.reviews})` },
                    { id: "medidas", label: "TABELA DE MEDIDAS" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`text-xs font-bold tracking-wider uppercase px-4 py-2.5 border-b-2 transition-all cursor-pointer ${
                        activeTab === tab.id
                          ? "border-[#D94A2F] text-[#D94A2F] bg-[#D94A2F]/5"
                          : "border-transparent text-black/60 hover:text-black"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="max-w-4xl">
                  {activeTab === "descricao" && (
                    <div className="space-y-4 text-xs sm:text-sm text-black/80 leading-relaxed font-normal">
                      <p className="font-semibold text-black text-sm sm:text-base">
                        O {selectedProduct.name} foi desenvolvido com a mais alta tecnologia esportiva para entregar performance, amortecimento e durabilidade em cada passada.
                      </p>
                      <p>
                        Com cabedal confeccionado em <b>Engineered Mesh respirável</b>, o modelo proporciona ventilação contínua aos pés, evitando o superaquecimento durante treinos intensos e provas de longa distância.
                      </p>
                      <p>
                        A entressola conta com o composto exclusivo <b>Sandrini MaxPulse™</b>, que absorve os impactos com máxima eficiência e devolve a energia em impulsão responsiva para você correr mais longe com menos esforço.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                        <div className="bg-[#FAFAFA] p-4 border border-[#EBEBEB]">
                          <h5 className="font-black uppercase text-xs text-black mb-1">Amortecimento Dinâmico</h5>
                          <p className="text-xs text-black/60">Absorção de impacto contínua com espuma responsiva de alta densidade.</p>
                        </div>
                        <div className="bg-[#FAFAFA] p-4 border border-[#EBEBEB]">
                          <h5 className="font-black uppercase text-xs text-black mb-1">Cabedal AirFlow</h5>
                          <p className="text-xs text-black/60">Tecido tecnológico perfurado a laser para respirabilidade térmica.</p>
                        </div>
                        <div className="bg-[#FAFAFA] p-4 border border-[#EBEBEB]">
                          <h5 className="font-black uppercase text-xs text-black mb-1">Solado Sandrini Grip</h5>
                          <p className="text-xs text-black/60">Borracha de alta tração e durabilidade para asfalto e esteira.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "especificacoes" && (
                    <div className="border border-[#EBEBEB] divide-y divide-[#EBEBEB] text-xs">
                      {[
                        { label: "Categoria", val: selectedProduct.category },
                        { label: "Drop", val: "8 mm" },
                        { label: "Peso Aproximado", val: "245g (tamanho 41 individual)" },
                        { label: "Tipo de Pisada", val: "Neutra / Supinada leve" },
                        { label: "Cabedal", val: "Engineered Mesh com reforços estruturais" },
                        { label: "Entressola", val: "Sandrini MaxPulse™ EVA High Rebound" },
                        { label: "Solado", val: "Borracha vulcanizada antiderrapante" },
                        { label: "Garantia do Fabricante", val: "90 dias contra defeitos de fabricação" },
                        { label: "Origem", val: "Nacional (Sandrini Oficial)" },
                      ].map((row, i) => (
                        <div key={i} className="grid grid-cols-3 p-3.5 bg-white even:bg-[#FAFAFA]">
                          <span className="font-bold text-black uppercase">{row.label}</span>
                          <span className="col-span-2 text-black/70">{row.val}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "avaliacoes" && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 bg-[#FAFAFA] border border-[#EBEBEB] p-5">
                        <div className="text-center border-r border-[#EBEBEB] pr-6">
                          <span className="text-4xl font-black text-black">{selectedProduct.rating}</span>
                          <div className="flex text-amber-400 justify-center mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          <span className="text-[10px] text-black/50 uppercase block mt-1">{selectedProduct.reviews} opiniões</span>
                        </div>
                        <div className="text-xs text-black/70 space-y-1">
                          <p className="font-bold text-black">98% dos clientes recomendam este modelo</p>
                          <p>Avaliações reais de clientes que compraram e testaram o produto.</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {[
                          { name: "Lucas M.", date: "Há 3 dias", rating: 5, text: "Tênis sensacional! Muito leve, o amortecimento é perfeito para rodagens de 10km a 21km. Acabamento de primeira linha da Sandrini." },
                          { name: "Rodrigo S.", date: "Há 1 semana", rating: 5, text: "Superou as expectativas! Confortável demais no pé, não aperta os dedos e a sola agarra muito bem tanto no asfalto quanto na esteira." },
                          { name: "Carlos Eduardo", date: "Há 2 semanas", rating: 5, text: "Excelente custo-benefício. O design é lindo demais ao vivo, as fotos representam perfeitamente. Entrega muito rápida!" }
                        ].map((rev, idx) => (
                          <div key={idx} className="bg-white border border-[#EBEBEB] p-4 space-y-1.5">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-xs text-black uppercase">{rev.name}</span>
                                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5">COMPRA VERIFICADA</span>
                              </div>
                              <span className="text-[10px] text-black/40">{rev.date}</span>
                            </div>
                            <div className="flex text-amber-400">
                              {[...Array(rev.rating)].map((_, i) => (
                                <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                              ))}
                            </div>
                            <p className="text-xs text-black/75 leading-relaxed">{rev.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "medidas" && (
                    <div className="space-y-4">
                      <p className="text-xs text-black/70">
                        Utilize uma fita métrica ou régua para medir o comprimento do seu pé (do calcanhar à ponta do dedão) e encontre sua numeração ideal:
                      </p>
                      <div className="border border-[#EBEBEB] divide-y divide-[#EBEBEB] text-xs">
                        <div className="grid grid-cols-2 p-3 bg-black text-white font-bold uppercase">
                          <span>Tamanho BR</span>
                          <span>Comprimento do Pé (cm)</span>
                        </div>
                        {[
                          { size: "38", cm: "25,5 cm" },
                          { size: "39", cm: "26,0 cm" },
                          { size: "40", cm: "26,5 cm" },
                          { size: "41", cm: "27,5 cm" },
                          { size: "42", cm: "28,0 cm" },
                          { size: "43", cm: "29,0 cm" },
                          { size: "44", cm: "29,5 cm" },
                        ].map((row, i) => (
                          <div key={i} className="grid grid-cols-2 p-3 bg-white even:bg-[#FAFAFA]">
                            <span className="font-bold text-black">{row.size}</span>
                            <span className="text-black/70">{row.cm}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* ========================================================================= */
            /* VERSÃO 2: SANDRINI PERFORMANCE 2026 (ULTRA-MODERNO, TECH & STATE OF THE ART) */
            /* ========================================================================= */
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-6 sm:pt-10">
              {/* 1. Header de Navegação Futurista & Tagline */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/8 pb-4 mb-8">
                <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-black/50">
                  <button
                    onClick={() => {
                      setCurrentPage("home");
                      setSelectedProduct(null);
                    }}
                    className="hover:text-[#D94A2F] transition-colors cursor-pointer"
                  >
                    Sandrini
                  </button>
                  <ChevronRight size={13} className="text-black/30" />
                  <button
                    onClick={() => {
                      setCurrentPage(selectedProduct.category);
                      setSelectedProduct(null);
                    }}
                    className="hover:text-[#D94A2F] transition-colors cursor-pointer text-black/70"
                  >
                    {selectedProduct.category}
                  </button>
                  <ChevronRight size={13} className="text-black/30" />
                  <span className="text-[#0B0B0B] font-bold truncate max-w-[200px] sm:max-w-md">
                    {selectedProduct.name}
                  </span>
                </nav>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 bg-[#0B0B0B] text-white text-[10.5px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full shadow-xs">
                    <Zap size={12} className="text-[#D94A2F] fill-[#D94A2F]" />
                    LABS PRO 2026
                  </span>
                  <button
                    onClick={() => {
                      setCurrentPage("home");
                      setSelectedProduct(null);
                    }}
                    className="text-xs font-bold text-black/60 hover:text-[#D94A2F] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    ← Voltar ao Início
                  </button>
                </div>
              </div>

              {/* 2. Grid Principal: Palco Visual de Performance (Esquerda) + Cápsula de Compra High-Tech (Direita) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                {/* COLUNA ESQUERDA (7 COLS): PALCO DE EXIBIÇÃO AMBIENTAL MULTI-ÂNGULO */}
                <div className="lg:col-span-7 space-y-5">
                  {/* Palco Principal do Produto - Clean Studio Floating */}
                  <div className="relative rounded-3xl overflow-hidden bg-[#FBFBFD] border border-black/5 p-6 sm:p-10 transition-all flex flex-col items-center justify-center min-h-[380px] sm:min-h-[460px]">
                    {/* Top Overlay Badges */}
                    <div className="flex items-center justify-between w-full absolute top-5 left-5 right-5 z-10 pointer-events-none px-2">
                      <div className="flex items-center gap-2">
                        <span className="bg-[#D94A2F] text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-xs font-['Chakra_Petch',sans-serif]">
                          {selectedProduct.discountBadge || "-10% NO PIX"}
                        </span>
                        <span className="bg-black/5 backdrop-blur-md text-[#0B0B0B] text-[10.5px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full font-['Chakra_Petch',sans-serif]">
                          ED. 2026
                        </span>
                      </div>

                      <div className="pointer-events-auto">
                        <button
                          onClick={() => toggleFavorite(selectedProduct.id)}
                          className="w-10 h-10 rounded-full bg-white border border-black/8 flex items-center justify-center text-black/60 hover:text-[#D94A2F] hover:bg-white transition-all shadow-xs cursor-pointer"
                          title="Favoritar"
                        >
                          <Heart
                            size={18}
                            className={favorites.includes(selectedProduct.id) ? "fill-[#D94A2F] text-[#D94A2F]" : ""}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Imagem Central Flutuante */}
                    <div className="relative w-full flex items-center justify-center select-none py-6 my-auto">
                      <img
                        src={galleryImages[v2ImageIdx] || galleryImages[0] || selectedProduct.img}
                        alt={`${selectedProduct.name} vista ${v2ImageIdx + 1}`}
                        className="relative z-10 max-h-[320px] sm:max-h-[400px] w-auto max-w-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:scale-105"
                      />
                    </div>

                    {/* Indicador Minimalista de Ângulo */}
                    <div className="w-full flex items-center justify-between pt-2 border-t border-black/5 text-[11px] text-black/50 font-medium">
                      <span className="flex items-center gap-1.5 font-['Chakra_Petch',sans-serif]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Visualização em Alta Resolução
                      </span>
                      <span className="font-['Chakra_Petch',sans-serif] tracking-wider uppercase">
                        Vista {v2ImageIdx + 1} de {galleryImages.length}
                      </span>
                    </div>
                  </div>

                  {/* Carrossel / Miniaturas de Ângulos Interativos */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-black/60">
                      <span className="font-semibold text-black flex items-center gap-1.5 font-['Chakra_Petch',sans-serif] uppercase tracking-wider text-[11px]">
                        <Eye size={13} className="text-[#D94A2F]" />
                        Galeria de Ângulos
                      </span>
                      <span className="text-[11px] text-black/40">Selecione para alternar</span>
                    </div>

                    <div className="flex flex-wrap gap-2.5 sm:gap-3">
                      {galleryImages.map((imgUrl, idx) => {
                        const isCurrent = v2ImageIdx === idx;
                        return (
                          <button
                            key={idx}
                            onClick={() => setV2ImageIdx(idx)}
                            className={`group relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden p-1.5 border transition-all cursor-pointer ${
                              isCurrent
                                ? "border-[#D94A2F] ring-2 ring-[#D94A2F]/20 bg-white shadow-xs"
                                : "border-black/10 bg-[#FAFAFC] hover:border-black/30 hover:bg-white"
                            }`}
                          >
                            <img
                              src={imgUrl}
                              alt={`Ângulo ${idx + 1}`}
                              className="w-full h-full object-contain mix-blend-multiply transition-transform duration-200 group-hover:scale-105"
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* COLUNA DIREITA (5 COLS): CÁPSULA DE COMPRA CLEAN & AIRY */}
                <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
                  {/* Bloco de Título & Identificação */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[11px] font-bold text-[#D94A2F] tracking-widest uppercase font-['Chakra_Petch',sans-serif]">
                        {selectedProduct.category || "PERFORMANCE"} • REF: SAN-{selectedProduct.id}90
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Em Estoque
                      </span>
                    </div>

                    <h1 className="text-2xl sm:text-[28px] font-bold uppercase tracking-[0.02em] text-[#0B0B0B] leading-tight font-['Chakra_Petch',sans-serif]">
                      {selectedProduct.name}
                    </h1>

                    {/* Social Proof & Rating */}
                    <div className="flex items-center gap-2 pt-0.5">
                      <div className="flex items-center gap-1 text-xs">
                        <div className="flex items-center text-amber-400">
                          <Star size={13} className="fill-amber-400" />
                        </div>
                        <span className="font-['Chakra_Petch',sans-serif] font-bold text-black">{selectedProduct.rating}</span>
                        <span className="text-black/40 text-[11px]">({selectedProduct.reviews} avaliações)</span>
                      </div>
                      <span className="text-black/20">•</span>
                      <span className="text-[11px] text-emerald-700 font-semibold">
                        98% recomendam este modelo
                      </span>
                    </div>
                  </div>

                  {/* Preço Limpo & Estruturado */}
                  <div className="pt-2 border-t border-black/8 space-y-2">
                    {selectedProduct.originalPrice && (
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-black/40 line-through">
                          De {formatPrice(selectedProduct.originalPrice)}
                        </span>
                        <span className="text-[#D94A2F] font-bold text-[11px] font-['Chakra_Petch',sans-serif]">
                          Economize {formatPrice(selectedProduct.originalPrice - calculatePixPrice(selectedProduct.price))}
                        </span>
                      </div>
                    )}

                    <div className="flex items-baseline gap-3 flex-wrap">
                      <span className="text-3xl sm:text-4xl font-bold text-[#0B0B0B] tracking-tight font-['Chakra_Petch',sans-serif]">
                        {formatPrice(calculatePixPrice(selectedProduct.price))}
                      </span>
                      <span className="bg-[#D94A2F] text-white text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded font-['Chakra_Petch',sans-serif]">
                        10% OFF NO PIX
                      </span>
                    </div>

                    <p className="text-xs text-black/60">
                      ou <span className="font-semibold text-black">6x de {formatPrice(selectedProduct.price / 6)}</span> sem juros (Total {formatPrice(selectedProduct.price)})
                    </p>

                    {/* Cupom Limpo & Minimalista */}
                    <div className="mt-3 inline-flex items-center justify-between gap-3 bg-[#F8F9FA] border border-black/8 rounded-xl px-3 py-2 w-full">
                      <div className="flex items-center gap-2">
                        <Tag size={14} className="text-[#D94A2F]" />
                        <span className="text-xs text-black/70 font-medium">
                          Cupom de 1ª Compra: <b className="text-[#D94A2F] font-['Chakra_Petch',sans-serif] font-bold">BEMVINDOSANDRINI</b>
                        </span>
                      </div>
                      <button
                        onClick={copyCouponCode}
                        className="text-[10px] font-bold text-black uppercase hover:text-[#D94A2F] transition-colors cursor-pointer font-['Chakra_Petch',sans-serif] shrink-0"
                      >
                        {couponCopied ? "✓ Copiado!" : "Copiar"}
                      </button>
                    </div>
                  </div>

                  {/* Seletor de Cores - Swatches Minimalistas */}
                  {selectedProduct.colors && selectedProduct.colors.length > 0 && (
                    <div className="space-y-2.5 pt-2 border-t border-black/8">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-black/70">
                          Cor: <b className="text-black font-bold font-['Chakra_Petch',sans-serif]">{chosenColor}</b>
                        </span>
                        <span className="text-[11px] text-black/40">
                          {selectedProduct.colors.length} opções
                        </span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        {selectedProduct.colors.map((c) => {
                          const isSelected = chosenColor === c.name;
                          return (
                            <button
                              key={c.name}
                              onClick={() => {
                                setChosenColor(c.name);
                                setActiveImageIdx(0);
                                setV2ImageIdx(0);
                              }}
                              title={c.name}
                              className={`group relative w-14 h-14 rounded-xl overflow-hidden p-1 border-2 transition-all cursor-pointer bg-white ${
                                isSelected
                                  ? "border-[#D94A2F] ring-2 ring-[#D94A2F]/20 shadow-xs scale-105"
                                  : "border-black/10 hover:border-black/30"
                              }`}
                            >
                              <img
                                src={c.img}
                                alt={c.name}
                                className="w-full h-full object-contain mix-blend-multiply"
                              />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Seletor de Tamanhos - Clean Matrix */}
                  {selectedProduct.sizes && selectedProduct.sizes.length > 0 && (
                    <div className="space-y-2.5 pt-2 border-t border-black/8">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-black/70">
                          Tamanho: <b className="text-black font-bold font-['Chakra_Petch',sans-serif]">{chosenSize} BR</b>
                        </span>

                        <button
                          onClick={() => setSizeGuideOpen(true)}
                          className="text-xs font-bold text-[#D94A2F] hover:underline uppercase inline-flex items-center gap-1 cursor-pointer font-['Chakra_Petch',sans-serif]"
                        >
                          <SlidersHorizontal size={12} /> Tabela de Medidas
                        </button>
                      </div>

                      <div className="grid grid-cols-7 gap-2">
                        {selectedProduct.sizes.map((s) => {
                          const isSelected = chosenSize === s;
                          return (
                            <button
                              key={s}
                              onClick={() => setChosenSize(s)}
                              className={`h-11 rounded-xl text-xs font-bold uppercase cursor-pointer transition-all flex items-center justify-center border font-['Chakra_Petch',sans-serif] ${
                                isSelected
                                  ? "bg-[#0B0B0B] text-white border-[#0B0B0B] shadow-sm scale-105"
                                  : "bg-white text-black/80 border-black/15 hover:border-black hover:text-black hover:bg-black/5"
                              }`}
                            >
                              {s}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Botões de Ação */}
                  <div className="space-y-3 pt-2">
                    {/* Botão Primário: Comprar Agora */}
                    <button
                      onClick={() => {
                        for (let i = 0; i < productQty; i++) {
                          addToCart(selectedProduct, chosenSize, chosenColor);
                        }
                        setCartOpen(true);
                      }}
                      className="w-full bg-[#D94A2F] hover:bg-[#c23f26] text-white text-sm font-bold tracking-[0.05em] uppercase transition-all py-4 rounded-xl shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2 group/buy font-['Chakra_Petch',sans-serif]"
                    >
                      <Zap size={16} className="fill-white" />
                      COMPRAR AGORA
                      <ArrowRight size={16} className="transition-transform group-hover/buy:translate-x-1" />
                    </button>

                    {/* Botão Secundário: Adicionar à Sacola com Seletor de Qtd */}
                    <div className="flex gap-2.5">
                      <div className="flex items-center border border-black/15 bg-white rounded-xl overflow-hidden font-['Chakra_Petch',sans-serif]">
                        <button
                          onClick={() => setProductQty((q) => Math.max(1, q - 1))}
                          className="w-9 h-11 flex items-center justify-center text-sm font-bold text-black hover:bg-black/5 cursor-pointer"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-bold text-xs text-black">
                          {productQty}
                        </span>
                        <button
                          onClick={() => setProductQty((q) => q + 1)}
                          className="w-9 h-11 flex items-center justify-center text-sm font-bold text-black hover:bg-black/5 cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => {
                          for (let i = 0; i < productQty; i++) {
                            addToCart(selectedProduct, chosenSize, chosenColor);
                          }
                        }}
                        className="flex-1 bg-white hover:bg-black/5 border border-black/20 text-black text-xs font-bold tracking-wider uppercase transition-all rounded-xl cursor-pointer flex items-center justify-center gap-2 h-11 font-['Chakra_Petch',sans-serif]"
                      >
                        <ShoppingBag size={15} />
                        Adicionar à Sacola
                      </button>
                    </div>
                  </div>

                  {/* Simulador de Frete Clean */}
                  <div className="pt-2 border-t border-black/8 space-y-2.5">
                    <span className="text-xs font-semibold text-black uppercase tracking-wider flex items-center gap-1.5 font-['Chakra_Petch',sans-serif]">
                      <Truck size={14} className="text-[#D94A2F]" />
                      Calcular Frete e Prazo
                    </span>

                    <div className="flex gap-2">
                      <input
                        type="text"
                        maxLength={9}
                        value={productCep}
                        onChange={(e) => setProductCep(e.target.value.replace(/\D/g, "").slice(0, 8))}
                        placeholder="Informe seu CEP..."
                        className="flex-1 bg-white border border-black/15 rounded-xl px-3 py-2 text-xs outline-none focus:border-[#D94A2F] font-medium"
                      />
                      <button
                        onClick={() => {
                          if (productCep.length >= 8) setProductShippingResult(true);
                        }}
                        className="bg-[#0B0B0B] hover:bg-[#D94A2F] text-white text-xs font-bold px-4 py-2 rounded-xl uppercase transition-colors cursor-pointer font-['Chakra_Petch',sans-serif]"
                      >
                        Calcular
                      </button>
                    </div>

                    {productShippingResult && (
                      <div className="space-y-1.5 pt-1 text-xs">
                        <div className="flex items-center justify-between bg-emerald-50 text-emerald-950 px-3 py-2 rounded-lg border border-emerald-200">
                          <span className="font-medium text-xs">PAC Econômico (3 a 5 dias úteis)</span>
                          <span className="font-bold text-emerald-700 uppercase font-['Chakra_Petch',sans-serif]">GRÁTIS</span>
                        </div>
                        <div className="flex items-center justify-between bg-[#F8F9FA] text-black px-3 py-2 rounded-lg border border-black/8">
                          <span className="font-medium text-xs">Sedex Expresso (24h a 48h)</span>
                          <span className="font-bold text-black font-['Chakra_Petch',sans-serif]">R$ 14,90</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Selos de Confiança Compactos e Elegantes */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-black/8 text-[11px] text-black/70">
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-[#FAFAFC]">
                      <RotateCcw size={15} className="text-[#D94A2F] shrink-0" />
                      <span><b>1ª Troca Grátis</b> em 30 dias</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-[#FAFAFC]">
                      <ShieldCheck size={15} className="text-[#D94A2F] shrink-0" />
                      <span><b>Garantia Oficial</b> 90 dias</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-[#FAFAFC]">
                      <Lock size={15} className="text-[#D94A2F] shrink-0" />
                      <span><b>Compra 100% Segura</b></span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-[#FAFAFC]">
                      <Truck size={15} className="text-[#D94A2F] shrink-0" />
                      <span><b>Frete Grátis</b> &gt; R$ 259</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. SEÇÃO DE ANATOMIA & ENGENHARIA SANDRINI 2026 (DEEP DIVE VISUAL) */}
              <div className="mt-20 pt-12 border-t border-black/10">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <span className="text-xs font-bold tracking-widest text-[#D94A2F] uppercase block mb-2 font-['Chakra_Petch',sans-serif]">
                    SANDRINI PERFORMANCE LABS
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-[0.04em] text-[#0B0B0B] font-['Chakra_Petch',sans-serif]">
                    ENGENHARIA & TECNOLOGIA
                  </h2>
                  <p className="text-xs sm:text-sm text-black/60 mt-2">
                    Cada componente do {selectedProduct.name} foi desenvolvido para maximizar o retorno de energia, leveza e durabilidade.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Card 1: MaxPulse EVA */}
                  <div className="bg-gradient-to-b from-white to-[#F8F9FB] border border-black/8 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all group">
                    <div className="w-12 h-12 rounded-2xl bg-[#0B0B0B] text-[#D94A2F] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Zap size={24} />
                    </div>
                    <span className="text-[10.5px] font-semibold tracking-wider text-[#D94A2F] uppercase block mb-1 font-['Chakra_Petch',sans-serif]">
                      ABSORÇÃO & RETORNO
                    </span>
                    <h3 className="text-base sm:text-lg font-bold uppercase text-black mb-2 tracking-[0.03em] font-['Chakra_Petch',sans-serif]">
                      MaxPulse™ EVA
                    </h3>
                    <p className="text-xs text-black/70 leading-relaxed">
                      Entressola em composto responsivo de alta densidade que absorve 94% do impacto e devolve energia instantânea na passada.
                    </p>
                  </div>

                  {/* Card 2: AirFlow 3D Mesh */}
                  <div className="bg-gradient-to-b from-white to-[#F8F9FB] border border-black/8 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all group">
                    <div className="w-12 h-12 rounded-2xl bg-[#0B0B0B] text-[#D94A2F] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Layers size={24} />
                    </div>
                    <span className="text-[10.5px] font-semibold tracking-wider text-[#D94A2F] uppercase block mb-1 font-['Chakra_Petch',sans-serif]">
                      RESPIRABILIDADE TÉRMICA
                    </span>
                    <h3 className="text-base sm:text-lg font-bold uppercase text-black mb-2 tracking-[0.03em] font-['Chakra_Petch',sans-serif]">
                      AirFlow 3D Mesh
                    </h3>
                    <p className="text-xs text-black/70 leading-relaxed">
                      Trama tridimensional perfurada a laser para circulação de ar 360°, mantendo os pés até 3°C mais secos durante a corrida.
                    </p>
                  </div>

                  {/* Card 3: CarbonGrip Outsole */}
                  <div className="bg-gradient-to-b from-white to-[#F8F9FB] border border-black/8 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all group">
                    <div className="w-12 h-12 rounded-2xl bg-[#0B0B0B] text-[#D94A2F] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Activity size={24} />
                    </div>
                    <span className="text-[10.5px] font-semibold tracking-wider text-[#D94A2F] uppercase block mb-1 font-['Chakra_Petch',sans-serif]">
                      TRAÇÃO MULTIDIRECIONAL
                    </span>
                    <h3 className="text-base sm:text-lg font-bold uppercase text-black mb-2 tracking-[0.03em] font-['Chakra_Petch',sans-serif]">
                      CarbonGrip™ Rubber
                    </h3>
                    <p className="text-xs text-black/70 leading-relaxed">
                      Solado com composto de borracha vulcanizada e cravos hexagonais que oferecem máxima aderência em asfalto molhado ou esteira.
                    </p>
                  </div>

                  {/* Card 4: Anatomical Heel Lock */}
                  <div className="bg-gradient-to-b from-white to-[#F8F9FB] border border-black/8 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all group">
                    <div className="w-12 h-12 rounded-2xl bg-[#0B0B0B] text-[#D94A2F] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <ShieldCheck size={24} />
                    </div>
                    <span className="text-[10.5px] font-semibold tracking-wider text-[#D94A2F] uppercase block mb-1 font-['Chakra_Petch',sans-serif]">
                      ESTABILIDADE ANTI-TORÇÃO
                    </span>
                    <h3 className="text-base sm:text-lg font-bold uppercase text-black mb-2 tracking-[0.03em] font-['Chakra_Petch',sans-serif]">
                      Anatomical Heel Cup
                    </h3>
                    <p className="text-xs text-black/70 leading-relaxed">
                      Contraforte anatômico estruturado que fixa o calcanhar com firmeza, prevenindo deslizes internos e protegendo o tendão.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. Abas Detalhadas Versão 2 (Tabs com Estilo Moderno) */}
              <div className="mt-16 pt-10 border-t border-black/10">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 border-b border-black/10 pb-4 mb-8">
                  {[
                    { id: "tecnologia", label: "Visão Geral & Tecnologia" },
                    { id: "especificacoes", label: "Ficha Técnica Completa" },
                    { id: "avaliacoes", label: `Avaliações dos Clientes (${selectedProduct.reviews})` },
                    { id: "medidas", label: "Tabela de Medidas & Guia" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setV2ActiveTab(tab.id as any)}
                      className={`text-xs font-bold tracking-[0.04em] uppercase px-5 py-2.5 rounded-full transition-all cursor-pointer font-['Chakra_Petch',sans-serif] ${
                        v2ActiveTab === tab.id
                          ? "bg-[#0B0B0B] text-white shadow-sm"
                          : "bg-[#F4F4F6] text-black/70 hover:bg-black/10 hover:text-black"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="max-w-4xl">
                  {v2ActiveTab === "tecnologia" && (
                    <div className="space-y-4 text-xs sm:text-sm text-black/80 leading-relaxed">
                      <p className="font-semibold text-black text-sm sm:text-base">
                        Projetado para atletas que exigem performance sem abrir mão do conforto no dia a dia.
                      </p>
                      <p>
                        O <b>{selectedProduct.name}</b> combina engenharia moderna e materiais nobres para oferecer um ciclo de passada suave, amortecimento dinâmico e durabilidade excepcional.
                      </p>
                    </div>
                  )}

                  {v2ActiveTab === "especificacoes" && (
                    <div className="rounded-2xl border border-black/10 overflow-hidden divide-y divide-black/8 text-xs">
                      {[
                        { label: "Categoria", val: selectedProduct.category },
                        { label: "Drop", val: "8 mm" },
                        { label: "Peso Aproximado", val: "245g (tamanho 41 individual)" },
                        { label: "Tipo de Pisada", val: "Neutra / Supinada leve" },
                        { label: "Cabedal", val: "Engineered Mesh respirável a laser com reforços fusionados" },
                        { label: "Entressola", val: "Sandrini MaxPulse™ EVA High Rebound" },
                        { label: "Solado", val: "Borracha vulcanizada antiderrapante de alta tração" },
                        { label: "Garantia", val: "90 dias contra defeitos de fabricação direto de fábrica" },
                        { label: "Origem", val: "Nacional (Sandrini Oficial)" },
                      ].map((row, i) => (
                        <div key={i} className="grid grid-cols-3 p-4 bg-white even:bg-[#FAFAFC]">
                          <span className="font-bold text-black uppercase font-['Chakra_Petch',sans-serif]">{row.label}</span>
                          <span className="col-span-2 text-black/70">{row.val}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {v2ActiveTab === "avaliacoes" && (
                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-[#FAFAFC] to-[#F1F3F6] border border-black/8 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
                        <div className="text-center sm:border-r border-black/10 sm:pr-8">
                          <span className="text-5xl font-bold text-black font-['Chakra_Petch',sans-serif]">{selectedProduct.rating}</span>
                          <div className="flex text-amber-400 justify-center mt-1.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          <span className="text-[11px] text-black/50 uppercase font-bold block mt-1 font-['Chakra_Petch',sans-serif]">
                            {selectedProduct.reviews} Opiniões
                          </span>
                        </div>

                        <div className="space-y-1 text-xs text-black/70">
                          <p className="font-bold text-black text-sm">
                            ⭐ 98% dos compradores recomendam este produto
                          </p>
                          <p>
                            Avaliações verificadas de clientes que adquiriram o tênis na loja oficial Sandrini.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { name: "Lucas M.", date: "Há 3 dias", rating: 5, text: "Tênis sensacional! Muito leve, o amortecimento é perfeito para rodagens de 10km a 21km. Acabamento impecável." },
                          { name: "Rodrigo S.", date: "Há 1 semana", rating: 5, text: "Superou as expectativas! Confortável demais no pé, não aperta e o visual ao vivo é ainda mais bonito." },
                          { name: "Carlos Eduardo", date: "Há 2 semanas", rating: 5, text: "Excelente custo-benefício. O design é lindo, fotos fiéis ao produto e a entrega chegou antes do prazo." },
                          { name: "Mariana F.", date: "Há 3 semanas", rating: 5, text: "Comprei para caminhadas e treinos diários. Muito macio e respirável. Recomendo muito!" }
                        ].map((rev, idx) => (
                          <div key={idx} className="bg-white border border-black/8 rounded-2xl p-5 space-y-2 shadow-2xs">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-xs text-black uppercase font-['Chakra_Petch',sans-serif]">{rev.name}</span>
                                <span className="text-[9.5px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-['Chakra_Petch',sans-serif]">
                                  VERIFICADO
                                </span>
                              </div>
                              <span className="text-[10px] text-black/40">{rev.date}</span>
                            </div>
                            <div className="flex text-amber-400">
                              {[...Array(rev.rating)].map((_, i) => (
                                <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                              ))}
                            </div>
                            <p className="text-xs text-black/75 leading-relaxed">{rev.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {v2ActiveTab === "medidas" && (
                    <div className="space-y-4">
                      <p className="text-xs text-black/70">
                        Meça seu pé do calcanhar à ponta do dedão para selecionar a numeração com encaixe perfeito:
                      </p>
                      <div className="rounded-2xl border border-black/10 overflow-hidden divide-y divide-black/8 text-xs">
                        <div className="grid grid-cols-2 p-3.5 bg-[#0B0B0B] text-white font-bold uppercase font-['Chakra_Petch',sans-serif]">
                          <span>Tamanho Brasil</span>
                          <span>Comprimento do Pé (cm)</span>
                        </div>
                        {[
                          { size: "38", cm: "25,5 cm" },
                          { size: "39", cm: "26,0 cm" },
                          { size: "40", cm: "26,5 cm" },
                          { size: "41", cm: "27,5 cm" },
                          { size: "42", cm: "28,0 cm" },
                          { size: "43", cm: "29,0 cm" },
                          { size: "44", cm: "29,5 cm" },
                        ].map((row, i) => (
                          <div key={i} className="grid grid-cols-2 p-3.5 bg-white even:bg-[#FAFAFC]">
                            <span className="font-bold text-black font-['Chakra_Petch',sans-serif]">{row.size} BR</span>
                            <span className="text-black/70">{row.cm}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* 5. Sticky Bottom Quick-Buy Bar Versão 2 */}
              {showStickyBar && (
                <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0B0B0B]/95 backdrop-blur-md border-t border-white/15 py-3 px-4 sm:px-8 shadow-2xl animate-fade-in text-white">
                  <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-12 h-12 rounded-lg bg-white/10 p-1 shrink-0 overflow-hidden">
                        <img
                          src={galleryImages[0] || selectedProduct.img}
                          alt={selectedProduct.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="truncate hidden sm:block">
                        <h4 className="text-xs font-bold text-white truncate uppercase font-['Chakra_Petch',sans-serif]">{selectedProduct.name}</h4>
                        <span className="text-[11px] text-[#D94A2F] font-bold font-['Chakra_Petch',sans-serif]">
                          {formatPrice(calculatePixPrice(selectedProduct.price))} no PIX
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div className="hidden md:flex items-center gap-1.5 text-xs">
                        <span className="text-white/60">Tamanho:</span>
                        <b className="text-white bg-white/10 px-2 py-0.5 rounded font-['Chakra_Petch',sans-serif]">{chosenSize}</b>
                      </div>

                      <button
                        onClick={() => {
                          addToCart(selectedProduct, chosenSize, chosenColor);
                          setCartOpen(true);
                        }}
                        className="bg-[#D94A2F] hover:bg-white hover:text-black text-white text-xs font-bold tracking-[0.06em] uppercase px-6 py-3 rounded-xl transition-all cursor-pointer flex items-center gap-2 shadow-md font-['Chakra_Petch',sans-serif]"
                      >
                        <Zap size={14} /> COMPRAR AGORA
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 4. Quem Comprou Também Levou (Recomendações Globais no Rodapé) */}
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 mt-16 border-t border-[#EBEBEB] pt-10">
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-[0.04em] text-[#0B0B0B] font-['Chakra_Petch',sans-serif] mb-6">
              QUEM COMPROU, TAMBÉM LEVOU
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {PRODUCTS.filter((p) => p.id !== selectedProduct.id).slice(0, 4).map((p) => (
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
        </div>
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
              className="text-xs font-bold text-[#D94A2F] hover:underline uppercase cursor-pointer"
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

      {/* 10. NEWSLETTER MODERNA */}
      <div id="newsletter" className="bg-[#FFFFFF] border-t border-black/6 py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto bg-[#FAFAFC] border border-black/8 rounded-3xl p-8 sm:p-12 shadow-2xs">
          <span className="text-xs font-bold uppercase text-[#D94A2F] tracking-widest block mb-2 font-['Chakra_Petch',sans-serif]">
            CLUBE SANDRINI
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#0B0B0B] block mb-3 font-['Chakra_Petch',sans-serif] tracking-[0.02em]">
            CADASTRE-SE E GANHE 7% OFF
          </h2>
          <p className="text-xs text-black/60 mb-6 max-w-md mx-auto">
            Receba novidades, drops exclusivos e cupons especiais direto no seu e-mail.
          </p>

          {newsletterSent ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-4 rounded-2xl text-xs font-bold flex items-center justify-center gap-2">
              <Check size={16} className="text-emerald-600" />
              E-mail cadastrado com sucesso! Use o cupom <b className="text-[#D94A2F] font-['Chakra_Petch',sans-serif]">BEMVINDOSANDRINI</b>.
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (newsletterEmail) setNewsletterSent(true);
              }}
              className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Seu melhor e-mail..."
                className="flex-1 bg-white text-black placeholder:text-black/40 border border-black/15 rounded-xl px-4 py-3 text-xs outline-none focus:border-[#D94A2F] font-medium"
              />
              <button
                type="submit"
                className="bg-[#0B0B0B] hover:bg-[#D94A2F] text-white text-xs font-bold tracking-wider px-8 py-3 rounded-xl uppercase transition-colors cursor-pointer font-['Chakra_Petch',sans-serif] shrink-0"
              >
                CADASTRAR
              </button>
            </form>
          )}
        </div>
      </div>

      {/* 11. FOOTER COMPLETO (Produção / Dark Theme Moderno) */}
      <footer className="bg-[#0B0B0B] text-white text-xs border-t border-[#1C1C1C] pt-16 pb-24 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 lg:gap-10 mb-12">
            {/* 1. Logo & Redes Sociais */}
            <div className="md:col-span-3 flex flex-col items-start">
              <a href="/" onClick={(e) => { e.preventDefault(); navigateToCategory("home"); }} className="mb-6 block">
                <img src={logoFooterImg} alt="Sandrini" className="h-10 sm:h-12 w-auto object-contain" />
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <a
                  href="https://www.instagram.com/sandrini_oficial/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#D94A2F] hover:text-[#D94A2F] hover:bg-white/10 transition-all cursor-pointer"
                  title="Instagram"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="https://www.youtube.com/@sandrini"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#D94A2F] hover:text-[#D94A2F] hover:bg-white/10 transition-all cursor-pointer"
                  title="YouTube"
                >
                  <Youtube size={16} />
                </a>
                <a
                  href="https://www.tiktok.com/@sandrini_oficial"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#D94A2F] hover:text-[#D94A2F] hover:bg-white/10 transition-all cursor-pointer"
                  title="TikTok"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01v8.42a6.92 6.92 0 0 1-1.37 4.12 7.02 7.02 0 0 1-6.17 2.87 7.02 7.02 0 0 1-5.74-3.4 7.03 7.03 0 0 1 .49-7.85c1.4-1.68 3.56-2.58 5.74-2.43v4.11c-1.09-.16-2.26.15-2.95.97-.66.78-.71 1.93-.27 2.85.45.92 1.43 1.5 2.45 1.51 1.46.06 2.71-1.08 2.79-2.54.03-1.62.01-3.25.01-4.87V.02Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* 2. Categorias */}
            <div className="md:col-span-2">
              <h4 className="font-bold text-[13px] uppercase tracking-wider mb-4 text-white font-['Chakra_Petch',sans-serif]">
                Categorias
              </h4>
              <ul className="space-y-2.5 text-white/60 text-xs font-medium">
                <li><button onClick={() => navigateToCategory("Marcas")} className="hover:text-white transition-colors cursor-pointer">Marcas</button></li>
                <li><button onClick={() => navigateToCategory("Camisetas")} className="hover:text-white transition-colors cursor-pointer">Camisetas</button></li>
                <li><button onClick={() => navigateToCategory("Underwear")} className="hover:text-white transition-colors cursor-pointer">Cueca & Meias</button></li>
                <li><button onClick={() => navigateToCategory("Corrida")} className="hover:text-white transition-colors cursor-pointer">Calçados</button></li>
                <li><button onClick={() => navigateToCategory("Kits")} className="hover:text-white transition-colors cursor-pointer">Kits Essenciais</button></li>
                <li><button onClick={() => navigateToCategory("Shorts")} className="hover:text-white transition-colors cursor-pointer">Bermudas & Shorts</button></li>
              </ul>
            </div>

            {/* 3. Institucional */}
            <div className="md:col-span-3">
              <h4 className="font-bold text-[13px] uppercase tracking-wider mb-4 text-white font-['Chakra_Petch',sans-serif]">
                Institucional
              </h4>
              <ul className="space-y-2.5 text-white/60 text-xs font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Sobre a Sandrini Sports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Como comprar</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Segurança & Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Envio & Rastreamento</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Garantia Oficial</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trocas e Devoluções</a></li>
              </ul>
            </div>

            {/* 4. Atendimento */}
            <div className="md:col-span-2">
              <h4 className="font-bold text-[13px] uppercase tracking-wider mb-4 text-white font-['Chakra_Petch',sans-serif]">
                Atendimento
              </h4>
              <div className="space-y-3 text-white/70 text-xs">
                <a
                  href="https://wa.me/5519935006925"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
                >
                  <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0">
                    📞
                  </span>
                  <span className="font-semibold text-white/90">(19) 93500-6925</span>
                </a>
                <a
                  href="mailto:atendimento@sandrinisports.com.br"
                  className="flex items-start gap-2 hover:text-white transition-colors leading-relaxed break-all"
                >
                  <span className="w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 mt-0.5">
                    ✉
                  </span>
                  <span>atendimento@sandrinisports.com.br</span>
                </a>
              </div>
            </div>

            {/* 5. Formas de Pagamento & Selos de Segurança */}
            <div className="md:col-span-2 flex flex-col gap-6">
              <div>
                <h4 className="font-bold text-[13px] uppercase tracking-wider mb-3 text-white font-['Chakra_Petch',sans-serif]">
                  Formas de pagamento
                </h4>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="bg-[#1C1C1C] border border-[#2E2E2E] text-white text-[10px] font-bold px-2.5 py-1 rounded-lg font-['Chakra_Petch',sans-serif]">
                    PIX
                  </span>
                  <span className="bg-[#1C1C1C] border border-[#2E2E2E] text-white text-[10px] font-bold px-2.5 py-1 rounded-lg font-['Chakra_Petch',sans-serif]">
                    BOLETO
                  </span>
                  <span className="bg-[#1C1C1C] border border-[#2E2E2E] text-white text-[10px] font-bold px-2.5 py-1 rounded-lg font-['Chakra_Petch',sans-serif]">
                    CARTÃO
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-[13px] uppercase tracking-wider mb-3 text-white font-['Chakra_Petch',sans-serif]">
                  Segurança
                </h4>
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="bg-[#1C1C1C] border border-[#2E2E2E] px-3 py-1.5 rounded-xl flex items-center gap-1.5 text-[10.5px] font-bold text-white/80 font-['Chakra_Petch',sans-serif]">
                    <ShieldCheck size={14} className="text-emerald-500" />
                    <span>Google Safe</span>
                  </div>
                  <div className="bg-[#1C1C1C] border border-[#2E2E2E] px-3 py-1.5 rounded-xl flex items-center gap-1.5 text-[10.5px] font-bold text-white/80 font-['Chakra_Petch',sans-serif]">
                    <Lock size={14} className="text-amber-400" />
                    <span>100% Protegida</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Linha Divisória e Rodapé Final */}
          <div className="border-t border-[#1C1C1C] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50 text-center sm:text-left">
            <p>Sandrini Performance 2026 - © Todos os direitos reservados.</p>
            <p className="flex items-center gap-1.5">
              <span>Tecnologia de ponta Sandrini Labs</span>
            </p>
          </div>
        </div>
      </footer>

      {/* 12. FLOATING QUICK MENU MOBILE MODERN DOCK */}
      <nav className="lg:hidden fixed bottom-3 left-3 right-3 z-40 bg-white/95 backdrop-blur-md border border-black/10 rounded-2xl px-3 py-2 flex items-center justify-around text-[10px] font-bold uppercase shadow-2xl">
        <button
          onClick={() => navigateToCategory("Corrida")}
          className="flex flex-col items-center gap-1 text-[#0B0B0B] hover:text-[#D94A2F] transition-colors py-1 cursor-pointer font-['Chakra_Petch',sans-serif]"
        >
          <Flame size={17} />
          <span>Calçados</span>
        </button>
        <button
          onClick={() => navigateToCategory("Kits")}
          className="flex flex-col items-center gap-1 text-[#0B0B0B] hover:text-[#D94A2F] transition-colors py-1 cursor-pointer font-['Chakra_Petch',sans-serif]"
        >
          <Tag size={17} />
          <span>Kits</span>
        </button>
        <button
          onClick={() => navigateToCategory("Favoritos")}
          className="flex flex-col items-center gap-1 text-[#0B0B0B] hover:text-[#D94A2F] transition-colors py-1 cursor-pointer relative font-['Chakra_Petch',sans-serif]"
        >
          <Heart size={17} />
          <span>Favoritos</span>
          {favorites.length > 0 && (
            <span className="absolute 0 top-0.5 right-1.5 w-3.5 h-3.5 bg-[#D94A2F] text-white text-[8px] font-black rounded-full flex items-center justify-center">
              {favorites.length}
            </span>
          )}
        </button>
        <button
          onClick={() => setCartOpen(true)}
          className="flex flex-col items-center gap-1 text-[#D94A2F] py-1 cursor-pointer relative font-['Chakra_Petch',sans-serif]"
        >
          <ShoppingBag size={17} />
          <span>Sacola ({cartCount})</span>
        </button>
      </nav>

      {/* 13. SIDE CART PREVIEW (CARRINHO MODERNO HIGH-TECH) */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity cursor-pointer"
            onClick={() => setCartOpen(false)}
          />

          <div className="absolute inset-y-0 right-0 max-w-full flex">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col animate-slide-in-right rounded-l-3xl overflow-hidden">
              {/* Cart Header */}
              <div className="px-6 py-5 border-b border-black/8 flex items-center justify-between bg-white">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag size={18} className="text-[#D94A2F]" />
                  <span className="font-bold text-black text-sm uppercase tracking-wide font-['Chakra_Petch',sans-serif]">
                    Minha Sacola
                  </span>
                  <span className="bg-[#D94A2F]/10 text-[#D94A2F] text-[11px] font-bold px-2 py-0.5 rounded-full font-['Chakra_Petch',sans-serif]">
                    {cartCount} {cartCount === 1 ? "item" : "itens"}
                  </span>
                </div>
                <button
                  onClick={() => setCartOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#F4F5F7] hover:bg-black hover:text-white flex items-center justify-center text-black/60 transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Free Shipping Progress Bar */}
              <div className="bg-[#FAFAFC] border-b border-black/8 px-6 py-3.5 space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold">
                  {remainingForFreeShipping > 0 ? (
                    <span className="text-black/80 flex items-center gap-1.5">
                      <Truck size={14} className="text-[#D94A2F]" />
                      Faltam <b className="text-[#D94A2F] font-['Chakra_Petch',sans-serif]">{formatPrice(remainingForFreeShipping)}</b> para Frete Grátis
                    </span>
                  ) : (
                    <span className="text-emerald-700 font-bold flex items-center gap-1.5">
                      <Check size={14} className="text-emerald-600" />
                      Parabéns! Você ganhou Frete Grátis
                    </span>
                  )}
                  <span className="text-[10px] font-bold text-black/50 font-['Chakra_Petch',sans-serif]">
                    {Math.round(freeShippingPercent)}%
                  </span>
                </div>
                <div className="w-full h-2 bg-black/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#D94A2F] to-[#E85D43] rounded-full transition-all duration-500 shadow-xs"
                    style={{ width: `${freeShippingPercent}%` }}
                  />
                </div>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-5 space-y-3.5">
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-16">
                    <div className="w-20 h-20 rounded-full bg-[#FAFAFC] border border-black/6 flex items-center justify-center text-black/30">
                      <ShoppingBag size={36} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-black uppercase font-['Chakra_Petch',sans-serif]">
                        Sua sacola está vazia
                      </h4>
                      <p className="text-xs text-black/50 mt-1 max-w-xs">
                        Adicione calçados e equipamentos de alta performance para começar.
                      </p>
                    </div>
                    <button
                      onClick={() => setCartOpen(false)}
                      className="mt-2 bg-[#0B0B0B] hover:bg-[#D94A2F] text-white text-xs font-bold tracking-wider px-6 py-3 rounded-xl uppercase transition-colors cursor-pointer font-['Chakra_Petch',sans-serif]"
                    >
                      EXPLORAR PRODUTOS
                    </button>
                  </div>
                ) : (
                  cartItems.map((item, idx) => {
                    const activeColor = item.product.colors?.find((c) => c.name === item.selectedColor);
                    const thumb = activeColor ? activeColor.img : item.product.img;
                    return (
                      <div
                        key={idx}
                        className="bg-[#FAFAFC] border border-black/6 rounded-2xl p-3.5 flex gap-3.5 items-center hover:border-black/15 transition-all"
                      >
                        <div className="w-18 h-18 rounded-xl bg-white border border-black/8 p-1 flex items-center justify-center shrink-0">
                          <img
                            src={thumb}
                            alt={item.product.name}
                            className="w-full h-full object-contain mix-blend-multiply"
                          />
                        </div>

                        <div className="flex-1 min-w-0 flex flex-col justify-between gap-1">
                          <div className="flex justify-between items-start gap-2">
                            <h4 className="font-bold text-xs text-[#0B0B0B] leading-snug line-clamp-1 font-['Chakra_Petch',sans-serif] uppercase">
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => removeFromCart(item.product.id, item.selectedSize, item.selectedColor)}
                              className="text-black/40 hover:text-[#D94A2F] p-0.5 transition-colors cursor-pointer"
                              title="Remover produto"
                            >
                              <X size={15} />
                            </button>
                          </div>

                          <div className="flex items-center gap-2 text-[10.5px] text-black/60 font-medium">
                            <span className="bg-white px-2 py-0.5 rounded border border-black/8 font-['Chakra_Petch',sans-serif]">
                              Tam: {item.selectedSize}
                            </span>
                            {item.selectedColor && (
                              <span className="truncate">
                                Cor: <b className="text-black">{item.selectedColor}</b>
                              </span>
                            )}
                          </div>

                          <div className="flex items-center justify-between mt-1 pt-1 border-t border-black/6">
                            <div className="flex items-center border border-black/15 bg-white rounded-lg overflow-hidden font-['Chakra_Petch',sans-serif]">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, -1)}
                                className="w-6 h-6 flex items-center justify-center text-xs font-bold text-black hover:bg-black/5 cursor-pointer"
                              >
                                -
                              </button>
                              <span className="w-6 text-center text-xs font-bold text-black">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, 1)}
                                className="w-6 h-6 flex items-center justify-center text-xs font-bold text-black hover:bg-black/5 cursor-pointer"
                              >
                                +
                              </button>
                            </div>

                            <span className="font-bold text-sm text-black font-['Chakra_Petch',sans-serif]">
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
                <div className="border-t border-black/8 p-5 bg-[#FAFAFC] space-y-3.5">
                  {/* Cupom de Desconto */}
                  <div>
                    {appliedCoupon ? (
                      <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 text-emerald-900 px-3 py-2 rounded-xl text-xs font-bold">
                        <span className="flex items-center gap-1.5">
                          <Tag size={13} className="text-emerald-700" />
                          Cupom BEMVINDOSANDRINI (-7%)
                        </span>
                        <button
                          onClick={removeCoupon}
                          className="text-red-600 hover:underline cursor-pointer text-[11px]"
                        >
                          Remover
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleApplyCoupon} className="flex gap-2">
                        <input
                          type="text"
                          value={couponInput}
                          onChange={(e) => setCouponInput(e.target.value)}
                          placeholder="Cupom de Desconto"
                          className="flex-1 bg-white border border-black/15 rounded-xl px-3 py-2 text-xs uppercase outline-none focus:border-[#D94A2F] font-medium"
                        />
                        <button
                          type="submit"
                          className="bg-[#0B0B0B] hover:bg-[#D94A2F] text-white text-xs font-bold px-4 py-2 rounded-xl uppercase transition-colors cursor-pointer font-['Chakra_Petch',sans-serif]"
                        >
                          Aplicar
                        </button>
                      </form>
                    )}
                    {couponError && <p className="text-[10.5px] text-red-600 mt-1 font-semibold">{couponError}</p>}
                  </div>

                  {/* Resumo de Valores */}
                  <div className="pt-2 border-t border-black/8 space-y-1.5 text-xs">
                    {couponDiscount > 0 && (
                      <div className="flex justify-between text-emerald-700 font-bold">
                        <span>Desconto Cupom:</span>
                        <span>-{formatPrice(couponDiscount)}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-baseline pt-1">
                      <span className="font-bold text-sm text-black font-['Chakra_Petch',sans-serif] uppercase">
                        Subtotal:
                      </span>
                      <span className="font-bold text-xl text-black font-['Chakra_Petch',sans-serif]">
                        {formatPrice(finalSubtotal)}
                      </span>
                    </div>
                  </div>

                  {/* CTA Finalizar */}
                  <button
                    onClick={() => {
                      setCartItems([]);
                      setCartOpen(false);
                      setCheckoutSuccess(true);
                    }}
                    className="w-full bg-[#D94A2F] hover:bg-[#c23f26] text-white text-xs font-bold tracking-wider py-4 rounded-xl uppercase transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2 font-['Chakra_Petch',sans-serif] group"
                  >
                    <Zap size={16} className="fill-white" />
                    FINALIZAR COMPRA
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    onClick={() => setCartOpen(false)}
                    className="w-full text-center text-[11px] font-bold text-black/60 hover:text-black uppercase tracking-wider py-1 cursor-pointer block font-['Chakra_Petch',sans-serif]"
                  >
                    ← Continuar Comprando
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 14. TABELA DE MEDIDAS MODAL MODERNO */}
      {sizeGuideOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="relative bg-white max-w-lg w-full p-6 sm:p-8 rounded-3xl shadow-2xl z-10 border border-black/10">
            <button
              onClick={() => setSizeGuideOpen(false)}
              className="absolute top-5 right-5 z-20 w-9 h-9 bg-[#F4F5F7] rounded-full flex items-center justify-center text-black/60 hover:bg-black hover:text-white transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-9 h-9 rounded-xl bg-[#D94A2F]/10 text-[#D94A2F] flex items-center justify-center">
                <SlidersHorizontal size={18} />
              </div>
              <h3 className="text-xl font-bold uppercase text-black font-['Chakra_Petch',sans-serif] tracking-[0.02em]">
                TABELA DE MEDIDAS
              </h3>
            </div>

            <p className="text-xs text-black/70 mb-5">
              Meça o comprimento do seu pé da ponta do calcanhar à ponta do dedão para escolher o tamanho com ajuste perfeito:
            </p>

            <div className="border border-black/10 rounded-2xl overflow-hidden divide-y divide-black/8 text-xs mb-6">
              <div className="grid grid-cols-2 p-3.5 bg-[#0B0B0B] text-white font-bold uppercase font-['Chakra_Petch',sans-serif] tracking-wider text-[11px]">
                <span>Tamanho BR</span>
                <span>Comprimento do Pé (cm)</span>
              </div>
              {[
                { size: "38", cm: "25,5 cm" },
                { size: "39", cm: "26,0 cm" },
                { size: "40", cm: "26,5 cm" },
                { size: "41", cm: "27,5 cm" },
                { size: "42", cm: "28,0 cm" },
                { size: "43", cm: "29,0 cm" },
                { size: "44", cm: "29,5 cm" },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-2 p-3 bg-white even:bg-[#FAFAFC] items-center">
                  <span className="font-bold text-black font-['Chakra_Petch',sans-serif] text-sm">{row.size} BR</span>
                  <span className="text-black/70 font-semibold">{row.cm}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setSizeGuideOpen(false)}
              className="w-full bg-[#0B0B0B] hover:bg-[#D94A2F] text-white text-xs font-bold tracking-wider py-3.5 rounded-xl uppercase transition-colors cursor-pointer font-['Chakra_Petch',sans-serif]"
            >
              ENTENDI, FECHAR GUIA
            </button>
          </div>
        </div>
      )}

      {/* 15. CHECKOUT SUCCESS MODAL */}
      {checkoutSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs cursor-pointer" onClick={() => setCheckoutSuccess(false)} />
          <div className="relative bg-white max-w-md w-full p-8 rounded-3xl shadow-2xl text-center flex flex-col items-center gap-4 z-10 border border-black/10 animate-fade-in">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl font-black shadow-inner">
              ✓
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#D94A2F] uppercase tracking-widest block mb-1 font-['Chakra_Petch',sans-serif]">
                CONFIRMAÇÃO DO PEDIDO
              </span>
              <h2 className="text-2xl font-bold uppercase text-black font-['Chakra_Petch',sans-serif] tracking-[0.02em]">
                PEDIDO CONCLUÍDO!
              </h2>
            </div>
            <p className="text-xs text-black/65 leading-relaxed">
              Obrigado por comprar na <b>Sandrini Performance</b>! Enviamos todos os detalhes do pedido e o rastreamento para o seu e-mail.
            </p>
            <div className="w-full bg-[#FAFAFC] border border-black/8 rounded-2xl p-3 text-xs flex items-center justify-between">
              <span className="text-black/50 font-medium">Prazo estimado:</span>
              <span className="font-bold text-emerald-700 font-['Chakra_Petch',sans-serif]">2 a 4 dias úteis</span>
            </div>
            <button
              onClick={() => setCheckoutSuccess(false)}
              className="w-full bg-[#0B0B0B] hover:bg-[#D94A2F] text-white text-xs font-bold tracking-wider py-3.5 rounded-xl uppercase transition-colors cursor-pointer font-['Chakra_Petch',sans-serif]"
            >
              CONTINUAR COMPRANDO
            </button>
          </div>
        </div>
      )}

      {/* 16. VIDEO MODAL INSTITUCIONAL */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10">
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
