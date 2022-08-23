import { ThemeProvider, CssBaseline } from "@mui/material";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import theme from "./theme/theme";

import MainLayout from "./components/layouts/MainLayout";
import ProposalLayout from "./components/layouts/ProposalLayout";
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
          <Route path="/" element={<ProposalLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/proposal" element={<MainLayout />}>
            <Route path="/proposal" element={<NewProposal />} />
            <Route path="/proposal/:proposalId" element={<Proposal />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
