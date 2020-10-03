let a=document.createElement("style");a.innerHTML="",document.head.appendChild(a);import{S as s,i as n,s as t,c as o,a as e,m as p,t as c,b as l,d as r,g as i,h as u,j as d,k,l as m,n as h,o as g,p as f,N as M,q as $,r as b,Y as v}from"./index.c2c9d961.js";import"./Button.37430222.js";import"./index.af83b04a.js";import{C,P as x}from"./Preview.4c9c0c28.js";import"./ChevronDown16.d70ae9ed.js";import"./Loading.8dea5962.js";import"./Column.2e03e551.js";import"./Content.94950662.js";import"./store.a9279dc1.js";function y(a){let s,n,t,o,e,p,c,l,r,v;return{c(){s=i("div"),n=i("ul"),t=i("li"),o=i("a"),e=u("Usage"),p=d(),c=i("ul"),l=i("li"),r=i("a"),v=u("Composed modal"),this.h()},l(a){s=k(a,"DIV",{slot:!0});var i=m(s);n=k(i,"UL",{class:!0});var u=m(n);t=k(u,"LI",{class:!0});var d=m(t);o=k(d,"A",{class:!0,href:!0});var M=m(o);e=h(M,"Usage"),M.forEach(g),p=f(d),c=k(d,"UL",{class:!0});var $=m(c);l=k($,"LI",{class:!0});var b=m(l);r=k(b,"A",{class:!0,href:!0});var C=m(r);v=h(C,"Composed modal"),C.forEach(g),b.forEach(g),$.forEach(g),d.forEach(g),u.forEach(g),i.forEach(g),this.h()},h(){M(o,"class","bx--link"),M(o,"href","#usage"),M(r,"class","bx--link"),M(r,"href","#composed-modal"),M(l,"class","bx--list__item"),M(c,"class","bx--list--unordered bx--list--nested"),M(t,"class","bx--list__item"),M(n,"class","bx--list--unordered"),M(s,"slot","aside")},m(a,i){$(a,s,i),b(s,n),b(n,t),b(t,o),b(o,e),b(t,p),b(t,c),b(c,l),b(l,r),b(r,v)},d(a){a&&g(s)}}}function j(a){let s,n,t,C,y,j;return C=new x({props:{framed:!0,src:"/framed/Modal/ComposedModal",codeRaw:'<script>\n  import {\n    ComposedModal,\n    ModalHeader,\n    ModalBody,\n    ModalFooter,\n    Checkbox,\n  } from "carbon-components-svelte";\n\n  let checked = false;\n<\/script>\n\n<ComposedModal open>\n  <ModalHeader title="Confirm changes" />\n  <ModalBody hasForm>\n    <Checkbox labelText="I have reviewed the changes" bind:checked />\n  </ModalBody>\n  <ModalFooter primaryButtonText="Proceed" primaryButtonDisabled={!checked} />\n</ComposedModal>\n',code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span>\n    ComposedModal<span class="token punctuation">,</span>\n    ModalHeader<span class="token punctuation">,</span>\n    ModalBody<span class="token punctuation">,</span>\n    ModalFooter<span class="token punctuation">,</span>\n    Checkbox<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"carbon-components-svelte"</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> checked <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ComposedModal</span> <span class="token attr-name">open</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ModalHeader</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Confirm changes<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ModalBody</span> <span class="token attr-name">hasForm</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token attr-name">labelText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>I have reviewed the changes<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>checked</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ModalBody</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ModalFooter</span> <span class="token attr-name">primaryButtonText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Proceed<span class="token punctuation">"</span></span> <span class="token attr-name">primaryButtonDisabled=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token operator">!</span>checked<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ComposedModal</span><span class="token punctuation">></span></span>\n'}}),{c(){s=i("h3"),n=u("Composed modal"),t=d(),o(C.$$.fragment),y=d(),this.h()},l(a){s=k(a,"H3",{id:!0});var o=m(s);n=h(o,"Composed modal"),o.forEach(g),t=f(a),e(C.$$.fragment,a),y=f(a),this.h()},h(){M(s,"id","composed-modal")},m(a,o){$(a,s,o),b(s,n),$(a,t,o),p(C,a,o),$(a,y,o),j=!0},p:v,i(a){j||(c(C.$$.fragment,a),j=!0)},o(a){l(C.$$.fragment,a),j=!1},d(a){a&&g(s),a&&g(t),r(C,a),a&&g(y)}}}function B(a){let s,n;return s=new C({props:{$$slots:{default:[j],aside:[y]},$$scope:{ctx:a}}}),{c(){o(s.$$.fragment)},l(a){e(s.$$.fragment,a)},m(a,t){p(s,a,t),n=!0},p(a,[n]){const t={};1&n&&(t.$$scope={dirty:n,ctx:a}),s.$set(t)},i(a){n||(c(s.$$.fragment,a),n=!0)},o(a){l(s.$$.fragment,a),n=!1},d(a){r(s,a)}}}export default class extends s{constructor(a){super(),n(this,a,null,B,t,{})}}