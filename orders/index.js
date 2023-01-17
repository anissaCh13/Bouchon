
import { createAction } from 'bouchon';
import { createSelector } from 'bouchon';

// Your actions using redux-act (https://github.com/pauldijou/redux-act)
const actions = {
    get: createAction('Retrieve all tasks'),
};

// Your selectors using reselect (https://github.com/rackt/reselect)
const selectors = {};
selectors.getAllTasks = () => state => state.tasks;

// Your reducer
const reducer = {
    [actions.get]: state => state,
};

// Your routes
const routes = {
    'GET /': {
        action: actions.get,
        selector: selectors.getAllTasks,
        status: 200,
    },
};

export default {
    name: 'tasks',
    data: require('./data.json'),
    reducer: reducer,
    endpoint: 'orders/v1/orders/LTZLBBVK',
    routes: routes,
}