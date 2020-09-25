export interface Ingredient {
  name: string;
  quantity: number;
}

enum MaterialCategory {
  "Chip" = 1,
  "Skill Summary",
}

export interface Material {
  tier: number;
  category?: MaterialCategory;
  ingredients?: Ingredient[];
}

const MATERIALS: Record<string, Material> = {
  LMD: {
    tier: 3,
  },
  Orirock: {
    tier: 0,
  },
  "Orirock Cube": {
    tier: 1,
    ingredients: [
      {
        name: "Orirock",
        quantity: 3,
      },
    ],
  },
  "Orirock Cluster": {
    tier: 2,
    ingredients: [
      {
        name: "Orirock Cube",
        quantity: 5,
      },
    ],
  },
  "Orirock Concentration": {
    tier: 3,
    ingredients: [
      {
        name: "Orirock Cluster",
        quantity: 4,
      },
    ],
  },
  "Sugar Substitute": {
    tier: 0,
  },
  Sugar: {
    tier: 1,
    ingredients: [
      {
        name: "Sugar Substitute",
        quantity: 3,
      },
    ],
  },
  "Sugar Pack": {
    tier: 2,
    ingredients: [
      {
        name: "Sugar",
        quantity: 4,
      },
    ],
  },
  "Sugar Lump": {
    tier: 3,
    ingredients: [
      {
        name: "Sugar Pack",
        quantity: 2,
      },
      {
        name: "Oriron Cluster",
        quantity: 1,
      },
      {
        name: "Manganese Ore",
        quantity: 1,
      },
    ],
  },
  Ester: {
    tier: 0,
  },
  Polyester: {
    tier: 1,
    ingredients: [
      {
        name: "Ester",
        quantity: 3,
      },
    ],
  },
  "Polyester Pack": {
    tier: 2,
    ingredients: [
      {
        name: "Polyester",
        quantity: 4,
      },
    ],
  },
  "Polyester Lump": {
    tier: 3,
    ingredients: [
      {
        name: "Polyester Pack",
        quantity: 2,
      },
      {
        name: "Aketon",
        quantity: 1,
      },
      {
        name: "Loxic Kohl",
        quantity: 1,
      },
    ],
  },
  "Oriron Shard": {
    tier: 0,
  },
  Oriron: {
    tier: 1,
    ingredients: [
      {
        name: "Oriron Shard",
        quantity: 3,
      },
    ],
  },
  "Oriron Cluster": {
    tier: 2,
    ingredients: [
      {
        name: "Oriron",
        quantity: 4,
      },
    ],
  },
  "Oriron Block": {
    tier: 3,
    ingredients: [
      {
        name: "Oriron Cluster",
        quantity: 2,
      },
      {
        name: "Integrated Device",
        quantity: 1,
      },
      {
        name: "Polyester Pack",
        quantity: 1,
      },
    ],
  },
  Diketon: {
    tier: 0,
  },
  Polyketon: {
    tier: 1,
    ingredients: [
      {
        name: "Diketon",
        quantity: 3,
      },
    ],
  },
  Aketon: {
    tier: 2,
    ingredients: [
      {
        name: "Polyketon",
        quantity: 4,
      },
    ],
  },
  "Keton Colloid": {
    tier: 3,
    ingredients: [
      {
        name: "Aketon",
        quantity: 2,
      },
      {
        name: "Sugar Pack",
        quantity: 1,
      },
      {
        name: "Manganese Ore",
        quantity: 1,
      },
    ],
  },
  "Damaged Device": {
    tier: 0,
  },
  Device: {
    tier: 1,
    ingredients: [
      {
        name: "Damaged Device",
        quantity: 3,
      },
    ],
  },
  "Integrated Device": {
    tier: 2,
    ingredients: [
      {
        name: "Device",
        quantity: 4,
      },
    ],
  },
  "Optimized Device": {
    tier: 3,
    ingredients: [
      {
        name: "Integrated Device",
        quantity: 1,
      },
      {
        name: "Orirock Cluster",
        quantity: 2,
      },
      {
        name: "Grindstone",
        quantity: 1,
      },
    ],
  },
  Grindstone: {
    tier: 2,
  },
  "Manganese Ore": {
    tier: 2,
  },
  "Loxic Kohl": {
    tier: 2,
  },
  "RMA70-12": {
    tier: 2,
  },
  "Coagulating Gel": {
    tier: 2,
  },
  "Incandescent Alloy": {
    tier: 2,
  },
  "White Horse Kohl": {
    tier: 3,
    ingredients: [
      {
        name: "Loxic Kohl",
        quantity: 1,
      },
      {
        name: "Sugar Pack",
        quantity: 1,
      },
      {
        name: "RMA70-12",
        quantity: 1,
      },
    ],
  },
  "Manganese Trihydrate": {
    tier: 3,
    ingredients: [
      {
        name: "Manganese Ore",
        quantity: 2,
      },
      {
        name: "Polyester Pack",
        quantity: 1,
      },
      {
        name: "Loxic Kohl",
        quantity: 1,
      },
    ],
  },
  "Grindstone Pentahydrate": {
    tier: 3,
    ingredients: [
      {
        name: "Grindstone",
        quantity: 1,
      },
      {
        name: "Orirock Cluster",
        quantity: 1,
      },
      {
        name: "Integrated Device",
        quantity: 1,
      },
    ],
  },
  "RMA70-24": {
    tier: 3,
    ingredients: [
      {
        name: "RMA70-12",
        quantity: 1,
      },
      {
        name: "Orirock Cluster",
        quantity: 2,
      },
      {
        name: "Aketon",
        quantity: 1,
      },
    ],
  },
  "Polymerized Gel": {
    tier: 3,
    ingredients: [
      {
        name: "Oriron Cluster",
        quantity: 1,
      },
      {
        name: "Coagulating Gel",
        quantity: 1,
      },
      {
        name: "Incandescent Alloy",
        quantity: 1,
      },
    ],
  },
  "Incandescent Alloy Block": {
    tier: 3,
    ingredients: [
      {
        name: "Integrated Device",
        quantity: 1,
      },
      {
        name: "Grindstone",
        quantity: 1,
      },
      {
        name: "Incandescent Alloy",
        quantity: 1,
      },
    ],
  },
  "Polymerization Preparation": {
    tier: 4,
    ingredients: [
      {
        name: "Orirock Concentration",
        quantity: 1,
      },
      {
        name: "Oriron Block",
        quantity: 1,
      },
      {
        name: "Keton Colloid",
        quantity: 1,
      },
    ],
  },
  "Bipolar Nanoflake": {
    tier: 4,
    ingredients: [
      {
        name: "Optimized Device",
        quantity: 1,
      },
      {
        name: "White Horse Kohl",
        quantity: 2,
      },
    ],
  },
  "D32 Steel": {
    tier: 4,
    ingredients: [
      {
        name: "Manganese Trihydrate",
        quantity: 1,
      },
      {
        name: "Grindstone Pentahydrate",
        quantity: 1,
      },
      {
        name: "RMA70-24",
        quantity: 1,
      },
    ],
  },
  "Skill Summary - 1": {
    tier: 1,
    category: MaterialCategory["Skill Summary"],
  },
  "Skill Summary - 2": {
    tier: 2,
    category: MaterialCategory["Skill Summary"],
    ingredients: [
      {
        name: "Skill Summary - 1",
        quantity: 3,
      },
    ],
  },
  "Skill Summary - 3": {
    tier: 3,
    category: MaterialCategory["Skill Summary"],
    ingredients: [
      {
        name: "Skill Summary - 2",
        quantity: 3,
      },
    ],
  },
  "Chip Catalyst": {
    tier: 3,
  },
  "Caster Chip": {
    tier: 2,
    category: MaterialCategory.Chip,
  },
  "Caster Chip Pack": {
    tier: 3,
    category: MaterialCategory.Chip,
  },
  "Caster Dualchip": {
    tier: 4,
    category: MaterialCategory.Chip,
    ingredients: [
      {
        name: "Caster Chip Pack",
        quantity: 2,
      },
      {
        name: "Chip Catalyst",
        quantity: 1,
      },
    ],
  },
  "Vanguard Chip": {
    tier: 2,
    category: MaterialCategory.Chip,
  },
  "Vanguard Chip Pack": {
    tier: 3,
    category: MaterialCategory.Chip,
  },
  "Vanguard Dualchip": {
    tier: 4,
    category: MaterialCategory.Chip,
    ingredients: [
      {
        name: "Vanguard Chip Pack",
        quantity: 2,
      },
      {
        name: "Chip Catalyst",
        quantity: 1,
      },
    ],
  },
  "Defender Chip": {
    tier: 2,
    category: MaterialCategory.Chip,
  },
  "Defender Chip Pack": {
    tier: 3,
    category: MaterialCategory.Chip,
  },
  "Defender Dualchip": {
    tier: 4,
    category: MaterialCategory.Chip,
    ingredients: [
      {
        name: "Defender Chip Pack",
        quantity: 2,
      },
      {
        name: "Chip Catalyst",
        quantity: 1,
      },
    ],
  },
  "Sniper Chip": {
    tier: 2,
    category: MaterialCategory.Chip,
  },
  "Sniper Chip Pack": {
    tier: 3,
    category: MaterialCategory.Chip,
  },
  "Sniper Dualchip": {
    tier: 4,
    category: MaterialCategory.Chip,
    ingredients: [
      {
        name: "Sniper Chip Pack",
        quantity: 2,
      },
      {
        name: "Chip Catalyst",
        quantity: 1,
      },
    ],
  },
  "Guard Chip": {
    tier: 2,
    category: MaterialCategory.Chip,
  },
  "Guard Chip Pack": {
    tier: 3,
    category: MaterialCategory.Chip,
  },
  "Guard Dualchip": {
    tier: 4,
    category: MaterialCategory.Chip,
    ingredients: [
      {
        name: "Guard Chip Pack",
        quantity: 2,
      },
      {
        name: "Chip Catalyst",
        quantity: 1,
      },
    ],
  },
  "Supporter Chip": {
    tier: 2,
    category: MaterialCategory.Chip,
  },
  "Supporter Chip Pack": {
    tier: 3,
    category: MaterialCategory.Chip,
  },
  "Supporter Dualchip": {
    tier: 4,
    category: MaterialCategory.Chip,
    ingredients: [
      {
        name: "Supporter Chip Pack",
        quantity: 2,
      },
      {
        name: "Chip Catalyst",
        quantity: 1,
      },
    ],
  },
  "Medic Chip": {
    tier: 2,
    category: MaterialCategory.Chip,
  },
  "Medic Chip Pack": {
    tier: 3,
    category: MaterialCategory.Chip,
  },
  "Medic Dualchip": {
    tier: 4,
    category: MaterialCategory.Chip,
    ingredients: [
      {
        name: "Medic Chip Pack",
        quantity: 2,
      },
      {
        name: "Chip Catalyst",
        quantity: 1,
      },
    ],
  },
  "Specialist Chip": {
    tier: 2,
    category: MaterialCategory.Chip,
  },
  "Specialist Chip Pack": {
    tier: 3,
    category: MaterialCategory.Chip,
  },
  "Specialist Dualchip": {
    tier: 4,
    category: MaterialCategory.Chip,
    ingredients: [
      {
        name: "Specialist Chip Pack",
        quantity: 2,
      },
      {
        name: "Chip Catalyst",
        quantity: 1,
      },
    ],
  },
};
export default MATERIALS;
