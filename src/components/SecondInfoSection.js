import React,{useState,useEffect} from 'react'

const SecondInfoSection = () => {

    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
      function handleResize() {
        setWidth(
          window.innerWidth
        )
      }
      window.addEventListener('resize', handleResize)
      return _ => {
        window.removeEventListener('resize', handleResize)
      }
  })
  return (
    <div className="second_info_wrapper">
        <div className='second_info_first_section'>
            <div className="second_info_text">
                <h1>Lorem ipsum <span className='green'>dolor</span> sit amet</h1>
                <p>
                Sed id elementum ante. Proin sit amet dignissim ligula. Ut varius augue sit amet mi elementum scelerisque. Vestibulum gravida mattis urna ac posuere. Nulla egestas quis felis a fringilla. Quisque ut tellus nec justo semper pretium. Integer vestibulum lacus magna, non feugiat tellus eleifend nec. Maecenas ultrices, purus ac laoreet interdum, ex odio vehicula nibh, non pulvinar massa sapien sit amet ex. Donec egestas tortor vitae interdum mollis. In hac habitasse platea dictumst. Cras ut nisi eleifend, elementum massa at, tempus quam. Nunc vitae pretium velit. Vivamus bibendum lobortis sapien, vel placerat risus rutrum porttitor.
                </p>
            </div>
            <img src="https://picsum.photos/300" alt="info_image" />
        </div>
        <h1>Lorem ipsum <span className="green">dolor sit</span> amet </h1>
        <div className="second_info_section">
            <div className='second_info_text'>
                <h1>Lorem <span className='green'>Ipsum</span></h1>
                <p>
                    <span className='bold'>Release information</span>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo.
                    <br />
                    <span className='bold'>Release information</span>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo.
                    <br />
                    <span className='bold'>Release information</span>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo.
                </p>
            </div>
            <img src="https://picsum.photos/300" alt="info_image" />
        </div>
        
        <div className={`${width > 450 ? "second_info_section" : "second_info_section reversed"}`}>
            <img src="https://picsum.photos/300" alt="info_image" />
            <div className='second_info_text'>
                <h1>Lorem <span className='green'>Ipsum</span></h1>
                <p>
                    <span className='bold'>Release information</span>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo.
                    <br />
                    <span className='bold'>Release information</span>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo.
                    <br />
                    <span className='bold'>Release information</span>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo.
                </p>
            </div>
        </div>
        <div className="second_info_section">
            <div className='second_info_text'>
                <h1>Lorem <span className='green'>Ipsum</span></h1>
                <p>
                    <span className='bold'>Release information</span>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo.
                    <br />
                    <span className='bold'>Release information</span>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo.
                    <br />
                    <span className='bold'>Release information</span>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis magna ut enim mollis pharetra. Ut in congue justo.
                </p>
            </div>
            <img src="https://picsum.photos/300" alt="info_image" />
        </div>
    </div>
  )
}

export default SecondInfoSection