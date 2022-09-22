import React from "react";

import TextField from "components/TextField/TextField";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Core componets/Textfield",
  component: TextField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div className="w-1/3">
    <TextField {...args} />
  </div>
);

export const NormalTextField = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NormalTextField.args = {
  label: "test label",
  type: "text",
};

export const ErrorTextField = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ErrorTextField.args = {
  label: "test label",
  type: "text",
  errors: {
    message: "Error input",
  },
};

export const ReadonlyTextField = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ReadonlyTextField.args = {
  label: "test label",
  type: "text",
  defaultValue: "alo alo",
  readOnly: true,
};
