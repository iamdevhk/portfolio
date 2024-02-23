import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import Contact from '@/modules/contact';

const PAGE_TITLE = 'Contact';
const PAGE_DESCRIPTION =
  "I welcome the opportunity to engage in a conversation about potential collaborations and how we can create something great together.";

const ContactPage: NextPage = () => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Hari`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Contact />
      </Container>
    </>
  );
};

export default ContactPage;
