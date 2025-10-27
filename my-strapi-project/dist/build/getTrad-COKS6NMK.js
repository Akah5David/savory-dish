import{r as i,gH as kn,da as ho,gI as ae,j as n,gJ as oe,gK as Rn,gL as mo,gM as Z,gN as xe,gO as Xe,gP as Ge,gQ as An,d9 as at,gR as Ra,gS as En,gT as Aa,gU as Ea,gV as Pn,gW as Jt,gX as go,gY as xo,gZ as Mn,g_ as Dn,g$ as rn,h0 as Pa,h1 as Ma,h2 as Da,g as x,g3 as E,h3 as Nn,h4 as On,h5 as Ln,h6 as Na,h7 as Oa,h8 as La,h9 as Va,ha as _a,hb as Fa,hc as Vn,hd as _n,he as Fn,hf as Ba,hg as za,cV as ie,hh as Wa,hi as qa,hj as Ua,hk as Me,hl as Ha,hm as Ga,hn as Ka,ho as Ya,hp as Qa,hq as Za,hr as Xa,hs as Ja,ht as Bn,hu as es,hv as ts,hw as os,hx as ns,hy as bo,hz as rs,hA as as,hB as ss,hC as is,hD as ls,hE as zn,hF as cs,hG as ds,hH as us,hI as fs,hJ as Ke,hK as Wn,hL as eo,hM as $o,hN as ps,hO as to,hP as oo,hQ as hs,hR as ms,hS as gs,hT as xs,hU as bs,hV as $s,hW as ys,hX as qn,hY as ws,hZ as Un,h_ as Cs,h$ as vs,i0 as Ts,i1 as js,i2 as Ss,i3 as Is,i4 as Hn,i5 as Gn,i6 as ks,i7 as Rs,i8 as As,i9 as Es,ia as Ps,ib as Ms,ic as Ds,id as Ns,ie as Os,ig as Ls,ih as Vs,ii as _s,ij as Fs,ik as Bs,il as zs,im as Ws,io as qs,ip as Us,iq as Hs,ir as Gs,is as Ks,it as Ys,iu as Qs,iv as Zs,iw as Xs,ix as Js,iy as ei,dY as ti,iz as oi,iA as ni,iB as ri,iC as ai,iD as si,iE as ii,iF as Kn,iG as li,iH as ci,cF as di,iI as ui,iJ as fi,iK as pi,iL as hi,dn as mi,u as gi,iM as Fe,aM as Yn,bs as Qn,iN as xi,b5 as Mt,bj as bi,b6 as pe,bd as yo,iO as $i,iP as yi,iQ as wi,iR as an,iS as Ci,iT as vi,iU as Ti}from"./strapi-CIRK5K0V.js";var ji=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Ye=new WeakMap,jt=new WeakMap,St={},Kt=0,Zn=function(e){return e&&(e.host||Zn(e.parentNode))},Si=function(e,t){return t.map(function(o){if(e.contains(o))return o;var r=Zn(o);return r&&e.contains(r)?r:(console.error("aria-hidden",o,"in not contained inside",e,". Doing nothing"),null)}).filter(function(o){return!!o})},Ii=function(e,t,o,r){var a=Si(t,Array.isArray(e)?e:[e]);St[o]||(St[o]=new WeakMap);var s=St[o],c=[],l=new Set,u=new Set(a),h=function(m){!m||l.has(m)||(l.add(m),h(m.parentNode))};a.forEach(h);var f=function(m){!m||u.has(m)||Array.prototype.forEach.call(m.children,function(d){if(l.has(d))f(d);else try{var p=d.getAttribute(r),g=p!==null&&p!=="false",b=(Ye.get(d)||0)+1,w=(s.get(d)||0)+1;Ye.set(d,b),s.set(d,w),c.push(d),b===1&&g&&jt.set(d,!0),w===1&&d.setAttribute(o,"true"),g||d.setAttribute(r,"true")}catch(y){console.error("aria-hidden: cannot operate on ",d,y)}})};return f(t),l.clear(),Kt++,function(){c.forEach(function(m){var d=Ye.get(m)-1,p=s.get(m)-1;Ye.set(m,d),s.set(m,p),d||(jt.has(m)||m.removeAttribute(r),jt.delete(m)),p||m.removeAttribute(o)}),Kt--,Kt||(Ye=new WeakMap,Ye=new WeakMap,jt=new WeakMap,St={})}},Xn=function(e,t,o){o===void 0&&(o="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=ji(e);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),Ii(r,a,o,"aria-hidden")):function(){return null}};function ki(e){const t=`${e}CollectionProvider`,[o,r]=kn(t),[a,s]=o(t,{collectionRef:{current:null},itemMap:new Map,listeners:new Set}),c=p=>{const{scope:g,children:b}=p,w=i.useRef(null),y=i.useRef(new Map).current,$=i.useRef(new Set).current;return n.jsx(a,{scope:g,itemMap:y,collectionRef:w,listeners:$,children:b})};c.displayName=t;const l=`${e}CollectionSlot`,u=i.forwardRef((p,g)=>{const{scope:b,children:w}=p,y=s(l,b),$=ae(g,y.collectionRef);return n.jsx(Jt,{ref:$,children:w})});u.displayName=l;const h=`${e}CollectionItemSlot`,f="data-radix-collection-item",m=i.forwardRef((p,g)=>{const{scope:b,children:w,...y}=p,$=i.useRef(null),C=ae(g,$),v=s(h,b);return i.useEffect(()=>{const T=Array.from(v.itemMap.values());return v.itemMap.set($,{ref:$,...y}),v.listeners.forEach(S=>S(Array.from(v.itemMap.values()),T)),()=>{const S=Array.from(v.itemMap.values());v.itemMap.delete($),v.listeners.forEach(j=>j(Array.from(v.itemMap.values()),S))}}),n.jsx(Jt,{[f]:"",ref:C,children:w})});m.displayName=h;function d(p){const g=s(`${e}CollectionConsumer`,p),b=i.useCallback(()=>{const y=g.collectionRef.current;if(!y)return[];const $=Array.from(y.querySelectorAll(`[${f}]`));return Array.from(g.itemMap.values()).sort((T,S)=>$.indexOf(T.ref.current)-$.indexOf(S.ref.current))},[g.collectionRef,g.itemMap]),w=i.useCallback(y=>(g.listeners.add(y),()=>g.listeners.delete(y)),[g.listeners]);return{getItems:b,subscribe:w}}return[{Provider:c,Slot:u,ItemSlot:m},d,r]}const Yt=new Map;function Ri(e,t){const o=e+(t?Object.entries(t).sort((a,s)=>a[0]<s[0]?-1:1).join():"");if(Yt.has(o))return Yt.get(o);const r=new Intl.Collator(e,t);return Yt.set(o,r),r}function wo(e,t){const o=Ri(e,{usage:"search",...t});return{startsWith(r,a){return a.length===0?!0:(r=r.normalize("NFC"),a=a.normalize("NFC"),o.compare(r.slice(0,a.length),a)===0)},endsWith(r,a){return a.length===0?!0:(r=r.normalize("NFC"),a=a.normalize("NFC"),o.compare(r.slice(-a.length),a)===0)},contains(r,a){if(a.length===0)return!0;r=r.normalize("NFC"),a=a.normalize("NFC");let s=0;const c=a.length;for(;s+c<=r.length;s++){const l=r.slice(s,s+c);if(o.compare(a,l)===0)return!0}return!1}}}const Ai=e=>{const t=i.useRef();return i.useEffect(()=>{t.current=e}),t.current},Ei=[" ","Enter","ArrowUp","ArrowDown"],Pi=["Enter"],Mi=e=>!!(e.length===1&&e.match(/\S| /)),Jn="Combobox",[Je,mt]=ki(Jn),[Di,Se]=ho(Jn),Ni=({children:e})=>n.jsx(Pn,{children:n.jsx(Je.Provider,{scope:void 0,children:e})}),Oi=e=>typeof e=="string"?e==="none"?{type:e,filter:void 0}:{type:e,filter:"startsWith"}:e,Li=e=>{const{allowCustomValue:t=!1,autocomplete:o="none",children:r,open:a,defaultOpen:s,onOpenChange:c,value:l,defaultValue:u,onValueChange:h,disabled:f,required:m=!1,locale:d="en-EN",onTextValueChange:p,textValue:g,defaultTextValue:b,filterValue:w,defaultFilterValue:y,onFilterValueChange:$,isPrintableCharacter:C=Mi,visible:v=!1}=e,[T,S]=i.useState(null),[j,V]=i.useState(null),[D,L]=i.useState(null),[B,M]=i.useState(null),[A=!1,N]=Xe({prop:a,defaultProp:s,onChange:c}),[W,H]=Xe({prop:l,defaultProp:u,onChange:h}),[U,G]=Xe({prop:g,defaultProp:t&&!b?l:b,onChange:p}),[K,ee]=Xe({prop:w,defaultProp:y,onChange:$}),Y=Ge(),se=i.useCallback((ne,J)=>{const fe=J.map(O=>O.ref.current),[R,...z]=fe,[Q]=z.slice(-1),F=B??J.find(O=>O.value===W)?.ref.current;for(const O of ne){if(O===F)return;if(O?.scrollIntoView({block:"nearest"}),O===R&&j&&(j.scrollTop=0),O===Q&&j&&(j.scrollTop=j.scrollHeight),M(O),o==="both"){const q=J.find(ce=>ce.ref.current===O);q&&G(q.textValue)}if(O!==F)return}},[o,G,j,B,W]),_=Oi(o);return i.useEffect(()=>{o!=="both"&&M(null)},[U,o]),i.useEffect(()=>{if(D&&T)return Xn([D,T])},[D,T]),n.jsx(Ni,{children:n.jsx(Di,{allowCustomValue:t,autocomplete:_,required:m,trigger:T,onTriggerChange:S,contentId:Y,value:W,onValueChange:H,open:A,onOpenChange:N,disabled:f,locale:d,focusFirst:se,textValue:U,onTextValueChange:G,onViewportChange:V,onContentChange:L,visuallyFocussedItem:B,filterValue:K,onFilterValueChange:ee,onVisuallyFocussedItemChange:M,isPrintableCharacter:C,visible:v,children:r})})},er="ComboboxTrigger",tr=i.forwardRef((e,t)=>{const{...o}=e,r=Se(er),a=()=>{r.disabled||r.onOpenChange(!0)};return n.jsx(Rn,{asChild:!0,children:n.jsx(mo,{asChild:!0,trapped:r.open,onMountAutoFocus:s=>{s.preventDefault()},onUnmountAutoFocus:s=>{r.trigger?.focus({preventScroll:!0}),document.getSelection()?.empty(),s.preventDefault()},children:n.jsx("div",{ref:t,"data-disabled":r.disabled?"":void 0,...o,onClick:Z(o.onClick,s=>{if(r.disabled){s.preventDefault();return}r.trigger?.focus()}),onPointerDown:Z(o.onPointerDown,s=>{if(r.disabled){s.preventDefault();return}const c=s.target;c.hasPointerCapture(s.pointerId)&&c.releasePointerCapture(s.pointerId),(c.closest("button")??c.closest("div"))===s.currentTarget&&s.button===0&&s.ctrlKey===!1&&(a(),r.trigger?.focus())})})})})});tr.displayName=er;const or="ComboboxInput",nr=i.forwardRef((e,t)=>{const o=Se(or),r=i.useRef(null),{getItems:a}=mt(void 0),{startsWith:s}=wo(o.locale,{sensitivity:"base"}),c=o.disabled,l=ae(r,t,o.onTriggerChange),u=()=>{c||o.onOpenChange(!0)},h=Ai(o.filterValue);return xe(()=>{const f=setTimeout(()=>{if(o.textValue===""||o.textValue===void 0||o.filterValue===""||o.filterValue===void 0)return;const m=a().find(p=>p.type==="option"&&s(p.textValue,o.textValue)),d=Xi(h??"",o.filterValue);m&&!o.visuallyFocussedItem&&d===o.filterValue.length&&r.current?.setSelectionRange(o.filterValue.length,o.textValue.length)});return()=>clearTimeout(f)},[o.textValue,o.filterValue,s,o.visuallyFocussedItem,a,h]),n.jsx("input",{type:"text",role:"combobox","aria-controls":o.contentId,"aria-expanded":o.open,"aria-required":o.required,"aria-autocomplete":o.autocomplete.type,"data-state":o.open?"open":"closed","aria-disabled":c,"aria-activedescendant":o.visuallyFocussedItem?.id,disabled:c,"data-disabled":c?"":void 0,"data-placeholder":o.textValue===void 0?"":void 0,value:o.textValue??"",...e,ref:l,onKeyDown:Z(e.onKeyDown,f=>{if(["ArrowUp","ArrowDown","Home","End"].includes(f.key))o.open||u(),setTimeout(()=>{let d=a().filter(p=>!p.disabled&&p.isVisible).map(p=>p.ref.current);if(["ArrowUp","End"].includes(f.key)&&(d=d.slice().reverse()),["ArrowUp","ArrowDown"].includes(f.key)){const p=o.visuallyFocussedItem??a().find(g=>g.value===o.value)?.ref.current;if(p){let g=d.indexOf(p);g===d.length-1&&(g=-1),d=d.slice(g+1)}}if(["ArrowDown"].includes(f.key)&&o.autocomplete.type==="both"&&d.length>1){const[p,...g]=d,b=a().find(w=>w.ref.current===p).textValue;o.textValue===b&&(d=g)}o.focusFirst(d,a())}),f.preventDefault();else if(["Tab"].includes(f.key)&&o.open)f.preventDefault();else if(["Escape"].includes(f.key))o.open?o.onOpenChange(!1):(o.onValueChange(void 0),o.onTextValueChange("")),f.preventDefault();else if(Pi.includes(f.key)){if(o.visuallyFocussedItem){const m=a().find(d=>d.ref.current===o.visuallyFocussedItem);m&&(o.onValueChange(m.value),o.onTextValueChange(m.textValue),o.autocomplete.type==="both"&&o.onFilterValueChange(m.textValue),m.ref.current?.click())}else{const m=a().find(d=>d.type==="option"&&!d.disabled&&d.textValue===o.textValue);m&&(o.onValueChange(m.value),o.onTextValueChange(m.textValue),o.autocomplete.type==="both"&&o.onFilterValueChange(m.textValue),m.ref.current?.click())}o.onOpenChange(!1),f.preventDefault()}else o.onVisuallyFocussedItemChange(null)}),onChange:Z(e.onChange,f=>{o.onTextValueChange(f.currentTarget.value),o.autocomplete.type==="both"&&o.onFilterValueChange(f.currentTarget.value)}),onKeyUp:Z(e.onKeyUp,f=>{if(!o.open&&(o.isPrintableCharacter(f.key)||["Backspace"].includes(f.key))&&u(),setTimeout(()=>{if(o.autocomplete.type==="both"&&o.isPrintableCharacter(f.key)&&o.filterValue!==void 0){const m=o.filterValue,d=a().find(p=>s(p.textValue,m));d&&o.onTextValueChange(d.textValue)}}),o.autocomplete.type==="none"&&o.isPrintableCharacter(f.key)){const m=o.textValue??"",d=a().find(p=>s(p.textValue,m));d&&(o.onVisuallyFocussedItemChange(d.ref.current),d.ref.current?.scrollIntoView())}}),onBlur:Z(e.onBlur,()=>{if(o.open)return;o.onVisuallyFocussedItemChange(null);const[f]=a().filter(d=>d.textValue===o.textValue&&d.type==="option");if(f){o.onValueChange(f.value),o.autocomplete.type==="both"&&o.onFilterValueChange(f.textValue);return}if(o.allowCustomValue){o.onValueChange(o.textValue),o.autocomplete.type==="both"&&o.onFilterValueChange(o.textValue);return}const[m]=a().filter(d=>d.value===o.value&&d.type==="option");m&&o.textValue!==""?(o.onTextValueChange(m.textValue),o.autocomplete.type==="both"&&o.onFilterValueChange(m.textValue)):(o.onValueChange(void 0),o.onTextValueChange(""))})})});nr.displayName="ComboboxTextInput";const rr=i.forwardRef((e,t)=>{const{children:o,...r}=e,a=Se(or),s=a.disabled,c=()=>{s||(a.onOpenChange(!0),a.trigger?.focus())};return n.jsx(oe.button,{"aria-hidden":!0,type:"button","aria-disabled":s,"aria-controls":a.contentId,"aria-expanded":a.open,disabled:s,"data-disabled":s?"":void 0,...r,tabIndex:-1,ref:t,onClick:Z(r.onClick,()=>{a.trigger?.focus()}),onPointerDown:Z(r.onPointerDown,l=>{l.button===0&&l.ctrlKey===!1&&(c(),l.preventDefault())}),onKeyDown:Z(r.onKeyDown,l=>{Ei.includes(l.key)&&(c(),l.preventDefault())}),children:o||"▼"})});rr.displayName="ComboboxIcon";const Vi="ComboboxPortal",ar=e=>n.jsx(An,{asChild:!0,...e});ar.displayName=Vi;const Co="ComboboxContent",sr=i.forwardRef((e,t)=>{const o=Se(Co),{getItems:r}=mt(void 0),[a,s]=i.useState();if(xe(()=>{s(new DocumentFragment)},[]),xe(()=>{o.open&&o.autocomplete.type==="none"&&setTimeout(()=>{r().find(l=>l.value===o.value)?.ref.current?.scrollIntoView({block:"nearest"})})},[r,o.autocomplete,o.value,o.open]),!o.open){const c=a;return c?at.createPortal(n.jsx(Je.Slot,{scope:void 0,children:n.jsx("div",{children:e.children})}),c):null}return n.jsx(ir,{...e,ref:t})});sr.displayName=Co;const _i=10,ir=i.forwardRef((e,t)=>{const{onEscapeKeyDown:o,onPointerDownOutside:r,...a}=e,s=Se(Co),c=ae(t,u=>s.onContentChange(u)),{onOpenChange:l}=s;return go(),i.useEffect(()=>{const u=()=>{l(!1)};return window.addEventListener("blur",u),window.addEventListener("resize",u),()=>{window.removeEventListener("blur",u),window.removeEventListener("resize",u)}},[l]),n.jsx(xo,{allowPinchZoom:!0,children:n.jsx(Mn,{asChild:!0,onEscapeKeyDown:o,onPointerDownOutside:r,onFocusOutside:u=>{u.preventDefault()},onDismiss:()=>{s.onOpenChange(!1),s.trigger?.focus({preventScroll:!0})},children:n.jsx(lr,{role:"listbox",id:s.contentId,"data-state":s.open?"open":"closed",onContextMenu:u=>u.preventDefault(),...a,ref:c,style:{display:"flex",flexDirection:"column",outline:"none",...a.style}})})})});ir.displayName="ComboboxContentImpl";const lr=i.forwardRef((e,t)=>{const{align:o="start",collisionPadding:r=_i,...a}=e;return n.jsx(Dn,{...a,ref:t,align:o,collisionPadding:r,style:{boxSizing:"border-box",...a.style,"--radix-combobox-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-combobox-content-available-width":"var(--radix-popper-available-width)","--radix-combobox-content-available-height":"var(--radix-popper-available-height)","--radix-combobox-trigger-width":"var(--radix-popper-anchor-width)","--radix-combobox-trigger-height":"var(--radix-popper-anchor-height)"}})});lr.displayName="ComboboxPopperPosition";const cr="ComboboxViewport",dr=i.forwardRef((e,t)=>{const o=Se(cr),r=ae(t,o.onViewportChange);return n.jsxs(n.Fragment,{children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-combobox-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-combobox-viewport]::-webkit-scrollbar{display:none}"}}),n.jsx(Je.Slot,{scope:void 0,children:n.jsx(oe.div,{"data-radix-combobox-viewport":"",role:"presentation",...e,ref:r,style:{position:"relative",flex:1,overflow:"auto",...e.style}})})]})});dr.displayName=cr;const Dt="ComboboxItem",[sn,vo]=ho(Dt),To=i.forwardRef((e,t)=>{const{value:o,disabled:r=!1,textValue:a,...s}=e,[c,l]=i.useState();xe(()=>{l(new DocumentFragment)},[]);const{onTextValueChange:u,textValue:h,...f}=Se(Dt),m=Ge(),[d,p]=i.useState(a??""),g=f.value===o,{startsWith:b,contains:w}=wo(f.locale,{sensitivity:"base"}),y=i.useCallback($=>{p(C=>C||($?.textContent??"").trim())},[]);return i.useEffect(()=>{g&&h===void 0&&d!==""&&u(d)},[d,g,h,u]),f.autocomplete.type==="both"&&d&&f.filterValue&&!b(d,f.filterValue)||f.autocomplete.type==="list"&&f.autocomplete.filter==="startsWith"&&d&&h&&!b(d,h)||f.autocomplete.type==="list"&&f.autocomplete.filter==="contains"&&d&&h&&!w(d,h)?c?at.createPortal(n.jsx(sn,{textId:m,onTextValueChange:y,isSelected:g,textValue:d,children:n.jsx(Je.ItemSlot,{scope:void 0,value:o,textValue:d,disabled:r,type:"option",isVisible:!1,children:n.jsx(no,{ref:t,value:o,disabled:r,...s})})}),c):null:n.jsx(sn,{textId:m,onTextValueChange:y,isSelected:g,textValue:d,children:n.jsx(Je.ItemSlot,{scope:void 0,value:o,textValue:d,disabled:r,type:"option",isVisible:!0,children:n.jsx(no,{ref:t,value:o,disabled:r,...s})})})});To.displayName=Dt;const ur="ComboboxItemImpl",no=i.forwardRef((e,t)=>{const{value:o,disabled:r=!1,...a}=e,s=i.useRef(null),c=ae(t,s),{getItems:l}=mt(void 0),{onTextValueChange:u,visuallyFocussedItem:h,...f}=Se(Dt),{isSelected:m,textValue:d,textId:p}=vo(ur),g=()=>{r||(f.onValueChange(o),u(d),f.onOpenChange(!1),f.autocomplete.type==="both"&&f.onFilterValueChange(d),f.trigger?.focus({preventScroll:!0}))},b=i.useMemo(()=>h===l().find(y=>y.ref.current===s.current)?.ref.current,[l,h]),w=Ge();return n.jsx(oe.div,{role:"option","aria-labelledby":p,"data-highlighted":b?"":void 0,"aria-selected":m&&b,"data-state":m?"checked":"unchecked","aria-disabled":r||void 0,"data-disabled":r?"":void 0,tabIndex:r?void 0:-1,...a,id:w,ref:c,onPointerUp:Z(a.onPointerUp,g)})});no.displayName=ur;const fr="ComboboxItemText",pr=i.forwardRef((e,t)=>{const{className:o,style:r,...a}=e,s=vo(fr),c=ae(t,s.onTextValueChange);return n.jsx(oe.span,{id:s.textId,...a,ref:c})});pr.displayName=fr;const hr="ComboboxItemIndicator",mr=i.forwardRef((e,t)=>{const{isSelected:o}=vo(hr);return o?n.jsx(oe.span,{"aria-hidden":!0,...e,ref:t}):null});mr.displayName=hr;const jo="ComboboxNoValueFound",gr=i.forwardRef((e,t)=>{const{textValue:o="",filterValue:r="",visible:a=!1,locale:s,autocomplete:c}=Se(jo),[l,u]=i.useState([]),{subscribe:h}=mt(void 0),{startsWith:f,contains:m}=wo(s,{sensitivity:"base"});return i.useEffect(()=>{const d=h(p=>{if(a){const g=p.filter(b=>b.type!=="create");u(g)}else u(p)});return()=>{d()}},[a,h]),c.type==="none"&&l.length>0||c.type==="list"&&c.filter==="startsWith"&&l.some(d=>f(d.textValue,o))||c.type==="both"&&l.some(d=>f(d.textValue,r))||c.type==="list"&&c.filter==="contains"&&l.some(d=>m(d.textValue,o))?null:n.jsx(oe.div,{...e,ref:t})});gr.displayName=jo;const xr=i.forwardRef((e,t)=>{const{disabled:o=!1,...r}=e,a=Se(jo),{textValue:s,visuallyFocussedItem:c}=a,{getItems:l,subscribe:u}=mt(void 0),h=i.useRef(null),[f,m]=i.useState(!1),d=ae(t,h),p=i.useMemo(()=>c===l().find(w=>w.ref.current===h.current)?.ref.current,[l,c]),g=Ge(),b=()=>{!o&&s&&(a.onValueChange(s),a.onTextValueChange(s),a.onOpenChange(!1),a.autocomplete.type==="both"&&a.onFilterValueChange(s),a.trigger?.focus({preventScroll:!0}))};return xe(()=>{const w=u(y=>{m(!y.some($=>$.textValue===s&&$.type!=="create"))});return l().length===0&&m(!0),()=>{w()}},[s,u,l]),(!s||!f)&&!a.visible?null:n.jsx(Je.ItemSlot,{scope:void 0,value:s??"",textValue:s??"",disabled:o,isVisible:!0,type:"create",children:n.jsx(oe.div,{role:"option",tabIndex:o?void 0:-1,"aria-disabled":o||void 0,"data-disabled":o?"":void 0,"data-highlighted":p?"":void 0,...r,id:g,ref:d,onPointerUp:Z(r.onPointerUp,b)})})});xr.displayName="ComboboxCreateItem";const Fi=Li,Bi=tr,zi=nr,Wi=rr,qi=ar,Ui=sr,Hi=dr,Gi=To,Ki=pr,Yi=mr,Qi=gr,Zi=xr;function Xi(e,t){const o=Math.min(e.length,t.length);for(let r=0;r<o;r++)if(e[r]!==t[r])return r;return o}const $e=Object.freeze(Object.defineProperty({__proto__:null,ComboboxItem:To,Content:Ui,CreateItem:Zi,Icon:Wi,Item:Gi,ItemIndicator:Yi,ItemText:Ki,NoValueFound:Qi,Portal:qi,Root:Fi,TextInput:zi,Trigger:Bi,Viewport:Hi},Symbol.toStringTag,{value:"Module"}));function So(e){const t=i.useRef(e);return i.useEffect(()=>{t.current=e}),i.useMemo(()=>(...o)=>t.current?.(...o),[])}const Ji=[" ","Enter","ArrowUp","ArrowDown"],el=[" ","Enter"],gt="Select",[Nt,xt,tl]=Ra(gt),[st,ol]=kn(gt,[tl,En]),Ot=En(),[nl,Ee]=st(gt),[rl,al]=st(gt),Io=e=>{const{__scopeSelect:t,children:o,open:r,defaultOpen:a,onOpenChange:s,value:c,defaultValue:l,onValueChange:u,dir:h,disabled:f,required:m,multi:d=!1}=e,p=Ot(t),[g,b]=i.useState(null),[w,y]=i.useState(null),[$,C]=i.useState(!1),v=Ea(h),[T=!1,S]=Xe({prop:r,defaultProp:a,onChange:s}),[j,V]=Xe({prop:c,defaultProp:l,onChange(M){u&&(Array.isArray(M),u(M))}}),D=i.useRef(null),[L,B]=i.useState(new Set);return n.jsx(Pn,{...p,children:n.jsx(nl,{required:m,scope:t,trigger:g,onTriggerChange:b,valueNode:w,onValueNodeChange:y,valueNodeHasChildren:$,onValueNodeHasChildrenChange:C,contentId:Ge(),value:j,onValueChange:V,open:T,onOpenChange:S,dir:v,triggerPointerDownPosRef:D,disabled:f,multi:d,children:n.jsx(Nt.Provider,{scope:t,children:n.jsx(rl,{scope:e.__scopeSelect,onNativeOptionAdd:i.useCallback(M=>{B(A=>new Set(A).add(M))},[]),onNativeOptionRemove:i.useCallback(M=>{B(A=>{const N=new Set(A);return N.delete(M),N})},[]),children:o})})})})};Io.displayName=gt;const br="SelectTrigger",ko=i.forwardRef((e,t)=>{const{__scopeSelect:o,...r}=e,a=Ot(o),s=Ee(br,o),c=s.disabled,l=ae(t,s.onTriggerChange),u=xt(o),[h,f,m]=Ir(p=>{const g=u().filter(y=>!y.disabled),b=g.find(y=>y.value===s.value),w=kr(g,p,b);if(w!==void 0&&!Array.isArray(w.value)){const y=s.multi?[w.value]:w.value;s.onValueChange(y)}}),d=()=>{c||(s.onOpenChange(!0),m())};return n.jsx(Rn,{asChild:!0,...a,children:n.jsx(oe.div,{role:"combobox","aria-controls":s.contentId,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed","data-disabled":c?"":void 0,"data-placeholder":s.value===void 0?"":void 0,tabIndex:c?void 0:0,...r,ref:l,onClick:Z(r.onClick,p=>{p.currentTarget.focus()}),onPointerDown:Z(r.onPointerDown,p=>{const g=p.target;g.hasPointerCapture(p.pointerId)&&g.releasePointerCapture(p.pointerId),(g.closest("button")??g.closest("div"))===p.currentTarget&&p.button===0&&p.ctrlKey===!1&&(d(),s.triggerPointerDownPosRef.current={x:Math.round(p.pageX),y:Math.round(p.pageY)},p.preventDefault())}),onKeyDown:Z(r.onKeyDown,p=>{const g=h.current!=="",b=p.ctrlKey||p.altKey||p.metaKey,w=p.target;(w.closest("button")??w.closest("div"))===p.currentTarget&&(!b&&p.key.length===1&&f(p.key),!(g&&p.key===" ")&&Ji.includes(p.key)&&(d(),p.preventDefault()))})})})});ko.displayName=br;const $r="SelectValue",Ro=i.forwardRef((e,t)=>{const{__scopeSelect:o,children:r,placeholder:a,...s}=e,c=Ee($r,o),{onValueNodeHasChildrenChange:l}=c,u=r!==void 0,h=ae(t,c.onValueNodeChange),[f,m]=i.useState([]),d=xt(o);xe(()=>{l(u)},[l,u]),i.useLayoutEffect(()=>{if(Array.isArray(c.value)&&f.length!==c.value.length){const g=setTimeout(()=>{const b=d().filter(w=>Array.isArray(w.value)?!1:c.value?.includes(w.value));m(b)});return()=>{clearTimeout(g)}}},[c.value,d,f]);let p;if((c.value===void 0||c.value.length===0)&&a!==void 0)p=n.jsx("span",{children:a});else if(typeof r=="function")if(Array.isArray(c.value)){const g=c.value.map(b=>{const w=f.find(y=>y.value===b);return w?r({value:b,textValue:w?.textValue}):null});p=g.every(b=>b===null)?a:g}else p=r(c.value);else p=r;return n.jsx(oe.span,{...s,ref:h,children:p||null})});Ro.displayName=$r;const sl="SelectIcon",Ao=i.forwardRef((e,t)=>{const{__scopeSelect:o,children:r,...a}=e;return n.jsx(oe.span,{"aria-hidden":!0,...a,ref:t,children:r||"▼"})});Ao.displayName=sl;const il="SelectPortal",Eo=e=>n.jsx(An,{asChild:!0,...e});Eo.displayName=il;const We="SelectContent",Po=i.forwardRef((e,t)=>{const o=Ee(We,e.__scopeSelect),[r,a]=i.useState();if(xe(()=>{a(new DocumentFragment)},[]),!o.open){const s=r;return s?at.createPortal(n.jsx(yr,{scope:e.__scopeSelect,children:n.jsx(Nt.Slot,{scope:e.__scopeSelect,children:n.jsx("div",{children:e.children})})}),s):null}return n.jsx(wr,{...e,ref:t})});Po.displayName=We;const Re=10,[yr,Ne]=st(We),ll="SelectContentImpl",wr=i.forwardRef((e,t)=>{const{__scopeSelect:o,position:r="item-aligned",onCloseAutoFocus:a,onEscapeKeyDown:s,onPointerDownOutside:c,side:l,sideOffset:u,align:h,alignOffset:f,arrowPadding:m,collisionBoundary:d,collisionPadding:p,sticky:g,hideWhenDetached:b,avoidCollisions:w,...y}=e,$=Ee(We,o),[C,v]=i.useState(null),[T,S]=i.useState(null),j=ae(t,R=>v(R)),[V,D]=i.useState(null),[L,B]=i.useState(null),M=xt(o),[A,N]=i.useState(!1),W=i.useRef(!1);i.useEffect(()=>{if(C)return Xn(C)},[C]),go();const H=i.useCallback(R=>{const[z,...Q]=M().map(q=>q.ref.current),[F]=Q.slice(-1),O=document.activeElement;for(const q of R)if(q===O||(q?.scrollIntoView({block:"nearest"}),q===z&&T&&(T.scrollTop=0),q===F&&T&&(T.scrollTop=T.scrollHeight),q?.focus(),document.activeElement!==O))return},[M,T]),U=i.useCallback(()=>H([V,C]),[H,V,C]);i.useEffect(()=>{A&&U()},[A,U]);const{onOpenChange:G,triggerPointerDownPosRef:K}=$;i.useEffect(()=>{if(C){let R={x:0,y:0};const z=F=>{R={x:Math.abs(Math.round(F.pageX)-(K.current?.x??0)),y:Math.abs(Math.round(F.pageY)-(K.current?.y??0))}},Q=F=>{R.x<=10&&R.y<=10?F.preventDefault():C.contains(F.target)||G(!1),document.removeEventListener("pointermove",z),K.current=null};return K.current!==null&&(document.addEventListener("pointermove",z),document.addEventListener("pointerup",Q,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",z),document.removeEventListener("pointerup",Q,{capture:!0})}}},[C,G,K]),i.useEffect(()=>{const R=()=>G(!1);return window.addEventListener("blur",R),window.addEventListener("resize",R),()=>{window.removeEventListener("blur",R),window.removeEventListener("resize",R)}},[G]);const[ee,Y]=Ir(R=>{const z=M().filter(O=>!O.disabled),Q=z.find(O=>O.ref.current===document.activeElement),F=kr(z,R,Q);F&&setTimeout(()=>F.ref.current.focus())}),se=i.useCallback((R,z,Q)=>{const F=!W.current&&!Q;($.value!==void 0&&$.value===z||F)&&(D(R),F&&(W.current=!0))},[$.value]),_=i.useCallback(()=>C?.focus(),[C]),ne=i.useCallback((R,z,Q)=>{const F=!W.current&&!Q;($.value!==void 0&&(Array.isArray(z)?z.every(q=>$.value?.includes(q)):$.value===z)||F)&&B(R)},[$.value]),J=r==="popper"?ro:Cr,fe=J===ro?{side:l,sideOffset:u,align:h,alignOffset:f,arrowPadding:m,collisionBoundary:d,collisionPadding:p,sticky:g,hideWhenDetached:b,avoidCollisions:w}:{};return n.jsx(yr,{scope:o,content:C,viewport:T,onViewportChange:S,itemRefCallback:se,selectedItem:V,onItemLeave:_,itemTextRefCallback:ne,focusSelectedItem:U,selectedItemText:L,position:r,isPositioned:A,searchRef:ee,children:n.jsx(xo,{as:Jt,allowPinchZoom:!0,children:n.jsx(mo,{asChild:!0,trapped:$.open,onMountAutoFocus:R=>{R.preventDefault()},onUnmountAutoFocus:Z(a,R=>{$.trigger?.focus({preventScroll:!0}),document.getSelection()?.empty(),R.preventDefault()}),children:n.jsx(Mn,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:R=>R.preventDefault(),onDismiss:()=>$.onOpenChange(!1),children:n.jsx(J,{role:"listbox",id:$.contentId,"data-state":$.open?"open":"closed","aria-multiselectable":$.multi?"true":void 0,dir:$.dir,onContextMenu:R=>R.preventDefault(),...y,...fe,onPlaced:()=>N(!0),ref:j,style:{display:"flex",flexDirection:"column",outline:"none",...y.style},onKeyDown:Z(y.onKeyDown,R=>{const z=R.ctrlKey||R.altKey||R.metaKey;if(R.key==="Tab"&&R.preventDefault(),!z&&R.key.length===1&&Y(R.key),["ArrowUp","ArrowDown","Home","End"].includes(R.key)){let F=M().filter(O=>!O.disabled).map(O=>O.ref.current);if(["ArrowUp","End"].includes(R.key)&&(F=F.slice().reverse()),["ArrowUp","ArrowDown"].includes(R.key)){const O=R.target,q=F.indexOf(O);F=F.slice(q+1)}setTimeout(()=>H(F)),R.preventDefault()}})})})})})})});wr.displayName=ll;const cl="SelectItemAlignedPosition",Cr=i.forwardRef((e,t)=>{const{__scopeSelect:o,onPlaced:r,...a}=e,s=Ee(We,o),c=Ne(We,o),[l,u]=i.useState(null),[h,f]=i.useState(null),m=ae(t,j=>f(j)),d=xt(o),p=i.useRef(!1),g=i.useRef(!0),{viewport:b,selectedItem:w,selectedItemText:y,focusSelectedItem:$}=c,C=i.useCallback(()=>{if(s.trigger&&s.valueNode&&l&&h&&b&&w&&y){const j=s.trigger.getBoundingClientRect(),V=h.getBoundingClientRect(),D=s.valueNode.getBoundingClientRect(),L=y.getBoundingClientRect();if(s.dir!=="rtl"){const O=L.left-V.left,q=D.left-O,ce=j.left-q,de=j.width+ce,X=Math.max(de,V.width),Ce=window.innerWidth-Re,Ie=rn(q,[Re,Ce-X]);l.style.minWidth=`${de}px`,l.style.left=`${Ie}px`}else{const O=V.right-L.right,q=window.innerWidth-D.right-O,ce=window.innerWidth-j.right-q,de=j.width+ce,X=Math.max(de,V.width),Ce=window.innerWidth-Re,Ie=rn(q,[Re,Ce-X]);l.style.minWidth=`${de}px`,l.style.right=`${Ie}px`}const B=d(),M=window.innerHeight-Re*2,A=b.scrollHeight,N=window.getComputedStyle(h),W=parseInt(N.borderTopWidth,10),H=parseInt(N.paddingTop,10),U=parseInt(N.borderBottomWidth,10),G=parseInt(N.paddingBottom,10),K=W+H+A+G+U,ee=Math.min(w.offsetHeight*5,K),Y=window.getComputedStyle(b),se=parseInt(Y.paddingTop,10),_=parseInt(Y.paddingBottom,10),ne=j.top+j.height/2-Re,J=M-ne,fe=w.offsetHeight/2,R=w.offsetTop+fe,z=W+H+R,Q=K-z;if(z<=ne){const O=w===B[B.length-1].ref.current;l.style.bottom="0px";const q=h.clientHeight-b.offsetTop-b.offsetHeight,ce=Math.max(J,fe+(O?_:0)+q+U),de=z+ce;l.style.height=`${de}px`}else{const O=w===B[0].ref.current;l.style.top="0px";const ce=Math.max(ne,W+b.offsetTop+(O?se:0)+fe)+Q;l.style.height=`${ce}px`,b.scrollTop=z-ne+b.offsetTop}l.style.margin=`${Re}px 0`,l.style.minHeight=`${ee}px`,l.style.maxHeight=`${M}px`,r?.(),requestAnimationFrame(()=>p.current=!0)}},[d,s.trigger,s.valueNode,l,h,b,w,y,s.dir,r]);xe(()=>C(),[C]);const[v,T]=i.useState();xe(()=>{h&&T(window.getComputedStyle(h).zIndex)},[h]);const S=i.useCallback(j=>{j&&g.current===!0&&(C(),$?.(),g.current=!1)},[C,$]);return n.jsx(ul,{scope:o,contentWrapper:l,shouldExpandOnScrollRef:p,onScrollButtonChange:S,children:n.jsx("div",{ref:u,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:v},children:n.jsx(oe.div,{...a,ref:m,style:{boxSizing:"border-box",maxHeight:"100%",...a.style}})})})});Cr.displayName=cl;const dl="SelectPopperPosition",ro=i.forwardRef((e,t)=>{const{__scopeSelect:o,align:r="start",collisionPadding:a=Re,...s}=e,c=Ot(o);return n.jsx(Dn,{...c,...s,ref:t,align:r,collisionPadding:a,style:{boxSizing:"border-box",...s.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});ro.displayName=dl;const[ul,Mo]=st(We,{}),ao="SelectViewport",Do=i.forwardRef((e,t)=>{const{__scopeSelect:o,...r}=e,a=Ne(ao,o),s=Mo(ao,o),c=ae(t,a.onViewportChange),l=i.useRef(0);return n.jsxs(n.Fragment,{children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),n.jsx(Nt.Slot,{scope:o,children:n.jsx(oe.div,{"data-radix-select-viewport":"",role:"presentation",...r,ref:c,style:{position:"relative",flex:1,overflow:"auto",...r.style},onScroll:Z(r.onScroll,u=>{const h=u.currentTarget,{contentWrapper:f,shouldExpandOnScrollRef:m}=s;if(m?.current&&f){const d=Math.abs(l.current-h.scrollTop);if(d>0){const p=window.innerHeight-Re*2,g=parseFloat(f.style.minHeight),b=parseFloat(f.style.height),w=Math.max(g,b);if(w<p){const y=w+d,$=Math.min(p,y),C=y-$;f.style.height=`${$}px`,f.style.bottom==="0px"&&(h.scrollTop=C>0?C:0,f.style.justifyContent="flex-end")}}}l.current=h.scrollTop})})})]})});Do.displayName=ao;const vr="SelectGroup",[fl,pl]=st(vr),No=i.forwardRef((e,t)=>{const{__scopeSelect:o,...r}=e,a=Ge();return n.jsx(fl,{scope:o,id:a,children:n.jsx(oe.div,{role:"group","aria-labelledby":a,...r,ref:t})})});No.displayName=vr;const Tr="SelectLabel",Oo=i.forwardRef((e,t)=>{const{__scopeSelect:o,...r}=e,a=pl(Tr,o);return n.jsx(oe.div,{id:a.id,...r,ref:t})});Oo.displayName=Tr;const At="SelectItem",[hl,jr]=st(At),Lo=i.forwardRef((e,t)=>{const{__scopeSelect:o,value:r,disabled:a=!1,textValue:s,...c}=e,l=Ee(At,o),u=Ne(At,o),h=typeof r=="string"?Array.isArray(l.value)?l.value.includes(r):l.value===r:r.every($=>l.value?.includes($)),f=Array.isArray(l.value)&&Array.isArray(r)&&r.some($=>l.value?.includes($)),[m,d]=i.useState(s??""),[p,g]=i.useState(!1),b=ae(t,$=>u.itemRefCallback?.($,r,a)),w=Ge(),y=()=>{if(!a){let $=l.multi&&typeof r=="string"?[r]:r;f&&!h?l.onValueChange($):Array.isArray(l.value)&&($=Rr(r,l.value)),l.onValueChange($),l.multi||l.onOpenChange(!1)}};if(!l.multi&&Array.isArray(r))throw new Error("You can only pass an array of values in multi selects");return n.jsx(hl,{scope:o,value:r,disabled:a,textId:w,isSelected:h,isIntermediate:f,onItemTextChange:i.useCallback($=>{d(C=>C||($?.textContent??"").trim())},[]),children:n.jsx(Nt.ItemSlot,{scope:o,value:r,disabled:a,textValue:m,children:n.jsx(oe.div,{role:"option","aria-labelledby":w,"data-highlighted":p?"":void 0,"aria-selected":l.multi?void 0:h&&p,"aria-checked":l.multi?h:void 0,"data-state":h?"checked":"unchecked","aria-disabled":a||void 0,"data-disabled":a?"":void 0,tabIndex:a?void 0:-1,...c,ref:b,onFocus:Z(c.onFocus,()=>g(!0)),onBlur:Z(c.onBlur,()=>g(!1)),onPointerUp:Z(c.onPointerUp,y),onPointerMove:Z(c.onPointerMove,$=>{a?u.onItemLeave?.():$.currentTarget.focus({preventScroll:!0})}),onPointerLeave:Z(c.onPointerLeave,$=>{$.currentTarget===document.activeElement&&u.onItemLeave?.()}),onKeyDown:Z(c.onKeyDown,$=>{u.searchRef?.current!==""&&$.key===" "||(el.includes($.key)&&y(),$.key===" "&&$.preventDefault())})})})})});Lo.displayName=At;const ut="SelectItemText",Vo=i.forwardRef((e,t)=>{const{__scopeSelect:o,className:r,style:a,...s}=e,c=Ee(ut,o),l=Ne(ut,o),u=jr(ut,o),h=al(ut,o),[f,m]=i.useState(null),d=ae(t,y=>m(y),u.onItemTextChange,y=>l.itemTextRefCallback?.(y,u.value,u.disabled)),p=f?.textContent,g=i.useMemo(()=>n.jsx("option",{value:u.value,disabled:u.disabled,children:p},Array.isArray(u.value)?u.value.join(";"):u.value),[u.disabled,u.value,p]),{onNativeOptionAdd:b,onNativeOptionRemove:w}=h;return xe(()=>(b(g),()=>w(g)),[b,w,g]),n.jsxs(n.Fragment,{children:[n.jsx(oe.span,{id:u.textId,...s,ref:d}),u.isSelected&&c.valueNode&&!c.valueNodeHasChildren?at.createPortal(s.children,c.valueNode):null]})});Vo.displayName=ut;const Sr="SelectItemIndicator",_o=i.forwardRef((e,t)=>{const{__scopeSelect:o,children:r,...a}=e,s=jr(Sr,o);return typeof r=="function"?n.jsx(oe.span,{"aria-hidden":!0,...a,ref:t,children:r({isSelected:s.isSelected,isIntermediate:s.isIntermediate})}):s.isSelected?n.jsx(oe.span,{"aria-hidden":!0,...a,ref:t,children:r}):null});_o.displayName=Sr;const so="SelectScrollUpButton",Fo=i.forwardRef((e,t)=>{const o=Ne(so,e.__scopeSelect),r=Mo(so,e.__scopeSelect),[a,s]=i.useState(!1),c=ae(t,r.onScrollButtonChange);return xe(()=>{if(o.viewport&&o.isPositioned){const l=o.viewport,u=()=>{const h=l.scrollTop>0;s(h)};return u(),l.addEventListener("scroll",u),()=>l.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),a?n.jsx(zo,{...e,ref:c,onAutoScroll:()=>{const{viewport:l,selectedItem:u}=o;l&&u&&(l.scrollTop-=u.offsetHeight)}}):null});Fo.displayName=so;const io="SelectScrollDownButton",Bo=i.forwardRef((e,t)=>{const o=Ne(io,e.__scopeSelect),r=Mo(io,e.__scopeSelect),[a,s]=i.useState(!1),c=ae(t,r.onScrollButtonChange);return xe(()=>{if(o.viewport&&o.isPositioned){const l=o.viewport,u=()=>{const h=l.scrollHeight-l.clientHeight,f=Math.ceil(l.scrollTop)<h;s(f)};return u(),l.addEventListener("scroll",u),()=>l.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),a?n.jsx(zo,{...e,ref:c,onAutoScroll:()=>{const{viewport:l,selectedItem:u}=o;l&&u&&(l.scrollTop+=u.offsetHeight)}}):null});Bo.displayName=io;const zo=i.forwardRef((e,t)=>{const{__scopeSelect:o,onAutoScroll:r,...a}=e,s=Ne("SelectScrollButton",o),c=i.useRef(null),l=xt(o),u=i.useCallback(()=>{c.current!==null&&(window.clearInterval(c.current),c.current=null)},[]);return i.useEffect(()=>()=>u(),[u]),xe(()=>{l().find(f=>f.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[l]),n.jsx(oe.div,{"aria-hidden":!0,...a,ref:t,style:{flexShrink:0,...a.style},onPointerMove:Z(a.onPointerMove,()=>{s.onItemLeave?.(),c.current===null&&(c.current=window.setInterval(r,50))}),onPointerLeave:Z(a.onPointerLeave,()=>{u()})})});zo.displayName="SelectScrollButtonImpl";const ml="SelectSeparator",Wo=i.forwardRef((e,t)=>{const{__scopeSelect:o,...r}=e;return n.jsx(oe.div,{"aria-hidden":!0,...r,ref:t})});Wo.displayName=ml;const lo="SelectArrow",qo=i.forwardRef((e,t)=>{const{__scopeSelect:o,...r}=e,a=Ot(o),s=Ee(lo,o),c=Ne(lo,o);return s.open&&c.position==="popper"?n.jsx(Aa,{...a,...r,ref:t}):null});qo.displayName=lo;const gl="BubbleSelect",xl=i.forwardRef((e,t)=>{const{value:o,...r}=e,a=i.useRef(null),s=ae(t,a),c=Pa(o),l=Ee(gl,void 0);i.useEffect(()=>{const h=a.current,f=window.HTMLSelectElement.prototype,d=Object.getOwnPropertyDescriptor(f,"value").set;if(c!==o&&d){const p=new Event("change",{bubbles:!0});d.call(h,o),h.dispatchEvent(p)}},[c,o]);let u=o;return l.multi&&!Array.isArray(o)&&(u=[]),n.jsx(Ma,{asChild:!0,children:n.jsx("select",{...r,multiple:l.multi?!0:void 0,ref:s,defaultValue:u})})});xl.displayName="BubbleSelect";function Ir(e){const t=So(e),o=i.useRef(""),r=i.useRef(0),a=i.useCallback(c=>{const l=o.current+c;t(l),function u(h){o.current=h,window.clearTimeout(r.current),h!==""&&(r.current=window.setTimeout(()=>u(""),1e3))}(l)},[t]),s=i.useCallback(()=>{o.current="",window.clearTimeout(r.current)},[]);return i.useEffect(()=>()=>window.clearTimeout(r.current),[]),[o,a,s]}function kr(e,t,o){const a=t.length>1&&Array.from(t).every(h=>h===t[0])?t[0]:t,s=o?e.indexOf(o):-1;let c=bl(e,Math.max(s,0));a.length===1&&(c=c.filter(h=>h!==o));const u=c.find(h=>h.textValue.toLowerCase().startsWith(a.toLowerCase()));return u!==o?u:void 0}function bl(e,t){return e.map((o,r)=>e[(t+r)%e.length])}const Rr=(e,t=[])=>{if(Array.isArray(e))return e.reduce((r,a)=>Rr(a,r),t);const o=t.indexOf(e);return o===-1?[...t,e]:[...t.slice(0,o),...t.slice(o+1)]},$l=Io,yl=ko,wl=Ro,Cl=Ao,vl=Eo,Tl=Po,jl=Do,Sl=No,Il=Oo,kl=Lo,Rl=Vo,Al=_o,El=Fo,Pl=Bo,Ml=Wo,Dl=qo,ye=Object.freeze(Object.defineProperty({__proto__:null,Arrow:Dl,Content:Tl,Group:Sl,Icon:Cl,Item:kl,ItemIndicator:Al,ItemText:Rl,Label:Il,Portal:vl,Root:$l,ScrollDownButton:Pl,ScrollUpButton:El,Select:Io,SelectArrow:qo,SelectContent:Po,SelectGroup:No,SelectIcon:Ao,SelectItem:Lo,SelectItemIndicator:_o,SelectItemText:Vo,SelectLabel:Oo,SelectPortal:Eo,SelectScrollDownButton:Bo,SelectScrollUpButton:Fo,SelectSeparator:Wo,SelectTrigger:ko,SelectValue:Ro,SelectViewport:Do,Separator:Ml,Trigger:yl,Value:wl,Viewport:jl,createSelectScope:ol},Symbol.toStringTag,{value:"Module"}));function Be(e,t,{checkForDefaultPrevented:o=!0}={}){return function(a){if(e?.(a),o===!1||!a.defaultPrevented)return t?.(a)}}const bt=(e,t)=>{const o=i.createContext(t),r=s=>{const{children:c,...l}=s,u=i.useMemo(()=>l,Object.values(l));return n.jsx(o.Provider,{value:u,children:c})};function a(s){const c=i.useContext(o);if(c)return c;if(t!==void 0)return t;throw new Error(`\`${s}\` must be used within \`${e}\``)}return r.displayName=`${e}Provider`,[r,a]};function Nl(e,t){return typeof e=="string"?!1:t in e}function Rt(e,t,o){return e&&t&&Nl(e,t)?e[t]:o}const ln={padding:["padding-block-start","padding-inline-end","padding-block-end","padding-inline-start"],paddingTop:"padding-block-start",paddingRight:"padding-inline-end",paddingBottom:"padding-block-end",paddingLeft:"padding-inline-start",margin:["margin-block-start","margin-inline-end","margin-block-end","margin-inline-start"],marginLeft:"margin-inline-start",marginRight:"margin-inline-end",marginTop:"margin-block-start",marginBottom:"margin-block-end",borderRadius:"border-radius",borderStyle:"border-style",borderWidth:"border-width",borderColor:"border-color",fontSize:"font-size",fontWeight:"font-weight",lineHeight:"line-height",zIndex:"z-index",boxShadow:"box-shadow",pointerEvents:"pointer-events",textAlign:"text-align",textTransform:"text-transform",textDecoration:"text-decoration",flexGrow:"flex-grow",flexShrink:"flex-shrink",flexBasis:"flex-basis",minWidth:"min-width",maxWidth:"max-width",minHeight:"min-height",maxHeight:"max-height",flexDirection:"flex-direction",flexWrap:"flex-wrap",justifyContent:"justify-content",alignItems:"align-items"},Ol=e=>{const[t,o,r,a]=e,s=o??t;return[t,s,r??t,a??s]};function Ll(e,t){switch(e){case"gap":case"padding":case"margin":case"paddingTop":case"paddingLeft":case"paddingRight":case"paddingBottom":case"marginTop":case"marginLeft":case"marginRight":case"marginBottom":case"left":case"right":case"top":case"bottom":case"width":case"maxWidth":case"minWidth":case"height":case"maxHeight":case"minHeight":case"borderRadius":case"borderWidth":return t.spaces;case"color":case"background":case"borderColor":return t.colors;case"fontSize":return t.fontSizes;case"fontWeight":return t.fontWeights;case"lineHeight":return t.lineHeights;case"zIndex":return t.zIndices;case"boxShadow":return t.shadows;default:return null}}const Lt=(e,t)=>{const o=Object.entries(e).reduce((r,a)=>{const[s,c]=a,l=Ll(s,t),u=Object.prototype.hasOwnProperty.call(ln,s)?ln[s]:s;return u&&(c||c===0)&&(typeof c=="object"&&!Array.isArray(c)?Object.entries(c).forEach(([h,f])=>{r[h]={...r[h],...cn(u,f,l)}}):r.initial={...r.initial,...cn(u,c,l)}),r},{initial:{},small:{},medium:{},large:{}});return Object.entries(o).reduce((r,[a,s])=>{if(s&&Object.keys(s).length>0){const c=Object.entries(s).reduce((l,[u,h])=>(l.push(`${u}: ${h};`),l),[]).join(`
`);a==="initial"?r.push(c):r.push(`${t.breakpoints[a]}{ ${c} }`)}return r},[]).join(`
`)},cn=(e,t,o)=>{if(Array.isArray(e)&&Array.isArray(t)){const r=Ol(t);return e.reduce((a,s,c)=>(a[s]=Rt(o,r[c],r[c]),a),{})}else return Array.isArray(e)&&!Array.isArray(t)?e.reduce((r,a)=>(r[a]=Rt(o,t,t),r),{}):!Array.isArray(e)&&!Array.isArray(t)?{[e]:Rt(o,t,t)}:(console.warn("You've passed an array of values to a property that does not support it. Please check the property and value you're passing."),{})},ue=i.forwardRef,k=ue((e,t)=>{const{background:o,basis:r,borderColor:a,color:s,flex:c,fontSize:l,grow:u,hasRadius:h,padding:f,paddingBottom:m,paddingLeft:d,paddingRight:p,paddingTop:g,margin:b,marginLeft:w,marginBottom:y,marginRight:$,marginTop:C,shadow:v,shrink:T,lineHeight:S,fontWeight:j,width:V,minWidth:D,maxWidth:L,height:B,minHeight:M,maxHeight:A,top:N,left:W,bottom:H,right:U,borderRadius:G,borderStyle:K,borderWidth:ee,tag:Y,pointerEvents:se,display:_,position:ne,zIndex:J,overflow:fe,cursor:R,transition:z,transform:Q,animation:F,textAlign:O,textTransform:q,...ce}=e,de=Y||"div",X={$background:o,$basis:r,$borderColor:a,$color:s,$flex:c,$fontSize:l,$grow:u,$hasRadius:h,$padding:f,$paddingBottom:m,$paddingLeft:d,$paddingRight:p,$paddingTop:g,$margin:b,$marginLeft:w,$marginBottom:y,$marginRight:$,$marginTop:C,$shadow:v,$shrink:T,$lineHeight:S,$fontWeight:j,$width:V,$minWidth:D,$maxWidth:L,$height:B,$minHeight:M,$maxHeight:A,$top:N,$left:W,$bottom:H,$right:U,$borderRadius:G,$borderStyle:K,$borderWidth:ee,$pointerEvents:se,$display:_,$position:ne,$zIndex:J,$overflow:fe,$cursor:R,$transition:z,$transform:Q,$animation:F,$textAlign:O,$textTransform:q};return n.jsx(Vl,{as:de,ref:t,...X,...ce})}),Vl=x.div`
  ${({theme:e,...t})=>Lt({padding:t.$padding,paddingTop:t.$paddingTop,paddingBottom:t.$paddingBottom,paddingLeft:t.$paddingLeft,paddingRight:t.$paddingRight,margin:t.$margin,marginTop:t.$marginTop,marginBottom:t.$marginBottom,marginLeft:t.$marginLeft,marginRight:t.$marginRight,top:t.$top,left:t.$left,bottom:t.$bottom,right:t.$right,width:t.$width,minWidth:t.$minWidth,maxWidth:t.$maxWidth,height:t.$height,minHeight:t.$minHeight,maxHeight:t.$maxHeight,color:t.$color,background:t.$background,fontSize:t.$fontSize,fontWeight:t.$fontWeight,lineHeight:t.$lineHeight,borderRadius:t.$hasRadius?e.borderRadius:t.$borderRadius,borderStyle:t.$borderColor&&!t.$borderStyle?"solid":t.$borderStyle,borderWidth:t.$borderColor&&!t.$borderWidth?"1px":t.$borderWidth,borderColor:t.$borderColor,zIndex:t.$zIndex,boxShadow:t.$shadow,display:t.$display,pointerEvents:t.$pointerEvents,cursor:t.$cursor,textAlign:t.$textAlign,textTransform:t.$textTransform,transition:t.$transition,transform:t.$transform,animation:t.$animation,position:t.$position,overflow:t.$overflow,flex:t.$flex,flexShrink:t.$shrink,flexGrow:t.$grow,flexBasis:t.$basis},e)};
`,I=ue((e,t)=>{const{className:o,alignItems:r,direction:a,inline:s,gap:c,justifyContent:l,wrap:u,...h}=e,f={$alignItems:r,$direction:a,$gap:c,$justifyContent:l,$wrap:u,$inline:s};return n.jsx(_l,{className:o,ref:t,...f,...h})}),_l=x(k)`
  ${({theme:e,$display:t="flex",$alignItems:o="center",$direction:r="row",...a})=>Lt({gap:a.$gap,alignItems:o,justifyContent:a.$justifyContent,flexWrap:a.$wrap,flexDirection:r,display:a.$inline?"inline-flex":t},e)};
`,Fl="alpha",Bl="beta",zl="delta",Wl="epsilon",dn="omega",ql="pi",Ul="sigma",Ar=E`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Hl=({$variant:e=dn,theme:t})=>{switch(e){case Fl:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[5]};
        line-height: ${t.lineHeights[2]};
      `;case Bl:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[4]};
        line-height: ${t.lineHeights[1]};
      `;case zl:return`
        font-weight: ${t.fontWeights.semiBold};
        font-size: ${t.fontSizes[3]};
        line-height: ${t.lineHeights[2]};
      `;case Wl:return`
        font-size: ${t.fontSizes[3]};
        line-height: ${t.lineHeights[6]};
      `;case dn:return`
        font-size: ${t.fontSizes[2]};
        line-height: ${t.lineHeights[4]};
      `;case ql:return`
        font-size: ${t.fontSizes[1]};
        line-height: ${t.lineHeights[3]};
      `;case Ul:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[0]};
        line-height: ${t.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${t.fontSizes[2]};
      `}},P=ue((e,t)=>{const{ellipsis:o,textColor:r="currentcolor",textDecoration:a,textTransform:s,variant:c,lineHeight:l,fontWeight:u,fontSize:h,...f}=e,m={$ellipsis:o,$textColor:r,$textDecoration:a,$textTransform:s,$variant:c,$lineHeight:l,$fontWeight:u,$fontSize:h};return n.jsx(Gl,{ref:t,tag:"span",...m,...f})}),Gl=x(k)`
  ${Hl}
  ${({$ellipsis:e})=>e?Ar:""}

  ${({theme:e,...t})=>Lt({color:t.$textColor,textDecoration:t.$textDecoration,textTransform:t.$textTransform,lineHeight:t.$lineHeight,fontWeight:t.$fontWeight,fontSize:t.$fontSize},e)}
`,[Kl,Uo]=bt("Accordion");i.forwardRef(({children:e,size:t="S",...o},r)=>n.jsx(Yl,{ref:r,$size:t,collapsible:!0,...o,type:"single",children:n.jsx(Kl,{size:t,children:e})}));const Yl=x(qa)`
  background-color: ${e=>e.theme.colors.neutral0};

  ${e=>e.$size==="S"?E`
        border-radius: ${t=>t.theme.borderRadius};
        border: solid 1px ${t=>t.theme.colors.neutral200};
      `:E``}
`;i.forwardRef((e,t)=>{const{size:o}=Uo("Item");return n.jsx(Ql,{$size:o,"data-size":o,ref:t,...e})});const Ql=x(Ua)`
  overflow: hidden;
  margin: 1px 0;

  &:first-child {
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    margin-top: 0;
  }

  &:last-child {
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    margin-bottom: 0;
  }

  &[data-size='S'] {
    & + & {
      border-top: solid 1px ${e=>e.theme.colors.neutral200};
    }
  }

  &[data-state='open'] {
    box-shadow: 0 0 0 1px ${e=>e.theme.colors.primary600};
  }

  &:not([data-disabled]):hover {
    box-shadow: 0 0 0 1px ${e=>e.theme.colors.primary600};
  }

  /* This applies our desired focus effect correctly. */
  &:focus-within {
    position: relative;
    z-index: 1;
    box-shadow: 0 0 0 1px ${e=>e.theme.colors.primary600};
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow ${e=>e.theme.motion.timings[120]}
      ${e=>e.theme.motion.easings.easeOutQuad};
  }
`;i.forwardRef(({caretPosition:e="left",description:t,icon:o,iconProps:r,children:a,...s},c)=>{const{size:l}=Uo("Trigger");return n.jsxs(Pr,{$caretPosition:e,$size:l,ref:c,...s,children:[e==="left"?n.jsx(Et,{$size:l,children:n.jsx(Me,{width:l==="S"?"1.2rem":"1.6rem",height:l==="S"?"1.2rem":"1.6rem"})}):null,n.jsxs(I,{tag:"span",gap:2,overflow:"hidden",children:[o&&l==="S"?n.jsx(Er,{children:n.jsx(o,{...r})}):null,n.jsxs(I,{alignItems:"flex-start",direction:"column",tag:"span",ref:c,overflow:"hidden",children:[n.jsx(P,{fontWeight:l==="S"?"bold":void 0,ellipsis:!0,variant:l==="M"?"delta":void 0,textAlign:"left",width:"100%",children:a}),t&&l==="M"?n.jsx(P,{textAlign:"left",children:t}):null]})]}),e==="right"?n.jsx(Et,{$size:l,children:n.jsx(Me,{width:l==="S"?"1.2rem":"1.6rem",height:l==="S"?"1.2rem":"1.6rem"})}):null]})});const Er=x(k)`
  color: ${e=>e.theme.colors.neutral500};
  display: flex;

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.color};
  }
`,Et=x(I).attrs(e=>({...e,tag:"span"}))`
  background-color: ${e=>e.theme.colors.neutral200};
  width: ${e=>e.$size==="S"?"2.4rem":"3.2rem"};
  height: ${e=>e.$size==="S"?"2.4rem":"3.2rem"};
  flex: ${e=>e.$size==="S"?"0 0 2.4rem":"0 0 3.2rem"};
  border-radius: 50%;
  justify-content: center;

  @media (prefers-reduced-motion: no-preference) {
    transition:
      transform ${e=>e.theme.motion.timings[200]} ${e=>e.theme.motion.easings.authenticMotion},
      ${e=>e.theme.transitions.backgroundColor};
  }
`,Pr=x(Ha)`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.$caretPosition==="left"?"flex-start":"space-between"};
  width: 100%;
  gap: ${e=>e.theme.spaces[4]};
  padding-inline: ${e=>e.$size==="S"?e.theme.spaces[4]:e.theme.spaces[6]};
  padding-block: ${e=>e.$size==="S"?e.theme.spaces[3]:e.theme.spaces[6]};
  cursor: pointer;
  color: ${e=>e.theme.colors.neutral800};
  overflow: hidden;

  &[data-disabled] {
    cursor: default;
    color: ${e=>e.theme.colors.neutral600};
  }

  &[data-state='open'] > ${Et} {
    transform: rotate(180deg);
  }

  /* we remove the default focus because the entire item should have the focus style and the default would be hidden. */
  &:focus-visible {
    outline: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.color};
  }
`;i.forwardRef((e,t)=>{const{size:o}=Uo("Trigger");return n.jsx(Mr,{$size:o,...e,ref:t})});const Mr=x(I).attrs(e=>({...e,tag:"span"}))`
  padding-inline: ${e=>e.$size==="S"?e.theme.spaces[2]:e.theme.spaces[6]};
  padding-block: ${e=>e.$size==="S"?e.theme.spaces[2]:e.theme.spaces[6]};

  // Remove default IconButton styles so there are no backgrounds or borders.
  & > button {
    border: none;
    background: none;
    color: ${e=>e.theme.colors.neutral600};

    @media (prefers-reduced-motion: no-preference) {
      transition: ${e=>e.theme.transitions.color};
    }
  }
`;i.forwardRef(({variant:e="primary",...t},o)=>n.jsx(Zl,{$variant:e,ref:o,...t}));const Zl=x(Ga)`
  display: flex;
  align-items: center;
  background-color: ${e=>e.$variant==="primary"?e.theme.colors.neutral0:e.theme.colors.neutral100};

  &[data-disabled] {
    background-color: ${e=>e.theme.colors.neutral150};
  }

  &:not([data-disabled]) {
    &:hover,
    &[data-state='open'] {
      background-color: ${e=>e.theme.colors.primary100};

      & > ${Pr} {
        color: ${e=>e.theme.colors.primary600};

        & ${Er} {
          color: ${e=>e.theme.colors.primary600};
        }

        & ${Et} {
          background-color: ${e=>e.theme.colors.primary200};
        }
      }

      & > ${Mr} > button {
        color: ${e=>e.theme.colors.primary600};
      }
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.backgroundColor};
  }
`;i.forwardRef((e,t)=>n.jsx(ec,{ref:t,...e}));const Xl=ie`
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
`,Jl=ie`
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
`,ec=x(Ka)`
  overflow: hidden;

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation: ${Xl} ${e=>e.theme.motion.timings[320]}
        ${e=>e.theme.motion.easings.authenticMotion};
    }

    &[data-state='closed'] {
      animation: ${Jl} ${e=>e.theme.motion.timings[320]}
        ${e=>e.theme.motion.easings.authenticMotion};
    }
  }
`,Vt=E`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;

    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${e=>e.theme.colors.primary600};
    }
  }
`,it=({tag:e,...t})=>{const o=e||"span";return n.jsx(tc,{...t,as:o})},tc=x.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`,et=({children:e,label:t})=>{const o=i.Children.only(e);return n.jsxs(n.Fragment,{children:[i.cloneElement(o,{"aria-hidden":"true",focusable:"false"}),n.jsx(it,{children:t})]})};et.displayName="AccessibleIcon";const Dr=e=>{switch(e){case"danger":return"danger100";case"success":return"success100";case"warning":return"warning100";default:return"primary100"}},oc=e=>Dr(e).replace("100","200"),co=({theme:e,$variant:t})=>t==="danger"?e.colors.danger700:t==="success"?e.colors.success700:t==="warning"?e.colors.warning700:e.colors.primary700,nc=x(k)`
  ${Vt};
`,rc=x(I)`
  svg {
    height: 100%;
    width: 100%;

    path {
      fill: ${co};
    }
  }
`,ac=({variant:e,...t})=>e==="success"?n.jsx(ii,{...t}):e==="danger"||e==="warning"?n.jsx(Kn,{...t}):n.jsx(li,{...t}),sc=x(k)`
  & a > span {
    color: ${co};
  }

  svg path {
    fill: ${co};
  }
`,ic=({title:e,children:t,variant:o="default",onClose:r,closeLabel:a,titleAs:s="p",action:c,...l})=>n.jsxs(I,{alignItems:"flex-start",background:Dr(o),borderColor:oc(o),shadow:"filterShadow",gap:3,hasRadius:!0,padding:5,paddingRight:6,...l,children:[n.jsx(rc,{height:"2rem",shrink:0,$variant:o,width:"2rem",children:n.jsx(ac,{"aria-hidden":!0,variant:o})}),n.jsxs(I,{alignItems:"start",gap:c?2:1,wrap:"wrap",role:o==="danger"?"alert":"status",width:"100%",children:[e&&n.jsx(P,{fontWeight:"bold",textColor:"neutral800",tag:s,children:e}),n.jsx(P,{tag:"p",textColor:"neutral800",children:t}),c&&n.jsx(sc,{$variant:o,children:c})]}),n.jsx(nc,{tag:"button",background:"transparent",borderColor:void 0,height:"1.6rem",width:"1.6rem",marginTop:1,onClick:r,color:"neutral700",children:n.jsx(et,{label:a,children:n.jsx(Ke,{})})})]});function Te({prop:e,defaultProp:t,onChange:o=()=>{}}){const[r,a]=Nr({defaultProp:t,onChange:o}),s=e!==void 0,c=s?e:r,l=_n(o),u=i.useCallback(h=>{if(s){const m=typeof h=="function"?h(e):h;m!==e&&l(m)}else a(h)},[s,e,a,l]);return[c,u]}function Nr({defaultProp:e,onChange:t}){const o=i.useState(e),[r]=o,a=i.useRef(r),s=_n(t);return i.useEffect(()=>{a.current!==r&&(s(r),a.current=r)},[r,a,s]),o}const un={easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)"},fn={120:"120ms"};`${fn[120]}${un.easeOutQuad}`,`${fn[120]}${un.easeOutQuad}`;const te={overlayFadeIn:ie`
    from {
      opacity: 0;
    }
    to {
      opacity: 0.2;
    }
  `,modalPopIn:ie`
    from {
      transform:translate(-50%, -50%)  scale(0.8);
      opacity: 0;
    }
    to {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  `,modalPopOut:ie`
    from {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    to {
      transform:translate(-50%, -50%)  scale(0.8);
      opacity: 0;
    }
  `,popIn:ie`
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  `,popOut:ie`
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(0.8);
      opacity: 0;
    }
  `,slideDownIn:ie`
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,slideDownOut:ie`
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-10px);
    }
  `,slideUpIn:ie`
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,slideUpOut:ie`
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(10px);
    }
  `,fadeIn:ie`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `,fadeOut:ie`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  `},pt=32,pn=2;i.forwardRef(({onLoadingStatusChange:e,delayMs:t=600,src:o,alt:r,fallback:a,preview:s=!1,...c},l)=>{const[u,h]=Te({onChange:e}),[f,m]=i.useState(!1),d=s&&u==="loaded",p=g=>{d&&m(g)};return n.jsxs(Nn,{onOpenChange:p,children:[n.jsx(On,{asChild:!0,children:n.jsxs(uo,{ref:l,...c,children:[d?n.jsx(lc,{width:"100%",height:"100%",position:"absolute",background:"neutral0",zIndex:"overlay",style:{opacity:f?.4:0}}):null,n.jsx(cc,{src:o,alt:r,onLoadingStatusChange:h}),n.jsx(Ya,{delayMs:t,children:n.jsx(P,{fontWeight:"bold",textTransform:"uppercase",children:a})})]})}),d?n.jsx(Ln,{children:n.jsx(dc,{side:"top",sideOffset:4,children:n.jsx(uc,{src:o,alt:r})})}):null]})});const Or=E`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  overflow: hidden;
  border-radius: 50%;
`,Lr=E`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`,uo=x(Qa)`
  position: relative;
  z-index: 0;
  ${Or}
  width: ${pt/10}rem;
  height: ${pt/10}rem;
  /* TODO: we should get the user email & hash it to turn it into a hex-value so different emails can consistently get a different background */
  background-color: ${e=>e.theme.colors.primary600};
  color: ${e=>e.theme.colors.neutral0};
`,lc=x(k)`
  @media (prefers-reduced-motion: no-preference) {
    transition: opacity ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,cc=x(Za)`
  ${Lr}
`,dc=x(Fn)`
  ${Or}
  width: ${pt*pn/10}rem;
  height: ${pt*pn/10}rem;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${te.fadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,uc=x.img`
  ${Lr}
`;i.forwardRef((e,t)=>n.jsx(fc,{...e,ref:t,tag:"div"}));const fc=x(I)`
  & > ${uo} + ${uo} {
    margin-left: -${pt/10/2}rem;
  }
`,Vr=({active:e=!1,size:t="M",textColor:o="neutral600",backgroundColor:r="neutral150",children:a,minWidth:s=5,...c})=>{const l=t==="S"?1:2;return n.jsx(pc,{inline:!0,alignItems:"center",justifyContent:"center",minWidth:s,paddingLeft:l,paddingRight:l,background:e?"primary200":r,$size:t,...c,children:n.jsx(P,{variant:"sigma",textColor:e?"primary600":o,lineHeight:"1rem",children:a})})},pc=x(I)`
  border-radius: ${({theme:e,$size:t})=>t==="S"?"2px":e.borderRadius};
  ${({$size:e,theme:t})=>e==="S"?E`
        padding-block: 0.3rem;
        padding-inline ${t.spaces[1]}
      `:E`
      padding-block: 0.7rem;
      padding-inline ${t.spaces[2]}
    `};
`,$t=ue(({href:e,disabled:t=!1,isExternal:o=!1,...r},a)=>n.jsx(hc,{tag:"a",ref:a,target:o?"_blank":void 0,rel:o?"noreferrer noopener":void 0,href:e,tabIndex:t?-1:void 0,"aria-disabled":t,pointerEvents:t?"none":void 0,cursor:t?void 0:"pointer",...r})),hc=x(k)`
  text-decoration: none;

  &:visited {
    color: inherit;
  }
`,_r=()=>n.jsx(k,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:n.jsx(P,{variant:"pi",textColor:"neutral500",children:"/"})});_r.displayName="Divider";const mc=x(I)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  & > *:first-child {
    margin-left: ${({theme:e})=>`calc(-1*${e.spaces[2]})`};
  }
`,gc=i.forwardRef(({label:e,children:t,...o},r)=>{const a=i.Children.toArray(t);return n.jsx(k,{"aria-label":e,tag:"nav",...o,ref:r,children:n.jsx(mc,{tag:"ol",children:i.Children.map(a,(s,c)=>{const l=a.length>1&&c+1<a.length;return n.jsxs(I,{inline:!0,tag:"li",children:[s,l&&n.jsx(_r,{})]})})})})});gc.displayName="Breadcrumbs";const xc=i.forwardRef(({children:e,isCurrent:t=!1,...o},r)=>n.jsx(k,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,ref:r,children:n.jsx(P,{variant:"pi",textColor:"neutral800",fontWeight:t?"bold":"regular","aria-current":t,...o,children:e})}));xc.displayName="Crumb";const bc=x($t)`
  border-radius: ${({theme:e})=>e.borderRadius};
  color: ${({theme:e})=>e.colors.neutral600};
  font-size: ${({theme:e})=>e.fontSizes[1]};
  line-height: ${({theme:e})=>e.lineHeights[4]};
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  text-decoration: none;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral200};
    color: ${({theme:e})=>e.colors.neutral700};
  }
`,$c=i.forwardRef(({children:e,...t},o)=>n.jsx(bc,{ref:o,...t,children:e}));$c.displayName="CrumbLink";const tt=e=>e.replaceAll(":","");function yc(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function Fr(...e){return t=>e.forEach(o=>yc(o,t))}function he(...e){return i.useCallback(Fr(...e),e)}const wc=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),ot=wc()?i.useEffect:i.useLayoutEffect,Cc=Wa.useId||(()=>{});let vc=0;const we=e=>{const[t,o]=i.useState(Cc());return ot(()=>{e||o(r=>r??String(vc++))},[e]),e?.toString()??(t||"")},yt=(e,t,{selectorToWatch:o,skipWhen:r=!1})=>{const a=So(t);i.useEffect(()=>{if(r||!e.current)return;const s={root:e.current,rootMargin:"0px"},c=h=>{h.forEach(f=>{f.isIntersecting&&e.current&&e.current.scrollHeight>e.current.clientHeight&&a(f)})},l=new IntersectionObserver(c,s),u=e.current.querySelector(o);return u&&l.observe(u),()=>{l.disconnect()}},[r,a,o,e])},Ho="success-light",Go="danger-light",_t="default",wt="tertiary",Ct="secondary",Br="danger",zr="success",Ft="ghost",Ko=[Ho,Go],Tc=[_t,wt,Ct,Br,zr,Ft,...Ko],jc=["XS","S","M","L"],be=e=>e===Ho||e===Go?`${e.substring(0,e.lastIndexOf("-"))}`:e===wt?"neutral":e===_t||e===Ct||Tc.every(t=>t!==e)?"primary":`${e}`,Wr=({theme:e})=>E`
    border: 1px solid ${e.colors.neutral200};
    background: ${e.colors.neutral150};
    color: ${e.colors.neutral600};
    cursor: default;
  `,qr=({theme:e,$variant:t})=>[...Ko,Ct].includes(t)?E`
      background-color: ${e.colors.neutral0};
    `:t===wt?E`
      background-color: ${e.colors.neutral100};
    `:t===Ft?E`
      background-color: ${e.colors.neutral100};
    `:t===_t?E`
      border: 1px solid ${e.colors.buttonPrimary500};
      background: ${e.colors.buttonPrimary500};
    `:E`
    border: 1px solid ${e.colors[`${be(t)}500`]};
    background: ${e.colors[`${be(t)}500`]};
  `,Ur=({theme:e,$variant:t})=>[...Ko,Ct].includes(t)?E`
      background-color: ${e.colors.neutral0};
      border: 1px solid ${e.colors[`${be(t)}600`]};
      color: ${e.colors[`${be(t)}600`]};
    `:t===wt||t===Ft?E`
      background-color: ${e.colors.neutral150};
    `:E`
    border: 1px solid ${e.colors[`${be(t)}600`]};
    background: ${e.colors[`${be(t)}600`]};
  `,Hr=({theme:e,$variant:t})=>{switch(t){case Go:case Ho:case Ct:return E`
        border: 1px solid ${e.colors[`${be(t)}200`]};
        background: ${e.colors[`${be(t)}100`]};
        color: ${e.colors[`${be(t)}700`]};
      `;case wt:return E`
        border: 1px solid ${e.colors.neutral200};
        background: ${e.colors.neutral0};
        color: ${e.colors.neutral800};
      `;case Ft:return E`
        border: 1px solid transparent;
        background: transparent;
        color: ${e.colors.neutral800};

        svg {
          fill: ${e.colors.neutral500};
        }
      `;case zr:case Br:return E`
        border: 1px solid ${e.colors[`${be(t)}600`]};
        background: ${e.colors[`${be(t)}600`]};
        color: ${e.colors.neutral0};
      `;default:return E`
        border: 1px solid ${e.colors.buttonPrimary600};
        background: ${e.colors.buttonPrimary600};
        color: ${e.colors.buttonNeutral0};
      `}},ze=ue(({variant:e=_t,startIcon:t,endIcon:o,disabled:r=!1,children:a,onClick:s,size:c=jc[1],loading:l=!1,fullWidth:u=!1,...h},f)=>{const m=r||l,d=p=>{!m&&s&&s(p)};return n.jsxs(kc,{ref:f,"aria-disabled":m,disabled:m,$size:c,$variant:e,tag:"button",onClick:d,hasRadius:!0,gap:2,inline:!0,alignItems:"center",justifyContent:"center",width:u?"100%":void 0,paddingLeft:4,paddingRight:4,cursor:"pointer",...h,children:[(t||l)&&n.jsx(I,{tag:"span","aria-hidden":!0,children:l?n.jsx(Ic,{}):t}),n.jsx(P,{variant:c==="S"?"pi":void 0,fontWeight:"bold",children:a}),o&&n.jsx(I,{tag:"span","aria-hidden":!0,children:o})]})}),Sc=ie`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,Ic=x(Vn)`
  animation: ${Sc} 2s infinite linear;
  will-change: transform;
`,kc=x(I)`
  height: ${({theme:e,$size:t})=>e.sizes.button[t]};
  text-decoration: none;
  ${Hr}

  &:hover {
    ${qr}
  }

  &:active {
    ${Ur}
  }

  &[aria-disabled='true'] {
    ${Wr}
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      ${e=>e.theme.transitions.backgroundColor},
      ${e=>e.theme.transitions.color},
      border-color ${e=>e.theme.motion.timings[200]} ${e=>e.theme.motion.easings.easeOutQuad};
  }
`,Gr=i.forwardRef(({children:e,description:t,label:o,defaultOpen:r,open:a,onOpenChange:s,delayDuration:c=500,disableHoverableContent:l,...u},h)=>!o&&!t?e:n.jsxs(Nn,{defaultOpen:r,open:a,onOpenChange:s,delayDuration:c,disableHoverableContent:l,children:[n.jsx(On,{asChild:!0,children:e}),n.jsx(Ln,{children:n.jsx(Rc,{ref:h,sideOffset:8,...u,children:n.jsx(P,{variant:"pi",fontWeight:"bold",children:o||t})})})]})),Rc=x(Fn)`
  background-color: ${e=>e.theme.colors.neutral900};
  color: ${e=>e.theme.colors.neutral0};
  padding-inline: ${e=>e.theme.spaces[2]};
  padding-block: ${e=>e.theme.spaces[2]};
  border-radius: ${e=>e.theme.borderRadius};
  z-index: ${e=>e.theme.zIndices.tooltip};
  will-change: opacity;
  transform-origin: var(--radix-tooltip-content-transform-origin);

  @media (prefers-reduced-motion: no-preference) {
    animation: ${te.fadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,qe=ue(({label:e,background:t,children:o,disabled:r=!1,onClick:a,size:s="S",variant:c="tertiary",withTooltip:l=!0,...u},h)=>{const f=d=>{!r&&a&&a(d)},m=n.jsx(ft,{"aria-disabled":r,background:r?"neutral150":t,tag:"button",display:"inline-flex",justifyContent:"center",hasRadius:!0,cursor:"pointer",...u,ref:h,$size:s,onClick:f,$variant:c,children:n.jsx(et,{label:e,children:o})});return l?n.jsx(Gr,{label:e,children:m}):m}),ft=x(I)`
  text-decoration: none;

  ${e=>{switch(e.$size){case"XS":return E`
          padding-block: 0.2rem;
          padding-inline: 0.2rem;
        `;case"S":return E`
          padding-block: 0.7rem;
          padding-inline: 0.7rem;
        `;case"M":return E`
          padding-block: 0.9rem;
          padding-inline: 0.9rem;
        `;case"L":return E`
          padding-block: 1.1rem;
          padding-inline: 1.1rem;
        `}}}
  ${Hr}
  ${e=>e.$variant==="tertiary"?E`
          color: ${e.theme.colors.neutral500};
        `:""}

  &:hover {
    ${qr}
    ${e=>e.$variant==="tertiary"?E`
            color: ${e.theme.colors.neutral600};
          `:""}
  }

  &:active {
    ${Ur}
  }

  &[aria-disabled='true'] {
    ${Wr}
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      ${e=>e.theme.transitions.backgroundColor},
      ${e=>e.theme.transitions.color},
      border-color ${e=>e.theme.motion.timings[200]} ${e=>e.theme.motion.easings.easeOutQuad};
  }
`;x(I)`
  & ${ft}:first-child {
    border-radius: ${({theme:e})=>`${e.borderRadius} 0 0 ${e.borderRadius}`};
  }

  & ${ft}:last-child {
    border-radius: ${({theme:e})=>`0 ${e.borderRadius} ${e.borderRadius} 0`};
  }

  & ${ft} {
    border-radius: 0;

    & + ${ft} {
      border-left: none;
    }
  }
`;const Kr=ue(({children:e,href:t,disabled:o=!1,startIcon:r,endIcon:a,isExternal:s=!1,...c},l)=>n.jsxs(Ac,{ref:l,href:t,disabled:o,isExternal:s,...c,children:[r,n.jsx(P,{textColor:o?"neutral600":"primary600",children:e}),a,t&&!a&&s&&n.jsx(Xa,{})]})),Ac=x($t)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:e})=>e.spaces[2]};
  pointer-events: ${({disabled:e})=>e?"none":void 0};

  svg {
    font-size: 1rem;

    path {
      fill: ${({disabled:e,theme:t})=>e?t.colors.neutral600:t.colors.primary600};
    }
  }

  &:hover {
    & > span {
      color: ${({theme:e})=>e.colors.primary500};
    }

    svg path {
      fill: ${({theme:e})=>e.colors.primary500};
    }
  }

  &:active {
    color: ${({theme:e})=>e.colors.primary700};
  }

  ${Vt};
`,Ec=e=>{switch(e){case"danger":return"danger100";default:return"primary100"}},Pc=as,Mc=i.forwardRef(({label:e,endIcon:t=n.jsx(Me,{width:"1.2rem",height:"1.2rem","aria-hidden":!0}),tag:o=ze,icon:r,...a},s)=>{const c={...a,ref:s,type:"button"};return n.jsx(Ja,{asChild:!0,disabled:c.disabled,children:o===qe?n.jsx(qe,{label:e,variant:"tertiary",...c,children:r}):n.jsx(ze,{endIcon:t,variant:"ghost",...c})})}),Dc=i.forwardRef(({children:e,intersectionId:t,onCloseAutoFocus:o,popoverPlacement:r="bottom-start",...a},s)=>{const[c,l]=r.split("-");return n.jsx(Bn,{children:n.jsx(Nc,{align:l,side:c,loop:!0,onCloseAutoFocus:o,asChild:!0,children:n.jsxs(Yr,{ref:s,direction:"column",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,marginTop:1,marginBottom:1,alignItems:"flex-start",position:"relative",overflow:"auto",...a,children:[e,n.jsx(k,{id:t,width:"100%",height:"1px"})]})})})}),Yr=x(I)`
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
  z-index: ${e=>e.theme.zIndices.popover};

  &::-webkit-scrollbar {
    display: none;
  }
`,Nc=x(es)`
  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${te.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${te.slideDownIn};
      }
    }
  }
`,Qr=({theme:e,$variant:t})=>E`
  text-align: left;
  width: 100%;
  border-radius: ${e.borderRadius};
  padding: ${e.spaces[2]} ${e.spaces[4]};

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }

  &[data-highlighted] {
    background-color: ${e.colors[Ec(t)]};
  }

  &:focus-visible {
    outline: none;

    &:after {
      content: none;
    }
  }
`,Oc=x(I)`
  ${({theme:e,$variant:t})=>Qr({theme:e,$variant:t})}
`;x(Kr)`
  /* We include this here again because typically when people use OptionLink they provide an as prop which cancels the Box props */
  color: ${({theme:e,color:t})=>Rt(e.colors,t,void 0)};
  text-decoration: none;

  &:hover {
    color: unset;
  }

  /* TODO: do we need this? */
  svg > path,
  &:focus-visible svg > path {
    fill: currentColor;
  }

  ${({theme:e,$variant:t})=>Qr({theme:e,$variant:t})}
`;const Lc=x(k)`
  /* Negative horizontal margin to compensate Menu.Content's padding */
  margin: ${({theme:e})=>e.spaces[1]} -${({theme:e})=>e.spaces[1]};
  width: calc(100% + ${({theme:e})=>e.spaces[2]});
  /* Hide separator if there's nothing above in the menu */
  &:first-child {
    display: none;
  }
`;i.forwardRef((e,t)=>n.jsx(ts,{...e,asChild:!0,children:n.jsx(Lc,{height:"1px",shrink:0,background:"neutral150",ref:t})}));i.forwardRef((e,t)=>n.jsx(os,{asChild:!0,children:n.jsx(Vc,{ref:t,variant:"sigma",textColor:"neutral600",...e})}));const Vc=x(P)`
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
`;i.forwardRef(({disabled:e=!1,...t},o)=>n.jsx(ns,{asChild:!0,disabled:e,children:n.jsxs(_c,{ref:o,color:"neutral800",tag:"button",type:"button",background:"transparent",borderStyle:"none",gap:5,...t,children:[n.jsx(P,{children:t.children}),n.jsx(bo,{fill:"neutral500",height:"1.2rem",width:"1.2rem"})]})}));const _c=x(Oc)`
  &[data-state='open'] {
    background-color: ${({theme:e})=>e.colors.primary100};
  }
`;i.forwardRef((e,t)=>n.jsx(Bn,{children:n.jsx(rs,{sideOffset:8,asChild:!0,children:n.jsx(Yr,{ref:t,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",overflow:"auto",...e})})}));const Fc=Pc,Bc=Mc,zc=Dc,Wc=i.forwardRef(({children:e,onOpen:t,onClose:o,popoverPlacement:r,onReachEnd:a,...s},c)=>{const l=i.useRef(null),u=he(c,l),h=i.useRef(null),[f,m]=i.useState(!1),d=w=>{a&&a(w)},p=w=>{w&&typeof t=="function"?t():!w&&typeof o=="function"&&o(),m(w)},g=we(),b=`intersection-${tt(g)}`;return yt(h,d,{selectorToWatch:`#${b}`,skipWhen:!f}),n.jsxs(Fc,{onOpenChange:p,children:[n.jsx(Bc,{ref:u,...s,children:s.label}),n.jsx(zc,{ref:h,intersectionId:b,popoverPlacement:r,children:e})]})}),qc=x(Wc)`
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  height: unset;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral200};
  }
`,Uc=i.forwardRef(({children:e,...t},o)=>n.jsx(qc,{ref:o,endIcon:null,size:"S",...t,children:e}));Uc.displayName="CrumbSimpleMenu";const Zr=i.createContext({id:""}),Hc=()=>i.useContext(Zr);i.forwardRef(({id:e,...t},o)=>{const r=we(e),a=i.useMemo(()=>({id:r}),[r]);return n.jsx(Zr.Provider,{value:a,children:n.jsx(k,{ref:o,id:e,tabIndex:0,hasRadius:!0,background:"neutral0",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",shadow:"tableShadow",tag:"article","aria-labelledby":`${r}-title`,...t})})});const Gc=i.forwardRef(({position:e,...t},o)=>n.jsx(Kc,{ref:o,$position:e,...t,direction:"row",gap:2})),Kc=x(I)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  right: ${({$position:e,theme:t})=>{if(e==="end")return t.spaces[3]}};
  left: ${({$position:e,theme:t})=>{if(e==="start")return t.spaces[3]}};
`;x.img`
  // inline flows is based on typography and displays an extra white space below the image
  // switch to block is required in order to make the img stick the bottom of the container
  // addition infos: https://stackoverflow.com/questions/5804256/image-inside-div-has-extra-space-below-the-image
  margin: 0;
  padding: 0;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;x.div`
  display: flex;
  justify-content: center;
  height: ${({$size:e})=>e==="S"?"8.8rem":"16.4rem"};
  width: 100%;
  background: repeating-conic-gradient(${({theme:e})=>e.colors.neutral100} 0% 25%, transparent 0% 50%) 50% / 20px
    20px;
  border-top-left-radius: ${({theme:e})=>e.borderRadius};
  border-top-right-radius: ${({theme:e})=>e.borderRadius};
`;x.div`
  margin-left: auto;
  flex-shrink: 0;
`;x(Vr)`
  margin-left: ${({theme:e})=>e.spaces[1]};
`;const Yc=({fill:e,...t})=>{const{colors:o}=ti();return n.jsx(k,{tag:"svg",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:e?o[e]:void 0,...t,children:n.jsx("path",{d:"M29.0613 10.0613L13.0613 26.0613C12.9219 26.2011 12.7563 26.3121 12.574 26.3878C12.3917 26.4635 12.1962 26.5024 11.9988 26.5024C11.8013 26.5024 11.6059 26.4635 11.4235 26.3878C11.2412 26.3121 11.0756 26.2011 10.9363 26.0613L3.93626 19.0613C3.79673 18.9217 3.68605 18.7561 3.61053 18.5738C3.53502 18.3915 3.49615 18.1961 3.49615 17.9988C3.49615 17.8014 3.53502 17.606 3.61053 17.4237C3.68605 17.2414 3.79673 17.0758 3.93626 16.9363C4.07579 16.7967 4.24143 16.686 4.42374 16.6105C4.60604 16.535 4.80143 16.4962 4.99876 16.4962C5.19608 16.4962 5.39147 16.535 5.57378 16.6105C5.75608 16.686 5.92173 16.7967 6.06126 16.9363L12 22.875L26.9388 7.93876C27.2205 7.65697 27.6027 7.49866 28.0013 7.49866C28.3998 7.49866 28.782 7.65697 29.0638 7.93876C29.3455 8.22055 29.5039 8.60274 29.5039 9.00126C29.5039 9.39977 29.3455 9.78197 29.0638 10.0638L29.0613 10.0613Z"})})},hn=i.forwardRef(({defaultChecked:e,checked:t,onCheckedChange:o,...r},a)=>{const s=i.useRef(null),[c,l]=Te({defaultProp:e,prop:t,onChange:o}),u=he(s,a);return n.jsx(Qc,{ref:u,checked:c,onCheckedChange:l,...r,children:n.jsxs(Zc,{forceMount:!0,children:[c===!0?n.jsx(Yc,{width:"1.6rem",fill:"neutral0"}):null,c==="indeterminate"?n.jsx(ss,{fill:"neutral0"}):null]})})}),Qc=x(is)`
  background: ${e=>e.theme.colors.neutral0};
  width: 2rem;
  height: 2rem;
  border-radius: ${e=>e.theme.borderRadius};
  border: 1px solid ${e=>e.theme.colors.neutral300};
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  // this ensures the checkbox is always a square even in flex-containers.
  flex: 0 0 2rem;

  &[data-state='checked']:not([data-disabled]),
  &[data-state='indeterminate']:not([data-disabled]) {
    border: 1px solid ${e=>e.theme.colors.primary600};
    background-color: ${e=>e.theme.colors.primary600};
  }

  &[data-disabled] {
    background-color: ${e=>e.theme.colors.neutral200};
  }

  /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: -1;
    min-width: 44px;
    min-height: 44px;
  }
`,Zc=x(ls)`
  display: inline-flex;
  pointer-events: auto !important;
  width: 100%;
  height: 100%;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  &[data-disabled] {
    cursor: not-allowed;
  }
`,Yo=i.forwardRef(({children:e,...t},o)=>{const r=we(t.id);return e?n.jsxs(I,{gap:2,children:[n.jsx(hn,{id:r,...t}),n.jsx(P,{tag:"label",textColor:"neutral800",htmlFor:r,children:e})]}):n.jsx(hn,{ref:o,...t})});i.forwardRef((e,t)=>{const{id:o}=Hc();return n.jsx(Gc,{position:"start",children:n.jsx(Yo,{"aria-labelledby":`${o}-title`,...e,ref:t})})});x(k)`
  word-break: break-all;
`;x(I)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`;const le={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",END:"End",HOME:"Home",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown"},Xc=x(k)`
  grid-template-columns: auto 1fr auto;
  grid-template-areas: 'startAction slides endAction';
`,Jc=x(I)`
  grid-area: slides;
`,mn=x(k)`
  grid-area: ${({$area:e})=>e};

  &:focus svg path,
  &:hover svg path {
    fill: ${({theme:e})=>e.colors.neutral900};
  }
`,ed=i.forwardRef(({actions:e,children:t,label:o,nextLabel:r,onNext:a,onPrevious:s,previousLabel:c,secondaryLabel:l,selectedSlide:u,...h},f)=>{const m=i.useRef(null),d=i.useRef(null),p=i.Children.map(t,(b,w)=>i.cloneElement(b,{selected:w===u})),g=b=>{switch(b.key){case le.RIGHT:{b.preventDefault(),d?.current&&d.current.focus(),a&&a();break}case le.LEFT:{b.preventDefault(),m?.current&&m.current.focus(),s&&s();break}}};return n.jsx(k,{ref:f,...h,onKeyDown:g,children:n.jsxs(k,{padding:2,borderColor:"neutral200",hasRadius:!0,background:"neutral100",children:[n.jsxs(Xc,{tag:"section","aria-roledescription":"carousel","aria-label":o,display:"grid",position:"relative",children:[p&&p.length>1&&n.jsxs(n.Fragment,{children:[n.jsx(mn,{tag:"button",onClick:s,$area:"startAction",ref:m,type:"button",children:n.jsx(et,{label:c,children:n.jsx(zn,{width:"1.6rem",height:"1.6rem",fill:"neutral600"})})}),n.jsx(mn,{tag:"button",onClick:a,$area:"endAction",ref:d,type:"button",children:n.jsx(et,{label:r,children:n.jsx(bo,{width:"1.6rem",height:"1.6rem",fill:"neutral600"})})})]}),n.jsx(Jc,{"aria-live":"polite",paddingLeft:2,paddingRight:2,width:"100%",overflow:"hidden",children:p}),e]}),l&&n.jsx(k,{paddingTop:2,paddingLeft:4,paddingRight:4,children:n.jsx(Gr,{label:l,children:n.jsx(I,{justifyContent:"center",children:n.jsx(P,{variant:"pi",textColor:"neutral600",ellipsis:!0,children:l})})})})]})})}),Oe=(e="&")=>({theme:t,$hasError:o=!1})=>E`
    outline: none;
    box-shadow: none;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${e}:focus-within {
      border: 1px solid ${o?t.colors.danger600:t.colors.primary600};
      box-shadow: ${o?t.colors.danger600:t.colors.primary600} 0px 0px 0px 2px;
    }
  `,[td,me]=bt("Field",{}),Ue=i.forwardRef(({children:e,name:t,error:o=!1,hint:r,id:a,required:s=!1,...c},l)=>{const u=we(a),[h,f]=i.useState();return n.jsx(td,{name:t,id:u,error:o,hint:r,required:s,labelNode:h,setLabelNode:f,children:n.jsx(I,{direction:"column",alignItems:"stretch",gap:1,ref:l,...c,children:e})})}),Qo=i.forwardRef(({children:e,action:t,...o},r)=>{const{id:a,required:s,setLabelNode:c}=me("Label"),l=he(r,c);return e?n.jsxs(od,{ref:l,variant:"pi",textColor:"neutral800",fontWeight:"bold",...o,id:`${a}-label`,htmlFor:a,tag:"label",ellipsis:!0,children:[e,s&&n.jsx(P,{"aria-hidden":!0,lineHeight:"1em",textColor:"danger600",children:"*"}),t&&n.jsx(nd,{marginLeft:1,children:t})]}):null}),od=x(P)`
  display: flex;
`,nd=x(I)`
  line-height: 0;
  color: ${({theme:e})=>e.colors.neutral500};
`,Bt=i.forwardRef(({endAction:e,startAction:t,disabled:o=!1,onChange:r,hasError:a,required:s,className:c,size:l="M",...u},h)=>{const{id:f,error:m,hint:d,name:p,required:g}=me("Input");let b;m?b=`${f}-error`:d&&(b=`${f}-hint`);const w=!!m,y=i.useRef(null),$=i.useRef(null),C=he($,h),v=T=>{!o&&r&&r(T)};return i.useLayoutEffect(()=>{if(y.current&&$.current){const T=y.current.offsetWidth,S=$.current;if(S){const j=T+8+16;S.style.paddingRight=`${j}px`}}},[e]),n.jsxs(sd,{gap:2,justifyContent:"space-between",$hasError:w||a,$disabled:o,$size:l,$hasLeftAction:!!t,$hasRightAction:!!e,className:c,children:[t,n.jsx(rd,{id:f,name:p,ref:C,$size:l,"aria-describedby":b,"aria-invalid":w||a,"aria-disabled":o,disabled:o,"data-disabled":o?"":void 0,onChange:v,"aria-required":g||s,$hasLeftAction:!!t,$hasRightAction:!!e,...u}),e&&n.jsx(ad,{ref:y,children:e})]})}),rd=x.input`
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius};
  cursor: ${e=>e["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:e})=>e.colors.neutral800};
  font-weight: 400;
  font-size: ${e=>e.theme.fontSizes[2]};
  line-height: 2.2rem;
  display: block;
  width: 100%;
  background: inherit;

  &::placeholder {
    color: ${({theme:e})=>e.colors.neutral600};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }

  ${e=>{switch(e.$size){case"S":return E`
          padding-inline-start: ${e.$hasLeftAction?0:e.theme.spaces[4]};
          padding-inline-end: ${e.$hasRightAction?0:e.theme.spaces[4]};
          padding-block: ${e.theme.spaces[1]};
        `;default:return E`
          padding-inline-start: ${e.$hasLeftAction?0:e.theme.spaces[4]};
          padding-inline-end: ${e.$hasRightAction?0:e.theme.spaces[4]};
          padding-block: ${e.theme.spaces[2]};
        `}}}
`,ad=x(I)`
  position: absolute;
  right: ${({theme:e})=>e.spaces[4]};
  top: 50%;
  transform: translateY(-50%);
`,sd=x(I)`
  border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  padding-inline-start: ${({$hasLeftAction:e,theme:t})=>e?t.spaces[4]:0};
  position: relative;

  ${Oe()}
  ${({theme:e,$disabled:t})=>t?E`
          color: ${e.colors.neutral600};
          background: ${e.colors.neutral150};
        `:void 0};
`,Xr=()=>{const{id:e,hint:t,error:o}=me("Hint");return!t||o?null:n.jsx(P,{variant:"pi",tag:"p",id:`${e}-hint`,textColor:"neutral600",children:t})},Jr=()=>{const{id:e,error:t}=me("Error");return!t||typeof t!="string"?null:n.jsx(P,{variant:"pi",tag:"p",id:`${e}-error`,textColor:"danger600","data-strapi-field-error":!0,children:t})},id=i.forwardRef(({label:e,children:t,...o},r)=>n.jsx(ld,{justifyContent:"unset",background:"transparent",borderStyle:"none",...o,type:"button",tag:"button",ref:r,children:n.jsx(et,{label:e,children:t})})),ld=x(I)`
  font-size: 1.6rem;
  padding: 0;
`,cd=Object.freeze(Object.defineProperty({__proto__:null,Action:id,Error:Jr,Hint:Xr,Input:Bt,Label:Qo,Root:Ue,useField:me},Symbol.toStringTag,{value:"Module"}));i.forwardRef(({actions:e,children:t,error:o,hint:r,label:a,labelAction:s,nextLabel:c,onNext:l,onPrevious:u,previousLabel:h,required:f,secondaryLabel:m,selectedSlide:d,id:p,...g},b)=>{const w=we(p);return n.jsx(Ue,{hint:r,error:o,id:w,required:f,children:n.jsxs(I,{direction:"column",alignItems:"stretch",gap:1,children:[a&&n.jsx(Qo,{action:s,children:a}),n.jsx(ed,{ref:b,actions:e,label:a,nextLabel:c,onNext:l,onPrevious:u,previousLabel:h,secondaryLabel:m,selectedSlide:d,id:w,...g,children:t}),n.jsx(Xr,{}),n.jsx(Jr,{})]})})});x(k)`
  ${Ar}
`;x(I)`
  display: ${({$selected:e})=>e?"flex":"none"};
`;const zt=i.forwardRef(({children:e,viewportRef:t,...o},r)=>n.jsxs(dd,{ref:r,...o,children:[n.jsx(ud,{ref:t,children:e}),n.jsx(gn,{orientation:"vertical",children:n.jsx(xn,{})}),n.jsx(gn,{orientation:"horizontal",children:n.jsx(xn,{})})]})),dd=x(cs)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
`,ud=x(ds)`
  min-width: 100%;
`,gn=x(us)`
  display: flex;
  /* ensures no selection */
  user-select: none;
  /* disable browser handling of all panning and zooming gestures on touch devices */
  touch-action: none;

  &[data-orientation='vertical'] {
    width: 0.4rem;
    margin: 0.4rem;
  }

  &[data-orientation='horizontal'] {
    flex-direction: column;
    height: 0.4rem;
    margin: 0.4rem;
  }
`,xn=x(fs)`
  position: relative;
  flex: 1;
  background-color: ${e=>e.theme.colors.neutral150};
  border-radius: 0.4rem;

  /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
  }
`,fd="data:image/svg+xml,%3csvg%20width='63'%20height='63'%20viewBox='0%200%2063%2063'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M42.5563%2011.9816C39.484%2010.3071%2035.8575%209.29097%2032.3354%209.13521C28.6443%208.92888%2024.8295%209.72318%2021.3336%2011.4129C20.9123%2011.5901%2020.5376%2011.8101%2020.1722%2012.0249L20.0108%2012.1179C19.8774%2012.1951%2019.7441%2012.2724%2019.608%2012.3536C19.3253%2012.5146%2019.0492%2012.6744%2018.7544%2012.8792C18.5463%2013.0329%2018.3395%2013.1759%2018.1301%2013.323C17.5658%2013.7208%2016.9868%2014.1317%2016.4983%2014.5979C14.8476%2015.9524%2013.5571%2017.6075%2012.6071%2018.9214C10.4365%2022.1566%209.08622%2025.9567%208.80702%2029.6143L8.7764%2030.1588C8.73328%2030.9196%208.68476%2031.7057%208.75353%2032.4555C8.76648%2032.6084%208.7661%2032.7638%208.77506%2032.914C8.78895%2033.229%208.80152%2033.5373%208.846%2033.8672L9.07396%2035.4221C9.09756%2035.5764%209.1198%2035.7413%209.1633%2035.9263L9.65919%2037.9272L10.138%2039.2823C10.2729%2039.6673%2010.4158%2040.0751%2010.6%2040.43C12.0292%2043.637%2014.1425%2046.4578%2016.7063%2048.585C19.0508%2050.5296%2021.824%2052.0023%2024.7491%2052.8452L26.2371%2053.2376C26.3781%2053.2693%2026.4926%2053.2889%2026.6031%2053.3058L26.7775%2053.3311C27.0052%2053.3636%2027.2195%2053.3986%2027.4445%2053.435C27.8598%2053.5076%2028.2672%2053.5748%2028.7079%2053.6183L30.5641%2053.7229C30.9516%2053.7249%2031.3352%2053.7068%2031.7081%2053.6874C31.9039%2053.681%2032.0984%2053.6681%2032.3288%2053.662C34.5253%2053.4772%2036.5106%2053.0634%2038.0516%2052.4652C38.1769%2052.4171%2038.3008%2052.3796%2038.4234%2052.3355C38.6727%2052.2499%2038.9259%2052.167%2039.1432%2052.0599L40.8591%2051.2626L42.5702%2050.266C42.9009%2050.0682%2043.0205%2049.6414%2042.8282%2049.2984C42.632%2048.9526%2042.2034%2048.8308%2041.8634%2049.0166L40.1792%2049.9218L38.4995%2050.6224C38.3169%2050.6953%2038.121%2050.7534%2037.9224%2050.8155C37.7838%2050.8489%2037.6518%2050.8983%2037.5012%2050.9408C36.0711%2051.435%2034.2445%2051.7425%2032.244%2051.8346C32.0442%2051.8383%2031.8471%2051.8379%2031.654%2051.8403C31.3051%2051.8414%2030.9602%2051.8451%2030.6392%2051.8305L28.9177%2051.6725C28.5476%2051.619%2028.1695%2051.5427%2027.7848%2051.4678C27.5639%2051.4167%2027.3376%2051.3737%2027.1299%2051.3374L26.9529%2051.2987C26.8704%2051.2834%2026.7772%2051.2667%2026.7333%2051.2543L25.3466%2050.8322C22.7651%2049.9789%2020.33%2048.5729%2018.2942%2046.7557C16.1056%2044.7951%2014.3339%2042.2335%2013.1742%2039.3582C12.0276%2036.6013%2011.5988%2033.2792%2011.9716%2030.0076C12.3145%2027.0213%2013.3948%2024.1635%2015.1858%2021.5083C15.3034%2021.3339%2015.421%2021.1596%2015.5212%2021.0196C16.4309%2019.8688%2017.5408%2018.5589%2018.9483%2017.496C19.3367%2017.1525%2019.7862%2016.856%2020.2611%2016.5478C20.4878%2016.4009%2020.7079%2016.2553%2020.8907%2016.1306C21.0974%2016.0048%2021.3188%2015.8831%2021.5348%2015.7694C21.6761%2015.6975%2021.8162%2015.619%2021.9388%2015.5576L22.1002%2015.4646C22.4002%2015.3037%2022.6749%2015.1546%2022.9908%2015.039L24.1186%2014.5715C24.3399%2014.4844%2024.5718%2014.4159%2024.7997%2014.3447C24.953%2014.2982%2025.0982%2014.2635%2025.2635%2014.2078C25.786%2014.0182%2026.3283%2013.9112%2026.9105%2013.7965C27.117%2013.7571%2027.3302%2013.7163%2027.5608%2013.6585C27.7553%2013.611%2027.9737%2013.5969%2028.2082%2013.5762C28.364%2013.5603%2028.5172%2013.5483%2028.6318%2013.5333C28.7876%2013.5173%2028.9342%2013.5066%2029.0927%2013.4867C29.3285%2013.4555%2029.5456%2013.4347%2029.7494%2013.4337C30.0237%2013.44%2030.2994%2013.4357%2030.5777%2013.4274C31.0811%2013.421%2031.5579%2013.4197%2032.0318%2013.4914C34.9664%2013.7352%2037.7144%2014.6085%2040.2052%2016.0868C42.3489%2017.3655%2044.2716%2019.1525%2045.7607%2021.264C47.0255%2023.0628%2047.9756%2025.0528%2048.4928%2027.0393C48.572%2027.3176%2048.6299%2027.5931%2048.6839%2027.8659C48.7154%2028.0428%2048.7563%2028.2145%2048.7892%2028.3636C48.8037%2028.4541%2048.8208%2028.5406%2048.8445%2028.6258C48.8749%2028.7443%2048.8986%2028.864%2048.9116%2028.9651L48.9793%2029.6047C48.9922%2029.7748%2049.0132%2029.9331%2049.0301%2030.0887C49.0668%2030.3268%2049.0889%2030.5608%2049.0964%2030.7561L49.1083%2031.9001C49.1312%2032.3307%2049.089%2032.7116%2049.0522%2033.0673C49.0384%2033.2598%2049.0126%2033.4443%2049.0123%2033.5824C48.9961%2033.6926%2048.9918%2033.7935%2048.9836%2033.8917C48.9753%2034.0072%2048.9724%2034.1148%2048.9414%2034.2554L48.5449%2036.3059C48.3134%2037.8623%2049.3793%2039.3365%2050.9488%2039.5822C52.0417%2039.7601%2053.1536%2039.2819%2053.7711%2038.3664C54.0063%2038.0176%2054.1604%2037.6257%2054.2227%2037.2064L54.5217%2035.2574C54.5514%2035.0756%2054.572%2034.83%2054.5846%2034.5791L54.6028%2034.2338C54.6098%2034.0598%2054.6223%2033.8779%2054.6347%2033.6788C54.6734%2033.1052%2054.7163%2032.4479%2054.6619%2031.8058L54.5867%2030.4289C54.5622%2030.0952%2054.5097%2029.76%2054.4559%2029.4181C54.431%2029.2572%2054.4048%2029.0896%2054.3826%2028.9074L54.2687%2028.104C54.2332%2027.9244%2054.1804%2027.7273%2054.1329%2027.5396L54.0643%2027.2454C54.0195%2027.071%2053.9773%2026.8927%2053.9338%2026.7076C53.8455%2026.3309%2053.7479%2025.9422%2053.613%2025.5571C52.84%2023.0292%2051.5383%2020.5194%2049.8338%2018.2799C47.8544%2015.682%2045.3333%2013.5087%2042.5563%2011.9816Z'%20fill='%234945FF'/%3e%3c/svg%3e",pd=i.forwardRef(({children:e,small:t=!1,...o},r)=>n.jsxs("div",{role:"alert","aria-live":"assertive",ref:r,...o,children:[n.jsx(it,{children:e}),n.jsx(md,{src:fd,"aria-hidden":!0,$small:t})]})),hd=ie`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,md=x.img`
  animation: ${hd} 1s infinite linear;
  will-change: transform;
  ${({$small:e,theme:t})=>e&&`width: ${t.spaces[6]}; height: ${t.spaces[6]};`}
`,gd=i.forwardRef(({allowCustomValue:e,autocomplete:t,children:o,className:r,clearLabel:a="Clear",creatable:s=!1,creatableDisabled:c=!1,creatableStartIcon:l,createMessage:u=_=>`Create "${_}"`,defaultFilterValue:h,defaultTextValue:f,defaultOpen:m=!1,open:d,onOpenChange:p,disabled:g=!1,hasError:b,id:w,filterValue:y,hasMoreItems:$=!1,isPrintableCharacter:C,loading:v=!1,loadingMessage:T="Loading content...",name:S,noOptionsMessage:j=()=>"No results found",onChange:V,onClear:D,onCreateOption:L,onFilterValueChange:B,onInputChange:M,onTextValueChange:A,onLoadMore:N,placeholder:W="Select or enter a value",required:H=!1,size:U="M",startIcon:G,textValue:K,value:ee,...Y},se)=>{const[_,ne]=Te({prop:d,defaultProp:m,onChange:p}),[J,fe]=Te({prop:K,defaultProp:e&&!f?ee:f,onChange:A}),[R,z]=Te({prop:y,defaultProp:h,onChange:B}),Q=i.useRef(null),F=i.useRef(null),O=he(F,se),q=i.useRef(null),ce=ge=>{D&&!g&&(fe(""),z(""),D(ge),F.current.focus())},de=ge=>{ne(ge)},X=ge=>{fe(ge)},Ce=ge=>{z(ge)},Ie=ge=>{M&&M(ge)},va=ge=>{V&&V(ge)},Ta=ge=>{N&&$&&!v&&N(ge)},on=()=>{L&&J&&s!=="visible"?L(J):L&&s==="visible"&&(L(),ne(!1))},ja=we(),nn=`intersection-${tt(ja)}`;yt(Q,Ta,{selectorToWatch:`#${nn}`,skipWhen:!_});const{error:Ut,...Tt}=me("Combobox"),Sa=!!Ut||b,Ht=Tt.id??w,Ia=Tt.name??S,ka=Tt.required||H;let Gt;return Ut?Gt=`${Ht}-error`:Tt.hint&&(Gt=`${Ht}-hint`),n.jsxs($e.Root,{autocomplete:t||(s===!0?"list":"both"),onOpenChange:de,open:_,onTextValueChange:X,textValue:J,allowCustomValue:!!s||e,disabled:g,required:ka,value:ee,onValueChange:va,filterValue:R,onFilterValueChange:Ce,isPrintableCharacter:C,visible:s==="visible",children:[n.jsxs(xd,{$hasError:Sa,$size:U,className:r,children:[n.jsxs(I,{flex:"1",tag:"span",gap:3,children:[G?n.jsx(I,{flex:"0 0 1.6rem",tag:"span","aria-hidden":!0,children:G}):null,n.jsx(bd,{placeholder:W,id:Ht,"aria-invalid":!!Ut,onChange:Ie,ref:O,name:Ia,"aria-describedby":Gt,...Y})]}),n.jsxs(I,{tag:"span",gap:3,children:[J&&D?n.jsx(qe,{size:"XS",variant:"ghost",onClick:ce,"aria-disabled":g,"aria-label":a,label:a,ref:q,children:n.jsx(Ke,{})}):null,n.jsx($d,{children:n.jsx(Me,{fill:"neutral500"})})]})]}),n.jsx($e.Portal,{children:n.jsx(yd,{sideOffset:4,children:n.jsxs($e.Viewport,{ref:Q,children:[n.jsxs(Cd,{children:[o,s!==!0&&!v?n.jsx($e.NoValueFound,{asChild:!0,children:n.jsx(fo,{$hasHover:!1,children:n.jsx(P,{children:j(J??"")})})}):null,v?n.jsx(I,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2,children:n.jsx(pd,{small:!0,children:T})}):null,n.jsx(k,{id:nn,width:"100%",height:"1px"})]}),s?n.jsx(wd,{onPointerUp:on,onClick:on,disabled:c,asChild:!0,children:n.jsx(fo,{children:n.jsxs(I,{gap:2,children:[l&&n.jsx(k,{tag:"span","aria-hidden":!0,display:"inline-flex",children:l}),n.jsx(P,{children:u(J??"")})]})})}):null]})})})]})}),xd=x($e.Trigger)`
  position: relative;
  border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spaces[4]};

  ${e=>{switch(e.$size){case"S":return E`
          padding-inline-start: ${({theme:t})=>t.spaces[4]};
          padding-inline-end: ${({theme:t})=>t.spaces[3]};
          padding-block: ${({theme:t})=>t.spaces[1]};
        `;default:return E`
          padding-inline-start: ${({theme:t})=>t.spaces[4]};
          padding-inline-end: ${({theme:t})=>t.spaces[3]};
          padding-block: ${({theme:t})=>t.spaces[2]};
        `}}}

  &[data-disabled] {
    color: ${({theme:e})=>e.colors.neutral600};
    background: ${({theme:e})=>e.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:e,$hasError:t})=>Oe()({theme:e,$hasError:t})};
`,bd=x($e.TextInput)`
  width: 100%;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: ${({theme:e})=>e.colors.neutral800};
  padding: 0;
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.neutral600};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,$d=x($e.Icon)`
  border: none;
  background: transparent;
  padding: 0;
  color: ${({theme:e})=>e.colors.neutral600};
  display: flex;

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,yd=x($e.Content)`
  background: ${({theme:e})=>e.colors.neutral0};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};
  width: var(--radix-combobox-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({theme:e})=>e.zIndices.popover};

  &:focus-visible {
    outline: ${({theme:e})=>`2px solid ${e.colors.primary600}`};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    /* The select can't animate out yet, watch https://github.com/radix-ui/primitives/issues/1893, or take a look and solve it yourself. */
    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${te.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${te.slideDownIn};
      }
    }
  }
`,wd=x($e.CreateItem)`
  && {
    border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background: ${({theme:e})=>e.colors.neutral0};
    cursor: pointer;
    padding: ${({theme:e})=>e.spaces[1]};
    position: sticky;
    bottom: 0;
    left: 0;
  }
  &&:hover,
  &&[data-highlighted] {
    background: ${({theme:e})=>e.colors.neutral0};
  }
  &&[data-disabled] {
    color: ${({theme:e})=>e.colors.neutral600};
    cursor: not-allowed;
  }
  &&[data-disabled] svg {
    fill: ${({theme:e})=>e.colors.neutral300};
  }
  && > div {
    padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
  }
  && > div:hover,
  &&[data-highlighted] > div {
    background-color: ${({theme:e})=>e.colors.primary100};
    border-radius: ${({theme:e})=>e.borderRadius};
  }
  &&[data-disabled] > div {
    background-color: inherit;
  }
`,Cd=x(zt)`
  padding: ${({theme:e})=>e.spaces[1]};
`,vd=i.forwardRef(({children:e,value:t,disabled:o,textValue:r,...a},s)=>n.jsx($e.ComboboxItem,{asChild:!0,value:t,disabled:o,textValue:r,children:n.jsx(fo,{ref:s,...a,children:n.jsx($e.ItemText,{asChild:!0,children:n.jsx(P,{children:e})})})})),fo=x.div`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
  background-color: ${({theme:e})=>e.colors.neutral0};
  border-radius: ${({theme:e})=>e.borderRadius};
  user-select: none;

  &[data-state='checked'] {
    background-color: ${({theme:e})=>e.colors.primary100};
    color: ${({theme:e})=>e.colors.primary600};
    font-weight: bold;
  }

  &:hover,
  &[data-highlighted] {
    outline: none;
    background-color: ${({theme:e,$hasHover:t=!0})=>t?e.colors.primary100:e.colors.neutral0};
  }

  &[data-highlighted] {
    color: ${({theme:e})=>e.colors.primary600};
    font-weight: bold;
  }
`,ea=(e,t)=>`${e}${Math.floor(t*255).toString(16).padStart(2,"0")}`,Td=Da,jd=i.forwardRef((e,t)=>n.jsx(Na,{...e,asChild:!0,ref:t})),Sd=i.forwardRef((e,t)=>n.jsx(Va,{children:n.jsx(Id,{children:n.jsx(kd,{ref:t,...e})})})),Id=x(Ba)`
  background: ${e=>ea(e.theme.colors.neutral800,.2)};
  position: fixed;
  inset: 0;
  z-index: ${e=>e.theme.zIndices.overlay};
  will-change: opacity;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${te.overlayFadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,kd=x(za)`
  max-width: 42rem;
  height: min-content;
  width: calc(100% - ${({theme:e})=>e.spaces[8]});
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.neutral0};
  box-shadow: ${e=>e.theme.shadows.popupShadow};
  z-index: ${e=>e.theme.zIndices.modal};

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation-duration: ${e=>e.theme.motion.timings[200]};
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};
      animation-name: ${te.modalPopIn};
    }

    &[data-state='closed'] {
      animation-duration: ${e=>e.theme.motion.timings[120]};
      animation-timing-function: ${e=>e.theme.motion.easings.easeOutQuad};
      animation-name: ${te.modalPopOut};
    }
  }
`,Rd=i.forwardRef(({children:e,...t},o)=>n.jsx(Oa,{asChild:!0,children:n.jsx(Ad,{tag:"h2",variant:"beta",ref:o,padding:6,fontWeight:"bold",...t,children:e})})),Ad=x(P)`
  display: flex;
  justify-content: center;
  border-bottom: solid 1px ${e=>e.theme.colors.neutral150};
`,Ed=i.forwardRef(({children:e,icon:t,...o},r)=>n.jsx(I,{ref:r,gap:2,direction:"column",paddingTop:8,paddingBottom:8,paddingLeft:6,paddingRight:6,...o,children:typeof e=="string"?n.jsxs(n.Fragment,{children:[t?i.cloneElement(t,{width:24,height:24}):null,n.jsx(ta,{children:e})]}):e})),ta=i.forwardRef((e,t)=>n.jsx(La,{asChild:!0,children:n.jsx(P,{ref:t,variant:"omega",...e,tag:"p"})})),Pd=i.forwardRef((e,t)=>n.jsx(Md,{ref:t,gap:2,padding:4,justifyContent:"space-between",...e,tag:"footer"})),Md=x(I)`
  border-top: solid 1px ${e=>e.theme.colors.neutral150};
  flex: 1;
`,Dd=i.forwardRef((e,t)=>n.jsx(_a,{...e,asChild:!0,ref:t})),Nd=i.forwardRef((e,t)=>n.jsx(Fa,{...e,asChild:!0,ref:t})),Qp=Object.freeze(Object.defineProperty({__proto__:null,Action:Nd,Body:Ed,Cancel:Dd,Content:Sd,Description:ta,Footer:Pd,Header:Rd,Root:Td,Trigger:jd},Symbol.toStringTag,{value:"Module"}));function Ae(e,t){const o=i.useRef(null);return t&&o.current&&Od(t,o.current)&&(t=o.current),o.current=t??null,i.useMemo(()=>new oi(e,t),[e,t])}function Od(e,t){if(e===t)return!0;const o=Object.keys(e),r=Object.keys(t);if(o.length!==r.length)return!1;for(const a of o)if(t[a]!==e[a])return!1;return!0}Wn`
${E`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html {
    /* Sets 1rem === 10px */
    font-size: 62.5%;
  }

  body {
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    color: ${({theme:e})=>e.colors.neutral800};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    padding: 0;
    font: inherit;
  }

  button {
    border: unset;
    background: unset;
    padding: unset;
    margin: unset;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    font: unset;
  }

  #root {
    isolation: isolate;
  }

  ol,
  ul {
    list-style: none;
    padding: unset;
    margin: unset;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  *:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: 2px;
  }

  *:has(> :disabled:not(button)) {
    cursor: not-allowed !important;
  }

  [aria-disabled='true']:not(button) {
    cursor: not-allowed !important;
  }

  /* Focusing the button with a mouse, touch, or stylus will show a subtle drop shadow. */
  *:focus:not(:focus-visible) {
    outline: none;
  }

  .lock-body-scroll {
    height: 100vh;
    overflow-y: hidden;
  }
`}
`;const bn="en-EN",Ld=()=>typeof navigator>"u"?bn:navigator.language?navigator.language:bn,[Zp,Wt]=bt("StrapiDesignSystem",{locale:Ld()}),Vd=$s,Zo=i.forwardRef(({container:e=globalThis?.document?.body,...t},o)=>e?at.createPortal(n.jsx(k,{ref:o,...t}),e):null);Zo.displayName="Portal";const _d=i.forwardRef(({onClear:e,clearLabel:t="Clear",startIcon:o,disabled:r,hasError:a,children:s,id:c,size:l="M",withTags:u,...h},f)=>{const m=i.useRef(null),d=b=>{e&&!r&&(e(b),m.current.focus())},{labelNode:p}=me("SelectTrigger"),g=he(m,f);return n.jsx(ye.Trigger,{asChild:!0,children:n.jsxs(Fd,{"aria-disabled":r,$hasError:a,ref:g,alignItems:"center",justifyContent:"space-between",position:"relative",overflow:"hidden",hasRadius:!0,background:r?"neutral150":"neutral0",gap:4,cursor:"default","aria-labelledby":p?`${c}-label`:void 0,$size:l,$withTags:u,...h,children:[n.jsxs(I,{flex:"1",tag:"span",gap:3,children:[o&&n.jsx(I,{tag:"span","aria-hidden":!0,children:o}),s]}),n.jsxs(I,{tag:"span",gap:3,children:[e?n.jsx(qe,{size:"XS",variant:"ghost",onClick:d,"aria-disabled":r,"aria-label":t,label:t,children:n.jsx(Ke,{})}):null,n.jsx(Bd,{children:n.jsx(Me,{})})]})]})})}),Fd=x(I)`
  border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  ${e=>{switch(e.$size){case"S":return E`
          padding-block: ${e.theme.spaces[1]};
          padding-inline-start: ${e.$withTags?e.theme.spaces[1]:e.theme.spaces[4]};
          padding-inline-end: ${e.theme.spaces[3]};
        `;default:return E`
          padding-block: ${e.$withTags?"0.3rem":e.theme.spaces[2]};
          padding-inline-start: ${e.$withTags?e.theme.spaces[1]:e.theme.spaces[4]};
          padding-inline-end: ${e.theme.spaces[3]};
        `}}}
  cursor: pointer;

  &[aria-disabled='true'] {
    color: ${e=>e.theme.colors.neutral500};
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:e,$hasError:t})=>Oe()({theme:e,$hasError:t})};
`,Bd=x(ye.Icon)`
  display: flex;
  & > svg {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,zd=i.forwardRef(({children:e,placeholder:t,...o},r)=>n.jsx(Wd,{ref:r,ellipsis:!0,...o,children:n.jsx(qd,{placeholder:t,children:e})})),Wd=x(P)`
  flex: 1;
  font-size: 1.4rem;
  line-height: 2.2rem;
  min-height: 2.2rem;
`,qd=x(ye.Value)`
  display: flex;
  gap: ${({theme:e})=>e.spaces[1]};
  flex-wrap: wrap;
`,Ud=i.forwardRef((e,t)=>n.jsx(Hd,{ref:t,...e,children:n.jsx(zt,{children:e.children})})),Hd=x(ye.Content)`
  background: ${({theme:e})=>e.colors.neutral0};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};
  min-width: var(--radix-select-trigger-width);
  max-height: 15.6rem;
  z-index: ${({theme:e})=>e.zIndices.popover};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    /* The select can't animate out yet, watch https://github.com/radix-ui/primitives/issues/1893, or take a look and solve it yourself. */
    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${te.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${te.slideDownIn};
      }
    }
  }
`,Gd=x(ye.Viewport)`
  padding: ${({theme:e})=>e.spaces[1]};
`,Kd=i.forwardRef((e,t)=>n.jsx(Qd,{ref:t,...e})),Yd=E`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  border-radius: ${e=>e.theme.borderRadius};
  padding: ${e=>`${e.theme.spaces[2]} ${e.theme.spaces[4]}`};
  padding-left: ${({theme:e})=>e.spaces[4]};
  background-color: ${({theme:e})=>e.colors.neutral0};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
  white-space: nowrap;
  user-select: none;
  color: ${({theme:e})=>e.colors.neutral800};

  &:focus-visible {
    outline: none;
    background-color: ${({theme:e})=>e.colors.primary100};
    cursor: pointer;
  }
`,Qd=x(ye.Item)`
  ${Yd}

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary100};
    cursor: pointer;
  }
`,oa=ye.Root,na=_d,ra=zd,aa=ye.Portal,sa=Ud,ia=Gd,Xo=Kd,la=ye.ItemIndicator,ca=ye.ItemText,Zd=ye.Group,$n=i.forwardRef(({children:e,clearLabel:t="Clear",customizeContent:o,disabled:r,hasError:a,id:s,name:c,onChange:l,onClear:u,onCloseAutoFocus:h,onReachEnd:f,placeholder:m,required:d,size:p,startIcon:g,value:b,...w},y)=>{const[$,C]=i.useState(),[v,T]=i.useState(!1),S=Y=>{T(Y)},j=Y=>{u&&u(Y),l||C("")},V=Y=>{l?l(typeof b=="number"?Number(Y):Y):C(Y)},D=i.useRef(null),L=we(),B=`intersection-${tt(L)}`;yt(D,Y=>{f&&f(Y)},{selectorToWatch:`#${B}`,skipWhen:!v});const{error:A,required:N,...W}=me("SingleSelect"),H=!!A||a,U=W.id??s,G=W.name??c;let K;A?K=`${U}-error`:W.hint&&(K=`${U}-hint`);const ee=(typeof b<"u"&&b!==null?b.toString():$)??"";return n.jsxs(oa,{onOpenChange:S,disabled:r,required:N??d,onValueChange:V,value:ee,...w,children:[n.jsx(na,{ref:y,id:U,name:G,startIcon:g,hasError:H,disabled:r,clearLabel:t,onClear:ee&&u?j:void 0,"aria-label":w["aria-label"],"aria-describedby":K??w["aria-describedby"],size:p,children:n.jsx(ra,{placeholder:m,textColor:ee?"neutral800":"neutral600",children:ee&&o?o(ee):void 0})}),n.jsx(aa,{children:n.jsx(sa,{position:"popper",sideOffset:4,onCloseAutoFocus:h,children:n.jsxs(ia,{ref:D,children:[e,n.jsx(k,{id:B,width:"100%",height:"1px"})]})})})]})}),yn=i.forwardRef(({value:e,startIcon:t,children:o,...r},a)=>n.jsxs(Xo,{ref:a,value:e.toString(),...r,children:[t&&n.jsx(I,{tag:"span","aria-hidden":!0,children:t}),n.jsx(P,{lineHeight:"20px",width:"100%",children:n.jsx(ca,{children:o})})]})),Xd=200,wn=15,[Jd,lt]=bt("DatePicker"),eu=i.forwardRef(({calendarLabel:e,className:t,initialDate:o,locale:r,maxDate:a,minDate:s,monthSelectLabel:c="Month",onChange:l,value:u,yearSelectLabel:h="Year",hasError:f,id:m,name:d,disabled:p=!1,required:g=!1,onClear:b,clearLabel:w="Clear",size:y="M",...$},C)=>{const v=eo(),T=Wt("DatePicker"),S=r??T.locale,j=Ae(S,{day:"2-digit",month:"2-digit",year:"numeric"}),[V,D]=i.useState(!1),[L,B]=i.useState(null),[M,A]=i.useState(null),[N,W]=i.useState(null),[H,U]=i.useState(),[G,K]=Te({defaultProp:o?Ve(o):void 0,prop:u?Ve(u):void 0,onChange(X){l&&l(X?.toDate(v))}}),[ee,Y]=i.useMemo(()=>{const X=o?Ve(o):$o("UTC"),Ce=s?Ve(s):X.set({day:1,month:1,year:X.year-Xd});let Ie=a?Ve(a):X.set({day:31,month:12,year:X.year+wn});return Ie.compare(Ce)<0&&(Ie=Ce.set({day:31,month:12,year:Ce.year+wn})),[Ce,Ie]},[s,a,o]),[se,_]=i.useState(tu({currentValue:G,minDate:ee,maxDate:Y})),ne=we(),J=i.useRef(null),fe=X=>{b&&!p&&(U(""),K(void 0),b(X),M?.focus())},R=i.useCallback(X=>{X&&G&&_(G),D(X)},[G]);ot(()=>{if(u){const X=Ve(u);U(j.format(X.toDate(v))),_(X)}else U("")},[u,j,v]),ot(()=>{if(o&&H===void 0){const X=Ve(o);U(j.format(X.toDate(v)))}},[o,H,j,v]);const{error:z,...Q}=me("Combobox"),F=!!z||f,O=Q.id??m,q=Q.name??d,ce=Q.required||g;let de;return z?de=`${O}-error`:Q.hint&&(de=`${O}-hint`),n.jsxs(Jd,{calendarDate:se,content:N,contentId:ne,disabled:p,locale:S,minDate:ee,maxDate:Y,open:V,onCalendarDateChange:_,onContentChange:W,onOpenChange:R,onTextInputChange:A,onTextValueChange:U,onTriggerChange:B,onValueChange:K,onClear:b,required:ce,textInput:M,textValue:H,timeZone:v,trigger:L,value:G,children:[n.jsxs(nu,{className:t,hasError:F,size:y,children:[n.jsx(ps,{fill:"neutral500","aria-hidden":!0}),n.jsx(su,{ref:C,"aria-describedby":de,id:O,name:q,...$}),H&&b?n.jsx(qe,{size:"XS",variant:"ghost",onClick:fe,"aria-disabled":p,"aria-label":w,label:w,ref:J,children:n.jsx(Ke,{})}):null]}),n.jsx(Zo,{children:n.jsx(du,{label:e,children:n.jsx(mu,{monthSelectLabel:c,yearSelectLabel:h})})})]})}),Cn=e=>!!e.match(/^[^a-zA-Z]*$/),tu=({currentValue:e,minDate:t,maxDate:o})=>{const r=$o("UTC");return e||(to(t,r)===t&&oo(o,r)===o?r:to(t,r)===r?t:oo(o,r)===r?o:r)},ou="DatePickerTrigger",nu=i.forwardRef(({hasError:e,size:t,...o},r)=>{const a=lt(ou),s=he(r,l=>a.onTriggerChange(l)),c=()=>{a.disabled||a.onOpenChange(!0)};return n.jsx(mo,{asChild:!0,trapped:a.open,onMountAutoFocus:l=>{l.preventDefault()},onUnmountAutoFocus:l=>{document.getSelection()?.empty(),l.preventDefault()},children:n.jsx(ru,{ref:s,$hasError:e,$size:t,$hasOnClear:!!a.onClear,...o,hasRadius:!0,gap:3,overflow:"hidden",background:a.disabled?"neutral150":"neutral0",onClick:Be(o.onClick,()=>{a.textInput?.focus()}),onPointerDown:Be(o.onPointerDown,l=>{const u=l.target;u.hasPointerCapture(l.pointerId)&&u.releasePointerCapture(l.pointerId),(u.closest("button")??u.closest("div"))===l.currentTarget&&l.button===0&&l.ctrlKey===!1&&(c(),a.textInput?.focus())})})})}),ru=x(I)`
  min-width: ${({$hasOnClear:e})=>e?"160px":"130px"};
  border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  ${e=>{switch(e.$size){case"S":return E`
          padding-block: ${e.theme.spaces[1]};
          padding-inline: ${e.theme.spaces[3]};
        `;default:return E`
          padding-block: ${e.theme.spaces[2]};
          padding-inline: ${e.theme.spaces[3]};
        `}}}

  & > svg {
    flex: 1 0 auto;
  }

  &[data-disabled] {
    color: ${({theme:e})=>e.colors.neutral600};
    background: ${({theme:e})=>e.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:e,$hasError:t})=>Oe()({theme:e,$hasError:t})};
`,au="DatePickerTextInput",su=i.forwardRef(({placeholder:e,...t},o)=>{const r=lt(au),{onTextValueChange:a,textValue:s,onTextInputChange:c,onOpenChange:l,disabled:u,locale:h}=r,f=he(o,y=>c(y)),m=()=>{u||l(!0)},d=Ae(h,{year:"numeric",month:"2-digit",day:"2-digit"}),[p,g,b]=i.useMemo(()=>{const y=d.formatToParts(new Date),$=y.filter(T=>T.type==="year"||T.type==="month"||T.type==="day"),C=$.map(T=>{switch(T.type){case"day":return"DD";case"month":return"MM";case"year":return"YYYY";default:return""}}),v=y.find(T=>T.type==="literal")?.value??"";return[C,v,$]},[d]),w=p.map(y=>`\\d{${y.length}}`).join(`\\${g}`);return n.jsx(lu,{role:"combobox",type:"text",inputMode:"numeric",ref:f,"aria-autocomplete":"none","aria-controls":r.contentId,"aria-disabled":r.disabled,"aria-expanded":r.open,"aria-required":r.required,"aria-haspopup":"dialog","data-state":r.open?"open":"closed",disabled:u,"data-disabled":u?"":void 0,pattern:w,placeholder:e??p.join(g),...t,value:s??"",onBlur:Be(t.onBlur,()=>{if(!r.textValue){r.onValueChange(void 0);return}r.onTextValueChange(d.format(r.calendarDate.toDate(r.timeZone))),r.onValueChange(r.calendarDate)}),onChange:Be(t.onChange,y=>{if(Cn(y.target.value)){const $=y.target.value.split(g),[C,v,T]=b.map((A,N)=>{const W=$[N];return{...A,value:W}}).sort((A,N)=>A.type==="year"?1:N.type==="year"?-1:A.type==="month"?1:N.type==="month"?-1:0).map(A=>A.value),S=r.calendarDate.year;let j=r.calendarDate.year;if(T){const A=T.length===1?`0${T}`:T;j=T.length<3?Number(`${S}`.slice(0,4-A.length)+A):Number(A)}T&&T.length<3&&j>r.maxDate.year&&(j-=100);const V=r.calendarDate.set({year:j}),D=V.calendar.getMonthsInYear(V),L=V.set({month:v&&Number(v)<=D?Number(v):void 0}),B=L.calendar.getDaysInMonth(L),M=L.set({day:C&&Number(C)<=B?Number(C):void 0});r.onCalendarDateChange(iu(M,r.minDate,r.maxDate)),r.onTextValueChange(y.target.value)}}),onKeyDown:Be(t.onKeyDown,y=>{if(!r.open&&(Cn(y.key)||["ArrowDown","Backspace"].includes(y.key)))m();else if(["Tab"].includes(y.key)&&r.open)y.preventDefault();else if(["Escape"].includes(y.key))r.open?r.onOpenChange(!1):(r.onValueChange(void 0),r.onTextValueChange("")),y.preventDefault();else if(r.open&&["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(y.key))switch(y.preventDefault(),y.key){case"ArrowDown":{const $=r.calendarDate.add({weeks:1});if(r.maxDate&&$.compare(r.maxDate)>0)return;r.onCalendarDateChange($);return}case"ArrowRight":{const $=r.calendarDate.add({days:1});if(r.maxDate&&$.compare(r.maxDate)>0)return;r.onCalendarDateChange($);return}case"ArrowUp":{const $=r.calendarDate.subtract({weeks:1});if(r.minDate&&$.compare(r.minDate)<0)return;r.onCalendarDateChange($);return}case"ArrowLeft":{const $=r.calendarDate.subtract({days:1});if(r.minDate&&$.compare(r.minDate)<0)return;r.onCalendarDateChange($)}}else r.open&&["Enter"].includes(y.key)&&(y.preventDefault(),a(d.format(r.calendarDate.toDate(r.timeZone))),r.onValueChange(r.calendarDate),r.onOpenChange(!1))})})});function iu(e,t,o){return t&&(e=oo(e,t)),o&&(e=to(e,o)),e}const lu=x.input`
  width: 100%;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: ${({theme:e})=>e.colors.neutral800};
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.neutral600};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,cu="DatePickerContent",du=i.forwardRef((e,t)=>{const[o,r]=i.useState(),a=lt(cu);if(ot(()=>{r(new DocumentFragment)},[]),!a.open){const s=o;return s?at.createPortal(n.jsx("div",{children:e.children}),s):null}return n.jsx(fu,{...e,ref:t})}),uu="DatePickerContent",fu=i.forwardRef((e,t)=>{const{label:o="Choose date",...r}=e,{onOpenChange:a,...s}=lt(uu),{x:c,y:l,refs:u,strategy:h,placement:f}=hs({strategy:"fixed",placement:"bottom-start",middleware:[ms({mainAxis:4}),gs(),xs()],elements:{reference:s.trigger},whileElementsMounted:bs});i.useEffect(()=>{const d=()=>{a(!1)};return window.addEventListener("blur",d),window.addEventListener("resize",d),()=>{window.removeEventListener("blur",d),window.removeEventListener("resize",d)}},[a]);const m=he(t,d=>s.onContentChange(d),u.setFloating);return go(),n.jsx(xo,{allowPinchZoom:!0,children:n.jsx(Vd,{asChild:!0,onFocusOutside:d=>{d.preventDefault()},onDismiss:()=>{a(!1)},children:n.jsx(pu,{ref:m,"data-state":s.open?"open":"closed","data-side":f.includes("top")?"top":"bottom",onContextMenu:d=>d.preventDefault(),id:s.contentId,role:"dialog","aria-modal":"true","aria-label":o,style:{left:c,top:l,position:h},hasRadius:!0,background:"neutral0",padding:1,...r})})})}),pu=x(k)`
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  z-index: ${({theme:e})=>e.zIndices.popover};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${te.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${te.slideDownIn};
      }
    }
  }
`,hu="DatePickerCalendar",mu=i.forwardRef(({monthSelectLabel:e,yearSelectLabel:t,...o},r)=>{const{locale:a,timeZone:s,minDate:c,maxDate:l,calendarDate:u,onCalendarDateChange:h}=lt(hu),f=ys(u),m=i.useMemo(()=>{const C=c.year,v=l.year;return[...Array(v-C+1).keys()].map(T=>(C+T).toString())},[c,l]),d=Ae(a,{month:"long"}),p=i.useMemo(()=>[...Array(u.calendar.getMonthsInYear(u)).keys()].map(C=>d.format(u.set({month:C+1}).toDate(s))),[u,d,s]),g=Ae(a,{weekday:"short"}),b=i.useMemo(()=>{const C=qn($o(s),a);return[...new Array(7).keys()].map(v=>{const S=C.add({days:v}).toDate(s);return g.format(S)})},[s,a,g]),w=C=>{if(typeof C=="number")return;const v=u.set({month:p.indexOf(C)+1});h(v)},y=C=>{if(typeof C=="number")return;const v=u.set({year:parseInt(C,10)});h(v)},$=gu(f,a);return n.jsxs(I,{ref:r,direction:"column",alignItems:"stretch",padding:4,...o,children:[n.jsxs(xu,{justifyContent:"flex-start",paddingBottom:4,paddingLeft:2,paddingRight:2,gap:2,children:[n.jsx(Ue,{children:n.jsx($n,{"aria-label":e,value:p[u.month-1],onChange:w,children:p.map(C=>n.jsx(yn,{value:C,children:C},C))})}),n.jsx(Ue,{children:n.jsx($n,{value:u.year.toString(),"aria-label":t,onChange:y,children:m.map(C=>n.jsx(yn,{value:C,children:C},C))})})]}),n.jsxs("table",{role:"grid",children:[n.jsx("thead",{"aria-hidden":!0,children:n.jsx("tr",{"aria-rowindex":0,children:b.map((C,v)=>n.jsx(bu,{"aria-colindex":v,children:C},C))})}),n.jsx("tbody",{children:[...new Array(6).keys()].map(C=>n.jsx("tr",{"aria-rowindex":C+2,children:$(C).map((v,T)=>v?n.jsx(wu,{"aria-colindex":T+1,date:v,startDate:f,disabled:c.compare(v)>0||v.compare(l)>0},v.toString()):n.jsx(da,{"aria-colindex":T+1},T+1))},C))})]})]})}),gu=(e,t)=>o=>{let r=e.add({weeks:o});const a=[];r=qn(r,t);const s=ws(r,t);for(let c=0;c<s;c++)a.push(null);for(;a.length<7;){a.push(r);const c=r.add({days:1});if(Un(r,c))break;r=c}for(;a.length<7;)a.push(null);return a},xu=x(I)`
  div[role='combobox'] {
    border: 1px solid transparent;
    background: transparent;
    font-weight: ${e=>e.theme.fontWeights.bold};

    svg {
      fill: ${({theme:e})=>e.colors.neutral500};
    }

    &:hover {
      background-color: ${({theme:e})=>e.colors.neutral100};
    }
  }
`,bu=i.forwardRef(({children:e,...t},o)=>n.jsx($u,{tag:"th",role:"gridcell",ref:o,...t,height:"2.4rem",width:"3.2rem",children:n.jsx(P,{variant:"pi",fontWeight:"bold",color:"neutral800",children:e.slice(0,2)})})),$u=x(k)`
  border-radius: ${({theme:e})=>e.borderRadius};
  text-transform: capitalize;
`,yu="DatePickerCalendarCell",wu=i.forwardRef(({date:e,startDate:t,disabled:o,...r},a)=>{const{timeZone:s,locale:c,calendarDate:l,onValueChange:u,onOpenChange:h,onTextValueChange:f,onCalendarDateChange:m}=lt(yu),d=Un(l,e),p=Ae(c,{weekday:"long",day:"numeric",month:"long",year:"numeric"}),g=i.useMemo(()=>p.format(e.toDate(s)),[p,e,s]),b=Ae(c,{day:"numeric",calendar:e.calendar.identifier}),w=i.useMemo(()=>b.formatToParts(e.toDate(s)).find(T=>T.type==="day").value,[b,e,s]),y=Ae(c,{day:"2-digit",month:"2-digit",year:"numeric"}),$=Cs(t),C=e.compare(t)<0||e.compare($)>0;let v="neutral900";return d?v="primary600":C&&(v="neutral600"),n.jsx(da,{tag:"td",role:"gridcell",ref:a,"aria-selected":d,...r,hasRadius:!0,"aria-label":g,tabIndex:d?0:-1,background:d?"primary100":"neutral0",cursor:"pointer",onPointerDown:Be(r.onPointerDown,T=>{T.preventDefault(),m(e),u(e),f(y.format(e.toDate(s))),h(!1)}),"aria-disabled":o,children:n.jsx(P,{variant:"pi",textColor:v,children:w})})}),da=x(k)`
  text-align: center;
  padding: 0.7rem;
  // Trick to prevent the outline from overflowing because of the general outline-offset
  outline-offset: -2px !important;
  &[aria-disabled='true'] {
    pointer-events: none;
    opacity: 0.5;
  }

  &[aria-disabled='false'] {
    &:hover {
      background: ${({theme:e})=>e.colors.primary100};
      color: ${({theme:e})=>e.colors.primary600};
    }
  }
`,Ve=e=>{const t=e.toISOString(),o=vs(t,"UTC");return Ts(o)},Qt=e=>!!e.match(/^[^a-zA-Z]*$/);function Cu(e=""){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}const vu=x(gd)`
  min-width: ${({onClear:e})=>e?"160px":"130px"};
`,Tu=i.forwardRef(({step:e=15,value:t,defaultValue:o,onChange:r,...a},s)=>{const c=Wt("TimePicker"),[l,u]=i.useState(""),[h,f]=Te({prop:t,defaultProp:o,onChange:r}),m=Ae(c.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}),d=i.useMemo(()=>{const v=m.formatToParts(new Date),{value:T}=v.find(S=>S.type==="literal");return T},[m]),p=i.useMemo(()=>{const v=60/e;return[...Array(24).keys()].flatMap(T=>[...Array(v).keys()].map(S=>m.format(new Date(0,0,0,T,S*e))))},[e,m]),g=v=>{(!v||Qt(v))&&u(v)},b=v=>{const[T,S]=v.split(d);if(!T&&!S)return;const j=Number(T??"0"),V=Number(S??"0");if(!(j>23||V>59))return m.format(new Date(0,0,0,j,V))},w=v=>{const T=b(v.target.value);T?(u(T),f(T)):u(h)},y=v=>{if(typeof v<"u"){const T=b(v);f(T)}else f(v)};i.useEffect(()=>{const v=typeof t>"u"?"":t;Qt(v)&&u(v)},[t,u]);const C=`\\d{2}${Cu(d)}\\d{2}`;return n.jsx(vu,{...a,ref:s,value:h,onChange:y,isPrintableCharacter:Qt,allowCustomValue:!0,placeholder:`--${d}--`,autocomplete:"none",startIcon:n.jsx(js,{fill:"neutral500"}),inputMode:"numeric",pattern:C,textValue:l,onTextValueChange:g,onBlur:w,children:p.map(v=>n.jsx(vd,{value:v,children:v},v))})});i.forwardRef(({clearLabel:e="clear",dateLabel:t="Choose date",timeLabel:o="Choose time",disabled:r=!1,hasError:a,onChange:s,onClear:c,required:l=!1,step:u,value:h,initialDate:f,size:m,...d},p)=>{const g=i.useRef(null),[b,w]=Te({defaultProp:f?ct(f,!1):void 0,prop:h?ct(h,!1):h??void 0,onChange(A){s&&s(A?.toDate(eo()))}}),y=Wt("DateTimePicker"),$=Ae(y.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}),C=b?$.format(b.toDate(eo())):"",v=A=>{let N=A?ct(A):void 0;if(!(N&&b&&N.compare(b)===0)){if(C&&N){const[W,H]=C.split(":");N=N.set({hour:parseInt(W,10),minute:parseInt(H,10)})}w(N)}},T=A=>{if(!A)return;const[N,W]=A.split(":"),H=b?b.set({hour:parseInt(N,10),minute:parseInt(W,10)}):ct(new Date).set({hour:parseInt(N,10),minute:parseInt(W,10)});w(H)},S=A=>{w(void 0),c&&c(A)},j=()=>{const A=b?b.set({hour:0,minute:0}):ct(new Date);w(A)},V=he(g,p),{error:D,id:L,labelNode:B}=me("DateTimePicker"),M=!!D||a;return n.jsxs(I,{"aria-labelledby":B?`${L}-label`:void 0,role:"group",flex:"1",gap:1,wrap:"wrap",children:[n.jsx(Ue,{flex:"1",children:n.jsx(eu,{...d,size:m,value:b?.toDate("UTC"),onChange:v,required:l,onClear:c?S:void 0,clearLabel:`${e} date`,disabled:r,ref:V,"aria-label":t})}),n.jsx(Ue,{flex:"1",children:n.jsx(Tu,{size:m,hasError:M,value:C,onChange:T,onClear:c&&C!==void 0&&C!=="00:00"?j:void 0,clearLabel:`${e} time`,required:l,disabled:r,step:u,"aria-label":o})})]})});const ct=(e,t=!0)=>{const o=e.toISOString();let r=Ss(o);return t&&(r=r.set({hour:0,minute:0})),Is(r)},ju=i.forwardRef((e,t)=>n.jsx(Su,{ref:t,background:"neutral150",...e,"data-orientation":"horizontal",role:"separator",tag:"div"})),Su=x(k)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
`,Iu=x(k)`
  svg {
    height: 8.8rem;
  }
`,Xp=i.forwardRef(({icon:e,content:t,action:o,hasRadius:r=!0,shadow:a="tableShadow"},s)=>n.jsxs(I,{ref:s,alignItems:"center",direction:"column",padding:11,background:"neutral0",hasRadius:r,shadow:a,children:[e?n.jsx(Iu,{paddingBottom:6,"aria-hidden":!0,children:e}):null,n.jsx(k,{paddingBottom:4,children:n.jsx(P,{variant:"delta",tag:"p",textAlign:"center",textColor:"neutral600",children:t})}),o]})),ua=Hn.define(),fa=Hn.define(),ku=Gn.mark({attributes:{style:"background-color: yellow; color: black"}}),Ru=ks.define({create(){return Gn.none},update(e,t){return e=e.map(t.changes),t.effects.forEach(o=>{o.is(ua)?e=e.update({add:o.value,sort:!0}):o.is(fa)&&(e=e.update({filter:o.value}))}),e},provide:e=>Rs.decorations.from(e)});i.forwardRef(({hasError:e,required:t,id:o,value:r="",disabled:a=!1,onChange:s=()=>null,...c},l)=>{const u=i.useRef(),h=i.useRef(),f=i.useRef(),{error:m,...d}=me("JsonInput"),p=!!m||e,g=d.id??o,b=d.required||t;let w;m?w=`${g}-error`:d.hint&&(w=`${g}-hint`);const y=D=>{const L=h.current?.doc;if(L){const{text:B,to:M}=L.line(D),A=M-B.trimStart().length;M>A&&f.current?.dispatch({effects:ua.of([ku.range(A,M)])})}},$=()=>{const D=h.current?.doc;if(D){const L=D.length||0;f.current?.dispatch({effects:fa.of((B,M)=>M<=0||B>=L)})}},C=({state:D,view:L})=>{f.current=L,h.current=D,$();const M=ni()(L);M.length&&y(D.doc.lineAt(M[0].from).number)},v=(D,L)=>{C(L),s(D)},T=(D,L)=>{f.current=D,h.current=L,C({view:D,state:L})},{setContainer:S,view:j}=As({value:r,onCreateEditor:T,container:u.current,editable:!a,extensions:[Es(),Ru],onChange:v,theme:"dark",basicSetup:{lineNumbers:!0,bracketMatching:!0,closeBrackets:!0,indentOnInput:!0,syntaxHighlighting:!0,highlightSelectionMatches:!0,tabSize:2}}),V=he(u,S);return i.useImperativeHandle(l,()=>({...j?.dom,focus(){j&&j.focus()},scrollIntoView(D){j&&j.dom.scrollIntoView(D)}}),[j]),n.jsx(Au,{ref:V,$disabled:a,$hasError:p,alignItems:"stretch",fontSize:2,hasRadius:!0,"aria-required":b,id:g,"aria-describedby":w,...c})});const Au=x(I)`
  line-height: ${({theme:e})=>e.lineHeights[2]};

  .cm-editor {
    /** 
     * Hard coded since the color is the same between themes,
     * theme.colors.neutral800 changes between themes 
     */
    background-color: #32324d;
    width: 100%;
    outline: none;
    cursor: ${({$disabled:e})=>e?"not-allowed":"text"};
  }

  .cm-scroller {
    border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
    /* inputFocusStyle will receive hasError prop */
    ${Oe()}
  }

  .cm-editor,
  .cm-scroller {
    border-radius: ${({theme:e})=>e.borderRadius};
  }

  .cm-gutters,
  .cm-activeLineGutter {
    /** 
     * Hard coded since the color is the same between themes,
     * theme.colors.neutral700 changes between themes 
     */
    background-color: #4a4a6a;
  }
`,Eu=ue(({disabled:e,...t},o)=>n.jsx(ze,{ref:o,tag:$t,tabIndex:e?-1:void 0,disabled:e,...t})),Pu=x(k)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,Jp=({labelledBy:e="main-content-title",...t})=>n.jsx(Pu,{"aria-labelledby":e,tag:"main",id:"main-content",tabIndex:-1,...t});x(k)`
  text-decoration: none;

  &:focus {
    left: ${({theme:e})=>e.spaces[3]};
    top: ${({theme:e})=>e.spaces[3]};
  }
`;i.forwardRef((e,t)=>n.jsx(Ps,{...e,asChild:!0,ref:t}));i.forwardRef((e,t)=>n.jsx(Ms,{children:n.jsx(Mu,{children:n.jsx(Du,{ref:t,...e})})}));const Mu=x(Ds)`
  background: ${e=>ea(e.theme.colors.neutral800,.2)};
  position: fixed;
  inset: 0;
  z-index: ${e=>e.theme.zIndices.overlay};
  will-change: opacity;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${te.overlayFadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,Du=x(Ns)`
  max-width: 83rem;
  max-height: 90vh;
  height: auto;
  width: calc(100% - ${({theme:e})=>e.spaces[8]});
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.neutral0};
  box-shadow: ${e=>e.theme.shadows.popupShadow};
  z-index: ${e=>e.theme.zIndices.modal};

  ${({theme:e})=>e.breakpoints.medium} {
    width: calc(100% - ${({theme:e})=>e.spaces[9]});
  }
  > form {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation-duration: ${e=>e.theme.motion.timings[200]};
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};
      animation-name: ${te.modalPopIn};
    }

    &[data-state='closed'] {
      animation-duration: ${e=>e.theme.motion.timings[120]};
      animation-timing-function: ${e=>e.theme.motion.easings.easeOutQuad};
      animation-name: ${te.modalPopOut};
    }
  }
`,Nu=i.forwardRef((e,t)=>n.jsx(Os,{...e,asChild:!0,ref:t}));i.forwardRef(({children:e,closeLabel:t="Close modal",...o},r)=>n.jsxs(Ou,{ref:r,padding:4,paddingLeft:5,paddingRight:5,background:"neutral100",justifyContent:"space-between",...o,tag:"header",children:[e,n.jsx(Nu,{children:n.jsx(qe,{withTooltip:!1,label:t,children:n.jsx(Ke,{})})})]}));const Ou=x(I)`
  border-bottom: solid 1px ${e=>e.theme.colors.neutral150};
`;i.forwardRef((e,t)=>n.jsx(Ls,{asChild:!0,children:n.jsx(P,{tag:"h2",variant:"omega",fontWeight:"bold",ref:t,...e})}));i.forwardRef(({children:e,...t},o)=>n.jsx(Lu,{ref:o,...t,children:e}));const Lu=x(zt)`
  padding-inline: ${e=>e.theme.spaces[7]};

  & > div {
    padding-block: ${e=>e.theme.spaces[8]};
    /* Add negative margin and padding to avoid cropping the box shadow when the inputs are focused */
    margin: 0 -2px 0 -2px;
    padding-left: 2px;
    padding-right: 2px;

    & > div {
      // the scroll area component applies a display: table to the child, which we don't want.
      display: block !important;
    }
  }
`;i.forwardRef((e,t)=>n.jsx(Vu,{ref:t,padding:4,paddingLeft:5,paddingRight:5,background:"neutral100",justifyContent:"space-between",...e,tag:"footer"}));const Vu=x(I)`
  border-top: solid 1px ${e=>e.theme.colors.neutral150};
  flex: 1;
`,_u="";i.forwardRef(({startAction:e,locale:t,onValueChange:o,value:r,step:a=1,disabled:s=!1,...c},l)=>{const u=Wt("NumberInput"),h=t||u.locale,f=i.useRef(new Vs(h,{style:"decimal"})),m=i.useRef(new _s(h,{maximumFractionDigits:20})),[d,p]=Fu({prop(S){const j=String(r);return isNaN(Number(j))||j!==S&&S!==""?S:m.current.format(Number(r))},defaultProp:_u,onChange(S){const j=f.current.parse(S??"");o(isNaN(j)?void 0:j)}}),g=S=>{p(String(S))},b=({target:{value:S}})=>{f.current.isValidPartialNumber(S)&&g(S)},y=(S=>{const j=S.toString();return j.includes(".")?j.split(".")[1].length:0})(a),$=()=>{if(!d){g(a);return}const S=f.current.parse(d),j=isNaN(S)?a:S+a,V=parseFloat(j.toFixed(y));g(m.current.format(V))},C=()=>{if(!d){g(-a);return}const S=f.current.parse(d),j=isNaN(S)?-a:S-a,V=parseFloat(j.toFixed(y));g(m.current.format(V))},v=S=>{if(!s)switch(S.key){case le.DOWN:{S.preventDefault(),C();break}case le.UP:{S.preventDefault(),$();break}}},T=()=>{if(d){const S=f.current.parse(d),j=isNaN(S)?"":m.current.format(S);g(j)}};return n.jsx(Bt,{ref:l,startAction:e,disabled:s,type:"text",inputMode:"decimal",onChange:b,onKeyDown:v,onBlur:T,value:d,endAction:n.jsxs(I,{direction:"column",children:[n.jsx(vn,{disabled:s,"aria-hidden":!0,$reverse:!0,onClick:$,tabIndex:-1,type:"button","data-testid":"ArrowUp",children:n.jsx(Me,{fill:"neutral500"})}),n.jsx(vn,{disabled:s,"aria-hidden":!0,onClick:C,tabIndex:-1,type:"button","data-testid":"ArrowDown",children:n.jsx(Me,{fill:"neutral500"})})]}),...c})});const vn=x.button`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(${({$reverse:e})=>e?"-2px":"2px"});
  cursor: ${({disabled:e})=>e?"not-allowed":void 0};
  height: 1.1rem;

  svg {
    width: 1.2rem;
    transform: ${({$reverse:e})=>e?"rotateX(180deg)":void 0};
  }
`;function Fu({prop:e,defaultProp:t,onChange:o=()=>{}}){const[r,a]=Nr({defaultProp:t,onChange:o}),s=e!==void 0,c=e instanceof Function?e(r):e,l=s?c:r,u=So(o),h=i.useCallback(f=>{if(s){const d=typeof f=="function"?f(c):f;d!==c&&(u(d),a(f))}else a(f)},[s,c,a,u]);return[l,h]}const Bu=i.createContext({activePage:1,pageCount:1}),Jo=()=>i.useContext(Bu);ue(({children:e,...t},o)=>{const{activePage:r}=Jo(),a=r===1;return n.jsxs(ha,{ref:o,"aria-disabled":a,tabIndex:a?-1:void 0,...t,children:[n.jsx(it,{children:e}),n.jsx(zn,{"aria-hidden":!0})]})});ue(({children:e,...t},o)=>{const{activePage:r,pageCount:a}=Jo(),s=r===a;return n.jsxs(ha,{ref:o,"aria-disabled":s,tabIndex:s?-1:void 0,...t,children:[n.jsx(it,{children:e}),n.jsx(bo,{"aria-hidden":!0})]})});const pa=x($t)`
  padding: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({$active:e,theme:t})=>e?t.shadows.filterShadow:void 0};
  text-decoration: none;
  display: flex;

  ${Vt}
`,ha=x(pa)`
  font-size: 1.1rem;

  svg path {
    fill: ${e=>e["aria-disabled"]?e.theme.colors.neutral300:e.theme.colors.neutral600};
  }

  &:focus,
  &:hover {
    svg path {
      fill: ${e=>e["aria-disabled"]?e.theme.colors.neutral300:e.theme.colors.neutral700};
    }
  }

  ${e=>e["aria-disabled"]?`
  pointer-events: none;
    `:void 0}
`;ue(({number:e,children:t,...o},r)=>{const{activePage:a}=Jo(),s=a===e;return n.jsxs(zu,{ref:r,...o,"aria-current":s,$active:s,children:[n.jsx(it,{children:t}),n.jsx(P,{"aria-hidden":!0,fontWeight:s?"bold":void 0,lineHeight:"revert",variant:"pi",children:e})]})});const zu=x(pa)`
  color: ${({theme:e,$active:t})=>t?e.colors.primary700:e.colors.neutral800};
  background: ${({theme:e,$active:t})=>t?e.colors.neutral0:void 0};

  &:hover {
    box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  }
`,Wu=ri,qu=si,Uu=ai,Hu=i.forwardRef((e,t)=>n.jsx(Fs,{...e,asChild:!0,ref:t})),Gu=i.forwardRef((e,t)=>n.jsx(Bs,{children:n.jsx(Ku,{sideOffset:4,side:"bottom",align:"start",...e,ref:t})})),Ku=x(zs)`
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  z-index: ${({theme:e})=>e.zIndices.popover};
  background-color: ${e=>e.theme.colors.neutral0};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${te.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${te.slideDownIn};
      }
    }

    &[data-state='closed'] {
      animation-timing-function: ${e=>e.theme.motion.easings.easeOutQuad};

      &[data-side='top'] {
        animation-name: ${te.slideUpOut};
      }

      &[data-side='bottom'] {
        animation-name: ${te.slideDownOut};
      }
    }
  }
`,Yu=i.forwardRef(({children:e,intersectionId:t,onReachEnd:o,...r},a)=>{const s=i.useRef(null),c=he(s,a),l=we();return yt(s,o??(()=>{}),{selectorToWatch:`#${tt(l)}`,skipWhen:!t||!o}),n.jsxs(Qu,{ref:c,...r,children:[e,t&&o&&n.jsx(k,{id:tt(l),width:"100%",height:"1px"})]})}),Qu=x(zt)`
  height: 20rem;
`,Pt=Object.freeze(Object.defineProperty({__proto__:null,Anchor:qu,Arrow:Uu,Content:Gu,Root:Wu,ScrollArea:Yu,Trigger:Hu},Symbol.toStringTag,{value:"Module"}));i.forwardRef(({size:e="M",value:t,...o},r)=>n.jsx(Zu,{ref:r,$size:e,...o,children:n.jsx(Xu,{style:{transform:`translate3D(-${100-(t??0)}%, 0, 0)`}})}));const Zu=x(Ws)`
  position: relative;
  overflow: hidden;
  width: ${e=>e.$size==="S"?"7.8rem":"10.2rem"};
  height: ${e=>e.$size==="S"?"0.4rem":"0.8rem"};
  background-color: ${e=>e.theme.colors.neutral600};
  border-radius: ${e=>e.theme.borderRadius};

  /* Fix overflow clipping in Safari */
  /* https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0 */
  transform: translateZ(0);
`,Xu=x(qs)`
  background-color: ${({theme:e})=>e.colors.neutral0};
  border-radius: ${({theme:e})=>e.borderRadius};
  width: 100%;
  height: 100%;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${e=>e.theme.motion.timings[320]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`;i.forwardRef((e,t)=>n.jsx(Ju,{ref:t,...e}));const Ju=x(Us)`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spaces[3]};
`;i.forwardRef(({children:e,id:t,...o},r)=>{const a=we(t);return n.jsxs(I,{gap:2,children:[n.jsx(ef,{id:a,ref:r,...o,children:n.jsx(tf,{})}),n.jsx(P,{tag:"label",htmlFor:a,children:e})]})});const ef=x(Hs)`
  background: ${e=>e.theme.colors.neutral0};
  width: 2rem;
  height: 2rem;
  flex: 0 0 2rem;
  border-radius: 50%;
  border: 1px solid ${e=>e.theme.colors.neutral300};
  position: relative;
  cursor: pointer;
  z-index: 0;

  @media (prefers-reduced-motion: no-preference) {
    transition: border-color ${e=>e.theme.motion.timings[120]}
      ${e=>e.theme.motion.easings.easeOutQuad};
  }

  &[data-state='checked'] {
    border: 1px solid ${e=>e.theme.colors.primary600};
  }

  &[data-disabled] {
    cursor: not-allowed;
    background-color: ${e=>e.theme.colors.neutral200};
  }

  /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
  }
`,tf=x(Gs)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &[data-state='checked'] {
    @media (prefers-reduced-motion: no-preference) {
      animation: ${te.popIn} ${e=>e.theme.motion.timings[200]};
    }
  }

  &::after {
    content: '';
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: ${e=>e.theme.colors.primary600};
  }
`,of=e=>{const t=e.querySelector('[tabindex="0"]');t&&t.focus()},ma=i.createContext({rowIndex:0,colIndex:0,setTableValues(){throw new Error("setTableValues must be initialized via the RawTableContext.Provider")}}),nf=()=>i.useContext(ma),rf=i.forwardRef(({colCount:e,rowCount:t,jumpStep:o=3,initialCol:r=0,initialRow:a=0,...s},c)=>{const l=i.useRef(null),u=i.useRef(!1),h=he(l,c),[f,m]=i.useState(a),[d,p]=i.useState(r),g=i.useCallback(({colIndex:y,rowIndex:$})=>{p(y),m($)},[]);i.useEffect(()=>{u.current&&of(l.current),u.current||(u.current=!0)},[d,f]);const b=y=>{switch(y.key){case le.RIGHT:{y.preventDefault(),p($=>$<e-1?$+1:$);break}case le.LEFT:{y.preventDefault(),p($=>$>0?$-1:$);break}case le.UP:{y.preventDefault(),m($=>$>0?$-1:$);break}case le.DOWN:{y.preventDefault(),m($=>$<t-1?$+1:$);break}case le.HOME:{y.preventDefault(),y.ctrlKey&&m(0),p(0);break}case le.END:{y.preventDefault(),y.ctrlKey&&m(t-1),p(e-1);break}case le.PAGE_DOWN:{y.preventDefault(),m($=>$+o<t?$+o:t-1);break}case le.PAGE_UP:{y.preventDefault(),m($=>$-o>0?$-o:0);break}}},w=i.useMemo(()=>({rowIndex:f,colIndex:d,setTableValues:g}),[d,f,g]);return n.jsx(ma.Provider,{value:w,children:n.jsx("table",{role:"grid",ref:h,"aria-rowcount":t,"aria-colcount":e,onKeyDown:b,...s})})}),dt=(e,t)=>[...e.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter(a=>!a.hasAttribute("disabled")),Zt=e=>e.filter(t=>t.tagName==="INPUT"?t.type!=="checkbox"&&t.type!=="radio":!1),ga=i.forwardRef(({coords:e={col:0,row:0},tag:t="td",...o},r)=>{const a=i.useRef(null),s=he(r,a),{rowIndex:c,colIndex:l,setTableValues:u}=nf(),[h,f]=i.useState(!1),m=g=>{const b=dt(a.current);if(b.length===0||b.length===1&&Zt(b).length===0)return;if(b.length>1&&!b.find(y=>y.tagName!=="BUTTON")){g.preventDefault();const y=b.findIndex($=>$===document.activeElement);if(g.key===le.RIGHT){const $=b[y+1];$&&(g.stopPropagation(),$.focus())}else if(g.key===le.LEFT){const $=b[y-1];$&&(g.stopPropagation(),$.focus())}return}const w=g.key===le.ENTER;if(w&&!h)f(!0);else if((g.key===le.ESCAPE||w)&&h){if(w&&document.activeElement?.tagName==="A")return;f(!1),a.current.focus()}else h&&g.stopPropagation()},d=c===e.row-1&&l===e.col-1;ot(()=>{const g=dt(a.current);g.length===0||g.length===1&&Zt(g).length!==0||g.length>1&&g.find(b=>b.tagName!=="BUTTON")?(a.current.setAttribute("tabIndex",!h&&d?"0":"-1"),g.forEach((b,w)=>{b.setAttribute("tabIndex",h?"0":"-1"),h&&w===0&&b.focus()})):g.forEach(b=>{b.setAttribute("tabIndex",d?"0":"-1")})},[h,d]);const p=i.useCallback(()=>{const g=dt(a.current);g.length>=1&&(Zt(g).length!==0||!g.find(b=>b.tagName!=="BUTTON"))&&f(!0),u({rowIndex:e.row-1,colIndex:e.col-1})},[e,u]);return ot(()=>{const g=a.current;return dt(g).forEach(w=>{w.addEventListener("focus",p)}),()=>{dt(g).forEach(y=>{y.removeEventListener("focus",p)})}},[p]),n.jsx(k,{role:"gridcell",tag:t,ref:s,onKeyDown:m,...o})}),af=e=>n.jsx(ga,{...e,tag:"th"}),sf=({children:e,...t})=>{const o=i.Children.toArray(e).map(r=>i.isValidElement(r)?i.cloneElement(r,{"aria-rowindex":1}):r);return n.jsx("thead",{...t,children:o})},lf=({children:e,...t})=>{const o=i.Children.toArray(e).map((r,a)=>i.isValidElement(r)?i.cloneElement(r,{"aria-rowindex":a+2}):r);return n.jsx("tbody",{...t,children:o})},cf=({children:e,...t})=>{const o=i.Children.toArray(e).map((r,a)=>i.isValidElement(r)?i.cloneElement(r,{"aria-colindex":a+1,coords:{col:a+1,row:t["aria-rowindex"]}}):r);return n.jsx(k,{tag:"tr",...t,children:o})},df=x(Ke)`
  font-size: 0.5rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,xa=x(Ks)`
  font-size: 1rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,uf=x.div`
  border-radius: ${({theme:e})=>e.borderRadius};
  border: 1px solid ${({theme:e})=>e.colors.neutral150}

  &:focus-within {
    ${xa} {
      fill: ${({theme:e})=>e.colors.primary600};
    }
  }
`,ff=x(Bt)`
  border: 1px solid ${({theme:e})=>e.colors.neutral150}
  height: 16px;
  padding: 0 0 0 8px;
  color: ${({theme:e})=>e.colors.neutral800};
  
  &:hover {
    button {
      cursor: pointer;
    }
  }

  ${Oe()}
`;i.forwardRef(({name:e,children:t,value:o="",onClear:r,clearLabel:a="Clear",...s},c)=>{const l=i.useRef(null),u=o.length>0,h=m=>{r(m),l.current.focus()},f=Fr(c,l);return n.jsx(uf,{children:n.jsxs(Ue,{name:e,children:[n.jsx(it,{children:n.jsx(Qo,{children:t})}),n.jsx(ff,{size:"S",ref:f,value:o,startAction:n.jsx(xa,{"aria-hidden":!0}),endAction:u?n.jsx(qe,{onClick:h,onMouseDown:m=>{m.preventDefault()},label:a,size:"XS",variant:"ghost",type:"button",children:n.jsx(df,{})}):void 0,...s})]})})});const pf=x(k)`
  display: inline-flex;
  border: none;

  & > svg {
    height: 1.2rem;
    width: 1.2rem;
  }

  & > svg path {
    fill: ${({theme:e,...t})=>t["aria-disabled"]?e.colors.neutral600:e.colors.primary600};
  }

  &:hover {
    cursor: ${({$iconAction:e})=>e?"pointer":"initial"};
  }
`,hf=({children:e,icon:t,label:o,disabled:r=!1,onClick:a,...s})=>{const c=l=>{r||!a||a(l)};return n.jsxs(I,{inline:!0,background:r?"neutral200":"primary100",color:r?"neutral700":"primary600",paddingLeft:3,paddingRight:1,borderColor:r?"neutral300":"primary200",hasRadius:!0,height:"3.2rem",...s,children:[n.jsx(mf,{$disabled:r,variant:"pi",fontWeight:"bold",children:e}),n.jsx(pf,{tag:"button",disabled:r,"aria-disabled":r,"aria-label":o,padding:2,onClick:c,$iconAction:!!a,children:t})]})},mf=x(P)`
  color: inherit;
  border-right: 1px solid ${({theme:e,$disabled:t})=>t?e.colors.neutral300:e.colors.primary200};
  padding-right: ${({theme:e})=>e.spaces[2]};
`;i.forwardRef(({children:e,clearLabel:t="Clear",customizeContent:o,disabled:r,hasError:a,id:s,name:c,onChange:l,onClear:u,onCloseAutoFocus:h,onReachEnd:f,placeholder:m,required:d,size:p,startIcon:g,value:b,withTags:w,...y},$)=>{const C=i.useRef(null),[v,T]=i.useState(),[S,j]=i.useState(!1),V=_=>{l?l(_):T(_)},D=_=>()=>{const ne=Array.isArray(b)?b.filter(J=>J!==_):(v??[]).filter(J=>J!==_);l?l(ne):T(ne)},L=_=>{j(_)},B=we(),M=`intersection-${tt(B)}`;yt(C,_=>{f&&f(_)},{selectorToWatch:`#${M}`,skipWhen:!S});const N=typeof b<"u"&&b!==null?b:v,W=_=>_&&typeof _=="object"&&_.value?n.jsx(hf,{tabIndex:-1,disabled:r,icon:n.jsx(Ke,{width:`${14/16}rem`,height:`${14/16}rem`}),onClick:D(_.value),children:_.textValue},_.value):null,{error:H,...U}=me("MultiSelect"),G=!!H||a,K=U.id??s,ee=U.name??c,Y=U.required??d;let se;return H?se=`${K}-error`:U.hint&&(se=`${K}-hint`),n.jsxs(oa,{onOpenChange:L,disabled:r,required:Y,onValueChange:V,value:N,...y,multi:!0,children:[n.jsx(na,{ref:$,id:K,name:ee,"aria-label":y["aria-label"],"aria-describedby":se??y["aria-describedby"],startIcon:g,hasError:G,disabled:r,clearLabel:t,onClear:N?.length?u:void 0,withTags:!!(w&&(N?.length??!1)),size:p,children:n.jsx(ra,{placeholder:m,textColor:N?.length?"neutral800":"neutral600",children:N?.length?w?W:o?o(N):void 0:void 0})}),n.jsx(aa,{children:n.jsx(sa,{position:"popper",sideOffset:4,onCloseAutoFocus:h,children:n.jsxs(ia,{ref:C,children:[e,n.jsx(k,{id:M,width:"100%",height:"1px"})]})})})]})});const gf=i.forwardRef(({value:e,children:t,startIcon:o,...r},a)=>n.jsxs(Xo,{ref:a,value:e.toString(),...r,children:[o&&n.jsx(k,{tag:"span","aria-hidden":!0,children:o}),n.jsx(la,{children:({isSelected:s,isIntermediate:c})=>n.jsx(Yo,{checked:c?"indeterminate":s})}),n.jsx(P,{children:n.jsx(ca,{children:t})})]}));i.forwardRef(({children:e,label:t,startIcon:o,values:r=[],...a},s)=>n.jsxs(Zd,{ref:s,children:[n.jsxs(Xo,{value:r,...a,children:[o&&n.jsx(k,{tag:"span","aria-hidden":!0,children:o}),n.jsx(la,{children:({isSelected:c,isIntermediate:l})=>n.jsx(Yo,{checked:l?"indeterminate":c})}),n.jsx(P,{children:t})]}),e]}));x(gf)`
  padding-left: ${({theme:e})=>e.spaces[7]};
`;const xf="23.2rem",bf=i.forwardRef(({...e},t)=>n.jsx($f,{ref:t,...e,tag:"nav"})),$f=x(k)`
  width: ${xf};
  background: ${({theme:e})=>e.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
  z-index: 1;
`;x(ju)`
  width: 2.4rem;
  background-color: ${({theme:e})=>e.colors.neutral200};
`;ue(({active:e,children:t,icon:o=null,withBullet:r=!1,isSubSectionChild:a=!1,...s},c)=>n.jsxs(yf,{background:"neutral100",paddingLeft:a?9:7,paddingBottom:2,paddingTop:2,ref:c,...s,children:[n.jsxs(I,{children:[o?n.jsx(wf,{children:o}):n.jsx(po,{$active:e}),n.jsx(P,{paddingLeft:2,children:t})]}),r&&n.jsx(I,{paddingRight:4,children:n.jsx(po,{$active:!0})})]}));const po=x.span`
  width: 0.4rem;
  height: 0.4rem;
  background-color: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.neutral600};
  border-radius: 50%;
`,yf=x($t)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:e})=>e.colors.neutral800};
  svg > * {
    fill: ${({theme:e})=>e.colors.neutral600};
  }

  &.active {
    ${({theme:e})=>E`
        background-color: ${e.colors.primary100};
        border-right: 2px solid ${e.colors.primary600};
        color: ${e.colors.primary700};
        font-weight: 500;
      `}

    ${po} {
      background-color: ${({theme:e})=>e.colors.primary600};
    }
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,wf=x.div`
  svg {
    height: 1.6rem;
    width: 1.6rem;
  }
`;x.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`;x(k)`
  & > svg {
    height: 0.4rem;
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`;i.forwardRef(({visibleLabels:e,onLabel:t="On",offLabel:o="Off",onCheckedChange:r,checked:a,defaultChecked:s,disabled:c,...l},u)=>{const[h,f]=Te({prop:a,defaultProp:s}),m=d=>{f(d)};return n.jsxs(I,{gap:3,children:[n.jsx(Cf,{ref:u,onCheckedChange:Be(r,m),checked:h,disabled:c,...l,children:n.jsx(vf,{})}),e?n.jsx(Tf,{"aria-hidden":!0,"data-disabled":c,"data-state":h?"checked":"unchecked",children:h?t:o}):null]})});const Cf=x(Ys)`
  width: 4rem;
  height: 2.4rem;
  border-radius: 1.2rem;
  background-color: ${({theme:e})=>e.colors.danger500};

  &[data-state='checked'] {
    background-color: ${({theme:e})=>e.colors.success500};
  }

  &[data-disabled] {
    background-color: ${({theme:e})=>e.colors.neutral300};
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.backgroundColor};
  }
`,vf=x(Qs)`
  display: block;
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.neutral0};
  transform: translateX(4px);

  &[data-state='checked'] {
    transform: translateX(20px);
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${e=>e.theme.motion.timings[120]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,Tf=x(P)`
  color: ${e=>e.theme.colors.danger600};

  &[data-state='checked'] {
    color: ${e=>e.theme.colors.success600};
  }

  &[data-disabled='true'] {
    color: ${({theme:e})=>e.colors.neutral500};
  }
`,[jf,en]=bt("Tabs");i.forwardRef(({disabled:e=!1,variant:t="regular",hasError:o,...r},a)=>n.jsx(jf,{disabled:e,hasError:o,variant:t,children:n.jsx(Sf,{ref:a,...r})}));const Sf=x(Zs)`
  width: 100%;
  position: relative;
`;i.forwardRef((e,t)=>{const{variant:o}=en("List");return n.jsx(If,{ref:t,...e,$variant:o})});const If=x(Xs)`
  display: flex;
  align-items: ${e=>e.$variant==="regular"?"flex-end":"unset"};
  position: relative;
  z-index: 0;
`;i.forwardRef(({children:e,disabled:t,...o},r)=>{const{disabled:a,variant:s,hasError:c}=en("Trigger"),l=a===!0||a===o.value||t,u=c===o.value;return n.jsxs(kf,{ref:r,...o,$hasError:u,$variant:s,disabled:l,children:[n.jsx($a,{fontWeight:"bold",variant:s==="simple"?"sigma":void 0,children:e}),s==="simple"?n.jsx(ba,{}):null]})});const ba=x.span`
  display: block;
  width: 100%;
  background-color: currentColor;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  height: 0.2rem;
`,$a=x(P)``,kf=x(Js)`
  position: relative;
  color: ${e=>e.$hasError?e.theme.colors.danger600:e.theme.colors.neutral600};
  cursor: pointer;
  z-index: 0;

  ${e=>e.$variant==="simple"?E`
        padding-block: ${t=>t.theme.spaces[4]};
        padding-inline: ${t=>t.theme.spaces[4]};

        & > ${$a} {
          line-height: 1.2rem;
        }

        &[data-state='active'] {
          color: ${e.$hasError?e.theme.colors.danger600:e.theme.colors.primary700};

          & > ${ba} {
            opacity: 1;
          }
        }
      `:E`
        padding-block: ${t=>t.theme.spaces[3]};
        padding-inline: ${t=>t.theme.spaces[3]};
        flex: 1;
        background-color: ${t=>t.theme.colors.neutral100};
        border-bottom: solid 1px ${t=>t.theme.colors.neutral150};

        &:not([data-state='active']) + &:not([data-state='active']) {
          border-left: solid 1px ${t=>t.theme.colors.neutral150};
        }

        &[data-state='active'] {
          padding-block: ${t=>t.theme.spaces[4]};
          padding-inline: ${t=>t.theme.spaces[4]};
          color: ${e.$hasError?e.theme.colors.danger600:e.theme.colors.primary700};
          border-top-right-radius: ${t=>t.theme.borderRadius};
          border-top-left-radius: ${t=>t.theme.borderRadius};
          background-color: ${t=>t.theme.colors.neutral0};
          border-bottom: solid 1px ${t=>t.theme.colors.neutral0};
          box-shadow: ${e.theme.shadows.tableShadow};
          z-index: 1;
        }
      `}

  &[data-disabled] {
    cursor: not-allowed;
    color: ${e=>e.theme.colors.neutral400};
  }
`;i.forwardRef((e,t)=>{const{variant:o}=en("Content");return n.jsx(Rf,{$variant:o,ref:t,...e})});const Rf=x(ei)`
  ${e=>e.$variant==="simple"?E``:E`
        position: relative;
        z-index: 1;
        background-color: ${t=>t.theme.colors.neutral0};
      `}
`,Af=x(k)`
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Ef=x(rf)`
  width: 100%;
  white-space: nowrap;
`,Pf=x(k)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({$overflowing:e})=>e==="both"||e==="left"?"''":void 0};
    box-shadow: ${({theme:e})=>e.shadows.tableShadow};
    width: ${({theme:e})=>e.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({$overflowing:e})=>e==="both"||e==="right"?"''":void 0};
    box-shadow: ${({theme:e})=>e.shadows.tableShadow};
    width: ${({theme:e})=>e.spaces[2]};
    right: 0;
    top: 0;
  }
`,Mf=x(k)`
  overflow-x: auto;
`,eh=i.forwardRef(({footer:e,...t},o)=>{const r=i.useRef(null),[a,s]=i.useState(),c=l=>{const u=l.target.scrollWidth-l.target.clientWidth;if(l.target.scrollLeft===0){s("right");return}if(l.target.scrollLeft===u){s("left");return}l.target.scrollLeft>0&&s("both")};return i.useEffect(()=>{r.current.scrollWidth>r.current.clientWidth&&s("right")},[]),n.jsxs(Af,{shadow:"tableShadow",hasRadius:!0,background:"neutral0",children:[n.jsx(Pf,{$overflowing:a,position:"relative",children:n.jsx(Mf,{ref:r,onScroll:c,paddingLeft:6,paddingRight:6,children:n.jsx(Ef,{ref:o,...t})})}),e]})}),Df=x(lf)`
  & tr:last-of-type {
    border-bottom: none;
  }
`,th=({children:e,...t})=>n.jsx(Df,{...t,children:e}),Nf=x(sf)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,oh=({children:e,...t})=>n.jsx(Nf,{...t,children:e}),Of=x(cf)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};

  & td,
  & th {
    padding: ${({theme:e})=>e.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({theme:e})=>e.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: 5.6rem;
  }
`,nh=e=>n.jsx(Of,{...e}),ya=x(ga)`
  vertical-align: middle;
  text-align: left;
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`,rh=i.forwardRef(({children:e,action:t,...o},r)=>n.jsx(ya,{color:"neutral600",as:af,ref:r,...o,children:n.jsxs(I,{children:[e,t]})})),ah=i.forwardRef(({children:e,...t},o)=>n.jsx(ya,{color:"neutral800",ref:o,...t,children:e}));x(k)`
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 1rem;
    width: 1rem;
  }

  svg path {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`;x(k)`
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
  display: block;
  width: 100%;
  border: none;
`;ue(({children:e,startIcon:t,endIcon:o,disabled:r=!1,loading:a=!1,...s},c)=>{const l=r||a;return n.jsxs(_f,{ref:c,disabled:l,"aria-disabled":l,tag:"button",type:"button",gap:2,...s,children:[a?n.jsx(Vf,{"aria-hidden":!0,children:n.jsx(Vn,{})}):t,n.jsx(P,{variant:"pi",children:e}),o]})});const Lf=ie`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,Vf=x.span`
  display: flex;
  animation: ${Lf} 2s infinite linear;
  will-change: transform;
`,_f=x(I)`
  border: none;
  background-color: transparent;
  color: ${e=>e.theme.colors.primary600};
  cursor: pointer;

  &[aria-disabled='true'] {
    pointer-events: none;
    color: ${e=>e.theme.colors.neutral600};
  }

  ${Vt}
`,Ff=i.forwardRef((e,t)=>n.jsx(Bt,{ref:t,...e}));Ff.displayName="TextInput";i.forwardRef(({disabled:e,hasError:t,id:o,name:r,required:a,resizable:s=!0,...c},l)=>{const{error:u,...h}=me("Textarea"),f=!!u||t,m=h.id??o,d=h.name??r,p=h.required||a;let g;return u?g=`${m}-error`:h.hint&&(g=`${m}-hint`),n.jsx(Bf,{borderColor:f?"danger600":"neutral200",$hasError:f,hasRadius:!0,children:n.jsx(zf,{"aria-invalid":f,"aria-required":p,tag:"textarea",background:e?"neutral150":"neutral0",color:e?"neutral600":"neutral800",disabled:e,fontSize:2,hasRadius:!0,ref:l,lineHeight:4,padding:4,width:"100%",height:"100%",id:m,name:d,"aria-describedby":g,$resizable:s,...c})})});const Bf=x(k)`
  ${Oe()}
`,zf=x(k)`
  display: block;
  border: none;
  resize: ${({$resizable:e})=>e?"vertical":"none"};
  min-height: ${({minHeight:e})=>e||"10.5rem"};

  &::placeholder {
    color: ${({theme:e})=>e.colors.neutral600};
    font-size: ${({theme:e})=>e.fontSizes[2]};
    opacity: 1;
  }

  &:focus-within {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }
`,sh=i.forwardRef(({offLabel:e,onLabel:t,disabled:o,hasError:r,required:a,id:s,name:c,checked:l,onChange:u,...h},f)=>{const[m=!1,d]=Te({prop:l}),p=m!==null&&!m,{error:g,...b}=me("Toggle"),w=!!g||r,y=b.id??s,$=b.name??c,C=b.required||a;let v;return g?v=`${y}-error`:b.hint&&(v=`${y}-hint`),n.jsxs(Wf,{position:"relative",hasRadius:!0,padding:1,background:o?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral200",wrap:"wrap",cursor:o?"not-allowed":"pointer",$hasError:w,children:[n.jsx(Tn,{hasRadius:!0,flex:"1 1 50%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,justifyContent:"center",background:o&&p?"neutral200":p?"neutral0":"transparent",borderColor:o&&p?"neutral300":p?"neutral200":o?"neutral150":"neutral100",children:n.jsx(P,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:o?"neutral700":p?"danger700":"neutral600",children:e})}),n.jsx(Tn,{hasRadius:!0,flex:"1 1 50%",paddingLeft:3,paddingRight:3,justifyContent:"center",background:o&&m?"neutral200":m?"neutral0":"transparent",borderColor:o&&m?"neutral300":m?"neutral200":o?"neutral150":"neutral100",children:n.jsx(P,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:o?"neutral700":m?"primary600":"neutral600",children:t})}),n.jsx(qf,{...h,id:y,name:$,ref:f,onChange:T=>{d(T.currentTarget.checked),u?.(T)},type:"checkbox","aria-required":C,disabled:o,"aria-disabled":o,checked:!!m,"aria-describedby":v})]})}),Wf=x(I)`
  ${Oe()}
`,Tn=x(I)`
  padding-block: 0.6rem;
`,qf=x.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 0;
  width: 100%;
`,Uf=ue((e,t)=>{const{gap:o=0,gridCols:r=12,...a}=e;return n.jsx(Hf,{ref:t,$gap:o,$gridCols:r,...a})}),Hf=x(k)`
  display: grid;
  grid-template-columns: repeat(${({$gridCols:e})=>e}, 1fr);
  ${({theme:e,$gap:t})=>Lt({gap:t},e)}
`,Gf=ue(({col:e,s:t,xs:o,m:r,...a},s)=>n.jsx(Kf,{ref:s,$col:e,$s:t,$xs:o,$m:r,...a})),Kf=x(I)`
  grid-column: span ${({$xs:e})=>e??12};
  max-width: 100%;

  ${({theme:e})=>e.breakpoints.small} {
    grid-column: span ${({$s:e,$xs:t})=>e??t??12};
  }

  ${({theme:e})=>e.breakpoints.medium} {
    grid-column: span ${({$m:e,$s:t,$xs:o})=>e??t??o??12};
  }

  ${({theme:e})=>e.breakpoints.large} {
    grid-column: span ${({$col:e,$m:t,$s:o,$xs:r})=>e??t??o??r??12};
  }
`,ih=Object.freeze(Object.defineProperty({__proto__:null,Item:Gf,Root:Uf},Symbol.toStringTag,{value:"Module"})),Yf=e=>{let t=null;return document.cookie.split(";").forEach(r=>{const[a,s]=r.split("=").map(c=>c.trim());a===e&&(t=decodeURIComponent(s))}),t},Qf=(e,t,o)=>{let r="";document.cookie=`${e}=${encodeURIComponent(t)}; Path=/${r}`},Zf=e=>{document.cookie=`${e}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`},Qe={TOKEN:"jwtToken",STATUS:"isLoggedIn"},jn="STRAPI_THEME",Xf="strapi-admin-language",Jf=ci({name:"admin",initialState:()=>({language:{locale:"en",localeNames:{en:"English"}},permissions:{},theme:{availableThemes:[],currentTheme:localStorage.getItem(jn)||"system"},token:null}),reducers:{setAppTheme(e,t){e.theme.currentTheme=t.payload,window.localStorage.setItem(jn,t.payload)},setAvailableThemes(e,t){e.theme.availableThemes=t.payload},setLocale(e,t){e.language.locale=t.payload,window.localStorage.setItem(Xf,t.payload),document.documentElement.setAttribute("lang",t.payload)},setToken(e,t){e.token=t.payload},login(e,t){const{token:o,persist:r}=t.payload;r?window.localStorage.setItem(Qe.TOKEN,JSON.stringify(o)):Qf(Qe.TOKEN,o),window.localStorage.setItem(Qe.STATUS,"true"),e.token=o},logout(e){e.token=null,Zf(Qe.TOKEN),window.localStorage.removeItem(Qe.TOKEN),window.localStorage.removeItem(Qe.STATUS)}}}),{setAppTheme:lh,setAvailableThemes:ch,setLocale:dh,setToken:uh,logout:ep,login:tp}=Jf.actions,Sn={TOKEN:"jwtToken"};class ht extends Error{constructor(t,o){super(t),this.name="FetchError",this.message=t,this.response=o,this.code=o?.data?.error?.status,this.status=o?.data?.error?.status,Error.captureStackTrace&&Error.captureStackTrace(this,ht)}}const op=e=>e instanceof ht,np=()=>{const e=localStorage.getItem(Sn.TOKEN);return e?JSON.parse(e):Yf(Sn.TOKEN)??null},Xt=(e={})=>{const t=window.strapi.backendURL,o={Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${np()}`},r=d=>d instanceof FormData,a=d=>d.charAt(0)!=="/"?`/${d}`:d,s=d=>new RegExp("^(?:[a-z+]+:)?//","i").test(d),c=d=>s(d)?d:a(d),l=async(d,p)=>{try{const g=await d.json();if(!d.ok&&g.error&&!p?.(d.status))throw new ht(g.error.message,{data:g});if(!d.ok&&!p?.(d.status))throw new ht("Unknown Server Error");return{data:g}}catch(g){if(g instanceof SyntaxError&&d.ok)return{data:[],status:d.status};throw g}},u=d=>p=>{if(d){if(typeof d=="string")return`${p}?${d}`;const g=ui.stringify(d,{encode:!1});return`${p}?${g}`}return p},h=d=>`${t}${d}`,f=d=>di(c,h,u(d?.params));return{get:async(d,p)=>{const g=new Headers({...o,...p?.headers}),b=f(p),w=await fetch(b(d),{signal:p?.signal??e.signal,method:"GET",headers:g});return l(w,p?.validateStatus)},post:async(d,p,g)=>{const b=new Headers({...o,...g?.headers}),w=f(g);r(p)&&b.delete("Content-Type");const y=await fetch(w(d),{signal:g?.signal??e.signal,method:"POST",headers:b,body:r(p)?p:JSON.stringify(p)});return l(y,g?.validateStatus)},put:async(d,p,g)=>{const b=new Headers({...o,...g?.headers}),w=f(g);r(p)&&b.delete("Content-Type");const y=await fetch(w(d),{signal:g?.signal??e.signal,method:"PUT",headers:b,body:r(p)?p:JSON.stringify(p)});return l(y,g?.validateStatus)},del:async(d,p)=>{const g=new Headers({...o,...p?.headers}),b=f(p),w=await fetch(b(d),{signal:p?.signal??e.signal,method:"DELETE",headers:g});return l(w,p?.validateStatus)}}};let It=null;const rp=e=>/^\/admin\/(login|logout|access-token)\b/.test(e),ap=async(e,t)=>{const{signal:o,dispatch:r}=t,a=async s=>{const{get:c,post:l,del:u,put:h}=Xt();if(typeof s=="string")return await c(s,{signal:o});const{url:f,method:m="GET",data:d,config:p}=s;return m==="POST"?l(f,d,{...p,signal:o}):m==="DELETE"?u(f,{...p,signal:o}):m==="PUT"?h(f,d,{...p,signal:o}):c(f,{...p,signal:o})};try{return{data:(await a(e)).data}}catch(s){if(op(s)){if(s.status===401){const l=typeof e=="string"?e:e.url;if(!rp(l)){if(!It){async function u(){const{post:h}=Xt(),m=(await h("/admin/access-token"))?.data?.data?.token;if(!m)throw new Error("access_token_exchange_failed");const d=!!localStorage.getItem("jwtToken");return r(tp({token:m,persist:d})),m}It=u().finally(()=>{It=null})}try{return await It,{data:(await a(e)).data}}catch{try{const{post:h}=Xt();await h("/admin/logout")}catch{}r(ep())}}}return typeof s.response?.data=="object"&&s.response?.data!==null&&"error"in s.response?.data?{data:void 0,error:s.response?.data.error}:{data:void 0,error:{name:"UnknownError",message:s.message,details:s.response,status:s.status}}}const c=s;return{data:void 0,error:{name:c.name,message:c.message,stack:c.stack}}}},sp=()=>ap,De=fi({reducerPath:"adminApi",baseQuery:sp(),tagTypes:["GuidedTourMeta","HomepageKeyStatistics"],endpoints:()=>({})}),ip=De.injectEndpoints({endpoints:e=>({getAIUsage:e.query({query:()=>({method:"GET",url:"/admin/ai-usage"})}),getAiToken:e.query({query:()=>({method:"GET",url:"/admin/ai-token"}),transformResponse(t){return t.data}})}),overrideExisting:!1}),{useGetAIUsageQuery:fh,useGetAiTokenQuery:ph,useLazyGetAiTokenQuery:hh}=ip;function Pe(e,t){const o=pi(t),r=s=>{const{children:c,...l}=s,u=i.useMemo(()=>l,Object.values(l));return n.jsx(o.Provider,{value:u,children:c})};function a(s,c,l){return hi(o,u=>{if(u)return c(u);if(l)throw new Error(`\`${s}\` must be used within \`${e}\``)})}return r.displayName=e+"Provider",[r,a]}Pe("StrapiApp");const lp=De.enhanceEndpoints({addTagTypes:["User","Me","ProvidersOptions"]}).injectEndpoints({endpoints:e=>({getMe:e.query({query:()=>({method:"GET",url:"/admin/users/me"}),transformResponse(t){return t.data},providesTags:t=>t?["Me",{type:"User",id:t.id}]:["Me"]}),getMyPermissions:e.query({query:()=>({method:"GET",url:"/admin/users/me/permissions"}),transformResponse(t){return t.data}}),updateMe:e.mutation({query:t=>({method:"PUT",url:"/admin/users/me",data:t}),transformResponse(t){return t.data},invalidatesTags:["Me"]}),checkPermissions:e.query({query:t=>({method:"POST",url:"/admin/permissions/check",data:t})}),login:e.mutation({query:t=>({method:"POST",url:"/admin/login",data:t}),transformResponse(t){return t.data},invalidatesTags:["Me"]}),logout:e.mutation({query:t=>({method:"POST",url:"/admin/logout",data:t})}),resetPassword:e.mutation({query:t=>({method:"POST",url:"/admin/reset-password",data:t}),transformResponse(t){return t.data}}),accessTokenExchange:e.mutation({query:t=>({method:"POST",url:"/admin/access-token",data:t}),transformResponse(t){return t.data}}),getRegistrationInfo:e.query({query:t=>({url:"/admin/registration-info",method:"GET",config:{params:{registrationToken:t}}}),transformResponse(t){return t.data}}),registerAdmin:e.mutation({query:t=>({method:"POST",url:"/admin/register-admin",data:t}),transformResponse(t){return t.data}}),registerUser:e.mutation({query:t=>({method:"POST",url:"/admin/register",data:t}),transformResponse(t){return t.data}}),forgotPassword:e.mutation({query:t=>({url:"/admin/forgot-password",method:"POST",data:t})}),isSSOLocked:e.query({query:()=>({url:"/admin/providers/isSSOLocked",method:"GET"}),transformResponse(t){return t.data}}),getProviders:e.query({query:()=>({url:"/admin/providers",method:"GET"})}),getProviderOptions:e.query({query:()=>({url:"/admin/providers/options",method:"GET"}),transformResponse(t){return t.data},providesTags:["ProvidersOptions"]}),updateProviderOptions:e.mutation({query:t=>({url:"/admin/providers/options",method:"PUT",data:t}),transformResponse(t){return t.data},invalidatesTags:["ProvidersOptions"]})}),overrideExisting:!1}),{useCheckPermissionsQuery:mh,useLazyCheckPermissionsQuery:gh,useGetMeQuery:xh,useLoginMutation:bh,useAccessTokenExchangeMutation:$h,useLogoutMutation:yh,useUpdateMeMutation:wh,useResetPasswordMutation:Ch,useRegisterAdminMutation:vh,useRegisterUserMutation:Th,useGetRegistrationInfoQuery:jh,useForgotPasswordMutation:Sh,useGetMyPermissionsQuery:Ih,useIsSSOLockedQuery:kh,useGetProvidersQuery:Rh,useGetProviderOptionsQuery:Ah,useUpdateProviderOptionsMutation:Eh}=lp;Pe("Auth");Pe("History",{history:[],currentLocationIndex:0,currentLocation:"",canGoBack:!1,pushState:()=>{throw new Error("You must use the `HistoryProvider` to access the `pushState` function.")},goBack:()=>{throw new Error("You must use the `HistoryProvider` to access the `goBack` function.")}});function wa(e){return new TextEncoder().encode(e).length}const In=e=>e&&e.startsWith("/")?`${window.strapi.backendURL}${e}`:e,cp=De.enhanceEndpoints({addTagTypes:["ProjectSettings","LicenseLimits","LicenseTrialTimeLeft"]}).injectEndpoints({endpoints:e=>({init:e.query({query:()=>({url:"/admin/init",method:"GET"}),transformResponse(t){return t.data},providesTags:["ProjectSettings"]}),information:e.query({query:()=>({url:"/admin/information",method:"GET"}),transformResponse(t){return t.data}}),telemetryProperties:e.query({query:()=>({url:"/admin/telemetry-properties",method:"GET",config:{validateStatus:t=>t<500}}),transformResponse(t){return t.data}}),projectSettings:e.query({query:()=>({url:"/admin/project-settings",method:"GET"}),providesTags:["ProjectSettings"],transformResponse(t){return{authLogo:t.authLogo?{name:t.authLogo.name,url:In(t.authLogo.url)}:void 0,menuLogo:t.menuLogo?{name:t.menuLogo.name,url:In(t.menuLogo.url)}:void 0}}}),updateProjectSettings:e.mutation({query:t=>({url:"/admin/project-settings",method:"POST",data:t,config:{headers:{"Content-Type":"multipart/form-data"}}}),invalidatesTags:["ProjectSettings"]}),getPlugins:e.query({query:()=>({url:"/admin/plugins",method:"GET"})}),getLicenseLimits:e.query({query:()=>({url:"/admin/license-limit-information",method:"GET"}),providesTags:["LicenseLimits"]}),getLicenseTrialTimeLeft:e.query({query:()=>({url:"/admin/license-trial-time-left",method:"GET"}),providesTags:["LicenseTrialTimeLeft"]}),getGuidedTourMeta:e.query({query:()=>({url:"/admin/guided-tour-meta",method:"GET"}),providesTags:["GuidedTourMeta"]})}),overrideExisting:!1}),{useInitQuery:Ph,useTelemetryPropertiesQuery:Mh,useInformationQuery:Dh,useProjectSettingsQuery:Nh,useUpdateProjectSettingsMutation:Oh,useGetPluginsQuery:Lh,useGetLicenseLimitsQuery:Vh,useGetLicenseTrialTimeLeftQuery:_h,useGetGuidedTourMetaQuery:Ca}=cp,[Fh,dp]=Pe("AppInfo",{});var up={ADMIN_PATH:"/admin",STRAPI_ADMIN_BACKEND_URL:"/",STRAPI_TELEMETRY_DISABLED:"false",STRAPI_ANALYTICS_URL:"https://analytics.strapi.io"};const fp=i.createContext({uuid:!1}),pp=()=>{const{uuid:e,telemetryProperties:t}=i.useContext(fp),o=dp("useTracking",a=>a.userId);return{trackUsage:i.useCallback(async(a,s)=>{try{if(e&&!window.strapi.telemetryDisabled)return await mi.post(`${up.STRAPI_ANALYTICS_URL||"https://analytics.strapi.io"}/api/v2/track`,{event:a,userId:o,eventProperties:{...s},userProperties:{},groupProperties:{...t,projectId:e,projectType:window.strapi.projectType,aiLicenseKey:window.strapi.aiLicenseKey}},{headers:{"Content-Type":"application/json","X-Strapi-Event":a}})}catch{}return null},[t,o,e])}};ho("ConfigurationContext");const He={contentTypeBuilder:{createSchema:"didCreateContentTypeSchema",addField:"didAddFieldToSchema"},contentManager:{createContent:"didCreateContent"},apiTokens:{copyToken:"didCopyApiToken"}},nt=({tourName:e,displayedCurrentStep:t,displayedTourLength:o})=>{const r=je("GuidedTourPopover",c=>c.state),a=t??r.tours[e].currentStep+1,s=o??rt[e]._meta.displayedStepCount;return n.jsx(P,{variant:"omega",fontSize:"12px",children:n.jsx(Fe,{id:"tours.stepCount",defaultMessage:"Step {currentStep} of {tourLength}",values:{currentStep:a,tourLength:s}})})},vt=({onClick:e})=>n.jsx(ze,{onClick:e,children:n.jsx(Fe,{id:"tours.gotIt",defaultMessage:"Got it"})}),tn=({showSkip:e,showPrevious:t,to:o,tourName:r,onNextStep:a,onPreviousStep:s})=>{const{trackUsage:c}=pp(),l=je("GuidedTourPopover",g=>g.dispatch),h=je("GuidedTourPopover",g=>g.state).tours[r].currentStep+1,f=rt[r]._meta.totalStepCount,m=()=>{c("didSkipGuidedTour",{name:r}),l({type:"skip_tour",payload:r})},d=()=>{h===f&&c("didCompleteGuidedTour",{name:r}),a?a():l({type:"next_step",payload:r})},p=()=>{s?s():l({type:"previous_step",payload:r})};return n.jsxs(I,{gap:2,children:[e&&n.jsx(ze,{variant:"tertiary",onClick:m,children:n.jsx(Fe,{id:"tours.skip",defaultMessage:"Skip"})}),!e&&t&&n.jsx(ze,{variant:"tertiary",onClick:p,children:n.jsx(Fe,{id:"tours.previous",defaultMessage:"Previous"})}),o?n.jsx(Eu,{tag:Yn,to:o,onClick:d,children:n.jsx(Fe,{id:"tours.next",defaultMessage:"Next"})}):n.jsx(ze,{onClick:d,children:n.jsx(Fe,{id:"tours.next",defaultMessage:"Next"})})]})},hp=x(I)`
  border-top: ${({theme:e})=>`1px solid ${e.colors.neutral150}`};
`,mp=x(k)`
  p {
    margin-top: ${({theme:e})=>e.spaces[5]};
  }
  ul {
    list-style-type: disc;
    padding-left: ${({theme:e})=>e.spaces[4]};
  }
`,gp=x(Pt.Arrow)`
  fill: ${({theme:e})=>e.colors.neutral0};
  transform: translateY(-16px) rotate(-90deg);
`,xp=e=>({Root:i.forwardRef(({withArrow:t=!0,...o},r)=>n.jsxs(Pt.Content,{ref:r,"aria-labelledby":"guided-tour-title",side:"top",align:"center",style:{border:"none"},onClick:a=>a.stopPropagation(),...o,children:[t&&n.jsx(gp,{asChild:!0,children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"25",viewBox:"0 0 23 25",fill:"none",children:n.jsx("path",{d:"M11 24.5L1.82843 15.3284C0.266332 13.7663 0.26633 11.2337 1.82843 9.67157L11 0.5L23 12.5L11 24.5Z"})})}),n.jsx(I,{width:"360px",direction:"column",alignItems:"start",children:o.children})]})),Title:t=>n.jsx(k,{paddingTop:5,paddingLeft:5,paddingRight:5,paddingBottom:1,width:"100%",children:"children"in t?t.children:n.jsx(P,{tag:"h1",id:"guided-tour-title",variant:"omega",fontWeight:"bold",children:n.jsx(Fe,{id:t.id,defaultMessage:t.defaultMessage})})}),Content:t=>{const{formatMessage:o}=gi();let r="";return"children"in t||(r=o({id:t.id,defaultMessage:t.defaultMessage})),n.jsx(k,{paddingBottom:5,paddingLeft:5,paddingRight:5,width:"100%",children:"children"in t?t.children:n.jsx(mp,{children:n.jsx(P,{tag:"div",variant:"omega",dangerouslySetInnerHTML:{__html:r}})})})},Actions:({showStepCount:t=!0,showPrevious:o=!0,showSkip:r=!1,to:a,children:s,...c})=>n.jsx(hp,{width:"100%",padding:3,paddingLeft:5,justifyContent:t?"space-between":"flex-end",...c,children:s||n.jsxs(n.Fragment,{children:[t&&n.jsx(nt,{tourName:e}),n.jsx(tn,{tourName:e,showSkip:r,showPrevious:!r&&o,to:a})]})})}),bp=({Step:e})=>n.jsxs(e.Root,{side:"top",sideOffset:32,withArrow:!1,children:[n.jsx(e.Title,{id:"tours.apiTokens.Introduction.title",defaultMessage:"Last but not least, API tokens"}),n.jsx(e.Content,{id:"tours.apiTokens.Introduction.content",defaultMessage:"Control API access with highly customizable permissions."}),n.jsx(e.Actions,{showSkip:!0})]}),$p=({Step:e})=>n.jsxs(e.Root,{side:"bottom",align:"end",children:[n.jsx(e.Title,{id:"tours.apiTokens.ManageAPIToken.title",defaultMessage:"Manage an API token"}),n.jsx(e.Content,{id:"tours.apiTokens.ManageAPIToken.content",defaultMessage:'Click the "Pencil" icon to view and update an existing API token.'}),n.jsx(e.Actions,{})]}),yp=({Step:e,dispatch:t})=>n.jsxs(e.Root,{side:"bottom",align:"end",children:[n.jsx(e.Title,{id:"tours.apiTokens.ViewAPIToken.title",defaultMessage:"View API token"}),n.jsx(e.Content,{id:"tours.apiTokens.ViewAPIToken.content",defaultMessage:'Click the "View token" button to see your API token.'}),n.jsxs(e.Actions,{children:[n.jsx(nt,{tourName:"apiTokens"}),n.jsx(vt,{onClick:()=>t({type:"next_step",payload:"apiTokens"})})]})]}),wp=({Step:e,dispatch:t})=>n.jsxs(e.Root,{side:"bottom",align:"start",sideOffset:-5,children:[n.jsx(e.Title,{id:"tours.apiTokens.CopyAPIToken.title",defaultMessage:"Copy your new API token"}),n.jsx(e.Content,{id:"tours.apiTokens.CopyAPIToken.content",defaultMessage:"Copy your API token",values:{spacer:n.jsx(k,{paddingTop:2}),a:o=>n.jsx(Kr,{isExternal:!0,href:"https://docs.strapi.io/cms/features/api-tokens#usage",children:o})}}),n.jsxs(e.Actions,{children:[n.jsx(nt,{tourName:"apiTokens"}),n.jsx(vt,{onClick:()=>t({type:"next_step",payload:"apiTokens"})})]})]}),Cp=({Step:e})=>n.jsxs(e.Root,{side:"right",align:"start",children:[n.jsx(e.Title,{id:"tours.apiTokens.FinalStep.title",defaultMessage:"Congratulations, it's time to deploy your application!"}),n.jsx(e.Content,{id:"tours.apiTokens.FinalStep.content",defaultMessage:"Your application is ready to be deployed and its content to be shared with the world!"}),n.jsx(e.Actions,{showPrevious:!1,showStepCount:!1,to:"/"})]}),vp=[{name:"Introduction",content:bp},{name:"ManageAPIToken",content:$p},{name:"ViewAPIToken",content:yp},{name:"CopyAPIToken",content:wp},{name:"Finish",content:Cp,excludeFromStepCount:!0,when:e=>e.includes(He.apiTokens.copyToken)}],qt=({isActionRequired:e=!1,...t})=>{const{collectionType:o}=Qn(),r=je("ContentManagerActions",m=>m.state),a=je("ContentManagerActions",m=>m.dispatch),s=o==="single-types",c=r.tours.contentManager.currentStep+1,l=s&&c>_e.length?c-_e.length:c,u=s?rt.contentManager._meta.displayedStepCount-_e.length:rt.contentManager._meta.displayedStepCount,h=()=>{s&&r.tours.contentManager.currentStep===0?a({type:"go_to_step",payload:{tourName:"contentManager",step:_e.length+1}}):a({type:"next_step",payload:"contentManager"})},f=()=>{s&&r.tours.contentManager.currentStep===_e.length+1?a({type:"go_to_step",payload:{tourName:"contentManager",step:r.tours.contentManager.currentStep-_e.length-1}}):a({type:"previous_step",payload:"contentManager"})};return e?n.jsxs(n.Fragment,{children:[n.jsx(nt,{tourName:"contentManager",displayedCurrentStep:l,displayedTourLength:u}),n.jsx(vt,{onClick:h})]}):n.jsxs(n.Fragment,{children:[n.jsx(nt,{tourName:"contentManager",displayedCurrentStep:l,displayedTourLength:u}),n.jsx(tn,{tourName:"contentManager",onNextStep:h,onPreviousStep:f,...t})]})},Tp=({Step:e})=>n.jsxs(e.Root,{side:"top",sideOffset:33,withArrow:!1,children:[n.jsx(e.Title,{id:"tours.contentManager.Introduction.title",defaultMessage:"Content manager"}),n.jsx(e.Content,{id:"tours.contentManager.Introduction.content",defaultMessage:"Create and manage content from your collection types and single types."}),n.jsx(e.Actions,{children:n.jsx(qt,{showSkip:!0})})]}),jp=({Step:e})=>n.jsxs(e.Root,{side:"bottom",align:"end",children:[n.jsx(e.Title,{id:"tours.contentManager.CreateNewEntry.title",defaultMessage:"Create new entry"}),n.jsx(e.Content,{id:"tours.contentManager.CreateNewEntry.content",defaultMessage:'Click the "Create new entry" button to create and publish a new entry for this collection type.'}),n.jsx(e.Actions,{children:n.jsx(qt,{showPrevious:!0})})]}),Sp=({Step:e})=>n.jsxs(e.Root,{sideOffset:-12,children:[n.jsx(e.Title,{id:"tours.contentManager.Fields.title",defaultMessage:"Fields"}),n.jsx(e.Content,{id:"tours.contentManager.Fields.content",defaultMessage:"First, fill in the fields you created in the Content-Type Builder."}),n.jsx(e.Actions,{children:n.jsx(qt,{showPrevious:!0})})]}),Ip=({Step:e})=>n.jsxs(e.Root,{side:"left",align:"center",children:[n.jsx(e.Title,{id:"tours.contentManager.Publish.title",defaultMessage:"Publish"}),n.jsx(e.Content,{id:"tours.contentManager.Publish.content",defaultMessage:'Then click the "Publish" button to make your content available through the content API.'}),n.jsx(e.Actions,{children:n.jsx(qt,{isActionRequired:!0})})]}),kp=({Step:e})=>n.jsxs(e.Root,{side:"right",children:[n.jsx(e.Title,{id:"tours.contentManager.FinalStep.title",defaultMessage:"Time to setup API tokens!"}),n.jsx(e.Content,{id:"tours.contentManager.FinalStep.content",defaultMessage:"Now that you've created and published an entry, let's setup an API token to manage access to your content."}),n.jsx(e.Actions,{showStepCount:!1,showPrevious:!1,to:"/settings/api-tokens"})]}),_e=[{name:"CreateNewEntry",content:jp}],Rp=[{name:"Introduction",when:e=>e.includes(He.contentTypeBuilder.createSchema),content:Tp},..._e,{name:"Fields",content:Sp},{name:"Publish",content:Ip},{name:"Finish",content:kp,excludeFromStepCount:!0,when:e=>e.includes(He.contentManager.createContent)}],Ap=()=>{const e=window.strapi.ai?.enabled!==!1;return!!window.strapi?.isEE&&e},Le=({...e})=>{const t=je("ContentTypeBuilderActions",h=>h.state),o=je("ContentTypeBuilderActions",h=>h.dispatch),r=Ap(),a=t.tours.contentTypeBuilder.currentStep+1,s=!r&&a>ve.length?a-ve.length:r&&a>Ze.length?a-Ze.length:a,c=r?rt.contentTypeBuilder._meta.displayedStepCount-Ze.length:rt.contentTypeBuilder._meta.displayedStepCount-ve.length,l=()=>{const h=t.tours.contentTypeBuilder.currentStep;if(!r&&h===0){const f=1+ve.length;o({type:"go_to_step",payload:{tourName:"contentTypeBuilder",step:f}})}else if(r&&h===ve.length){const f=1+ve.length+Ze.length;o({type:"go_to_step",payload:{tourName:"contentTypeBuilder",step:f}})}else o({type:"next_step",payload:"contentTypeBuilder"})},u=()=>{const h=t.tours.contentTypeBuilder.currentStep;!r&&h===1+ve.length?o({type:"go_to_step",payload:{tourName:"contentTypeBuilder",step:0}}):r&&h===1+ve.length+Ze.length?o({type:"go_to_step",payload:{tourName:"contentTypeBuilder",step:ve.length}}):o({type:"previous_step",payload:"contentTypeBuilder"})};return n.jsxs(n.Fragment,{children:[n.jsx(nt,{tourName:"contentTypeBuilder",displayedCurrentStep:s,displayedTourLength:c}),e.children||n.jsx(tn,{tourName:"contentTypeBuilder",onNextStep:l,onPreviousStep:u,...e})]})},Ep=({Step:e})=>n.jsxs(e.Root,{sideOffset:33,withArrow:!1,children:[n.jsx(e.Title,{id:"tours.contentTypeBuilder.Introduction.title",defaultMessage:"Content-Type Builder"}),n.jsx(e.Content,{id:"tours.contentTypeBuilder.Introduction.content",defaultMessage:"Create and manage your content structure with collection types, single types and components."}),n.jsx(e.Actions,{children:n.jsx(Le,{showSkip:!0})})]}),Pp=({Step:e})=>n.jsxs(e.Root,{side:"left",children:[n.jsx(e.Title,{id:"tours.contentTypeBuilder.AIChat.title",defaultMessage:"Time to get started!"}),n.jsx(e.Content,{id:"tours.contentTypeBuilder.AIChat.content",defaultMessage:"<p>If you have any questions about the Content-Type Builder or Strapi ask them here.</p><p>Strapi AI can generate schemas tailored to your needs. Ask for exactly what you want, for example:<ul><li>Date picker</li><li>Email and password fields</li><li>Media of any type</li><li>UIDs</li></ul></p><p>Don’t be shy, try it out !</p>"}),n.jsx(e.Actions,{children:n.jsx(Le,{showPrevious:!0})})]}),Mp=({Step:e})=>n.jsxs(e.Root,{side:"right",sideOffset:16,children:[n.jsx(e.Title,{id:"tours.contentTypeBuilder.CollectionTypes.title",defaultMessage:"Collection Types"}),n.jsx(e.Content,{id:"tours.contentTypeBuilder.CollectionTypes.content",defaultMessage:"A content structure that can manage multiple entries, such as articles or products."}),n.jsx(e.Actions,{children:n.jsx(Le,{showPrevious:!0})})]}),Dp=({Step:e})=>n.jsxs(e.Root,{side:"right",sideOffset:16,children:[n.jsx(e.Title,{id:"tours.contentTypeBuilder.SingleTypes.title",defaultMessage:"Single Types"}),n.jsx(e.Content,{id:"tours.contentTypeBuilder.SingleTypes.content",defaultMessage:"A content structure that can manage a single entry, such as a homepage or a header."}),n.jsx(e.Actions,{children:n.jsx(Le,{showPrevious:!0})})]}),Np=({Step:e})=>n.jsxs(e.Root,{side:"right",sideOffset:16,children:[n.jsx(e.Title,{id:"tours.contentTypeBuilder.Components.title",defaultMessage:"Components"}),n.jsx(e.Content,{id:"tours.contentTypeBuilder.Components.content",defaultMessage:"A reusable content structure that can be used across multiple content types, such as buttons, sliders or cards."}),n.jsx(e.Actions,{children:n.jsx(Le,{showPrevious:!0})})]}),Op=({Step:e})=>n.jsxs(e.Root,{side:"right",sideOffset:16,children:[n.jsx(e.Title,{id:"tours.contentTypeBuilder.YourTurn.title",defaultMessage:"Your turn"}),n.jsx(e.Content,{id:"tours.contentTypeBuilder.YourTurn.content",defaultMessage:"Create a collection type or single type and configure it."}),n.jsx(e.Actions,{children:n.jsx(Le,{showPrevious:!0})})]}),Lp=({Step:e,dispatch:t})=>n.jsxs(e.Root,{side:"bottom",children:[n.jsx(e.Title,{id:"tours.contentTypeBuilder.AddFields.title",defaultMessage:"Don't forget to add a field to your content type"}),n.jsx(e.Content,{id:"tours.contentTypeBuilder.AddFields.content",defaultMessage:"Add the fields your content needs such as text, media and relations."}),n.jsx(e.Actions,{children:n.jsx(Le,{showPrevious:!0,children:n.jsx(vt,{onClick:()=>t({type:"next_step",payload:"contentTypeBuilder"})})})})]}),Vp=({Step:e,dispatch:t})=>n.jsxs(e.Root,{side:"right",children:[n.jsx(e.Title,{id:"tours.contentTypeBuilder.Save.title",defaultMessage:"Save before you leave!"}),n.jsx(e.Content,{id:"tours.contentTypeBuilder.Save.content",defaultMessage:"Save the changes you made here before leaving this page."}),n.jsx(e.Actions,{children:n.jsx(Le,{showPrevious:!0,children:n.jsx(vt,{onClick:()=>{t({type:"remove_completed_action",payload:He.contentTypeBuilder.createSchema}),t({type:"next_step",payload:"contentTypeBuilder"})}})})})]}),_p=({Step:e})=>{const{data:t}=Ca(),{"*":o}=Qn(),r=o?.split("/").pop(),a=r?t?.data?.schemas?.[r]:null,c=a?`/content-manager/${{collectionType:"collection-types",singleType:"single-types"}[a.kind]}/${a.uid}`:"/content-manager";return n.jsxs(e.Root,{side:"right",children:[n.jsx(e.Title,{id:"tours.contentTypeBuilder.Finish.title",defaultMessage:"It's time to create content!"}),n.jsx(e.Content,{id:"tours.contentTypeBuilder.Finish.content",defaultMessage:"Now that you created content types, you'll be able to create content in the content manager."}),n.jsx(e.Actions,{showStepCount:!1,showPrevious:!1,to:c})]})},ve=[{name:"AIChat",content:Pp}],Ze=[{name:"CollectionTypes",content:Mp},{name:"SingleTypes",content:Dp},{name:"Components",content:Np},{name:"YourTurn",content:Op},{name:"AddFields",content:Lp}],Fp=[{name:"Introduction",content:Ep},...ve,...Ze,{name:"Save",when:e=>e.includes(He.contentTypeBuilder.addField),content:Vp},{name:"Finish",content:_p,excludeFromStepCount:!0,when:e=>e.includes(He.contentTypeBuilder.createSchema)}],rt={contentTypeBuilder:kt("contentTypeBuilder",Fp),contentManager:kt("contentManager",Rp),apiTokens:kt("apiTokens",vp),strapiCloud:kt("strapiCloud",[])},Bp=({children:e,...t})=>je("TooltipWrapper",r=>r.state).enabled?n.jsx(Wp,{...t,children:e}):e,zp=x(k)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(50, 50, 77, 0.2);
  z-index: 10;
`,Wp=({children:e,content:t,tourName:o,step:r,when:a})=>{const{data:s}=Ca(),c=je("GuidedTourTooltip",p=>p.state),l=je("GuidedTourTooltip",p=>p.dispatch),u=c.tours[o].currentStep===r,h=a?a(c.completedActions):!0,f=s?.data?.isFirstSuperAdminUser&&!c.tours[o].isCompleted&&u&&h;i.useEffect(()=>{if(!f)return;const p=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=p}},[f]);const m=i.useMemo(()=>xp(o),[o]),d=Object.keys(s?.data?.schemas??{}).filter(p=>p.startsWith("api::")).length>0;return i.useEffect(()=>{d&&l({type:"set_completed_actions",payload:[He.contentTypeBuilder.createSchema]})},[l,d,r,o]),n.jsxs(n.Fragment,{children:[f&&n.jsx(Zo,{children:n.jsx(zp,{})}),n.jsxs(Pt.Root,{open:f,children:[n.jsx(Pt.Anchor,{children:e}),t({Step:m,state:c,dispatch:l})]})]})};function kt(e,t){return t.reduce((r,a,s)=>{const c=a.name;if(c in r)throw Error(`The tour: ${e} with step: ${a.name} has already been registered`);return r[c]=({children:l})=>n.jsx(Bp,{tourName:e,step:s,content:a.content,when:a.when,children:l}),a.excludeFromStepCount&&r._meta.displayedStepCount--,r},{_meta:{totalStepCount:t.length,displayedStepCount:t.length}})}const[Bh,je]=Pe("GuidedTour");Wn`
  body {
    background: ${({theme:e})=>e.colors.neutral100};
  }
`;new xi({defaultOptions:{queries:{refetchOnWindowFocus:!1}}});x(ic)`
  & > div:first-child {
    display: none;
  }

  & > button {
    display: none;
  }
`;x(P)`
  word-break: break-all;
  color: ${({theme:e})=>e.colors.danger600};
`;const qp={S:180,M:250};x(k)`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${({$size:e})=>`${qp[e]}px`}, 1fr)
  );
  grid-gap: ${({theme:e})=>e.spaces[4]};
`;x(k)`
  display: grid;
  grid-template-columns: ${({$hasSideNav:e})=>e?"auto 1fr":"1fr"};
`;x(k)`
  overflow-x: hidden;
`;const ke="The Form Component has not been initialised, ensure you are using this hook within a Form component";Pe("Form",{disabled:!1,errors:{},initialValues:{},isSubmitting:!1,modified:!1,addFieldRow:()=>{throw new Error(ke)},moveFieldRow:()=>{throw new Error(ke)},onChange:()=>{throw new Error(ke)},removeFieldRow:()=>{throw new Error(ke)},resetForm:()=>{throw new Error(ke)},setErrors:()=>{throw new Error(ke)},setValues:()=>{throw new Error(ke)},setSubmitting:()=>{throw new Error(ke)},validate:async()=>{throw new Error(ke)},values:{}});x.img`
  height: 7.2rem;
`;x(k)`
  margin: 0 auto;
  width: 552px;
`;x(I)`
  flex-direction: column;
`;const re={email:{id:"components.Input.error.validation.email"},lowercase:{id:"components.Input.error.validation.lowercase"},minLength:{id:"components.Input.error.validation.minLength"},required:{id:"components.Input.error.validation.required",defaultMessage:"This value is required."}};Mt().shape({email:pe().nullable().email({id:re.email.id,defaultMessage:"Not a valid email"}).required(re.required),password:pe().required(re.required).nullable(),rememberMe:bi().nullable()});x(cd.Root)`
  height: 3.2rem;
  width: 3.2rem;

  > label,
  ~ input {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  > label {
    color: inherit;
    cursor: pointer;
    padding: ${({theme:e})=>e.spaces[2]};
    text-align: center;
    vertical-align: middle;
  }

  &:hover,
  &:focus-within {
    background-color: ${({theme:e})=>e.colors.neutral0};
  }

  &:active,
  &.selected {
    color: ${({theme:e})=>e.colors.primary700};
    background-color: ${({theme:e})=>e.colors.neutral0};
    border-color: ${({theme:e})=>e.colors.primary700};
  }
`;[...Array(11).keys()];Mt().shape({firstname:pe().trim().required(re.required).nullable(),lastname:pe().nullable(),password:pe().min(8,{id:re.minLength.id,defaultMessage:"Password must be at least 8 characters",values:{min:8}}).test("max-bytes",{id:"components.Input.error.contain.maxBytes",defaultMessage:"Password must be less than 73 bytes"},function(e){return!e||typeof e!="string"?!0:wa(e)<=72}).matches(/[a-z]/,{message:{id:"components.Input.error.contain.lowercase",defaultMessage:"Password must contain at least 1 lowercase letter"}}).matches(/[A-Z]/,{message:{id:"components.Input.error.contain.uppercase",defaultMessage:"Password must contain at least 1 uppercase letter"}}).matches(/\d/,{message:{id:"components.Input.error.contain.number",defaultMessage:"Password must contain at least 1 number"}}).required({id:re.required.id,defaultMessage:"Password is required"}).nullable(),confirmPassword:pe().required({id:re.required.id,defaultMessage:"Confirm password is required"}).oneOf([yo("password"),null],{id:"components.Input.error.password.noMatch",defaultMessage:"Passwords must match"}).nullable(),registrationToken:pe().required({id:re.required.id,defaultMessage:"Registration token is required"})});Mt().shape({firstname:pe().trim().required({id:re.required.id,defaultMessage:"Firstname is required"}).nullable(),lastname:pe().nullable(),password:pe().min(8,{id:re.minLength.id,defaultMessage:"Password must be at least 8 characters",values:{min:8}}).test("max-bytes",{id:"components.Input.error.contain.maxBytes",defaultMessage:"Password must be less than 73 bytes"},function(e){return e?new TextEncoder().encode(e).length<=72:!0}).matches(/[a-z]/,{message:{id:"components.Input.error.contain.lowercase",defaultMessage:"Password must contain at least 1 lowercase letter"}}).matches(/[A-Z]/,{message:{id:"components.Input.error.contain.uppercase",defaultMessage:"Password must contain at least 1 uppercase letter"}}).matches(/\d/,{message:{id:"components.Input.error.contain.number",defaultMessage:"Password must contain at least 1 number"}}).required({id:re.required.id,defaultMessage:"Password is required"}).nullable(),confirmPassword:pe().required({id:re.required.id,defaultMessage:"Confirm password is required"}).nullable().oneOf([yo("password"),null],{id:"components.Input.error.password.noMatch",defaultMessage:"Passwords must match"}),email:pe().email({id:re.email.id,defaultMessage:"Not a valid email"}).strict().lowercase({id:re.lowercase.id,defaultMessage:"Email must be lowercase"}).required({id:re.required.id,defaultMessage:"Email is required"}).nullable()});x.a`
  color: ${({theme:e})=>e.colors.primary600};
`;Mt().shape({password:pe().min(8,{id:re.minLength.id,defaultMessage:"Password must be at least 8 characters",values:{min:8}}).test("required-byte-size",{id:"components.Input.error.contain.maxBytes",defaultMessage:"Password must be less than 73 bytes"},function(e){return!e||typeof e!="string"?!0:wa(e)<=72}).matches(/[a-z]/,{message:{id:"components.Input.error.contain.lowercase",defaultMessage:"Password must contain at least 1 lowercase letter"}}).matches(/[A-Z]/,{message:{id:"components.Input.error.contain.uppercase",defaultMessage:"Password must contain at least 1 uppercase letter"}}).matches(/\d/,{message:{id:"components.Input.error.contain.number",defaultMessage:"Password must contain at least 1 number"}}).required({id:re.required.id,defaultMessage:"Password is required"}).nullable(),confirmPassword:pe().required({id:re.required.id,defaultMessage:"Confirm password is required"}).oneOf([yo("password"),null],{id:"components.Input.error.password.noMatch",defaultMessage:"Passwords must match"}).nullable()});De.reducerPath+"",De.reducer;x(Kn)`
  width: 24px;
  height: 24px;

  path {
    fill: ${({theme:e})=>e.colors.danger600};
  }
`;Pe("Filters");Pe("Pagination");Pe("Table");x(Me)`
  transform: ${({$isUp:e})=>`rotate(${e?"180":"0"}deg)`};
`;x(I)`
  margin-right: ${({theme:e})=>e.spaces[6]};

  svg {
    width: 3.2rem;
    height: 3.2rem;
  }
`;x(P)`
  color: ${({theme:e})=>e.colors.neutral800};
  word-break: break-all;
`;x(bf)`
  background-color: ${({theme:e})=>e.colors.neutral0};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral150};

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;const Up=x(Yn)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  height: 32px;

  color: ${({theme:e})=>e.colors.neutral800};

  &.active > div {
    ${({theme:e})=>`
        background-color: ${e.colors.primary100};
        color: ${e.colors.primary700};
        font-weight: 500;
      `}
  }

  &:hover.active > div {
    ${({theme:e})=>`
        background-color: ${e.colors.primary100};
      `}
  }

  &:hover > div {
    ${({theme:e})=>`
        background-color: ${e.colors.neutral100};
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`;x(k)`
  height: 56px;
  display: flex;
  align-items: center;
  padding-left: ${({theme:e})=>e.spaces[5]};
`;x.button`
  cursor: pointer;
  width: 100%;
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;

  height: 32px;

  border-radius: ${({theme:e})=>e.borderRadius};

  padding-left: ${({theme:e})=>e.spaces[3]};
  padding-right: ${({theme:e})=>e.spaces[3]};
  padding-top: ${({theme:e})=>e.spaces[2]};
  padding-bottom: ${({theme:e})=>e.spaces[2]};

  &:hover {
    background-color: ${({theme:e})=>e.colors.neutral100};
  }
`;x.li`
  ${Up} > div {
    padding-left: 36px;
  }
`;x(Vr)`
  background: linear-gradient(
    90deg,
    ${({theme:e})=>e.colors.primary600} 0%,
    ${({theme:e})=>e.colors.alternative600} 121.48%
  );
  padding: 0.4rem 1rem;
`;const Hp=De.enhanceEndpoints({addTagTypes:["LicenseLimits","User","Role","RolePermissions"]}).injectEndpoints({endpoints:e=>({createUser:e.mutation({query:t=>({url:"/admin/users",method:"POST",data:t}),transformResponse:t=>t.data,invalidatesTags:["LicenseLimits",{type:"User",id:"LIST"},"HomepageKeyStatistics"]}),updateUser:e.mutation({query:({id:t,...o})=>({url:`/admin/users/${t}`,method:"PUT",data:o}),invalidatesTags:(t,o,{id:r})=>[{type:"User",id:r},{type:"User",id:"LIST"}]}),getUsers:e.query({query:({id:t,...o}={})=>({url:`/admin/users/${t??""}`,method:"GET",config:{params:o}}),transformResponse:t=>{let o=[];return t.data&&("results"in t.data?Array.isArray(t.data.results)&&(o=t.data.results):o=[t.data]),{users:o,pagination:"pagination"in t.data?t.data.pagination:null}},providesTags:(t,o,r)=>typeof r=="object"&&"id"in r?[{type:"User",id:r.id}]:[...t?.users.map(({id:a})=>({type:"User",id:a}))??[],{type:"User",id:"LIST"}]}),deleteManyUsers:e.mutation({query:t=>({url:"/admin/users/batch-delete",method:"POST",data:t}),transformResponse:t=>t.data,invalidatesTags:["LicenseLimits",{type:"User",id:"LIST"},"HomepageKeyStatistics"]}),createRole:e.mutation({query:t=>({url:"/admin/roles",method:"POST",data:t}),transformResponse:t=>t.data,invalidatesTags:[{type:"Role",id:"LIST"}]}),getRoles:e.query({query:({id:t,...o}={})=>({url:`/admin/roles/${t??""}`,method:"GET",config:{params:o}}),transformResponse:t=>{let o=[];return t.data&&(Array.isArray(t.data)?o=t.data:o=[t.data]),o},providesTags:(t,o,r)=>typeof r=="object"&&"id"in r?[{type:"Role",id:r.id}]:[...t?.map(({id:a})=>({type:"Role",id:a}))??[],{type:"Role",id:"LIST"}]}),updateRole:e.mutation({query:({id:t,...o})=>({url:`/admin/roles/${t}`,method:"PUT",data:o}),transformResponse:t=>t.data,invalidatesTags:(t,o,{id:r})=>[{type:"Role",id:r}]}),getRolePermissions:e.query({query:({id:t,...o})=>({url:`/admin/roles/${t}/permissions`,method:"GET",config:{params:o}}),transformResponse:t=>t.data,providesTags:(t,o,{id:r})=>[{type:"RolePermissions",id:r}]}),updateRolePermissions:e.mutation({query:({id:t,...o})=>({url:`/admin/roles/${t}/permissions`,method:"PUT",data:o}),transformResponse:t=>t.data,invalidatesTags:(t,o,{id:r})=>[{type:"RolePermissions",id:r}]}),getRolePermissionLayout:e.query({query:t=>({url:"/admin/permissions",method:"GET",config:{params:t}}),transformResponse:t=>t.data})}),overrideExisting:!1}),{useCreateUserMutation:zh,useGetUsersQuery:Wh,useUpdateUserMutation:qh,useDeleteManyUsersMutation:Uh,useGetRolesQuery:Hh,useCreateRoleMutation:Gh,useUpdateRoleMutation:Kh,useGetRolePermissionsQuery:Yh,useGetRolePermissionLayoutQuery:Qh,useUpdateRolePermissionsMutation:Zh}=Hp,Gp=De.enhanceEndpoints({addTagTypes:["CountDocuments"]}).injectEndpoints({endpoints:e=>({getKeyStatistics:e.query({query:()=>"/admin/homepage/key-statistics",transformResponse:t=>t.data,providesTags:(t,o)=>["HomepageKeyStatistics"]}),getCountDocuments:e.query({query:()=>"/content-manager/homepage/count-documents",transformResponse:t=>t.data,providesTags:(t,o)=>["CountDocuments"]}),getHomepageLayout:e.query({query:()=>"/admin/homepage/layout",transformResponse:t=>t.data}),updateHomepageLayout:e.mutation({query:t=>({url:"/admin/homepage/layout",method:"PUT",body:t}),transformResponse:t=>t.data})})}),{useGetKeyStatisticsQuery:Xh,useGetCountDocumentsQuery:Jh,useGetHomepageLayoutQuery:em,useUpdateHomepageLayoutMutation:tm}=Gp;$i({dependsOn:an().min(1),operator:wi(["is","isNot"]),value:yi([an(),Ci(),vi()])});const Kp=De.enhanceEndpoints({addTagTypes:["DocumentInfo"]}).injectEndpoints({endpoints:e=>({getInfo:e.query({query:()=>"/documentation/getInfos",providesTags:["DocumentInfo"]}),deleteVersion:e.mutation({query:({version:t})=>({url:`/documentation/deleteDoc/${t}`,method:"DELETE"}),invalidatesTags:["DocumentInfo"]}),updateSettings:e.mutation({query:({body:t})=>({url:"/documentation/updateSettings",method:"PUT",data:t}),invalidatesTags:["DocumentInfo"]}),regenerateDoc:e.mutation({query:({version:t})=>({url:"/documentation/regenerateDoc",method:"POST",data:{version:t}})})})}),{useGetInfoQuery:om,useDeleteVersionMutation:nm,useUpdateSettingsMutation:rm,useRegenerateDocMutation:am}=Kp,sm=e=>`${Ti}.${e}`;export{ze as B,Qp as D,Xp as E,I as F,ih as G,qe as I,Eu as L,Jp as M,eh as T,am as a,nm as b,oh as c,nh as d,rh as e,P as f,sm as g,th as h,ah as i,k as j,cd as k,sh as l,Ff as m,rm as n,om as u};
