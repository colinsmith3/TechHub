import { format } from 'date-fns';
import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { BlogItemStyles } from '../../styles/blog/BlogItemStyles';
import { Title } from '../typography/Title';
import ParagraphText from '../typography/ParagraphText';

function BlogItem({ title, path, image, publishedAt, categories }) {
  return (
    <BlogItemStyles>
      <Link to={`/blogs/${path}`}>
        <GatsbyImage
          image={image.imageData}
          alt={image.altText}
          className="img"
        />
      </Link>
      <Link to={`/blogs/${path}`}>
        <Title>{title}</Title>
      </Link>
      {publishedAt && (
        <ParagraphText className="publishedAt">
          {format(new Date(publishedAt), 'p, MMMM dd, yyyy')}
        </ParagraphText>
      )}
      <ParagraphText className="categoriesText">
        {categories &&
          categories.map((item, index) => (
            <span key={item.slug.current}>
              <Link to={`/categories/${item.slug.current}`}>{item.title}</Link>
              {index < categories.length - 1 ? ', ' : ''}
            </span>
          ))}
      </ParagraphText>
    </BlogItemStyles>
  );
}

export default BlogItem;
