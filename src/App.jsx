import "./App.css";
import { createBrowserRouter, Routes, Route } from "react-router-dom";
import RouterComponent from "./components/RouterComponent";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import EducationPage from "./pages/EducationPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProfilesPage from "./pages/ProfilesPage";
import SkillsPage from "./pages/SkillsPage";

const pages = [
  {
    path: "/",
    icon: "home",
    element: <HomePage />,
  },
  {
    path: "/experience",
    icon: "business_center",
    element: <ExperiencePage />,
  },
  {
    path: "/skills",
    icon: "construction",
    element: <SkillsPage />,
  },
  {
    path: "/education",
    icon: "school",
    element: <EducationPage />,
  },
  // {
  //   path: "/profiles",
  //   icon: "public",
  //   element: <ProfilesPage />,
  // },
  {
    path: "/contact",
    icon: "call",
    element: <ContactPage />,
  },
];

function App() {
  return (
    <div className="app">
      <div className="app_content">
        <Routes>
          {pages.map((page) => (
            <Route path={page.path} element={page.element} />
          ))}
        </Routes>
      </div>
      <div className="app_router">
        <RouterComponent pages={pages} />
      </div>
      <div className="app_footer">
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 390"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="5%" stop-color="#F78DA7"></stop>
              <stop offset="95%" stop-color="#8ED1FC"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,400 C 0,400 0,133 0,133 C 119.6267942583732,121.14354066985645 239.2535885167464,109.2870813397129 330,123 C 420.7464114832536,136.7129186602871 482.6124401913876,175.99521531100478 573,178 C 663.3875598086124,180.00478468899522 782.2966507177034,144.73205741626793 871,126 C 959.7033492822966,107.26794258373207 1018.200956937799,105.07655502392345 1108,109 C 1197.799043062201,112.92344497607655 1318.8995215311006,122.96172248803828 1440,133 C 1440,133 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="url(#gradient)"
            fill-opacity="0.53"
            class="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="5%" stop-color="#F78DA7"></stop>
              <stop offset="95%" stop-color="#8ED1FC"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,400 C 0,400 0,266 0,266 C 82.17224880382773,234.54545454545456 164.34449760765546,203.0909090909091 265,222 C 365.65550239234454,240.9090909090909 484.7942583732058,310.18181818181813 593,312 C 701.2057416267942,313.81818181818187 798.4784688995214,248.1818181818182 888,235 C 977.5215311004786,221.8181818181818 1059.2918660287082,261.09090909090907 1150,275 C 1240.7081339712918,288.90909090909093 1340.3540669856459,277.4545454545455 1440,266 C 1440,266 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="url(#gradient)"
            fill-opacity="1"
            class="transition-all duration-300 ease-in-out delay-150 path-1"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default App;
