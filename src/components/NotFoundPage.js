import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Go home</Link>
  </div>
)

export default NotFoundPage;