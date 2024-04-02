

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='mx-auto text-center md:w-3/12  my-4'>
            <p className='text-yellow-600 mb-4 mt-4'>{subHeading}</p>
            <h3 className='text-4xl border-y-4 py-4 mb-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;