export interface TabSystemConfig {
  label: string;
  component: any;
  onInit?: boolean;
}

export type TabsSystemConfig = { tabContainerId: string; config: Record<string, TabSystemConfig> };

export interface TabSystemContainerRendered {
  tabId: string;
  uid: string;
  data?: any;
}

export enum TabsSystemActions {
  addTab = 'addTab',
  removeTab = 'removeTab',
  addContext = 'addContext',
}

export interface TabsSystemAction {
  type: TabsSystemActions;
  containerId: string;
  payload: any;
}

export type TabsSystemContextState = Record<string, TabsContainerState>;
export type TabsSystemContextDispatch = (action: TabsSystemAction) => void;
export type TabsContainerState = { tabs: TabSystemContainerRendered[] };
