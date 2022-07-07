import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import ChatArea from '../../components/ChatArea/';

export default {
    title: 'Components/ChatArea',
    component: ChatArea,
} as ComponentMeta<typeof ChatArea>;

const Template: ComponentStory<typeof ChatArea> = () => <ChatArea />;

export const Default = Template.bind({});
