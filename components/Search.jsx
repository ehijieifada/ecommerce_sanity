import React from 'react'

const Search = () => {
  return (
    <div class="search-container">
    <form>
      <input type="text" placeholder="Search.." name="search" />
      <button className="submit" type="submit">Submit</button>
    </form>
  </div>
  )
}

export default Search