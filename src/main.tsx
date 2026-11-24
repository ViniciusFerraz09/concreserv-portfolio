import React from 'react';
import {createRoot} from 'react-dom/client';
import Landing from './Landing';
import './fonts.css';
import './style.css';
import './content-responsive.css';
import './forms-responsive.css';
import './responsive.css';
import './daily-chart.css';
import './portfolio.css';
if(location.pathname.startsWith('/demo')){
 // Load the original UI with its own React runtime, exactly once on this root.
 import('./demoBootstrap.mjs');
}else createRoot(document.getElementById('root')!).render(<React.StrictMode><Landing/></React.StrictMode>);
