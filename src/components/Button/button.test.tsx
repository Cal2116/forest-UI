import React from 'react'
import { render } from '@testing-library/react'
import Button from './button'

describe('test button component', () => {
  it('should render a default button', () => {
    const wrapper = render(<Button>Forest</Button>)    
    const element = wrapper.getByText('Forest')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
  })

  it('should redner a button based on different props', () => {

  })

  it('should render a link when btnType equals link and href is provided', () => {

  })

  it('should render a disabled button when disabled set true', () => {

  })
})