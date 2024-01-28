'use client'
import React from "react";
import AppLayout from "../pages/AppLayout";
import {Provider} from "react-redux";
import {store} from "../redux/store";

export default function Home({ children } : any) {
  return (
      <Provider store={store}>
        <AppLayout children={children} />
      </Provider>
  );
}
