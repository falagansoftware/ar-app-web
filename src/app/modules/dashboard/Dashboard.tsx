import { SlotsSystemContainer } from '../../shared/components/slots-system/Slots-system-container';
import { DASHBOARD_SLOTS_CONFIG } from './config/dashboard-slots.config';
import short from 'short-uuid';

export function Dashboard() {
  const id = short.generate();
  return <SlotsSystemContainer config={DASHBOARD_SLOTS_CONFIG.config} containerId={id} />;
}
