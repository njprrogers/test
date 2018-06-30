import React from 'react';
import PropTypes from 'prop-types';
import itemPropType from './propTypes/item';


const Home = (props) => {
  const { items } = props;
  return (
    <div className="container">
      <table>
        <tbody>
          <tr>
            <th>Brand</th>
            <th>Product</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
            <th>Categories</th>
          </tr>
          {
            items.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.attributes.brand}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price.label}</td>
                  <td>
                    {
                      item.images.filter((image) => {
                        return image.tags.includes('thumbnail');
                      }).map((thumbNail) => {
                        return (
                          <img src={thumbNail.url} width="25" height="25" alt="thumbnail" />
                        );
                      })
                    }
                  </td>
                  <td className="category">
                    {
                      item.categories.map((category) => {
                        return <span className="category-item">{category}</span>;
                      })
                    }
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

Home.propTypes = {
  items: PropTypes.arrayOf(itemPropType()),
  isLoading: PropTypes.bool
};
Home.defaultProps = {
  items: [],
  isLoading: true
};

export default Home;
