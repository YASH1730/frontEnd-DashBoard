"use strict";(self.webpackChunkadminpanel=self.webpackChunkadminpanel||[]).push([[355],{1478:function(i,n,e){e.r(n),e.d(n,{default:function(){return w}});var a=e(1413),t=e(5987),r=e(885),s=e(2791),o=e(6871),c=e(4554),l=e(890),d=e(3400),h=e(3239),x=e(1889),p=e(4721),g=e(3767),m=e(9124),Z=e(3896),u=e(9760),j=e(5111),v=e(6711),f=e(6654),_=e(9434),b=e(2881),y=e(184),k=["children","value","index"];function w(i){var n=(0,_.I0)(),e=(0,s.useState)(0),w=(0,r.Z)(e,2),P=w[0],S=w[1],C=(0,s.useState)(0),D=(0,r.Z)(C,2),M=D[0],I=D[1],N=(0,o.UO)().SKU,T=(0,s.useState)(void 0),F=(0,r.Z)(T,2),z=F[0],R=F[1];(0,s.useMemo)((function(){(0,f.KL)(N).then((function(e){e.data?R(e.data):(i.history("productDetails/P-0"+(parseInt(N.split("-")[1])-1)),n((0,b.br)({open:!0,variant:"warning",message:"No more product left !!!"})))})).catch((function(i){console.log(i)}))}),[N]);function L(i){var n=i.children,e=i.value,r=i.index,s=(0,t.Z)(i,k);return(0,y.jsx)("div",(0,a.Z)((0,a.Z)({role:"tabpanel",hidden:e!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},s),{},{children:e===r&&(0,y.jsx)(c.Z,{sx:{p:3},children:(0,y.jsx)(l.Z,{children:n})})}))}function O(i){return{id:"simple-tab-".concat(i),"aria-controls":"simple-tabpanel-".concat(i)}}return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(c.Z,{className:"navigation",p:1,children:[(0,y.jsx)(d.Z,{disabled:parseInt(N.split("-")[1])<1002&&!0,onClick:function(){return i.history("productDetails/P-0"+(parseInt(N.split("-")[1])-1))},variant:"contained",color:"primary",children:(0,y.jsx)(u.Z,{})}),(0,y.jsx)(d.Z,{onClick:function(){return i.history("productDetails/P-0"+(parseInt(N.split("-")[1])+1))},variant:"contained",color:"primary",children:(0,y.jsx)(j.Z,{})})]}),void 0===z?(0,y.jsxs)("center",{style:{marginTop:"20%"},children:[(0,y.jsx)(l.Z,{variant:"h4",children:"Product Loading...."}),(0,y.jsx)(h.Z,{color:"primary"})]}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(x.ZP,{container:!0,className:"mainSec",children:[(0,y.jsxs)(x.ZP,{item:!0,xs:12,sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,y.jsx)(l.Z,{component:"span",sx:{display:"block",mb:3},variant:"h5",children:"Product Details"}),(0,y.jsx)(d.Z,{color:"primary",onClick:function(){i.history("/products")},children:(0,y.jsx)(v.Z,{})})]}),(0,y.jsx)(x.ZP,{item:!0,className:"imageSec",xs:12,md:6,children:(0,y.jsxs)(x.ZP,{container:!0,children:[(0,y.jsx)(x.ZP,{item:!0,xs:8,sx:{margin:"auto"},children:(0,y.jsx)("img",{className:"showImage",src:z.product_image[P],alt:"image2"})}),(0,y.jsx)(x.ZP,{item:!0,xs:12,children:(0,y.jsx)(x.ZP,{container:!0,className:"preview",spacing:2,children:z.product_image.map((function(i,n){return(0,y.jsx)(x.ZP,{item:!0,xs:3,onClick:function(){S(n)},children:(0,y.jsx)("img",{src:i,className:"showImage",alt:"images"})},n)}))})})]})}),(0,y.jsxs)(x.ZP,{item:!0,xs:12,className:"contentSec",md:6,children:[(0,y.jsx)(x.ZP,{container:!0,children:(0,y.jsx)(x.ZP,{item:!0,xs:12,children:(0,y.jsx)(l.Z,{sx:{fontWeight:350},variant:"h4",children:z.product_title})})}),(0,y.jsxs)(x.ZP,{className:"pd",item:!0,xs:12,children:[(0,y.jsx)(l.Z,{sx:{fontWeight:400},variant:"body2",children:"Product Details"}),(0,y.jsx)(p.Z,{}),(0,y.jsxs)(g.Z,{sx:{paddingTop:"2%"},children:[(0,y.jsxs)(l.Z,{variant:"caption",children:["SKU",(0,y.jsx)(l.Z,{sx:{float:"right"},variant:"caption",children:z.SKU})]}),(0,y.jsxs)(l.Z,{variant:"caption",children:["Category",(0,y.jsx)(l.Z,{sx:{float:"right"},variant:"caption",children:z.category_name})]}),(0,y.jsxs)(l.Z,{variant:"caption",children:["Sub Category",(0,y.jsx)(l.Z,{sx:{float:"right"},variant:"caption",children:z.sub_category_name})]}),(0,y.jsxs)(l.Z,{variant:"caption",children:["SEO Title",(0,y.jsx)(l.Z,{sx:{float:"right"},variant:"caption",children:z.seo_title})]}),(0,y.jsxs)(l.Z,{variant:"caption",children:["SEO Keyword",(0,y.jsx)(l.Z,{sx:{float:"right"},variant:"caption",children:z.seo_keyword})]}),(0,y.jsxs)(l.Z,{variant:"caption",children:["Matrial",(0,y.jsx)(l.Z,{sx:{float:"right"},variant:"caption",children:z.primary_material})]}),(0,y.jsxs)(l.Z,{variant:"caption",children:["Weight Capacity",(0,y.jsx)(l.Z,{sx:{float:"right"},variant:"caption",children:z.weight_capacity})]}),(0,y.jsxs)(l.Z,{variant:"caption",children:["Manufacturing Time",(0,y.jsx)(l.Z,{sx:{float:"right"},variant:"caption",children:z.manufacturing_time})]}),(0,y.jsxs)(l.Z,{variant:"caption",children:["Polish Time",(0,y.jsx)(l.Z,{sx:{float:"right"},variant:"caption",children:z.polish_time})]}),(0,y.jsxs)(l.Z,{variant:"caption",children:["Range",(0,y.jsx)(l.Z,{sx:{float:"right"},variant:"caption",children:z.range})]})]}),(0,y.jsx)(l.Z,{sx:{fontWeight:400,mt:1},variant:"body2",children:"Price Details"}),(0,y.jsx)(p.Z,{}),(0,y.jsxs)(g.Z,{sx:{paddingTop:"2%"},children:[(0,y.jsxs)(l.Z,{variant:"caption",children:["Selling Price",(0,y.jsx)(l.Z,{sx:{float:"right"},variant:"caption",children:z.selling_price})]}),(0,y.jsxs)(l.Z,{variant:"caption",children:["Showroom Price",(0,y.jsx)(l.Z,{sx:{float:"right"},variant:"caption",children:z.showroom_price})]}),(0,y.jsxs)(l.Z,{variant:"caption",children:["Discount ",(0,y.jsxs)(l.Z,{sx:{float:"right"},variant:"caption",children:[z.discount_limit,"%"]})]}),(0,y.jsxs)(l.Z,{variant:"caption",children:["Tax ",(0,y.jsxs)(l.Z,{sx:{float:"right"},variant:"caption",children:[z.tax_rate,"%"]})]}),(0,y.jsxs)(l.Z,{variant:"caption",children:["MRP ",(0,y.jsx)(l.Z,{sx:{float:"right"},variant:"caption",children:z.selling_price-z.selling_price/100*z.discount_limit})]})]}),(0,y.jsx)(l.Z,{sx:{fontWeight:400,mt:1},variant:"body2",children:"Dimesion Details"}),(0,y.jsx)(p.Z,{}),(0,y.jsxs)(g.Z,{sx:{paddingTop:"2%"},children:[(0,y.jsxs)(l.Z,{variant:"caption",children:["Dimensions (Inch)",(0,y.jsxs)(l.Z,{sx:{float:"right"},variant:"caption",children:[z.length_main," L x ",z.height," H x ",z.breadth," B"]})]}),(0,y.jsxs)(l.Z,{variant:"caption",children:["Package Length (Inch)",(0,y.jsx)(l.Z,{sx:{float:"right"},variant:"caption",children:z.package_length})]}),(0,y.jsxs)(l.Z,{variant:"caption",children:["Package Height (Inch)",(0,y.jsx)(l.Z,{sx:{float:"right"},variant:"caption",children:z.package_height})]}),(0,y.jsxs)(l.Z,{variant:"caption",children:["Package Breadth (Inch)",(0,y.jsx)(l.Z,{sx:{float:"right"},variant:"caption",children:z.package_breadth})]})]})]})]})]}),(0,y.jsxs)(x.ZP,{container:!0,className:"moreInfo",children:[(0,y.jsx)(x.ZP,{item:!0,xs:12,children:(0,y.jsx)(l.Z,{sx:{fontWeight:500},variant:"h5",children:"MORE INFORMATION"})}),(0,y.jsx)(x.ZP,{item:!0,xs:12,children:(0,y.jsx)(l.Z,{sx:{fontWeight:100,padding:"1% 0%"},component:"span",variant:"caption",children:"Explore full product details here !!!"})}),(0,y.jsx)(x.ZP,{item:!0,xs:12,children:(0,y.jsxs)(c.Z,{sx:{width:"100%"},children:[(0,y.jsx)(c.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,y.jsxs)(m.Z,{value:M,onChange:function(i,n){I(n)},"aria-label":"basic tabs example",children:[(0,y.jsx)(Z.Z,(0,a.Z)({label:"Specification"},O(0))),(0,y.jsx)(Z.Z,(0,a.Z)({label:"Image"},O(1))),(0,y.jsx)(Z.Z,(0,a.Z)({label:"Features"},O(2))),(0,y.jsx)(Z.Z,(0,a.Z)({label:"Miscellaneous"},O(3))),(0,y.jsx)(Z.Z,(0,a.Z)({label:"Inventory & Shipping"},O(4))),(0,y.jsx)(Z.Z,(0,a.Z)({label:"SEO"},O(5))),(0,y.jsx)(Z.Z,(0,a.Z)({label:"Extra Details"},O(6)))]})}),(0,y.jsx)(L,{value:M,index:0,children:(0,y.jsx)(g.Z,{sx:{padding:"5%",paddingTop:"1%"},children:["product_title","category_name","sub_category_name","primary_material","length_main","breadth","height","weight","polish_name","assembly_required","assembly_part","selling_price","showroom_price","discount_limit","show_on_mobile","range"].map((function(i){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(l.Z,{variant:"button",children:[i,(0,y.jsx)(l.Z,{sx:{float:"right"},variant:"button",children:z[i]})]}),(0,y.jsx)(p.Z,{})]})}))})}),(0,y.jsx)(L,{value:M,index:1,children:(0,y.jsx)(g.Z,{sx:{padding:"5%",paddingTop:"1%"},children:["featured_image","mannequin_image","specification_image"].map((function(i){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(l.Z,{variant:"h6",children:[i.toUpperCase(),(0,y.jsx)("img",{alt:"images",src:z[i],sx:{float:"right"}})]}),(0,y.jsx)(p.Z,{sx:{mb:2}})]})}))})}),(0,y.jsx)(L,{value:M,index:2,children:(0,y.jsx)(g.Z,{sx:{padding:"5%",paddingTop:"1%"},children:["rotating_seats","eatable_oil_polish","no_chemical","weaving","knife","not_suitable_for_Micro_Dish","tilt_top","inside_compartments","stackable","ceramic_drawers","ceramic_tiles"].map((function(i){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(l.Z,{variant:"button",children:[i,(0,y.jsx)(l.Z,{sx:{float:"right",color:z[i]?"green":"red"},variant:"button",children:z[i]?"true":"false"})]}),(0,y.jsx)(p.Z,{})]})}))})}),(0,y.jsx)(L,{value:M,index:3,children:(0,y.jsx)(g.Z,{sx:{padding:"5%",paddingTop:"1%"},children:["weight_capacity","joints","drawer","drawer_count","back_style"].map((function(i){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(l.Z,{variant:"button",children:[i,(0,y.jsx)(l.Z,{sx:{float:"right"},variant:"button",children:z[i]})]}),(0,y.jsx)(p.Z,{})]})}))})}),(0,y.jsx)(L,{value:M,index:4,children:(0,y.jsx)(g.Z,{sx:{padding:"5%",paddingTop:"1%"},children:["warehouse","bangalore_stock","jodhpur_stock","selling_points","polish_time","manufacturing_time","returnDays","COD","returnable","package_length","package_height","package_breadth","quantity","unit"].map((function(i){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(l.Z,{variant:"button",children:[i,(0,y.jsx)(l.Z,{sx:{float:"right"},variant:"button",children:z[i]})]}),(0,y.jsx)(p.Z,{})]})}))})}),(0,y.jsx)(L,{value:M,index:5,children:(0,y.jsx)(g.Z,{sx:{padding:"5%",paddingTop:"1%"},children:["product_description","seo_title","seo_description","seo_keyword"].map((function(i){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(l.Z,{variant:"button",children:[i,(0,y.jsx)(l.Z,{sx:{float:"right"},variant:"button",children:z[i]})]}),(0,y.jsx)(p.Z,{})]})}))})}),(0,y.jsx)(L,{value:M,index:6,children:(0,y.jsx)(g.Z,{sx:{padding:"5%",paddingTop:"1%"},children:["hinge_name","knob_name","textile_name","textile_type","door_name","fitting_name","top_size","dial_size","seating_size_width","seating_size_depth","seating_size_height","fabric","fabric_name","mirror","mirror_length","mirror_width","silver","silver_weight","wheel","trolley","trolley_material","tax_rate","legs"].map((function(i){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(l.Z,{variant:"button",children:[i,(0,y.jsx)(l.Z,{sx:{float:"right"},variant:"button",children:z[i]})]}),(0,y.jsx)(p.Z,{})]})}))})})]})})]})]})]})}},5111:function(i,n,e){var a=e(4836);n.Z=void 0;var t=a(e(5649)),r=e(184),s=(0,t.default)((0,r.jsx)("path",{d:"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zm-10 1H8v-2h4V8l4 4-4 4v-3z"}),"ArrowCircleRight");n.Z=s},6711:function(i,n,e){var a=e(4836);n.Z=void 0;var t=a(e(5649)),r=e(184),s=(0,t.default)((0,r.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");n.Z=s},3239:function(i,n,e){e.d(n,{Z:function(){return N}});var a=e(168),t=e(3366),r=e(7462),s=e(2791),o=e(8182),c=e(4419),l=e(2554),d=e(4036),h=e(1402),x=e(6934),p=e(5878),g=e(1217);function m(i){return(0,g.Z)("MuiCircularProgress",i)}(0,p.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var Z,u,j,v,f,_,b,y,k=e(184),w=["className","color","disableShrink","size","style","thickness","value","variant"],P=44,S=(0,l.F4)(f||(f=Z||(Z=(0,a.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),C=(0,l.F4)(_||(_=u||(u=(0,a.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),D=(0,x.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(i,n){var e=i.ownerState;return[n.root,n[e.variant],n["color".concat((0,d.Z)(e.color))]]}})((function(i){var n=i.ownerState,e=i.theme;return(0,r.Z)({display:"inline-block"},"determinate"===n.variant&&{transition:e.transitions.create("transform")},"inherit"!==n.color&&{color:(e.vars||e).palette[n.color].main})}),(function(i){return"indeterminate"===i.ownerState.variant&&(0,l.iv)(b||(b=j||(j=(0,a.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),S)})),M=(0,x.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(i,n){return n.svg}})({display:"block"}),I=(0,x.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(i,n){var e=i.ownerState;return[n.circle,n["circle".concat((0,d.Z)(e.variant))],e.disableShrink&&n.circleDisableShrink]}})((function(i){var n=i.ownerState,e=i.theme;return(0,r.Z)({stroke:"currentColor"},"determinate"===n.variant&&{transition:e.transitions.create("stroke-dashoffset")},"indeterminate"===n.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(i){var n=i.ownerState;return"indeterminate"===n.variant&&!n.disableShrink&&(0,l.iv)(y||(y=v||(v=(0,a.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),C)})),N=s.forwardRef((function(i,n){var e=(0,h.Z)({props:i,name:"MuiCircularProgress"}),a=e.className,s=e.color,l=void 0===s?"primary":s,x=e.disableShrink,p=void 0!==x&&x,g=e.size,Z=void 0===g?40:g,u=e.style,j=e.thickness,v=void 0===j?3.6:j,f=e.value,_=void 0===f?0:f,b=e.variant,y=void 0===b?"indeterminate":b,S=(0,t.Z)(e,w),C=(0,r.Z)({},e,{color:l,disableShrink:p,size:Z,thickness:v,value:_,variant:y}),N=function(i){var n=i.classes,e=i.variant,a=i.color,t=i.disableShrink,r={root:["root",e,"color".concat((0,d.Z)(a))],svg:["svg"],circle:["circle","circle".concat((0,d.Z)(e)),t&&"circleDisableShrink"]};return(0,c.Z)(r,m,n)}(C),T={},F={},z={};if("determinate"===y){var R=2*Math.PI*((P-v)/2);T.strokeDasharray=R.toFixed(3),z["aria-valuenow"]=Math.round(_),T.strokeDashoffset="".concat(((100-_)/100*R).toFixed(3),"px"),F.transform="rotate(-90deg)"}return(0,k.jsx)(D,(0,r.Z)({className:(0,o.Z)(N.root,a),style:(0,r.Z)({width:Z,height:Z},F,u),ownerState:C,ref:n,role:"progressbar"},z,S,{children:(0,k.jsx)(M,{className:N.svg,ownerState:C,viewBox:"".concat(22," ").concat(22," ").concat(P," ").concat(P),children:(0,k.jsx)(I,{className:N.circle,style:T,ownerState:C,cx:P,cy:P,r:(P-v)/2,fill:"none",strokeWidth:v})})}))}))},7883:function(i,n,e){e(2791);var a=e(4223),t=e(184);n.Z=(0,a.Z)((0,t.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},1883:function(i,n,e){e(2791);var a=e(4223),t=e(184);n.Z=(0,a.Z)((0,t.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")}}]);
//# sourceMappingURL=355.db39424e.chunk.js.map