(()=>{"use strict";var e={7305:(e,a,t)=>{var r=t(5043),s=t(4391),d=t(4637),l=t(7541),o=t(579);const n={"0%":"#8774fb","50%":"#54b2e7","100%":"#22bec2"},i=()=>{const[e,a]=r.useState(void 0);return r.useEffect((()=>{(async()=>{a(76)})()}),[]),(0,o.jsxs)("div",{className:"GreedIndexChart",children:[(0,o.jsx)("h1",{className:"greed-header",children:"Greed Index"}),(0,o.jsx)(d.Ay,{theme:{token:{colorText:"#fff"}},children:(0,o.jsx)(l.A,{size:220,className:"greed-chart",type:"dashboard",percent:e,strokeColor:n})})]})};var c=t(3003);const u=()=>(0,c.wA)(),v=c.d4;var p=t(7154),h=t(588);const m=(0,h.zD)("swap/fetch",(async(e,a)=>{try{return(await p.A.get("https://my-json-server.typicode.com/Swerwe/FakeDB/swap")).data}catch(t){return a.rejectWithValue("Swap loading error...")}})),f=(0,h.zD)("sales/fetch",(async(e,a)=>{try{return(await p.A.get("https://my-json-server.typicode.com/Swerwe/FakeDB/sales-statistic")).data}catch(t){return a.rejectWithValue("Sales loading error...")}})),x=(0,h.zD)("offers/fetch",(async(e,a)=>{try{return(await p.A.get("https://my-json-server.typicode.com/Swerwe/FakeDB/exchange-offer")).data}catch(t){return a.rejectWithValue("Sales loading error...")}})),j=(0,h.zD)("tokens/fetch",(async(e,a)=>{try{return(await p.A.get("https://my-json-server.typicode.com/Swerwe/FakeDB/tokens")).data}catch(t){return a.rejectWithValue("Tokens loading error...")}}));var y=t(9230);const g=e=>{let{percent:a}=e;return(0,o.jsx)(d.Ay,{theme:{components:{Progress:{remainingColor:"#48465a"}}},children:(0,o.jsx)(l.A,{format:e=>"+".concat(e,"%"),percent:a,steps:25,size:"small",strokeColor:(e=>e<30?"#8673fa":"#25b8bd")(a)})})},b=[{title:"Name",dataIndex:"name",key:"name"},{title:"Price",dataIndex:"price",key:"price",render:e=>(0,o.jsxs)("a",{children:["$",e]})},{title:"Balance",dataIndex:"balance",key:"balance"},{title:"Market Cap",dataIndex:"marketCap",key:"marketCap",render:e=>(0,o.jsxs)("a",{children:["$",e.toLocaleString().replace(/\s/g,",")]})},{title:"Volume (24H)",dataIndex:"volume",key:"volume",render:e=>(0,o.jsxs)("a",{children:["$",e.toLocaleString().replace(/\s/g,",")]})},{title:"CIRC Supply",dataIndex:"circSupply",key:"circSupply",render:e=>(0,o.jsx)(g,{percent:e})}];function w(e){let{className:a,size:t="small"}=e;const s=u(),{tokens:l}=v((e=>e.tokensReducer));return r.useEffect((()=>{s(j())}),[s]),(0,o.jsx)("div",{className:["TokensModule",a].join(" "),children:(0,o.jsx)(d.Ay,{theme:{components:{Table:{headerColor:"#7d7b89",borderColor:"#2b293f",headerSplitColor:"#2b293f"}},token:{colorBgContainer:"#211d37",colorText:"#fff",colorPrimary:"#757575"}},children:(0,o.jsx)(y.A,{columns:b,dataSource:l,size:t})})})}const N=e=>{let{from:a}=e;return(0,o.jsx)("div",{className:"SwapFrom",children:a&&(0,o.jsxs)("div",{className:"SwapFrom-body",children:[(0,o.jsx)("div",{className:"SwapFrom-body__icon"}),(0,o.jsxs)("div",{className:"SwapFrom-body__currency",children:[(0,o.jsx)("span",{className:"SwapFrom-body__token-name",children:a.tokenName}),(0,o.jsx)("span",{className:"SwapFrom-body__full-name",children:a.fullName}),(0,o.jsxs)("span",{className:"SwapFrom-body__balance",children:["Balance:",a.balance]})]}),(0,o.jsxs)("div",{className:"SwapFrom-body__amount",children:[(0,o.jsx)("span",{className:"SwapFrom-body__token-pay",children:"Pay"}),(0,o.jsx)("span",{className:"SwapFrom-body__token-amount",children:a.amount}),(0,o.jsxs)("span",{className:"SwapFrom-body__token-usd",children:["$",a.usd]})]})]})})},S=e=>{let{revenuePercent:a,className:t}=e;const r=a>0;return(0,o.jsx)("div",{className:["RevenuePercent",t].join(" "),children:r?(0,o.jsxs)("div",{className:"percent",style:{color:"#099f96"},children:["(+",a.toFixed(1),"%)"]}):(0,o.jsxs)("div",{className:"percent",style:{color:"#ff004c"},children:["(+",a.toFixed(1),"%)"]})})},_=e=>{let{to:a}=e;return(0,o.jsx)("div",{className:"SwapTo",children:a&&(0,o.jsxs)("div",{className:"SwapTo-body",children:[(0,o.jsx)("div",{className:"SwapTo-body__icon"}),(0,o.jsxs)("div",{className:"SwapTo-body__currency",children:[(0,o.jsx)("span",{className:"SwapTo-body__token-name",children:a.tokenName}),(0,o.jsx)("span",{className:"SwapTo-body__full-name",children:a.fullName}),(0,o.jsxs)("span",{className:"SwapTo-body__balance",children:["Balance:",a.balance]})]}),(0,o.jsxs)("div",{className:"SwapTo-body__amount",children:[(0,o.jsx)("span",{className:"SwapTo-body__token-receive",children:"Receive"}),(0,o.jsx)("span",{className:"SwapTo-body__token-amount",children:a.amount}),(0,o.jsxs)("span",{className:"SwapTo-body__token-usd",children:["$",a.usd,(0,o.jsx)(S,{revenuePercent:a.revenuePercent})]})]})]})})},k=e=>{let{className:a}=e;return(0,o.jsx)("div",{className:["ChangeIcon",a].join(" "),children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.0",width:"15.000000pt",height:"15.000000pt",viewBox:"0 0 64.000000 64.000000",preserveAspectRatio:"xMidYMid meet",children:(0,o.jsxs)("g",{transform:"translate(0.000000,64.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none",children:[(0,o.jsx)("path",{fill:"#fff",d:"M171 577 c-7 -7 -11 -79 -11 -221 l0 -210 -34 33 c-34 33 -65 38 -74 13 -2 -7 25 -43 61 -78 75 -76 72 -76 156 9 36 37 52 61 48 71 -10 25 -38 19 -74 -16 l-33 -32 0 216 c0 174 -3 217 -14 221 -7 3 -19 0 -25 -6z"}),(0,o.jsx)("path",{fill:"#fff",d:"M383 527 c-47 -45 -64 -69 -60 -81 10 -25 38 -19 74 16 l33 32 0 -216 c0 -174 3 -217 14 -221 32 -12 36 16 36 227 l0 210 34 -33 c33 -32 65 -38 73 -14 5 13 -89 118 -120 134 -15 8 -30 -1 -84 -54z"})]})})})},C=e=>{let{swap:a}=e;return(0,o.jsxs)("div",{className:"SwapBody",children:[(0,o.jsx)(N,{from:null===a||void 0===a?void 0:a.from}),(0,o.jsx)(k,{className:"change-icon__absolute"}),(0,o.jsx)(_,{to:null===a||void 0===a?void 0:a.to}),(0,o.jsx)("button",{className:"swap-btn",children:"Swap"})]})},P=()=>{const e=u(),{swap:a,isLoading:t,error:s}=v((e=>e.swapReducer));return r.useEffect((()=>{e(m())}),[e]),(0,o.jsxs)("div",{className:"Swap",children:[(0,o.jsx)("h1",{className:"swap-header",children:"Swap"}),(0,o.jsx)(C,{swap:a,isLoading:t,error:s})]})};var O=t(461),T=t(6058),L=t(6178),F=t.n(L);const M=e=>{const a=F()(e,"YYYY-MM-DD");if(!a.isValid())throw new Error("Invalid date format");return a.format("D MMM")};O.t1.register(O.Bs,O.m_,O.s$,O.PP,O.kc,O.E8);const R=e=>{let{statistics:a,color:t="red"}=e;const r={labels:a.map((e=>M(e.date))),datasets:[{label:"$",backgroundColor:t,data:a.map((e=>e.value)),borderWidth:1,barPercentage:.1,barThickness:10,borderRadius:5}]};return(0,o.jsx)("div",{className:"StatisticsChart",children:(0,o.jsx)(T.yP,{className:"bar",data:r,options:{plugins:{legend:{display:!1}},scales:{x:{beginAtZero:!0,grid:{display:!1}},y:{display:!1,grid:{display:!1}}}}})})},I=()=>{const e=u(),{sales:a}=v((e=>e.salesReducer));return r.useEffect((()=>{e(f())}),[e]),(0,o.jsxs)("div",{className:"SalesChart",children:[(0,o.jsx)("h2",{className:"SalesChart__header",children:"Sales Statistic"}),(null===a||void 0===a?void 0:a.total)&&(0,o.jsxs)("div",{className:"SalesChart__amount",children:["$",a.total]}),(null===a||void 0===a?void 0:a.revenuePercent)&&(0,o.jsx)(S,{className:"revenue",revenuePercent:a.revenuePercent}),a&&(0,o.jsx)(R,{color:"#8774fc",statistics:a.data})]})},B=()=>{const e=u(),{offers:a}=v((e=>e.offersReducer));return r.useEffect((()=>{e(x())}),[e]),(0,o.jsxs)("div",{className:"OffersChart",children:[(0,o.jsx)("h2",{className:"OffersChart__header",children:"Offers Statistic"}),(null===a||void 0===a?void 0:a.total)&&(0,o.jsxs)("div",{className:"OffersChart__amount",children:["$",a.total]}),(null===a||void 0===a?void 0:a.revenuePercent)&&(0,o.jsx)(S,{className:"revenue",revenuePercent:a.revenuePercent}),a&&(0,o.jsx)(R,{color:"#23d4d7",statistics:a.data})]})},A={id:"gradient-plugin",beforeDraw:function(e){const a=e.ctx,t=e.canvas;if(null===t)return;const r=t.getContext("2d");if(null===r)return;const s=r.createLinearGradient(0,t.height,t.width,0);s.addColorStop(0,"#26167e"),s.addColorStop(.2,"#291e67"),s.addColorStop(.4,"#292154"),s.addColorStop(.7,"#2c2843"),s.addColorStop(1,"#25213a"),a.fillStyle=s,a.fillRect(0,0,e.width,e.height)}},z=[{date:"2024-04-01",value:10},{date:"2024-04-02",value:11},{date:"2024-04-03",value:12},{date:"2024-04-04",value:13},{date:"2024-04-05",value:14},{date:"2024-04-06",value:10},{date:"2024-04-07",value:9},{date:"2024-04-08",value:12},{date:"2024-04-09",value:15},{date:"2024-04-10",value:14},{date:"2024-04-11",value:13},{date:"2024-04-12",value:13},{date:"2024-04-13",value:12},{date:"2024-04-14",value:18},{date:"2024-04-15",value:19},{date:"2024-04-16",value:14},{date:"2024-04-17",value:10},{date:"2024-04-18",value:16},{date:"2024-04-19",value:13},{date:"2024-04-20",value:13},{date:"2024-04-21",value:16},{date:"2024-04-22",value:19},{date:"2024-04-23",value:19},{date:"2024-04-24",value:15},{date:"2024-04-25",value:14},{date:"2024-04-26",value:16},{date:"2024-04-27",value:19},{date:"2024-04-28",value:17},{date:"2024-04-29",value:18},{date:"2024-04-30",value:20},{date:"2024-05-01",value:19},{date:"2024-05-02",value:14},{date:"2024-05-03",value:16},{date:"2024-05-04",value:13},{date:"2024-05-05",value:22},{date:"2024-05-04",value:23},{date:"2024-05-05",value:24},{date:"2024-05-06",value:20},{date:"2024-05-07",value:29},{date:"2024-05-08",value:22},{date:"2024-05-07",value:20},{date:"2024-05-08",value:22},{date:"2024-05-09",value:19},{date:"2024-05-10",value:13},{date:"2024-05-11",value:14},{date:"2024-05-12",value:10},{date:"2024-05-13",value:9},{date:"2024-05-14",value:12},{date:"2024-05-15",value:14},{date:"2024-05-16",value:16},{date:"2024-05-17",value:16},{date:"2024-05-18",value:15},{date:"2024-05-19",value:17},{date:"2024-05-20",value:16},{date:"2024-05-21",value:18},{date:"2024-05-22",value:15},{date:"2024-05-23",value:18},{date:"2024-05-24",value:18},{date:"2024-05-25",value:18},{date:"2024-05-26",value:19},{date:"2024-05-27",value:17},{date:"2024-05-28",value:16},{date:"2024-05-29",value:20},{date:"2024-05-30",value:20},{date:"2024-05-31",value:18},{date:"2024-06-01",value:24},{date:"2024-06-02",value:23},{date:"2024-06-03",value:24},{date:"2024-06-04",value:26},{date:"2024-06-05",value:20},{date:"2024-06-06",value:23},{date:"2024-06-07",value:22},{date:"2024-06-08",value:21},{date:"2024-06-09",value:22},{date:"2024-06-10",value:22},{date:"2024-06-11",value:23},{date:"2024-06-12",value:26},{date:"2024-06-13",value:27},{date:"2024-06-14",value:26},{date:"2024-06-15",value:28},{date:"2024-06-16",value:25},{date:"2024-06-17",value:24},{date:"2024-06-18",value:25},{date:"2024-06-19",value:24},{date:"2024-06-20",value:23},{date:"2024-06-21",value:25},{date:"2024-06-22",value:26},{date:"2024-06-23",value:27},{date:"2024-06-24",value:25},{date:"2024-06-25",value:26}];O.t1.register(O.FN,O.No);const D={labels:z.map((e=>M(e.date))),datasets:[{label:"$",borderColor:"#fff",data:z.map((e=>e.value)),borderWidth:1,pointRadius:0}]},E=()=>(0,o.jsx)("div",{className:"BalanceChart",children:(0,o.jsx)("div",{className:"graph",children:(0,o.jsx)(T.N1,{data:D,plugins:[A],options:{plugins:{legend:{display:!1}},layout:{padding:{top:20,left:10,bottom:8,right:8}},responsive:!0,interaction:{intersect:!1},scales:{x:{grid:{display:!1},ticks:{color:"#adaeae"}},y:{ticks:{color:"#adaeae"},grid:{display:!1},suggestedMin:5,suggestedMax:35}}}})})}),$=()=>(0,o.jsxs)("div",{className:"Overview",children:[(0,o.jsxs)("div",{className:"balance-charts",children:[(0,o.jsx)(E,{}),(0,o.jsx)(P,{})]}),(0,o.jsxs)("div",{className:"small-charts",children:[(0,o.jsx)(I,{}),(0,o.jsx)(B,{}),(0,o.jsx)(i,{})]}),(0,o.jsx)(w,{className:"tokens-table"})]});var V=t(5475),W=t(3216),Y=t(4112);function Z(){return(0,o.jsx)("div",{className:"Navbar",children:(0,o.jsx)(d.Ay,{theme:{components:{Menu:{darkItemSelectedBg:"#231f36",darkItemBg:"transparent",horizontalItemBorderRadius:10,itemPaddingInline:10,itemMarginBlock:10,iconMarginInlineEnd:10}}},children:(0,o.jsxs)(Y.A,{className:"navbar-menu",style:{width:"90vw",marginLeft:"70px",marginTop:"20px",display:"flex",gap:"5px"},theme:"dark",mode:"horizontal",children:[(0,o.jsx)(Y.A.Item,{className:"navbar-item",children:(0,o.jsx)(V.N_,{to:"/crypto-extrados.github.io/overview",children:"Overview"})},"home"),(0,o.jsx)(Y.A.Item,{className:"navbar-item",children:(0,o.jsx)(V.N_,{to:"/crypto-extrados.github.io/tokens",children:"Tokens"})},"profile")]})})})}const q=()=>(0,o.jsx)("div",{className:"Tokens",children:(0,o.jsx)(w,{size:"large",className:"tokens-full"})});const G=function(){return(0,o.jsxs)(V.Kd,{children:[(0,o.jsx)(Z,{}),(0,o.jsxs)(W.BV,{children:[(0,o.jsx)(W.qh,{path:"/crypto-extrados.github.io",element:(0,o.jsx)(W.C5,{to:"/crypto-extrados.github.io/overview"})}),(0,o.jsx)(W.qh,{path:"/crypto-extrados.github.io/overview",element:(0,o.jsx)($,{})}),(0,o.jsx)(W.qh,{path:"/crypto-extrados.github.io/tokens",element:(0,o.jsx)(q,{})})]})]})},H=e=>{e&&e instanceof Function&&t.e(96).then(t.bind(t,6453)).then((a=>{let{getCLS:t,getFID:r,getFCP:s,getLCP:d,getTTFB:l}=a;t(e),r(e),s(e),d(e),l(e)}))};var K=t(3923);const U={swap:void 0,isLoading:!1,error:""},J=(0,h.Z0)({name:"swap",initialState:U,reducers:{},extraReducers:e=>{e.addCase(m.pending.type,(e=>{e.isLoading=!0})),e.addCase(m.fulfilled.type,((e,a)=>{e.isLoading=!1,e.error="",e.swap=a.payload})),e.addCase(m.rejected.type,((e,a)=>{e.isLoading=!1,e.error=a.payload}))}}).reducer,Q={sales:void 0,isLoading:!1,error:""},X=(0,h.Z0)({name:"sales",initialState:Q,reducers:{},extraReducers:e=>{e.addCase(f.pending.type,(e=>{e.isLoading=!0})),e.addCase(f.fulfilled.type,((e,a)=>{e.isLoading=!1,e.error="",e.sales=a.payload})),e.addCase(f.rejected.type,((e,a)=>{e.isLoading=!1,e.error=a.payload}))}}).reducer,ee={offers:void 0,isLoading:!1,error:""},ae=(0,h.Z0)({name:"offers",initialState:ee,reducers:{},extraReducers:e=>{e.addCase(x.pending.type,(e=>{e.isLoading=!0})),e.addCase(x.fulfilled.type,((e,a)=>{e.isLoading=!1,e.error="",e.offers=a.payload})),e.addCase(x.rejected.type,((e,a)=>{e.isLoading=!1,e.error=a.payload}))}}).reducer,te=(0,h.Z0)({name:"tokens",initialState:{tokens:[],isLoading:!1,error:""},reducers:{},extraReducers:e=>{e.addCase(j.pending.type,(e=>{e.isLoading=!0})),e.addCase(j.fulfilled.type,((e,a)=>{e.isLoading=!1,e.error="",e.tokens=a.payload})),e.addCase(j.rejected.type,((e,a)=>{e.error=a.payload,e.isLoading=!1}))}}).reducer,re=(0,K.HY)({swapReducer:J,salesReducer:X,offersReducer:ae,tokensReducer:te}),se=(0,h.U1)({reducer:re});s.createRoot(document.getElementById("root")).render((0,o.jsx)(r.StrictMode,{children:(0,o.jsx)(c.Kq,{store:se,children:(0,o.jsx)(G,{})})})),H()}},a={};function t(r){var s=a[r];if(void 0!==s)return s.exports;var d=a[r]={id:r,loaded:!1,exports:{}};return e[r].call(d.exports,d,d.exports,t),d.loaded=!0,d.exports}t.m=e,(()=>{var e=[];t.O=(a,r,s,d)=>{if(!r){var l=1/0;for(c=0;c<e.length;c++){r=e[c][0],s=e[c][1],d=e[c][2];for(var o=!0,n=0;n<r.length;n++)(!1&d||l>=d)&&Object.keys(t.O).every((e=>t.O[e](r[n])))?r.splice(n--,1):(o=!1,d<l&&(l=d));if(o){e.splice(c--,1);var i=s();void 0!==i&&(a=i)}}return a}d=d||0;for(var c=e.length;c>0&&e[c-1][2]>d;c--)e[c]=e[c-1];e[c]=[r,s,d]}})(),t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},(()=>{var e,a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;t.t=function(r,s){if(1&s&&(r=this(r)),8&s)return r;if("object"===typeof r&&r){if(4&s&&r.__esModule)return r;if(16&s&&"function"===typeof r.then)return r}var d=Object.create(null);t.r(d);var l={};e=e||[null,a({}),a([]),a(a)];for(var o=2&s&&r;"object"==typeof o&&!~e.indexOf(o);o=a(o))Object.getOwnPropertyNames(o).forEach((e=>l[e]=()=>r[e]));return l.default=()=>r,t.d(d,l),d}})(),t.d=(e,a)=>{for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},t.e=()=>Promise.resolve(),t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={792:0};t.O.j=a=>0===e[a];var a=(a,r)=>{var s,d,l=r[0],o=r[1],n=r[2],i=0;if(l.some((a=>0!==e[a]))){for(s in o)t.o(o,s)&&(t.m[s]=o[s]);if(n)var c=n(t)}for(a&&a(r);i<l.length;i++)d=l[i],t.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return t.O(c)},r=self.webpackChunkcrypto_extrados=self.webpackChunkcrypto_extrados||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))})();var r=t.O(void 0,[96],(()=>t(7305)));r=t.O(r)})();
//# sourceMappingURL=main.b8f5a45e.js.map