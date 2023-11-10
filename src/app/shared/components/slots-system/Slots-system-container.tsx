import { Box, CloseButton, SimpleGrid } from '@chakra-ui/react';
import { createElement } from 'react';
import { SlotsSystemActions, SlotSystemConfig, SlotSystemContainerRendered } from './models/slots-system.models';
import { useInitSlotsSystem } from './hooks/use-init-slots-system.hook';
import { useSlot } from './context/slots-system-context';

export function SlotsSystemContainer({
  containerId,
  config,
}: {
  containerId: string;
  config: Record<string, SlotSystemConfig>;
}) {
  const { stateSlots, dispatchSlot } = useSlot(containerId);
  const isInitialized = useInitSlotsSystem(config, containerId);

  function removeSlot(tabId: string) {
    dispatchSlot({ type: SlotsSystemActions.removeSlot, payload: { uid: tabId }, containerId });
  }

  if (isInitialized) {
    return (
      <SimpleGrid minChildWidth={300} spacing={10}>
        {stateSlots.slots.map((slot: SlotSystemContainerRendered) => (
          <Box borderWidth={0} key={slot.uid}>
            <CloseButton size={'lg'} me={1} ms={1} marginLeft={'auto'} onClick={() => removeSlot(slot.uid)} />
            <Box borderWidth={0}>{createElement(config[slot.slotId].component)}</Box>
          </Box>
        ))}
      </SimpleGrid>
    );
  } else {
    ('Waiting');
  }
}
