import{_ as R,P as b,D as w,S as O,a as A,b as S,r as x,o as u,c as _,d as c,e,k as I,v as k,g as C,h as m,w as d,f as J,j as L,m as N,t as o,p as T,i as P}from"./index-6fcab6bb.js";b.use(w);const W={name:"SWDA_ACTIVE_LICENSED",components:{Sidebar:O,DataTable:b},data(){return{PageTitle:"List of Registration, Licensing, and Accreditation of Social Welfare and Development Agencies (SWDA)",PageDetail:"Registered Expired Agencies",swda:[],agencies:[],searchQuery:"",activeRegisteredCount:0,activeLicensedCount:0,activeAccreditedCount:0,expiredRegisteredCount:0,expiredLicensedCount:0,expiredAccreditedCount:0,expiredDelistedCount:0,communityBasedCount:0,auxillarySWDACount:0,residentialCount:0,nonResidentialCount:0}},created(){A.get(`${S}/api/agenciesName`).then(s=>{this.agencies=s.data["Swda Agencies"]}).catch(s=>{console.error("Error fetching data:",s)})},computed:{filteredAgencies(){return this.agencies.filter(s=>s&&s.Agency?s.Agency.toLowerCase().includes(this.searchQuery.toLowerCase()):!1)}},methods:{async AgencyFetchData(){try{const s=await A.get(`${S}/api/agencies`);let r=0,f=0,v=0,i=0,h=0,p=0,n=0,g=0,t=0,y=0,D=0;s.data.forEach(l=>{l.Registration_Status==="Active/Valid"?(l.Registered==="Yes"&&r++,l.Licensed==="Yes"&&f++,l.Accredited==="Yes"&&v++):l.Registration_Status==="Expired"&&(l.Registered==="No"&&i++,l.Licensed==="No"&&h++,l.Accredited==="No"&&p++,l.Delisted==="No"&&n++),typeof l.Mode_of_Delivery=="string"&&l.Mode_of_Delivery.split(", ").forEach(E=>{switch(E){case"Community-based":g++;break;case"Auxiliary SWDA":t++;break;case"Center-based Residential":y++;break;case"Center-based Non-Residential":D++;break}})}),this.activeRegisteredCount=r,this.activeLicensedCount=f,this.activeAccreditedCount=v,this.expiredRegisteredCount=i,this.expiredLicensedCount=h,this.expiredAccreditedCount=p,this.expiredDelistedCount=n,this.communityBasedCount=g,this.auxillarySWDACount=t,this.residentialCount=y,this.nonResidentialCount=D}catch(s){console.error("Error fetching data:",s)}},async getSwda(){try{const s=await A.get(`${S}/api/swdalist`);this.swda=s.data.Swda.filter(r=>r.Registration_Status==="Expired"&&r.Registered==="No")}catch(s){console.error("Error fetching data:",s)}}},mounted(){this.AgencyFetchData(),this.getSwda()}},a=s=>(T("data-v-b7901032"),s=s(),P(),s),V=a(()=>e("br",null,null,-1)),B=a(()=>e("br",null,null,-1)),G=a(()=>e("br",null,null,-1)),M=a(()=>e("br",null,null,-1)),Y={class:"wrapper container-fluid"},F={class:"col-12 col-md-3"},Q={class:"agenciesNames",style:{"background-color":"white"}},X=a(()=>e("p",{style:{"font-family":"Arial","font-size":"25px","font-weight":"700","line-height":"30px","letter-spacing":"0em","text-align":"center"}}," AGENCY ",-1)),U={class:"agencyfilter"},j={class:"agency-color"},q={class:"hover"},z=a(()=>e("hr",{class:"hr"},null,-1)),H={class:"col-12 col-md-9"},K={class:"agencies col-12 col-md-6 col-lg-3"},Z={class:"shadow-agencies"},$=a(()=>e("h4",{class:"headerAgencies"},"ACTIVE AGENCIES",-1)),ee=a(()=>e("p",{class:"col-4 textAgencies"},"Registered",-1)),te=a(()=>e("p",{class:"col-4 textAgencies"},"Licensed",-1)),se=a(()=>e("p",{class:"col-4 textAgencies"},"Accredited",-1)),ie={class:"col-4"},oe={id:"active-registered",class:"active-agencies"},ne={class:"col-4"},ce={id:"active-licensed",class:"active-agencies"},de={class:"col-4"},ae={id:"active-accredited",class:"active-agencies"},le={class:"agencies col-12 col-md-6 col-lg-4"},re={class:"shadow-agencies"},ue=N('<h4 class="headerAgencies" data-v-b7901032>EXPIRED AGENCIES</h4><p class="col-3 textAgencies" data-v-b7901032>Registered</p><p class="col-3 textAgencies" data-v-b7901032>Licensed</p><p class="col-3 textAgencies" data-v-b7901032>Accreditation</p><p class="col-3 textAgencies" data-v-b7901032>Delisted</p>',5),_e={class:"col-3"},he={id:"expired-registered",class:"expired-agencies"},pe={class:"col-3"},ge={id:"expired-licensed",class:"expired-agencies"},fe={class:"col-3"},ve={id:"expired-accreditation",class:"expired-agencies"},Ae={class:"col-3"},Se={id:"expired-delisted",class:"expired-agencies"},xe={class:"agencies col-12 col-md-12 col-lg-5"},Ce={class:"shadow-agencies"},ye=N('<h4 class="headerAgencies" data-v-b7901032>MODE OF DELIVERY</h4><p class="col-3 textAgencies" data-v-b7901032>Community</p><p class="col-3 textAgencies" data-v-b7901032>Auxillary SWDA</p><p class="col-3 textAgencies" data-v-b7901032>Residential</p><p class="col-3 textAgencies" data-v-b7901032>Non-Residential</p>',5),De={class:"col-3"},me={id:"community-based",class:"modeDelivery"},be={class:"col-3"},Ne={id:"auxillary",class:"modeDelivery"},Ee={class:"col-3"},Re={id:"residential",class:"modeDelivery"},we={class:"col-3"},Oe={id:"non-residential",class:"modeDelivery"},Ie={class:"tableOutside col-12"},ke=a(()=>e("div",{class:"tableHeading"},[e("p",null,"REGISTERED EXPIRED AGENCIES")],-1)),Je={class:"tableInside"},Le=a(()=>e("thead",{style:{background:"#133f5c"},class:"text-white"},[e("tr",null,[e("th",null,"ID"),e("th",null,"Type"),e("th",null,"Sector"),e("th",null,"Cluster"),e("th",null,"Agency"),e("th",null,"Address"),e("th",null,"Actions")])],-1)),Te=a(()=>e("i",{class:"bx bx-low-vision table-icon custom-link"},null,-1)),Pe=a(()=>e("tfoot",null,[e("tr",null,[e("th",null,"ID"),e("th",null,"Type"),e("th",null,"Sector"),e("th",null,"Cluster"),e("th",null,"Agency"),e("th",null,"Address"),e("th",null,"Actions")])],-1));function We(s,r,f,v,i,h){const p=x("Sidebar"),n=x("router-link"),g=x("DataTable");return u(),_(C,null,[c(p,{iconText:i.PageTitle,iconDetails:i.PageDetail},null,8,["iconText","iconDetails"]),V,B,G,M,e("div",Y,[e("div",F,[e("div",Q,[X,I(e("input",{style:{"border-radius":"10px",width:"90%",height:"3em","text-align":"center"},type:"text","onUpdate:modelValue":r[0]||(r[0]=t=>i.searchQuery=t),placeholder:"Search for agency names"},null,512),[[k,i.searchQuery]]),e("div",U,[e("table",null,[e("tbody",null,[(u(!0),_(C,null,m(h.filteredAgencies,t=>(u(),_("tr",{key:t.Agency},[e("td",j,[c(n,{to:{name:"swda_agency",query:{agencyName:JSON.stringify(t.Agency),registrationStatus:JSON.stringify(t.Registration_Status),licenseStatus:JSON.stringify(t.License_Status),accreditationStatus:JSON.stringify(t.Accreditation_Status),sector:JSON.stringify(t.Sector),cluster:JSON.stringify(t.Cluster),type:JSON.stringify(t.Type),address:JSON.stringify(t.Address),contactNumber:JSON.stringify(t.Contact_Number),email:JSON.stringify(t.Email),website:JSON.stringify(t.Website),contactPerson:JSON.stringify(t.Contact_Person),position:JSON.stringify(t.Position),mobileNumber:JSON.stringify(t.Mobile_Number),servicesOffered:JSON.stringify(t.Services_Offered),clientele:JSON.stringify(t.Clientele),modeOfDelivery:JSON.stringify(t.Mode_of_Delivery),specifiedAreasOfOperation:JSON.stringify(t.Specified_Areas_of_Operation),registrationID:JSON.stringify(t.Registration_ID),registrationDate:JSON.stringify(t.Registration_Date),registrationExpiration:JSON.stringify(t.Registration_Expiration),remarks:JSON.stringify(t.Remarks),licensedID:JSON.stringify(t.Licensed_ID),licenseDateIssued:JSON.stringify(t.License_Date_Issued),licenseExpiration:JSON.stringify(t.License_Expiration),licensureOverdue:JSON.stringify(t.Licensure_Overdue),accreditationID:JSON.stringify(t.Accreditation_ID),accreditationDateIssued:JSON.stringify(t.Accreditation_Date_Issued),accreditationExpiration:JSON.stringify(t.Accreditation_Expiration),accreditationOverdue:JSON.stringify(t.Accreditation_Overdue)}},class:"custom-link text-color"},{default:d(()=>[e("div",q,o(t.Agency),1)]),_:2},1032,["to"]),z])]))),128))])])])])]),e("div",H,[e("div",K,[e("div",Z,[$,ee,te,se,e("div",ie,[c(n,{to:"/swda/activeRegistered",class:"custom-link"},{default:d(()=>[e("span",oe,o(i.activeRegisteredCount),1)]),_:1})]),e("div",ne,[c(n,{to:"/swda/activeLicensed",class:"custom-link"},{default:d(()=>[e("span",ce,o(i.activeLicensedCount),1)]),_:1})]),e("div",de,[c(n,{to:"/swda/activeAccredited",class:"custom-link"},{default:d(()=>[e("span",ae,o(i.activeAccreditedCount),1)]),_:1})])])]),e("div",le,[e("div",re,[ue,e("div",_e,[c(n,{to:"/swda/expiredRegistered",class:"custom-link"},{default:d(()=>[e("span",he,o(i.expiredRegisteredCount),1)]),_:1})]),e("div",pe,[c(n,{to:"/swda/expiredLicensed",class:"custom-link"},{default:d(()=>[e("span",ge,o(i.expiredLicensedCount),1)]),_:1})]),e("div",fe,[c(n,{to:"/swda/expiredAccredited",class:"custom-link"},{default:d(()=>[e("span",ve,o(i.expiredAccreditedCount),1)]),_:1})]),e("div",Ae,[c(n,{to:"/swda/expiredDelisted",class:"custom-link"},{default:d(()=>[e("span",Se,o(i.expiredDelistedCount),1)]),_:1})])])]),e("div",xe,[e("div",Ce,[ye,e("div",De,[c(n,{to:"/swda/modCombased",class:"custom-link"},{default:d(()=>[e("span",me,o(i.communityBasedCount),1)]),_:1})]),e("div",be,[c(n,{to:"/swda/modAuxillary",class:"custom-link"},{default:d(()=>[e("span",Ne,o(i.auxillarySWDACount),1)]),_:1})]),e("div",Ee,[c(n,{to:"/swda/modResidential",class:"custom-link"},{default:d(()=>[e("span",Re,o(i.residentialCount),1)]),_:1})]),e("div",we,[c(n,{to:"/swda/modNResidential",class:"custom-link"},{default:d(()=>[e("span",Oe,o(i.nonResidentialCount),1)]),_:1})])])]),e("div",Ie,[ke,e("div",Je,[this.swda.length>0?(u(),J(g,{key:0,style:{width:"100%"},class:"display stripe order-column cell-border hover compact",id:"swdaTable"},{default:d(()=>[Le,e("tbody",null,[(u(!0),_(C,null,m(i.swda,t=>(u(),_("tr",{key:t.ID},[e("td",null,o(t.ID),1),e("td",null,o(t.Type),1),e("td",null,o(t.Sector),1),e("td",null,o(t.Cluster),1),e("td",null,o(t.Agency),1),e("td",null,o(t.Address),1),e("td",null,[c(n,{to:{path:"/swda/"+t.ID+"/view"},class:"custom-link"},{default:d(()=>[Te]),_:2},1032,["to"])])]))),128))]),Pe]),_:1})):L("",!0)])])])])],64)}const Ge=R(W,[["render",We],["__scopeId","data-v-b7901032"]]);export{Ge as default};
