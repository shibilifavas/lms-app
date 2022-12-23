import React from 'react'
import { Form } from 'react-bootstrap'
function SearchBar() {
  return (
    <div className='search border-right-0 border-left-0'>
         <Form >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 border-top-0 border-right-0 border-left-0 search  border-dark"
              aria-label="Search" 
            />
          </Form>
    </div>
  )
}

export default SearchBar