import { TabsSystemConfig } from '../app/shared/components/tabs-system/models/tabs-system.models';
import { Dashboard } from '../app/modules/dashboard/Dashboard';

export const TABS_CONFIG: TabsSystemConfig = {
  tabContainerId: 'main-tabs',
  config: {
    dashboard: {
      label: 'dashboard.dashboard',
      component: <Dashboard />,
      onInit: true,
    },
    // customers: {
    //   label: 'customers.customers',
    //   component: <User />,
    //   onInit: true,
    // },
  },
};
