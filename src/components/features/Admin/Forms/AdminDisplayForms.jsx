import Title from '../../../ui/Title';
import PropTypes from 'prop-types';

export default function AdminDisplayForms({title, FormComponent}) {
    return (
        <section className='bg-blue-100 p-4 rounded my-2'>
          <Title level={2} text1={title} custom1='border-light border-b-2' />
          <div className='grid grid-cols-1 sm:grid-cols-2'>
            <FormComponent />
          </div>
        </section>
      );
}

AdminDisplayForms.propTypes = {
    title: PropTypes.string.isRequired,
    FormComponent: PropTypes.elementType.isRequired, 
  };