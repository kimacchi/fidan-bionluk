import React from 'react';
import {createRoot} from "react-dom/client";
import AppRouter, {history} from './router/AppRouter';
import "normalize.css";
import "./styles/styles.scss"

const jsx = (
    <AppRouter />
)


const root = createRoot(document.getElementById("app"));

root.render(
    <React.StrictMode>
        <AppRouter />
    </React.StrictMode>
);