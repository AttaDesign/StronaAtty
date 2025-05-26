'use client'
import Image from 'next/image';
import Link from 'next/link';

function Case({ link, title, h3, p, img, alt }) {
    return (
        <div className='case-studie'>
            <Link href={link} title={title} target='blank'>
                <div className='image-wrapper2'>
                    <Image alt={alt} height={223} width={466} src={img} ></Image>

                </div>
            </Link>
            <div className='info-wrapper'>
                <div className='boxi'>
                    <h3>{h3}</h3>
                    <p>{p}</p>
                </div>
                <Link href={link} title={title}  target='blank'>
                    <div className="cta unselectable ">
                        <div className="text fw-400 m-2 sm:m-0 font-normal" style={{fontWeight: '400 !important' }} >
                            Zobacz Projekt <i className="fa-solid fa-arrow-right-long "></i>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );

}

export default Case;
