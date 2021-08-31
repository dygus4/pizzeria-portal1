import React from 'react';
import styles from './Kitchen.module.scss';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const demoOrder = [
  { orderNumber: 123,
    takeAway: false,
    tableNumber: 2,
    products: [
      {id: 'cake',
        name: 'Doughnut',
        amount: 2,
        params: [],
      },
      {id: 'breakfast',
        name: 'Breakfast',
        amount: 2,
        params: [
          {
            label: 'Coffee',
            options: ['Latte'],
          },
        ],
      },
    ],
  },
  { orderNumber: 234,
    takeAway: true,
    tableNumber: '',
    products: [
      {id: 'breakfast',
        name: 'Breakfast',
        amount: 1,
        params: [
          {
            label: 'Coffee',
            options: ['Espresso'],
          },
        ],
      },
      {id: 'salad',
        name: 'Salad',
        amount: 1,
        params: [
          {
            label: 'Ingredients',
            options: ['Cucumber', 'Tomatoes', 'Olives', 'Onion'],
          },
        ],
      },
    ],
  },
  { orderNumber: 345,
    takeAway: false,
    tableNumber: 5,
    products: [
      {id: 'pizza',
        name: 'Pizza',
        amount: 1,
        params: [
          {
            label: 'Sauce',
            options: ['Cezar'],
          },
          {
            label: 'Toppings',
            options: ['Olives', 'Red Peppers', 'Mushrooms', 'Fresh Bazil', 'Salami'],
          },
          {
            label: 'Crust',
            options: ['Thick'],
          },
        ],
      },
    ],
  },
  { orderNumber: 456,
    takeAway: false,
    tableNumber: 1,
    products: [
      {id: 'breakfast',
        name: 'Breakfast',
        amount: 3,
        params: [
          {
            label: 'Coffee',
            options: ['Latte'],
          },
        ],
      },
      {id: 'pizza',
        name: 'Pizza',
        amount: 1,
        params: [
          {
            label: 'Sauce',
            options: ['Tomato'],
          },
          {
            label: 'Toppings',
            options: ['Red Peppers', 'Mushrooms', 'Onion', 'Fresh Bazil', 'Salami'],
          },
          {
            label: 'Crust',
            options: ['Standard'],
          },
        ],
      },
    ],
  },
];

const Kitchen = () => {
  return (
    <Paper className={styles.component}>
      <Typography variant="h4" component="h4" gutterBottom>
        Kitchen orders
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order Nr</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>Products</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoOrder.map(row => (
            <TableRow key={row.orderNumber}>
              <TableCell component="th" scope="row">
                {row.orderNumber}
              </TableCell>
              <TableCell>
                {row.takeAway === true ? 'TAKE AWAY' : row.tableNumber}
              </TableCell>
              <TableCell className={styles.tableCellOrderProduct}>
                {row.products.map(product => (
                  <List key={row.products.indexOf(product)}>
                    <ListItem>
                      <div className={styles.orderProduct}>
                        <div className={styles.orderProductHeader}>
                          <div>{product.name}</div>
                          <div>Quantity: {product.amount}</div>
                        </div>
                        <List>
                          {product.params.map((param, index) => (
                            <ListItem key={index}className={styles.orderProductOption}>
                              <span className={styles.orderProductOptionLabel}>
                                {param.label}:
                              </span>
                              <span>
                                {param.options.join(', ')}
                              </span>
                            </ListItem>
                          ))}
                        </List>
                      </div>
                    </ListItem>
                  </List>
                ))}
              </TableCell>
              <TableCell>
                {' '}
                <FormControlLabel
                  control={<Checkbox value="ready" color="primary" />}
                  label="Ready"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Kitchen;