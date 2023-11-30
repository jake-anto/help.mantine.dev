import React from 'react';

interface QuestionsListHeaderProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export function QuestionsListHeader({ search, onSearchChange }: QuestionsListHeaderProps) {
  return <div>QuestionsListHeader</div>;
}
