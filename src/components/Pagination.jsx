import React from 'react'
import { Button } from 'react-bootstrap'

const Pagination = ({
  totalCountries,
  rowsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = []
  for (let i = 1; i <= Math.ceil(totalCountries / rowsPerPage); i++) {
    pages.push(i)
  }
  return (
    <div className='d-flex justify-content-end mb-2'>

      {pages.map((page, index) => (
        <Button
          variant={page === currentPage ? 'primary' : 'outline-primary'}
          className='me-1'
          onClick={() => setCurrentPage(page)}
          key={index}
        >
          {page}
        </Button>
      ))}
    </div>
  )
}

export default Pagination
