import{_ as D,P as y,D as S,F as v,A as L,B as k,a as A,b as f,r as _,o as u,c as h,d as w,e,w as p,f as b,g as I,h as T,t as c,p as C,i as R}from"./index-6fcab6bb.js";import{E}from"./exceljs.min-acaad0bf.js";y.use(S);const O={name:"AdminSWDA_Archive",components:{Footer:v,AdminSidebar:L,BarChart:k,DataTable:y},data(){return{PageTitle:"List of Registration, Licensing, and Accreditation of Social Welfare and Development Agencies",PageDetail:"Inactive Admin Dashboard",swda:[]}},computed:{},mounted(){this.getSwdaArchive()},methods:{exportToExcel(){const s=new E.Workbook,r=s.addWorksheet("SwdaData"),n=["ID","Type","Sector","Cluster","Agency","Address","Former Name","Contact Number","Fax","Email","Website","Contact Person","Position","Mobile Number","Registered","Licensed","Accredited","Services Offered","Simplified Services","Area of Operation","Regional Operation","Specified Areas of Operation","Mode of Delivery","Clientele","Registration ID","Registration Date","Registration Expiration","Registration Status","License ID","License Date Issued","License Expiration","License Status","Accreditation ID","Accreditation Date Issued","Accreditation Expiration","Accreditation Status","Remarks","License Days Left","Licensure Overdue","Accreditation Days Left","Accreditation Overdue"];r.addRow(n),this.swda.forEach(t=>{const l=[t.ID,t.Type,t.Sector,t.Cluster,t.Agency,t.Address,t.Former_Name,t.Contact_Number,t.Fax,t.Email,t.Website,t.Contact_Person,t.Position,t.Mobile_Number,t.Registered,t.Licensed,t.Accredited,t.Services_Offered,t.Simplified_Services,t.Area_of_Operation,t.Regional_Operation,t.Specified_Areas_of_Operation,t.Mode_of_Delivery,t.Clientele,t.Registration_ID,t.Registration_Date,t.Registration_Expiration,t.Registration_Status,t.Licensed_ID,t.License_Date_Issued,t.License_Expiration,t.License_Status,t.Accreditation_ID,t.Accreditation_Date_Issued,t.Accreditation_Expiration,t.Accreditation_Status,t.Remarks,t.License_Days_Left,t.Licensure_Overdue,t.Accreditation_Days_Left,t.Accreditation_Overdue];r.addRow(l)}),s.xlsx.writeBuffer().then(t=>{const l=new Blob([t],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),i=window.URL.createObjectURL(l),d=document.createElement("a");d.href=i,d.download="swda_data.xlsx",d.click()})},async getSwdaArchive(){try{const s=await A.get(`${f}/api/swdaArchived`);this.swda=s.data.ArchivedSwda,console.log(s)}catch(s){console.log(s)}},async restoreSwda(s){if((await this.$swal({title:"Are you sure?",text:"You want to restore this data?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, restore it!",cancelButtonText:"No, keep it"})).isConfirmed)try{const n=await A.post(`${f}/api/swdaArchived/${s}/restore`);await this.$swal({icon:"success",title:"Success!",text:n.data.message}),window.location.reload()}catch(n){n.response&&n.response.status===404?this.$swal({icon:"error",title:"Error!",text:n.response.data.message}):n.request?console.log(n.request):console.log("error",n.message)}}}},o=s=>(C("data-v-c4249fc4"),s=s(),R(),s),m=o(()=>e("br",null,null,-1)),B=o(()=>e("br",null,null,-1)),P=o(()=>e("br",null,null,-1)),N=o(()=>e("br",null,null,-1)),M=o(()=>e("div",{class:"container-fluid wrapper"},null,-1)),W={class:"card card-margin"},F={class:"card-header",style:{display:"flex"}},$={class:"dropdown"},q=o(()=>e("button",{class:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"}," Inactive ",-1)),U={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1"},V=o(()=>e("li",null,[e("a",{class:"dropdown-item",href:"#"},"Active")],-1)),X={class:"card-body"},Y=o(()=>e("thead",{style:{background:"#cb0e16"},class:"text-white"},[e("tr",null,[e("th",null,"ID"),e("th",null,"Type"),e("th",null,"Sector"),e("th",null,"Cluster"),e("th",null,"Agency"),e("th",null,"Address"),e("th",null,"Actions")])],-1)),j={style:{"text-align":"center"}},z=["onClick"],J=o(()=>e("tfoot",null,[e("tr",null,[e("th",null,"ID"),e("th",null,"Type"),e("th",null,"Sector"),e("th",null,"Cluster"),e("th",null,"Agency"),e("th",null,"Address"),e("th",null,"Actions")])],-1)),G=o(()=>e("thead",{style:{background:"#cb0e16"},class:"text-white"},[e("tr",null,[e("th",null,"ID"),e("th",null,"Type"),e("th",null,"Sector"),e("th",null,"Cluster"),e("th",null,"Agency"),e("th",null,"Address"),e("th",null,"Actions")])],-1)),H=o(()=>e("tbody",null,null,-1)),K=o(()=>e("tfoot",null,[e("tr",null,[e("th",null,"ID"),e("th",null,"Type"),e("th",null,"Sector"),e("th",null,"Cluster"),e("th",null,"Agency"),e("th",null,"Address"),e("th",null,"Actions")])],-1)),Q=o(()=>e("br",null,null,-1)),Z=o(()=>e("br",null,null,-1));function ee(s,r,n,t,l,i){const d=_("AdminSidebar"),x=_("router-link"),g=_("DataTable");return u(),h("div",null,[w(d,{iconText:l.PageTitle,iconDetails:l.PageDetail},null,8,["iconText","iconDetails"]),m,B,P,N,M,e("div",W,[e("div",F,[e("div",$,[q,e("ul",U,[w(x,{to:"/adminswda",style:{"text-decoration":"none"}},{default:p(()=>[V]),_:1})])]),e("button",{onClick:r[0]||(r[0]=(...a)=>i.exportToExcel&&i.exportToExcel(...a)),class:"btn btn-primary float-end",style:{"background-color":"#0229bf","font-size":"12px",padding:"10px 30px 10px 30px","margin-left":"auto"}}," EXPORT TO EXCEL ")]),e("div",X,[this.swda.length>0?(u(),b(g,{key:0,style:{width:"100%"},class:"display stripe order-column cell-border hover compact",id:"swdaTable",options:{stateSave:!0,pageLength:5,lengthMenu:[[5,10,25,50],[5,10,25,50]]}},{default:p(()=>[Y,e("tbody",null,[(u(!0),h(I,null,T(l.swda,a=>(u(),h("tr",{key:a.ID},[e("td",null,c(a.ID),1),e("td",null,c(a.Type),1),e("td",null,c(a.Sector),1),e("td",null,c(a.Cluster),1),e("td",null,c(a.Agency),1),e("td",null,c(a.Address),1),e("td",j,[e("i",{style:{cursor:"pointer"},class:"bx bxs-up-arrow-square custom-link",onClick:te=>i.restoreSwda(a.ID)},null,8,z)])]))),128))]),J]),_:1})):(u(),b(g,{key:1,style:{width:"100%"},class:"display stripe order-column cell-border hover compact",options:{stateSave:!0,pageLength:5,lengthMenu:[[5,10,25,50],[5,10,25,50]]}},{default:p(()=>[G,H,K]),_:1}))])]),Q,Z])}const ne=D(O,[["render",ee],["__scopeId","data-v-c4249fc4"]]);export{ne as default};
