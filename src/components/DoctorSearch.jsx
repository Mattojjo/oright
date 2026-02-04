import { useState, useEffect } from 'react';
import { stateMap } from './subComponents/constants';

const INITIAL_DISPLAY_COUNT = 4;

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
        const randomFour = shuffled.slice(0, INITIAL_DISPLAY_COUNT);
        setFilteredDoctors(randomFour);
      }
    } catch (error) {
      setFilteredDoctors([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    if (term === '') {
      const shuffled = [...doctors].sort(() => 0.5 - Math.random());
      const randomFour = shuffled.slice(0, INITIAL_DISPLAY_COUNT);
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
    <section className="py-16 px-8 pb-32 max-w-[1400px] mx-auto">
      <h2 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600 mb-4">Find a Doctor</h2>
      <p className="text-center text-xl text-slate-600 mb-12">Connect with healthcare professionals in your area</p>
      
      <div className="max-w-[600px] mx-auto mb-12">
        <input
          type="text"
          className="w-full px-6 py-4 text-base font-[inherit] border-2 border-cyan-200 rounded-full bg-white text-slate-700 transition-all duration-300 focus:outline-none focus:border-purple-400 focus:shadow-[0_0_0_4px_rgba(139,92,246,0.1)] placeholder:text-slate-400"
          placeholder="Search by name, specialty, city, or state..."
          value={searchTerm}
          onChange={handleSearch}
          aria-label="Search for doctors"
        />
      </div>

      {loading ? (
        <div className="text-center py-12 text-xl text-slate-600">Loading doctors...</div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-8 p-4">
          {filteredDoctors.map(doctor => (
            <div key={doctor.id} className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(148,163,184,0.12)] border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)] hover:border-cyan-300">
              <div className="flex justify-between items-baseline mb-2 gap-4">
                <h3 className="text-2xl font-bold text-slate-800 m-0">{doctor.name}</h3>
                <span className="text-sm text-cyan-700 font-semibold bg-cyan-50 px-3 py-1 rounded-full whitespace-nowrap border border-cyan-200">{doctor.credential}</span>
              </div>
              <p className="text-lg text-slate-600 m-0 mb-6 italic font-medium">{doctor.specialty}</p>
              <div className="mb-6">
                <div className="mb-4">
                  <strong className="text-slate-700 block mb-1 text-sm">Address:</strong>
                  <p className="text-slate-600 m-0 text-[0.95rem]">{doctor.address}</p>
                  <p className="text-slate-600 m-0 text-[0.95rem]">{doctor.city}, {doctor.state} {doctor.zip}</p>
                </div>
                <div className="mb-4">
                  <strong className="text-slate-700 block mb-1 text-sm">Phone:</strong>
                  <p className="text-slate-600 m-0 text-[0.95rem]">{doctor.phone}</p>
                </div>
              </div>
              <button className="w-full px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none rounded-full text-base font-bold font-[inherit] cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(6,182,212,0.4)] hover:from-cyan-600 hover:to-blue-600 active:translate-y-0" aria-label={`Contact ${doctor.name}`}>
                Contact Office
              </button>
            </div>
          ))}
        </div>
      )}

      {!loading && filteredDoctors.length === 0 && (
        <p className="text-center py-12 text-lg text-slate-600">No doctors found. Try a different search.</p>
      )}
    </section>
  );
};
