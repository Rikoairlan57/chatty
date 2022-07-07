import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChatMenu from '../../components/ChatMenu/index';

export default {
    title: 'Components/ChatMenu',
    component: ChatMenu,
} as ComponentMeta<typeof ChatMenu>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ChatMenu> = () => <ChatMenu />;

export const Default = Template.bind({});
