import { SlotsSystemConfig } from '../../../shared/components/slots-system/models/slots-system.models';
import { User } from '../../user/User';

export const DASHBOARD_SLOTS_CONFIG: SlotsSystemConfig = {
  slotsContainerId: 'dashboard',
  config: {
    users: {
      label: 'users.users',
      component: User,
      onInit: true,
    },
  },
};
