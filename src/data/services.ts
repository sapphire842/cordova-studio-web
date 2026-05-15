export interface Service {
  title: string;
  description: string;
  icon: "consultation" | "planning" | "palette" | "furniture" | "lighting" | "home";
}

export const services: Service[] = [
  {
    title: "Design Consultation",
    description:
      "One-on-one sessions to understand your vision, assess your space, and develop a clear design direction — offered hourly for focused guidance.",
    icon: "consultation",
  },
  {
    title: "Space Planning & Layout",
    description:
      "Optimized floor plans and spatial arrangements that maximize flow, function, and the feeling of a room — including professional CAD renderings.",
    icon: "planning",
  },
  {
    title: "Color Palette & Paint Selection",
    description:
      "Curated color schemes that set the mood, unify your spaces, and complement natural light throughout the day.",
    icon: "palette",
  },
  {
    title: "Furniture Selection",
    description:
      "Hand-picked furnishings that balance comfort, proportion, and style — sourced from trusted manufacturers and artisan studios.",
    icon: "furniture",
  },
  {
    title: "Lighting Design",
    description:
      "Layered lighting plans that shape atmosphere, highlight architecture, and support the rhythms of daily life.",
    icon: "lighting",
  },
  {
    title: "Full Home Design",
    description:
      "Comprehensive design packages from concept to completion — space planning, material selection, furnishings, and styling for every room.",
    icon: "home",
  },
];
