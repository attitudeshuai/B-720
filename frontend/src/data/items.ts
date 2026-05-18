export type Category = '家居用品' | '数码配件' | '衣物穿搭' | '文具书籍';

export interface Item {
  id: string;
  name: string;
  category: Category;
  image: string;
  reason: string;
  analysis: string;
  price: string;
}

export const categories: Category[] = ['家居用品', '数码配件', '衣物穿搭', '文具书籍'];

export const items: Item[] = [
  {
    id: '1',
    name: '超声波香薰机',
    category: '家居用品',
    image: '/images/aroma-diffuser.jpg',
    reason: '为房间增添柔和的治愈香气，温暖的灯光亦可作为床头灯使用。',
    analysis: '耐用且多功能。虽然有更便宜的替代品，但其优秀的做工和静音效果使其值得长期投资。',
    price: '¥299'
  },
  {
    id: '2',
    name: '电子墨水阅读器 (Kindle)',
    category: '数码配件',
    image: '/images/kindle.jpg',
    reason: '随身携带千本书籍，无实体书的杂乱。护眼屏幕带来纸质书般的阅读体验。',
    analysis: '前期投入较高，但节省了购买实体书的开销和大量的书架空间。二手保值率高。',
    price: '¥998'
  },
  {
    id: '3',
    name: '基础款纯棉白T恤',
    category: '衣物穿搭',
    image: '/images/tshirt.jpg',
    reason: '胶囊衣橱的基石。百搭、舒适、永不过时。',
    analysis: '重磅棉质比快时尚品牌更耐穿。单次穿着成本极低，是极简主义者的必备单品。',
    price: '¥79'
  },
  {
    id: '4',
    name: '凌美 (Lamy) 钢笔',
    category: '文具书籍',
    image: '/images/pen.jpg',
    reason: '让书写成为一种仪式。减少购买一次性塑料中性笔的需求。',
    analysis: '可替换墨囊设计环保且长期成本低。笔尖耐用，书写流畅，越用越顺手。',
    price: '¥180'
  },
  {
    id: '5',
    name: '亚麻床品四件套',
    category: '家居用品',
    image: '/images/bedding.jpg',
    reason: '透气性极佳，越洗越柔软。天然的褶皱纹理带来温暖的居家感。',
    analysis: '价格不菲，但若保养得当可使用数十年。相比化纤材质，能显著提升睡眠质量。',
    price: '¥680'
  },
  {
    id: '6',
    name: '主动降噪耳机',
    category: '数码配件',
    image: '/images/headphones.jpg',
    reason: '随时随地创造私人静谧空间。在嘈杂环境中保持专注的利器。',
    analysis: '为宁静付费。对于通勤族和开放式办公人员来说是刚需。出色的续航和佩戴舒适度是核心价值。',
    price: '¥1899'
  }
];
