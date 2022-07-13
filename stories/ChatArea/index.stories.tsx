import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Chat from '../../features/Chat';

export default {
    title: 'Components/ChatArea',
    component: Chat,
} as ComponentMeta<typeof Chat>;

const Template: ComponentStory<typeof Chat> = () => <Chat />;

export const Default = Template.bind({});
