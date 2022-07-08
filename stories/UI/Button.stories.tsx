
import React from 'react';
import { ButtonProps } from '../../components/UI/Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BUTTON_STYLES } from '../../components/UI/Button';


import Button from '../../components/UI/Button';

export default {
    title: "Components/UI/Button",
    component: Button,

} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />;

export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
    buttonStyle: BUTTON_STYLES.primary,
    children: "Primary Button"
};

export const SecondaryButton = Template.bind({})

SecondaryButton.args = {
    buttonStyle: BUTTON_STYLES.secondary,
    children: "Secondary Button"
}

export const ghostBlack = Template.bind({})

ghostBlack.args = {
    buttonStyle: BUTTON_STYLES.ghostBlack,
    children: "Ghost Black Button"
}

export const ghostWhite = Template.bind({})

ghostWhite.args = {
    buttonStyle: BUTTON_STYLES.ghostWhite,
    children: "Ghost White Button",
    className: "bg-neutral-700"
}