export interface Project {
  slug: string;
  number: string;
  title: string;
  location: string;
  category: string;
  year: string;
  summary: string;
  description: string;
  concept: string;
  approach: string;
  coverImage: string;
  images: string[];
  imageCaptions?: string[];
  pdfUrl?: string;
  parentSlug?: string;
  isCollection?: boolean;
  placeholderLabel?: string;
}

export const projects: Project[] = [
  {
    slug: "pleasanton-kitchen-remodel",
    number: "01",
    title: "Renovations & Transformations",
    location: "Pleasanton, CA",
    category: "Residential",
    year: "2025",
    summary:
      "A Pleasanton kitchen remodel staged and visualized to highlight a warm, functional, and elevated everyday gathering space.",
    description:
      "This Pleasanton kitchen remodel focuses on the heart of the home: a bright, welcoming space where daily routines and entertaining can feel effortless. The project pairs staged photography with supporting renderings to communicate the design direction clearly and give the client a tangible sense of the finished environment.",
    concept:
      "A refined kitchen environment that balances clean lines, warm finishes, and practical flow. The design direction emphasizes comfort, clarity, and a natural transition between cooking, gathering, and living.",
    approach:
      "The presentation combines existing staging imagery with rendered views to show both the atmosphere and the design potential of the remodel. Material warmth, lighting, storage function, and visual openness guide the overall composition, creating a kitchen that feels polished without losing everyday usability.",
    coverImage: "/images/projects/pleasanton-kitchen-remodel/cover.jpg",
    images: [
      "/images/projects/pleasanton-kitchen-remodel/cover.jpg",
      "/images/projects/pleasanton-kitchen-remodel/gallery-1.jpg",
      "/images/projects/pleasanton-kitchen-remodel/gallery-2.jpg",
      "/images/projects/pleasanton-kitchen-remodel/gallery-3.jpg",
      "/images/projects/pleasanton-kitchen-remodel/gallery-4.jpg",
      "/images/projects/pleasanton-kitchen-remodel/gallery-5.jpg",
      "/images/projects/pleasanton-kitchen-remodel/gallery-6.jpg",
      "/images/projects/pleasanton-kitchen-remodel/gallery-7.jpg",
      "/images/projects/pleasanton-kitchen-remodel/gallery-8.jpg",
      "/images/projects/pleasanton-kitchen-remodel/gallery-9.jpg",
      "/images/projects/pleasanton-kitchen-remodel/gallery-10.jpg",
      "/images/projects/pleasanton-kitchen-remodel/gallery-11.jpg",
    ],
    imageCaptions: [
      "finished",
      "finished",
      "finished",
      "finished",
      "finished",
      "finished",
      "finished",
      "renderings",
      "renderings",
      "renderings",
      "renderings",
      "renderings",
    ],
  },
  {
    slug: "space-planning",
    number: "02",
    title: "Space Planning",
    location: "Bay Area, CA",
    category: "Residential",
    year: "2026",
    summary:
      "A forthcoming collection focused on layout strategy, circulation, and thoughtful spatial planning for everyday living.",
    description:
      "This upcoming Space Planning section will feature projects centered on layout studies, circulation improvements, and room-by-room planning strategies. For now, the section serves as a preview of work in development and will be updated as drawings, renderings, and supporting visuals become available.",
    concept:
      "A planning-first approach that helps each home feel more intuitive, functional, and balanced before material selections and final styling are introduced.",
    approach:
      "Future case studies will highlight how furniture plans, zoning, movement paths, and proportional relationships shape the experience of a space. The goal is to show how thoughtful planning can unlock clarity, comfort, and better day-to-day use.",
    coverImage: "",
    images: [],
    placeholderLabel: "Under Construction",
  },
  {
    slug: "academia-portfolio",
    number: "03",
    title: "Academia Portfolio",
    location: "Portfolio",
    category: "Academic",
    year: "2024",
    summary:
      "A curated academic portfolio presented as a digital book, collecting interior architecture and design work.",
    description:
      "The Academia Portfolio brings together Omar Córdova García's academic interior architecture and design work in a format that preserves the feeling of paging through a printed portfolio. The presentation is intentionally simple, allowing each spread to carry the work with the same quiet editorial tone as the rest of the site.",
    concept:
      "A digital portfolio book that feels tactile, paced, and intentional. The viewer moves through the work one spread at a time, keeping attention on the relationship between facing pages.",
    approach:
      "The portfolio is presented as a two-page book viewer with left and right pages shown together on desktop and a responsive reading experience on smaller screens. Page controls create a subtle flip transition while preserving direct access to the full PDF.",
    coverImage: "/images/academia-portfolio/cover.png",
    images: ["/images/academia-portfolio/cover.png"],
    pdfUrl: "/documents/academia-portfolio.pdf",
  },
  {
    slug: "furnishing-styling",
    number: "04",
    title: "Furnishing & Styling",
    location: "Bay Area, CA",
    category: "Residential",
    year: "2024",
    summary:
      "A collection of residential furnishing and styling projects shaped through layered textiles, warm finishes, and carefully balanced living spaces.",
    description:
      "Furnishing & Styling brings together residential projects focused on cohesive rooms that feel polished, comfortable, and personal. Furniture, textiles, lighting, and accessories are composed to bring warmth and rhythm to each home while preserving a relaxed everyday livability.",
    concept:
      "A soft, layered approach to residential interiors where each room feels complete without becoming overly formal. Every project is shaped around tone, texture, proportion, and the rhythms of daily life.",
    approach:
      "Each furnishing and styling project balances larger furnishing decisions with tactile finishing details. Upholstery, accent pieces, pillows, lighting, and decorative objects are arranged to support conversation, comfort, and a calm visual flow from one space to the next.",
    coverImage:
      "/images/projects/furnishing-styling/single-family-residence-dublin/cover.jpg",
    images: [
      "/images/projects/furnishing-styling/single-family-residence-dublin/cover.jpg",
    ],
    isCollection: true,
  },
  {
    slug: "single-family-residence-dublin",
    number: "04.01",
    title: "Single Family Residence - Dublin",
    location: "Dublin, CA",
    category: "Furnishing & Styling",
    year: "2024",
    summary:
      "A single-family residence styled through warm furnishings, layered textiles, and comfortable family and living room compositions.",
    description:
      "Single Family Residence - Dublin focuses on furnishing and styling the home's family and living room spaces with a calm, cohesive material language. The project layers upholstery, accent pieces, pillows, lighting, and accessories to create rooms that feel considered, welcoming, and easy to live in.",
    concept:
      "A warm residential styling direction where the family room and living room feel connected through softness, proportion, and tactile detail.",
    approach:
      "The styling balances practical comfort with refined finishing touches. Furniture placement supports conversation and daily use, while textiles, accessories, and lighting add depth and visual continuity across the home.",
    coverImage:
      "/images/projects/furnishing-styling/single-family-residence-dublin/cover.jpg",
    images: [
      "/images/projects/furnishing-styling/single-family-residence-dublin/cover.jpg",
      "/images/projects/furnishing-styling/single-family-residence-dublin/gallery-1.jpg",
      "/images/projects/furnishing-styling/single-family-residence-dublin/gallery-2.jpg",
      "/images/projects/furnishing-styling/single-family-residence-dublin/gallery-3.jpg",
      "/images/projects/furnishing-styling/single-family-residence-dublin/gallery-4.jpg",
    ],
    imageCaptions: [
      "family room",
      "family room",
      "living room",
      "living room",
      "living room",
    ],
    parentSlug: "furnishing-styling",
  },
  {
    slug: "single-family-residence-oakland",
    number: "04.02",
    title: "Single Family Residence - Oakland",
    location: "Oakland, CA",
    category: "Furnishing & Styling",
    year: "2024",
    summary:
      "A layered Oakland residence styled through warm living spaces, a refined kitchen and dining flow, relaxed bedroom moments, a home gym, and an inviting patio.",
    description:
      "Single Family Residence - Oakland expands the Furnishing & Styling collection with a whole-home styling story. The project moves from living room compositions into kitchen, dining, bedroom, gym, and patio moments, keeping the presentation cohesive through warm materials, balanced furniture placement, and thoughtful finishing details.",
    concept:
      "A comfortable single-family residence where each room has its own function and mood while still feeling connected through softness, proportion, and natural residential warmth.",
    approach:
      "The styling focuses on creating continuity across multiple daily-use spaces. Furnishings, accessories, lighting, and textures are arranged to support gathering, movement, rest, wellness, and indoor-outdoor living while preserving the quiet editorial tone of the portfolio.",
    coverImage:
      "/images/projects/furnishing-styling/single-family-residence-oakland/cover.JPG",
    images: [
      "/images/projects/furnishing-styling/single-family-residence-oakland/cover.JPG",
      "/images/projects/furnishing-styling/single-family-residence-oakland/gallery-1.JPG",
      "/images/projects/furnishing-styling/single-family-residence-oakland/gallery-2.JPG",
      "/images/projects/furnishing-styling/single-family-residence-oakland/gallery-3.JPG",
      "/images/projects/furnishing-styling/single-family-residence-oakland/gallery-4.JPG",
      "/images/projects/furnishing-styling/single-family-residence-oakland/gallery-5.JPG",
      "/images/projects/furnishing-styling/single-family-residence-oakland/gallery-6.jpg",
      "/images/projects/furnishing-styling/single-family-residence-oakland/gallery-7.JPG",
      "/images/projects/furnishing-styling/single-family-residence-oakland/gallery-8.JPG",
      "/images/projects/furnishing-styling/single-family-residence-oakland/gallery-9.JPG",
      "/images/projects/furnishing-styling/single-family-residence-oakland/gallery-10.JPG",
      "/images/projects/furnishing-styling/single-family-residence-oakland/gallery-11.JPG",
      "/images/projects/furnishing-styling/single-family-residence-oakland/gallery-12.JPG",
    ],
    imageCaptions: [
      "living room",
      "living room",
      "kitchen",
      "kitchen",
      "dining room",
      "bedroom",
      "bedroom",
      "gym",
      "gym",
      "gym",
      "gym",
      "patio",
      "patio",
    ],
    parentSlug: "furnishing-styling",
  },
  {
    slug: "staging",
    number: "05",
    title: "Staging",
    location: "Bay Area, CA",
    category: "Residential",
    year: "2024",
    summary:
      "A collection of staged residential spaces composed to highlight warmth, scale, flow, and everyday livability.",
    description:
      "Staging brings together residential rooms styled to help each home feel inviting, balanced, and ready to be experienced. The collection is organized by room type so visitors can move through dining rooms, living and family rooms, bedrooms, and miscellaneous spaces with a clear editorial rhythm.",
    concept:
      "A room-by-room staging portfolio that emphasizes comfort, proportion, and visual clarity. Each space is arranged to help potential buyers or clients understand how the room can feel, function, and flow.",
    approach:
      "The staging work focuses on balancing furniture placement, textiles, accessories, light, and scale. Each room is presented with a calm, cohesive tone that supports the architecture while helping the space feel complete and livable.",
    coverImage: "/images/projects/staging/living & family rooms/cover.jpeg",
    images: ["/images/projects/staging/living & family rooms/cover.jpeg"],
    isCollection: true,
  },
  {
    slug: "staging-bedrooms",
    number: "05.01",
    title: "Bedrooms",
    location: "Bay Area, CA",
    category: "Staging",
    year: "2024",
    summary:
      "A bedroom staging collection shaped around calm composition, soft textiles, and approachable residential warmth.",
    description:
      "The Bedrooms staging collection presents restful residential rooms composed to feel polished, inviting, and easy to imagine living in. Each image highlights a considered balance of bedding, furniture, artwork, lighting, and accessories.",
    concept:
      "Bedroom spaces staged as quiet retreats, using softness, scale, and simple finishing details to create a welcoming first impression.",
    approach:
      "Each bedroom is styled to support a clear focal point while keeping the room open and approachable. Layered bedding, accent pillows, side tables, art, and decor are used to add warmth without overwhelming the space.",
    coverImage: "/images/projects/staging/bedrooms/cover.JPG",
    images: [
      "/images/projects/staging/bedrooms/cover.JPG",
      "/images/projects/staging/bedrooms/gallery-1.JPG",
      "/images/projects/staging/bedrooms/gallery-2.JPG",
      "/images/projects/staging/bedrooms/gallery-3.jpeg",
      "/images/projects/staging/bedrooms/gallery-4.jpeg",
      "/images/projects/staging/bedrooms/gallery-5.JPG",
      "/images/projects/staging/bedrooms/gallery-6.jpeg",
      "/images/projects/staging/bedrooms/gallery-7.jpeg",
      "/images/projects/staging/bedrooms/gallery-8.JPG",
      "/images/projects/staging/bedrooms/gallery-9.JPG",
      "/images/projects/staging/bedrooms/gallery-10.JPG",
      "/images/projects/staging/bedrooms/gallery-11.JPG",
      "/images/projects/staging/bedrooms/gallery-12.JPG",
      "/images/projects/staging/bedrooms/gallery-13.JPG",
    ],
    parentSlug: "staging",
  },
  {
    slug: "staging-living-family-rooms",
    number: "05.02",
    title: "Living & Family Rooms",
    location: "Bay Area, CA",
    category: "Staging",
    year: "2024",
    summary:
      "A living and family room staging collection arranged around comfort, conversation, and inviting everyday flow.",
    description:
      "The Living & Family Rooms staging collection presents gathered residential spaces styled to feel comfortable, polished, and easy to imagine using. Each room balances seating, textiles, tables, art, lighting, and accessories to create a warm first impression.",
    concept:
      "Living spaces staged as approachable gathering rooms, where layout, scale, softness, and finishing details help each room feel welcoming and complete.",
    approach:
      "Each space is composed to support conversation and visual clarity. Furniture placement anchors the room, while pillows, throws, artwork, greenery, and decorative objects add texture and warmth without overwhelming the architecture.",
    coverImage: "/images/projects/staging/living & family rooms/cover.jpeg",
    images: [
      "/images/projects/staging/living & family rooms/cover.jpeg",
      "/images/projects/staging/living & family rooms/gallery-1.jpeg",
      "/images/projects/staging/living & family rooms/gallery-2.jpeg",
      "/images/projects/staging/living & family rooms/gallery-3.JPG",
      "/images/projects/staging/living & family rooms/gallery-4.jpeg",
      "/images/projects/staging/living & family rooms/gallery-5.JPG",
      "/images/projects/staging/living & family rooms/gallery-6.JPG",
      "/images/projects/staging/living & family rooms/gallery-7.JPG",
      "/images/projects/staging/living & family rooms/gallery-8.JPG",
    ],
    parentSlug: "staging",
  },
  {
    slug: "staging-dining-rooms",
    number: "05.03",
    title: "Dining Rooms",
    location: "Bay Area, CA",
    category: "Staging",
    year: "2024",
    summary:
      "A dining room staging collection composed around warmth, proportion, and inviting gathering moments.",
    description:
      "The Dining Rooms staging collection presents residential dining spaces styled to feel polished, welcoming, and ready for gathering. Each image highlights the relationship between table setting, seating, lighting, art, and surrounding architectural details.",
    concept:
      "Dining rooms staged as memorable gathering spaces, where scale, surface styling, and visual balance help each room feel complete and intentional.",
    approach:
      "Each dining room is arranged to clarify the room's purpose and strengthen its focal points. Tables, chairs, rugs, lighting, artwork, greenery, and decorative accents are composed to add warmth while maintaining an open, natural flow.",
    coverImage: "/images/projects/staging/dining rooms/cover.JPG",
    images: [
      "/images/projects/staging/dining rooms/cover.JPG",
      "/images/projects/staging/dining rooms/gallery-1.png",
      "/images/projects/staging/dining rooms/gallery-2.jpg",
      "/images/projects/staging/dining rooms/gallery-3.JPG",
      "/images/projects/staging/dining rooms/gallery-4.JPG",
      "/images/projects/staging/dining rooms/gallery-5.jpeg",
      "/images/projects/staging/dining rooms/gallery-6.JPG",
      "/images/projects/staging/dining rooms/gallery-7.JPG",
      "/images/projects/staging/dining rooms/gallery-8.JPG",
      "/images/projects/staging/dining rooms/gallery-9.JPG",
    ],
    parentSlug: "staging",
  },
  {
    slug: "staging-miscellaneous",
    number: "05.04",
    title: "Miscellaneous",
    location: "Bay Area, CA",
    category: "Staging",
    year: "2024",
    summary:
      "A miscellaneous staging collection highlighting flexible residential moments, accent spaces, and finishing details.",
    description:
      "The Miscellaneous staging collection gathers additional residential spaces and styled moments that support the overall story of a home. These images capture flexible rooms, transitional areas, decorative vignettes, and finishing details that help staged interiors feel complete.",
    concept:
      "A supporting collection of staged moments where texture, scale, and styling details bring warmth and clarity to the spaces between primary rooms.",
    approach:
      "Each scene is composed to feel intentional and approachable. Furniture, accessories, art, greenery, and decorative objects are used to add visual rhythm while keeping the presentation clean, cohesive, and easy to understand.",
    coverImage: "/images/projects/staging/Miscellaneous/cover.jpeg",
    images: [
      "/images/projects/staging/Miscellaneous/cover.jpeg",
      "/images/projects/staging/Miscellaneous/gallery-1.JPG",
      "/images/projects/staging/Miscellaneous/gallery-2.JPG",
      "/images/projects/staging/Miscellaneous/gallery-3.JPG",
      "/images/projects/staging/Miscellaneous/gallery-4.jpeg",
      "/images/projects/staging/Miscellaneous/gallery-5.JPG",
      "/images/projects/staging/Miscellaneous/gallery-6.jpg",
      "/images/projects/staging/Miscellaneous/gallery-7.JPG",
      "/images/projects/staging/Miscellaneous/gallery-8.JPG",
      "/images/projects/staging/Miscellaneous/gallery-9.jpg",
      "/images/projects/staging/Miscellaneous/gallery-10.JPG",
      "/images/projects/staging/Miscellaneous/gallery-11.JPG",
      "/images/projects/staging/Miscellaneous/gallery-12.JPG",
      "/images/projects/staging/Miscellaneous/gallery-13.JPG",
      "/images/projects/staging/Miscellaneous/gallery-14.JPG",
    ],
    parentSlug: "staging",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getPortfolioProjects(): Project[] {
  return projects.filter((project) => !project.parentSlug);
}

export function getChildProjects(parentSlug: string): Project[] {
  return projects.filter((project) => project.parentSlug === parentSlug);
}
