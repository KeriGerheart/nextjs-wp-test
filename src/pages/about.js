import useSite from 'hooks/use-site';
import { getPaginatedPosts } from 'lib/posts';
import { WebsiteJsonLd } from 'lib/json-ld';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';
import PostCard from 'components/PostCard';
import Pagination from 'components/Pagination';

import styles from 'styles/pages/Home.module.scss';

export default function About() {
  const { metadata = {} } = useSite();
  const { title, description } = metadata;

  return (
    <Layout>
      <WebsiteJsonLd siteTitle={title} />
      <Header>
        <h1>This the About Page</h1>
      </Header>
    </Layout>
  );
}
