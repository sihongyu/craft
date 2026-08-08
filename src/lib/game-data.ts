export interface Game {
  id: string
  title: string
  description: string
  longDescription: string
  category: string
  image: string
  rating: number
  players: string
  developer: string
  releaseDate: string
  tags: string[]
  featured: boolean
  new: boolean
  trending: boolean
  screenshots: string[]
  systemRequirements: {
    min: string
    rec: string
  }
}

export interface GameCategory {
  id: string
  name: string
  icon: string
  description: string
  count: number
}

export interface LeaderboardEntry {
  rank: number
  player: string
  avatar: string
  game: string
  score: number
  winRate: string
  matches: number
}

export const gameCategories: GameCategory[] = [
  { id: "action", name: "Action", icon: "Crosshair", description: "Fast-paced combat and reflex-based gameplay", count: 24 },
  { id: "rpg", name: "RPG", icon: "BookOpen", description: "Rich storylines and character progression", count: 18 },
  { id: "strategy", name: "Strategy", icon: "Brain", description: "Tactical thinking and resource management", count: 15 },
  { id: "sports", name: "Sports", icon: "Trophy", description: "Competitive sports simulation games", count: 12 },
  { id: "puzzle", name: "Puzzle", icon: "Puzzle", description: "Brain teasers and problem-solving fun", count: 20 },
  { id: "racing", name: "Racing", icon: "Car", description: "High-speed thrills on tracks and streets", count: 10 },
  { id: "simulation", name: "Simulation", icon: "Cpu", description: "Realistic world-building and management", count: 16 },
  { id: "adventure", name: "Adventure", icon: "Compass", description: "Exploration and narrative-driven experiences", count: 22 },
]

export const games: Game[] = [
  {
    id: "cyber-strike",
    title: "Cyber Strike",
    description: "A futuristic FPS set in a neon-lit dystopian world. Master advanced weaponry and tactical abilities.",
    longDescription: "Cyber Strike immerses you in a sprawling cyberpunk metropolis where mega-corporations wage war for control. As an elite operative, master cutting-edge weaponry, hack enemy systems, and execute precision strikes. With 12 unique maps, 8 operator classes, and a deep progression system, every match tells a unique story. The game features ray-traced lighting, destructible environments, and cross-platform play.",
    category: "action",
    image: "/placeholder.jpg",
    rating: 4.8,
    players: "12M+",
    developer: "NeonForge Studios",
    releaseDate: "2025-03-15",
    tags: ["FPS", "Multiplayer", "Cyberpunk"],
    featured: true,
    new: false,
    trending: true,
    screenshots: [],
    systemRequirements: {
      min: "GTX 1060 / i5-8400 / 16GB RAM",
      rec: "RTX 3070 / i7-12700K / 32GB RAM",
    },
  },
  {
    id: "fantasy-realms",
    title: "Fantasy Realms",
    description: "An epic open-world RPG with breathtaking landscapes, deep lore, and endless adventures.",
    longDescription: "Fantasy Realms transports you to the mystical continent of Aethoria, a land torn apart by ancient rivalries. Forge your destiny as a warrior, mage, or rogue, and explore vast diverse biomes teeming with mythical creatures. Master powerful magic, craft legendary gear, and unite warring kingdoms against the rising darkness. With over 200 hours of content and seamless multiplayer integration, Fantasy Realms is the ultimate RPG experience.",
    category: "rpg",
    image: "/placeholder.jpg",
    rating: 4.9,
    players: "25M+",
    developer: "MythForge Interactive",
    releaseDate: "2024-11-20",
    tags: ["Open World", "RPG", "Fantasy"],
    featured: true,
    new: false,
    trending: true,
    screenshots: [],
    systemRequirements: {
      min: "GTX 1660 / i7-9700 / 16GB RAM",
      rec: "RTX 4080 / i9-13900K / 32GB RAM",
    },
  },
  {
    id: "neon-racers",
    title: "Neon Racers",
    description: "High-speed anti-gravity racing through neon-lit cityscapes with gravity-defying tracks.",
    longDescription: "Neon Racers pushes the boundaries of speed with anti-gravity vehicles racing through vertical city tracks. Customize your hover-racer with hundreds of parts, master drift mechanics in zero-G zones, and compete in the global circuit. Features 30+ tracks, dynamic weather, and a pulse-pounding synthwave soundtrack.",
    category: "racing",
    image: "/placeholder.jpg",
    rating: 4.6,
    players: "8M+",
    developer: "Photon Speed Labs",
    releaseDate: "2025-06-01",
    tags: ["Racing", "Sci-Fi", "Multiplayer"],
    featured: false,
    new: true,
    trending: true,
    screenshots: [],
    systemRequirements: {
      min: "GTX 1050 / i5-6600 / 8GB RAM",
      rec: "RTX 3060 / i7-10700K / 16GB RAM",
    },
  },
  {
    id: "kingdom-tactics",
    title: "Kingdom Tactics",
    description: "A deep turn-based strategy game where you command armies, build empires, and forge alliances.",
    longDescription: "Kingdom Tactics combines classic hex-grid strategy with modern 4X gameplay. Lead your civilization from humble beginnings to world domination. Research technologies, manage diplomatic relations, and wage epic wars across procedurally generated continents. The dynamic AI adapts to your playstyle ensuring no two campaigns are alike.",
    category: "strategy",
    image: "/placeholder.jpg",
    rating: 4.7,
    players: "5M+",
    developer: "Grand Strategy Co.",
    releaseDate: "2025-01-10",
    tags: ["Strategy", "Turn-Based", "4X"],
    featured: true,
    new: false,
    trending: false,
    screenshots: [],
    systemRequirements: {
      min: "GTX 960 / i5-6600 / 8GB RAM",
      rec: "GTX 1660 / i7-9700 / 16GB RAM",
    },
  },
  {
    id: "mystery-mansion",
    title: "Mystery Mansion",
    description: "Solve riddles and uncover dark secrets in this atmospheric puzzle-adventure game.",
    longDescription: "Mystery Mansion invites you into the eerie Blackwood Estate, where each room holds a puzzle that guards a piece of a sinister family history. With stunning hand-drawn visuals and immersive 3D audio, this atmospheric adventure weaves together 100+ unique puzzles and a twisting narrative. Use your wits to uncover clues, decode ancient texts, and piece together the tragic tale before the mansion claims you as its next resident.",
    category: "puzzle",
    image: "/placeholder.jpg",
    rating: 4.5,
    players: "3M+",
    developer: "ShadowLore Games",
    releaseDate: "2025-04-22",
    tags: ["Puzzle", "Horror", "Adventure"],
    featured: false,
    new: true,
    trending: false,
    screenshots: [],
    systemRequirements: {
      min: "GTX 750 / i3-6100 / 8GB RAM",
      rec: "GTX 1060 / i5-8400 / 16GB RAM",
    },
  },
  {
    id: "slam-dunk-legends",
    title: "Slam Dunk Legends",
    description: "The ultimate basketball simulation with real pro teams, career mode, and street ball tournaments.",
    longDescription: "Slam Dunk Legends delivers an authentic basketball experience with photorealistic graphics and advanced physics. Build your career from street ball to the pro league, manage your team's strategy on and off the court, and compete globally. Features all 30 official teams, motion-captured player animations, and a dynamic commentary system.",
    category: "sports",
    image: "/placeholder.jpg",
    rating: 4.4,
    players: "10M+",
    developer: "Courtside Digital",
    releaseDate: "2025-02-14",
    tags: ["Sports", "Basketball", "Multiplayer"],
    featured: false,
    new: false,
    trending: true,
    screenshots: [],
    systemRequirements: {
      min: "GTX 1050 / i5-7400 / 8GB RAM",
      rec: "RTX 3060 / i7-11700 / 16GB RAM",
    },
  },
  {
    id: "cosmic-colony",
    title: "Cosmic Colony",
    description: "Build and manage an interstellar colony on a distant planet. Survive, expand, and thrive!",
    longDescription: "Cosmic Colony challenges you to establish humanity's first settlement beyond the solar system. Terraform harsh alien landscapes, manage resources under shifting weather patterns, and guide your colonists through crises. Research alien technologies, trade with passing star-freighters, and defend against cosmic threats. With deep colony simulation systems and emergent storytelling, every decision shapes your colony's fate.",
    category: "simulation",
    image: "/placeholder.jpg",
    rating: 4.6,
    players: "6M+",
    developer: "StarFront Interactive",
    releaseDate: "2025-05-30",
    tags: ["Simulation", "Sci-Fi", "Building"],
    featured: false,
    new: true,
    trending: false,
    screenshots: [],
    systemRequirements: {
      min: "GTX 1050 / i5-7400 / 8GB RAM",
      rec: "RTX 2070 / i7-10700K / 16GB RAM",
    },
  },
  {
    id: "lost-expedition",
    title: "Lost Expedition",
    description: "Embark on a thrilling adventure through uncharted jungles, ancient ruins, and hidden treasures.",
    longDescription: "Lost Expedition follows archaeologist Dr. Elena Reyes as she explores the uncharted Amazon basin in search of a mythical lost city. Navigate treacherous terrain, decode ancient puzzles, and survive encounters with hostile wildlife. This narrative-driven adventure blends action set-pieces with environmental storytelling for an unforgettable journey into the unknown.",
    category: "adventure",
    image: "/placeholder.jpg",
    rating: 4.7,
    players: "4M+",
    developer: "Wanderer Games",
    releaseDate: "2025-07-08",
    tags: ["Adventure", "Action", "Story"],
    featured: false,
    new: true,
    trending: true,
    screenshots: [],
    systemRequirements: {
      min: "GTX 1060 / i5-8400 / 8GB RAM",
      rec: "RTX 3060 / i7-11700K / 16GB RAM",
    },
  },
]

export const leaderboardData: LeaderboardEntry[] = [
  { rank: 1, player: "ShadowBlade99", avatar: "", game: "Cyber Strike", score: 12500, winRate: "78.5%", matches: 342 },
  { rank: 2, player: "DragonWarrior", avatar: "", game: "Fantasy Realms", score: 11800, winRate: "75.2%", matches: 298 },
  { rank: 3, player: "NeonRider_X", avatar: "", game: "Neon Racers", score: 11200, winRate: "72.8%", matches: 256 },
  { rank: 4, player: "KingSlayer42", avatar: "", game: "Kingdom Tactics", score: 10700, winRate: "70.1%", matches: 412 },
  { rank: 5, player: "PuzzleMaster", avatar: "", game: "Mystery Mansion", score: 10100, winRate: "68.9%", matches: 189 },
  { rank: 6, player: "HoopLegend7", avatar: "", game: "Slam Dunk Legends", score: 9800, winRate: "67.3%", matches: 523 },
  { rank: 7, player: "StarColonist", avatar: "", game: "Cosmic Colony", score: 9400, winRate: "65.8%", matches: 178 },
  { rank: 8, player: "JungleExplorer", avatar: "", game: "Lost Expedition", score: 9100, winRate: "64.2%", matches: 145 },
  { rank: 9, player: "TacticalAce", avatar: "", game: "Cyber Strike", score: 8800, winRate: "63.1%", matches: 387 },
  { rank: 10, player: "MageMaster01", avatar: "", game: "Fantasy Realms", score: 8500, winRate: "61.7%", matches: 264 },
]

export const newsItems = [
  {
    title: "Summer Game Fest 2025: Biggest Announcements",
    summary: "All the major game reveals, trailers, and release dates from this year's Summer Game Fest.",
    date: "2025-08-05",
    category: "News",
  },
  {
    title: "Cyber Strike Season 4 Patch Notes",
    summary: "New map 'Void Station', operator reworks, and ranked mode improvements arrive in Season 4.",
    date: "2025-08-03",
    category: "Update",
  },
  {
    title: "Fantasy Realms Hits 25 Million Players",
    summary: "MythForge Interactive celebrates a major player milestone with in-game rewards and a community event.",
    date: "2025-08-01",
    category: "Community",
  },
  {
    title: "Esports World Cup: Top 10 Must-Watch Matches",
    summary: "From Cyber Strike to Slam Dunk Legends, these are the esports matchups you cannot miss.",
    date: "2025-07-28",
    category: "Esports",
  },
]

export const featuredTournaments = [
  {
    id: "t1",
    title: "Cyber Strike Global Championship 2025",
    game: "Cyber Strike",
    prize: "$2,500,000",
    participants: 128,
    startDate: "2025-09-15",
    status: "upcoming" as const,
    image: "/placeholder.jpg",
  },
  {
    id: "t2",
    title: "Fantasy Realms World Cup",
    game: "Fantasy Realms",
    prize: "$1,800,000",
    participants: 64,
    startDate: "2025-08-20",
    status: "live" as const,
    image: "/placeholder.jpg",
  },
  {
    id: "t3",
    title: "Neon Racers Speed Circuit Finals",
    game: "Neon Racers",
    prize: "$500,000",
    participants: 256,
    startDate: "2025-10-01",
    status: "upcoming" as const,
    image: "/placeholder.jpg",
  },
]