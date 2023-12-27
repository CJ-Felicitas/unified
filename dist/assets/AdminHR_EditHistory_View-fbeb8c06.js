import{_ as l,A as h,a as p,b as m,r as y,o,c as t,d as u,e,t as r,p as H,i as E}from"./index-6fcab6bb.js";const v={name:"AdminHREditHistoryView",components:{AdminSidebar:h},data(){return{PageTitle:"EMPLOYEE WELFARE AND RELATIONS",PageDetail:"View Edit Details",model:{Hr:{id:"",request_date:"",requesting_employee_name:"",employee_position:"",employment_status:"",office_unit:"",request_category:"",brief_interview:"",remarks:"",assistance_provided:"",quantity_unit:"",date_received:""}}}},mounted(){this.HrID=this.$route.params.ID,this.HrEditHistoryData(this.HrID)},methods:{async HrEditHistoryData(i){try{const c=await p.get(`${m}/api/hrVersion/${i}/view`),d=c.data.Hr;if(console.log(c.data.Hr),!d||Object.keys(d).length===0)for(const _ in this.model.Hr)this.model.Hr[_]="No Data";else Object.assign(this.model.Hr,d)}catch(c){c.response&&c.response.status===404?alert(c.response.data.message):console.error(c)}}}},n=i=>(H("data-v-dc69fe75"),i=i(),E(),i),k=n(()=>e("br",null,null,-1)),D=n(()=>e("br",null,null,-1)),T=n(()=>e("br",null,null,-1)),C=n(()=>e("br",null,null,-1)),f=n(()=>e("br",null,null,-1)),N={class:"container-fluid wrapper"},x={class:"col-12 page-border"},I={class:"col-12",style:{padding:"20px"}},g={class:"col-6"},A={class:"col-12"},S=n(()=>e("p",{class:"headerText"},"ID",-1)),b={key:0,class:"headerContent"},R={key:1,class:"error headerContent"},q={class:"col-12"},O=n(()=>e("p",{class:"headerText"},"REQUEST DATE",-1)),w={key:0,class:"headerContent"},P={key:1,class:"error headerContent"},V={class:"col-12"},U=n(()=>e("p",{class:"headerText"},"REQUESTING EMPLOYEE",-1)),L={key:0,class:"headerContent"},Y={key:1,class:"error headerContent"},M={class:"col-12"},B=n(()=>e("p",{class:"headerText"},"EMPLOYEE POSITION",-1)),F={key:0,class:"headerContent"},Q={key:1,class:"error headerContent"},j={class:"col-12"},G=n(()=>e("p",{class:"headerText"},"EMPLOYEE STATUS",-1)),W={key:0,class:"headerContent"},K={key:1,class:"error headerContent"},z={class:"col-12"},J=n(()=>e("p",{class:"headerText"},"OFFICE/UNIT",-1)),X={key:0,class:"headerContent"},Z={key:1,class:"error headerContent"},$={class:"col-6",style:{"border-left":"1px solid gray","padding-left":"20px"}},ee={class:"col-12"},se=n(()=>e("p",{class:"headerText"},"REQUEST CATEGORY",-1)),oe={key:0,class:"headerContent"},te={key:1,class:"error headerContent"},ne={class:"col-12"},re=n(()=>e("p",{class:"headerText"},"BRIEF INTERVIEW",-1)),ce={key:0,class:"headerContent"},ie={key:1,class:"error headerContent"},de={class:"col-12"},_e=n(()=>e("p",{class:"headerText"},"REMARKS",-1)),ae={key:0,class:"headerContent"},le={key:1,class:"error headerContent"},he={class:"col-12"},pe=n(()=>e("p",{class:"headerText"},"ASSISTANCE PROVIDED",-1)),me={key:0,class:"headerContent"},ye={key:1,class:"error headerContent"},ue={class:"col-12"},He=n(()=>e("p",{class:"headerText"},"QUANTITY UNIT",-1)),Ee={key:0,class:"headerContent"},ve={key:1,class:"error headerContent"},ke={class:"col-12"},De=n(()=>e("p",{class:"headerText"},"DATE RECEIVED",-1)),Te={key:0,class:"headerContent"},Ce={key:1,class:"error headerContent"};function fe(i,c,d,_,s,Ne){const a=y("AdminSidebar");return o(),t("div",null,[u(a,{iconText:s.PageTitle,iconDetails:s.PageDetail},null,8,["iconText","iconDetails"]),k,D,T,C,f,e("div",N,[e("div",x,[e("div",I,[e("div",g,[e("div",A,[S,s.model.Hr.id?(o(),t("p",b,r(s.model.Hr.id),1)):(o(),t("p",R,"No Data"))]),e("div",q,[O,s.model.Hr.request_date?(o(),t("p",w,r(s.model.Hr.request_date),1)):(o(),t("p",P,"No Data"))]),e("div",V,[U,s.model.Hr.requesting_employee_name?(o(),t("p",L,r(s.model.Hr.requesting_employee_name),1)):(o(),t("p",Y,"No Data"))]),e("div",M,[B,s.model.Hr.employee_position?(o(),t("p",F,r(s.model.Hr.employee_position),1)):(o(),t("p",Q,"No Data"))]),e("div",j,[G,s.model.Hr.employment_status?(o(),t("p",W,r(s.model.Hr.employment_status),1)):(o(),t("p",K,"No Data"))]),e("div",z,[J,s.model.Hr.office_unit?(o(),t("p",X,r(s.model.Hr.office_unit),1)):(o(),t("p",Z,"No Data"))])]),e("div",$,[e("div",ee,[se,s.model.Hr.request_category?(o(),t("p",oe,r(s.model.Hr.request_category),1)):(o(),t("p",te,"No Data"))]),e("div",ne,[re,s.model.Hr.brief_interview?(o(),t("p",ce,r(s.model.Hr.brief_interview),1)):(o(),t("p",ie,"No Data"))]),e("div",de,[_e,s.model.Hr.remarks?(o(),t("p",ae,r(s.model.Hr.remarks),1)):(o(),t("p",le,"No Data"))]),e("div",he,[pe,s.model.Hr.assistance_provided?(o(),t("p",me,r(s.model.Hr.assistance_provided),1)):(o(),t("p",ye,"No Data"))]),e("div",ue,[He,s.model.Hr.quantity_unit?(o(),t("p",Ee,r(s.model.Hr.quantity_unit),1)):(o(),t("p",ve,"No Data"))]),e("div",ke,[De,s.model.Hr.date_received?(o(),t("p",Te,r(s.model.Hr.date_received),1)):(o(),t("p",Ce,"No Data"))])])])])])])}const Ie=l(v,[["render",fe],["__scopeId","data-v-dc69fe75"]]);export{Ie as default};
