import{_ as p,P as h,D,S as m,F as E,B as O,x as T,H as C,u as N,y as S,z as L,a as f,b as P,r as v,o as R,c as y,d as u,e as a,w as k,g as B,m as I,p as V,i as M}from"./index-6fcab6bb.js";h.use(D);const x={name:"SLPCBA",components:{Sidebar:m,Footer:E,BarChart:O,PieChart:T,HBarChart:C,DoughnutChart:N,StackBarChart:S,HStackBarChart:L,DataTable:h},data(){return{PageTitle:"Sustainable Livelihood Program",PageDetail:"Capability Building Activities",ProvinceData:{labels:["DAVAO CITY","DAVAO ORIENTAL","DAVAO DEL NORTE","DAVAO DE ORO","DAVAO DEL NORTE","DAVAO OCCIDENTAL"],label:["Number of PDO"],values:[120,100,400,150,250,200],backgroundColor:["#EEB600"]}}},methods:{EmploymentFetchData(){return f.get(`${P}/api/employmentStatus`).then(t=>{const l=[],d=[],o=[],s=[],n=[];t.data.forEach(c=>{switch(c.EMPLOYMENT_STATUS){case"MOA":l.push(c);break;case"PERMANENT":d.push(c);break;case"CONTRACTUAL":o.push(c);break;case"COTERMINOS":s.push(c);break;case"CASUAL":n.push(c);break}});const i=l.length,r=d.length,b=o.length,_=s.length,g=n.length,A={labels:["MOA","PERMANENT","CONTRACTUAL","COTERMINOS","CASUAL"],label:["Employment Data"],values:[i,r,b,_,g],backgroundColor:["rgba(19, 63, 92, 1)","rgba(243, 165, 51, 1)","rgba(235, 95, 94, 1)","rgba(0, 255, 0, 0.6)","rgba(0, 0, 255, 0.6)"]};this.EmploymentData=A}).catch(t=>{console.error("Error fetching data:",t)})}},mounted(){this.EmploymentFetchData()}},e=t=>(V("data-v-27dcb461"),t=t(),M(),t),U=e(()=>a("br",null,null,-1)),w=e(()=>a("br",null,null,-1)),F=e(()=>a("br",null,null,-1)),H=e(()=>a("br",null,null,-1)),Y={class:"col-12 col-md-12"},$={class:"shadow2"},z={class:"inside",style:{padding:"10px"}},j=e(()=>a("thead",{style:{background:"#133f5c"},class:"text-white"},[a("tr",null,[a("th",null,"PDO"),a("th",null,"PROVINCE"),a("th",null,"DOCUMENT TITLE"),a("th",null,"TIMESTAMP")])],-1)),q=e(()=>a("tbody",null,[a("tr",null,[a("td",null,"No Data Available"),a("td",null,"No Data Available"),a("td",null,"No Data Available"),a("td",null,"No Data Available")])],-1)),G={class:"col-12 col-md-6"},J={class:"shadow2 forbarchart2"},K=e(()=>a("h1",null,"NUMBER OF PDO PER CLUSTER",-1)),Q={class:"Barchart2"},W=I('<div class="col-12 col-md-6" data-v-27dcb461><div class="shadow2" data-v-27dcb461><h1 data-v-27dcb461>SUBMITTED REPORTS PER CLUSTER</h1><div class="parent" data-v-27dcb461><div class="rectangle" style="background-color:#ff6961;" data-v-27dcb461><div class="label" data-v-27dcb461>DAVAO CITY</div><div class="number" data-v-27dcb461><b data-v-27dcb461>75</b></div></div><div class="rectangle" style="background-color:#6a9eda;" data-v-27dcb461><div class="label" data-v-27dcb461>DAVAO DEL NORTE</div><div class="number" data-v-27dcb461><b data-v-27dcb461>44</b></div></div><div class="rectangle" style="background-color:#eeca06;" data-v-27dcb461><div class="label" data-v-27dcb461>DAVAO DEL SUR</div><div class="number" data-v-27dcb461><b data-v-27dcb461>41</b></div></div><div class="rectangle" style="background-color:#ff9688;" data-v-27dcb461><div class="label" data-v-27dcb461>DAVAO ORIENTAL</div><div class="number" data-v-27dcb461><b data-v-27dcb461>65</b></div></div><div class="rectangle" style="background-color:#84b6f4;" data-v-27dcb461><div class="label" data-v-27dcb461>DAVAO DE ORO</div><div class="number" data-v-27dcb461><b data-v-27dcb461>48</b></div></div><div class="rectangle" style="background-color:#ecdc63;" data-v-27dcb461><div class="label" data-v-27dcb461>DAVAO OCCIDENTAL</div><div class="number" data-v-27dcb461><b data-v-27dcb461>27</b></div></div></div></div></div>',1);function X(t,l,d,o,s,n){const i=v("Sidebar"),r=v("DataTable"),b=v("BarChart");return R(),y(B,null,[u(i,{iconText:s.PageTitle,iconDetails:s.PageDetail},null,8,["iconText","iconDetails"]),U,w,F,H,a("div",Y,[a("div",$,[a("div",z,[u(r,{id:"table",paging:!0,searching:!0,info:!0,responsive:!0,"length-change":!0,"length-menu":[10,25,50,100],language:{paginate:{previous:"<i class='fas fa-angle-left'></i>",next:"<i class='fas fa-angle-right'></i>"}}},{default:k(()=>[j,q]),_:1})])])]),a("div",G,[a("div",J,[K,a("div",Q,[u(b,{data:s.ProvinceData},null,8,["data"])])])]),W],64)}const ta=p(x,[["render",X],["__scopeId","data-v-27dcb461"]]);export{ta as default};