// Button.stories.ts

import type { Meta, StoryObj } from '@storybook/angular';
import { SpinnerComponent } from './spinner.component';


const meta: Meta<SpinnerComponent> = {
    component: SpinnerComponent,
    tags: ['autodocs'],
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<SpinnerComponent>;

export const Demo: Story = {
    args: {}
}