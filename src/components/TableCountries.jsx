import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'

const TableCountries = ({ countries, setCountries }) => {
  const [sortType, setSortType] = useState('')

  // sort country by name
  const SortByName = (a, b) => {
    // ascending sort
    if (sortType === '' || sortType === 'Desc') {
      setSortType('Asc')
      if (a.name.official < b.name.official) {
        return -1
      }
      if (a.name.official > b.name.official) {
        return 1
      }
      return 0
    }
    // descending sort
    else if (sortType === 'Asc') {
      setSortType('Desc')
      if (a.name.official > b.name.official) {
        return -1
      }
      if (a.name.official < b.name.official) {
        return 1
      }
      return 0
    }
  }

  // handle when click sort
  const handleClickSort = () => {
    countries.sort(SortByName)
  }
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Flag</th>
            <th onClick={handleClickSort} className='hover'>
              Country Name{' '}
              {sortType === 'Asc' ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 320 512'
                  width='10px'
                >
                  <path d='M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z' />
                </svg>
              ) : sortType === 'Desc' ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 320 512'
                  width='10px'
                >
                  <path d='M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z' />
                </svg>
              ) : (
                ''
              )}
            </th>
            <th>cca2</th>
            <th>cca3</th>
            <th>Native Name</th>
            <th>Alternative Name</th>
            <th>Calling Code</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => (
            <tr key={country.name.official}>
              <td>
                <img src={country.flags.png} width='30px' alt='logo' />
              </td>
              <td data-bs-toggle='modal' data-bs-target={`#${index}`}>
                {country.name.official}
              </td>
              <td>{country.cca2}</td>
              <td>{country.cca3}</td>
              <td>
                {country.name.nativeName &&
                  Object.entries(country.name.nativeName)[0][1].official}
              </td>
              <td>{country.altSpellings[0]}</td>
              <td>
                {country.idd.root && country.idd.root + country.idd.suffixes[0]}
              </td>

              {/* Modal */}
              <div
                className='modal fade'
                id={index}
                tabIndex={-1}
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'
              >
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h1 className='modal-title fs-4' id='exampleModalLabel'>
                        Country Detail
                      </h1>
                      <img src={country.flags.png} width='60px' alt='logo' />
                    </div>
                    <div className='modal-body fw-semibold'>
                      <div className='d-flex justify-content-between'>
                        <h5>Common Name: {country.name && country.name.common}</h5>
                        <h5>
                          {country.independent
                            ? 'Is independent'
                            : 'Is not Independent'}
                        </h5>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <h5>Capital: {country.capital && country.capital[0]}</h5>
                        <h5>
                          {country.unMember
                            ? 'Is UN Member'
                            : 'Is not UN Member'}
                        </h5>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <h5>Currency: {country.currencies && Object.entries(country.currencies)[0][1].name} { country.currencies && Object.entries(country.currencies)[0][1].symbol}</h5>
                        <h5>
                          Region: {country.region}
                        </h5>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <h5>Area : {country.area} km2</h5>
                        <h5>
                          Population: {country.population}
                        </h5>
                      </div>
                    </div>
                    <div className='modal-footer'>
                      <button
                        type='button'
                        className='btn btn-secondary'
                        data-bs-dismiss='modal'
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default TableCountries
