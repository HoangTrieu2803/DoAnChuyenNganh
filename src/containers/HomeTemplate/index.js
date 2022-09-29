import React from 'react';
import {Route} from 'react-router-dom'
import HomeNavbar from "./Components/HomeNavbar/index"
export default function HomeTemplate(props){
  const { exact, path, component } = props;
  return <div>
      <HomeNavbar/>
      <Route exact={exact} path={path} component={component} />
  </div>;
}