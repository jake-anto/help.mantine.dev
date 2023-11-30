import React, { useState } from 'react';
import { Container } from '@mantine/core';
import { Frontmatter } from '@/types';
import { getGroupedQuestions } from './get-grouped-questions';
import { QuestionsListHeader } from './QuestionsListHeader/QuestionsListHeader';
import { QuestionsListGroup } from './QuestionsListGroup/QuestionsListGroup';

interface QuestionsListProps {
  data: Frontmatter[];
}

export function QuestionsList({ data }: QuestionsListProps) {
  const [search, setSearch] = useState('');
  const groupedQuestions = getGroupedQuestions(data, search);

  const groups = groupedQuestions.map(({ category, questions }) => (
    <QuestionsListGroup key={category} category={category} questions={questions} search={search} />
  ));

  return (
    <>
      <QuestionsListHeader search={search} onSearchChange={setSearch} />
      <Container size="md" mt={50}>
        {groups}
      </Container>
    </>
  );
}
