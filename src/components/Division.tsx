import React from 'react';
import { Divider } from '@mui/material'; // Asegúrate de que Divider esté importado

const styles = {
    text: {
      fontSize: "2rem", // Tamaño del texto
      fontWeight: "bold", // Negrita
      color: "#3f51b5", // Color del texto
      
    },
    divider: {
    
      backgroundColor: "#3f51b5", // Color de la línea divisoria
    },
  };

const Divisor = () => {
  return (
    <div>  
      <Divider style={styles.text}>Informacion Sobre Mi!</Divider>   
    </div>
  );
};

export default Divisor;
