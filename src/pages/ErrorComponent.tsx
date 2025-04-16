import { error } from "console";
import { useRouteError, useNavigate } from "react-router-dom"


export const ErrorComponent = () => {
    const err = useRouteError();
    const navigate = useNavigate();
  return (
    <div>
        <h3>Error has occured</h3>
        <p>{err && typeof err === 'object' && 'message' in err ? (err as {message: string}).message : 'Unknown error'}</p>
        <button onClick={() => navigate("/")}>Go to Home Page</button>
    </div>
  )
}

export default ErrorComponent