import React from "react";

const Home = React.lazy(() => import("./pages/Home"));
const PlayGround = React.lazy(() => import("./pages/PlayGround"));
const Page404 = React.lazy(() => import("./pages/Page404"));

const routes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/code/:folderID/:playgroundID",
    component: <PlayGround />,
  },
  {
    path: "*",
    component: <Page404 />,
  },
];
export default routes;
