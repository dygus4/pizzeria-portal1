import React from 'react';
//import PropTypes from 'prop-types';
import styles from './TablesEvents.module.scss';
import {Link} from 'react-router-dom';

const TablesEvents = () => (
  <div className={styles.component}>
    <h2> TablesEvents view </h2>
    <Link to={process.env.PUBLIC_URL + '/tables/events/new'}> New Event </Link>
    <Link to={process.env.PUBLIC_URL + '/tables/events/:id'}> Current Event </Link>
  </div>
);

export default TablesEvents;