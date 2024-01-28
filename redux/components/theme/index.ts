import { createSlice } from '@reduxjs/toolkit';

const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
        return window.localStorage.getItem('theme') || 'light';
    }
    return 'light';
};

const initialState = {
    theme: getInitialTheme(),
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
            if (typeof window !== 'undefined') {
                window.localStorage.setItem('theme', action.payload);
            }
        },
    },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
