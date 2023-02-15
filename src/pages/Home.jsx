import axios from 'axios'
import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Pagination from '../components/Pagination'
import TableCountries from '../components/TableCountries'

const Home = () => {
  const [countries, setCountries] = useState([])
  const [currentCountries,setCurrentCountries] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(25)

  const lastPageIndex = currentPage * rowsPerPage
  const firstPageIndex = lastPageIndex - rowsPerPage

   
  useEffect(() => {
    setCurrentCountries(countries.slice(firstPageIndex, lastPageIndex))
  }, [currentPage])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => {
        setCountries(res.data)
        setCurrentCountries(res.data.slice(firstPageIndex, lastPageIndex))
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <>
    <NavBar countries={countries} setCurrentCountries={setCurrentCountries}/>
      <div className='m-4'>
        <Pagination
          totalCountries={countries.length}
          rowsPerPage={rowsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        <TableCountries
          countries={currentCountries}
          setCountries={setCountries}
        />
      </div>
    </>
  )
}

export default Home
