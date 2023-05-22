import { Route, Routes } from "react-router-dom";
import { router } from "~/routes";
import { Default } from "~/layouts";
function App() {
  return (
    <Routes>
      {router.map((route, index) => {
        const Page = route.component;
        let Layout = Default;
        if (route.layout) {
          Layout = route.layout;
        }
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
