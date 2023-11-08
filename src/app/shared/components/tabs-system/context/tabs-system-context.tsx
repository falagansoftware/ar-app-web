import { createContext, ReactNode, useContext, useReducer } from 'react';
import short from 'short-uuid';
import {
  TabsContainerState,
  TabsSystemAction,
  TabsSystemActions,
  TabsSystemContextDispatch,
  TabsSystemContextState,
} from '../models/tabs-system.models';

const TabsSystemContext = createContext<
  | {
      state: Record<string, TabsContainerState>;
      dispatch: TabsSystemContextDispatch;
    }
  | undefined
>(undefined);
type TabsProviderProps = { children: ReactNode };

function tabsSystemContextReducer(state: TabsSystemContextState, action: TabsSystemAction) {
  switch (action.type) {
    case TabsSystemActions.addContext: {
      return { ...state, [action.containerId]: action.payload };
    }
    case TabsSystemActions.addTab: {
      const tabsState = state[action.containerId];
      return {
        ...state,
        [action.containerId]: { tabs: [...tabsState.tabs, { ...action.payload, uid: short.generate() }] },
      };
    }
    case TabsSystemActions.removeTab: {
      const tabsState = state[action.containerId];
      return {
        ...state,
        [action.containerId]: { tabs: tabsState.tabs.filter((tab) => tab.uid !== action.payload.uid) },
      };
    }
    default: {
      throw new Error(`Tabs System: Unhandled action type: ${action.type}`);
    }
  }
}

function TabsProvider({ children }: TabsProviderProps) {
  const [state, dispatch] = useReducer(tabsSystemContextReducer, {}, () => ({}));
  return <TabsSystemContext.Provider value={{ state, dispatch }}>{children}</TabsSystemContext.Provider>;
}

function useTab(containerId: string) {
  const context = useContext(TabsSystemContext);
  if (context === undefined) {
    throw new Error('useTab must be used within a TabsProvider');
  }
  return { stateTabs: context.state[containerId], dispatchTab: context.dispatch };
}

export { TabsProvider, useTab };
