import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app/App';
import './styles.css';
import store from './app/store/store';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import './config/translations.config';
import { TabsProvider } from './app/shared/components/tabs-system/context/tabs-system-context';
import ErrorBoundary from './app/shared/utils/error-boundary';
import { SlotsProvider } from './app/shared/components/slots-system/context/slots-system-context';
import { firebaseConfig } from './config/firebase.config';

const app = initializeApp(firebaseConfig);
getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>

  <Provider store={store}>
    <ErrorBoundary>
      <TabsProvider>
        <SlotsProvider>
          <App />
        </SlotsProvider>
      </TabsProvider>
    </ErrorBoundary>
  </Provider>,

  // </React.StrictMode>
);
