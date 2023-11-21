import { TabsSystemConfig } from '../app/shared/components/tabs-system/models/tabs-system.models';
import { Dashboard } from '../app/modules/dashboard/Dashboard';
import { User } from '../app/modules/user/User';

export const TABS_CONFIG: TabsSystemConfig = {
  tabContainerId: 'main-tabs',
  config: {
    users: {
      label: 'users.users',
      component: <User />,
      onInit: true,
    },
    // customers: {
    //   label: 'customers.customers',
    //   component: <User />,
    //   onInit: true,
    // },
  },
};
