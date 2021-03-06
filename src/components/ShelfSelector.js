import React from 'react';
import PropTypes from 'prop-types';

const ShelfSelector = (props) => (
  <div className="book-shelf-changer">
    <select
      data-book={JSON.stringify(props.book)}
      defaultValue={props.book.shelfId || 'none'}
      onChange={props.updateShelf}
      >
      <option value="move" disabled>Move to...</option>
      {props.shelves.map((shelf) => (
        <option
          key={shelf.id}
          value={shelf.id}
          >{shelf.name}</option>
      ))}
      <option value="none">None</option>
    </select>
  </div>
);

ShelfSelector.propTypes = {
  book: PropTypes.object.isRequired,
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateShelf: PropTypes.func.isRequired
};

export default ShelfSelector;
