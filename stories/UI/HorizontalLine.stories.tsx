
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import HorizontalLine from '../../components/UI/HorizontalLine';

export default {
    title: 'Components/UI/HorizontalLine',
    component: HorizontalLine,
} as ComponentMeta<typeof HorizontalLine>;

const Template: ComponentStory<typeof HorizontalLine> = (args) => <HorizontalLine />;

export const Default = Template.bind({});
