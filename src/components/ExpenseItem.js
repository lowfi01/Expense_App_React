import React from 'react';
import { Link } from 'react-router-dom';

export const ExpenseItem = ({id, description, amount, createdAt, dispatch}) => (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>{amount}-{createdAt}</p>

    </div>
  )

export default ExpenseItem;