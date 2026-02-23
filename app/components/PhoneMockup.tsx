"use client";

import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  className?: string;
  children?: React.ReactNode;
}

export function PhoneMockup({ className, children }: PhoneMockupProps) {
  return (
    <div className={cn("relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl", className)}>
      <div className="w-[148px] h-[18px] bg-gray-800 top-0 left-1/2 -translate-x-1/2 absolute rounded-b-[1rem]"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-black flex flex-col">
        {children || (
          <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-indigo-600 animate-pulse" />
            <div className="h-4 w-32 bg-gray-800 rounded" />
            <div className="h-4 w-24 bg-gray-800 rounded" />
            <div className="grid grid-cols-2 gap-2 w-full pt-4">
              <div className="h-20 bg-gray-800 rounded-xl" />
              <div className="h-20 bg-gray-800 rounded-xl" />
              <div className="h-20 bg-gray-800 rounded-xl" />
              <div className="h-20 bg-gray-800 rounded-xl" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
