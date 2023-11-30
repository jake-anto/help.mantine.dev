import React from 'react';
import { Frontmatter } from '@/types';

export interface QuestionsListGroupProps {
  category: string;
  questions: Frontmatter[];
}

export function QuestionsListGroup({ category, questions }: QuestionsListGroupProps) {
  return <div>{category}</div>;
}
