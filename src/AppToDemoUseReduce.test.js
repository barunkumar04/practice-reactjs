
import { render } from "@testing-library/react";
import AppToDemoUseStateAndUseEffect from "./AppToDemoUseStateAndUseEffect";

test("greeting message", () => {
    const {getByText} = render(<AppToDemoUseStateAndUseEffect/>);
    const h5 = getByText(/Happy Reading!!/);
    expect(h5).toHaveTextContent("Happy Reading!!");
});