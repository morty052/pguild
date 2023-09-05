/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Tab } from "@headlessui/react"
import { useState } from "react"



// @ts-ignore
const MessageTabs = ({allmessages, unread,trash}) => {
const [activeTab, setactiveTab] = useState(1)

  return (
    <Tab.Group>
    <Tab.List className={" flex gap-x-4 h-fit  mb-2 py-2 border-b"}>
            <Tab onClick={()=> setactiveTab(1)} as="div"
            className={`cursor-pointer focus:outline-none ${activeTab == 1 && "underline underline-offset-8  decoration-blue-600 text-blue-600"}`}>  
               {"All"}
            </Tab>
            <Tab className={`cursor-pointer focus:outline-none ${activeTab == 2 && "underline underline-offset-8  decoration-blue-600 text-blue-600"}`}
             onClick={()=> setactiveTab(2)} as="div">
               {"Unread"}
            </Tab>
    </Tab.List>
    <Tab.Panels>

      {/* ALL MESSAGES */}
      <Tab.Panel>
          {allmessages}
      </Tab.Panel>

      {/* UNREAD MESSAGES */}
      <Tab.Panel>
           {unread}
      </Tab.Panel>

      {/* Trash */}


    </Tab.Panels>
  </Tab.Group>
  )
}

export default MessageTabs