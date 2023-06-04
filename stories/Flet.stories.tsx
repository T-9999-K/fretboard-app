import type { Meta, StoryObj } from '@storybook/react'
import Flet from '../components/ui-parts/flet'

const meta: Meta<typeof Flet> = {
  title: 'Example/UI-Parts',
  component: Flet,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Flet>

export const FletPerOne: Story = {
  args: {
    fletNo: 1,
    stringsNo: 1,
  },
}

export const FourStirngsThreeFlet: Story = {
  args: {
    fletNo: 3,
    stringsNo: 4,
  },
}
