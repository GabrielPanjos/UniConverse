import AppRoute from "../models/AppRoute";

import Conversor from "../routes/Conversor";
import Home from "../routes/Home";
import About from "../routes/About";
import Contact from "../routes/Contact";
import Privacy from "../routes/Privacy";
import Terms from "../routes/Terms";

const routes = [
  new AppRoute("Home", "/", Home),
  new AppRoute("Conversor", "/conversor", Conversor),
  new AppRoute("About", "/about", About),
  new AppRoute("Contact", "/contact", Contact),
  new AppRoute("Privacy Policy", "/privacy", Privacy),
  new AppRoute("Terms of Service", "/terms", Terms),
];

export default routes;
