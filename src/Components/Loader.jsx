import React from 'react'

function Loader() {
  return (
    <div>

          <div className="   sm:w-[80vw]    flex logg h-[80vh]">
                <div className="m-auto">
                  <div
                    className="inline-block h-8 w-8 sm:h-20 sm:w-20 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] "
                    role="status"
                  >
                  
                  </div>
                </div>
                </div>
    </div>
  )
}

export default Loader