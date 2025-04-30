"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Special case for home section - if near the top of the page
      if (scrollPosition < 100) {
        setActiveTab('Home');
        return;
      }
      
      const sections = items.map(item => {
        const id = item.url.replace('#', '')
        const element = document.getElementById(id)
        if (!element) return { name: item.name, position: -1 }
        
        const rect = element.getBoundingClientRect()
        // Consider the section in view if it's top is near the top of the viewport
        // or if the element takes up most of the viewport
        return {
          name: item.name,
          position: rect.top,
          height: rect.height,
          visible: rect.top < window.innerHeight * 0.5 && rect.bottom > 0
        }
      }).filter(section => section.position !== -1)
      
      // Find the section that is currently most visible
      const visibleSections = sections.filter(section => section.visible)
      if (visibleSections.length > 0) {
        // Get the one closest to the top of the viewport
        const currentSection = visibleSections.reduce((prev, current) => {
          return (Math.abs(current.position) < Math.abs(prev.position)) ? current : prev
        })
        
        if (currentSection.name !== activeTab) {
          setActiveTab(currentSection.name)
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    // Initial check
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [items, activeTab])

  return (
    <div
      className={cn(
        "fixed bottom-0 right-0 sm:top-0 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className={cn(
        "flex items-center gap-2 backdrop-blur-md py-2 px-3 rounded-full shadow-md",
        isMobile 
          ? "bg-white/90 dark:bg-gray-900/90 fixed bottom-6 left-1/2 -translate-x-1/2 border border-gray-200 dark:border-gray-700"
          : "bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700"
      )}>
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-poppins rounded-full transition-colors",
                isMobile ? "px-3 py-2" : "px-4 py-1.5",
                "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400",
                isActive && "bg-blue-50 dark:bg-blue-900/20 text-blue-500 dark:text-blue-400",
              )}
            >
              <span className={isMobile ? "hidden" : "hidden md:inline"}>{item.name}</span>
              <span className={isMobile ? "inline" : "md:hidden"}>
                <Icon size={isMobile ? 20 : 18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-blue-500 dark:bg-blue-400 rounded-t-full">
                    <div className="absolute w-10 h-5 bg-blue-400/20 dark:bg-blue-400/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-6 h-4 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-md -top-1" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
} 