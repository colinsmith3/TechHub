import React from 'react';
import { Link } from 'gatsby';
import PageSpace from '../components/PageSpace';
import { NotFoundPageStyles } from '../styles/NotFoundPageStyles';
import { SectionTitle } from '../components/typography/Title';
import ParagraphText from '../components/typography/ParagraphText';

function NotFoundPage() {
  return (
    <PageSpace>
      <div>
        <NotFoundPageStyles>
          <SectionTitle>404</SectionTitle>
          <ParagraphText>
            The page you are looking for is not found <br /> Go back to{' '}
            <Link to="/" className="link">
              Home Page
            </Link>
          </ParagraphText>
        </NotFoundPageStyles>
      </div>
    </PageSpace>
  );
}

export default NotFoundPage;
