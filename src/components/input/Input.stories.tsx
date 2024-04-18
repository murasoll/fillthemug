import { StoryFn, Meta } from "@storybook/react";
import { Input } from "../../index";

export default {
  title: "ReactComponentLibrary/Input",
  component: Input,
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const InputTest = Template.bind({});
InputTest.args = {
  
};

export const InputSecondary = Template.bind({});
InputSecondary.args = {
};