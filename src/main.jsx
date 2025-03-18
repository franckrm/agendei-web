import "./styles/global.css"
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Rotas from "./rotas";

createRoot(document.getElementById('root')).render(
    <Rotas/>
)
