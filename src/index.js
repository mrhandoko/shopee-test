import React from 'react';
import ReactDOM from 'react-dom';
import Shopee from './pages/Shopee';

import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Shopee />, document.getElementById('root'));
registerServiceWorker();
