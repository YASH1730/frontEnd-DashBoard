"use strict";(self.webpackChunkadminpanel=self.webpackChunkadminpanel||[]).push([[737],{8737:function(e,t,n){n.r(t),n.d(t,{default:function(){return ae}});var a=n(2982),i=n(4942),l=n(5861),s=n(885),o=n(1413),r=n(5987),u=n(4687),c=n.n(u),d=n(2791),p=n(4554),m=n(890),h=n(1889),x=n(7391),g=n(68),Z=n(3400),f=n(242),b=n(4512),j=n(5825),v=n(9124),y=n(3896),_=n(8096),C=n(7133),P=n(8970),S=n(5523),z=n(1419),w=n(3786),W=n(5712),U=n(1747),k=n(829),I=n(6151),R=n(4454),T=n(3466),D=n(792),N=n(2739),A=n(627),K=(n(2764),n(5532)),O=n(9434),q=n(2881),B=n(2941),M=n(7477),F=n(6654),G=n(2674),L=n(5983),E=n(4223),V=n(184),H=(0,E.Z)((0,V.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit"),J=["children","value","index"],Y={display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:16},Q={display:"inline-flex",borderRadius:2,border:"1px solid #eaeaea",marginBottom:8,marginRight:8,width:100,height:100,padding:4,boxSizing:"border-box"},X={display:"flex",minWidth:0,overflow:"hidden"},$={display:"block",width:"auto",height:"100%"},ee={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:800,maxHeight:500,overflow:"scroll",bgcolor:"background.paper",boxShadow:24,p:2};function te(e){var t=e.children,n=e.value,a=e.index,i=(0,r.Z)(e,J);return(0,V.jsx)("div",(0,o.Z)((0,o.Z)({role:"tabpanel",hidden:n!==a,id:"vertical-tabpanel-".concat(a),"aria-labelledby":"vertical-tab-".concat(a)},i),{},{children:n===a&&(0,V.jsx)(p.Z,{sx:{p:3},children:(0,V.jsx)(m.Z,{children:t})})}))}function ne(e){return{id:"vertical-tab-".concat(e),"aria-controls":"vertical-tabpanel-".concat(e)}}function ae(){var e=(0,d.useRef)(),t=(0,d.useState)(0),n=(0,s.Z)(t,2),r=n[0],u=n[1],D=(0,d.useState)([]),N=(0,s.Z)(D,2),A=N[0],K=N[1],E=(0,d.useState)(""),J=(0,s.Z)(E,2),Y=J[0],Q=J[1],X=(0,G.N)(),$=(0,O.I0)(),ee=(0,O.v9)((function(e){return e})).auth,ae=(0,d.useState)(50),re=(0,s.Z)(ae,2),ue=re[0],ce=re[1],de=(0,d.useState)([]),pe=(0,s.Z)(de,2),me=pe[0],he=pe[1],xe=(0,d.useState)([]),ge=(0,s.Z)(xe,2),Ze=ge[0],fe=ge[1],be=(0,d.useState)({cusPolish:"no",product_title:"",product_image:[],polish_image:[],length:0,height:0,breadth:0,selling_price:0,MRP:0,quantity:1,discount:0,polish_time:0,note:"",polish:"",polish_note:""}),je=(0,s.Z)(be,2),ve=je[0],ye=je[1],_e=(0,d.useState)({customer:[],product:[],address:[],polish:[],pincode:[],city:[],customer_type:["Interior","Architect","VIP","VVIP"],warehouse:["Jodhpur","Bangalore"],channel:[{key:"3rd Party Vendor",value:"3rd Party Vendor"},{key:"Amazon",value:"Amazon"},{key:"Bengaluru Showroom",value:"Bengaluru Showroom"},{key:"Etsy",value:"Etsy"},{key:"Flipkart",value:"Flipkart"},{key:"Jodhpur Showroom",value:"Jodhpur Showroom"},{key:"JioMart",value:"JioMart"},{key:"Meesho",value:"Meesho"},{key:"Online",value:"Online"},{key:"Others",value:"Others"}],pay:["Razorpay","PayTM","Bank Transfer","COD"]}),Ce=(0,s.Z)(_e,2),Pe=Ce[0],Se=Ce[1],ze=function(){var e=(0,l.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=setTimeout((function(){return(0,F.Xj)(t.target.value).then((function(e){Se((function(t){return(0,o.Z)((0,o.Z)({},t),{},{product:e.data})}))}),1e3),function(){return clearTimeout(n)}}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),we=(0,d.useState)({O:"",CUS:"",CID:null,GST:null,open:!1,payload:{},classification:"personal",customer_type:"",has_GST:"no",fulfilled:!1,advance_received:!1,pay_method_remaining:"",pay_method_advance:"",inventory_location:"",courier_company:"",AWB:"",customer_email:"",customer_mobile:"",customer_name:"",shipping:"",billing:"",product_array:[],customizations:[],quantity:[],subTotal:0,discount:0,total:0,status:"processing",country:"India",city:"",state:"",paid:0,note:"",custom_order:!0,sale_channel:"Online",PO:"",refresh:0,sales_person:"Sales Person"===ee.role?ee.name:"",pincode:""}),We=(0,s.Z)(we,2),Ue=We[0],ke=We[1],Ie=(0,d.useState)(0),Re=(0,s.Z)(Ie,2),Te=Re[0],De=Re[1];function Ne(){return(Ne=(0,l.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(6!==Ue.pincode.toString().length){e.next=5;break}return e.next=3,(0,F.Kn)(Ue.pincode);case 3:200===(t=e.sent).status&&(n=t.data.results[Ue.pincode]||[],Se((function(e){return(0,o.Z)((0,o.Z)({},e),{},{city:n})})),ke((function(e){return(0,o.Z)((0,o.Z)({},e),{},{state:n[0].state})})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ae(){return Ae=(0,l.Z)(c().mark((function e(){var t,n,i,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,F.zQ)();case 2:return t=e.sent,e.next=5,(0,F.Uv)();case 5:return n=e.sent,e.next=8,(0,F.MF)();case 8:200===(i=e.sent).status&&(i.data.length>0?(l=parseInt(i.data[0].DID.split("-")[1])+1,Q("DID-0".concat(l))):Q("DID-01001")),200===n.status&&Se((function(e){return(0,o.Z)((0,o.Z)({},e),{},{customer:n.data})})),200===t.status&&Se((function(e){return(0,o.Z)((0,o.Z)({},e),{},{polish:(0,a.Z)(t.data.polish)})}));case 12:case"end":return e.stop()}}),e)}))),Ae.apply(this,arguments)}function Ke(){var e=0;return A.map((function(t){return e+=t.selling_price*Ue.quantity[t.SKU]})),e}(0,d.useEffect)((function(){!function(){Ae.apply(this,arguments)}()}),[Ue.refresh]),(0,d.useEffect)((function(){var e=Pe.product.filter((function(e){return Ue.product_array.includes(e.SKU)&&e}));K(e.map((function(e,t){return ke((0,o.Z)((0,o.Z)({},Ue),{},{quantity:(0,o.Z)((0,o.Z)({},Ue.quantity),{},(0,i.Z)({},e.SKU,1))})),{id:t+1,SKU:e.SKU,product_title:e.product_title,product_image:e.featured_image,dimension:e.length_main+"X"+e.breadth+"X"+e.height,MRP:e.MRP,qty:Ue.quantity[e.SKU]?Ue.quantity[e.SKU]:1,selling_price:e.selling_price,discount_limit:e.discount_limit,range:e.range,action:e}})))}),[Ue.product_array]),(0,d.useEffect)((function(){!function(){Ne.apply(this,arguments)}()}),[Ue.pincode]),(0,d.useEffect)((function(){if(3===Te){var e=Ke();ke((function(t){return(0,o.Z)((0,o.Z)({},t),{},{subTotal:e,total:e})}))}}),[Te]);var Oe=[{field:"id",headerName:"ID",width:20},{field:"qty",renderHeader:function(){return(0,V.jsx)("strong",{children:"Quantity"})},width:80,renderCell:function(e){return(0,V.jsx)(h.ZP,{container:!0,className:"qtyButtons",children:(0,V.jsx)(h.ZP,{item:!0,xs:12,children:(0,V.jsx)(x.Z,{value:Ue.quantity[e.row.SKU],type:"Number",size:"small",onChange:function(t){return ke((0,o.Z)((0,o.Z)({},Ue),{},{quantity:(0,o.Z)((0,o.Z)({},Ue.quantity),{},(0,i.Z)({},e.row.SKU,parseInt(t.target.value)>0?parseInt(t.target.value):1))}))}})})})}},{field:"SKU",headerName:"SKU",width:100},{field:"product_image",align:"center",headerName:"Image",width:200,renderCell:function(e){return(0,V.jsx)("div",{className:"categoryImage",children:void 0!==e.formattedValue?(0,V.jsx)("img",{src:e.formattedValue||B.Z,alt:"productImg"}):(0,V.jsx)("img",{src:B.Z,alt:"productImg"})})}},{field:"product_title",headerName:"Product Title",width:200},{field:"selling_price",headerName:"Selling price",width:200},{field:"dimension",headerName:"Dimension",width:150},{field:"action",headerName:"Action",width:100,renderCell:function(e){return(0,V.jsx)(V.Fragment,{children:(0,V.jsx)(g.Z,{title:"customization",children:(0,V.jsx)(Z.Z,{disabled:!e.formattedValue.SKU&&!0,onClick:function(){return ke((function(t){return(0,o.Z)((0,o.Z)({},t),{},{open:!Ue.open,payload:e.formattedValue})}))},children:(0,V.jsx)(H,{})})})})}}],qe=function(){ke({O:"",CUS:"",CID:null,GST:null,open:!1,payload:{},classification:"personal",customer_type:"",has_GST:"no",fulfilled:!1,advance_received:!1,pay_method_remaining:"",pay_method_advance:"",inventory_location:"",courier_company:"",AWB:"",customer_email:"",customer_mobile:"",customer_name:"",shipping:"",billing:"",product_array:[],customizations:[],quantity:[],subTotal:0,discount:0,total:0,status:"processing",country:"India",city:"",state:"",paid:0,note:"",custom_order:!0,sale_channel:"Online",PO:"",refresh:0,sales_person:"Sales Person"===ee.role?ee.name:"",pincode:""}),De(0),u(0),Q("")};var Be,Me,Fe,Ge=function(e){if(console.log(e.target.name),console.log(e.target.value),"shipping"===e.target.name&&Pe.address.length>0){var t,n=Pe.address.filter((function(t){return t.address===e.target.value}));console.log(n),ke((0,o.Z)((0,o.Z)({},Ue),{},(t={},(0,i.Z)(t,e.target.name,e.target.value),(0,i.Z)(t,"city",n[0].city),(0,i.Z)(t,"state",n[0].state),t)))}else if("pic_before_dispatch"===e.target.name)ke((0,o.Z)((0,o.Z)({},Ue),{},(0,i.Z)({},e.target.name,e.target.checked)));else if("advance_received"===e.target.name){var a;e.target.checked?ke((0,o.Z)((0,o.Z)({},Ue),{},(0,i.Z)({},e.target.name,e.target.checked))):ke((0,o.Z)((0,o.Z)({},Ue),{},(a={},(0,i.Z)(a,e.target.name,e.target.checked),(0,i.Z)(a,"pay_method_advance",""),(0,i.Z)(a,"pay_method_remaining",""),a)))}else if("fulfilled"===e.target.name){var l;e.target.checked?ke((0,o.Z)((0,o.Z)({},Ue),{},(0,i.Z)({},e.target.name,e.target.checked))):ke((0,o.Z)((0,o.Z)({},Ue),{},(l={},(0,i.Z)(l,e.target.name,e.target.checked),(0,i.Z)(l,"inventory_location",""),(0,i.Z)(l,"AWB",""),(0,i.Z)(l,"courier_company",""),l)))}else if("discount"!==e.target.name)ke((0,o.Z)((0,o.Z)({},Ue),{},(0,i.Z)({},e.target.name,e.target.value)));else{var s;ke((0,o.Z)((0,o.Z)({},Ue),{},(s={},(0,i.Z)(s,e.target.name,e.target.value),(0,i.Z)(s,"subTotal",Ke()),(0,i.Z)(s,"total",Ue.subTotal-Ke()/100*e.target.value),s)))}},Le=(0,d.useState)(!1),Ee=(0,s.Z)(Le,2),Ve=Ee[0],He=Ee[1],Je=function(){he([]),fe([]),ye({cusPolish:"no",product_title:"",product_image:[],polish_image:[],length:0,height:0,breadth:0,selling_price:0,MRP:0,discount:0,quantity:1,polish_time:0,note:"",polish:"",polish_note:""}),He(!1)},Ye=function(){var e=(0,l.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,F.Ax)();case 2:200===(t=e.sent).status&&(t.data.length>0?(n=parseInt(t.data[0].CUS.split("-")[1])+1,ye((function(e){return(0,o.Z)((0,o.Z)({},e),{},{CUS:"CUS-0".concat(n)})}))):ye((function(e){return(0,o.Z)((0,o.Z)({},e),{},{CUS:"CUS-01001"})})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Qe=function(){var e=(0,l.Z)(c().mark((function e(t){var n,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=new FormData,me.map((function(e){return n.append("product_image",e)})),"yes"===ve.cusPolish&&(Ze.map((function(e){return n.append("polish_image",e)})),n.append("polish_note",ve.polish_note)),n.append("CUS",ve.CUS),n.append("product_title",ve.product_title),n.append("length",ve.length),n.append("height",ve.height),n.append("breadth",ve.breadth),n.append("selling_price",ve.selling_price),n.append("MRP",ve.MRP),n.append("discount",ve.discount),n.append("note",ve.note),n.append("polish_time",ve.polish_time),n.append("polish",ve.polish),n.append("cusPolish",ve.cusPolish),console.log(ve),e.next=19,(0,F.n6)(n);case 19:200===(l=e.sent).status&&(ke((0,o.Z)((0,o.Z)({},Ue),{},{quantity:(0,o.Z)((0,o.Z)({},Ue.quantity),{},(0,i.Z)({},t.target.CUS.value,parseInt(t.target.quantity.value)))})),K([].concat((0,a.Z)(A),[{id:A.length+1,SKU:l.data.data.CUS,product_title:l.data.data.product_title,product_image:l.data.data.product_image.length>0?l.data.data.product_image[0]:B.Z,dimension:l.data.data.length+"x"+l.data.data.breadth+"x"+l.data.data.height,MRP:l.data.data.MRP,qty:l.data.data.quantity,selling_price:l.data.data.MRP-l.data.data.MRP/100*l.data.data.discount,discount_limit:l.data.data.discount,action:l.data.data}])),he([]),fe([]),ye({cusPolish:"no",product_title:"",product_image:[],polish_image:[],length:0,height:0,breadth:0,selling_price:0,MRP:0,discount:0,quantity:1,polish_time:0,note:"",polish:"",polish_note:""}),Je());case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function Xe(e){return $e.apply(this,arguments)}function $e(){return($e=(0,l.Z)(c().mark((function t(n){var a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log(Ue),t.next=4,(0,F.uN)((0,o.Z)((0,o.Z)({},Ue),{},{note:e.current.getContent(),DID:Y,AID:"Not Assigned "+Y,type:"Order",operation:"createOrder"}));case 4:200!==(a=t.sent).status?$((0,q.br)({open:!0,variant:"error",message:a.data.message||"Something Went Wrong !!!"})):($((0,q.br)({open:!0,variant:"success",message:a.data.message})),qe()),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0),$((0,q.br)({open:!0,variant:"error",message:"Something Went Wrong !!!"}));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function et(e){return tt.apply(this,arguments)}function tt(){return(tt=(0,l.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.target.value),e.next=3,(0,F.d3)({page:1,limit:10,total:10,pincode:t.target.value});case 3:200===(n=e.sent).status&&Se((function(e){return(0,o.Z)((0,o.Z)({},e),{},{pincode:(0,a.Z)(n.data.data)})}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,V.jsxs)(p.Z,{sx:{pl:4,pr:4},children:[(0,V.jsx)(m.Z,{component:"span",sx:{display:"block"},variant:"h5",children:"Create Order"}),(0,V.jsx)(se,{cusProductData:ve,setCustomProduct:ye,open:Ve,getCUS:Ye,handleCustomProduct:Qe,ProductsPreviews:ie,PolishPreviews:le,data:Ue,catalogs:Pe,handleClose:Je,files:me,setFiles:he,polish:Ze,setPolish:fe}),(0,V.jsx)(oe,{data:Ue,setData:ke,catalogs:Pe}),(0,V.jsx)(h.ZP,{container:!0,scaping:2,sx:{display:"flex",justifyContent:"space-between",alignItem:"center"},children:(0,V.jsx)(h.ZP,{item:!0,p:1,xs:12,sx:{mt:3},children:(0,V.jsx)(h.ZP,{container:!0,className:"orderSteps",sx:{boxShadow:1,borderRadius:5,mt:2,p:2},children:(0,V.jsx)(h.ZP,{item:!0,xs:12,children:(0,V.jsxs)("form",{method:"post",onSubmit:Xe,children:[(0,V.jsx)(f.Z,{className:"stepper",activeStep:Te,children:["Select Customer","Select Product","Fulfillment","Receipt"].map((function(e,t){return(0,V.jsx)(b.Z,{children:(0,V.jsx)(j.Z,{children:e})},t)}))}),0===Te&&(0,V.jsxs)(p.Z,{sx:{pt:2,flexGrow:1,bgcolor:"background.paper",display:"flex"},children:[(0,V.jsxs)(v.Z,{orientation:"vertical",variant:"scrollable",value:r,onChange:function(e,t){u(t)},"aria-label":"Vertical tabs example",sx:{borderRight:1,borderColor:"divider"},children:[(0,V.jsx)(y.Z,(0,o.Z)({label:"Guest"},ne(0))),(0,V.jsx)(y.Z,(0,o.Z)({label:"Existing Customer"},ne(1)))]}),(0,V.jsx)(te,{value:r,index:0,children:(0,V.jsxs)(p.Z,{sx:{p:2,pt:0},children:[(0,V.jsxs)(m.Z,{component:"span",variant:"h5",children:["Guest",(0,V.jsx)(m.Z,{component:"span",sx:{display:"block !important"},variant:"caption",children:"Add guest details and necessary information from here"})]}),(0,V.jsxs)(_.Z,{sx:{mt:1},children:[(0,V.jsx)(C.Z,{id:"demo-radio-buttons-group-label",children:"Classification"}),(0,V.jsxs)(P.Z,{"aria-labelledby":"demo-radio-buttons-group-label",name:"classification",size:"small",value:Ue.classification,onChange:Ge,children:[(0,V.jsx)(S.Z,{value:"personal",control:(0,V.jsx)(z.Z,{}),label:"Personal",size:"small"}),(0,V.jsx)(S.Z,{size:"small",value:"business",control:(0,V.jsx)(z.Z,{}),label:"Business"})]})]}),(0,V.jsx)(x.Z,{size:"small",fullWidth:!0,id:"outlined-select",value:Ue.customer_type,onChange:Ge,select:!0,sx:{mb:2,mt:1},name:"customer_type",label:"Customer Type",multiple:!0,helperText:"Please select customer type.",children:Pe.customer_type.map((function(e){return(0,V.jsx)(w.Z,{value:e,children:e},e)}))}),(0,V.jsx)(x.Z,{sx:{pb:2},size:"small",fullWidth:!0,id:"outlined-select",name:"customer_name",value:Ue.customer_name||"",onChange:Ge,label:"Customer Name",type:"text"}),(0,V.jsx)(x.Z,{sx:{pb:2},size:"small",fullWidth:!0,id:"outlined-select",value:Ue.customer_email||"",onChange:Ge,name:"customer_email",label:"Customer Email",type:"email"}),(0,V.jsx)(x.Z,{sx:{pb:2},size:"small",fullWidth:!0,id:"outlined-select",name:"customer_mobile",value:Ue.customer_mobile||"",onChange:Ge,label:"Contact Number",type:"number"}),(0,V.jsx)(x.Z,{sx:{pb:2},size:"small",fullWidth:!0,disabled:!0,id:"outlined-select",name:"country",value:Ue.country||"",onChange:Ge,label:"Country",type:"text"}),(0,V.jsx)(W.Z,{freeSolo:!0,size:"small",fullWidth:!0,noOptionsText:"ex : 305001",autoHighlight:!0,id:"combo-box-demo",options:Pe.pincode.map((function(e){return e.pincode})),renderInput:function(e){return(0,V.jsx)(x.Z,(0,o.Z)((0,o.Z)({onKeyUpCapture:et,value:Ue.pincode||""},e),{},{label:"Pincode"}))},onChange:function(e,t){return ke((function(e){return(0,o.Z)((0,o.Z)({},e),{},{pincode:t})}))}}),(0,V.jsx)(x.Z,{size:"small",fullWidth:!0,id:"outlined-select",value:Ue.city,onChange:Ge,select:!0,sx:{mb:2,mt:1},name:"city",label:"City",multiple:!0,helperText:"Please select your city.",children:Pe.city.map((function(e){return(0,V.jsx)(w.Z,{value:e.city,children:e.city},e.city)}))}),(0,V.jsx)(x.Z,{sx:{pb:2},size:"small",fullWidth:!0,disabled:!0,id:"outlined-select",name:"state",value:Ue.state||"",onChange:Ge,label:"State",type:"text"}),(0,V.jsxs)(_.Z,{children:[(0,V.jsx)(C.Z,{id:"demo-radio-buttons-group-label",children:"GST"}),(0,V.jsxs)(P.Z,{"aria-labelledby":"demo-radio-buttons-group-label",name:"has_GST",size:"small",value:Ue.has_GST,onChange:Ge,children:[(0,V.jsx)(S.Z,{value:"yes",control:(0,V.jsx)(z.Z,{}),label:"Yes",size:"small"}),(0,V.jsx)(S.Z,{size:"small",value:"no",control:(0,V.jsx)(z.Z,{}),label:"No"})]})]}),"yes"===Ue.has_GST&&(0,V.jsx)(x.Z,{size:"small",sx:{mb:2},fullWidth:!0,value:Ue.GST,onChange:Ge,minRows:5,maxRows:5,style:{width:"100%",resize:"none"},name:"GST",type:"text",label:"GST Number",variant:"outlined"}),(0,V.jsx)("br",{}),(0,V.jsx)(C.Z,{id:"demo-radio-buttons-group-label",children:"Shipping Address"}),(0,V.jsx)(U.Z,{minRows:4,placeholder:"Shipping Address...",style:{marginTop:"10px",width:"100%"},size:"small",fullWidth:!0,id:"outlined-select",name:"shipping",value:Ue.shipping||"",onChange:Ge,label:"Shipping",type:"text"}),(0,V.jsx)(C.Z,{id:"demo-radio-buttons-group-label",children:"Billing Address"}),(0,V.jsx)(U.Z,{minRows:4,placeholder:"Billing Address...",style:{marginTop:"10px",width:"100%"},size:"small",fullWidth:!0,id:"outlined-select",name:"billing",value:Ue.billing||"",onChange:Ge,label:"Shipping",type:"text"})]})}),(0,V.jsx)(te,{value:r,index:1,children:(0,V.jsxs)(p.Z,{sx:{p:2,pt:1},children:[(0,V.jsxs)(m.Z,{component:"span",variant:"h5",children:["Existing Customer",(0,V.jsx)(m.Z,{component:"span",sx:{display:"block !important"},variant:"caption",children:"Search for existing customer details and necessary information from here"})]}),(0,V.jsxs)(_.Z,{sx:{mt:1},children:[(0,V.jsx)(C.Z,{id:"demo-radio-buttons-group-label",children:"Classification"}),(0,V.jsxs)(P.Z,{"aria-labelledby":"demo-radio-buttons-group-label",name:"classification",size:"small",value:Ue.classification,onChange:Ge,children:[(0,V.jsx)(S.Z,{value:"personal",control:(0,V.jsx)(z.Z,{}),label:"Personal",size:"small"}),(0,V.jsx)(S.Z,{size:"small",value:"business",control:(0,V.jsx)(z.Z,{}),label:"Business"})]})]}),(0,V.jsx)("br",{}),(0,V.jsx)(x.Z,{size:"small",fullWidth:!0,id:"outlined-select",value:Ue.customer_type,onChange:Ge,select:!0,sx:{mb:2,mt:1},name:"customer_type",label:"Customer Type",multiple:!0,helperText:"Please select customer type.",children:Pe.customer_type.map((function(e){return(0,V.jsx)(w.Z,{value:e,children:e},e)}))}),(0,V.jsx)(W.Z,{id:"free-solo-demo",freeSolo:!0,onChange:function(e,t){return function(e){var t=parseInt(e.split(" - ")[1]),n=Pe.customer.filter((function(e){return e.mobile===t&&e}))[0];Se((0,o.Z)((0,o.Z)({},Pe),{},{address:n.address})),ke((0,o.Z)((0,o.Z)({},Ue),{},{customer_email:n.email,customer_mobile:n.mobile,customer_name:n.username,city:n.city,state:n.state,CID:n.CID}))}(t)},options:Pe.customer.map((function(e){return e.username+" - "+e.mobile})),renderInput:function(e){return(0,V.jsx)(x.Z,(0,o.Z)((0,o.Z)({},e),{},{name:"customer",size:"small",label:"Select Customer..."}))}}),(0,V.jsx)("br",{}),(0,V.jsx)(x.Z,{sx:{pb:2},size:"small",fullWidth:!0,id:"outlined-select",name:"customer_name",value:Ue.customer_name||"",onChange:Ge,label:"Customer Name",type:"text"}),(0,V.jsx)(x.Z,{sx:{pb:2},size:"small",fullWidth:!0,id:"outlined-select",value:Ue.customer_email||"",onChange:Ge,name:"customer_email",label:"Customer Email",type:"email"}),(0,V.jsx)(x.Z,{sx:{pb:2},size:"small",fullWidth:!0,id:"outlined-select",name:"customer_mobile",value:Ue.customer_mobile||"",onChange:Ge,label:"Contact Number",type:"number"}),(0,V.jsx)(x.Z,{sx:{pb:2},size:"small",fullWidth:!0,id:"outlined-select",name:"city",value:Ue.city||"",onChange:Ge,label:"City",type:"text"}),(0,V.jsx)(x.Z,{sx:{pb:2},size:"small",fullWidth:!0,id:"outlined-select",name:"state",value:Ue.state||"",onChange:Ge,label:"State",type:"text"}),(0,V.jsxs)(_.Z,{children:[(0,V.jsx)(C.Z,{id:"demo-radio-buttons-group-label",children:"GST"}),(0,V.jsxs)(P.Z,{"aria-labelledby":"demo-radio-buttons-group-label",name:"has_GST",size:"small",value:Ue.has_GST,onChange:Ge,children:[(0,V.jsx)(S.Z,{value:"yes",control:(0,V.jsx)(z.Z,{}),label:"Yes",size:"small"}),(0,V.jsx)(S.Z,{size:"small",value:"no",control:(0,V.jsx)(z.Z,{}),label:"No"})]})]}),"yes"===Ue.has_GST&&(0,V.jsx)(x.Z,{size:"small",sx:{mb:2},fullWidth:!0,value:Ue.GST,onChange:Ge,minRows:5,maxRows:5,style:{width:"100%",resize:"none"},name:"GST",type:"text",label:"GST Number",variant:"outlined"}),(0,V.jsx)("br",{}),Pe.address.length>0?(0,V.jsxs)(x.Z,{sx:{mb:2},fullWidth:!0,size:"small",id:"outlined-select",select:!0,onChange:Ge,name:"shipping",label:"Select Shipping...",value:Ue.shipping||"",multiple:!0,children:[Pe.address.map((function(e){return(0,V.jsx)(w.Z,{value:e.address,children:e.address},e.address)})),(0,V.jsx)(w.Z,{value:void 0,children:"None"},"none")]}):(0,V.jsxs)(V.Fragment,{children:[" ",(0,V.jsx)(C.Z,{id:"demo-radio-buttons-group-label",children:"Shipping Address"}),(0,V.jsx)(U.Z,{minRows:4,placeholder:"Shipping Address...",style:{marginTop:"10px",width:"100%"},size:"small",fullWidth:!0,id:"outlined-select",name:"shipping",value:Ue.shipping||"",onChange:Ge,label:"Shipping",type:"text"})]}),(0,V.jsx)(C.Z,{id:"demo-radio-buttons-group-label",children:"Billing Address"}),(0,V.jsx)(U.Z,{minRows:4,placeholder:"Billing Address...",style:{marginTop:"10px",width:"100%"},size:"small",fullWidth:!0,id:"outlined-select",name:"billing",value:Ue.billing||"",onChange:Ge,label:"Shipping",type:"text"})]})})]}),1===Te&&(0,V.jsxs)(p.Z,{sx:{p:2.5},children:[(0,V.jsx)(k.Z,{sx:{mb:2},id:"demo-multiple-checkbox-label",children:"Select Product"}),(0,V.jsx)(W.Z,{sx:{mb:2},disablePortal:!0,size:"small",fullWidth:!0,noOptionsText:"ex : P-01001",multiple:!0,autoHighlight:!0,id:"combo-box-demo",options:Pe.product.map((function(e){return e.SKU})),renderInput:function(e){return(0,V.jsx)(x.Z,(0,o.Z)((0,o.Z)({onKeyUpCapture:ze,value:Ue.product_array||""},e),{},{label:"Product SKU"}))},onChange:function(e,t){return ke((function(e){return(0,o.Z)((0,o.Z)({},e),{},{product_array:t})}))}}),(0,V.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"10px"},children:[(0,V.jsx)(k.Z,{sx:{mb:1},id:"demo-multiple-checkbox-label",children:"Product List"}),(0,V.jsxs)(I.Z,{size:"small",onClick:function(){return He(!0)},variant:"outlined",children:["Custom Product"," "]})]}),(Be=A,Me=Oe,Fe=300,(0,V.jsx)("div",{style:{height:Fe,width:"100%"},children:(0,V.jsx)(M._,{rows:Be,columns:Me,disableSelectionOnClick:!0,pagination:!0,pageSize:ue,onPageSizeChange:function(e){return ce(e)},rowsPerPageOptions:[25,50,100]})}))]}),2===Te&&(0,V.jsxs)(p.Z,{sx:{p:2.5},children:[(0,V.jsx)(_.Z,{sx:{mb:2},children:(0,V.jsx)(S.Z,{label:"Pictures Before Dispatch",control:(0,V.jsx)(R.Z,{name:"pic_before_dispatch",onChange:Ge,size:"small",checked:Ue.pic_before_dispatch})})}),(0,V.jsx)("br",{}),(0,V.jsx)(_.Z,{sx:{mb:2},children:(0,V.jsx)(S.Z,{label:"Is Fulfilled",control:(0,V.jsx)(R.Z,{name:"fulfilled",onChange:Ge,size:"small",checked:Ue.fulfilled})})}),Ue.fulfilled&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(x.Z,{sx:{mb:2,mt:2},size:"small",fullWidth:!0,id:"outlined-select",select:!0,name:"inventory_location",label:"Inventory Location",multiple:!0,value:Ue.inventory_location,onChange:Ge,children:Pe.warehouse.map((function(e){return(0,V.jsx)(w.Z,{value:e,children:e},e)}))}),(0,V.jsx)(x.Z,{sx:{mb:2},size:"small",fullWidth:!0,id:"outlined-select",type:"text",name:"courier_company",label:"Courier Company",value:Ue.courier_company,onChange:Ge}),(0,V.jsx)(x.Z,{sx:{mb:2},size:"small",fullWidth:!0,id:"outlined-select",type:"text",name:"AWB",label:"AWB",value:Ue.AWB,onChange:Ge})]})]}),3===Te&&(0,V.jsxs)(p.Z,{sx:{p:2.5},children:[(0,V.jsx)(x.Z,{sx:{mb:2},size:"small",fullWidth:!0,id:"outlined-select",type:"text",disabled:"Super Admin"!==ee.role&&"Admin"!==ee.role,name:"sales_person",label:"Sales Person",value:Ue.sales_person||"",onChange:Ge}),(0,V.jsx)(x.Z,{sx:{mb:2},size:"small",fullWidth:!0,id:"outlined-select",type:"text",name:"PO",label:"PO",value:Ue.PO||"",onChange:Ge}),(0,V.jsx)(x.Z,{sx:{mb:2},size:"small",fullWidth:!0,id:"outlined-select",select:!0,name:"sale_channel",label:"Sale Channel",multiple:!0,value:Ue.sale_channel||"Online",onChange:Ge,children:Pe.channel.map((function(e){return(0,V.jsx)(w.Z,{value:e.value,children:e.value},e.key)}))}),(0,V.jsxs)(h.ZP,{container:!0,children:[(0,V.jsx)(h.ZP,{item:!0,xs:12,children:(0,V.jsx)(L.M,{apiKey:"nrxcqobhboeugucjonpg61xo1m65hn8qjxwayuhvqfjzb6j4",initialValue:"<p>Note</p>",onInit:function(t,n){return e.current=n},init:{height:400,menubar:!0,plugins:"image code"}})}),(0,V.jsx)("br",{}),(0,V.jsx)(h.ZP,{item:!0,xs:12,children:(0,V.jsx)(x.Z,{fullWidth:!0,sx:{mb:2,mt:2},size:"small",disabled:!0,label:"CID",InputProps:{startAdornment:(0,V.jsx)(T.Z,{position:"start",children:"CID"})},value:Ue.CID})}),(0,V.jsx)(h.ZP,{item:!0,xs:12,children:(0,V.jsx)(x.Z,{fullWidth:!0,sx:{mb:2},size:"small",disabled:!0,InputProps:{startAdornment:(0,V.jsx)(T.Z,{position:"start",children:"\u20b9"})},label:"Subtotal",onChange:Ge,name:"subTotal",value:Ue.subTotal})}),(0,V.jsx)(h.ZP,{item:!0,xs:12,children:(0,V.jsx)(x.Z,{fullWidth:!0,sx:{mb:2},label:"Discount",type:"number",size:"small",InputProps:{startAdornment:(0,V.jsx)(T.Z,{position:"start",children:"%"})},value:100>=Ue.discount&&Ue.discount>-1?Ue.discount:ke((function(e){return(0,o.Z)((0,o.Z)({},e),{},{discount:0})})),name:"discount",onChange:Ge})}),(0,V.jsx)(h.ZP,{item:!0,xs:12,children:(0,V.jsx)(x.Z,{fullWidth:!0,sx:{mb:2},label:"Advance Payment",type:"number",size:"small",name:"paid",onChange:Ge,value:Ue.paid>=0?Ue.paid:ke((function(e){return(0,o.Z)((0,o.Z)({},e),{},{paid:0})})),InputProps:{startAdornment:(0,V.jsx)(T.Z,{position:"start",children:"\u20b9"})}})}),Ue.paid>0&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(x.Z,{sx:{mb:2},size:"small",fullWidth:!0,id:"outlined-select",select:!0,name:"pay_method_advance",label:"Payment Method for Advance",multiple:!0,value:Ue.pay_method_advance,onChange:Ge,children:Pe.pay.map((function(e){return(0,V.jsx)(w.Z,{value:e,children:e},e)}))}),(0,V.jsx)(x.Z,{sx:{mb:2},size:"small",fullWidth:!0,id:"outlined-select",select:!0,name:"pay_method_remaining",label:"Payment Method for Remaining",multiple:!0,value:Ue.pay_method_remaining,onChange:Ge,children:Pe.pay.map((function(e){return(0,V.jsx)(w.Z,{value:e,children:e},e)}))})]}),(0,V.jsx)(h.ZP,{item:!0,xs:12,children:(0,V.jsx)(x.Z,{disabled:!0,fullWidth:!0,name:"total",label:"Total",onChange:Ge,InputProps:{startAdornment:(0,V.jsx)(T.Z,{position:"start",children:"\u20b9"})},type:"number",size:"small",value:0!==Ue.total?Ue.total:Ke()})})]})]}),(0,V.jsxs)(p.Z,{sx:{display:"flex",p:2,pb:0,justifyContent:"space-between",alignItem:"center"},children:[(0,V.jsx)(I.Z,{variant:"outlined",size:"small",disabled:0===Te,onClick:function(){De(Te-1)},children:"Back"}),(0,V.jsx)(I.Z,{variant:"contained",size:"small",onClick:3===Te?function(e){e.preventDefault(),X({description:"Data will listed in Database !!!"}).then((function(){return Xe(e)})).catch((function(e){console.log("Operation cancelled.")}))}:function(){De(Te+1)},children:3===Te?"Save Order":"Continue"})]})]})})})})})]})}function ie(e){var t=e.files,n=e.setFiles,i=e.text,l=(0,K.uI)({accept:"image/*",multiple:!0,onDrop:function(e){n((function(t){return[].concat((0,a.Z)(t),(0,a.Z)(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}))))}))}}),s=l.getRootProps,r=l.getInputProps,u=t.map((function(e){return(0,V.jsx)("div",{style:Q,children:(0,V.jsx)("div",{style:X,children:(0,V.jsx)("img",{src:e.preview,style:$,alt:"Images",onLoad:function(){URL.revokeObjectURL(e.preview)}})})},e.name)}));return(0,d.useEffect)((function(){return function(){return t.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[]),(0,V.jsxs)("section",{className:"container dorpContainer",children:[(0,V.jsxs)("div",(0,o.Z)((0,o.Z)({},s({className:"dropzone"})),{},{children:[(0,V.jsx)("input",(0,o.Z)({},r())),(0,V.jsx)("p",{children:i})]})),(0,V.jsx)("aside",{style:Y,children:u})]})}function le(e){var t=e.polish,n=e.setPolish,i=e.text,l=(0,K.uI)({accept:"image/*",multiple:!0,onDrop:function(e){n((function(t){return[].concat((0,a.Z)(t),(0,a.Z)(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}))))}))}}),s=l.getRootProps,r=l.getInputProps,u=t.map((function(e){return(0,V.jsx)("div",{style:Q,children:(0,V.jsx)("div",{style:X,children:(0,V.jsx)("img",{src:e.preview,style:$,alt:"Images",onLoad:function(){URL.revokeObjectURL(e.preview)}})})},e.name)}));return(0,d.useEffect)((function(){return function(){return t.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[]),(0,V.jsxs)("section",{className:"container dorpContainer",children:[(0,V.jsxs)("div",(0,o.Z)((0,o.Z)({},s({className:"dropzone"})),{},{children:[(0,V.jsx)("input",(0,o.Z)({},r())),(0,V.jsx)("p",{children:i})]})),(0,V.jsx)("aside",{style:Y,children:u})]})}function se(e){var t=e.PolishPreviews,n=e.cusProductData,a=e.setCustomProduct,l=e.open,s=e.getCUS,r=e.handleCustomProduct,u=e.ProductsPreviews,c=e.catalogs,g=e.handleClose,Z=e.files,f=e.setFiles,b=e.polish,j=e.setPolish;function v(e){a((function(t){return(0,o.Z)((0,o.Z)({},t),{},(0,i.Z)({},e.target.name,e.target.value))}))}return(0,d.useEffect)((function(){s()}),[l]),(0,V.jsx)("div",{children:(0,V.jsx)(D.Z,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:l,onClose:g,closeAfterTransition:!0,BackdropComponent:N.Z,BackdropProps:{timeout:500},children:(0,V.jsx)(A.Z,{in:l,children:(0,V.jsx)(p.Z,{sx:ee,children:(0,V.jsxs)(h.ZP,{container:!0,children:[(0,V.jsx)(h.ZP,{item:!0,xs:12,sx:{mb:2},children:(0,V.jsx)(m.Z,{component:"span",id:"transition-modal-title",variant:"h6",children:"Create Product"})}),(0,V.jsx)(h.ZP,{item:!0,xs:12,sx:{pb:2},children:(0,V.jsxs)(h.ZP,{container:!0,component:"form",sx:{gap:"1rem"},enctype:"multipart/form-data",method:"post",onSubmit:r,children:[(0,V.jsxs)(h.ZP,{item:!0,xs:5.8,children:[(0,V.jsx)(u,{files:Z,setFiles:f,text:"Please Drag and Drop the product images"}),(0,V.jsx)(x.Z,{size:"small",sx:{mb:2},fullWidth:!0,name:"CUS",disabled:!0,value:n.CUS,type:"text",label:"Custom SKU",variant:"outlined"}),(0,V.jsx)(x.Z,{size:"small",sx:{mb:2},fullWidth:!0,value:n.product_title,onChange:v,name:"product_title",type:"text",label:"Title",variant:"outlined"}),(0,V.jsx)(x.Z,{size:"small",sx:{mb:2},fullWidth:!0,name:"length",value:n.length,onChange:v,type:"text",label:"Length",variant:"outlined"}),(0,V.jsx)(x.Z,{size:"small",sx:{mb:2},fullWidth:!0,name:"breadth",value:n.breadth,onChange:v,type:"text",label:"Breadth",variant:"outlined"}),(0,V.jsx)(x.Z,{size:"small",sx:{mb:2},value:n.height,onChange:v,fullWidth:!0,name:"height",type:"text",label:"Height",variant:"outlined"}),(0,V.jsx)(x.Z,{size:"small",value:n.quantity,onChange:v,sx:{mb:2},fullWidth:!0,name:"quantity",type:"number",label:"Quantity",variant:"outlined"}),(0,V.jsx)(x.Z,{size:"small",value:n.selling_price,onChange:v,sx:{mb:2},fullWidth:!0,name:"selling_price",type:"number",label:"Selling Price",variant:"outlined"}),(0,V.jsx)(x.Z,{size:"small",sx:{mb:2},fullWidth:!0,name:"MRP",value:n.MRP,onChange:v,type:"number",label:"MRP",variant:"outlined"}),(0,V.jsx)(x.Z,{size:"small",sx:{mb:2},value:n.discount,onChange:v,fullWidth:!0,name:"discount",type:"number",label:"Discount",variant:"outlined"})]}),(0,V.jsxs)(h.ZP,{item:!0,xs:5.8,children:[(0,V.jsxs)(_.Z,{children:[(0,V.jsx)(C.Z,{id:"demo-radio-buttons-group-label",children:"Customize Polish"}),(0,V.jsxs)(P.Z,{"aria-labelledby":"demo-radio-buttons-group-label",name:"cusPolish",size:"small",value:n.cusPolish,onChange:v,children:[(0,V.jsx)(S.Z,{value:"yes",control:(0,V.jsx)(z.Z,{}),label:"Yes",size:"small"}),(0,V.jsx)(S.Z,{size:"small",value:"no",control:(0,V.jsx)(z.Z,{}),label:"No"})]})]}),"yes"===n.cusPolish?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(t,{polish:b,setPolish:j,text:"Please Drag and Drop the polish images"}),(0,V.jsx)(U.Z,{size:"small",sx:{mb:2},fullWidth:!0,value:n.polish_note,onChange:v,minRows:5,maxRows:5,style:{width:"100%",resize:"none"},name:"polish_note",placeholder:"Polish Note...",type:"text",label:"Note",variant:"outlined"})]}):(0,V.jsx)(x.Z,{size:"small",fullWidth:!0,id:"outlined-select",value:n.polish,onChange:v,select:!0,sx:{mb:2},name:"polish",label:"Polish",multiple:!0,helperText:"Please select your polish.",children:c.polish.map((function(e){return(0,V.jsx)(w.Z,{value:e.polish_name,children:e.polish_name},e.polish_name)}))}),(0,V.jsx)(x.Z,{size:"small",sx:{mb:2},value:n.polish_time,onChange:v,fullWidth:!0,name:"polish_time",type:"number",label:"Polish Time",variant:"outlined",helperText:"Polish time in days..."}),(0,V.jsx)(U.Z,{size:"small",fullWidth:!0,value:n.note,onChange:v,minRows:5,maxRows:5,sx:{mb:2},style:{width:"100%",resize:"none"},name:"note",placeholder:"Product Note...",type:"text",label:"Note",variant:"outlined"})]}),(0,V.jsx)(h.ZP,{item:!0,xs:12,children:(0,V.jsx)(I.Z,{size:"small",fullWidth:!0,variant:"contained",type:"submit",children:"Add"})})]})})]})})})})})}function oe(e){var t=e.data,n=e.setData,r=e.catalogs,u=(0,d.useState)({polish_images:[],design_images:[],cusPolish:"no",design:"no"}),g=(0,s.Z)(u,2),Z=g[0],f=g[1],b=(0,d.useState)([]),j=(0,s.Z)(b,2),v=j[0],y=j[1],W=(0,d.useState)([]),k=(0,s.Z)(W,2),R=k[0],T=k[1];function K(e){f((function(t){return(0,o.Z)((0,o.Z)({},t),{},(0,i.Z)({},e.target.name,e.target.value))}))}function O(){n((function(e){return(0,o.Z)((0,o.Z)({},e),{},{open:!1})})),T([]),y([])}function q(){return(q=(0,l.Z)(c().mark((function e(i){var l,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.preventDefault(),l=new FormData,R.length>0&&R.map((function(e){return l.append("polish_image",e)})),v.length>0&&v.map((function(e){return l.append("design_image",e)})),e.next=6,(0,F.Sx)(l);case 6:200===(s=e.sent).status&&(console.log(t.customizations.filter((function(e){return e.SKU===Z.SKU}))),n((function(e){return(0,o.Z)((0,o.Z)({},e),{},{customizations:e.customizations.filter((function(e){return e.SKU===Z.SKU})).length>0?e.customizations.map((function(e){return console.log(e),e.SKU===Z.SKU?(console.log(Z),e=(0,o.Z)((0,o.Z)({},Z),{},{polish_images:[].concat((0,a.Z)(e.polish_images),(0,a.Z)(s.data.polish)),design_images:[].concat((0,a.Z)(e.design_images),(0,a.Z)(s.data.design))})):e})):[].concat((0,a.Z)(e.customizations),[(0,o.Z)((0,o.Z)({},Z),{},{polish_images:(0,a.Z)(s.data.polish),design_images:(0,a.Z)(s.data.design)})])})})),O());case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,d.useEffect)((function(){if(t.customizations.filter((function(e){return e.SKU===t.payload.SKU})).length>0){var e=t.customizations.filter((function(e){return e.SKU===t.payload.SKU}))[0];f(e)}else f({SKU:t.payload.SKU,cusPolish:"no",design:"no"})}),[t.open]),(0,V.jsx)(V.Fragment,{children:(0,V.jsx)(D.Z,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:t.open,onClose:O,closeAfterTransition:!0,BackdropComponent:N.Z,BackdropProps:{timeout:500},children:(0,V.jsx)(A.Z,{in:t.open,children:(0,V.jsx)(p.Z,{sx:ee,children:(0,V.jsxs)(h.ZP,{container:!0,component:"form",method:"post",onSubmit:function(e){return q.apply(this,arguments)},children:[(0,V.jsxs)(h.ZP,{item:!0,xs:12,children:[(0,V.jsx)(m.Z,{variant:"h6",children:"Product Customization "}),(0,V.jsxs)(m.Z,{variant:"caption",children:["SKU ",Z.SKU]})]}),(0,V.jsxs)(h.ZP,{item:!0,xs:5.8,p:1,children:[(0,V.jsxs)(_.Z,{children:[(0,V.jsx)(C.Z,{id:"demo-radio-buttons-group-label",children:"Customize Polish"}),(0,V.jsxs)(P.Z,{"aria-labelledby":"demo-radio-buttons-group-label",name:"cusPolish",size:"small",value:Z.cusPolish||"no",onChange:K,children:[(0,V.jsx)(S.Z,{value:"yes",control:(0,V.jsx)(z.Z,{}),label:"Yes",size:"small"}),(0,V.jsx)(S.Z,{size:"small",value:"no",control:(0,V.jsx)(z.Z,{}),label:"No"})]})]}),"yes"===Z.cusPolish?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(le,{polish:R,setPolish:T,text:"Please Drag and Drop the polish images"}),Z.polish_images&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(m.Z,{variant:"caption",children:"Uploaded Image"}),(0,V.jsx)(p.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"1rem",width:"100%"},children:Z.polish_images.map((function(e){return(0,V.jsx)("img",{width:"70px",src:e,alt:"p_image"})}))})]}),(0,V.jsx)(U.Z,{size:"small",sx:{mb:2},fullWidth:!0,value:Z.polish_note||"",onChange:K,minRows:5,maxRows:5,style:{width:"100%",resize:"none"},name:"polish_note",placeholder:"Polish Note...",type:"text",label:"Note",variant:"outlined"})]}):(0,V.jsx)(x.Z,{size:"small",fullWidth:!0,id:"outlined-select",value:Z.polish||"",onChange:K,select:!0,sx:{mb:2},name:"polish",label:"Polish",multiple:!0,helperText:"Please select your polish.",children:r.polish.map((function(e){return(0,V.jsx)(w.Z,{value:e.polish_name,children:e.polish_name},e.polish_name)}))})]}),(0,V.jsxs)(h.ZP,{item:!0,xs:5.8,p:1,children:[(0,V.jsxs)(_.Z,{children:[(0,V.jsx)(C.Z,{id:"demo-radio-buttons-group-label",children:"Customize Design"}),(0,V.jsxs)(P.Z,{"aria-labelledby":"demo-radio-buttons-group-label",name:"design",size:"small",value:Z.design||"no",onChange:K,children:[(0,V.jsx)(S.Z,{value:"yes",control:(0,V.jsx)(z.Z,{}),label:"Yes",size:"small"}),(0,V.jsx)(S.Z,{size:"small",value:"no",control:(0,V.jsx)(z.Z,{}),label:"No"})]})]}),"yes"===Z.design&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(ie,{files:v,setFiles:y,text:"Please Drag and Drop the design images"}),Z.design_images&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(m.Z,{variant:"caption",children:"Uploaded Image"}),(0,V.jsx)(p.Z,{sx:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"1rem",width:"100%"},children:Z.design_images.map((function(e){return(0,V.jsx)("img",{width:"70px",src:e,alt:"p_image"})}))})]}),(0,V.jsx)(U.Z,{size:"small",sx:{mb:2},fullWidth:!0,value:Z.design_note||"",onChange:K,minRows:5,maxRows:5,style:{width:"100%",resize:"none"},name:"design_note",placeholder:"Design Note...",type:"text",label:"Note",variant:"outlined"})]})]}),(0,V.jsx)(h.ZP,{item:!0,xs:12,children:(0,V.jsx)(I.Z,{type:"submit",variant:"contained",children:"Apply"})})]})})})})})}},2764:function(){}}]);
//# sourceMappingURL=737.91ccf89e.chunk.js.map