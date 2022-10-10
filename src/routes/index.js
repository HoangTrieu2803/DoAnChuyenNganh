import Login from "../containers/HomeTemplate/Login";
import HomePage from "../containers/HomeTemplate/Dashboard";
import HomeTemplate from "../containers/HomeTemplate";
import SignUp from "../containers/HomeTemplate/Signup"
import Booking from "../containers/HomeTemplate/Booking";
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
  //Booking
  {
    exact:true,
    path:"/booking",
    component:Booking,
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