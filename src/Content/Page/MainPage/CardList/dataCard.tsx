export interface cardInf {
  id: number;
  name: string;
  author: string;
  tags: string[];
  description: string;
  likes: number;
  views: number;
}

export const data: cardInf[] = [];

for (let i = 1; i < 20; ++i) {
  data.push({
    id: i,
    name: 'name' + i,
    author: 'author' + i,
    tags: ['tag1', 'tag2', 'tag3'],
    description: 'description' + i,
    likes: i,
    views: i,
  });
}
