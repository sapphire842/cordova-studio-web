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
}

export const projects: Project[] = [
  {
    slug: "national-geographic-hq",
    number: "01",
    title: "National Geographic Headquarters",
    location: "San Francisco, CA",
    category: "Commercial",
    year: "2023",
    summary:
      "A bold reimagination of National Geographic's San Francisco headquarters — blending exploration-driven storytelling with modern workplace design.",
    description:
      "The National Geographic Headquarters project reimagines the brand's San Francisco presence through an interior that celebrates exploration, discovery, and environmental stewardship. The design weaves NatGeo's iconic visual identity into every detail — from the earth-toned material palette to exhibit-style installations that transform corridors into journeys.",
    concept:
      "Inspired by the spirit of exploration, the design creates a workplace that feels like stepping into a living documentary. Natural materials, layered lighting, and curated display areas bring the brand's mission into the everyday experience of its team.",
    approach:
      "The space plan centers on an open café and gathering hub that anchors community life, flanked by focused work zones and collaborative studios. Exhibit-quality display cases and integrated wayfinding graphics reinforce the brand narrative throughout. Floor-to-ceiling glazing invites natural light while framing curated views of the city.",
    coverImage: "/images/projects/natgeo-hq/cover.jpg",
    images: [
      "/images/projects/natgeo-hq/gallery-1.jpg",
      "/images/projects/natgeo-hq/gallery-2.jpg",
      "/images/projects/natgeo-hq/gallery-3.jpg",
      "/images/projects/natgeo-hq/gallery-4.jpg",
    ],
  },
  {
    slug: "vallejo-street-residence",
    number: "02",
    title: "2190 Vallejo Street Residence",
    location: "San Francisco, CA",
    category: "Residential",
    year: "2023",
    summary:
      "A Victorian residence renovation that honors the home's heritage while introducing contemporary warmth and spatial flow.",
    description:
      "This Pacific Heights Victorian presented a rare opportunity to restore and reinterpret a storied San Francisco home. The design preserves original architectural details — crown moldings, bay windows, hardwood floors — while introducing a modern material language of warm woods, natural stone, and muted textiles that feel both fresh and timeless.",
    concept:
      "Bridging two centuries of design: the project celebrates the existing Victorian bones while layering in contemporary comfort. Each room tells a story of respectful dialogue between old and new.",
    approach:
      "The renovation focused on four key spaces — foyer, living room, dining room, and kitchen. Walls were selectively opened to improve sightlines and natural light flow. A restrained color palette of warm neutrals lets the architecture speak, while custom millwork and curated furnishings add layers of texture and character. The kitchen was fully reimagined with a large island, integrated appliances, and a material palette that bridges the home's historic character with modern function.",
    coverImage: "/images/projects/vallejo-residence/cover.jpg",
    images: [
      "/images/projects/vallejo-residence/gallery-1.jpg",
      "/images/projects/vallejo-residence/gallery-2.jpg",
      "/images/projects/vallejo-residence/gallery-3.jpg",
      "/images/projects/vallejo-residence/gallery-4.jpg",
    ],
  },
  {
    slug: "las-palmas-restaurant",
    number: "03",
    title: "Las Palmas Restaurant",
    location: "San Francisco, CA",
    category: "Hospitality",
    year: "2024",
    summary:
      "A vibrant restaurant interior that channels Latin warmth through bold materiality and intimate dining spaces.",
    description:
      "Las Palmas brings the warmth and energy of Latin American hospitality to San Francisco's dining scene. The design creates an immersive atmosphere through rich material layering — terracotta, hand-glazed tile, aged wood, and woven textiles — that feels simultaneously festive and intimate.",
    concept:
      "The restaurant is designed as a sensory journey: guests move from the energy of a bustling bar through layered dining zones that range from vibrant communal tables to quieter, more intimate alcoves. Every surface and material choice reinforces the culinary story.",
    approach:
      "The floor plan was organized around a central bar that acts as the social heart of the space, with dining zones radiating outward in increasing levels of intimacy. Custom branding and signage were developed alongside the interior to create a cohesive identity. Warm, directional lighting creates drama while maintaining the comfort needed for a two-hour dining experience.",
    coverImage: "/images/projects/las-palmas/cover.jpg",
    images: [
      "/images/projects/las-palmas/gallery-1.jpg",
      "/images/projects/las-palmas/gallery-2.jpg",
    ],
  },
  {
    slug: "indawo-yolwandle",
    number: "04",
    title: "Indawo Yolwandle Assisted Living",
    location: "Cape Town, South Africa",
    category: "Healthcare",
    year: "2024",
    summary:
      "A South African-inspired assisted living center designed around community, dignity, and connection to nature.",
    description:
      "Indawo Yolwandle — isiXhosa for 'place by the sea' — is an assisted living center that rejects the institutional in favor of the communal. Inspired by South African design traditions and the coastal landscape of the Western Cape, the project creates spaces that promote wellness, independence, and social connection.",
    concept:
      "The design draws from the communal principles of South African living — shared courtyards, covered outdoor gathering spaces, and a material palette of local stone, timber, and woven elements. The result is a facility that feels like a village, not a hospital.",
    approach:
      "The ground-level plan is organized around a central courtyard garden that brings daylight and nature into every wing. Community spaces — dining hall, activity rooms, a small library — are positioned at intersections to encourage spontaneous interaction. Resident rooms are oriented toward garden or ocean views, with generous windows and warm, tactile finishes. Accessibility is woven seamlessly into the architecture rather than retrofitted.",
    coverImage: "/images/projects/indawo-yolwandle/cover.jpg",
    images: [
      "/images/projects/indawo-yolwandle/gallery-1.jpg",
      "/images/projects/indawo-yolwandle/gallery-2.jpg",
      "/images/projects/indawo-yolwandle/gallery-3.jpg",
    ],
  },
  {
    slug: "pleasanton-kitchen-remodel",
    number: "05",
    title: "Kitchen Remodel",
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
    slug: "academia-portfolio",
    number: "06",
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
    number: "07",
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
    number: "07.01",
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
    number: "07.02",
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
    number: "08",
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
    number: "08.01",
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
    number: "08.02",
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
