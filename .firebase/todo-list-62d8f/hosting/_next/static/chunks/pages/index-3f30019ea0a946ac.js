(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9748)}])},9748:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return u}});var a=t(5893);t(5675);var l=t(7294),d=t(1733),i=t(7957),r=t(3050),o=t(3735),n=t(6100),c=e=>{var s;let{date:t,discription:l,id:c}=e,u=null===(s=r.I.currentUser)||void 0===s?void 0:s.uid,x=async e=>{let s=(0,n.hJ)(r.db,"users"),t=(0,n.JU)(s,u),a=(0,n.hJ)(t,"todo list data"),l=(0,n.JU)(a,e);await (0,n.oe)(l)};return(0,a.jsx)("div",{className:"flex border-2 rounded-lg border-gray-800 px-5 m-3 sm:flex-row hover:border-indigo-500 ",children:(0,a.jsxs)("div",{className:" flex-auto",children:[(0,a.jsx)("h2",{className:"text-white text-lg title-font font-medium mb-3",children:t}),(0,a.jsx)("p",{className:"leading-relaxed text-base",children:l}),(0,a.jsxs)("div",{className:"-mx-3",children:[(0,a.jsx)(o.Z,{sx:{color:"red"},onClick:e=>x(c),children:(0,a.jsx)(d.Z,{})}),(0,a.jsx)(o.Z,{sx:{color:"#980DFF"},children:(0,a.jsx)(i.Z,{className:" "})})]})]})})};function u(){var e;let[s,t]=(0,l.useState)([]),[d,i]=(0,l.useState)(""),o=r.I.currentUser?null===(e=r.I.currentUser)||void 0===e?void 0:e.uid:null;return(0,l.useEffect)(()=>{let e=async()=>{if(console.log(o),o){let e=(0,n.hJ)(r.db,"users"),s=(0,n.JU)(e,o),a=(0,n.hJ)(s,"todo list data");try{let e=await (0,n.PL)(a);console.log(e),t(e.docs.map(e=>({id:e.id,data:e.data()})))}catch(e){i(e)}}else t([]),i("Please login to view your todo list ")};e()},[o]),console.log(s),console.log(d),(0,a.jsx)("div",{className:" ",children:(0,a.jsx)("section",{className:"text-gray-400 body-font bg-[url('/images/144565.jpg')] bg-no-repeat bg-fixed bg-cover",children:(0,a.jsx)("div",{className:"container px-5 py-24 mx-auto flex flex-wrap",children:(0,a.jsx)("div",{className:"flex flex-wrap -m-4",children:(0,a.jsx)("div",{className:"p-3 lg:w-11/12 md:w-1/2",children:o?s.map(e=>(0,a.jsx)(c,{date:e.data.gettododata.date,discription:e.data.gettododata.discription,id:e.id})):(0,a.jsx)("h1",{className:"text-white",children:d})})})})})})}}},function(e){e.O(0,[711,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);