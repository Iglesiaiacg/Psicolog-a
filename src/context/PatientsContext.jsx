import React, { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const PatientsContext = createContext();

export const usePatients = () => {
    const context = useContext(PatientsContext);
    if (!context) {
        throw new Error('usePatients debe ser usado dentro de un PatientsProvider');
    }
    return context;
};

export const PatientsProvider = ({ children }) => {
    const [patients, setPatients] = useState(() => {
        const saved = localStorage.getItem('clinical_patients');
        return saved ? JSON.parse(saved) : [];
    });

    const [currentPatientId, setCurrentPatientId] = useState(null);

    useEffect(() => {
        localStorage.setItem('clinical_patients', JSON.stringify(patients));
    }, [patients]);

    const getPatient = (id) => {
        return patients.find(p => p.id === id);
    };

    const addPatient = (patientData) => {
        const newPatient = {
            id: uuidv4(),
            createdAt: new Date().toISOString(),
            lastModified: new Date().toISOString(),
            ...patientData
        };
        setPatients(prev => [...prev, newPatient]);
        return newPatient.id;
    };

    const updatePatient = (id, data) => {
        setPatients(prev => prev.map(p => {
            if (p.id === id) {
                return { ...p, ...data, lastModified: new Date().toISOString() };
            }
            return p;
        }));
    };

    const deletePatient = (id) => {
        setPatients(prev => prev.filter(p => p.id !== id));
        if (currentPatientId === id) setCurrentPatientId(null);
    };

    const value = {
        patients,
        currentPatientId,
        setCurrentPatientId,
        getPatient,
        addPatient,
        updatePatient,
        deletePatient
    };

    return (
        <PatientsContext.Provider value={value}>
            {children}
        </PatientsContext.Provider>
    );
};
