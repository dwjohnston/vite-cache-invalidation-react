import { lazy } from 'react'





// import { A20 } from "./componentsLinear/a/a20";
// import { B20 } from "./componentsLinear/b/b20";
// import { C20 } from "./componentsLinear/c/c20";
// import { D20 } from "./componentsLinear/d/d20";
// import { E20 } from "./componentsLinear/e/e20";

const A1 = lazy(() => import('./componentsLinear/a/a1'))
const B1 = lazy(() => import('./componentsLinear/b/b1'))
const C1 = lazy(() => import('./componentsLinear/c/c1'))
const D1 = lazy(() => import('./componentsLinear/d/d1'))
const E1 = lazy(() => import('./componentsLinear/e/e1'))



function App() {

  return (
    <>
      <A1 />
      <B1 />
      <C1 />
      <D1 />
      <E1 />

    </>
  )
}

export default App
