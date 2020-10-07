import{h as e,r,H as s}from"./p-7ed6835f.js";import"./p-b18ab5ec.js";import"./p-ea521598.js";import{H as o,a as c,G as a,C as t}from"./p-d803edb2.js";import"./p-660a81d1.js";import{P as i}from"./p-5ca5e847.js";import{P as u}from"./p-b3d0c963.js";var n,l;!function(e){e.Article="Article",e.Blog="Blog",e.Book="Book",e.CaseStudy="Case Study",e.CustomerInterview="Customer Interview",e.Course="Course",e.Learning="Learning",e.Doc="Doc",e.Guide="Guide",e.Podcast="Podcast",e.Tutorial="Tutorial",e.Video="Video",e.Whitepaper="Whitepaper",e.Webinar="Webinar"}(n||(n={})),function(e){e.Prismic="prismic"}(l||(l={}));const m=e=>e&&e.url?e.url:"",d=e=>{var r,s;return e.data.hosts||e.data.author?"webinar"===e.type?e.data.hosts.map(e=>{var r,s;return{name:e.name||"",title:e.title||"",link:(null===(r=e.profile_link)||void 0===r?void 0:r.url)||"",avatar:(null===(s=e.photo)||void 0===s?void 0:s.url)||""}}):e.data.author&&e.data.author.length?e.data.author.map(e=>{var r,s;return{name:e.name||"",title:e.title||"",link:(null===(r=e.author_url)||void 0===r?void 0:r.url)||"",avatar:(null===(s=e.photo)||void 0===s?void 0:s.url)||""}}):e.data.author?[{name:e.data.author.name||"",title:e.data.author.title||"",link:(null===(r=e.data.author.author_url)||void 0===r?void 0:r.url)||"",avatar:(null===(s=e.data.author.photo)||void 0===s?void 0:s.url)||""}]:[]:[]};function p(e){return"article"===e.type?"/resources/articles/"+e.uid:"case_study"===e.type?"/resources/case-studies/"+e.uid:"customer_story"===e.type?"/resources/customer-interviews/"+e.uid:"enterprise_blog_post"===e.type?"/enterprise/blog/"+e.uid:"integration"===e.type?"/integrations/"+e.uid:"podcast"===e.type?"/resources/podcasts/"+e.uid:"thank_you"===e.type?"/thank-you/"+e.uid:"video"===e.type?"/resources/videos/"+e.uid:"webinar"===e.type?"/resources/webinars/"+e.uid:"whitepaper"===e.type?"/resources/whitepapers/"+e.uid:"/"}const h=({author:r,byline:s,singleLine:o=!1,className:c,key:a})=>r?e("a",{href:r.link,target:"_blank",rel:"noopener",key:a,class:`\n        ${s?"resource-author-item--byline":""}\n        ${o?"resource-author-item--single-line":""}\n        ${c||""}\n        resource-author-item\n      `,"aria-label":"Author information - "+r.name},e("div",{class:"resource-author"},e("img",{loading:"lazy",class:"author-avatar",src:r.avatar,alt:r.name}),e("div",{class:"author-info"},e("div",{class:"author-name"},r.name),r.title?e("div",{class:"author-title"},r.title):null))):null,g=e=>"https://ionicframework.com/resources/"+(e=>({[n.Article]:"articles",[n.Blog]:"blogs",[n.Book]:"blogs",[n.CaseStudy]:"case-studies",[n.Course]:"courses",[n.CustomerInterview]:"customer-interviews",[n.Doc]:"docs",[n.Learning]:"learning",[n.Guide]:"guides",[n.Podcast]:"podcasts",[n.Tutorial]:"tutorials",[n.Video]:"videos",[n.Webinar]:"webinars",[n.Whitepaper]:"whitepapers"}[e]))(e),f=e=>{if(e.doc.data.content_url&&e.doc.data.content_url.url)return u.Link.url(e.doc.data.content_url,p);switch(e.type){case n.Article:case n.Webinar:case n.CaseStudy:case n.CustomerInterview:case n.Whitepaper:return`${g(e.type)}/${e.id}`;case n.Video:return b(e);default:return`${g(e.type)}/${e.id}`}},b=e=>e.doc.data.wistia_id?"https://ionicpro.wistia.com/medias/"+e.doc.data.wistia_id:e.doc.data.youtube_id?"https://www.youtube.com/watch?v="+e.doc.data.youtube_id:"",v=({resource:r})=>{var s;return e("div",{class:"resource-meta"},e("div",{class:"type"},r.type),e("div",{class:"tags"},null===(s=r.tags)||void 0===s?void 0:s.map((s,o)=>[e("span",null,s),o<r.tags.length-1?e(x,null):null])))},x=()=>e("span",{class:"sep"}),w=r=>{if(r.hero)return e(y,Object.assign({},r));switch(r.resource.type){case n.Whitepaper:return e(k,Object.assign({},r));default:return e(y,Object.assign({},r))}},y=({resource:r,headingLevel:s=3,showAuthor:a=!0,showImage:t=!0,showDescription:i=!0,metaTop:u=!1,key:n})=>e(c,{embelish:!1,class:"resource-card"+(u?" resource-card--meta-top":""),key:n},u&&e(v,{resource:r}),t&&e("a",{href:f(r),class:"resource-card__image"},e(_,{resource:r})),!u&&e(v,{resource:r}),e("div",{class:"resource-card__content"},e("a",{href:f(r)},e(o,{level:s},r.title)),i&&e("p",null,r.description)),a&&e(h,{author:r.authors[0]})),k=r=>{const s=r.resource;return e(c,{embelish:!1,class:"resource-card resource-card--ad",key:r.key},e("a",{href:f(r.resource)},e(o,{level:3},s.doc.data.ad||s.title),e(_,{resource:r.resource})))},_=({resource:r})=>e("img",{loading:"lazy",class:"resource-card__featured-image",src:r.heroImage,alt:r.title}),z=class{constructor(e){r(this,e),this.showAuthor=!1,this.showDescription=!0,this.prismicEndpoint="https://ionicframeworkcom.cdn.prismic.io/api/v2"}async componentWillLoad(){const e=((e,r=null)=>i.client(this.prismicEndpoint,((e=null,r=null)=>{const s=r?{accessToken:r}:{};return Object.assign(Object.assign({},e?{req:e}:{}),s)})(r,null)))(),r=this.resources.map(r=>e.getByUID(r.type,r.uid,null));try{this.docs=await(await Promise.all(r)).map(e=>{return{id:(s=e).uid,title:s.data.title||null,description:s.data.tagline||null,tags:s.tags||[],publishDate:s.first_publication_date||null,updatedDate:s.last_publication_date||null,type:(r=s.type,{article:n.Article,book:n.Book,blog:n.Blog,case_study:n.CaseStudy,course:n.Course,customer_story:n.CustomerInterview,learning:n.Learning,doc:n.Doc,guide:n.Guide,podcast:n.Podcast,tutorial:n.Tutorial,video:n.Video,webinar:n.Webinar,whitepaper:n.Whitepaper}[r]),authors:d(s),metaImage:m(s.data.meta_image),heroImage:m(s.data.hero_image||s.data.cover_image),source:l.Prismic,doc:s};var r,s})}catch(s){console.error("Unable to load more resources",s)}}render(){const{showAuthor:r,showDescription:o}=this;return e(s,null,e(a,null,this.docs.map(s=>e(t,{md:4,sm:4,xs:12,cols:12,key:s.id},e(w,{resource:s,showDescription:o,showAuthor:r})))))}};z.style='.sc-more-resources-h{display:block}.resource-meta.sc-more-resources{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;letter-spacing:var(--letter-spacing-5);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.resource-meta.sc-more-resources .type.sc-more-resources{font-weight:500;font-size:10px;color:var(--c-carbon-900);text-transform:uppercase;margin-right:24px}@media (max-width: 768px){.resource-meta.sc-more-resources .type.sc-more-resources{margin-right:0}}.resource-meta.sc-more-resources .tags.sc-more-resources{color:var(--c-indigo-600);font-size:10px;text-transform:uppercase}.resource-meta.sc-more-resources .tags.sc-more-resources span.sc-more-resources{display:inline-block}.resource-meta.sc-more-resources .tags.sc-more-resources .sep.sc-more-resources{display:inline-block;height:11px;width:1px;margin:0 6px -2px;background:var(--c-indigo-300)}@media (max-width: 768px){.resource-meta.sc-more-resources{-ms-flex-direction:column;flex-direction:column;gap:8px}}.resource-card.sc-more-resources{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%}.resource-card.sc-more-resources a.sc-more-resources{color:var(--c-carbon-900)}.resource-card.sc-more-resources h1.sc-more-resources,.resource-card.sc-more-resources h2.sc-more-resources,.resource-card.sc-more-resources h3.sc-more-resources,.resource-card.sc-more-resources h4.sc-more-resources,.resource-card.sc-more-resources h5.sc-more-resources{margin-top:0}.resource-card.sc-more-resources p.sc-more-resources{color:var(--c-indigo-900);font-size:16px;line-height:160%}.resource-card.sc-more-resources .resource-meta.sc-more-resources{margin-bottom:12px}.resource-card__content.sc-more-resources{-ms-flex:1;flex:1}.resource-card--meta-top.sc-more-resources .resource-meta.sc-more-resources{margin-bottom:24px}.resource-card__image.sc-more-resources{display:block;overflow:hidden;margin-bottom:24px;line-height:0}.resource-card__featured-image.sc-more-resources{max-width:100%;-webkit-transition:200ms -webkit-transform cubic-bezier(0.32, 0.72, 0, 1);transition:200ms -webkit-transform cubic-bezier(0.32, 0.72, 0, 1);transition:200ms transform cubic-bezier(0.32, 0.72, 0, 1);transition:200ms transform cubic-bezier(0.32, 0.72, 0, 1), 200ms -webkit-transform cubic-bezier(0.32, 0.72, 0, 1)}.resource-card__featured-image.sc-more-resources:hover{-webkit-transform:scale(1.05);transform:scale(1.05)}.resource-card--ad.sc-more-resources{background:var(--c-indigo-200);padding:30px}.resource-author-item.sc-more-resources .resource-author.sc-more-resources{display:grid;grid-template-columns:32px 1fr;-webkit-column-gap:8px;-moz-column-gap:8px;column-gap:8px}.resource-author-item.sc-more-resources .author-info.sc-more-resources{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.resource-author-item.sc-more-resources .author-avatar.sc-more-resources{max-height:32px;border-radius:100%}.resource-author-item.sc-more-resources .author-name.sc-more-resources{font-size:14px;color:var(--c-carbon-900)}.resource-author-item.sc-more-resources .author-title.sc-more-resources{font-size:12px;color:var(--c-indigo-600)}.resource-author-item--single-line.sc-more-resources .author-info.sc-more-resources{display:block;line-height:32px}.resource-author-item--single-line.sc-more-resources .author-info.sc-more-resources .author-name.sc-more-resources{display:inline-block;vertical-align:middle;font-size:16px;color:var(--c-indigo-700)}.resource-author-item--single-line.sc-more-resources .author-info.sc-more-resources .author-name.sc-more-resources:after{content:", "}.resource-author-item--single-line.sc-more-resources .author-info.sc-more-resources .author-title.sc-more-resources{display:inline-block;vertical-align:middle;font-size:16px;margin-left:2px;color:var(--c-indigo-700)}';export{z as more_resources}