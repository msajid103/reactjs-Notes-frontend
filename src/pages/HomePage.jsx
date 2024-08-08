import React from 'react'
import Filter from '../components/Filter'
import NoteCardContainer from '../components/NoteCardContainer'

const HomePage = ({data, filterText}) => {
  return (
    <>
     <Filter filterText = {filterText}/>
     <NoteCardContainer data = {data}/>
    </>
  )
}

export default HomePage