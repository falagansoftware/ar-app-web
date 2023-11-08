import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { LayoutDispatch, RootState } from './store';

export const useLayoutDispatch: () => LayoutDispatch = useDispatch;
export const useLayoutSelector: TypedUseSelectorHook<RootState> = useSelector;
