import './Recipe.css'; 

const Recipe = () => {
  return (
    <div className="container">
      <main className="main-content">
        <div className="text-content">
          <h2>Refresco Tropical Sin Alcohol</h2>
          <h3>Ingredientes</h3>
          <ul>
            <li>1 lata de <strong>Burbuja Frutal</strong> (categoría sin alcohol)</li>
            <li>1 taza de jugo de naranja natural</li>
            <li>1/2 taza de agua con gas</li>
            <li>Rodajas de naranja y hojas de menta para decorar</li>
          </ul>
          <h3>Instrucciones</h3>
          <ol>
            <li>En un vaso grande, mezcla la lata de Burbuja Frutal con el jugo de naranja.</li>
            <li>Añade el agua con gas y mezcla suavemente.</li>
            <li>Decora con rodajas de naranja y hojas de menta.</li>
          </ol>
          <p>¡Disfruta y comparte!</p>
        </div>
        <div className="image-content">
          <img src="/path/to/image.jpg" alt="Refresco Tropical" />
        </div>
      </main>
    </div>
  );
};

export default Recipe;