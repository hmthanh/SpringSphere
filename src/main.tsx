import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Underlay, Overlay } from "./DirtyFigmaExport"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Underlay />
    <Suspense fallback={<div>Loading</div>}>
      <App />
    </Suspense>
    <Overlay />
  </React.StrictMode>,
)
