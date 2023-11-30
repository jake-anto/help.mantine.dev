import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import { Container, Text, TextInput, Title } from '@mantine/core';
import classes from './QuestionsListHeader.module.css';

interface QuestionsListHeaderProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export function QuestionsListHeader({ search, onSearchChange }: QuestionsListHeaderProps) {
  return (
    <div className={classes.root}>
      <Container size="md">
        <Title className={classes.title}>Mantine Help Center</Title>
        <Text className={classes.description}>
          Frequently asked and general questions for Mantine 7.0+
        </Text>

        <TextInput
          size="xl"
          radius="md"
          placeholder="Search questions..."
          leftSectionPointerEvents="none"
          leftSection={<IconSearch size={26} stroke={1.5} />}
          classNames={{
            input: classes.searchInput,
            section: classes.searchInputSection,
          }}
          value={search}
          onChange={(event) => onSearchChange(event.currentTarget.value)}
          autoFocus
        />
      </Container>
    </div>
  );
}
