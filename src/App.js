import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Topic } from "./Pages/Topic";
import { TopicSheet } from "./Pages/TopicSheet";
import { Closeup } from "./Pages/Closeup";
import { SharedComponent } from "./Components/SharedComponent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedComponent />}>
          <Route index element={<Home />} />
          <Route path="/:subject" element={<Topic />} />
          <Route path="/:subject/:id" element={<TopicSheet />} />
          <Route path="/:topic/:id/:closeup" element={<Closeup />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
