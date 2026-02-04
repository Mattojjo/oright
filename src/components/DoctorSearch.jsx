import { useState, useEffect } from 'react';
import { stateMap } from './subComponents/constants';
import './DoctorSearch.css';

export const DoctorSearch = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredDoctors, setFilteredDoctors] = useState([]);

    useEffect(() => {
        fetchDoctors();
    }, []);

    const fetchDoctors = async () => {
        setLoading(true);
        try {
            const response = await fetch('/data.json');
            const jsonData = await response.json();
            
            if (jsonData.data && jsonData.data.length > 0) {
                const headers = jsonData.meta.headers;
                
                const formattedDoctors = jsonData.data.map((row, index) => {
                    const rowData = {};
                    headers.forEach((header, i) => {
                        rowData[header] = row[i];
                    });
                    
                    const addressParts = rowData.aco_address ? rowData.aco_address.split(', ') : [];
                    const street = addressParts[0] || 'N/A';
                    const city = addressParts[1] || 'N/A';
                    const state = addressParts[2] || rowData.aco_service_area || 'N/A';
                    const zip = addressParts[3] || 'N/A';
                    
                    return {
                        id: rowData.aco_id || `aco-${index}`,
                        name: rowData.aco_medical_director_name || rowData.aco_exec_name || rowData.aco_public_name || 'Healthcare Provider',
                        credential: 'MD',
                        specialty: rowData.par_lbn || 'Healthcare Organization',
                        address: street,
                        city: city,
                        state: state,
                        zip: zip,
                        phone: rowData.aco_public_phone || rowData.aco_exec_phone || 'N/A'
                    };
                }).filter(doc => doc.name !== 'Healthcare Provider');
                
                const uniqueDoctors = formattedDoctors.filter((doctor, index, self) =>
                    index === self.findIndex((d) => d.id === doctor.id)
                );
                
                setDoctors(uniqueDoctors);
                
                const shuffled = [...uniqueDoctors].sort(() => 0.5 - Math.random());
                const randomFour = shuffled.slice(0, 4);
                setFilteredDoctors(randomFour);
            }
        } catch (error) {
            console.error('Error fetching doctors:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        
        if (term === '') {
            const shuffled = [...doctors].sort(() => 0.5 - Math.random());
            const randomFour = shuffled.slice(0, 4);
            setFilteredDoctors(randomFour);
        } else {
            const stateFullName = stateMap[term] || term;
            
            const filtered = doctors.filter(doctor => {
                const stateLower = doctor.state.toLowerCase();
                const stateCodeMatch = stateLower === term;
                const stateNameMatch = stateMap[stateLower] && stateMap[stateLower].includes(term);
                
                return doctor.name.toLowerCase().includes(term) ||
                       doctor.specialty.toLowerCase().includes(term) ||
                       doctor.city.toLowerCase().includes(term) ||
                       stateLower.includes(term) ||
                       stateCodeMatch ||
                       stateNameMatch ||
                       (stateMap[stateLower] && stateMap[stateLower] === stateFullName);
            });
            setFilteredDoctors(filtered);
        }
    };

    return (
        <section className="doctor-search-section">
            <h2 className="section-title">Find a Doctor</h2>
            <p className="section-subtitle">Connect with healthcare professionals in your area</p>
            
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search by name, specialty, city, or state..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>

            {loading ? (
                <div className="loading">Loading doctors...</div>
            ) : (
                <div className="doctors-grid">
                    {filteredDoctors.map(doctor => (
                        <div key={doctor.id} className="doctor-card">
                            <div className="doctor-header">
                                <h3 className="doctor-name">{doctor.name}</h3>
                                <span className="doctor-credential">{doctor.credential}</span>
                            </div>
                            <p className="doctor-specialty">{doctor.specialty}</p>
                            <div className="doctor-info">
                                <div className="info-item">
                                    <strong>Address:</strong>
                                    <p>{doctor.address}</p>
                                    <p>{doctor.city}, {doctor.state} {doctor.zip}</p>
                                </div>
                                <div className="info-item">
                                    <strong>Phone:</strong>
                                    <p>{doctor.phone}</p>
                                </div>
                            </div>
                            <button className="contact-btn">Contact Office</button>
                        </div>
                    ))}
                </div>
            )}

            {!loading && filteredDoctors.length === 0 && (
                <p className="no-results">No doctors found. Try a different search.</p>
            )}
        </section>
    );
};
