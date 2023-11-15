// Button.stories.ts

import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';


const meta: Meta<ButtonComponent> = {
    component: ButtonComponent,
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: { type: 'text' },
            defaultValue: 'Click me!',
            description: 'Button label to be shown.'
        },
        type: {
            options: ['solid', 'outline', 'gradient'],
            control: { type: 'radio' },
            defaultValue: 'solid',
            description: 'Button color palette by type.'
        },
        disabled: {
            options: [true, false],
            control: { type: 'boolean' },
            defaultValue: false,
            description: 'Button disabled or not.'
        },
        onClick: {
            control: {
                type: 'none'
            }
        },
        btnClicked: {
            control: {
                type: 'none',
                description: 'Emit button click event.'
            }
        }
    },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Solid: Story = {
    args: {
        type: 'solid',
        label: "Button solid"
    }
}

export const Outline: Story = {
    args: {
        type: 'outline',
        label: "Button outline"
    }
}

export const Gradient: Story = {
    args: {
        type: 'gradient',
        label: "Button gradient"
    }
}
export const Disabled: Story = {
    args: {
        label: "Button disabled",
        type: 'solid',
        disabled: true
    }
}