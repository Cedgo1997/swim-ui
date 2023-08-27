// Button.stories.ts

import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';


const meta: Meta<ButtonComponent> = {
    component: ButtonComponent,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
    render: () => ({
        props: {
        },
    }),
}