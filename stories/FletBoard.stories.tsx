import type { Meta, StoryObj } from '@storybook/react';
import FletBoard from '../components/ui-parts/fletboard';

const meta: Meta<typeof FletBoard> = {
  title: 'Example/UI-Parts',
  component: FletBoard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FletBoard>;

export const FletBoardStory: Story = {
  args: {
    stringsNo: 1
  },
};