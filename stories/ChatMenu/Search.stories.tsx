import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  Search from '../../components/UI/Search';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/ChatMenu/Search',
  component: Search,
} as ComponentMeta<typeof Search>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Search> = () => <Search/>;

export const Default = Template.bind({});