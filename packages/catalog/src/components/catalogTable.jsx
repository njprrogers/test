import React from 'react';
import PropTypes from 'prop-types';
import itemPropType from './propTypes/item';
import { Link } from 'react-router-dom';
import Loader from './loader';


const CatalogTable = (props) => {
  const { items, deleteCatalogItem, editPage, isLoading } = props;
  return (

    <div className='container'>
      {
        isLoading ? 
          <Loader />
        :  
      <table>
        <tbody>
          <tr>
            <th>Number</th>
            <th>Brand</th>
            <th>Product</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
            <th>Categories</th>
            <th colspan="2">Actions</th>
          </tr>

          {
            items.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.number}</td>
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
                  <td align="center">
                    <a className="delete" data-number={item.number} onClick={deleteCatalogItem} title="Delete"><i class="far fa-trash-alt"></i></a>
                  </td>
                  <td align="center">
                    <Link to={`/upsert-item/${item.number}`}><i class="far fa-edit"></i></Link>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
            }
    </div>
  );
};

CatalogTable.propTypes = {
  items: PropTypes.arrayOf(itemPropType()),
  isLoading: PropTypes.bool
};
CatalogTable.defaultProps = {
  items: [],
  isLoading: true
};

export default CatalogTable;
