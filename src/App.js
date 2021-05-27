import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigationbar from "./components/Navigationbar";
import Footer from "./components/Footer";
import Menu from "./components/pages/Menu";
import AboutUs from "./components/pages/AboutUs";
import Home from "./components/pages/Home";
import ContactUs from "./components/pages/ContactUs";
import NotFound from "./components/pages/NotFound";
import Form from "./components/Form";

function App() {
  return (
    <Router>
      <Navigationbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Form} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/menu" component={Menu} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
