import { createContext, ReactNode, useContext, useReducer } from 'react';
import short from 'short-uuid';
import {
  SlotsContainerState,
  SlotsSystemAction,
  SlotsSystemActions,
  SlotsSystemContextDispatch,
  SlotsSystemContextState,
} from '../models/slots-system.models';

const SlotsSystemContext = createContext<
  | {
      state: Record<string, SlotsContainerState>;
      dispatch: SlotsSystemContextDispatch;
    }
  | undefined
>(undefined);
type SlotsProviderProps = { children: ReactNode };

function slotsSystemContextReducer(state: SlotsSystemContextState, action: SlotsSystemAction) {
  switch (action.type) {
    case SlotsSystemActions.addContext: {
      return { ...state, [action.containerId]: action.payload };
    }
    case SlotsSystemActions.addSlot: {
      const SlotsState = state[action.containerId];
      return {
        ...state,
        [action.containerId]: { slots: [...SlotsState.slots, { ...action.payload, uid: short.generate() }] },
      };
    }
    case SlotsSystemActions.removeSlot: {
      const SlotsState = state[action.containerId];
      return {
        ...state,
        [action.containerId]: { slots: SlotsState.slots.filter((slot) => slot.uid !== action.payload.uid) },
      };
    }
    default: {
      throw new Error(`Slots System: Unhandled action type: ${action.type}`);
    }
  }
}

function SlotsProvider({ children }: SlotsProviderProps) {
  const [state, dispatch] = useReducer(slotsSystemContextReducer, {}, () => ({}));
  return <SlotsSystemContext.Provider value={{ state, dispatch }}>{children}</SlotsSystemContext.Provider>;
}

function useSlot(containerId: string) {
  const context = useContext(SlotsSystemContext);
  if (context === undefined) {
    throw new Error('useSlot must be used within a SlotsProvider');
  }
  return { stateSlots: context.state[containerId], dispatchSlot: context.dispatch };
}

export { SlotsProvider, useSlot };
