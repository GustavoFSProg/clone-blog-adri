import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { withTheme } from 'config/testSetup'
import Header from './src/components/header/Header'

// jest.mock('react-router-dom', () => ({
//   useHistory: () => jest.fn(),
// }))

// jest.mock('contexts/LanguageContext', () => ({
//   useLanguage: () => ({ language: 'pt' }),
// }))

// window.scrollTo = jest.fn()

describe('Section Contact content', () => {
  it('should render correctly', () => {
    render(<Header />)
  })
})
