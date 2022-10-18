import Login from "../containers/HomeTemplate/Login";
import HomePage from "../containers/HomeTemplate/Dashboard";
import HomeTemplate from "../containers/HomeTemplate";
import SignUp from "../containers/HomeTemplate/SignUp"
import { DetailMovie } from "../containers/HomeTemplate/DetailMovie";
const routesHome = [
  //HomePage
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  //Login
  {
    exact: true,
    path: "/login",
    component: Login,
  },
  //SignUp
  {
    exact: true,
    path: "/signup",
    component: SignUp,
  },
  //Detail
  {
    exact: true,
    path: "/detail/:id",
    component: DetailMovie
  }
];
const renderRouteHome = () => {
  return routesHome.map((root, index) => {
    return (
      <HomeTemplate
        key={index}
        exact={root.exact}
        path={root.path}
        component={root.component}
      />
    );
  });
};
export  {renderRouteHome};