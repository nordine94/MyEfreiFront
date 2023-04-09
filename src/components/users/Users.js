import React, {useState, useEffect} from 'react'
import "./Users.css"
import axios from "axios"

export default function Compte() {
    
    
      const [eleve, setEleve] = useState(null);
      const [error, setError] = useState(null);
    
      useEffect(() => {
        const fetchEleve = async () => {
          try {
            const response = await axios.get('http://localhost:3000/api/eleves/63d69895ad43229f950be960'); // Remplacez '1' par l'ID de l'élève que vous souhaitez récupérer
            setEleve(response.data);
          } catch (error) {
            setError(error.response.data.error);
          }
        };
        fetchEleve();
      }, []);
    
      return (
        <div>
          {eleve ? (
            <div>
              <h1>Élève</h1>
              <p>Nom: {eleve.nom}</p>
              <p>Prénom: {eleve.prenom}</p>
              <p>Classe: {eleve.classe}</p>
              {/* Ajoutez d'autres champs d'information de l'élève selon votre modèle de données */}
            </div>
          ) : (
            <p>Chargement de l'élève...</p>
          )}
          {error && <p>Erreur: {error}</p>}
        </div>
      );
    };
    
   
    
    

