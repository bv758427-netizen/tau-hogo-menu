export type Locale = "ru" | "kk" | "en";
export type Product = { id:string; category:string; name:Record<Locale,string>; price:number; image:string|null };
export const categories = [
  {
    "id": "all",
    "ru": "Все",
    "kk": "Барлығы",
    "en": "All"
  },
  {
    "id": "broth",
    "ru": "Бульоны",
    "kk": "Сорпалар",
    "en": "Broths"
  },
  {
    "id": "lamb",
    "ru": "Баранина",
    "kk": "Қой еті",
    "en": "Lamb"
  },
  {
    "id": "beef",
    "ru": "Говядина",
    "kk": "Сиыр еті",
    "en": "Beef"
  },
  {
    "id": "chicken",
    "ru": "Курица и яйца",
    "kk": "Тауық және жұмыртқа",
    "en": "Chicken & eggs"
  },
  {
    "id": "seafood",
    "ru": "Морепродукты",
    "kk": "Теңіз өнімдері",
    "en": "Seafood"
  },
  {
    "id": "fish",
    "ru": "Рыба",
    "kk": "Балық",
    "en": "Fish"
  },
  {
    "id": "mushrooms",
    "ru": "Грибы",
    "kk": "Саңырауқұлақтар",
    "en": "Mushrooms"
  },
  {
    "id": "vegetables",
    "ru": "Овощи",
    "kk": "Көкөністер",
    "en": "Vegetables"
  },
  {
    "id": "sets",
    "ru": "Ассорти",
    "kk": "Ассорти",
    "en": "Platters"
  }
] as const;
export const products: Product[] = [
  {
    "id": "tau-001",
    "category": "broth",
    "name": {
      "ru": "Неострый бульон",
      "kk": "Ащы емес сорпа",
      "en": "Mild broth"
    },
    "price": 1850,
    "image": null
  },
  {
    "id": "tau-002",
    "category": "broth",
    "name": {
      "ru": "Средний бульон",
      "kk": "Орташа сорпа",
      "en": "Medium broth"
    },
    "price": 1850,
    "image": null
  },
  {
    "id": "tau-003",
    "category": "broth",
    "name": {
      "ru": "Острый бульон",
      "kk": "Ащы сорпа",
      "en": "Spicy broth"
    },
    "price": 1850,
    "image": null
  },
  {
    "id": "tau-004",
    "category": "broth",
    "name": {
      "ru": "Куриный бульон",
      "kk": "Тауық сорпасы",
      "en": "Chicken broth"
    },
    "price": 1850,
    "image": null
  },
  {
    "id": "tau-005",
    "category": "broth",
    "name": {
      "ru": "Рыбный бульон",
      "kk": "Балық сорпасы",
      "en": "Fish broth"
    },
    "price": 1850,
    "image": null
  },
  {
    "id": "tau-006",
    "category": "broth",
    "name": {
      "ru": "Говяжий бульон",
      "kk": "Сиыр етінен сорпа",
      "en": "Beef broth"
    },
    "price": 1850,
    "image": null
  },
  {
    "id": "tau-007",
    "category": "lamb",
    "name": {
      "ru": "Филе баранины",
      "kk": "Қой етінің сүбесі",
      "en": "Lamb fillet"
    },
    "price": 3100,
    "image": null
  },
  {
    "id": "tau-008",
    "category": "lamb",
    "name": {
      "ru": "Бараньи лытки",
      "kk": "Қойдың сирағы",
      "en": "Lamb shanks"
    },
    "price": 2850,
    "image": null
  },
  {
    "id": "tau-009",
    "category": "lamb",
    "name": {
      "ru": "Рёбра баранины",
      "kk": "Қой қабырғасы",
      "en": "Lamb ribs"
    },
    "price": 2850,
    "image": null
  },
  {
    "id": "tau-010",
    "category": "lamb",
    "name": {
      "ru": "Голова барана",
      "kk": "Қой басы",
      "en": "Lamb head"
    },
    "price": 4300,
    "image": null
  },
  {
    "id": "tau-011",
    "category": "lamb",
    "name": {
      "ru": "Голова барана, томлёная целиком",
      "kk": "Бүтін бұқтырылған қой басы",
      "en": "Whole slow-braised lamb head"
    },
    "price": 7000,
    "image": null
  },
  {
    "id": "tau-012",
    "category": "beef",
    "name": {
      "ru": "Пельмени с джусаем",
      "kk": "Жусай қосылған тұшпара",
      "en": "Dumplings with garlic chives"
    },
    "price": 1850,
    "image": null
  },
  {
    "id": "tau-013",
    "category": "beef",
    "name": {
      "ru": "Говядина филе",
      "kk": "Сиыр етінің сүбесі",
      "en": "Beef fillet"
    },
    "price": 3150,
    "image": null
  },
  {
    "id": "tau-014",
    "category": "beef",
    "name": {
      "ru": "Говяжья голова",
      "kk": "Сиыр басы",
      "en": "Beef head"
    },
    "price": 2850,
    "image": null
  },
  {
    "id": "tau-015",
    "category": "beef",
    "name": {
      "ru": "Требуха",
      "kk": "Қарын",
      "en": "Beef tripe"
    },
    "price": 2000,
    "image": null
  },
  {
    "id": "tau-016",
    "category": "beef",
    "name": {
      "ru": "Фрикадельки",
      "kk": "Ет түйіршіктері",
      "en": "Meatballs"
    },
    "price": 2850,
    "image": null
  },
  {
    "id": "tau-017",
    "category": "beef",
    "name": {
      "ru": "Пельмени с мясом",
      "kk": "Ет қосылған тұшпара",
      "en": "Meat dumplings"
    },
    "price": 1850,
    "image": null
  },
  {
    "id": "tau-018",
    "category": "chicken",
    "name": {
      "ru": "Перепелиные яйца (сырые)",
      "kk": "Бөдене жұмыртқасы (шикі)",
      "en": "Quail eggs (raw)"
    },
    "price": 1100,
    "image": null
  },
  {
    "id": "tau-019",
    "category": "chicken",
    "name": {
      "ru": "Перепелиные яйца (варёные)",
      "kk": "Бөдене жұмыртқасы (піскен)",
      "en": "Quail eggs (boiled)"
    },
    "price": 1100,
    "image": null
  },
  {
    "id": "tau-020",
    "category": "chicken",
    "name": {
      "ru": "Куриное филе",
      "kk": "Тауық филесі",
      "en": "Chicken fillet"
    },
    "price": 1950,
    "image": null
  },
  {
    "id": "tau-021",
    "category": "chicken",
    "name": {
      "ru": "Куриные пупки",
      "kk": "Тауық қарыншалары",
      "en": "Chicken gizzards"
    },
    "price": 1500,
    "image": null
  },
  {
    "id": "tau-022",
    "category": "chicken",
    "name": {
      "ru": "Куриные сердечки",
      "kk": "Тауық жүректері",
      "en": "Chicken hearts"
    },
    "price": 1500,
    "image": null
  },
  {
    "id": "tau-023",
    "category": "chicken",
    "name": {
      "ru": "Куриные крылья",
      "kk": "Тауық қанаттары",
      "en": "Chicken wings"
    },
    "price": 1550,
    "image": null
  },
  {
    "id": "tau-024",
    "category": "chicken",
    "name": {
      "ru": "Куриное яйцо (1 шт.)",
      "kk": "Тауық жұмыртқасы (1 дана)",
      "en": "Chicken egg (1 pc.)"
    },
    "price": 350,
    "image": null
  },
  {
    "id": "tau-025",
    "category": "mushrooms",
    "name": {
      "ru": "Древесные грибы",
      "kk": "Ағаш саңырауқұлақтары",
      "en": "Wood ear mushrooms"
    },
    "price": 1550,
    "image": null
  },
  {
    "id": "tau-026",
    "category": "mushrooms",
    "name": {
      "ru": "Эноки",
      "kk": "Эноки",
      "en": "Enoki mushrooms"
    },
    "price": 1850,
    "image": null
  },
  {
    "id": "tau-027",
    "category": "mushrooms",
    "name": {
      "ru": "Золотая игла",
      "kk": "Алтын ине саңырауқұлағы",
      "en": "Golden needle mushrooms"
    },
    "price": 2550,
    "image": null
  },
  {
    "id": "tau-028",
    "category": "mushrooms",
    "name": {
      "ru": "Шампиньоны",
      "kk": "Қозықұйрық",
      "en": "Button mushrooms"
    },
    "price": 1650,
    "image": null
  },
  {
    "id": "tau-029",
    "category": "sets",
    "name": {
      "ru": "Ассорти с морепродуктами",
      "kk": "Теңіз өнімдері ассортиі",
      "en": "Seafood platter"
    },
    "price": 35000,
    "image": null
  },
  {
    "id": "tau-030",
    "category": "sets",
    "name": {
      "ru": "Мясное ассорти",
      "kk": "Ет ассортиі",
      "en": "Meat platter"
    },
    "price": 19850,
    "image": null
  },
  {
    "id": "tau-031",
    "category": "sets",
    "name": {
      "ru": "Азиатское ассорти",
      "kk": "Азиялық ассорти",
      "en": "Asian platter"
    },
    "price": 12850,
    "image": null
  },
  {
    "id": "tau-032",
    "category": "sets",
    "name": {
      "ru": "Куриное ассорти",
      "kk": "Тауық ассортиі",
      "en": "Chicken platter"
    },
    "price": 9850,
    "image": null
  },
  {
    "id": "tau-033",
    "category": "seafood",
    "name": {
      "ru": "Морские гребешки",
      "kk": "Теңіз тарақшалары",
      "en": "Scallops"
    },
    "price": 5700,
    "image": null
  },
  {
    "id": "tau-034",
    "category": "seafood",
    "name": {
      "ru": "Кольца кальмара",
      "kk": "Кальмар сақиналары",
      "en": "Squid rings"
    },
    "price": 3950,
    "image": null
  },
  {
    "id": "tau-035",
    "category": "seafood",
    "name": {
      "ru": "Крабовые палочки",
      "kk": "Краб таяқшалары",
      "en": "Crab sticks"
    },
    "price": 1850,
    "image": null
  },
  {
    "id": "tau-036",
    "category": "seafood",
    "name": {
      "ru": "Креветки очищенные",
      "kk": "Тазартылған асшаяндар",
      "en": "Peeled shrimp"
    },
    "price": 4650,
    "image": null
  },
  {
    "id": "tau-037",
    "category": "seafood",
    "name": {
      "ru": "Креветки в панцире",
      "kk": "Қабығындағы асшаяндар",
      "en": "Shrimp in shell"
    },
    "price": 4300,
    "image": null
  },
  {
    "id": "tau-038",
    "category": "seafood",
    "name": {
      "ru": "Мидии",
      "kk": "Мидиялар",
      "en": "Mussels"
    },
    "price": 5700,
    "image": null
  },
  {
    "id": "tau-039",
    "category": "seafood",
    "name": {
      "ru": "Морская капуста",
      "kk": "Теңіз орамжапырағы",
      "en": "Seaweed"
    },
    "price": 1850,
    "image": null
  },
  {
    "id": "tau-040",
    "category": "seafood",
    "name": {
      "ru": "Осьминоги",
      "kk": "Сегізаяқ",
      "en": "Octopus"
    },
    "price": 3900,
    "image": null
  },
  {
    "id": "tau-041",
    "category": "seafood",
    "name": {
      "ru": "Хвост лобстера",
      "kk": "Омар құйрығы",
      "en": "Lobster tail"
    },
    "price": 19000,
    "image": null
  },
  {
    "id": "tau-042",
    "category": "seafood",
    "name": {
      "ru": "Клешни камчатского краба",
      "kk": "Камчатка крабының қысқыштары",
      "en": "King crab claws"
    },
    "price": 12000,
    "image": null
  },
  {
    "id": "tau-043",
    "category": "seafood",
    "name": {
      "ru": "Каракатица",
      "kk": "Каракатица",
      "en": "Cuttlefish"
    },
    "price": 5000,
    "image": null
  },
  {
    "id": "tau-044",
    "category": "fish",
    "name": {
      "ru": "Судак филе",
      "kk": "Көксерке филесі",
      "en": "Zander fillet"
    },
    "price": 2350,
    "image": null
  },
  {
    "id": "tau-045",
    "category": "fish",
    "name": {
      "ru": "Сёмга",
      "kk": "Албырт",
      "en": "Salmon"
    },
    "price": 3950,
    "image": null
  },
  {
    "id": "tau-046",
    "category": "fish",
    "name": {
      "ru": "Дорадо (целая)",
      "kk": "Дорадо (тұтас)",
      "en": "Whole dorado"
    },
    "price": 4100,
    "image": null
  },
  {
    "id": "tau-047",
    "category": "fish",
    "name": {
      "ru": "Филе тунца",
      "kk": "Тунец филесі",
      "en": "Tuna fillet"
    },
    "price": 5700,
    "image": null
  },
  {
    "id": "tau-048",
    "category": "fish",
    "name": {
      "ru": "Угорь",
      "kk": "Жыланбалық",
      "en": "Eel"
    },
    "price": 5700,
    "image": null
  },
  {
    "id": "tau-049",
    "category": "vegetables",
    "name": {
      "ru": "Брокколи",
      "kk": "Брокколи",
      "en": "Broccoli"
    },
    "price": 1500,
    "image": null
  },
  {
    "id": "tau-050",
    "category": "vegetables",
    "name": {
      "ru": "Корень лотоса",
      "kk": "Лотос тамыры",
      "en": "Lotus root"
    },
    "price": 1500,
    "image": null
  }
];
