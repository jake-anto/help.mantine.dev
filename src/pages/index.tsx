import { Button, Group } from '@mantine/core';
import { MDX_DATA } from '@/mdx';

export default function IndexPage() {
  console.log(MDX_DATA);
  return (
    <Group mt={50} justify="center">
      <Button size="xl">Welcome to Mantine!</Button>
    </Group>
  );
}
