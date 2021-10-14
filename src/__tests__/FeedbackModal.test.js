import React from 'react'
import FeedbackModal from '../feedbackModal'
import { render, screen } from '@testing-library/react'

it('has a Subject field and label', () => {
  render(<FeedbackModal show={true} />)
  expect(screen.getByText('Subject')).toBeInTheDocument()
  expect(screen.getByTestId('subjectInput')).toBeInTheDocument()
})

it('has a Type field', () => {
  render(<FeedbackModal show={true} />)
  expect(screen.getByText('Type')).toBeInTheDocument()
  expect(screen.getByTestId('typeInput')).toBeInTheDocument()
})

it('has a Description field', () => {
  render(<FeedbackModal show={true} />)
  expect(screen.getByText('Description')).toBeInTheDocument()
  expect(screen.getByTestId('descriptionInput')).toBeInTheDocument()
})
