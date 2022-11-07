import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Router/Routes/Routes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return <RouterProvider router={router} />;
}

export default App;
