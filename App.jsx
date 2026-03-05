import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TrendingSongs from './components/TrendingSongs';
import UploadModal from './components/UploadModal';
import CommentsSection from './components/CommentsSection';
import './App.css';

const App = () => {
    const [showUploadModal, setShowUploadModal] = useState(false);
    
    const handleUploadClick = () => {
        setShowUploadModal(true);
    };

    return (
        <div className="App">
            <Navbar onUploadClick={handleUploadClick} />
            <h1>Welcome to the Music Platform</h1>
            <TrendingSongs />
            <UploadModal
                show={showUploadModal}
                onClose={() => setShowUploadModal(false)}
            />
            <CommentsSection />
        </div>
    );
};

export default App;
