import BookForm from '../../../components/features/Admin/Books/BookForm';
import Title from '../../../components/ui/Title';
import {string} from 'prop-types'



export default function AdminBooksAction( {title}) {
  return (
    <section className='bg-blue-100 p-4 rounded my-2' >
        <Title level={2} text1={title} custom1='border-light border-b-2' />
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                 <BookForm />
            </div>
</section>
  )
}

AdminBooksAction.propTypes={
    title: string.isRequired
}

