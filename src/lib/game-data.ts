export interface Game {
  id: string
  slug: string
  title: string
  description: string
  longDescription?: string
  image: string
  category: string
  genre: string
  rating: number
  players: string
  developer: string
  publisher: string
  releaseDate: string
  platforms: string[]
  tags: string[]
  trending?: boolean
  featured?: boolean
  upcoming?: boolean
  sysRequirements?: { min: string; rec: string }
}

export interface Tournament {
  id: string
  name: string
  game: string
  date: string
  prize: string
  participants: string
  status: "live" | "upcoming" | "ended"
}

export interface NewsItem {
  id: string
  title: string
  summary: string
  date: string
  category: string
  image: string
  content?: string
}

export const categories = [
  { id: "action", name: "Action", icon: "Crosshair", description: "Fast-paced combat and reflex-based gameplay", count: 24 },
  { id: "rpg", name: "RPG", icon: "BookOpen", description: "Rich storylines and character progression", count: 18 },
  { id: "strategy", name: "Strategy", icon: "Brain", description: "Tactical thinking and resource management", count: 15 },
  { id: "sports", name: "Sports", icon: "Trophy", description: "Competitive sports simulation games", count: 12 },
  { id: "puzzle", name: "Puzzle", icon: "Puzzle", description: "Brain teasers and problem-solving fun", count: 20 },
  { id: "racing", name: "Racing", icon: "Car", description: "High-speed thrills on tracks and streets", count: 10 },
  { id: "simulation", name: "Simulation", icon: "Cpu", description: "Realistic world-building and management", count: 16 },
  { id: "adventure", name: "Adventure", icon: "Compass", description: "Exploration and narrative-driven experiences", count: 22 },
]

export const featuredGames: Game[] = [
  {
    id: "1", slug: "cyber-rebellion-2077", title: "Cyber Rebellion 2077", description: "Fight for freedom in a dystopian megacity where every choice matters.", image: "https://picsum.photos/seed/cyberpunk/600/400", category: "action", genre: "Action RPG", rating: 4.8, players: "12.5M", developer: "Neon Forge", publisher: "Quantum Interactive", releaseDate: "2025-11-15", platforms: ["PC", "PS5", "Xbox"], tags: ["Open World", "Sci-Fi", "Multiplayer"], featured: true, longDescription: "In the neon-drenched streets of Neo-Tokazawa, you're a rebel hacker fighting against the omnipotent Megacorp Consortium. Hack systems, engage in high-octane combat, and shape the fate of millions in this sprawling open-world RPG."
  },
  {
    id: "2", slug: "mystic-legends", title: "Mystic Legends", description: "Embark on an epic journey through enchanted realms filled with magic and wonder.", image: "https://picsum.photos/seed/fantasy/600/400", category: "rpg", genre: "Fantasy RPG", rating: 4.7, players: "8.9M", developer: "Aether Studios", publisher: "Aether Studios", releaseDate: "2025-09-20", platforms: ["PC", "PS5", "Switch"], tags: ["Fantasy", "Story Rich", "Single Player"], featured: true, longDescription: "Master ancient spells, forge alliances with mythical creatures, and uncover the secrets of a dying world. With over 200 hours of handcrafted content, Mystic Legends offers an unparalleled fantasy experience."
  },
  {
    id: "3", slug: "apex-grid", title: "Apex Grid", description: "Command your fleet and conquer the galaxy in this massive space strategy game.", image: "https://picsum.photos/seed/scifi/600/400", category: "strategy", genre: "4X Strategy", rating: 4.5, players: "5.2M", developer: "Stellar Mind", publisher: "Stellar Mind", releaseDate: "2025-06-10", platforms: ["PC", "Mac"], tags: ["Space", "Turn-based", "Multiplayer"], featured: true, longDescription: "Build your interstellar empire from a single colony to a galactic superpower. Research technologies, forge diplomatic ties, and command epic space battles in this critically acclaimed 4X strategy epic."
  },
  {
    id: "4", slug: "shadow-ops", title: "Shadow Ops", description: "Stealth, tactics, and precision in high-stakes covert operations worldwide.", image: "https://picsum.photos/seed/stealth/600/400", category: "action", genre: "Tactical Shooter", rating: 4.6, players: "7.1M", developer: "Ghost Recon Studios", publisher: "Titan Games", releaseDate: "2025-03-05", platforms: ["PC", "PS5", "Xbox"], tags: ["Stealth", "Tactical", "Co-op"], featured: true, longDescription: "Lead an elite squad of operatives through 30+ missions across the globe. Plan your approach, execute perfect stealth takedowns, or go loud with devastating firepower. Every mission is a puzzle waiting to be solved."
  }
]

export const trendingGames: Game[] = [
  { id: "5", slug: "velocity-racing", title: "Velocity Racing", description: "Experience pure speed with cutting-edge graphics and realistic physics.", image: "https://picsum.photos/seed/racing/600/400", category: "racing", genre: "Racing", rating: 4.4, players: "3.8M", developer: "TurboEdge", publisher: "TurboEdge", releaseDate: "2025-04-18", platforms: ["PC", "PS5", "Xbox"], tags: ["Racing", "Realistic", "VR"], trending: true },
  { id: "6", slug: "brainteaser-pro", title: "Brainteaser Pro", description: "Challenge your mind with thousands of puzzles designed by neuroscientists.", image: "https://picsum.photos/seed/puzzle/600/400", category: "puzzle", genre: "Puzzle", rating: 4.9, players: "15.2M", developer: "MindCraft", publisher: "MindCraft", releaseDate: "2025-01-22", platforms: ["PC", "Mobile", "Switch"], tags: ["Puzzle", "Casual", "Educational"], trending: true },
  { id: "7", slug: "farmlife-simulator", title: "FarmLife Simulator", description: "Build your dream farm, raise animals, and live the peaceful countryside life.", image: "https://picsum.photos/seed/farm/600/400", category: "simulation", genre: "Farming Sim", rating: 4.3, players: "6.7M", developer: "Green Pasture Games", publisher: "Green Pasture Games", releaseDate: "2025-02-14", platforms: ["PC", "Switch", "Mobile"], tags: ["Farming", "Relaxing", "Cozy"], trending: true },
  { id: "8", slug: "storm-chasers", title: "Storm Chasers", description: "Hunt extreme weather phenomena in this thrilling adventure simulator.", image: "https://picsum.photos/seed/storm/600/400", category: "adventure", genre: "Adventure Sim", rating: 4.2, players: "2.5M", developer: "WeatherFront", publisher: "Skybound", releaseDate: "2025-05-30", platforms: ["PC", "PS5"], tags: ["Weather", "Exploration", "Physics"], trending: true }
]

export const upcomingGames: Game[] = [
  { id: "9", slug: "eternal-frontier", title: "Eternal Frontier", description: "A breathtaking space exploration RPG with infinite procedurally generated planets.", image: "https://picsum.photos/seed/space/600/400", category: "rpg", genre: "Space RPG", rating: 0, players: "0", developer: "Cosmos Labs", publisher: "Cosmos Labs", releaseDate: "2026-Q1", platforms: ["PC", "PS5"], tags: ["Space", "Procedural", "Open World"], upcoming: true },
  { id: "10", slug: "retro-brawlers", title: "Retro Brawlers", description: "Classic arcade fighting reimagined with modern mechanics and stunning pixel art.", image: "https://picsum.photos/seed/retro/600/400", category: "action", genre: "Fighting", rating: 0, players: "0", developer: "Pixel Punch", publisher: "Pixel Punch", releaseDate: "2026-Q2", platforms: ["PC", "Switch", "PS5"], tags: ["Fighting", "Pixel Art", "Arcade"], upcoming: true },
  { id: "11", slug: "city-engineer", title: "City Engineer", description: "Design, build, and manage the metropolis of tomorrow with unprecedented detail.", image: "https://picsum.photos/seed/city/600/400", category: "simulation", genre: "City Builder", rating: 0, players: "0", developer: "Urban Dynamics", publisher: "Urban Dynamics", releaseDate: "2026-Q2", platforms: ["PC", "Mac"], tags: ["City Builder", "Management", "Simulation"], upcoming: true },
  { id: "12", slug: "wasteland-survivors", title: "Wasteland Survivors", description: "Survive, craft, and rebuild civilization in a harsh post-apocalyptic world.", image: "https://picsum.photos/seed/wasteland/600/400", category: "adventure", genre: "Survival", rating: 0, players: "0", developer: "Iron Will Studios", publisher: "Iron Will Studios", releaseDate: "2026-Q3", platforms: ["PC", "PS5", "Xbox"], tags: ["Survival", "Crafting", "Open World"], upcoming: true }
]

export const allGames: Game[] = [...featuredGames, ...trendingGames, ...upcomingGames]

export const tournaments: Tournament[] = [
  { id: "t1", name: "Cyber Rebellion Championship", game: "Cyber Rebellion 2077", date: "2025-08-15", prize: "$50,000", participants: "2,028", status: "live" },
  { id: "t2", name: "Mystic Legends World Cup", game: "Mystic Legends", date: "2025-08-12", prize: "$100,000", participants: "3,415", status: "live" },
  { id: "t3", name: "Apex Grid Invitational", game: "Apex Grid", date: "2025-08-20", prize: "$25,000", participants: "1,200", status: "upcoming" },
  { id: "t4", name: "Velocity Racing Grand Prix", game: "Velocity Racing", date: "2025-09-01", prize: "$15,000", participants: "890", status: "upcoming" },
  { id: "t5", name: "Shadow Ops Tactical League", game: "Shadow Ops", date: "2025-08-18", prize: "$30,000", participants: "1,500", status: "upcoming" },
  { id: "t6", name: "Brainteaser Pro Masters", game: "Brainteaser Pro", date: "2025-08-10", prize: "$10,000", participants: "5,230", status: "live" }
]

export const latestNews: NewsItem[] = [
  { id: "n1", title: "Cyber Rebellion 2077 Surpasses 12 Million Players in First Month", summary: "The dystopian open-world RPG continues to break records with its immersive gameplay and stunning visuals.", date: "Aug 8, 2025", category: "Industry", image: "https://picsum.photos/seed/news1/800/400" },
  { id: "n2", title: "Mystic Legends Expansion 'Frozen Throne' Announced at GamesCon 2025", summary: "New expansion promises 40+ hours of additional content, new character classes, and a sprawling frozen continent.", date: "Aug 7, 2025", category: "Updates", image: "https://picsum.photos/seed/news2/800/400" },
  { id: "n3", title: "VR Gaming Market Expected to Hit $50 Billion by 2027", summary: "Industry analysts predict massive growth in the VR sector as hardware becomes more accessible.", date: "Aug 6, 2025", category: "Industry", image: "https://picsum.photos/seed/news3/800/400" },
  { id: "n4", title: "Indie Spotlight: How FarmLife Simulator Became 2025's Biggest Surprise Hit", summary: "The cozy farming game has captured hearts worldwide with over 6 million downloads in 6 months.", date: "Aug 5, 2025", category: "Indie", image: "https://picsum.photos/seed/news4/800/400" },
  { id: "n5", title: "Eternal Frontier Preview: The Most Ambitious Space RPG Ever Made?", summary: "We got hands-on with Cosmos Labs' upcoming behemoth and came away thoroughly impressed.", date: "Aug 4, 2025", category: "Previews", image: "https://picsum.photos/seed/news5/800/400" },
  { id: "n6", title: "Battle Royale Genre Evolution: What's Next After Fortnite Dominance?", summary: "As the BR genre matures, developers are finding innovative ways to keep players engaged.", date: "Aug 3, 2025", category: "Analysis", image: "https://picsum.photos/seed/news6/800/400" }
]

export const leaderboardData = [
  { rank: 1, player: "ShadowHunter", avatar: "SH", score: 125430, games: 842, winRate: 68 },
  { rank: 2, player: "DragonSlayer", avatar: "DS", score: 118920, games: 756, winRate: 64 },
  { rank: 3, player: "PixelQueen", avatar: "PQ", score: 112345, games: 689, winRate: 72 },
  { rank: 4, player: "NightFury", avatar: "NF", score: 108760, games: 923, winRate: 59 },
  { rank: 5, player: "StormBreaker", avatar: "SB", score: 105430, games: 612, winRate: 67 },
  { rank: 6, player: "CyberWolf", avatar: "CW", score: 101200, games: 787, winRate: 62 },
  { rank: 7, player: "MysticMage", avatar: "MM", score: 98700, games: 534, winRate: 71 },
  { rank: 8, player: "IronFist", avatar: "IF", score: 95100, games: 876, winRate: 56 },
  { rank: 9, player: "NeonBlade", avatar: "NB", score: 92400, games: 445, winRate: 74 },
  { rank: 10, player: "StarLord", avatar: "SL", score: 89700, games: 678, winRate: 63 },
  { rank: 11, player: "PhantomAce", avatar: "PA", score: 86500, games: 521, winRate: 69 },
  { rank: 12, player: "ThunderBolt", avatar: "TB", score: 83800, games: 743, winRate: 58 },
  { rank: 13, player: "VoidWalker", avatar: "VW", score: 81200, games: 389, winRate: 76 },
  { rank: 14, player: "CrystalQueen", avatar: "CQ", score: 78900, games: 567, winRate: 65 },
  { rank: 15, player: "EmberKnight", avatar: "EK", score: 75600, games: 432, winRate: 73 }
]
