const e=[],r=[],s=new IntersectionObserver((s,o)=>{s.forEach(e=>{e.intersectionRatio>0?r.indexOf(e.target)<0&&r.push(e.target):r.splice(r.indexOf(e.target),1)}),e.forEach(e=>e({entries:s,observer:o,visible:r}))},{threshold:[0,1]}),o=e=>e&&s.observe(e);export{o}