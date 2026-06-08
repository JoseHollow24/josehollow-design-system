import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'josehollow-design-system/styles/tokens.css';
import './App.css';

// Atoms
import 'josehollow-design-system/components/button';
import 'josehollow-design-system/components/icon';
import 'josehollow-design-system/components/tag';
import 'josehollow-design-system/components/badge';
import 'josehollow-design-system/components/loading';
import 'josehollow-design-system/components/checkbox';
import 'josehollow-design-system/components/radio';
import 'josehollow-design-system/components/input';
import 'josehollow-design-system/components/textarea';
import 'josehollow-design-system/components/select';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
