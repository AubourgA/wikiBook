import BookLatest from '../swiper/BookLatest'



function NewsBanner() {

    

  return (
    <section className=''>
        <div className='container mx-auto py-4'>

        <h2 className='text-2xl py-4'>Nos Nouveauté</h2>
        <div className=''>
                <BookLatest />
     
        </div>
        </div>
    </section>
  )
}

export default NewsBanner