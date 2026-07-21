import { useState, useEffect, useRef } from "react";
import { ShoppingBag, Search, Menu, X, ChevronRight, ChevronLeft, Heart, Star, Instagram, Facebook, Twitter } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import logoImg from "@/imports/logo_transp.png";
import logoFooterImg from "@/imports/logo_cortado.png";

// Novas Imagens
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
import relogioTechnosImg from "@/imports/Relógios/Relógio - Technos/Relogio Steel Prata Technos.png";

const NAV_LINKS = ["Início", "Novidades", "Camisetas", "Shorts", "Tênis", "Underwear", "Acessórios", "Promoções"];

const CATEGORIES = [
  {
    label: "Tênis Casual",
    img: tenisCasualCategoriaImg,
  },

  {
    label: "Underwear",
    img: undewearCategoriaImg,
  },
  {
    label: "Fitness",
    img: fitnessCategoriaImg,
  },
  {
    label: "Básicos",
    img: basicosCategoriaImg,
  },
  {
    label: "Tênis Esportivo",
    img: tenisEsportivoCategoriaImg,
  },
  {
    label: "Relógios",
    img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&h=600&fit=crop&auto=format",
  },
];

const PRODUCTS = [
  {
    id: 1,
    name: "Kit 10 Cuecas Boxer Algodão Sandrini",
    category: "Underwear",
    price: 99.99,
    originalPrice: 139.99,
    img: n1MaisVendidosImg,
    badge: "MAIS VENDIDO",
    rating: 4.8,
    reviews: 245,
    sizes: ["P", "M", "G", "GG"],
    brand: "Sandrini"
  },
  {
    id: 2,
    name: "Kit 4 Dry Fit Sandrini",
    category: "Fitness",
    price: 99.99,
    originalPrice: 149.99,
    img: n2MaisVendidosImg,
    badge: "NOVO",
    rating: 4.6,
    reviews: 88,
    sizes: ["P", "M", "G", "GG"],
    brand: "Sandrini"
  },
  {
    id: 3,
    name: "Kit 15 Meias Cano Médio Sandrini",
    category: "Underwear",
    price: 109.99,
    originalPrice: null,
    img: n3MaisVendidosImg,
    badge: "OFERTA",
    rating: 4.7,
    reviews: 132,
    sizes: ["Único"],
    brand: "Sandrini"
  },
  {
    id: 4,
    name: "Kit 3 Camisetas Algodão Sandrini",
    category: "Camisetas",
    price: 95.72,
    originalPrice: 72.99,
    img: n4MaisVendidosImg,
    badge: "DESTAQUE",
    rating: 4.9,
    reviews: 312,
    sizes: ["P", "M", "G", "GG"],
    brand: "Sandrini",
    colors: [
      { name: "Sortido", img: kit3CamisetasSortidoImg, hex: "#9ca3af" },
      { name: "Branco", img: kit3CamisetasBrancoImg, hex: "#ffffff" },
      { name: "Preto", img: kit3CamisetasPretoImg, hex: "#111111" },
    ],
  },
  {
    id: 5,
    name: "Kit 4 Bermudas Tactel Sandrini",
    category: "Shorts",
    price: 124.99,
    originalPrice: 90.52,
    img: n5MaisVendidosImg,
    badge: "NOVO",
    rating: 4.9,
    reviews: 167,
    sizes: ["P", "M", "G", "GG"],
    brand: "Sandrini"
  },
  {
    id: 6,
    name: "Tênis Aero Run Sandrini",
    category: "Tênis Esportivo",
    price: 74.90,
    originalPrice: 149.99,
    img: n6MaisVendidosImg,
    badge: "NOVO",
    rating: 4.9,
    reviews: 167,
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    brand: "Sandrini",
    colors: [
      { name: "Preto/Cinza", img: tenisAeroRunImg, hex: "#4b5563", folderPath: "Tênis Aero Run - Sandrini/PRETO E CINZA" },
      { name: "Branco/Amarelo", img: tenisAeroRunAmareloImg, hex: "#eab308", folderPath: "Tênis Aero Run - Sandrini/BRANCO PRETO E AMARELO" },
      { name: "Preto/Vermelho", img: tenisAeroRunVermelhoImg, hex: "#ef4444", folderPath: "Tênis Aero Run - Sandrini/PRETO PRETO E VERMELHO" },
    ],
  },
  {
    id: 7,
    name: "Kit 3 Regatas Dry Fit Sandrini",
    category: "Fitness",
    price: 81.99,
    originalPrice: 128.91,
    img: n7MaisVendidosImg,
    badge: "NOVO",
    rating: 4.9,
    reviews: 167,
    sizes: ["P", "M", "G", "GG"],
    brand: "Sandrini"
  },
  {
    id: 8,
    name: "Tênis Spryte Sandrini",
    category: "Tênis Esportivo",
    price: 129.99,
    originalPrice: 189.99,
    img: n8MaisVendidosImg,
    badge: "OFERTA",
    rating: 4.8,
    reviews: 412,
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    brand: "Sandrini",
    colors: [
      { name: "Preto/Branco", img: tenisSprytePretoBrancoImg, hex: "#111111", folderPath: "Tênis Spryte - Sandrini/PRETO" },
      { name: "Branco/Gelo", img: tenisSpryteBrancoImg, hex: "#ffffff", folderPath: "Tênis Spryte - Sandrini/BRANCO GELO" },
      { name: "Verde Militar", img: tenisSpryteVerdeImg, hex: "#4b5320", folderPath: "Tênis Spryte - Sandrini/VERDE" },
    ],
  },
  {
    id: 9,
    name: "Kit 2 Bermudas Compressão Sandrini",
    category: "Shorts",
    price: 78.99,
    originalPrice: 139.99,
    img: n9MaisVendidosImg,
    badge: "NOVO",
    rating: 4.9,
    reviews: 167,
    sizes: ["P", "M", "G", "GG"],
    brand: "Sandrini"
  },
  {
    id: 10,
    name: "Tênis Aero Spark Sandrini",
    category: "Tênis Esportivo",
    price: 149.99,
    originalPrice: 271.56,
    img: n10MaisVendidosImg,
    badge: "DESTAQUE",
    rating: 4.9,
    reviews: 521,
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    brand: "Sandrini",
    colors: [
      { name: "Branco", img: tenisAeroSparkBrancoImg, hex: "#ffffff", folderPath: "Tênis Aero Spark - Sandrini/BRANCO CINZA E LARANJA" },
      { name: "Preto", img: tenisAeroSparkPretoImg, hex: "#111111", folderPath: "Tênis Aero Spark - Sandrini/PRETO E LARANJA" },
      { name: "Verde", img: tenisAeroSparkVerdeImg, hex: "#166534", folderPath: "Tênis Aero Spark - Sandrini/VERDE MARINHO" },
    ],
  },
  {
    id: 11,
    name: "Shorts Linho Sandrini",
    category: "Shorts",
    price: 38.70,
    originalPrice: 84.90,
    img: n11MaisVendidosImg,
    badge: "NOVO",
    rating: 4.8,
    reviews: 145,
    sizes: ["P", "M", "G", "GG"],
    brand: "Sandrini",
    colors: [
      { name: "Bege", img: shortsLinhoBegeImg, hex: "#d5bdaf", folderPath: "Shorts Linho - Sandrini/BEGE" },
      { name: "Preto", img: shortsLinhoPretoImg, hex: "#111111", folderPath: "Shorts Linho - Sandrini/PRETO" },
      { name: "Terracota", img: shortsLinhoTerracotaImg, hex: "#e2725b", folderPath: "Shorts Linho - Sandrini/TERRACOTA" },
      { name: "Verde Militar", img: shortsLinhoVerdeImg, hex: "#4b5320", folderPath: "Shorts Linho - Sandrini/VERDE MILITAR" },
    ],
  },
  {
    id: 12,
    name: "Kit 12 Meias Soquete Sandrini",
    category: "Underwear",
    price: 59.99,
    originalPrice: null,
    img: n12MaisVendidosImg,
    badge: "OFERTA",
    rating: 4.9,
    reviews: 82,
    sizes: ["Único"],
    brand: "Sandrini",
  },
  {
    id: 13,
    name: "Relógio Steel Prata",
    category: "Relógios",
    price: 349.90,
    originalPrice: 429.90,
    img: relogioTechnosImg,
    badge: "OFERTA",
    rating: 5.0,
    reviews: 12,
    sizes: ["Único"],
    brand: "Technos",
    colors: [
      { name: "Prata", img: relogioTechnosImg, hex: "#c0c0c0", folderPath: "Relógio - Technos" }
    ]
  },
];

const globLogos = import.meta.glob('@/imports/Logo de Fornecedores/*.jpg', { eager: true, import: 'default' }) as Record<string, string>;
const LOGOS = Object.entries(globLogos).map(([path, url]) => ({
  name: path.split('/').pop()?.replace('.jpg', '').replace(/-/g, ' ') || '',
  url
}));

const ESSENCIAIS = [
  {
    title: "CAMISETAS",
    price: "39,90",
    img: camisetaEssenciaisImg,
    category: "Camisetas",
  },
  {
    title: "SHORTS",
    price: "49,90",
    img: shortsEssenciaisImg,
    category: "Shorts",
  },
  {
    title: "TÊNIS",
    price: "119,90",
    img: tenisEssenciaisImg,
    category: "Tênis",
  },
  {
    title: "CUECAS",
    price: "29,90",
    img: cuecaEssenciaisImg,
    category: "Underwear",
  },
  {
    title: "MEIAS",
    price: "19,90",
    img: meiaEssenciaisImg,
    category: "Underwear",
  },
  {
    title: "RELÓGIOS",
    price: "129,90",
    img: relogioEssenciaisImg,
    category: "Underwear",
  },
];

function formatPrice(n: number) {
  return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function BadgePill({ text }: { text: string }) {
  const isOffer = text === "OFERTA";
  const isNew = text === "NOVO";
  return (
    <span
      className={`text-[10px] font-bold tracking-widest px-2 py-0.5 ${isOffer
        ? "bg-accent text-white"
        : isNew
          ? "bg-black text-white"
          : "bg-black text-white"
        }`}
    >
      {text}
    </span>
  );
}

function ProductCard({
  product,
  onAddToCart,
  onClickDetails,
}: {
  product: (typeof PRODUCTS)[0];
  onAddToCart: (product: (typeof PRODUCTS)[0], size: string) => void;
  onClickDetails: (product: (typeof PRODUCTS)[0], defaultColor: string | null) => void;
}) {
  const [liked, setLiked] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [activeColorIdx, setActiveColorIdx] = useState(0);

  const displayImg = product.colors ? product.colors[activeColorIdx].img : product.img;

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if ((product.category === "Acessórios" || product.category === "Relógios") && !product.sizes) {
      onAddToCart(product, "Único");
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 1500);
    } else {
      onClickDetails(product, product.colors ? product.colors[activeColorIdx].name : null);
    }
  };

  return (
    <div
      onClick={() => onClickDetails(product, product.colors ? product.colors[activeColorIdx].name : null)}
      className="group relative bg-card flex flex-col overflow-hidden border border-border hover:border-black transition-colors duration-300 cursor-pointer h-full mx-auto w-full max-w-[320px]"
    >
      <div className="relative overflow-hidden bg-white aspect-[4/5] p-4 flex items-center justify-center border-b border-border/40 shrink-0">
        <img
          src={displayImg}
          alt={product.name}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <div className="absolute top-3 left-3">
            <BadgePill text={product.badge} />
          </div>
        )}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <Heart
            size={16}
            className={liked ? "fill-accent text-accent" : "text-black"}
          />
        </button>
        <button
          onClick={handleAdd}
          className="absolute bottom-0 left-0 right-0 bg-black text-white text-xs font-bold tracking-widest py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-accent cursor-pointer"
        >
          {addedToCart
            ? "ADICIONADO ✓"
            : (product.category === "Acessórios" || product.category === "Relógios") && !product.sizes
              ? "ADICIONAR AO CARRINHO"
              : "ESCOLHER TAMANHO"}
        </button>
      </div>
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <span className="text-[10px] text-muted-foreground tracking-widest uppercase mb-1 block">
            {product.category}
          </span>
          <h3 className="font-semibold text-sm leading-tight text-foreground group-hover:text-accent transition-colors line-clamp-2">
            {product.name}
          </h3>
          {product.colors && (
            <div className="flex gap-1.5 mt-1 mb-1">
              {product.colors.map((col, idx) => (
                <button
                  key={col.name}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveColorIdx(idx);
                  }}
                  className={`w-3.5 h-3.5 rounded-full border transition-all cursor-pointer ${activeColorIdx === idx ? "border-black scale-110" : "border-border hover:border-black/50"
                    }`}
                  style={{ backgroundColor: col.hex }}
                  title={col.name}
                />
              ))}
            </div>
          )}
          <div className="flex items-center gap-1 mt-0.5">
            <Star size={11} className="fill-amber-400 text-amber-400" />
            <span className="text-[11px] text-muted-foreground">
              {product.rating} ({product.reviews})
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/50">
          <span className="text-base font-bold text-foreground">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function CategoryPageView({
  category,
  onBackToHome,
  onAddToCart,
  onClickDetails,
}: {
  category: string;
  onBackToHome: () => void;
  onAddToCart: (product: typeof PRODUCTS[0], size: string) => void;
  onClickDetails: (product: typeof PRODUCTS[0], defaultColor: string | null) => void;
}) {
  const isBrand = category.startsWith("brand:");
  const displayTitle = isBrand ? category.replace("brand:", "") : category;

  const categoryProducts = PRODUCTS.filter((p) => {
    if (isBrand) {
      return p.brand === displayTitle;
    }
    if (category === "Mais Vendidos" || category === "Todos") {
      return true;
    }
    if (category === "Kits") {
      return p.name.toLowerCase().includes("kit");
    }
    if (category === "Novidades") {
      return p.badge === "NOVO";
    }
    if (category === "Promoções") {
      return p.badge === "OFERTA";
    }
    if (category.toLowerCase() === "tênis") {
      return p.category.toLowerCase().includes("tênis");
    }
    return p.category.toLowerCase() === category.toLowerCase();
  });

  return (
    <div className="bg-secondary min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6 uppercase tracking-wider font-semibold">
          <button onClick={onBackToHome} className="hover:text-black transition-colors cursor-pointer">
            Home
          </button>
          <ChevronRight size={12} />
          <span className="text-black">{displayTitle}</span>
        </div>

        <div className="border-b border-border/60 pb-8 mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1
              className="font-black text-black leading-none text-5xl md:text-6xl uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {displayTitle}
            </h1>
            <p className="text-muted-foreground text-sm mt-2">
              Mostrando {categoryProducts.length} {categoryProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
            </p>
          </div>
        </div>

        {categoryProducts.length === 0 ? (
          <div className="bg-white border border-border p-16 text-center flex flex-col items-center gap-4">
            <p className="text-muted-foreground text-sm font-semibold">
              Nenhum produto encontrado nesta categoria no momento.
            </p>
            <button
              onClick={onBackToHome}
              className="bg-black text-white text-xs font-bold tracking-widest px-8 py-3.5 hover:bg-accent transition-colors uppercase cursor-pointer"
            >
              Voltar para a Home
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categoryProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onAddToCart={(prod, size) => onAddToCart(prod, size)}
                onClickDetails={onClickDetails}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState<{ product: typeof PRODUCTS[0]; quantity: number; selectedSize: string; selectedColor?: string | null }[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);
  const [chosenSize, setChosenSize] = useState("M");
  const [chosenColor, setChosenColor] = useState<string | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [email, setEmail] = useState("");
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [currentSlide, setCurrentSlide] = useState(0);

  const categoriesRef = useRef<HTMLDivElement>(null);
  const essenciaisRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);

  const scrollContainer = (ref: React.RefObject<HTMLDivElement>, direction: number) => {
    if (ref.current) {
      ref.current.scrollBy({ left: direction * 300, behavior: "smooth" });
    }
  };

  const heroSlides = [
    {
      image: heroBanner1Img,
      subtitle: "Bem-vindo ao universo Sandrini",
      title: "ENTRE E ESCOLHA\nSEU ESTILO.",
      desc: "Roupas, calçados, relógios e acessórios para completar suas escolhas.",
      btn1: "EXPLORAR LOJA",
      link1: "Novidades",
      position: "object-[center_15%]",
      titleSize: "clamp(3rem, 6vw, 5.5rem)",
    },
    {
      image: heroBanner2Img,
      subtitle: "Descubra novas opções",
      title: "ESCOLHA. COMBINE.\nUSE DO SEU JEITO.",
      desc: "Navegue pelas categorias e encontre produtos que combinam com você.",
      btn1: "EXPLORAR AGORA",
      link1: "Novidades",
      titleSize: "clamp(3rem, 6vw, 5.5rem)",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const getProductSizes = (product: typeof PRODUCTS[0]) => {
    if (product.sizes) {
      return product.sizes;
    }
    if (product.category === "Acessórios" || product.category === "Relógios") {
      return [];
    }
    if (product.category === "Tênis" || product.category === "Chinelos") {
      return ["39", "40", "41", "42", "43", "44"];
    }
    return ["P", "M", "G", "GG"];
  };

  const openProductDetails = (product: typeof PRODUCTS[0], defaultColor: string | null = null) => {
    if (product.sizes) {
      setChosenSize(product.sizes[0]);
    } else if (product.category === "Acessórios") {
      setChosenSize("Único");
    } else if (product.category === "Calçados") {
      setChosenSize("40");
    } else {
      setChosenSize("M");
    }
    setChosenColor(defaultColor || (product.colors ? product.colors[0].name : null));
    setSelectedProduct(product);
    setActiveImageIdx(0);
  };

  const filters = ["Todos", "Camisas", "Shorts", "Calçados", "Acessórios"];

  const filtered = activeFilter === "Todos"
    ? PRODUCTS
    : PRODUCTS.filter((p) => {
      if (activeFilter === "Camisas") return p.category.includes("Camiseta") || p.category.includes("Camisa") || p.category === "Fitness";
      if (activeFilter === "Calçados") return p.category.includes("Tênis") || p.category.includes("Chinelo") || p.category === "Calçados";
      if (activeFilter === "Acessórios") return p.category === "Acessórios" || p.category === "Relógios" || p.category === "Underwear" || p.category === "Meias" || p.category === "Cuecas" || p.category === "Meia";
      return p.category === activeFilter;
    });

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const addToCart = (product: typeof PRODUCTS[0], size: string = "M", color: string | null = null) => {
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

  const cartSubtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const navigateToCategory = (categoryName: string) => {
    let filterVal = "Todos";
    if (["Camisetas", "Polos", "Dry Fit", "Camisas"].includes(categoryName)) filterVal = "Camisas";
    else if (categoryName === "Shorts") filterVal = "Shorts";
    else if (["Tênis", "Chinelos", "Calçados"].includes(categoryName)) filterVal = "Calçados";
    else if (["Cuecas", "Meias", "Relógios", "Acessórios"].includes(categoryName)) filterVal = "Acessórios";

    setActiveFilter(filterVal);
    setMenuOpen(false);

    if (categoryName === "home" || categoryName === "Início") {
      setCurrentPage("home");
    } else {
      setCurrentPage(categoryName);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const activeColorObj = selectedProduct?.colors?.find((c) => c.name === chosenColor);

  let galleryImages = activeColorObj ? [activeColorObj.img] : (selectedProduct ? [selectedProduct.img] : []);
  if (activeColorObj && (activeColorObj as any).folderPath) {
    const path = (activeColorObj as any).folderPath;
    const imagesInFolder = Object.entries(globImages)
      .filter(([k]) => k.includes(path))
      .map(([_, v]) => v as string);
    if (imagesInFolder.length > 0) {
      galleryImages = imagesInFolder;
    }
  }

  const modalDisplayImg = galleryImages[activeImageIdx] || galleryImages[0];

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Top Banner */}
      <div className="bg-[#111111] text-white text-center text-[11px] sm:text-xs tracking-[0.1em] py-2.5 font-bold uppercase relative overflow-hidden flex items-center justify-center gap-4 sm:gap-12">
        <span className="hidden sm:inline">Frete Grátis acima de R$ 299</span>
        <span className="hidden sm:inline text-white/40">|</span>
        <span className="text-accent">Troca Fácil em até 30 Dias</span>
        <span className="hidden sm:inline text-white/40">|</span>
        <span className="hidden sm:inline">Parcele em até 6x Sem Juros</span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b-4 border-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between py-2 gap-4">
          {/* Top Row for Mobile (Logo + Menu + Cart) */}
          <div className="flex items-center justify-between w-full sm:w-auto">
            <button
              className="sm:hidden text-black p-1 mr-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <button
              onClick={() => navigateToCategory("home")}
              className="cursor-pointer flex items-center mr-4"
            >
              <ImageWithFallback
                src={logoImg}
                alt="Grupo Sandrini"
                className="h-16 sm:h-20 w-auto object-contain transform scale-[1.5] sm:scale-[2.5] origin-left"
              />
            </button>

            {/* Mobile Actions */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                className="p-2 text-black relative cursor-pointer"
                onClick={() => setCartOpen(true)}
              >
                <ShoppingBag size={22} />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-accent text-white text-[10px] font-bold flex items-center justify-center leading-none">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Search Bar (Center) */}
          <div className="w-full sm:w-flex-1 sm:max-w-xl relative flex items-center">
            <input
              type="text"
              placeholder="O que você está procurando?"
              className="w-full bg-[#f4f4f4] border border-transparent focus:border-accent focus:bg-white transition-all text-sm py-3 px-5 pr-12 rounded-full outline-none text-black placeholder:text-black/50"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-accent text-white rounded-full hover:bg-black transition-colors">
              <Search size={16} />
            </button>
          </div>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm">
              <div className="flex flex-col text-right">
                <span className="text-xs text-black/60">Bem-vindo(a)</span>
                <span className="font-bold cursor-pointer hover:text-accent">Entrar ou Cadastrar</span>
              </div>
            </div>
            <button
              className="p-2.5 text-black hover:text-accent transition-colors relative cursor-pointer bg-[#f4f4f4] rounded-full"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent text-white text-[10px] font-bold flex items-center justify-center leading-none shadow-md">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Desktop Nav (Mega Menu Style) */}
        <nav className="hidden sm:flex items-center justify-center gap-8 bg-[#111111] text-white">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => navigateToCategory(link)}
              className="px-2 py-3.5 text-[13px] font-bold tracking-wider hover:text-accent transition-colors uppercase cursor-pointer"
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-border">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => navigateToCategory(link)}
                className="block w-full text-left px-6 py-3.5 text-xs tracking-widest text-black/70 hover:text-black hover:bg-black/5 border-b border-border uppercase cursor-pointer"
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </header>

      {currentPage === "home" ? (
        <>
          {/* Hero Slider */}
          <section className="relative overflow-hidden bg-black min-h-[60vh] sm:min-h-[85vh] flex items-center group">
            {heroSlides.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              >
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.subtitle}
                    className={`w-full h-full object-cover opacity-60 ${slide.position || ""}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full h-full flex items-center py-24">
                  <div className="max-w-xl">
                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                      <div className="w-8 h-px bg-accent" />
                      <span className="text-accent text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold bg-black/50 px-2 py-1">
                        {slide.subtitle}
                      </span>
                    </div>
                    <h1
                      className="text-white font-black leading-none mb-4 sm:mb-6 whitespace-pre-line"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: (slide as any).titleSize || "clamp(3.5rem, 8vw, 7.5rem)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {slide.title}
                    </h1>
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 max-w-sm">
                      {slide.desc}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => setCurrentPage(slide.link1)}
                        className="bg-accent text-white text-xs font-bold tracking-widest px-6 sm:px-8 py-4 hover:bg-black transition-colors uppercase"
                      >
                        {slide.btn1}
                      </button>
                      {slide.btn2 && slide.link2 && (
                        <button
                          onClick={() => setCurrentPage(slide.link2)}
                          className="border border-white/50 bg-white/10 backdrop-blur-sm text-white text-xs font-bold tracking-widest px-6 sm:px-8 py-4 hover:border-white hover:bg-white/30 transition-colors uppercase"
                        >
                          {slide.btn2}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Slider Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent cursor-pointer"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent cursor-pointer"
            >
              <ChevronRight size={24} />
            </button>

            {/* Slider Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-12 h-1.5 transition-all ${idx === currentSlide ? "bg-accent" : "bg-white/40 hover:bg-white/80"} cursor-pointer`}
                />
              ))}
            </div>
          </section>

          {/* Categories Quick Links */}
          <section className="bg-white py-10 sm:py-16 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex items-center justify-between mb-8">
                <h2
                  className="font-black text-black leading-none"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  NAVEGUE POR CATEGORIAS
                </h2>
              </div>

              <div className="relative group">

                <div ref={categoriesRef} className="flex overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 gap-4 sm:gap-8 snap-x hide-scrollbar md:justify-center">
                  {CATEGORIES.map((cat) => (
                    <div
                      key={cat.label}
                      onClick={() => navigateToCategory(cat.label)}
                      className="flex flex-col items-center gap-3 cursor-pointer min-w-[100px] sm:min-w-[140px] group/item snap-start"
                    >
                      <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-transparent group-hover/item:border-accent transition-colors relative">
                        <img
                          src={cat.img}
                          alt={cat.label}
                          className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover/item:bg-black/0 transition-colors" />
                      </div>
                      <span className="font-bold text-sm sm:text-base text-black group-hover/item:text-accent transition-colors">
                        {cat.label}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </section>

          {/* Essenciais Banner Section */}
          <section className="bg-white py-12 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex justify-center mb-8">
                <div className="bg-black text-white px-4 py-1 text-sm font-bold tracking-widest uppercase inline-block">
                  ESSENCIAIS
                </div>
              </div>
              <div className="relative group">
                <button
                  onClick={() => scrollContainer(essenciaisRef, -1)}
                  className="absolute left-0 top-1/2 -translate-y-[calc(50%+12px)] z-20 w-10 h-10 flex items-center justify-center bg-white border border-border text-black rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all hover:bg-black hover:text-white cursor-pointer hidden sm:flex -ml-5"
                >
                  <ChevronLeft size={24} />
                </button>
                <div ref={essenciaisRef} className="flex overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 gap-4 snap-x hide-scrollbar">
                  {ESSENCIAIS.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => navigateToCategory(item.category)}
                      className="relative min-w-[200px] sm:min-w-[240px] aspect-square snap-start shrink-0 group/item cursor-pointer overflow-hidden bg-[#f4f4f4]"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover/item:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover/item:bg-black/40 transition-colors" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                        <h3
                          className="text-white font-black leading-tight text-3xl uppercase drop-shadow-md mb-1"
                          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-white font-medium text-sm drop-shadow-md">
                          a partir de
                        </p>
                        <div className="text-white font-black drop-shadow-md">
                          <span className="text-xl">R$</span>
                          <span className="text-4xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                            {item.price.split(",")[0]}
                          </span>
                          <span className="text-xl">,{item.price.split(",")[1]}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => scrollContainer(essenciaisRef, 1)}
                  className="absolute right-0 top-1/2 -translate-y-[calc(50%+12px)] z-20 w-10 h-10 flex items-center justify-center bg-white border border-border text-black rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all hover:bg-black hover:text-white cursor-pointer hidden sm:flex -mr-5"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </section>

          {/* Products */}
          <section id="vitrine-produtos" className="bg-secondary py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <h2
                    className="font-black text-black leading-none"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    }}
                  >
                    MAIS VENDIDOS
                  </h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    Os favoritos dos nossos clientes
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {filters.map((f) => (
                    <button
                      key={f}
                      onClick={() => setActiveFilter(f)}
                      className={`text-[10px] font-bold tracking-widest px-4 py-2 uppercase transition-colors ${activeFilter === f
                        ? "bg-black text-white"
                        : "bg-white text-black border border-border hover:border-black"
                        }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative group">
                <button
                  onClick={() => scrollContainer(productsRef, -1)}
                  className="absolute left-0 top-1/2 -translate-y-[calc(50%+16px)] z-20 w-10 h-10 flex items-center justify-center bg-white border border-border text-black rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all hover:bg-black hover:text-white cursor-pointer hidden sm:flex -ml-5"
                >
                  <ChevronLeft size={24} />
                </button>
                <div ref={productsRef} className="flex overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 gap-4 sm:gap-6 snap-x hide-scrollbar">
                  {(filtered.length > 0 ? filtered : PRODUCTS).map((p) => (
                    <div key={p.id} className="min-w-[240px] sm:min-w-[280px] snap-start shrink-0">
                      <ProductCard
                        product={p}
                        onAddToCart={(prod, size) => addToCart(prod, size)}
                        onClickDetails={(prod, color) => openProductDetails(prod, color)}
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => scrollContainer(productsRef, 1)}
                  className="absolute right-0 top-1/2 -translate-y-[calc(50%+16px)] z-20 w-10 h-10 flex items-center justify-center bg-white border border-border text-black rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all hover:bg-black hover:text-white cursor-pointer hidden sm:flex -mr-5"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="text-center mt-10">
                <button
                  onClick={() => {
                    setCurrentPage("Mais Vendidos");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="border-2 border-black text-black text-xs font-bold tracking-widest px-10 py-4 hover:bg-black hover:text-white transition-colors uppercase"
                >
                  VER TODOS OS PRODUTOS
                </button>
              </div>
            </div>
          </section>

          {/* Full-width Banner */}
          <section className="relative overflow-hidden bg-black h-[400px] flex items-center">
            <img
              src={banner1400x400Img}
              alt="Kits Essenciais Sandrini"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
              <div className="max-w-2xl">
                <span className="text-accent text-xs tracking-[0.3em] uppercase font-bold mb-4 block">
                  Tudo o que você precisa
                </span>
                <h2
                  className="text-white font-black leading-none mb-4 whitespace-pre-line"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "clamp(3rem, 7vw, 5.5rem)",
                  }}
                >
                  {"SEUS ESSENCIAIS\nEM UM SÓ LUGAR"}
                </h2>
                <p className="text-white/80 mb-8 text-sm max-w-md">
                  Mais peças, com combinações práticas e preços que valem a pena.
                </p>
                <button
                  onClick={() => setCurrentPage("Kits")}
                  className="bg-accent text-white text-xs font-bold tracking-widest px-8 py-4 hover:bg-red-700 transition-colors uppercase">
                  CONHECER OS KITS
                </button>
              </div>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-2 bg-accent hidden lg:block" />
          </section>

          {/* Brands */}
          <section className="bg-white py-16 border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative group/brands">
              <div className="text-center mb-10">
                <h2
                  className="font-black text-black leading-none mb-2"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  NOSSAS MARCAS
                </h2>
                <p className="text-muted-foreground text-sm">
                  As melhores marcas do mercado em um só lugar
                </p>
              </div>

              <button
                onClick={() => scrollContainer(brandsRef, -1)}
                className="absolute left-0 top-1/2 translate-y-4 z-20 w-10 h-10 flex items-center justify-center bg-white border border-border text-black rounded-full shadow-md opacity-0 group-hover/brands:opacity-100 transition-all hover:bg-black hover:text-white cursor-pointer hidden sm:flex -ml-5"
              >
                <ChevronLeft size={24} />
              </button>

              <div ref={brandsRef} className="flex overflow-x-auto gap-12 px-4 sm:px-0 py-4 items-center hide-scrollbar snap-x">
                {LOGOS.map((logo) => (
                  <div
                    key={logo.name}
                    onClick={() => setCurrentPage(`brand:${logo.name}`)}
                    className="min-w-[140px] sm:min-w-[180px] shrink-0 snap-center cursor-pointer opacity-60 hover:opacity-100 hover:scale-125 transition-all duration-300 flex justify-center"
                  >
                    <img src={logo.url} alt={logo.name} className="h-16 sm:h-20 object-contain mix-blend-multiply" />
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollContainer(brandsRef, 1)}
                className="absolute right-0 top-1/2 translate-y-4 z-20 w-10 h-10 flex items-center justify-center bg-white border border-border text-black rounded-full shadow-md opacity-0 group-hover/brands:opacity-100 transition-all hover:bg-black hover:text-white cursor-pointer hidden sm:flex -mr-5"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </section>
        </>
      ) : (
        <CategoryPageView
          category={currentPage}
          onBackToHome={() => setCurrentPage("home")}
          onAddToCart={addToCart}
          onClickDetails={openProductDetails}
        />
      )}

      {/* Newsletter */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-[10px] tracking-[0.3em] uppercase">
              Exclusivo para Assinantes
            </span>
            <div className="w-8 h-px bg-accent" />
          </div>
          <h2
            className="text-white font-black leading-none mb-4"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            }}
          >
            10% OFF NA <br /> PRIMEIRA COMPRA
          </h2>
          <p className="text-white/60 mb-8 text-sm">
            Cadastre seu e-mail e receba ofertas exclusivas, lançamentos e dicas de estilo.
          </p>
          <div className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="flex-1 bg-white/10 text-white placeholder-white/30 border border-white/20 px-5 py-3.5 text-sm outline-none focus:border-accent transition-colors"
            />
            <button className="bg-accent text-white text-xs font-bold tracking-widest px-6 py-3.5 hover:bg-red-700 transition-colors uppercase whitespace-nowrap">
              QUERO DESCONTO
            </button>
          </div>
          <p className="text-white/30 text-[10px] mt-4">
            Ao cadastrar, você concorda com nossa política de privacidade.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 text-white/70" style={{ backgroundColor: "#4f4f4f" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="mb-4">
                <ImageWithFallback
                  src={logoFooterImg}
                  alt="Grupo Sandrini"
                  className="h-16 sm:h-24 w-auto object-contain object-left -ml-4 sm:-ml-6"
                />
              </div>
              <p className="text-xs text-white/40 leading-relaxed mb-4">
                Moda masculina com estilo, qualidade e atitude desde 2011.
              </p>
              <div className="flex gap-3">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors"
                  >
                    <Icon size={13} />
                  </button>
                ))}
              </div>
            </div>

            {/* Links */}
            {[
              {
                title: "PRODUTOS",
                links: ["Novidades", "Camisas & Polos", "Camisetas", "Shorts", "Calçados", "Relógios & Acessórios"],
              },
              {
                title: "ATENDIMENTO",
                links: ["Central de Ajuda", "Trocas e Devoluções", "Rastrear Pedido", "Fale Conosco"],
              },
              {
                title: "EMPRESA",
                links: ["Sobre Nós", "Trabalhe Conosco", "Blog de Moda", "Lojas Físicas"],
              },
            ].map((col) => (
              <div key={col.title}>
                <h4
                  className="text-white text-xs font-black tracking-widest mb-4"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.8rem" }}
                >
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-[11px] text-white/40 hover:text-white transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[10px] text-white/30 tracking-wider">
              © 2026 LOJA SANDRINI. TODOS OS DIREITOS RESERVADOS.
            </p>
            <div className="flex items-center gap-4">
              {["Pix", "Visa", "Mastercard", "Boleto", "Elo"].map((p) => (
                <span
                  key={p}
                  className="text-[9px] text-white/30 border border-white/10 px-2 py-1 tracking-wider"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Shopping Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setCartOpen(false)}
          />

          <div className="absolute inset-y-0 right-0 max-w-full flex">
            {/* Drawer Panel */}
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col animate-slide-in-right">
              {/* Header */}
              <div className="px-6 py-5 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag size={20} className="text-black" />
                  <h2
                    className="font-black text-black tracking-widest text-lg uppercase"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    Seu Carrinho ({cartCount})
                  </h2>
                </div>
                <button
                  onClick={() => setCartOpen(false)}
                  className="p-1 hover:bg-black/5 rounded-full transition-colors cursor-pointer"
                >
                  <X size={20} className="text-black" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                    <ShoppingBag size={48} className="text-muted-foreground/30 stroke-[1.5]" />
                    <p className="text-sm text-muted-foreground font-medium">
                      Seu carrinho está vazio.
                    </p>
                    <button
                      onClick={() => {
                        setCartOpen(false);
                        const element = document.getElementById("vitrine-produtos");
                        if (element) element.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="border-2 border-black text-black text-[10px] font-bold tracking-widest px-6 py-3 hover:bg-black hover:text-white transition-colors uppercase cursor-pointer"
                    >
                      Ver Produtos
                    </button>
                  </div>
                ) : (
                  cartItems.map((item, idx) => {
                    const activeColorObj = item.product.colors?.find(c => c.name === item.selectedColor);
                    const itemImg = activeColorObj ? activeColorObj.img : item.product.img;
                    return (
                      <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}-${idx}`} className="flex gap-4 border-b border-border/50 pb-6 last:border-0 last:pb-0">
                        <img
                          src={itemImg}
                          alt={item.product.name}
                          className="w-20 h-24 object-contain bg-white border border-border/40 p-2"
                        />
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start">
                              <h3 className="font-bold text-sm text-foreground line-clamp-2 leading-snug">
                                {item.product.name}
                              </h3>
                              <button
                                onClick={() => removeFromCart(item.product.id, item.selectedSize, item.selectedColor)}
                                className="text-muted-foreground hover:text-accent p-1 transition-colors cursor-pointer"
                              >
                                <X size={16} />
                              </button>
                            </div>
                            <p className="text-[10px] text-muted-foreground tracking-widest uppercase mt-0.5">
                              {item.selectedColor && `Cor: ${item.selectedColor} | `}Tamanho: {item.selectedSize}
                            </p>
                          </div>
                          <div className="flex items-end justify-between mt-2">
                            {/* Quantity Selector */}
                            <div className="flex items-center border border-border">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, -1)}
                                className="px-2.5 py-1 text-black/60 hover:text-black hover:bg-black/5 transition-colors cursor-pointer"
                              >
                                -
                              </button>
                              <span className="px-3 text-xs font-bold text-black select-none">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, 1)}
                                className="px-2.5 py-1 text-black/60 hover:text-black hover:bg-black/5 transition-colors cursor-pointer"
                              >
                                +
                              </button>
                            </div>
                            <span className="font-bold text-sm text-foreground">
                              {formatPrice(item.product.price * item.quantity)}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Footer */}
              {cartItems.length > 0 && (
                <div className="border-t border-border p-6 bg-secondary/30">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs tracking-wider text-muted-foreground font-bold uppercase">Subtotal</span>
                    <span className="text-xl font-bold text-black">{formatPrice(cartSubtotal)}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => {
                        setCartItems([]);
                        setCartOpen(false);
                        setCheckoutSuccess(true);
                      }}
                      className="w-full bg-accent text-white text-xs font-bold tracking-widest py-4 hover:bg-red-700 transition-colors uppercase cursor-pointer text-center"
                    >
                      Finalizar Compra
                    </button>
                    <button
                      onClick={() => setCartItems([])}
                      className="w-full bg-white text-black border border-border text-xs font-bold tracking-widest py-3 hover:bg-black hover:text-white hover:border-black transition-colors uppercase cursor-pointer text-center"
                    >
                      Limpar Carrinho
                    </button>
                  </div>
                  <p className="text-[10px] text-muted-foreground/60 text-center mt-3">
                    Frete grátis e devolução garantida inclusos.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden animate-fade-in">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setSelectedProduct(null)}
          />

          {/* Modal Content */}
          <div className="relative bg-white max-w-3xl w-full shadow-2xl flex flex-col md:flex-row overflow-y-auto max-h-[90vh] md:max-h-none md:overflow-visible z-10">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 md:-top-4 md:-right-4 w-10 h-10 bg-white border border-border flex items-center justify-center rounded-full hover:bg-black hover:text-white hover:border-black transition-colors z-20 shadow-md cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Product Image */}
            <div className="md:w-1/2 bg-white p-6 flex flex-col items-center justify-center border-r border-border/40">
              <div className="aspect-[3/4] md:aspect-auto w-full flex items-center justify-center mb-4 relative group">
                {galleryImages.length > 1 && (
                  <button
                    onClick={() => setActiveImageIdx((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white border border-border text-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black hover:text-white cursor-pointer shadow-sm"
                  >
                    <ChevronLeft size={20} />
                  </button>
                )}
                <img
                  src={modalDisplayImg}
                  alt={selectedProduct.name}
                  className="max-h-[400px] max-w-full object-contain"
                />
                {galleryImages.length > 1 && (
                  <button
                    onClick={() => setActiveImageIdx((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white border border-border text-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black hover:text-white cursor-pointer shadow-sm"
                  >
                    <ChevronRight size={20} />
                  </button>
                )}
              </div>
              {galleryImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto w-full max-w-[300px] md:max-w-[400px] pb-3 snap-x delicate-scrollbar">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIdx(idx)}
                      className={`w-16 h-16 shrink-0 border p-1 transition-colors cursor-pointer snap-center ${activeImageIdx === idx ? "border-black border-2" : "border-border hover:border-black/50"
                        }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-accent tracking-widest uppercase font-bold">
                  {selectedProduct.badge || selectedProduct.category}
                </span>
                <h2
                  className="font-bold text-black leading-tight text-2xl uppercase mt-2 mb-3"
                >
                  {selectedProduct.name}
                </h2>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        i < Math.floor(selectedProduct.rating)
                          ? "fill-amber-400 text-amber-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">
                    {selectedProduct.rating} ({selectedProduct.reviews} avaliações)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6 border-b border-border/50 pb-5">
                  <span className="text-2xl font-bold text-foreground">
                    {formatPrice(selectedProduct.price)}
                  </span>
                  {selectedProduct.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {formatPrice(selectedProduct.originalPrice)}
                    </span>
                  )}
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                  {selectedProduct.category === "Calçados"
                    ? "Tênis masculino esportivo e casual Sandrini, unindo amortecimento leve de alta performance com design moderno e anatômico. Cabedal respirável de alta costura que garante durabilidade."
                    : selectedProduct.category === "Acessórios" && selectedProduct.sizes
                      ? "Kit cueca boxer em algodão macio e elastano premium de alta elasticidade. Proporciona ajuste anatômico perfeito ao corpo com elástico firme personalizado."
                      : "Produto premium Sandrini, confeccionado com matéria-prima selecionada para máximo conforto, ajuste impecável e alta durabilidade no uso diário."}
                </p>

                {/* Color Selector */}
                {selectedProduct.colors && (
                  <div className="mb-6">
                    <span className="text-xs font-bold text-black tracking-widest uppercase block mb-3">
                      Selecione a Cor: {chosenColor}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.colors.map((col) => (
                        <button
                          key={col.name}
                          onClick={() => {
                            setChosenColor(col.name);
                            setActiveImageIdx(0);
                          }}
                          className={`px-3 py-1.5 border text-xs font-medium tracking-wide uppercase transition-colors flex items-center gap-2 cursor-pointer ${chosenColor === col.name
                            ? "bg-black text-white border-black"
                            : "bg-white text-black border-border hover:border-black"
                            }`}
                        >
                          <span className="w-3.5 h-3.5 rounded-full border border-black/10" style={{ backgroundColor: col.hex }} />
                          {col.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Size Selector */}
                {getProductSizes(selectedProduct).length > 0 && (
                  <div className="mb-8">
                    <span className="text-xs font-bold text-black tracking-widest uppercase block mb-3">
                      Selecione o Tamanho
                    </span>
                    <div className="flex gap-2">
                      {getProductSizes(selectedProduct).map((size) => (
                        <button
                          key={size}
                          onClick={() => setChosenSize(size)}
                          className={`w-11 h-11 border flex items-center justify-center text-xs font-medium transition-colors cursor-pointer ${chosenSize === size
                            ? "bg-black text-white border-black"
                            : "bg-white text-black border-border hover:border-black"
                            }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => {
                    addToCart(selectedProduct, chosenSize, chosenColor);
                    setSelectedProduct(null);
                    setCartOpen(true);
                  }}
                  className="w-full bg-black text-white text-xs font-bold tracking-widest py-4 hover:bg-accent transition-colors uppercase cursor-pointer"
                >
                  Adicionar ao Carrinho
                </button>
                <div className="text-[10px] text-center text-muted-foreground">
                  Garantia de Entrega Rápida e Troca Grátis.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Success Modal */}
      {checkoutSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setCheckoutSuccess(false)}
          />

          {/* Modal Content */}
          <div className="relative bg-white max-w-md w-full p-8 shadow-2xl text-center flex flex-col items-center gap-5 z-10 animate-fade-in">
            <button
              onClick={() => setCheckoutSuccess(false)}
              className="absolute top-4 right-4 p-1 hover:bg-black/5 rounded-full transition-colors cursor-pointer"
            >
              <X size={20} className="text-black" />
            </button>

            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mb-2">
              ✓
            </div>

            <h2
              className="font-black text-black tracking-widest text-2xl uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Pedido Finalizado!
            </h2>

            <p className="text-xs text-muted-foreground leading-relaxed">
              Obrigado por comprar na Loja Sandrini! Seu pedido foi recebido e está em processamento. Enviaremos um e-mail de confirmação em breve.
            </p>

            <button
              onClick={() => setCheckoutSuccess(false)}
              className="mt-2 w-full bg-accent text-white text-xs font-bold tracking-widest py-3.5 hover:bg-red-700 transition-colors uppercase cursor-pointer"
            >
              Continuar Navegando
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
