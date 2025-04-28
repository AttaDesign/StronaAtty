'use client'
import Image from 'next/image';

function Case({h3, p, img, alt}){
    return(
        <div className='case-studie'>
                            <div className='image-wrapper2'>
                                <Image alt={alt} height={223} width={466} src={img} ></Image>
                            </div>
                            <div className='info-wrapper'>
                                <div className='boxi'>
                                    <h3>{h3}</h3>
                                    <p>{p}</p>
                                </div>
                                <div className="cta unselectable ">
                                    <div className="text m-2 sm:m-0 font-normal"  >
                                        Zobacz Projekt <i className="fa-solid fa-arrow-right-long "></i>
                                    </div>
                                </div>
                            </div>
                        </div>
    );

}

export default Case;
