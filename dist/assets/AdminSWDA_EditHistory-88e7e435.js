import{_ as k,P as S,D as T,A as v,a as p,b as y,r,o as a,c,d as w,e as t,t as o,f as g,w as u,j as x,g as m,h as D,p as I,i as E}from"./index-6fcab6bb.js";S.use(T);const H={name:"AdminEditHistory",components:{AdminSidebar:v,DataTable:S},data(){return{PageTitle:"List of Registration, Licensing, and Accreditation of Social Welfare and Development Agencies",PageDetail:"Edit History Log",swda:[],model:{Swda:{Agency:""}}}},mounted(){this.SwdaID=this.$route.params.ID,this.getSwdaEditHistory(this.SwdaID),this.SwdaData(this.SwdaID)},methods:{formatDate(n){const e={year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"};return new Date(n).toLocaleDateString(void 0,e)},async getSwdaEditHistory(n){try{const e=await p.get(`${y}/api/swdaVersion/${n}`);this.swda=e.data.SwdaEditHistory,console.log(e)}catch(e){console.log(e)}},async SwdaData(n){try{const d=(await p.get(`${y}/api/swdalist/${n}/edit`)).data.Swda;if(console.log(d),!d||Object.keys(d).length===0)for(const h in this.model.Swda)this.model.Swda[h]="No Data";else this.model.Swda={...d}}catch(e){e.response&&e.response.status===404&&alert(e.response.data.message)}}}},l=n=>(I("data-v-b8d4ece6"),n=n(),E(),n),C=l(()=>t("br",null,null,-1)),L=l(()=>t("br",null,null,-1)),P=l(()=>t("br",null,null,-1)),B=l(()=>t("br",null,null,-1)),N=l(()=>t("br",null,null,-1)),V={class:"container-fluid wrapper"},R=l(()=>t("p",{class:"Header"},"Recent Edit",-1)),W={class:"Header2"},$=l(()=>t("thead",{style:{background:"#133f5c"},class:"text-white"},[t("tr",null,[t("th",null,"ID"),t("th",null,"Date Edited"),t("th",null,"Type"),t("th",null,"Sector"),t("th",null,"Cluster"),t("th",null,"Agency"),t("th",null,"Address"),t("th",null,"Actions")])],-1)),j={class:"actions"},F=l(()=>t("i",{class:"bx bx-low-vision table-icon custom-link"},null,-1)),O=l(()=>t("tfoot",null,[t("tr",null,[t("th",null,"ID"),t("th",null,"Date Edited"),t("th",null,"Type"),t("th",null,"Sector"),t("th",null,"Cluster"),t("th",null,"Agency"),t("th",null,"Address"),t("th",null,"Actions")])],-1)),U=l(()=>t("thead",{style:{background:"#133f5c"},class:"text-white"},[t("tr",null,[t("th",null,"ID"),t("th",null,"Type"),t("th",null,"Sector"),t("th",null,"Cluster"),t("th",null,"Agency"),t("th",null,"Address"),t("th",null,"Actions")])],-1)),q=l(()=>t("td",null,"no data",-1)),z=[q],G=l(()=>t("tfoot",null,[t("tr",null,[t("th",null,"ID"),t("th",null,"Type"),t("th",null,"Sector"),t("th",null,"Cluster"),t("th",null,"Agency"),t("th",null,"Address"),t("th",null,"Actions")])],-1));function J(n,e,d,h,i,b){const A=r("AdminSidebar"),f=r("router-link"),_=r("DataTable");return a(),c("div",null,[w(A,{iconText:i.PageTitle,iconDetails:i.PageDetail},null,8,["iconText","iconDetails"]),C,L,P,B,N,t("div",V,[R,t("p",W,o(i.model.Swda.Agency),1),this.swda.length>0?(a(),g(_,{key:0,style:{width:"100%"},class:"display stripe order-column cell-border hover compact",id:"swdaTable",options:{order:[[0,"desc"]],stateSave:!0}},{default:u(()=>[$,t("tbody",null,[(a(!0),c(m,null,D(i.swda,s=>(a(),c("tr",{key:s.id},[t("td",null,o(s.id),1),t("td",null,o(b.formatDate(s.created_at)),1),t("td",null,o(s.Type),1),t("td",null,o(s.Sector),1),t("td",null,o(s.Cluster),1),t("td",null,o(s.Agency),1),t("td",null,o(s.Address),1),t("td",j,[w(f,{to:{path:"/adminswda/"+s.id+"/editHistory/view"},class:"custom-link"},{default:u(()=>[F]),_:2},1032,["to"])])]))),128))]),O]),_:1})):this.swda.length<=0?(a(),g(_,{key:1,style:{width:"100%"},class:"display stripe order-column cell-border hover compact",id:"swdaTable"},{default:u(()=>[U,t("tbody",null,[(a(!0),c(m,null,D(i.swda,s=>(a(),c("tr",{key:s.id},z))),128))]),G]),_:1})):x("",!0)])])}const M=k(H,[["render",J],["__scopeId","data-v-b8d4ece6"]]);export{M as default};
