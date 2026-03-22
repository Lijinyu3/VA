export interface ProductSpec {
  label: string
  value: string
}

export interface ProductImageItem {
  src: string
  alt: string
  caption: string
  status: "ready" | "pending"
}

export interface ProductImageGroup {
  title: string
  description: string
  items: ProductImageItem[]
}

export interface ProductDetailData {
  id: string
  slug: string
  model: string
  name: string
  image: string
  description: string
  specs: ProductSpec[]
  detailImagesPortrait: ProductImageItem[]
  detailImagesApplication: ProductImageItem[]
  datasheetImagesCloseup: ProductImageItem[]
  datasheetImagesDimension: ProductImageItem[]
  datasheetPdf?: string | null
}

function pendingImage(caption: string): ProductImageItem {
  return {
    src: "/placeholder.jpg",
    alt: caption,
    caption,
    status: "pending",
  }
}

function readyImage(src: string, alt: string, caption: string): ProductImageItem {
  return {
    src,
    alt,
    caption,
    status: "ready",
  }
}

function wedgeApplicationImages(model: string): ProductImageItem[] {
  return [
    readyImage(
      "/images/brochure-live-grid.jpg",
      `${model} wedge clamp on overhead distribution infrastructure`,
      "Reference application for overhead line connection and field installation workflows.",
    ),
    readyImage(
      "/images/brochure-field-testing.jpg",
      `${model} wedge clamp field validation reference`,
      "Field verification scene aligned with utility maintenance and installation environments.",
    ),
    readyImage(
      "/images/brochure-grid-scene.jpg",
      `${model} wedge clamp utility network application`,
      "Utility infrastructure context for overhead distribution and outgoing line use.",
    ),
  ]
}

function piercingApplicationImages(model: string): ProductImageItem[] {
  return [
    readyImage(
      "/images/brochure-live-grid.jpg",
      `${model} axial piercing connector on aerial line`,
      "Application reference for insulated aerial line branch connections.",
    ),
    readyImage(
      "/images/brochure-field-testing.jpg",
      `${model} axial piercing connector field installation`,
      "Relevant for building T-connections, street lighting branches, and service tap scenarios.",
    ),
    readyImage(
      "/images/brochure-grid-scene.jpg",
      `${model} axial piercing connector in utility infrastructure`,
      "Suitable for substation outgoing lines and broader distribution network use.",
    ),
  ]
}

function wedgePortraitImages(model: string): ProductImageItem[] {
  return [
    readyImage(
      "/images/brochure-wedge-main.jpg",
      `${model} self-locking wedge clamp family portrait`,
      "Product portrait for the self-locking wedge clamp family.",
    ),
    pendingImage("Additional angle view pending from the latest factory photo set."),
    pendingImage("Exploded structure view pending for wedge body and locking module."),
  ]
}

function piercingPortraitImages(model: string): ProductImageItem[] {
  return [
    readyImage(
      "/images/brochure-piercing-main.jpg",
      `${model} axial piercing connector family portrait`,
      "Product portrait showing the axial piercing connector family.",
    ),
    pendingImage("Additional angle view pending from the latest product photo set."),
    pendingImage("Exploded structure view pending for housing, blade, and torque nut."),
  ]
}

function wedgeDatasheetCloseups(model: string): ProductImageItem[] {
  return [
    readyImage(
      "/images/brochure-wedge-tech-3.png",
      `${model} wedge clamp isometric technical view`,
      "Isometric technical view showing the wedge body opening and locking geometry.",
    ),
    readyImage(
      "/images/brochure-wedge-tech-1.png",
      `${model} wedge clamp internal profile reference`,
      "Profile reference highlighting the internal channel and conductor path.",
    ),
    pendingImage(`${model} marking and series identification close-up pending.`),
  ]
}

function wedgeDatasheetDimensions(model: string): ProductImageItem[] {
  return [
    readyImage(
      "/images/brochure-wedge-tech-2.png",
      `${model} wedge clamp face technical view`,
      "Face-view line drawing used as a structural reference for the wedge clamp family.",
    ),
    readyImage(
      "/images/brochure-wedge-tech-1.png",
      `${model} wedge clamp profile technical view`,
      "Profile drawing for body proportions and installation reference.",
    ),
    readyImage(
      "/images/brochure-wedge-tech-3.png",
      `${model} wedge clamp isometric structural view`,
      "Isometric structural view for the overall clamp form and opening relationship.",
    ),
  ]
}

function piercingDatasheetCloseups(model: string): ProductImageItem[] {
  return [
    readyImage(
      "/images/brochure-piercing-cutaway.png",
      `${model} piercing tooth cutaway`,
      "Cutaway detail showing the piercing teeth and internal contact structure.",
    ),
    readyImage(
      "/images/brochure-piercing-tech-2.png",
      `${model} piercing connector hardware reference`,
      "Technical reference view showing the bolt position and body layout.",
    ),
    pendingImage(`${model} body marking and conductor range close-up pending.`),
  ]
}

function piercingDatasheetDimensions(model: string): ProductImageItem[] {
  return [
    readyImage(
      "/images/brochure-piercing-tech-1.png",
      `${model} piercing connector technical drawing one`,
      "Technical drawing reference for the connector body and installation orientation.",
    ),
    readyImage(
      "/images/brochure-piercing-tech-2.png",
      `${model} piercing connector technical drawing two`,
      "Front structural reference for the connector body and bolt alignment.",
    ),
    readyImage(
      "/images/brochure-piercing-tech-3.png",
      `${model} piercing connector technical drawing three`,
      "Additional structural drawing for body shape and contact-side positioning.",
    ),
    readyImage(
      "/images/brochure-axial-solution.png",
      `${model} axial piercing technical concept`,
      "Technical concept graphic illustrating the axial contact solution used in the IPC line.",
    ),
  ]
}

export const wedgeClamps: ProductDetailData[] = [
  {
    id: "303",
    slug: "303",
    model: "303",
    name: "Self-locking Wedge Clamp 303",
    image: "/images/brochure-wedge-main.jpg",
    description:
      "Self-locking wedge clamp from the 303 series for overhead conductor retention and strain connections. The elastic C-component design is positioned as a practical answer to conductor creep during long-term service.",
    specs: [
      { label: "Series", value: "303" },
      { label: "Product Line", value: "Self-locking wedge clamp" },
      { label: "Installation", value: "Hammer knock-type" },
      { label: "Core Design", value: "Elastic C-component" },
    ],
    detailImagesPortrait: wedgePortraitImages("303"),
    detailImagesApplication: wedgeApplicationImages("303"),
    datasheetImagesCloseup: wedgeDatasheetCloseups("303"),
    datasheetImagesDimension: wedgeDatasheetDimensions("303"),
    datasheetPdf: null,
  },
  {
    id: "505",
    slug: "505",
    model: "505",
    name: "Self-locking Wedge Clamp 505",
    image: "/images/brochure-wedge-main.jpg",
    description:
      "Self-locking wedge clamp from the 505 series for overhead distribution projects that need fast field installation and repeatable holding performance. The wedge family is presented as simple to install, simple to disassemble, and built for practical outdoor use.",
    specs: [
      { label: "Series", value: "505" },
      { label: "Product Line", value: "Self-locking wedge clamp" },
      { label: "Installation", value: "Hammer knock-type" },
      { label: "Service Focus", value: "Overhead distribution" },
    ],
    detailImagesPortrait: wedgePortraitImages("505"),
    detailImagesApplication: wedgeApplicationImages("505"),
    datasheetImagesCloseup: wedgeDatasheetCloseups("505"),
    datasheetImagesDimension: wedgeDatasheetDimensions("505"),
    datasheetPdf: null,
  },
  {
    id: "707",
    slug: "707",
    model: "707",
    name: "Self-locking Wedge Clamp 707",
    image: "/images/brochure-wedge-main.jpg",
    description:
      "Self-locking wedge clamp from the 707 series, kept within the same patented family structure used across the wedge clamp range. This series is presented together with 303 and 505 as part of VA's flagship wedge connector offering for power distribution work.",
    specs: [
      { label: "Series", value: "707" },
      { label: "Product Line", value: "Self-locking wedge clamp" },
      { label: "Installation", value: "Hammer knock-type" },
      { label: "Family Position", value: "Flagship wedge series" },
    ],
    detailImagesPortrait: wedgePortraitImages("707"),
    detailImagesApplication: wedgeApplicationImages("707"),
    datasheetImagesCloseup: wedgeDatasheetCloseups("707"),
    datasheetImagesDimension: wedgeDatasheetDimensions("707"),
    datasheetPdf: null,
  },
]

export const piercingClamps: ProductDetailData[] = [
  {
    id: "jcx-1150",
    slug: "jcx-1150",
    model: "JCX-1150",
    name: "Axial Piercing Connector JCX-1150",
    image: "/images/brochure-piercing-main.jpg",
    description:
      "Axial piercing connector for 1 kV insulated conductors. The configuration enables branch connection without stripping insulation and uses a single bolt for controlled installation.",
    specs: [
      { label: "Voltage", value: "1 kV" },
      { label: "Main Conductor", value: "4 - 120 mm²" },
      { label: "Tap Conductor", value: "1.5 - 10 mm²" },
      { label: "Bolts", value: "1" },
    ],
    detailImagesPortrait: piercingPortraitImages("JCX-1150"),
    detailImagesApplication: piercingApplicationImages("JCX-1150"),
    datasheetImagesCloseup: piercingDatasheetCloseups("JCX-1150"),
    datasheetImagesDimension: piercingDatasheetDimensions("JCX-1150"),
    datasheetPdf: null,
  },
  {
    id: "jcx-1250",
    slug: "jcx-1250",
    model: "JCX-1250",
    name: "Axial Piercing Connector JCX-1250",
    image: "/images/brochure-piercing-main.jpg",
    description:
      "Axial piercing connector for 1 kV insulated distribution networks, positioned for aluminum and copper stranded conductor connections without insulation stripping. This model uses a single-bolt installation structure.",
    specs: [
      { label: "Voltage", value: "1 kV" },
      { label: "Main Conductor", value: "10 - 95 mm²" },
      { label: "Tap Conductor", value: "4 - 25 mm²" },
      { label: "Bolts", value: "1" },
    ],
    detailImagesPortrait: piercingPortraitImages("JCX-1250"),
    detailImagesApplication: piercingApplicationImages("JCX-1250"),
    datasheetImagesCloseup: piercingDatasheetCloseups("JCX-1250"),
    datasheetImagesDimension: piercingDatasheetDimensions("JCX-1250"),
    datasheetPdf: null,
  },
  {
    id: "jcx-1550",
    slug: "jcx-1550",
    model: "JCX-1550",
    name: "Axial Piercing Connector JCX-1550",
    image: "/images/brochure-piercing-main.jpg",
    description:
      "Axial piercing connector for 1 kV circuits where both main and tap conductors need broader coverage. This model pairs torque-control installation with tin-plated copper alloy contact parts and UV-resistant housing materials.",
    specs: [
      { label: "Voltage", value: "1 kV" },
      { label: "Main Conductor", value: "16 - 120 mm²" },
      { label: "Tap Conductor", value: "16 - 120 mm²" },
      { label: "Bolts", value: "1" },
    ],
    detailImagesPortrait: piercingPortraitImages("JCX-1550"),
    detailImagesApplication: piercingApplicationImages("JCX-1550"),
    datasheetImagesCloseup: piercingDatasheetCloseups("JCX-1550"),
    datasheetImagesDimension: piercingDatasheetDimensions("JCX-1550"),
    datasheetPdf: null,
  },
]

export const allProducts: ProductDetailData[] = [...wedgeClamps, ...piercingClamps]

const productBySlug = new Map(allProducts.map((product) => [product.slug, product]))

export function getProductBySlug(slug: string): ProductDetailData | undefined {
  return productBySlug.get(slug)
}

export function getAllProductSlugs(): string[] {
  return allProducts.map((product) => product.slug)
}
