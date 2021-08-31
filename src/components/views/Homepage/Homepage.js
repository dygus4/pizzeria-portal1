import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



const statistics = [
  {progress: 137, id: 'Local Orders', color: 'primary'},
  {progress: 54, id: 'Takeout Orders', color: 'secondary'},
];
const reservations = [
  {id: '1', status: 'pending', table: 2, time: '13:00', clients: 2 },
  {id: '2', status: 'pending', table: 1, time: '13:00', clients: 8},
  {id: '3', status: 'in progress', table: 6, time: '12:30', clients: 2},
];
const events = [
  {id: '22', status: 'completed', table: 5, time: '11:30', clients: 3},
  {id: '11', status: 'pending', table: 2, time: '14:30', clients: 6},
  {id: '5', status: 'completed', table: 2, time: '11:00', clients: 4},
];

const Homepage = () => (
  <div className={styles.component}>
    <Typography className={styles.title} variant="h4" component="h4" gutterBottom>
        Homepage
    </Typography>
    <Paper className={styles.table}>
      <h2 className={styles.h2}> Orders Today: </h2>
      {statistics.map(stat => (
        <div className={styles.stat} key={stat.id}>
          <h3 className={styles.h3}>{stat.id}</h3>
          <h4 className={styles.h4}>{stat.progress}</h4>
        </div>
      ))}
    </Paper>
    <Paper className={styles.table}>
      <h2 className={styles.h2}>Reservations today:</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Clients</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reservations.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                {row.table}
              </TableCell>
              <TableCell>
                {row.time}
              </TableCell>
              <TableCell>
                {row.clients}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <Paper className={styles.table}>
      <h2 className={styles.h2}>Events today:</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Clients</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                {row.table}
              </TableCell>
              <TableCell>
                {row.time}
              </TableCell>
              <TableCell>
                {row.clients}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Homepage;