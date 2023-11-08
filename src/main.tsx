import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app/App';
import './styles.css';
import store from './app/store/store';
// import { firebaseConfig } from './app/config/firebase.config';
// import { getAnalytics } from 'firebase/analytics';
// import { initializeApp } from 'firebase/app';
import './app/config/translations.config';
import { TabsProvider } from './app/shared/components/tabs-system/context/tabs-system-context';
import ErrorBoundary from './app/shared/utils/error-boundary';
import { SlotsProvider } from './app/shared/components/slots-system/context/slots-system-context';

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

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
