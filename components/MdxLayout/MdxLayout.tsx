import { Container } from '@mantine/core';
import { Frontmatter } from '@/types';

interface MdxLayoutProps {
  meta: Frontmatter;
  children: React.ReactNode;
}

export function MdxLayout({ meta, children }: MdxLayoutProps) {
  return (
    <>
      <div>{meta.title}</div>
      <Container size="md">{children}</Container>
    </>
  );
}

export function Layout(meta: Frontmatter) {
  return ({ children }: { children: React.ReactNode }) => (
    <MdxLayout meta={meta}>{children}</MdxLayout>
  );
}
