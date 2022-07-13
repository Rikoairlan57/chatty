import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChatSideBarMenu from '../../features/MainMenu/components/ChatSideBarMenu/index';

export default {
    title: 'Components/ChatMenu',
    component: ChatSideBarMenu,
} as ComponentMeta<typeof ChatSideBarMenu>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ChatSideBarMenu> = () => <ChatSideBarMenu />;

export const Default = Template.bind({});
