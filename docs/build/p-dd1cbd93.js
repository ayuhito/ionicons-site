import{h as i}from"./p-7ed6835f.js";import{a as o}from"./p-ea521598.js";const s=(s,t)=>{var{xs:r,sm:a,md:e,lg:n,display:d="block"}=s,l=function(i,o){var s={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&o.indexOf(t)<0&&(s[t]=i[t]);if(null!=i&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(i);r<t.length;r++)o.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(i,t[r])&&(s[t[r]]=i[t[r]])}return s}(s,["xs","sm","md","lg","display"]);const p="inline"===d?"span":"div",c=[["xs",r=void 0!==r&&r],["sm",a=void 0!==a?a:r],["md",e=void 0!==e?e:a],["lg",n=void 0!==n?n:e]].reduce((i,o)=>`${i} ${o[1]?"ui-breakpoint-"+o[0]:""}`,"ui-breakpoint");return i(p,Object.assign({},o(l,{class:c}),{style:{"--display":d}}),t)};export{s as B}