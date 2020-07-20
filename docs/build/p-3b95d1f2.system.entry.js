var __awaiter=this&&this.__awaiter||function(e,r,o,t){function s(e){return e instanceof o?e:new o((function(r){r(e)}))}return new(o||(o=Promise))((function(o,a){function i(e){try{n(t.next(e))}catch(r){a(r)}}function c(e){try{n(t["throw"](e))}catch(r){a(r)}}function n(e){e.done?o(e.value):s(e.value).then(i,c)}n((t=t.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var o={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},t,s,a,i;return i={next:c(0),throw:c(1),return:c(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function c(e){return function(r){return n([e,r])}}function n(i){if(t)throw new TypeError("Generator is already executing.");while(o)try{if(t=1,s&&(a=i[0]&2?s["return"]:i[0]?s["throw"]||((a=s["return"])&&a.call(s),0):s.next)&&!(a=a.call(s,i[1])).done)return a;if(s=0,a)i=[i[0]&2,a.value];switch(i[0]){case 0:case 1:a=i;break;case 4:o.label++;return{value:i[1],done:false};case 5:o.label++;s=i[1];i=[0];continue;case 7:i=o.ops.pop();o.trys.pop();continue;default:if(!(a=o.trys,a=a.length>0&&a[a.length-1])&&(i[0]===6||i[0]===2)){o=0;continue}if(i[0]===3&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(i[0]===6&&o.label<a[1]){o.label=a[1];a=i;break}if(a&&o.label<a[2]){o.label=a[2];o.ops.push(i);break}if(a[2])o.ops.pop();o.trys.pop();continue}i=r.call(e,o)}catch(c){i=[6,c];s=0}finally{t=a=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};System.register(["./p-a41addb1.system.js","./p-22e300c7.system.js","./p-4ffbfde7.system.js","./p-3fcc2210.system.js","./p-d06eea33.system.js","./p-08443a6d.system.js"],(function(e){"use strict";var r,o,t,s,a,i,c,n,u;return{setters:[function(e){r=e.h;o=e.r;t=e.H},function(){},function(){},function(e){s=e.H;a=e.a;i=e.G;c=e.C},function(){},function(e){n=e.P;u=e.a}],execute:function(){var l;(function(e){e["Article"]="Article";e["Blog"]="Blog";e["Book"]="Book";e["CaseStudy"]="Case Study";e["CustomerInterview"]="Customer Interview";e["Course"]="Course";e["Learning"]="Learning";e["Doc"]="Doc";e["Guide"]="Guide";e["Podcast"]="Podcast";e["Tutorial"]="Tutorial";e["Video"]="Video";e["Whitepaper"]="Whitepaper";e["Webinar"]="Webinar"})(l||(l={}));var d;(function(e){e["Prismic"]="prismic"})(d||(d={}));var m=function(e,r){if(r===void 0){r=null}return n.client(e,p(r,null))};var p=function(e,r){if(e===void 0){e=null}if(r===void 0){r=null}var o=e?{req:e}:{};var t=r?{accessToken:r}:{};return Object.assign(Object.assign({},o),t)};var f=function(e){return{id:e.uid,title:e.data.title||null,description:e.data.tagline||null,tags:e.tags||[],publishDate:e.first_publication_date||null,updatedDate:e.last_publication_date||null,type:g(e.type),authors:v(e),metaImage:h(e.data.meta_image),heroImage:h(e.data.hero_image||e.data.cover_image),source:d.Prismic,doc:e}};var h=function(e){return e&&e.url?e.url:""};var v=function(e){var r,o;if(!e.data.hosts&&!e.data.author){return[]}if(e.type==="webinar"){return e.data.hosts.map((function(e){var r,o;return{name:e.name||"",title:e.title||"",link:((r=e.profile_link)===null||r===void 0?void 0:r.url)||"",avatar:((o=e.photo)===null||o===void 0?void 0:o.url)||""}}))}else if(e.data.author&&e.data.author.length){return e.data.author.map((function(e){var r,o;return{name:e.name||"",title:e.title||"",link:((r=e.author_url)===null||r===void 0?void 0:r.url)||"",avatar:((o=e.photo)===null||o===void 0?void 0:o.url)||""}}))}else if(e.data.author){return[{name:e.data.author.name||"",title:e.data.author.title||"",link:((r=e.data.author.author_url)===null||r===void 0?void 0:r.url)||"",avatar:((o=e.data.author.photo)===null||o===void 0?void 0:o.url)||""}]}return[]};var g=function(e){return{article:l.Article,book:l.Book,blog:l.Blog,case_study:l.CaseStudy,course:l.Course,customer_story:l.CustomerInterview,learning:l.Learning,doc:l.Doc,guide:l.Guide,podcast:l.Podcast,tutorial:l.Tutorial,video:l.Video,webinar:l.Webinar,whitepaper:l.Whitepaper}[e]};function y(e){if(e.type==="article"){return"/resources/articles/"+e.uid}else if(e.type==="case_study"){return"/resources/case-studies/"+e.uid}else if(e.type==="customer_story"){return"/resources/customer-interviews/"+e.uid}else if(e.type==="enterprise_blog_post"){return"/enterprise/blog/"+e.uid}else if(e.type==="integration"){return"/integrations/"+e.uid}else if(e.type==="podcast"){return"/resources/podcasts/"+e.uid}else if(e.type==="thank_you"){return"/thank-you/"+e.uid}else if(e.type==="video"){return"/resources/videos/"+e.uid}else if(e.type==="webinar"){return"/resources/webinars/"+e.uid}else if(e.type==="whitepaper"){return"/resources/whitepapers/"+e.uid}return"/"}var b=function(e){var r;return(r={},r[l.Article]="articles",r[l.Blog]="blogs",r[l.Book]="blogs",r[l.CaseStudy]="case-studies",r[l.Course]="courses",r[l.CustomerInterview]="customer-interviews",r[l.Doc]="docs",r[l.Learning]="learning",r[l.Guide]="guides",r[l.Podcast]="podcasts",r[l.Tutorial]="tutorials",r[l.Video]="videos",r[l.Webinar]="webinars",r[l.Whitepaper]="whitepapers",r)[e]};var w=function(e){var o=e.author,t=e.byline,s=e.singleLine,a=s===void 0?false:s,i=e.className,c=e.key;return o?r("a",{href:o.link,target:"_blank",rel:"noopener",key:c,class:"\n        "+(t?"resource-author-item--byline":"")+"\n        "+(a?"resource-author-item--single-line":"")+"\n        "+(i?i:"")+"\n        resource-author-item\n      ","aria-label":"Author information - "+o.name},r("div",{class:"resource-author"},r("img",{loading:"lazy",class:"author-avatar",src:o.avatar,alt:o.name}),r("div",{class:"author-info"},r("div",{class:"author-name"},o.name),o.title?r("div",{class:"author-title"},o.title):null))):null};var x="https://ionicframework.com";var _=function(){return"/resources/"};var k=function(e){var r=b(e);return""+x+_()+r};var z=function(e){var r=e;if(r.doc.data.content_url&&r.doc.data.content_url.url){return u.Link.url(r.doc.data.content_url,y)}switch(e.type){case l.Article:case l.Webinar:case l.CaseStudy:case l.CustomerInterview:case l.Whitepaper:return k(e.type)+"/"+e.id;case l.Video:return C(e);default:return k(e.type)+"/"+e.id}};var C=function(e){var r=e;if(r.doc.data.wistia_id){return"https://ionicpro.wistia.com/medias/"+r.doc.data.wistia_id}else if(r.doc.data.youtube_id){return"https://www.youtube.com/watch?v="+r.doc.data.youtube_id}return""};var j=function(e){var o=e.resource;var t;return r("div",{class:"resource-meta"},r("div",{class:"type"},o.type),r("div",{class:"tags"},(t=o.tags)===null||t===void 0?void 0:t.map((function(e,t){return[r("span",null,e),t<o.tags.length-1?r(W,null):null]}))))};var W=function(){return r("span",{class:"sep"})};var I=function(e){if(e.hero){return r(B,Object.assign({},e))}switch(e.resource.type){case l.Whitepaper:return r(D,Object.assign({},e));default:return r(B,Object.assign({},e))}};var B=function(e){var o=e.resource,t=e.headingLevel,i=t===void 0?3:t,c=e.showAuthor,n=c===void 0?true:c,u=e.showImage,l=u===void 0?true:u,d=e.showDescription,m=d===void 0?true:d,p=e.metaTop,f=p===void 0?false:p,h=e.key;return r(a,{embelish:false,class:"resource-card"+(f?" resource-card--meta-top":""),key:h},f&&r(j,{resource:o}),l&&r("a",{href:z(o),class:"resource-card__image"},r(L,{resource:o})),!f&&r(j,{resource:o}),r("div",{class:"resource-card__content"},r("a",{href:z(o)},r(s,{level:i},o.title)),m&&r("p",null,o.description)),n&&r(w,{author:o.authors[0]}))};var D=function(e){var o=e.resource;return r(a,{embelish:false,class:"resource-card resource-card--ad",key:e.key},r("a",{href:z(e.resource)},r(s,{level:3},o.doc.data.ad||o.title),r(L,{resource:e.resource})))};var L=function(e){var o=e.resource;return r("img",{loading:"lazy",class:"resource-card__featured-image",src:o.heroImage,alt:o.title})};var P='.sc-more-resources-h{display:block}.resource-meta.sc-more-resources{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;letter-spacing:var(--letter-spacing-5);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.resource-meta.sc-more-resources .type.sc-more-resources{font-weight:500;font-size:10px;color:var(--c-carbon-900);text-transform:uppercase;margin-right:24px}@media (max-width: 768px){.resource-meta.sc-more-resources .type.sc-more-resources{margin-right:0}}.resource-meta.sc-more-resources .tags.sc-more-resources{color:var(--c-indigo-600);font-size:10px;text-transform:uppercase}.resource-meta.sc-more-resources .tags.sc-more-resources span.sc-more-resources{display:inline-block}.resource-meta.sc-more-resources .tags.sc-more-resources .sep.sc-more-resources{display:inline-block;height:11px;width:1px;margin:0 6px -2px;background:var(--c-indigo-300)}@media (max-width: 768px){.resource-meta.sc-more-resources{-ms-flex-direction:column;flex-direction:column;gap:8px}}.resource-card.sc-more-resources{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%}.resource-card.sc-more-resources a.sc-more-resources{color:var(--c-carbon-900)}.resource-card.sc-more-resources h1.sc-more-resources,.resource-card.sc-more-resources h2.sc-more-resources,.resource-card.sc-more-resources h3.sc-more-resources,.resource-card.sc-more-resources h4.sc-more-resources,.resource-card.sc-more-resources h5.sc-more-resources{margin-top:0}.resource-card.sc-more-resources p.sc-more-resources{color:var(--c-indigo-900);font-size:16px;line-height:160%}.resource-card.sc-more-resources .resource-meta.sc-more-resources{margin-bottom:12px}.resource-card__content.sc-more-resources{-ms-flex:1;flex:1}.resource-card--meta-top.sc-more-resources .resource-meta.sc-more-resources{margin-bottom:24px}.resource-card__image.sc-more-resources{display:block;overflow:hidden;margin-bottom:24px;line-height:0}.resource-card__featured-image.sc-more-resources{max-width:100%;-webkit-transition:200ms -webkit-transform cubic-bezier(0.32, 0.72, 0, 1);transition:200ms -webkit-transform cubic-bezier(0.32, 0.72, 0, 1);transition:200ms transform cubic-bezier(0.32, 0.72, 0, 1);transition:200ms transform cubic-bezier(0.32, 0.72, 0, 1), 200ms -webkit-transform cubic-bezier(0.32, 0.72, 0, 1)}.resource-card__featured-image.sc-more-resources:hover{-webkit-transform:scale(1.05);transform:scale(1.05)}.resource-card--ad.sc-more-resources{background:var(--c-indigo-200);padding:30px}.resource-author-item.sc-more-resources .resource-author.sc-more-resources{display:grid;grid-template-columns:32px 1fr;-webkit-column-gap:8px;-moz-column-gap:8px;column-gap:8px}.resource-author-item.sc-more-resources .author-info.sc-more-resources{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.resource-author-item.sc-more-resources .author-avatar.sc-more-resources{max-height:32px;border-radius:100%}.resource-author-item.sc-more-resources .author-name.sc-more-resources{font-size:14px;color:var(--c-carbon-900)}.resource-author-item.sc-more-resources .author-title.sc-more-resources{font-size:12px;color:var(--c-indigo-600)}.resource-author-item--single-line.sc-more-resources .author-info.sc-more-resources{display:block;line-height:32px}.resource-author-item--single-line.sc-more-resources .author-info.sc-more-resources .author-name.sc-more-resources{display:inline-block;vertical-align:middle;font-size:16px;color:var(--c-indigo-700)}.resource-author-item--single-line.sc-more-resources .author-info.sc-more-resources .author-name.sc-more-resources:after{content:", "}.resource-author-item--single-line.sc-more-resources .author-info.sc-more-resources .author-title.sc-more-resources{display:inline-block;vertical-align:middle;font-size:16px;margin-left:2px;color:var(--c-indigo-700)}';var A=e("more_resources",function(){function e(e){o(this,e);this.prismicEndpoint="https://ionicframeworkcom.cdn.prismic.io/api/v2"}e.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){var e,r,o,t;return __generator(this,(function(s){switch(s.label){case 0:console.log("Loaded resources",this.resources);e=m(this.prismicEndpoint);r=this.resources.map((function(r){return e.getByUID(r.type,r.uid,null)}));s.label=1;case 1:s.trys.push([1,4,,5]);o=this;return[4,Promise.all(r)];case 2:return[4,s.sent().map((function(e){return f(e)}))];case 3:o.docs=s.sent();return[3,5];case 4:t=s.sent();console.error("Unable to load more resources",t);return[3,5];case 5:return[2]}}))}))};e.prototype.render=function(){return r(t,null,r(i,null,this.docs.map((function(e){return r(c,{md:4,sm:4,xs:12,cols:12,key:e.id},r(I,{resource:e,showDescription:false,showAuthor:false}))}))))};return e}());A.style=P}}}));