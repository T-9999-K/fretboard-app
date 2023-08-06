import type { Meta, StoryObj } from '@storybook/react'
import AnswerButton from '../components/ui-parts/AnswerButton'

const meta: Meta<typeof AnswerButton> = {
  title: 'Example/Button',
  component: AnswerButton,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof AnswerButton>

export const AnswerButtonStory: Story = {
  args: {
    onClick: () => {}
  }
}
