import React, { ReactNode } from 'react';

async function index({children}: {children: ReactNode}) {
    return (
        <section className='max-w-screen-xl mx-auto px-3'>

            {children}
            
        </section>
    );
}

export default index;