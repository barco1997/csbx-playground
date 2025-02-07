import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { Main } from "./main";
import { BrowserRouter } from "react-router-dom";

describe("Main layout", () => {
  it("renders", async () => {
    render(
      <BrowserRouter>
        <Main>Some children</Main>
      </BrowserRouter>
    );
  });
});
