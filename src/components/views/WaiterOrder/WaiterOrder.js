import React from 'react';
import PropTypes from 'prop-types';
import styles from './WaiterOrder.module.scss';

const WaiterOrder = (props) => (
  <div className={styles.component}>
    <h2> WaiterOrder view </h2>
    {props.match.params.id}
  </div>
);

WaiterOrder.propTypes = {
  match: PropTypes.any,
};

export default WaiterOrder;