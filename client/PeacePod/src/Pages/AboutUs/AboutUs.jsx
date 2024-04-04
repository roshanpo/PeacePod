import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const AboutUs = () => {
  return (
    <>
      <div className="about-background lg:ml-52">
        <div className="px-4 py-4 lg:max-w-[700px] bg-transparent text-white mx-auto mt-10">
          <div className="text-5xl py-4 font-Urbanist">
            <h1>PEACEPOD</h1>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-2">
              <AccordionTrigger className='text-2xl font-medium font-Urbanist'>Who are we?</AccordionTrigger>
              <AccordionContent className='text-lg'>
                PeacePod is a meditation app designed to help individuals
                experience peace and tranquility through guided meditation
                sessions, soothing music, and serene scenes. Our app offers a
                variety of meditation techniques and relaxation exercises to
                promote mental well-being and reduce stress.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-2xl font-medium font-Urbanist">What is meditation?</AccordionTrigger>
              <AccordionContent className='text-lg'>
                Meditation is a practice where an individual uses a technique –
                such as mindfulness, or focusing the mind on a particular
                object, thought, or activity – to train attention and awareness,
                and achieve a mentally clear and emotionally calm and stable
                state.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  )
}

export default AboutUs
