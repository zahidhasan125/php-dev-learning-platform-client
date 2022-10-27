import React from 'react';
import { useRef } from 'react';
import toast from 'react-hot-toast';
import { FaCrown, FaDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const componentRef = useRef();
    const handlePrintPdf = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: courseDetails.courseTitle + '.pdf',
        onAfterPrint: () => toast.success('Print Success')
    })
    return (
        <div className="card w-full bg-slate-200 shadow-xl dark:bg-slate-600 dark:text-sky-400">
            <div onClick={handlePrintPdf} className='my-4 mr-4 flex justify-end'>
                <FaDownload className='text-2xl'></FaDownload>
            </div>
            <div ref={componentRef} style={{ width: '100%', height: '100%' }}>
                <figure className='pt-4'><img className='rounded-xl' src={courseDetails?.courseImg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl text-center">
                        {courseDetails?.courseTitle}
                    </h2>
                    <hr />
                    <h3 className='card-header font-semibold text-xl'>{courseDetails?.courseHeader}</h3>
                    <p dangerouslySetInnerHTML={{ __html: courseDetails?.courseDetails }}></p>
                </div>
            </div>
            <div className="card-actions justify-center mb-4"><Link to={`/checkout/${courseDetails.courseId}`} className="btn btn-primary text-orange-400"><FaCrown className='mr-2 text-2xl' />Get Premium Access</Link>
            </div>
        </div>
    );
};

export default CourseDetails;