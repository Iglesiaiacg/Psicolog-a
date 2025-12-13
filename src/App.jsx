import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PatientsProvider } from './context/PatientsContext';

// Views
import Dashboard from './components/views/Dashboard';
import ClinicalRecordView from './components/views/ClinicalRecordView';
import BlankFormsView from './components/views/BlankFormsView';

const App = () => {
    return (
        <BrowserRouter>
            <PatientsProvider>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/expediente/:id" element={<ClinicalRecordView />} />
                    <Route path="/formatos" element={<BlankFormsView />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </PatientsProvider>
        </BrowserRouter>
    );
};

export default App;