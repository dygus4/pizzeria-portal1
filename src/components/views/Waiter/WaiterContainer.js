import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, updateStatusToAPI } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  updateStatus: (id, status) => dispatch(updateStatusToAPI(id, status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);