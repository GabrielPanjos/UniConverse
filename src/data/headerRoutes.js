import AppRoute from "../models/AppRoute";

import Conversor from "../routes/Conversor";
import Home from "../routes/Home";

const routes = [
  new AppRoute("Home", "/", Home),
  new AppRoute("Conversor", "/conversor", Conversor),
];

export default routes;
