import { useEffect, useState } from 'react';
import { SlotsSystemActions, SlotSystemConfig } from '../models/slots-system.models';
import { useSlot } from '../context/slots-system-context';

export function useInitSlotsSystem(slotsConfig: Record<string, SlotSystemConfig>, containerId: string) {
  const [isInitialized, setIsInitialized] = useState(false);
  const { dispatchSlot } = useSlot(containerId);
  useEffect(() => {
    dispatchSlot({ type: SlotsSystemActions.addContext, payload: { slots: [] }, containerId });
    Object.keys(slotsConfig).forEach((key) => {
      if (slotsConfig[key].onInit) {
        dispatchSlot({ type: SlotsSystemActions.addSlot, payload: { slotId: key }, containerId });
        setIsInitialized(true);
      }
    });
  }, []);
  return isInitialized;
}
