import React from "react";
import {render} from "@testing-library/react";
import App from "./App";

describe('App component', ()=>{
    it('should render app with error', ()=>{
        const {asFragment}=render(<App/>);
        expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <div>
    My First Component
  </div>
</DocumentFragment>
`);
    })
})