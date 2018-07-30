import { shallow } from "enzyme";
import Top from "../Top";

describe("Layout", () => {
  it("renders correctly", () => {
    const sample = shallow(<Layout />);
    expect(sample).toMatchSnapshot();
  });
});
