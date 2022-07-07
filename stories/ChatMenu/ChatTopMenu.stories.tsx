import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChatTopMenu from '../../components/ChatMenu/ChatTopMenu';

export default {

    title: 'Components/ChatMenu/ChatTopMenu',
    component: ChatTopMenu,
} as ComponentMeta<typeof ChatTopMenu>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ChatTopMenu> = () => <ChatTopMenu />;

export const Default = Template.bind({});