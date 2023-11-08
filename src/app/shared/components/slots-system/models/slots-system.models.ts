export interface SlotSystemConfig {
  label: string;
  component: any;
  onInit?: boolean;
}

export type SlotsSystemConfig = { slotsContainerId: string; config: Record<string, SlotSystemConfig> };

export interface SlotSystemContainerRendered {
  slotId: string;
  uid: string;
  data?: any;
}

export enum SlotsSystemActions {
  addSlot = 'addSlot',
  removeSlot = 'removeSlot',
  addContext = 'addContext',
}

export interface SlotsSystemAction {
  type: SlotsSystemActions;
  containerId: string;
  payload: any;
}

export type SlotsSystemContextState = Record<string, SlotsContainerState>;
export type SlotsSystemContextDispatch = (action: SlotsSystemAction) => void;
export type SlotsContainerState = { slots: SlotSystemContainerRendered[] };
