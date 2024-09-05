import { Navigate, Route, Routes } from "react-router-dom"
import { GamePathPage } from "../page/GamePathPage"

export const GamePathRoutes = () => {
  return (
    <Routes>

        <Route path="/" element={ <GamePathPage /> } />

        <Route path="/*" element={ <Navigate to="/" />} />

    </Routes>
  )
}
