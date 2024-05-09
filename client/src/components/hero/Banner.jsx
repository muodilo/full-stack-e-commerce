import React from 'react'
import { Banner, Button } from "flowbite-react";
import { HiX } from "react-icons/hi";

const Bannerx = () => {
  return (
    <Banner>
      <div className="flex w-[calc(100%-2rem)] mt-2 flex-col justify-between rounded-lg border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 md:flex-row lg:max-w-7xl">
        <div className="mb-3 mr-4 flex flex-col items-start md:mb-0 md:flex-row md:items-center">
          <a
            href="https://flowbite.com/"
            className="mb-2 flex items-center border-gray-200 dark:border-gray-600 md:mb-0 md:mr-4 md:border-r md:pr-4"
          >
            
            <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white md:pr-6">
              !
            </span>
          </a>
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
          Upgrade your shopping experience! Sign up now for exclusive deals and seamless browsing. Don't miss out!
          </p>
        </div>
        <div className="flex shrink-0 items-center">
          <Button href="#">Sign up</Button>
          <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
            <HiX className="h-4 w-4" />
          </Banner.CollapseButton>
        </div>
      </div>
    </Banner>
  )
}

export default Bannerx
