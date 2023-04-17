import React from 'react'

const Featured = () => {
  return (
    <div className='featured w-full max-w-[1024px] flex flex-col sm:flex-row justify-center gap-5 p-8 lg:p-0 z-10'>

      <div className='featuredItem relative rounded-lg overflow-hidden h-[250px] text-white'>
        <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="" className="featuredImg w-full h-full object-cover"/>
        <div className='featuredTitles absolute bottom-[20px] left-[20px]'>
          <h1 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold'>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="featuredItem relative rounded-lg overflow-hidden h-[250px] text-white">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
          className="featuredImg w-full h-full object-cover"
        />
        <div className="featuredTitles absolute bottom-[20px] left-[20px]">
          <h1 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold'>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>

      <div className="featuredItem relative rounded-lg overflow-hidden h-[250px] text-white">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
          alt=""
          className="featuredImg w-full h-full object-cover"
        />
        <div className="featuredTitles absolute bottom-[20px] left-[20px]">
          <h1 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold'>Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured
