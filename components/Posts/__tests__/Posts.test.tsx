import { render } from '@testing-library/react'
import Posts from '../Posts'

describe('Posts', () => {
  it('should render "No Posts Available" when the array is empty', () => {
    render(<Posts posts={[]} />) // ARRANGE
  })
})
