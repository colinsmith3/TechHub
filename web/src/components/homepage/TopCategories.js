import React from 'react';
import { TopCategoriesStyles } from '../../styles/homePage/TopCategoriesStyles';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle } from '../typography/Title';

function TopCategories() {
  return (
    <TopCategoriesStyles>
      <SectionTitle>Top Categories</SectionTitle>
      <ParagraphText>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam,
        veniam.
      </ParagraphText>
    </TopCategoriesStyles>
  );
}

export default TopCategories;
