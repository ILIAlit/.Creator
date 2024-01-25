import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router/AppRouter";
import Layout from "./components/App/Layout";

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <AppRouter />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
