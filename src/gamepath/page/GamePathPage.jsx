import { GameCard } from "../components"

export const GamePathPage = () => {
  return (
    <>
      <div className="gamecard-container">
        {/* Cards */}
        {Array.from({ length: 6 }).map((_, index) => (
          <GameCard
            key={index}
            title={`Titulo del Juego ${index + 1}`}
            imageUrl="https://via.placeholder.com/150"
            progress={Math.floor(Math.random() * 100)}
          />
        ))}
      </div>
      {/* Agregar y Eliminar botones */}
      <div className="btn-container">
        <button >Agregar</button>
        <button >Eliminar</button>
      </div>
    </>
  )
}
