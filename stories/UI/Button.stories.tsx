
import React from 'react';
import { ButtonProps } from '../../components/UI/Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BUTTON_STYLES_TYPES } from '../../components/UI/Button';


import Button from '../../components/UI/Button';

export default {
    title: "Components/UI/Button",
    component: Button,
  
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />;

export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
    styleType: BUTTON_STYLES_TYPES.primary,
    children: "Primary Button"
};

export const SecondaryButton = Template.bind({})

SecondaryButton.args = {
    styleType: BUTTON_STYLES_TYPES.secondary,
    children: "Secondary Button"
}