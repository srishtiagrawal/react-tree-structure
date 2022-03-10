import React from 'react';
import './style.css';
import Folder from './components/Folder';
import explorer from './data/folderStructure';
export default function App() {
  return (
    <div>
      <Folder explorer={explorer} />
    </div>
  );
}
