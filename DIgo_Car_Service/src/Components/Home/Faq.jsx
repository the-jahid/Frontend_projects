
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function Faq() {
    
    // Waiting For Backend Api
    const disclos = [
        {Question: 'How long should a car repair take?',
        answer: 'I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car I have got my car repaired at Finsweet I have got my car repaired at Finsweet'
        },
        {Question: 'How long should a car repair take?',
        answer: 'I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car I have got my car repaired at Finsweet I have got my car repaired at Finsweet'
        },
        {Question: 'How long should a car repair take?',
        answer: 'I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car I have got my car repaired at Finsweet I have got my car repaired at Finsweet'
        },
        {Question: 'How long should a car repair take?',
        answer: 'I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car I have got my car repaired at Finsweet I have got my car repaired at Finsweet'
        },
        {Question: 'How long should a car repair take?',
        answer: 'I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car I have got my car repaired at Finsweet I have got my car repaired at Finsweet'
        },
        {Question: 'How long should a car repair take?',
        answer: 'I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car I have got my car repaired at Finsweet I have got my car repaired at Finsweet'
        },
       
    ]

  return (
    <div className="w-full px-4 pt-16  h-fit bg-slate-200 p-10">
        <p  className='text-center text-4xl font-bold mb-10' >Frequently Asked Questions</p>
      <div className="mx-auto w-full  md:max-w-lg rounded-2xl bg-white p-2 ">
        {
            disclos.map((items, index)  => <DisclosItem key={index} item= {items} /> )
        }
    
      </div>
    </div>
  )
}


const DisclosItem = ({item}) =>  {

  const {Question, answer } = item;

    
    return (
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 mt-5">
                <span>{Question}</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {answer}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
    )
}





