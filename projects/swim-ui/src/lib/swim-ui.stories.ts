import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { SwimUiComponent } from './swim-ui.component';
import { CommonModule } from '@angular/common';

const meta: Meta<SwimUiComponent> = {
  title: 'SwimUI/Swim',
  component: SwimUiComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<SwimUiComponent>;

export const Primary: Story = {
  render: () => ({
    props: {
    },
  }),
};