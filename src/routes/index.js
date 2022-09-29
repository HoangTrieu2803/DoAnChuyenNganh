import Login from "../containers/HomeTemplate/Login";
import HomePage from "../containers/HomeTemplate/Dashboard";
import HomeTemplate from "../containers/HomeTemplate";
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