import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function NavBar({ countries, setCurrentCountries }) {
  const handleSearchChange = (e) => {
    setCurrentCountries(
      countries.filter((country) =>
        country.name.official
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      )
    )
  }
  return (
    <Navbar bg='primary' variant='dark' expand='lg'>
      <Container fluid>
        <Navbar.Brand className='ms-4'>Countries Catalog</Navbar.Brand>

        <input
          type='search'
          placeholder='Search By Name'
          className='form-control me-2'
          style={{width: '20%'}}
          onChange={handleSearchChange}
        />
      </Container>
    </Navbar>
  )
}

export default NavBar
