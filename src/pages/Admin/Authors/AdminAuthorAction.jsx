import AuthorForm from '../../../components/features/Admin/Authors/AuthorForm'
import Title from '../../../components/ui/Title'


export default function AdminAuthorAction({title}) {
  return (
    <section className='bg-blue-100 p-4 rounded my-2' >
        <Title level={2} text1={title} custom1='border-light border-b-2' />
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                 <AuthorForm />
            </div>
</section>
  )
}

