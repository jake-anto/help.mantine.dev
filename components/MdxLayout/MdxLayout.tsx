import { Container, Title } from '@mantine/core';
import { IconPencil, IconBug } from '@tabler/icons-react';
import { Frontmatter } from '@/types';
import { PageHeaderLink } from './PageHeaderLink/PageHeaderLink';
import classes from './MdxLayout.module.css';

interface MdxLayoutProps {
  meta: Frontmatter;
  children: React.ReactNode;
}

export function MdxLayout({ meta, children }: MdxLayoutProps) {
  return (
    <article>
      <header className={classes.header}>
        <Container size="md">
          <Title className={classes.title}>{meta.title}</Title>

          <div className={classes.links}>
            <PageHeaderLink
              icon={<IconPencil size={18} stroke={1.5} />}
              link={`https://github.com/mantinedev/help.mantine.dev/${meta.slug}`}
            >
              Edit this page on GitHub
            </PageHeaderLink>
            <PageHeaderLink
              icon={<IconBug size={18} stroke={1.5} />}
              link={`https://github.com/mantinedev/help.mantine.dev/${meta.slug}`}
            >
              Report issue with the article
            </PageHeaderLink>
          </div>
        </Container>
      </header>
      <Container size="md">{children}</Container>
    </article>
  );
}

export function Layout(meta: Frontmatter) {
  return ({ children }: { children: React.ReactNode }) => (
    <MdxLayout meta={meta}>{children}</MdxLayout>
  );
}
