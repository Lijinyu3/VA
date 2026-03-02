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

function applicationImages(productName: string): ProductImageItem[] {
  return [
    {
      src: "/images/substations.jpg",
      alt: `${productName} installed in substation distribution setup`,
      caption: "Installed on distribution cable branch in utility infrastructure.",
      status: "ready",
    },
    {
      src: "/images/rural-energy.jpg",
      alt: `${productName} used in rural distribution line`,
      caption: "Field application in overhead rural distribution scenario.",
      status: "ready",
    },
    {
      src: "/images/underground-energy.jpg",
      alt: `${productName} installation workflow reference`,
      caption: "Installation workflow reference: conductor insert to final lock state.",
      status: "ready",
    },
  ]
}

export const wedgeClamps: ProductDetailData[] = [
  {
    id: "w-100",
    slug: "w-100",
    model: "W-100",
    name: "Standard Wedge Tension Clamp",
    image: "/images/wedge-clamp-w1.jpg",
    description:
      "Automatic self-locking wedge clamp for dead-end and strain applications on overhead lines. The C-shaped aluminum body with pre-formed wedge insert provides reliable retention under dynamic loading.",
    specs: [
      { label: "Material", value: "Aluminum Alloy" },
      { label: "Voltage Rating", value: "Up to 35 kV" },
      { label: "Cable Range", value: "25 - 185 mm2" },
      { label: "Tensile Load", value: "70 kN" },
    ],
    detailImagesPortrait: [
      {
        src: "/images/wedge-clamp-w1.jpg",
        alt: "W-100 white background full product view",
        caption: "White background full-view portrait for structure verification.",
        status: "ready",
      },
      {
        src: "/images/wedge-clamp-w2.jpg",
        alt: "W-100 side-angle product view",
        caption: "Multi-angle view showing clamp geometry and tightening position.",
        status: "ready",
      },
      pendingImage("Exploded structural view (housing and internal locking module)."),
    ],
    detailImagesApplication: applicationImages("W-100 wedge clamp"),
    datasheetImagesCloseup: [
      pendingImage("Locking texture close-up for self-locking grip validation."),
      pendingImage("Material and surface finish close-up for durability assessment."),
      pendingImage("Laser marking close-up (model, cable range, standard code)."),
    ],
    datasheetImagesDimension: [
      pendingImage("Dimension drawing with L / W / H and bolt specification."),
      pendingImage("Sectional view after conductor installation."),
    ],
    datasheetPdf: null,
  },
  {
    id: "w-200",
    slug: "w-200",
    model: "W-200",
    name: "Heavy-Duty ACSR Wedge Clamp",
    image: "/images/wedge-clamp-w2.jpg",
    description:
      "Hot-dip galvanized steel wedge strain clamp optimized for ACSR conductors. Bail-type attachment allows easy installation on transmission tower hardware with high mechanical strength.",
    specs: [
      { label: "Material", value: "Galvanized Steel" },
      { label: "Voltage Rating", value: "Up to 72.5 kV" },
      { label: "Cable Range", value: "70 - 400 mm2" },
      { label: "Tensile Load", value: "160 kN" },
    ],
    detailImagesPortrait: [
      {
        src: "/images/wedge-clamp-w2.jpg",
        alt: "W-200 white background full product view",
        caption: "Industrial portrait emphasizing body robustness and clamping geometry.",
        status: "ready",
      },
      {
        src: "/images/wedge-clamp-w1.jpg",
        alt: "W-200 front-angle product view",
        caption: "Front and side geometry reference for installation evaluation.",
        status: "ready",
      },
      pendingImage("Exploded view of wedge body and locking insert."),
    ],
    detailImagesApplication: applicationImages("W-200 wedge clamp"),
    datasheetImagesCloseup: [
      pendingImage("Self-lock module texture close-up under high-tension profile."),
      pendingImage("Locking mechanism close-up for holding-force validation."),
      pendingImage("Model and standard marking close-up."),
    ],
    datasheetImagesDimension: [
      pendingImage("Mechanical outline drawing with L / W / H and bolt details."),
      pendingImage("Conductor contact sectional drawing."),
    ],
    datasheetPdf: null,
  },
  {
    id: "w-50",
    slug: "w-50",
    model: "W-50",
    name: "Compact Service Drop Wedge Clamp",
    image: "/images/wedge-clamp-w3.jpg",
    description:
      "Lightweight aluminum wedge clamp for service drop and secondary distribution conductors. Compact form factor enables dense installations with integrated wedge retention mechanism.",
    specs: [
      { label: "Material", value: "Aluminum Alloy" },
      { label: "Voltage Rating", value: "Up to 1 kV" },
      { label: "Cable Range", value: "10 - 70 mm2" },
      { label: "Tensile Load", value: "20 kN" },
    ],
    detailImagesPortrait: [
      {
        src: "/images/wedge-clamp-w3.jpg",
        alt: "W-50 white background full product view",
        caption: "Compact full-view portrait for small-size service drop applications.",
        status: "ready",
      },
      {
        src: "/images/wedge-clamp-w1.jpg",
        alt: "W-50 top-angle product view",
        caption: "Top-angle view highlighting opening and tightening path.",
        status: "ready",
      },
      pendingImage("Exploded view for compact body and insert components."),
    ],
    detailImagesApplication: applicationImages("W-50 wedge clamp"),
    datasheetImagesCloseup: [
      pendingImage("Clamping edge close-up for grip stability review."),
      pendingImage("Body detail close-up for casting quality review."),
      pendingImage("Marking close-up including model and cable range."),
    ],
    datasheetImagesDimension: [
      pendingImage("Dimension drawing with L / W / H annotations."),
      pendingImage("Installed cross-section contact drawing."),
    ],
    datasheetPdf: null,
  },
]

export const piercingClamps: ProductDetailData[] = [
  {
    id: "p-100",
    slug: "p-100",
    model: "P-100",
    name: "Low Voltage Piercing Connector",
    image: "/images/piercing-clamp-p1.jpg",
    description:
      "Insulation piercing connector for LV insulated cables. Shear-head torque bolt ensures consistent contact pressure without cable stripping. Suitable for AL-AL, AL-CU, and CU-CU combinations.",
    specs: [
      { label: "Material", value: "Polymer / Tin-plated Copper" },
      { label: "Voltage Rating", value: "Up to 1 kV" },
      { label: "Main Cable", value: "16 - 150 mm2" },
      { label: "Tap Cable", value: "1.5 - 35 mm2" },
    ],
    detailImagesPortrait: [
      {
        src: "/images/piercing-clamp-p1.jpg",
        alt: "P-100 white background full product view",
        caption: "White background portrait showing overall piercing connector structure.",
        status: "ready",
      },
      {
        src: "/images/piercing-clamp-p2.jpg",
        alt: "P-100 side-angle product view",
        caption: "Multi-angle view showing cap opening and torque nut position.",
        status: "ready",
      },
      pendingImage("Exploded view: top cover, bottom body, blade and shear-head nut."),
    ],
    detailImagesApplication: applicationImages("P-100 piercing connector"),
    datasheetImagesCloseup: [
      pendingImage("Piercing blade close-up for conductive edge assessment."),
      pendingImage("Torque locking mechanism close-up."),
      pendingImage("Marking close-up with model and cable range."),
    ],
    datasheetImagesDimension: [
      pendingImage("Technical drawing with L / W / H and bolt specification."),
      pendingImage("Installed section drawing for contact reliability review."),
    ],
    datasheetPdf: null,
  },
  {
    id: "p-200",
    slug: "p-200",
    model: "P-200",
    name: "Medium Voltage Piercing Connector",
    image: "/images/piercing-clamp-p2.jpg",
    description:
      "Heavy-duty insulation piercing connector rated for medium voltage networks. Enhanced polymer housing provides superior dielectric strength with waterproof sealing for outdoor installation.",
    specs: [
      { label: "Material", value: "Polymer / Copper Alloy" },
      { label: "Voltage Rating", value: "Up to 35 kV" },
      { label: "Main Cable", value: "50 - 240 mm2" },
      { label: "Tap Cable", value: "16 - 95 mm2" },
    ],
    detailImagesPortrait: [
      {
        src: "/images/piercing-clamp-p2.jpg",
        alt: "P-200 white background full product view",
        caption: "Main product portrait with full connector profile.",
        status: "ready",
      },
      {
        src: "/images/piercing-clamp-p3.jpg",
        alt: "P-200 top-angle product view",
        caption: "Top-angle perspective for opening geometry and nut position.",
        status: "ready",
      },
      pendingImage("Exploded structural view of housing, blade and locking components."),
    ],
    detailImagesApplication: applicationImages("P-200 piercing connector"),
    datasheetImagesCloseup: [
      pendingImage("Blade and conductive path close-up."),
      pendingImage("Sealing and locking interface close-up."),
      pendingImage("Marking close-up with standards and range."),
    ],
    datasheetImagesDimension: [
      pendingImage("Dimensional drawing with major mechanical points."),
      pendingImage("Sectional contact view after installation."),
    ],
    datasheetPdf: null,
  },
  {
    id: "p-50",
    slug: "p-50",
    model: "P-50",
    name: "Multi-Tap Street Lighting Connector",
    image: "/images/piercing-clamp-p3.jpg",
    description:
      "Compact multi-port piercing connector designed for street lighting and public illumination circuits. Multiple tap-off points from a single main cable position for efficient branch connections.",
    specs: [
      { label: "Material", value: "Polymer / Tin-plated Copper" },
      { label: "Voltage Rating", value: "Up to 1 kV" },
      { label: "Main Cable", value: "16 - 95 mm2" },
      { label: "Tap Cable", value: "1.5 - 16 mm2" },
    ],
    detailImagesPortrait: [
      {
        src: "/images/piercing-clamp-p3.jpg",
        alt: "P-50 white background full product view",
        caption: "Compact portrait focused on multi-tap connector footprint.",
        status: "ready",
      },
      {
        src: "/images/piercing-clamp-p1.jpg",
        alt: "P-50 side-angle product view",
        caption: "Angle view showing branch entry and fastening point.",
        status: "ready",
      },
      pendingImage("Exploded view for branch tap architecture and internal module."),
    ],
    detailImagesApplication: applicationImages("P-50 piercing connector"),
    datasheetImagesCloseup: [
      pendingImage("Blade edge close-up for piercing reliability."),
      pendingImage("Locking feature close-up for branch cable fixation."),
      pendingImage("Model and cable-range marking close-up."),
    ],
    datasheetImagesDimension: [
      pendingImage("Overall dimensions with L / W / H and bolt details."),
      pendingImage("Installed internal contact section drawing."),
    ],
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
