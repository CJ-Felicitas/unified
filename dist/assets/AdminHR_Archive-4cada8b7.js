import{_ as D,P as N,D as R,F as b,A as g,B as L,a as h,b as A,r as E,o as c,c as u,d as p,e as t,w as T,f as S,g as y,h as C,t as a,p as f,i as P}from"./index-6fcab6bb.js";import{E as M}from"./exceljs.min-acaad0bf.js";N.use(R);const U={name:"AdminHR_Archive",components:{Footer:b,AdminSidebar:g,BarChart:L,DataTable:N},data(){return{PageTitle:"EMPLOYEE WELFARE AND RELATIONS",PageDetail:"Inactive Main Dashboard",hr:[]}},computed:{},mounted(){this.getHrArchive()},methods:{exportToExcel(){const _=new M.Workbook,r=_.addWorksheet("HRData"),o=["ID","DIVISION","SECTION/UNIT","OFFICE LOCATION","ITEM NUMBER","DATE POSITION","POSITION TITLE","PARENTHETICAL TITLE","POSITION_LEVEL","SG","SALARY STEP INCREMENT","MONTHLY_RATE","DESIGNATION","DATE OF DESIGNATION","SPECIAL_ORDER_NO.","OFFICE_BUREAU_SERVICE_PROGRAM","FUND_SOURCE_FOR_CONTRACTUAL","EMPLOYMENT_STATUS","STATUS_FILLED_UNFILLED","MODE_OF_ACCESSION","DATE_FILLED_UP_ASSUMPTION","FULL_NAME","LASTNAME","FIRST_NAME","MIDDLE_NAME","EXT.","DATE_OF_ORIGINAL_APPOINTMENT","DATE_OF_LAST_PROMOTION","ENTRY_DATE_IN_DSWD","ELIGIBILITY_CSC_and_other_eligibilities","ELIGIBILITY_License_RA_1080","LICENSE","HIGHEST_LVL_OF_ELIGIBILITY_1ST_AND_2ND","HIGHEST_EDUCATION_COMPLETED","DEGREE_AND_COURSE_1st_Course_Vocational","DEGREE_AND_COURSE_2nd Course","OTHER_COURSE","MASTERS_OR_DOCTORAL_DEGREE","GENDER","DATE_OF_BIRTH","AGE","CIVIL_STATUS","STREET_Current","PUROK/SUBDIVISION_Current","BARANGAY_Current","CITY/MUNICIPALITY_Current","PROVINCE_Current","PERMANENT_ADDRESS","PERMANENT_ADDRESS_Street","PERMANENT_ADDRESS_Purok","PERMANENT_ADDRESS_Subdivision_Community_Village","PERMANENT_ADDRESS_Barangay","PERMANENT_ADDRESS_Region","PERMANENT_ADDRESS_City_Municipality","PERMANENT_ADDRESS_Province","BD","INDICATE_WHETHER_SOLO_PARENT","INDICATE_WHETHER_SENIOR_CITIZEN","INDICATE_WHETHER_PWD","TYPE_OF_DISABILITY","INDICATE_IF_INDIGINOUS_GROUP","ACTIVE_AND_WORKING_EMAIL_ADDRESS","FORMER_INCUMBENT","MODE_OF_SEPARATION","DATE_VACATED","REMARKS_STATUS_OF_VACANT_POSITION","EMPLOYEE_ID_NO","BIR_TIN.NO.","PHILHEALTH_NUMBER","SSS_NUMBER","PAG-IBIG_NUMBER","GSIS_NUMBER","BLOOD_TYPE","HIGHEST_LEVEL_OF_ELIGIBILITY_1ST_AND_2ND","HIGHEST_LEVEL__ELIGIBILITY_1ST_AND_2ND","ELIGIBILITY_CSC_and_other eligibilities"];r.addRow(o),this.hr.forEach(e=>{const l=[e.id,e.division,e.section_unit,e.office_location,e.item_number,e.date_position,e.position_title,e.parenthetical_title,e.position_level,e.sg,e.salary_step_increment,e.monthly_rate,e.designation,e.date_of_designation,e.special_order_no,e.office_bureau_service_program,e.fund_source_for_contractual,e.employment_status,e.status_filled_unfilled,e.mode_of_accession,e.date_filled_up_assumption,e.full_name,e.last_name,e.first_name,e.middle_name,e.ext,e.date_of_original_appointment,e.date_of_last_promotion,e.entry_date_in_dswd,e.eligibility_csc_and_other_eligibilities,e.eligibility_license_ra_1080,e.license,e.highest_level_of_eligibility_1st_2nd,e.highest_education_completed,e.degree_and_course_1st_course_vocational,e.degree_and_course_2nd_course,e.other_course,e.masters_or_doctoral_degree,e.gender,e.date_of_birth,e.age,e.civil_status,e.street_current,e.purok_subdivision_current,e.barangay_current,e.city_municipality_current,e.province_current,e.permanent_address,e.permanent_address_street,e.permanent_address_purok,e.permanent_address_subdivision_community_village,e.permanent_address_barangay,e.permanent_address_region,e.permanent_address_city_municipality,e.permanent_address_province,e.bd,e.indicate_whether_solo_parent,e.indicate_whether_senior_citizen,e.indicate_whether_pwd,e.type_of_disability,e.indicate_if_indigenous_group,e.active_and_working_email_address,e.former_incumbent,e.mode_of_separation,e.date_vacated,e.remarks_status_of_vacant_position,e.employee_id_no,e.bir_tin_number,e.philhealth_number,e.sss_number,e.pagibig_number,e.gsis_number,e.blood_type,e.highest_level_of_eligibility_1st_and_2nd,e.highest_level_eligibility_1st_and_2nd,e.eligibility_csc_and_other_eligibilities];r.addRow(l)}),_.xlsx.writeBuffer().then(e=>{const l=new Blob([e],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),i=window.URL.createObjectURL(l),d=document.createElement("a");d.href=i,d.download="hr_data.xlsx",d.click()})},async getHrArchive(){try{const _=await h.get(`${A}/api/hrArchived`);this.hr=_.data.ArchivedHr,console.log(_)}catch(_){console.error(_)}},async restoreHr(_){if((await this.$swal({title:"Are you sure?",text:"You want to restore this data?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, restore it!",cancelButtonText:"No, keep it"})).isConfirmed)try{const o=await h.post(`${A}/api/hrArchived/${_}/restore`);await this.$swal({icon:"success",title:"Success!",text:o.data.message}),window.location.reload()}catch(o){o.response&&o.response.status===404?await this.$swal({icon:"error",title:"Error!",text:o.response.data.message}):o.request?console.log(o.request):console.log("error",o.message)}}}},n=_=>(f("data-v-7019a892"),_=_(),P(),_),w=n(()=>t("br",null,null,-1)),v=n(()=>t("br",null,null,-1)),x=n(()=>t("br",null,null,-1)),F=n(()=>t("br",null,null,-1)),B=n(()=>t("div",{class:"container-fluid wrapper"},null,-1)),G={class:"card card-margin"},H={class:"card-header",style:{display:"flex"}},k={class:"dropdown"},Y=n(()=>t("button",{class:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"}," Inactive ",-1)),V={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1"},m=n(()=>t("li",null,[t("a",{class:"dropdown-item",href:"#"},"Active")],-1)),W={class:"card-body"},Q=n(()=>t("thead",{style:{background:"#cb0e16"},class:"text-white"},[t("tr",null,[t("th",null,"ID"),t("th",null,"REQUEST DATE"),t("th",null,"NAME OF REQUESTING"),t("th",null,"EMPLOYEE POSITION"),t("th",null,"EMPLOYEE STATUS"),t("th",null,"OFFICE/UNIT"),t("th",null,"Actions")])],-1)),q={style:{"text-align":"center"}},$=["onClick"],K=n(()=>t("tfoot",null,[t("tr",null,[t("th",null,"ID"),t("th",null,"REQUEST DATE"),t("th",null,"NAME OF REQUESTING"),t("th",null,"EMPLOYEE POSITION"),t("th",null,"EMPLOYEE STATUS"),t("th",null,"OFFICE/UNIT"),t("th",null,"Actions")])],-1)),X=n(()=>t("thead",{style:{background:"#cb0e16"},class:"text-white"},[t("tr",null,[t("th",null,"ID"),t("th",null,"REQUEST DATE"),t("th",null,"NAME OF REQUESTING"),t("th",null,"EMPLOYEE POSITION"),t("th",null,"EMPLOYEE STATUS"),t("th",null,"OFFICE/UNIT"),t("th",null,"Actions")])],-1)),z=n(()=>t("tbody",null,null,-1)),j=n(()=>t("tfoot",null,[t("tr",null,[t("th",null,"ID"),t("th",null,"REQUEST DATE"),t("th",null,"NAME OF REQUESTING"),t("th",null,"EMPLOYEE POSITION"),t("th",null,"EMPLOYEE STATUS"),t("th",null,"OFFICE/UNIT"),t("th",null,"Actions")])],-1)),J=n(()=>t("br",null,null,-1)),Z=n(()=>t("br",null,null,-1));function ee(_,r,o,e,l,i){const d=E("AdminSidebar"),O=E("router-link"),I=E("DataTable");return c(),u("div",null,[p(d,{iconText:l.PageTitle,iconDetails:l.PageDetail},null,8,["iconText","iconDetails"]),w,v,x,F,B,t("div",G,[t("div",H,[t("div",k,[Y,t("ul",V,[p(O,{to:"/adminhr",style:{"text-decoration":"none"}},{default:T(()=>[m]),_:1})])]),t("button",{onClick:r[0]||(r[0]=(...s)=>i.exportToExcel&&i.exportToExcel(...s)),class:"btn btn-primary float-end",style:{"background-color":"#0229bf","font-size":"12px",padding:"10px 30px 10px 30px","margin-left":"auto"}}," EXPORT TO EXCEL ")]),t("div",W,[this.hr.length>0?(c(),S(I,{key:0,style:{width:"100%"},class:"display stripe order-column cell-border hover compact",id:"hrTable",options:{stateSave:!0,pageLength:5,lengthMenu:[[5,10,25,50],[5,10,25,50]]}},{default:T(()=>[Q,t("tbody",null,[(c(!0),u(y,null,C(l.hr,s=>(c(),u("tr",{key:s.id},[t("td",null,a(s.id),1),t("td",null,a(s.request_date),1),t("td",null,a(s.requesting_employee_name),1),t("td",null,a(s.employee_position),1),t("td",null,a(s.employment_status),1),t("td",null,a(s.office_unit),1),t("td",q,[t("i",{style:{cursor:"pointer"},class:"bx bxs-up-arrow-square custom-link",onClick:te=>i.restoreHr(s.id)},null,8,$)])]))),128))]),K]),_:1})):(c(),S(I,{key:1,style:{width:"100%"},class:"display stripe order-column cell-border hover compact",id:"hrTable"},{default:T(()=>[X,z,j]),_:1}))])]),J,Z])}const oe=D(U,[["render",ee],["__scopeId","data-v-7019a892"]]);export{oe as default};