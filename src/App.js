import { ThemeProvider, CssBaseline } from "@mui/material";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import theme from "./theme/theme";

import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/Home";
import Proposal from "./pages/Proposal";
import NewProposal from "./pages/NewProposal";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/proposal" element={<NewProposal />} />
            <Route path="/proposal/:proposalId" element={<Proposal />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
