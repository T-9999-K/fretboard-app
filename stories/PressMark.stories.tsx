import type { Meta, StoryObj } from '@storybook/react'
import PressMark from '../components/ui-parts/PressMark'

const meta: Meta<typeof PressMark> = {
  title: 'Example/UI-Parts',
  component: PressMark,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof PressMark>

export const PressedMark: Story = {
  args: {
    fletNo: 1,
    pressed: true
  }
}
