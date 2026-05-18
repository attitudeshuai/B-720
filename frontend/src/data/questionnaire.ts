export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Option {
  text: string;
  nextId?: number; // Jump to specific question
  result?: '保留' | '丢弃' | '待定';
}

export const questions: Question[] = [
  {
    id: 1,
    text: "这个物品目前在你的生活中是否有明确的用途？",
    options: [
      { text: "是的，我经常使用", result: '保留' },
      { text: "没有，但我可能需要它", nextId: 2 },
      { text: "没有，它只是放在那里吃灰", nextId: 3 }
    ]
  },
  {
    id: 2,
    text: "你在过去12个月内使用过它吗？",
    options: [
      { text: "是的，用过", nextId: 3 },
      { text: "没有", result: '丢弃' }
    ]
  },
  {
    id: 3,
    text: "持有这件物品是否让你感到心动或有美好的回忆？",
    options: [
      { text: "是的，我很喜欢它", result: '保留' },
      { text: "心情复杂 / 无感", nextId: 4 },
      { text: "没有，它带来负面情绪", result: '丢弃' }
    ]
  },
  {
    id: 4,
    text: "它是否昂贵或难以替代？",
    options: [
      { text: "是的，非常难以替代", result: '待定' },
      { text: "不，很容易买到或替代", result: '丢弃' }
    ]
  }
];
