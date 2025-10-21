
"use client";

import { TabItem, Tabs } from "flowbite-react";

import Experience from "./Experiencee";
import Education from "./Education";


export function Component() {
  return (
    <Tabs aria-label="Tabs with" className="border-none justify-between Tab-Button-bu mt-20" >
      {/* You can pass a React node to `title` so you control the markup and classes */}
      <TabItem
        active
        title=" Experience"
        className="none"
       
      >
       <Experience/>
      </TabItem>
      <TabItem
        title="Education"
        className="none"
        
      >
       <Education/>
      </TabItem>

    </Tabs>
  );
}
