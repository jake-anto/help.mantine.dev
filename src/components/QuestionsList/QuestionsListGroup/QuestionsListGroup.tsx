import React from 'react';
import Link from 'next/link';
import { Highlight } from '@mantine/core';
import { Frontmatter } from '@/types';
import classes from './QuestionsListGroup.module.css';

export interface QuestionsListGroupProps {
  search: string;
  category: string;
  questions: Frontmatter[];
}

export function QuestionsListGroup({ category, questions, search }: QuestionsListGroupProps) {
  const items = questions.map((question) => (
    <Highlight
      component={Link}
      highlight={search}
      key={question.slug}
      href={`/q/${question.slug}`}
      className={classes.question}
    >
      {question.title}
    </Highlight>
  ));

  return (
    <section className={classes.group}>
      <header>
        <h2 className={classes.category}>{category}</h2>
      </header>
      {items}
    </section>
  );
}
