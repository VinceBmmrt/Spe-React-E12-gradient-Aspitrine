import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App/App';
import store from './store';
import './styles/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
);

// Pour fournir les données de mon store à mon application,
// Je dois englober mon application dans un composant `Provider`
// Et fournir au provider mon store redux
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
