"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useWindowWidth } from "@react-hook/window-size";

import { NAV_LINKS } from "@/base/constants";
import { Nav } from "./ui/nav";
import { Button } from "./ui/button";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(() => {
    const savedBoolean = localStorage.getItem("isCollapsed");
    return savedBoolean ? JSON.parse(savedBoolean) : false;
  });

  const onlyWidth = useWindowWidth();
  const isMobile = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
    localStorage.setItem("isCollapsed", JSON.stringify(!isCollapsed));
  }
  return (
    <div className="relative min-w-[80px] border-r px-3  pb-10 pt-24 ">
      {!isMobile && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2"
          >
            {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        </div>
      )}

      <Nav isCollapsed={isMobile ? true : isCollapsed} links={NAV_LINKS} />
    </div>
  );
}
