import { useContext } from 'react';
import { DrawerContext } from '../contexts/DrawerContext';

export function useDrawer() {
  return useContext(DrawerContext);
}