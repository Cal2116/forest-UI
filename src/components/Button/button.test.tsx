import React from 'react'
import { render } from '@testing-library/react'
import Button from './button'

test('test button text children', () => {
  const wrapper = render(<Button>forest</Button>)
  const element = wrapper.queryByText('forest')
  expect(element).toBeTruthy()
})