const API_KEY = process.env.REACT_APP_NYTIMES_API_KEY

const fetchBestSellingBooks = async (year) => {
  return await fetch(`
    https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${API_KEY}&&published_date=${year}-01-01`
  )
    .then(response => response.json())
    .catch(err => console.error(err))
}

const NYTimesAPIs = {
  fetchBestSellingBooks
}

export default NYTimesAPIs
