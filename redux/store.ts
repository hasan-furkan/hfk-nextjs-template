import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './components/theme';

export const store = configureStore({
    reducer: { theme: themeReducer },
});
