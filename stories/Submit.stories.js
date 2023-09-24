import React from "react"
import SubmitInput from "../src/components/Submit"
import { action } from '@storybook/addon-actions';



export default {
  title: 'SubmitInput',
  component: SubmitInput,
  argTypes: {
    value: { control: 'text' },
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    height: { control: 'text' },
    width: { control: 'text' },
    borderRadius: { control: 'text' },
    isPending: { control: 'boolean' },
    fontSize: {control: 'text'},
    border: {control: 'text'},
  },
};
const Template = (args) => <SubmitInput {...args} onClick={action('Button Clicked')} />;

export const Create = Template.bind({});
Create.args = {
  value: 'Create',
  backgroundColor: '#6a8ccc',
  color: 'black',
  height: '3rem',
  width: '32rem',
  borderRadius: '15px',
  isPending: false,
  border: '2px solid #19366d8c'
};

export const Hover = Template.bind({});
Hover.args= {
  value: 'Create',
  backgroundColor: '#a5d7e8',
  color: 'white'
}

export const  Adding= Template.bind({});
Adding.args = {
  value: 'Adding blog',
  backgroundColor: '#001a61',
  color: 'white',
  height: '55px',
  width: '455px',
  borderRadius: '15px',
  isPending: true,
  border: '2px solid #a5d7e86d',
  fontSize: '35px'
};