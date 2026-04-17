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
    coverImage: "/images/staging/public:images:staging:cover.JPG",
    images: [
      "/images/staging/public:images:staging:cover.JPG",
      "/images/staging/public:images:staging:gallyery-1.JPG",
      "/images/staging/public:images:staging:gallyery-2.JPG",
      "/images/staging/public:images:staging:gallyery-3.JPG",
      "/images/staging/public:images:staging:gallyery-4.JPG",
      "/images/staging/public:images:staging:gallyery-5.JPG",
      "/images/staging/public:images:staging:gallyery-6.JPG",
      "/images/staging/public:images:staging:gallyery-7.jpeg",
      "/images/staging/public:images:staging:gallyery-8.jpeg",
      "/images/staging/public:images:staging:gallyery-9.jpeg",
      "/images/staging/public:images:staging:gallyery-10.jpeg",
      "/images/staging/public:images:staging:gallyery-11.jpeg",
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
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
