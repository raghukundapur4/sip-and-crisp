import { menuCategories } from './menu';

const unsplash = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&fit=crop`;

/** Curated pool of unique food & drink photos — one per menu item. */
const imagePool = [
  unsplash('photo-1622597467836-f0935c4d8b1a'),
  unsplash('photo-1600271886742-f049cd451bba'),
  unsplash('photo-1544145945-f90425340c7e'),
  unsplash('photo-1587049352846-4a222e784d38'),
  unsplash('photo-1464965911861-746a04a4f372'),
  unsplash('photo-1599819177332-94ac646ab44e'),
  unsplash('photo-1585059895524-3b53b2453edc'),
  unsplash('photo-1615485925615-ef549c2f7a28'),
  unsplash('photo-1587735241456-73953a9e3f25'),
  unsplash('photo-1553279768-8650fa948c2c'),
  unsplash('photo-1594282486552-05b4d85560ab'),
  unsplash('photo-1605027990121-475c8a4e8c4f'),
  unsplash('photo-1625943552530-35b40c55862b'),
  unsplash('photo-1560801613-2-0ab000d2efe0'),
  unsplash('photo-1550258987-190a2d41a8ba'),
  unsplash('photo-1610970881329-bf46bfb1b786'),
  unsplash('photo-1621506289937-a8e681df37d2'),
  unsplash('photo-1548839140-5a941f4e3b8c'),
  unsplash('photo-1534353473419-4fa6bd6b807b'),
  unsplash('photo-1513558161293-27b7cdfc54f9'),
  unsplash('photo-1572490122747-3968b75c699e'),
  unsplash('photo-1556679343-c7306c1976bc'),
  unsplash('photo-1570197788417-dcd788b84a36'),
  unsplash('photo-1481391240952-63c40ddeb827'),
  unsplash('photo-1461023058943-07fcbe16d735'),
  unsplash('photo-1523049673857-eb18f1d7b578'),
  unsplash('photo-1571771894821-ce9b6c11e08c'),
  unsplash('photo-1490474738765-763a5d4d4eec'),
  unsplash('photo-1553909489-dae50b938005'),
  unsplash('photo-1577805942597-fccdbce0e019'),
  unsplash('photo-1515823064-d08787a57761'),
  unsplash('photo-1541659672014-51c80c75b222'),
  unsplash('photo-1558961363-fa8ccf64a621'),
  unsplash('photo-1563805042-7684c019e1cb'),
  unsplash('photo-1599599810694-b5b37391a13a'),
  unsplash('photo-1546173159-315724a3167d'),
  unsplash('photo-1621263764928-df1444c5e859'),
  unsplash('photo-1513104890138-7c749659a591'),
  unsplash('photo-1565299624946-b28f40a0ae38'),
  unsplash('photo-1528607929212-2636ec44253e'),
  unsplash('photo-1574071318508-1cdbab80d002'),
  unsplash('photo-1567123568596-701b393912dd'),
  unsplash('photo-1593560708928-61dd98c46a4e'),
  unsplash('photo-1604382354936-07c5d9983bd3'),
  unsplash('photo-1512621776951-a57141f2eefd'),
  unsplash('photo-1502741337-451681d4e807'),
  unsplash('photo-1544787219-7f47ccb76574'),
  unsplash('photo-1551024506-0bccd28d83cb'),
  unsplash('photo-1553530666-ba11a7da8558'),
  unsplash('photo-1553530979-0f5d6d0c47fb'),
  unsplash('photo-1558618666-fcd25c85cd64'),
  unsplash('photo-1563379926898-05f4575a45d8'),
  unsplash('photo-1574480303607-5ea934b5a82a'),
  unsplash('photo-1578662996442-48f60103fc96'),
  unsplash('photo-1580915411954-282cb1b0d780'),
  unsplash('photo-1587132137056-bfbf31669dd5'),
  unsplash('photo-1589302168068-964664a27151'),
  unsplash('photo-1590301157890-4810ed352733'),
  unsplash('photo-1595475207225-428b62bda831'),
  unsplash('photo-1599487488170-d11ec29b8e66'),
  unsplash('photo-1600275669448-1d0b12a16f3a'),
  unsplash('photo-1603569283847-aa2954d4f9ba'),
  unsplash('photo-1606313564200-e75d5e30476b'),
  unsplash('photo-1606312619070-d48aeb4b6acd'),
  unsplash('photo-1609006757094-d20584909eb8'),
  unsplash('photo-1613478223719-0a43bed7ab3f'),
  unsplash('photo-1611146875415-c26b5e3f3678'),
  unsplash('photo-1615485276883-35f53ee4081f'),
  unsplash('photo-1618164436268-4473940d1f5c'),
  unsplash('photo-1622484210450-fbd1c0fd1bbd'),
  unsplash('photo-1623428187425-49d69eed5b0c'),
  unsplash('photo-1625772263525-fb5f54622e7f'),
  unsplash('photo-1626204050100-ffdfb534a744'),
  unsplash('photo-1626645738196-c2a7c87a139f'),
  unsplash('photo-1629203851122-3726ecdf080e'),
  unsplash('photo-1631452180519-c014fe946bc7'),
  unsplash('photo-1633613287061-7fe75d4e5587'),
  unsplash('photo-1638788196018-5f555aaabc63'),
  unsplash('photo-1642452431614-a9a0c833b0a5'),
  unsplash('photo-1642452431704-53828a984e7e'),
  unsplash('photo-1642797054405-6282fbd5922a'),
  unsplash('photo-1642799521165-2c1d5f1bdb4a'),
  unsplash('photo-1642799696007-2f02c770b1d6'),
  unsplash('photo-1649633500628-126f512d9bf9'),
  unsplash('photo-1651789180055-32d9a4c2dd41'),
  unsplash('photo-1655211918344-ec073dd09c8a'),
  unsplash('photo-1664436751048-0740533eb55a'),
  unsplash('photo-1669152954156-6b44f1ddbe79'),
  unsplash('photo-1670151916517-976fa09ca0f6'),
  unsplash('photo-1675393297019-6ba6f89f6a26'),
  unsplash('photo-1681412336061-3eaa9e79e382'),
  unsplash('photo-1683543726081-0a86b0f4fadc'),
  unsplash('photo-1693485299382-cd0a10619842'),
  unsplash('photo-1694446847811-f326dc4c4a94'),
  unsplash('photo-1697155626867-0d7c8edee6b5'),
  unsplash('photo-1703106674307-1f8a3e7a3e3f'),
];

/** Best-match photo per item — keyed as `categoryId::itemName`. */
const preferredImages: Record<string, string> = {
  // Juices
  'juices::Orange': imagePool[0],
  'juices::Mosambi': imagePool[1],
  'juices::Pineapple': imagePool[14],
  'juices::Apple': imagePool[13],
  'juices::Kiwi': imagePool[6],
  'juices::Grapes': imagePool[4],
  'juices::Strawberry': imagePool[3],
  'juices::Watermelon': imagePool[2],
  'juices::Plum': imagePool[10],
  'juices::Lychee': imagePool[11],
  'juices::Coconut Crunch': imagePool[8],
  'juices::Cocktail': imagePool[2],
  'juices::Pomegranate': imagePool[7],
  'juices::Maramari': imagePool[17],
  'juices::Ganga Jamuna': imagePool[18],
  'juices::Saraswati': imagePool[19],
  'juices::Muskmelon': imagePool[12],
  // Milkshakes
  'milkshakes::Avocado': imagePool[25],
  'milkshakes::Strawberry': imagePool[27],
  'milkshakes::Sitaphal': imagePool[28],
  'milkshakes::Mulberry': imagePool[29],
  'milkshakes::Anjeer': imagePool[34],
  'milkshakes::Chikoo': imagePool[30],
  'milkshakes::Kiwi': imagePool[31],
  'milkshakes::Banana': imagePool[26],
  'milkshakes::Cold Coffee': imagePool[24],
  'milkshakes::Coffee-Late': imagePool[23],
  'milkshakes::Butterscotch': imagePool[32],
  'milkshakes::Vanilla': imagePool[33],
  'milkshakes::Blueberry': imagePool[22],
  'milkshakes::Coconut': imagePool[35],
  'milkshakes::Chocolate': imagePool[21],
  'milkshakes::Dry Fruit': imagePool[34],
  'milkshakes::Muskmelon': imagePool[36],
  // Chocolates
  'chocolates::Oreo': imagePool[37],
  'chocolates::Kit Kat': imagePool[38],
  'chocolates::Ferrero Rocher': imagePool[39],
  'chocolates::Nutella Kitkat': imagePool[40],
  'chocolates::Kitkat Oreo': imagePool[41],
  'chocolates::Nutella': imagePool[42],
  'chocolates::Chikoo Chocolate': imagePool[43],
  // Season specials
  'season-specials::Mango Juice': imagePool[16],
  'season-specials::Mango Milkshake': imagePool[20],
  'season-specials::Mango Blossom': imagePool[44],
  'season-specials::Mango Mastani': imagePool[45],
  'season-specials::Red-Mango Shake': imagePool[46],
  'season-specials::Mango Coconut': imagePool[47],
  'season-specials::Party Punch': imagePool[48],
  // Combination juices
  'combination-juices::Boom': imagePool[49],
  'combination-juices::Summer Cool': imagePool[50],
  'combination-juices::Golden Glory': imagePool[51],
  'combination-juices::Summer Queen': imagePool[52],
  'combination-juices::Jamun Kala-Khatta': imagePool[53],
  'combination-juices::Kiwi Apple': imagePool[54],
  'combination-juices::Watermelon Lemon': imagePool[55],
  'combination-juices::Plum - Peach': imagePool[56],
  // Sandwiches
  'sandwiches::Veg Cheese Grill / Toast': imagePool[57],
  'sandwiches::Veg Grill / Toast': imagePool[58],
  'sandwiches::Corn Chilli Cheese Grill / Toast': imagePool[59],
  'sandwiches::Chilli Cheese Grill / Toast': imagePool[60],
  'sandwiches::Banana Nutella Toast': imagePool[61],
  'sandwiches::Chocolate Sandwich': imagePool[62],
  // Pizzas
  'pizzas::Veg Cheese Pizza': imagePool[63],
  'pizzas::Tandoori Paneer Cheese Pizza': imagePool[64],
  'pizzas::Plain Cheese Pizza': imagePool[65],
  'pizzas::Schezwan Paneer Pizza': imagePool[66],
  'pizzas::Paneer Veg Cheese Pizza': imagePool[67],
  'pizzas::Paneer Tandoori Bread Pizza': imagePool[68],
  // Our specials
  'our-specials::Muskmelon Kulfi': imagePool[69],
  'our-specials::Exotic Jamun': imagePool[70],
  'our-specials::Berry Blast': imagePool[71],
  'our-specials::Mixed Berries': imagePool[72],
  'our-specials::Peachyee': imagePool[73],
  'our-specials::Kiwi-Dragon': imagePool[74],
  'our-specials::Anjeer-Kiwi': imagePool[75],
  'our-specials::Watermelon-Blueberry': imagePool[76],
  'our-specials::Cocado': imagePool[77],
  'our-specials::Anjeer Dates': imagePool[78],
  'our-specials::Banana Dates': imagePool[79],
  // Refreshments
  'refreshments::Lemon': imagePool[80],
  'refreshments::Jaljeera': imagePool[81],
  'refreshments::Ginger Lemon': imagePool[82],
  'refreshments::Kala Khatta': imagePool[83],
  'refreshments::Kokum': imagePool[84],
};

function buildItemImageMap(): Map<string, string> {
  const map = new Map<string, string>();
  const used = new Set<string>();
  let poolIndex = 0;

  const takeUnique = (preferred?: string): string => {
    if (preferred && !used.has(preferred)) {
      used.add(preferred);
      return preferred;
    }
    while (poolIndex < imagePool.length) {
      const candidate = imagePool[poolIndex++];
      if (!used.has(candidate)) {
        used.add(candidate);
        return candidate;
      }
    }
    throw new Error('Not enough unique images in pool for all menu items');
  };

  for (const category of menuCategories) {
    for (const item of category.items) {
      const key = `${category.id}::${item.name}`;
      const preferred = preferredImages[key];
      map.set(key, takeUnique(preferred));
    }
  }

  return map;
}

const itemImageMap = buildItemImageMap();

export function getItemImage(name: string, categoryId: string): string {
  return itemImageMap.get(`${categoryId}::${name}`) ?? imagePool[0];
}

export function getMenuItemImage(itemName: string): string {
  for (const category of menuCategories) {
    if (category.items.some((item) => item.name === itemName)) {
      return getItemImage(itemName, category.id);
    }
  }
  return imagePool[0];
}
