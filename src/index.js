import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <App />
            </AuthProvider>
        </QueryClientProvider>
    </React.StrictMode>

    // <React.StrictMode>
    //     <AuthProvider>
    //         <App />
    //     </AuthProvider>
    // </React.StrictMode>
);
