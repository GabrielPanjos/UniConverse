import AppRoute from "../models/AppRoute";

import Conversor from "../routes/Conversor";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Register from "../routes/Register";

const routes = [
  new AppRoute("Home", "/", Home),
  new AppRoute("Conversor", "/conversor", Conversor),
  new AppRoute("Conta", "/login", Login),
];

export default routes;
