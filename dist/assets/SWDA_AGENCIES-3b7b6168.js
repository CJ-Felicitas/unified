import{_ as g,S as m,F as P,B as Q,u as N,H as D,a as p,b as C,r as d,o as s,c as t,d as _,e as a,k as f,v as S,g as y,h as k,t as n,w as v,p as O,i as A}from"./index-6fcab6bb.js";const I={name:"SWDA_AGENCIES",components:{Sidebar:m,Footer:P,BarChart:Q,DoughnutChart:N,HBarchart:D},data(){return{PageTitle:"List of Registration, Licensing, and Accreditation of Social Welfare and Development Agencies (SWDA)",PageDetail:"Agency Details",customLegendOptions:{position:"right"},agencies:[],searchQuery:""}},methods:{async fetchAgencies(){try{const l=await p.get(`${C}/api/agenciesName`);this.agencies=l.data["Swda Agencies"]}catch(l){console.error("Error fetching data:",l)}},cleanQueryParam(l){return this.$route.query[l]?this.$route.query[l].replace(/\"/g,""):null}},created(){this.fetchAgencies()},computed:{filteredAgencies(){const l=this.searchQuery.toLowerCase();return this.agencies.filter(i=>(i==null?void 0:i.Agency)&&i.Agency.toLowerCase().includes(l))},cleanedRegistrationStatus(){return this.cleanQueryParam("registrationStatus")}}},c=l=>(O("data-v-14edc564"),l=l(),A(),l),x=c(()=>a("br",null,null,-1)),H=c(()=>a("br",null,null,-1)),b=c(()=>a("br",null,null,-1)),E=c(()=>a("br",null,null,-1)),J={class:"wrapper","container-fluid":""},w={class:"col-12 col-md-3"},R={class:"agenciesNames",style:{"background-color":"white"}},T=c(()=>a("p",{style:{"font-family":"Arial","font-size":"25px","font-weight":"700","line-height":"30px","letter-spacing":"0em","text-align":"center"}}," AGENCY ",-1)),L={class:"agencyfilter"},B={class:"agency-color"},V={class:"hover agency-color"},W=c(()=>a("hr",{class:"hr"},null,-1)),M={class:"col-12 col-md-9 pt-3"},F={class:"col-12"},G={class:"AgencyTitle"},q=c(()=>a("hr",{class:"hr"},null,-1)),U={class:"col-4 columns"},z={class:"col-12"},Y=c(()=>a("p",{class:"agencyHeader"},"Former Name",-1)),j={key:0,class:"agencyContent"},K={key:1,class:"agencyContent"},X={class:"col-12"},Z={class:"col-4"},$=c(()=>a("p",{class:"agencyHeader"},"Sector",-1)),ee={key:0,class:"agencyContent"},ae={key:1,class:"agencyContent"},se={class:"col-4"},te=c(()=>a("p",{class:"agencyHeader"},"Cluster",-1)),ce={key:0,class:"agencyContent"},ne={key:1,class:"agencyContent"},re={class:"col-4"},le=c(()=>a("p",{class:"agencyHeader"},"Type",-1)),ie={key:0,class:"agencyContent"},oe={key:1,class:"agencyContent"},de={class:"col-12"},_e=c(()=>a("hr",{class:"hr"},null,-1)),ye=c(()=>a("p",{class:"agencyHead"},"CONTACT INFORMATION",-1)),ue=c(()=>a("p",{class:"agencyHeader"},"Address",-1)),he={key:0,class:"agencyContent"},ge={key:1,class:"agencyContent"},me=c(()=>a("p",{class:"agencyHeader"},"Contact Number",-1)),Pe={key:2,class:"agencyContent"},Qe={key:3,class:"agencyContent"},Ne=c(()=>a("p",{class:"agencyHeader"},"Email",-1)),De={key:4,class:"agencyContent"},pe={key:5,class:"agencyContent"},Ce=c(()=>a("p",{class:"agencyHeader"},"Website",-1)),fe={key:6,class:"agencyContent"},Se={key:7,class:"agencyContent"},ke=c(()=>a("hr",{class:"hr"},null,-1)),ve=c(()=>a("p",{class:"agencyHead"},"CONTACT PERSON",-1)),Oe=c(()=>a("p",{class:"agencyHeader"},"Name",-1)),Ae={key:8,class:"agencyContent"},Ie={key:9,class:"agencyContent"},xe=c(()=>a("p",{class:"agencyHeader"},"Position",-1)),He={key:10,class:"agencyContent"},be={key:11,class:"agencyContent"},Ee=c(()=>a("p",{class:"agencyHeader"},"Contact Number",-1)),Je={key:12,class:"agencyContent"},we={key:13,class:"agencyContent"},Re={class:"col-8 columns"},Te={class:"col-12"},Le={class:"col-6"},Be=c(()=>a("p",{class:"agencyHeader"},"Registration Status",-1)),Ve={key:0,style:{color:"red"},class:"agencyContent"},We={key:1,style:{color:"green"},class:"agencyContent"},Me={key:2,class:"agencyContent"},Fe=c(()=>a("p",{class:"agencyHeader"},"Accreditation Status",-1)),Ge={key:3,style:{color:"red"},class:"agencyContent"},qe={key:4,style:{color:"green"},class:"agencyContent"},Ue={key:5,class:"agencyContent"},ze={class:"col-6"},Ye=c(()=>a("p",{class:"agencyHeader"},"License Status",-1)),je={key:0,style:{color:"red"},class:"agencyContent"},Ke={key:1,style:{color:"green"},class:"agencyContent"},Xe={key:2,class:"agencyContent"},Ze={class:"col-12"},$e=c(()=>a("hr",{class:"hr"},null,-1)),ea=c(()=>a("p",{class:"agencyHead"},"PROGRAMS AND SERVICES",-1)),aa=c(()=>a("p",{class:"agencyHeader"},"Services Offered",-1)),sa={key:0,class:"agencyContent"},ta={key:1,class:"agencyContent"},ca={class:"col-12"},na={class:"col-6"},ra=c(()=>a("p",{class:"agencyHeader"},"Clientele",-1)),la={key:0,class:"agencyContent"},ia={key:1,class:"agencyContent"},oa={class:"col-6"},da=c(()=>a("p",{class:"agencyHeader"},"Mode of Delivery",-1)),_a={key:0,class:"agencyContent"},ya={key:1,class:"agencyContent"},ua={class:"col-12"},ha=c(()=>a("p",{class:"agencyHeader"},"Specified Areas of Operation",-1)),ga={key:0,class:"agencyContent"},ma={key:1,class:"agencyContent"},Pa={class:"col-12"},Qa=c(()=>a("hr",{class:"hr"},null,-1)),Na=c(()=>a("p",{class:"agencyHead"},"STATUS",-1)),Da={class:"col-12"},pa={class:"col-3"},Ca=c(()=>a("p",{class:"agencyHeader"},"Registration ID",-1)),fa={key:0,class:"agencyContent"},Sa={key:1,class:"agencyContent"},ka={class:"col-3"},va=c(()=>a("p",{class:"agencyHeader"},"Date Issued",-1)),Oa={key:0,class:"agencyContent"},Aa={key:1,class:"agencyContent"},Ia={class:"col-3"},xa=c(()=>a("p",{class:"agencyHeader"},"Expiration Date",-1)),Ha={key:0,class:"agencyContent"},ba={key:1,class:"agencyContent"},Ea={class:"col-3"},Ja=c(()=>a("p",{class:"agencyHeader"},"Remarks",-1)),wa={key:0,class:"agencyContent"},Ra={key:1,class:"agencyContent"},Ta={class:"col-12"},La={class:"col-3"},Ba=c(()=>a("p",{class:"agencyHeader"},"License ID",-1)),Va={key:0,class:"agencyContent"},Wa={key:1,class:"agencyContent"},Ma={class:"col-3"},Fa=c(()=>a("p",{class:"agencyHeader"},"Date Issued",-1)),Ga={key:0,class:"agencyContent"},qa={key:1,class:"agencyContent"},Ua={class:"col-3"},za=c(()=>a("p",{class:"agencyHeader"},"Expiration Date",-1)),Ya={key:0,class:"agencyContent"},ja={key:1,class:"agencyContent"},Ka={class:"col-3"},Xa=c(()=>a("p",{class:"agencyHeader"},"Overdue",-1)),Za={key:0,class:"agencyContent"},$a={key:1,class:"agencyContent"},es={class:"col-12"},as={class:"col-3"},ss=c(()=>a("p",{class:"agencyHeader"},"Accreditation ID",-1)),ts={key:0,class:"agencyContent"},cs={key:1,class:"agencyContent"},ns={class:"col-3"},rs=c(()=>a("p",{class:"agencyHeader"},"Date Issued",-1)),ls={key:0,class:"agencyContent"},is={key:1,class:"agencyContent"},os={class:"col-3"},ds=c(()=>a("p",{class:"agencyHeader"},"Expiration Date",-1)),_s={key:0,class:"agencyContent"},ys={key:1,class:"agencyContent"},us={class:"col-3"},hs=c(()=>a("p",{class:"agencyHeader"},"Overdue",-1)),gs={key:0,class:"agencyContent"},ms={key:1,class:"agencyContent"};function Ps(l,i,Qs,Ns,o,e){const u=d("Sidebar"),h=d("router-link");return s(),t(y,null,[_(u,{iconText:o.PageTitle,iconDetails:o.PageDetail},null,8,["iconText","iconDetails"]),x,H,b,E,a("div",J,[a("div",w,[a("div",R,[T,f(a("input",{style:{"border-radius":"10px",width:"90%",height:"3em","text-align":"center"},type:"text","onUpdate:modelValue":i[0]||(i[0]=r=>o.searchQuery=r),placeholder:"Search for agency names"},null,512),[[S,o.searchQuery]]),a("div",L,[a("table",null,[a("tbody",null,[(s(!0),t(y,null,k(e.filteredAgencies,r=>(s(),t("tr",{key:r.Agency},[a("td",B,[_(h,{to:{name:"swda_agency",query:{agencyName:JSON.stringify(r.Agency),registrationStatus:JSON.stringify(r.Registration_Status),licenseStatus:JSON.stringify(r.License_Status),accreditationStatus:JSON.stringify(r.Accreditation_Status),sector:JSON.stringify(r.Sector),cluster:JSON.stringify(r.Cluster),type:JSON.stringify(r.Type),address:JSON.stringify(r.Address),contactNumber:JSON.stringify(r.Contact_Number),email:JSON.stringify(r.Email),website:JSON.stringify(r.Website),contactPerson:JSON.stringify(r.Contact_Person),position:JSON.stringify(r.Position),mobileNumber:JSON.stringify(r.Mobile_Number),servicesOffered:JSON.stringify(r.Services_Offered),clientele:JSON.stringify(r.Clientele),modeOfDelivery:JSON.stringify(r.Mode_of_Delivery),specifiedAreasOfOperation:JSON.stringify(r.Specified_Areas_of_Operation),registrationID:JSON.stringify(r.Registration_ID),registrationDate:JSON.stringify(r.Registration_Date),registrationExpiration:JSON.stringify(r.Registration_Expiration),remarks:JSON.stringify(r.Remarks),licensedID:JSON.stringify(r.Licensed_ID),licenseDateIssued:JSON.stringify(r.License_Date_Issued),licenseExpiration:JSON.stringify(r.License_Expiration),licensureOverdue:JSON.stringify(r.Licensure_Overdue),accreditationID:JSON.stringify(r.Accreditation_ID),accreditationDateIssued:JSON.stringify(r.Accreditation_Date_Issued),accreditationExpiration:JSON.stringify(r.Accreditation_Expiration),accreditationOverdue:JSON.stringify(r.Accreditation_Overdue)}},class:"custom-link text-color"},{default:v(()=>[a("div",V,n(r.Agency),1)]),_:2},1032,["to"]),W])]))),128))])])])])]),a("div",M,[a("div",F,[a("p",G,n(e.cleanQueryParam("agencyName")),1),q]),a("div",U,[a("div",z,[Y,e.cleanQueryParam("formerName")&&e.cleanQueryParam("formerName")!=="null"?(s(),t("p",j,n(e.cleanQueryParam("formerName")),1)):(s(),t("p",K,"No Data"))]),a("div",X,[a("div",Z,[$,e.cleanQueryParam("sector")&&e.cleanQueryParam("sector")!=="null"?(s(),t("p",ee,n(e.cleanQueryParam("sector")),1)):(s(),t("p",ae,"No Data"))]),a("div",se,[te,e.cleanQueryParam("cluster")&&e.cleanQueryParam("cluster")!=="null"?(s(),t("p",ce,n(e.cleanQueryParam("cluster")),1)):(s(),t("p",ne,"No Data"))]),a("div",re,[le,e.cleanQueryParam("type")&&e.cleanQueryParam("type")!=="null"?(s(),t("p",ie,n(e.cleanQueryParam("type")),1)):(s(),t("p",oe,"No Data"))])]),a("div",de,[_e,ye,ue,e.cleanQueryParam("address")&&e.cleanQueryParam("address")!=="null"?(s(),t("p",he,n(e.cleanQueryParam("address")),1)):(s(),t("p",ge,"No Data")),me,e.cleanQueryParam("contactNumber")&&e.cleanQueryParam("contactNumber")!=="null"?(s(),t("p",Pe,n(e.cleanQueryParam("contactNumber")),1)):(s(),t("p",Qe,"No Data")),Ne,e.cleanQueryParam("email")&&e.cleanQueryParam("email")!=="null"?(s(),t("p",De,n(e.cleanQueryParam("email")),1)):(s(),t("p",pe,"No Data")),Ce,e.cleanQueryParam("website")&&e.cleanQueryParam("website")!=="null"?(s(),t("p",fe,n(e.cleanQueryParam("website")),1)):(s(),t("p",Se,"No Data")),ke,ve,Oe,e.cleanQueryParam("contactPerson")&&e.cleanQueryParam("contactPerson")!=="null"?(s(),t("p",Ae,n(e.cleanQueryParam("contactPerson")),1)):(s(),t("p",Ie,"No Data")),xe,e.cleanQueryParam("position")&&e.cleanQueryParam("position")!=="null"?(s(),t("p",He,n(e.cleanQueryParam("position")),1)):(s(),t("p",be,"No Data")),Ee,e.cleanQueryParam("mobileNumber")&&e.cleanQueryParam("mobileNumber")!=="null"?(s(),t("p",Je,n(e.cleanQueryParam("mobileNumber")),1)):(s(),t("p",we,"No Data"))])]),a("div",Re,[a("div",Te,[a("div",Le,[Be,e.cleanQueryParam("registrationStatus")==="Expired"?(s(),t("p",Ve,n(e.cleanQueryParam("registrationStatus")),1)):e.cleanQueryParam("registrationStatus")==="Active/Valid"?(s(),t("p",We,n(e.cleanQueryParam("registrationStatus")),1)):(s(),t("p",Me,"No Data")),Fe,e.cleanQueryParam("accreditationStatus")==="Expired"?(s(),t("p",Ge,n(e.cleanQueryParam("accreditationStatus")),1)):e.cleanQueryParam("accreditationStatus")==="Active/Valid"?(s(),t("p",qe,n(e.cleanQueryParam("accreditationStatus")),1)):(s(),t("p",Ue,"No Data"))]),a("div",ze,[Ye,e.cleanQueryParam("licenseStatus")==="Expired"?(s(),t("p",je,n(e.cleanQueryParam("licenseStatus")),1)):e.cleanQueryParam("licenseStatus")==="Active/Valid"?(s(),t("p",Ke,n(e.cleanQueryParam("licenseStatus")),1)):(s(),t("p",Xe,"No Data"))])]),a("div",Ze,[$e,ea,aa,e.cleanQueryParam("servicesOffered")&&e.cleanQueryParam("servicesOffered")!=="null"?(s(),t("p",sa,n(e.cleanQueryParam("servicesOffered")),1)):(s(),t("p",ta,"No Data"))]),a("div",ca,[a("div",na,[ra,e.cleanQueryParam("clientele")&&e.cleanQueryParam("clientele")!=="null"?(s(),t("p",la,n(e.cleanQueryParam("clientele")),1)):(s(),t("p",ia,"No Data"))]),a("div",oa,[da,e.cleanQueryParam("modeOfDelivery")&&e.cleanQueryParam("modeOfDelivery")!=="null"?(s(),t("p",_a,n(e.cleanQueryParam("modeOfDelivery")),1)):(s(),t("p",ya,"No Data"))])]),a("div",ua,[ha,e.cleanQueryParam("specifiedAreasOfOperation")&&e.cleanQueryParam("specifiedAreasOfOperation")!=="null"?(s(),t("p",ga,n(e.cleanQueryParam("specifiedAreasOfOperation")),1)):(s(),t("p",ma,"No Data"))]),a("div",Pa,[Qa,Na,a("div",Da,[a("div",pa,[Ca,e.cleanQueryParam("registrationID")&&e.cleanQueryParam("registrationID")!=="null"?(s(),t("p",fa,n(e.cleanQueryParam("registrationID")),1)):(s(),t("p",Sa,"No Data"))]),a("div",ka,[va,e.cleanQueryParam("registrationDate")&&e.cleanQueryParam("registrationDate")!=="null"?(s(),t("p",Oa,n(e.cleanQueryParam("registrationDate")),1)):(s(),t("p",Aa,"No Data"))]),a("div",Ia,[xa,e.cleanQueryParam("registrationExpiration")&&e.cleanQueryParam("registrationExpiration")!=="null"?(s(),t("p",Ha,n(e.cleanQueryParam("registrationExpiration")),1)):(s(),t("p",ba,"No Data"))]),a("div",Ea,[Ja,e.cleanQueryParam("remarks")&&e.cleanQueryParam("remarks")!=="null"?(s(),t("p",wa,n(e.cleanQueryParam("remarks")),1)):(s(),t("p",Ra,"No Data"))])]),a("div",Ta,[a("div",La,[Ba,e.cleanQueryParam("licensedID")&&e.cleanQueryParam("licensedID")!=="null"?(s(),t("p",Va,n(e.cleanQueryParam("licensedID")),1)):(s(),t("p",Wa,"No Data"))]),a("div",Ma,[Fa,e.cleanQueryParam("licenseDateIssued")&&e.cleanQueryParam("licenseDateIssued")!=="null"?(s(),t("p",Ga,n(e.cleanQueryParam("licenseDateIssued")),1)):(s(),t("p",qa,"No Data"))]),a("div",Ua,[za,e.cleanQueryParam("licenseExpiration")&&e.cleanQueryParam("licenseExpiration")!=="null"?(s(),t("p",Ya,n(e.cleanQueryParam("licenseExpiration")),1)):(s(),t("p",ja,"No Data"))]),a("div",Ka,[Xa,e.cleanQueryParam("licensureOverdue")&&e.cleanQueryParam("licensureOverdue")!=="null"?(s(),t("p",Za,n(e.cleanQueryParam("licensureOverdue")),1)):(s(),t("p",$a,"No Data"))])]),a("div",es,[a("div",as,[ss,e.cleanQueryParam("accreditationID")&&e.cleanQueryParam("accreditationID")!=="null"?(s(),t("p",ts,n(e.cleanQueryParam("accreditationID")),1)):(s(),t("p",cs,"No Data"))]),a("div",ns,[rs,e.cleanQueryParam("accreditationDateIssued")&&e.cleanQueryParam("accreditationDateIssued")!=="null"?(s(),t("p",ls,n(e.cleanQueryParam("accreditationDateIssued")),1)):(s(),t("p",is,"No Data"))]),a("div",os,[ds,e.cleanQueryParam("accreditationExpiration")&&e.cleanQueryParam("accreditationExpiration")!=="null"?(s(),t("p",_s,n(e.cleanQueryParam("accreditationExpiration")),1)):(s(),t("p",ys,"No Data"))]),a("div",us,[hs,e.cleanQueryParam("accreditationOverdue")&&e.cleanQueryParam("accreditationOverdue")!=="null"?(s(),t("p",gs,n(e.cleanQueryParam("accreditationOverdue")),1)):(s(),t("p",ms,"No Data"))])])])])])])],64)}const ps=g(I,[["render",Ps],["__scopeId","data-v-14edc564"]]);export{ps as default};
