import React from 'react'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import blog1 from "./.././../assets/img1.jpg";
import blog2 from "./.././../assets/img7.jpg";
import blog3 from "./.././../assets/img3.jpg";
export default function BlogContent() {
  return <>
  
    <div className="container w-[85%] mx-auto font-sec my-20">
        <div className="font-sec text-center pb-20">
          <h1 className="text-3xl font-semibold text-gray-900 pb-5">
            latest posts from blog
          </h1>
          <p className="text-sm font-light text-gray-400">
            The French Revolution constituted for the conscience of the dominant
            aristocratic class a fall from
          </p>
        </div>
        <div className="md:flex md:gap-4">
          <div className=" w-full mx-auto pb-20 md:pb-0">
            <Card className="group relative mx-auto w-full border-0 outline-0 ring-0 max-w-sm pt-0 overflow-hidden rounded-none">
              <div className="relative overflow-hidden">
                <img
                  src={blog1}
                  alt="Event cover"
                  className="w-full group-hover:rotate-10 group-hover:scale-125 duration-600 rounded-none"
                />
              </div>
            </Card>

            <CardHeader className="">
              <CardTitle className="font-semibold text-lg mt-1">
                <Button
                  className="me-5 text-xs px-4 hover:bg-[#c09a03] hover:text-white duration-500 rounded-none"
                  variant="outline"
                >
                  Travel
                </Button>
                <Button
                  className="me-5 text-xs px-4 hover:bg-[#c09a03] hover:text-white duration-500 rounded-none"
                  variant="outline"
                >
                  Life Style
                </Button>
              </CardTitle>
              <CardDescription className="">
                <h2 className="text-lg text-gray-800 font-semibold hover:text-[#c09a03] duration-500 cursor-pointer py-3">
                  Low Cost Advertising
                </h2>
                <p className="text-sm font-light text-gray-500 pb-3">
                  Acres of Diamonds… you’ve read the famous story, or at least
                  had it related to you. A farmer.
                </p>
                <h5 className="text-gray-700">31st January,2018</h5>
              </CardDescription>
            </CardHeader>
          </div>
          <div className=" w-full mx-auto pb-20 md:pb-0">
            <Card className="group relative mx-auto w-full border-0 outline-0 ring-0 max-w-sm pt-0 overflow-hidden rounded-none">
              <div className="relative overflow-hidden">
                <img
                  src={blog2}
                  alt="Event cover"
                  className="w-full group-hover:rotate-10 group-hover:scale-125 duration-600 rounded-none "
                />
              </div>
            </Card>

            <CardHeader className="">
              <CardTitle className="font-semibold text-lg mt-1">
                <Button
                  className="me-5 text-xs px-4 hover:bg-[#c09a03] hover:text-white duration-500 rounded-none"
                  variant="outline"
                >
                  Travel
                </Button>
                <Button
                  className="me-5 text-xs px-4 hover:bg-[#c09a03] hover:text-white duration-500 rounded-none"
                  variant="outline"
                >
                  Life Style
                </Button>
              </CardTitle>
              <CardDescription className="">
                <h2 className="text-lg  text-gray-800 font-semibold hover:text-[#c09a03] duration-500 cursor-pointer py-3">
                  Creative Outdoor Ads
                </h2>
                <p className="text-sm font-light text-gray-500 pb-3">
                  Self-doubt and fear interfere with our ability to achieve or
                  set goals. Self-doubt and fear are
                </p>
                <h5 className="text-gray-700">31st January,2018</h5>
              </CardDescription>
            </CardHeader>
          </div>
          <div className=" w-full mx-auto pb-20 md:pb-0">
            <Card className="group relative mx-auto w-full border-0 outline-0 ring-0 max-w-sm pt-0 overflow-hidden rounded-none">
              <div className="relative overflow-hidden">
                <img
                  src={blog3}
                  alt="Event cover"
                  className="w-full group-hover:rotate-10 group-hover:scale-125 duration-600 rounded-none"
                />
              </div>
            </Card>

            <CardHeader className="">
              <CardTitle className="font-semibold text-lg mt-1">
                <Button
                  className="me-5 text-xs px-4 hover:bg-[#c09a03] hover:text-white duration-500 rounded-none"
                  variant="outline"
                >
                  Travel
                </Button>
                <Button
                  className="me-5 text-xs px-4 hover:bg-[#c09a03] hover:text-white duration-500 rounded-none"
                  variant="outline"
                >
                  Life Style
                </Button>
              </CardTitle>
              <CardDescription className="">
                <h2 className="text-lg  text-gray-800 font-semibold hover:text-[#c09a03] duration-500 cursor-pointer py-3">
                  It S Classified How To Utilize Free
                </h2>
                <p className="text-sm font-light text-gray-500 pb-3">
                  Why do you want to motivate yourself? Actually, just answering
                  that question fully can
                </p>
                <h5 className="text-gray-700">31st January,2018</h5>
              </CardDescription>
            </CardHeader>
          </div>
        </div>
      </div>
  </>
}
