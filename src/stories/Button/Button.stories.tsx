import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../Button";

export default {
  title: "Tricor/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (
  args: Partial<ComponentStory<typeof Button>["args"]>
) => <button {...args} />;

export const Primary = Template.bind({});
Primary.storyName = "Primary Button";
Primary.args = {
  primary: true,
  size: "medium",
  label: "Primary  Button",
};
