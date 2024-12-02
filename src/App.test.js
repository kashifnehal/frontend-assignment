// app.test.js

import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./State/configureStore";

test("renders KickStarterProjects component in App", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const headingElement = screen.getByText(/KickStarter Ratings/i);
  expect(headingElement).toBeInTheDocument();
});
