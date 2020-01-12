import * as React from 'react';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import { createStores } from './store';
import { TodoModel } from './models';
import ErrorCatch from './components/ErrorCatch/index';
import Routers from './routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const defaultTodos = [
  new TodoModel('Read Book', false),
  new TodoModel('Watch Tv', false),
  new TodoModel('Clean Home', false)
];

// prepare MobX stores
const history = createBrowserHistory();
const rootStore = createStores(history, defaultTodos);

function App() {
  return (
    <Provider {...rootStore}>
      <ErrorCatch>
        <Routers history={history} />
      </ErrorCatch>
    </Provider>
  );
}

export default App;
