import { shallow } from "enzyme";
import Top from "../Top";

describe("Top", () => {
  it("renders correctly", () => {
    const sample = shallow(<Top />);
    expect(sample).toMatchSnapshot();
  });
});
