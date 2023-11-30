import { Frontmatter } from '@/types';

const categoriesOrder = ['general', 'tooling', 'forms'];

function isMatched(question: Frontmatter, searchQuery: string) {
  const { title, tags, category } = question;

  const query = searchQuery.toLowerCase().trim();

  if (title.toLowerCase().includes(query)) {
    return true;
  }

  if (category.toLowerCase().includes(query)) {
    return true;
  }

  if (tags.some((tag) => tag.toLowerCase().includes(query))) {
    return true;
  }

  return false;
}

export function getGroupedQuestions(questions: Frontmatter[], searchQuery: string) {
  const grouped = questions.reduce<Record<string, Frontmatter[]>>(
    (acc, question) => {
      const { category } = question;

      if (!acc[category]) {
        acc[category] = [];
      }

      if (searchQuery.trim() && !isMatched(question, searchQuery)) {
        return acc;
      }

      acc[category].push(question);

      return acc;
    },
    {} as Record<string, Frontmatter[]>
  );

  return Object.keys(grouped)
    .sort((a, b) => {
      const aIndex = categoriesOrder.indexOf(a);
      const bIndex = categoriesOrder.indexOf(b);

      if (aIndex === -1 && bIndex === -1) {
        return a.localeCompare(b);
      }

      if (aIndex === -1) {
        return 1;
      }

      if (bIndex === -1) {
        return -1;
      }

      return aIndex - bIndex;
    })
    .map((key) => ({
      category: key,
      questions: grouped[key],
    }));
}
