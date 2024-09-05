import { Navigate, Route, Routes } from "react-router-dom";
import { GamePathRoutes } from "../gamepath/routes/GamePathRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";


export const AppRouter = () => {

    const authState = 'authenticated'; 

  return (
    <Routes>

        {
            authState === 'authenticated'
            ? <Route  path="/*" element={ <GamePathRoutes /> } />
            : <Route path="/login" element={ <AuthRoutes /> } />
        }

        <Route path="/*" element={ <Navigate to="/login" />} />

    </Routes>
  )
}
