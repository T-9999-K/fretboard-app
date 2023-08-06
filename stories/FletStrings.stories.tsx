import type { Meta, StoryObj } from '@storybook/react'
import FletStrings from '../components/ui-parts/FletStrings'

const meta: Meta<typeof FletStrings> = {
  title: 'Example/UI-Parts',
  component: FletStrings,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof FletStrings>

export const FletStringsPerOne: Story = {
  args: {
    stringsNo: 1
  }
}
