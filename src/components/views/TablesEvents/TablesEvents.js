import React from 'react';
import PropTypes from 'prop-types';
import styles from './TablesEvents.module.scss';


const TablesEvents = (props) => (
  <div className={styles.component}>
    <h2> TablesEvents view </h2>
    {props.match.params.id}
  </div>
);

TablesEvents.propTypes = {
  match: PropTypes.any,
};

export default TablesEvents;