import type { Meta, StoryObj } from '@storybook/react'
import FletBoard from '../components/ui-parts/FletBoard'

const meta: Meta<typeof FletBoard> = {
  title: 'Example/UI-Parts',
  component: FletBoard,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof FletBoard>

export const FletBoardStory: Story = {
  args: {
    stringsFlets: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0
    }
  }
}
