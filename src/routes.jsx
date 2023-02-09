import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import IPhone from "./components/iPhone/iPhone";
import IPad from "./components/iPad/iPad";
import Mac from "./components/Mac/Mac";
import Watch from "./components/Watch/Watch";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/iphone",
        element: <IPhone />,
      },
      {
        path: "/ipad",
        element: <IPad />,
      },
      {
        path: "/mac",
        element: <Mac />,
      },
      {
        path: "/watch",
        element: <Watch />,
      },
    ],
  },
]);
