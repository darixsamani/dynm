(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),l=n.n(o),i=(n(125),n(44)),c=(n(127),n(128),n(130),n(206)),u=n(78),s=n(116),m=n(117),f=n(207),d=n(205),p=function(e){e.add;var t=e.options,n=(e.OnDeleteOption,e.index),a=e.OnAddhesiveSelect,o=e.onRemoveAdhesive,l=e.OnAddhesiveElmSelect;console.log(n);var i=f.a.Option;return r.a.createElement("div",{style:{display:"flex",gap:"8px",flexDirection:"row"}},r.a.createElement(f.a,{style:{width:"130px"},onChange:function(e){return a(e,n)}},t.map(function(e,t){return r.a.createElement(i,{key:t,value:e},e)})),r.a.createElement(d.a,{type:"text",placeholder:"Entre une value",onChange:function(e){return l(n,e.target.value)}}),0!==n&&r.a.createElement(u.a,{type:"primary",danger:!0,onClick:function(){return o(n)}},"Remove"))},v=n(208),y=n(209),g=n(113),h=n(204);function E(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){i=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(i)throw o}}}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var O=function(){var e=Object(a.useState)([{option:["name","brand","family"],name:""}]),t=Object(i.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)(!1),c=Object(i.a)(l,2),s=(c[0],c[1],f.a.Option,function(e){console.log(e,"remove"),o(n.filter(function(t,n){return n!=e}))}),d=function(e,t){var a=[];console.log(e,t);var r,l=E(n.entries());try{for(l.s();!(r=l.n()).done;){var c=r.value,u=Object(i.a)(c,2),s=u[0],m=u[1];e===s?a.push({option:m.option,name:t}):a.push(m)}}catch(f){l.e(f)}finally{l.f()}console.log(a),o(a)};return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,n.map(function(e,t){return r.a.createElement(p,{index:t,key:t,options:e.option,OnAddhesiveSelect:(c[0],c[1],f.a.Option,function(e,t){var a,r=[],l=E(n.entries());try{for(l.s();!(a=l.n()).done;){var c=a.value,u=Object(i.a)(c,2),s=u[0],m=u[1];s!=t?(console.log(t,m),console.log(m.option.filter(function(t){return t!=e})),r.push({option:["name","brand","family"].filter(function(t){return t!=e}),name:m.name})):(console.log(m),r.push(m)),o(r)}}catch(f){l.e(f)}finally{l.f()}console.log(n)}),onRemoveAdhesive:s,OnAddhesiveElmSelect:d})}),r.a.createElement(u.a,{type:"dashed",icon:r.a.createElement(v.a,null),onClick:function(){n.length>2?g.a.open({message:"Notifcation",description:"Vous ne pouvez ajouter que 3 Elements",onClick:function(){console.log("Notification Clicked!")}}):o([].concat(Object(m.a)(n),[n[0]]))}},"AddKey Value"),r.a.createElement(h.a.Dragger,{name:"files",action:"/upload.do"},r.a.createElement("p",{className:"ant-upload-drag-icon"},r.a.createElement(y.a,null)),r.a.createElement("p",{className:"ant-upload-text"},"Click or drag file to upload PDF"))))},C=function(){return r.a.createElement("div",null,"keywords Elements")},A=c.a.Step,S=[{title:"Create Adhesive",content:r.a.createElement(O,null)},{title:"Create KeyWord",content:r.a.createElement(C,null)}],k=function(){var e=r.a.useState(0),t=Object(i.a)(e,2),n=t[0],a=t[1];return r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("div",{className:"main"},r.a.createElement(c.a,{current:n},S.map(function(e){return r.a.createElement(A,{key:e.title,title:e.title})})),r.a.createElement("div",{className:"steps-content"},S[n].content),r.a.createElement("div",{className:"steps-action"},n<S.length-1&&r.a.createElement(u.a,{type:"primary",onClick:function(){a(n+1)}},"Create Adhesive"),n===S.length-1&&r.a.createElement(u.a,{type:"primary",onClick:function(){return s.b.success("Processing complete!")}},"Save Adhesive"),n>0&&r.a.createElement(u.a,{style:{margin:"0 8px"},onClick:function(){a(n-1)}},"Previous"))))},w=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,203)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,l=t.getTTFB;n(e),a(e),r(e),o(e),l(e)})};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),w()},120:function(e,t,n){e.exports=n(115)},125:function(e,t,n){},127:function(e,t,n){e.exports=n.p+"static/media/logo.06e73328.svg"},128:function(e,t,n){}},[[120,3,2]]]);
//# sourceMappingURL=main.ec2fee38.chunk.js.map