import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { ToDolist } from './routes/routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToDolist />
  </React.StrictMode>,
)
