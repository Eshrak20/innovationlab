import{j as t,J as o}from"./app-fjtTz2h4.js";const d=({links:r})=>!r||r.length===0?null:t.jsx("div",{className:"flex justify-center -mt-28 mb-10 dark:bg-[#111827]  space-x-1",children:r.map((e,a)=>t.jsx(o,{href:e.url??"#",dangerouslySetInnerHTML:{__html:e.label},className:`
                        relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                        border border-transparent
                        ${e.active?"glowing-button text-white":`bg-white dark:bg-gray-800 
                                   text-gray-700 dark:text-gray-300 
                                   hover:text-indigo-600 dark:hover:text-indigo-400
                                   border-gray-200 dark:border-gray-700
                                   hover:shadow-md hover:-translate-y-0.5`}
                        ${e.url?"":"opacity-50 cursor-not-allowed pointer-events-none"}
                    `},a))});export{d as default};
