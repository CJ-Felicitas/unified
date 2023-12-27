import{_ as E,A as I,a as u,b as f,r as h,o as r,c,d as m,e,g as O,h as S,j as w,k as d,v as n,l as a,w as b,t as T,p as N,i as A,m as U}from"./index-6fcab6bb.js";const D={name:"AdminOSDEdit",components:{AdminSidebar:I},data(){return{PageTitle:"OPERATIONAL STAFF DATABASE",PageDetail:"Edit Current Record",OsdID:"",errorList:"",model:{Osd:{id:"",division:"",section_unit:"",office_location_official_station:"",item_number:"",date_position_created:"",position_title:"",parenthetical_title:"",position_level:"",sg:"",salary_step_increment:"",monthly_rate:"",designation_as_appropriate_based_on_so:"",date_of_designation:"",special_order_no:"",office_bureau_service_program:"",fund_source_for_contractual:"",employment_status:"",status_filled_unfilled:"",mode_of_accession_for_appointment_based_positions:"",date_filled_up_assumption:"",fullname:"",lastname:"",firstname:"",middlename:"",ext:"",date_of_original_appointment:"",date_of_last_promotion:"",entry_date_in_dswd:"",eligibility_csc_and_other_eligibilities:"",eligibility_license_ra_1080:"",license_ra_1080_let_rn_rs_etc:"",highest_level_of_eligibility:"",highest_education_completed:"",degree_and_course_1st_vocational:"",degree_and_course_2nd_course:"",other_courses:"",masters_or_doctoral_degree_specify:"",gender:"",date_of_birth:"",age:"",civil_status:"",residential_address:"",permanent_address:"",indicate_whether_solo_parent:"",indicate_whether_senior_citizen:"",indicate_whether_pwd:"",type_of_disability:"",indicate_whether_member_of_indigenous_group:"",indigenous_group:"",citizenship:"",active_contact_numbers:"",active_and_working_email_address:"",former_incumbent:"",mode_of_separation:"",date_vacated:"",remarks_status_of_vacant_position:"",employee_id_number:"",bir_tin_number:"",philhealth_number:"",sss_number:"",pagibig_number:"",gsis_number:"",blood_type:""}}}},mounted(){this.OsdID=this.$route.params.ID,this.OsdData(this.$route.params.ID)},methods:{OsdData(_){u.get(`${f}/api/osdlist/${_}/edit`).then(o=>{const i=o.data.Osd;console.log(o.data.Osd),this.model.Osd.id=i.id,this.model.Osd.division=i.division,this.model.Osd.section_unit=i.section_unit,this.model.Osd.office_location_official_station=i.office_location_official_station,this.model.Osd.item_number=i.item_number,this.model.Osd.date_position_created=i.date_position_created,this.model.Osd.position_title=i.position_title,this.model.Osd.parenthetical_title=i.parenthetical_title,this.model.Osd.position_level=i.position_level,this.model.Osd.sg=i.sg,this.model.Osd.salary_step_increment=i.salary_step_increment,this.model.Osd.monthly_rate=i.monthly_rate,this.model.Osd.designation_as_appropriate_based_on_so=i.designation_as_appropriate_based_on_so,this.model.Osd.date_of_designation=i.date_of_designation,this.model.Osd.special_order_no=i.special_order_no,this.model.Osd.office_bureau_service_program=i.office_bureau_service_program,this.model.Osd.fund_source_for_contractual=i.fund_source_for_contractual,this.model.Osd.employment_status=i.employment_status,this.model.Osd.status_filled_unfilled=i.status_filled_unfilled,this.model.Osd.mode_of_accession_for_appointment_based_positions=i.mode_of_accession_for_appointment_based_positions,this.model.Osd.date_filled_up_assumption=i.date_filled_up_assumption,this.model.Osd.fullname=i.fullname,this.model.Osd.lastname=i.lastname,this.model.Osd.firstname=i.firstname,this.model.Osd.middlename=i.middlename,this.model.Osd.ext=i.ext,this.model.Osd.date_of_original_appointment=i.date_of_original_appointment,this.model.Osd.date_of_last_promotion=i.date_of_last_promotion,this.model.Osd.entry_date_in_dswd=i.entry_date_in_dswd,this.model.Osd.eligibility_csc_and_other_eligibilities=i.eligibility_csc_and_other_eligibilities,this.model.Osd.eligibility_license_ra_1080=i.eligibility_license_ra_1080,this.model.Osd.license_ra_1080_let_rn_rs_etc=i.license_ra_1080_let_rn_rs_etc,this.model.Osd.highest_level_of_eligibility=i.highest_level_of_eligibility,this.model.Osd.highest_education_completed=i.highest_education_completed,this.model.Osd.degree_and_course_1st_vocational=i.degree_and_course_1st_vocational,this.model.Osd.degree_and_course_2nd_course=i.degree_and_course_2nd_course,this.model.Osd.other_courses=i.other_courses,this.model.Osd.masters_or_doctoral_degree_specify=i.masters_or_doctoral_degree_specify,this.model.Osd.gender=i.gender,this.model.Osd.date_of_birth=i.date_of_birth,this.model.Osd.age=i.age,this.model.Osd.civil_status=i.civil_status,this.model.Osd.residential_address=i.residential_address,this.model.Osd.permanent_address=i.permanent_address,this.model.Osd.indicate_whether_solo_parent=i.indicate_whether_solo_parent,this.model.Osd.indicate_whether_senior_citizen=i.indicate_whether_senior_citizen,this.model.Osd.indicate_whether_pwd=i.indicate_whether_pwd,this.model.Osd.type_of_disability=i.type_of_disability,this.model.Osd.indicate_whether_member_of_indigenous_group=i.indicate_whether_member_of_indigenous_group,this.model.Osd.indigenous_group=i.indigenous_group,this.model.Osd.citizenship=i.citizenship,this.model.Osd.active_contact_numbers=i.active_contact_numbers,this.model.Osd.active_and_working_email_address=i.active_and_working_email_address,this.model.Osd.former_incumbent=i.former_incumbent,this.model.Osd.mode_of_separation=i.mode_of_separation,this.model.Osd.date_vacated=i.date_vacated,this.model.Osd.remarks_status_of_vacant_position=i.remarks_status_of_vacant_position,this.model.Osd.employee_id_number=i.employee_id_number,this.model.Osd.bir_tin_number=i.bir_tin_number,this.model.Osd.philhealth_number=i.philhealth_number,this.model.Osd.sss_number=i.sss_number,this.model.Osd.pagibig_number=i.pagibig_number,this.model.Osd.gsis_number=i.gsis_number,this.model.Osd.blood_type=i.blood_type}).catch(function(o){o.response&&o.response.status===404&&alert(o.response.data.message)})},async updateOsd(_){try{const o=await u.put(`${f}/api/osdlist/${_}/edit`,this.model.Osd);console.log(o.data),await this.$swal({icon:"success",title:"Success!",text:o.data.message}),await this.$router.push("/adminosp"),window.location.reload(),this.errorList=""}catch(o){o.response?(o.response.status===422&&(this.errorList=o.response.data.errors),o.response.status===404&&alert(o.response.data.message)):o.request?console.log(o.request):console.log("error",o.message)}}}},l=_=>(N("data-v-3270695b"),_=_(),A(),_),L=l(()=>e("br",null,null,-1)),B=l(()=>e("br",null,null,-1)),R=l(()=>e("br",null,null,-1)),x=l(()=>e("br",null,null,-1)),V={class:"container-fluid"},C=l(()=>e("div",{class:"Header"},null,-1)),P={key:0,class:"alert alert-warning"},M={class:"container-fluid wrapper"},F={class:"col-12 first-row"},G={class:"col-12"},k={class:"col-12"},H={class:"form-floating spaceBetween mb-3"},Y=l(()=>e("label",{for:"division"},"DIVISION",-1)),z={class:"col-12"},W={class:"col-4 mb-3"},j={class:"form-floating spaceBetween"},Z=l(()=>e("label",{for:"section"},"SECTION",-1)),q={class:"col-8 mb-3"},K={class:"col-6"},X={class:"form-floating spaceBetween"},J=l(()=>e("label",{for:"officeLocation"},"OFFICE LOCATION",-1)),Q={class:"col-6"},$={class:"form-floating spaceBetween"},ee=l(()=>e("label",{for:"itemNumber"},"ITEM NUMBER",-1)),oe={class:"col-12 mb-3"},se={class:"col-3"},te={class:"form-floating spaceBetween"},le=l(()=>e("label",{for:"datePosition"},"DATE POSITION",-1)),ie={class:"col-3"},de={class:"form-floating spaceBetween"},ne=l(()=>e("label",{for:"positionTitle"},"POSITION TITLE",-1)),_e={class:"col-3"},ae={class:"form-floating spaceBetween"},re=l(()=>e("label",{for:"parentheticalTitle"},"PARENTHETICAL TITLE",-1)),ce={class:"col-3"},me={class:"form-floating spaceBetween"},pe=l(()=>e("label",{for:"monthlyRate"},"MONTHLY RATE",-1)),ue={class:"col-12 mb-3"},fe={class:"col-3"},he={class:"form-floating spaceBetween"},Oe=l(()=>e("label",{for:"positionlevel"},"POSITION LEVEL",-1)),be={class:"col-3"},ve={class:"form-floating spaceBetween"},ge=l(()=>e("label",{for:"salarygrade"},"SALARY GRADE",-1)),ye={class:"col-3"},Ee={class:"form-floating spaceBetween"},Ie=l(()=>e("label",{for:"salarystepincrement"},"SALARY STEP INCREMENT",-1)),Se={class:"col-3"},we={class:"form-floating spaceBetween"},Te=l(()=>e("option",{value:"",disabled:"",selected:""},"Select an option",-1)),Ne=l(()=>e("option",{value:"FILLED"},"FILLED",-1)),Ae=l(()=>e("option",{value:"UNFILLED"},"UNFILLED",-1)),Ue=[Te,Ne,Ae],De=l(()=>e("label",{for:"statusfilledunfilled"},"STATUS",-1)),Le={class:"col-12 mb-3"},Be={class:"col-3"},Re={class:"form-floating spaceBetween"},xe=l(()=>e("label",{for:"designationasappropriatebasedonso"},"DESIGNATION",-1)),Ve={class:"col-3"},Ce={class:"form-floating spaceBetween"},Pe=l(()=>e("label",{for:"dateofdesignation"},"DATE OF DESIGNATION",-1)),Me={class:"col-3"},Fe={class:"form-floating spaceBetween"},Ge=l(()=>e("label",{for:"specialorderno"},"SPECIAL ORDER NO.",-1)),ke={class:"col-3"},He={class:"form-floating spaceBetween"},Ye=l(()=>e("label",{for:"datefilledupassumption"},"DATE FILLED UP ASSUMPTION",-1)),ze={class:"col-12 mb-3"},We={class:"col-6"},je={class:"form-floating spaceBetween"},Ze=l(()=>e("label",{for:"officebureauserviceprogram"},"OFFICE BUREAU SERVICE PROGRAM",-1)),qe={class:"col-6"},Ke={class:"form-floating spaceBetween"},Xe=U('<option value="" disabled selected data-v-3270695b>Select an option</option><option value="MOA" data-v-3270695b>MOA</option><option value="PERMANENT" data-v-3270695b>PERMANENT</option><option value="CASUAL" data-v-3270695b>CASUAL</option><option value="CONTRACTUAL" data-v-3270695b>CONTRACTUAL</option><option value="COTERMINOUS" data-v-3270695b>COTERMINOUS</option>',6),Je=[Xe],Qe=l(()=>e("label",{for:"employmentStatus"},"EMPLOYMENT STATUS",-1)),$e={class:"col-12 mb-3"},eo={class:"col-6"},oo={class:"form-floating spaceBetween"},so=l(()=>e("label",{for:"fundsourceforcontractual"},"FUND SOURCE FOR CONTRACTUAL",-1)),to={class:"col-6"},lo={class:"col-6"},io={class:"form-floating spaceBetween"},no=l(()=>e("label",{for:"modeofaccessionforappointmentbasedpositions"},"MODE OF ACCESSION",-1)),_o={class:"col-6"},ao={class:"form-floating spaceBetween"},ro=l(()=>e("label",{for:"modeofseparation"},"MODE OF SEPARATION",-1)),co=l(()=>e("hr",{class:"hr",style:{"margin-left":"15px","margin-right":"15px",border:"1px solid red"}},null,-1)),mo={class:"col-12 second-row"},po={class:"col-12 mb-3"},uo={class:"col-3"},fo={class:"form-floating spaceBetween"},ho=l(()=>e("label",{for:"fullname"},"FULL NAME",-1)),Oo={class:"col-3"},bo={class:"form-floating spaceBetween"},vo=l(()=>e("label",{for:"lastname"},"LAST NAME",-1)),go={class:"col-2"},yo={class:"form-floating spaceBetween"},Eo=l(()=>e("label",{for:"firstname"},"FIRST NAME",-1)),Io={class:"col-2"},So={class:"form-floating spaceBetween"},wo=l(()=>e("label",{for:"middlename"},"MIDDLE NAME",-1)),To={class:"col-2"},No={class:"form-floating spaceBetween"},Ao=l(()=>e("label",{for:"ext"},"EXT.",-1)),Uo={class:"col-12 mb-3"},Do={class:"col-3"},Lo={class:"col-6"},Bo={class:"form-floating spaceBetween"},Ro=l(()=>e("label",{for:"age"},"AGE",-1)),xo={class:"col-6"},Vo={class:"form-floating spaceBetween"},Co=l(()=>e("option",{value:"",disabled:"",selected:""},"Select an option",-1)),Po=l(()=>e("option",{value:"MALE"},"MALE",-1)),Mo=l(()=>e("option",{value:"FEMALE"},"FEMALE",-1)),Fo=l(()=>e("option",{value:""},"None",-1)),Go=[Co,Po,Mo,Fo],ko=l(()=>e("label",null,"GENDER",-1)),Ho={class:"col-3"},Yo={class:"form-floating spaceBetween"},zo=l(()=>e("label",{for:"civilstatus"},"CIVIL STATUS",-1)),Wo={class:"col-3"},jo={class:"form-floating spaceBetween"},Zo=l(()=>e("label",{for:"dateofbirth"},"DATE OF BIRTH",-1)),qo={class:"col-3"},Ko={class:"form-floating spaceBetween"},Xo=l(()=>e("label",{for:"emailaddress"},"EMAIL ADDRESS",-1)),Jo={class:"col-12 mb-3"},Qo={class:"col-4"},$o={class:"col-6"},es={class:"form-floating spaceBetween"},os=l(()=>e("option",{value:"",disabled:""},"Select an option",-1)),ss=l(()=>e("option",{value:"PWD"},"PWD",-1)),ts=l(()=>e("option",{value:""},"None",-1)),ls=[os,ss,ts],is=l(()=>e("label",{for:"pwdStatus"},"INDICATE WHETHER PWD",-1)),ds={class:"col-6"},ns={class:"form-floating spaceBetween"},_s=l(()=>e("label",{for:"typeofdisability"},"TYPE OF DISABILITY",-1)),as={class:"col-8"},rs={class:"col-4"},cs={class:"form-floating spaceBetween"},ms=l(()=>e("option",{value:"",disabled:""},"Select an option",-1)),ps=l(()=>e("option",{value:"SENIOR CITIZEN"},"SENIOR CITIZEN",-1)),us=l(()=>e("option",{value:""},"None",-1)),fs=[ms,ps,us],hs=l(()=>e("label",{for:"seniorCitizenStatus"},"INDICATE WHETHER SENIOR CITIZEN",-1)),Os={class:"col-4"},bs={class:"form-floating spaceBetween"},vs=l(()=>e("option",{value:"",disabled:""},"Select an option",-1)),gs=l(()=>e("option",{value:"SOLO PARENT"},"SOLO PARENT",-1)),ys=l(()=>e("option",{value:""},"None",-1)),Es=[vs,gs,ys],Is=l(()=>e("label",{for:"soloParentStatus"},"INDICATE WHETHER SOLO PARENT",-1)),Ss={class:"col-4"},ws={class:"form-floating spaceBetween"},Ts=l(()=>e("option",{value:"",disabled:""},"Select an option",-1)),Ns=l(()=>e("option",{value:"INDIGENOUS GROUP"},"INDIGENOUS GROUP",-1)),As=l(()=>e("option",{value:""},"None",-1)),Us=[Ts,Ns,As],Ds=l(()=>e("label",{for:"indigenousGroup"},"INDICATE IF INDIGENOUS_GROUP",-1)),Ls=l(()=>e("hr",{class:"hr",style:{"margin-left":"15px","margin-right":"15px",border:"1px solid red"}},null,-1)),Bs={class:"col-12 third-row"},Rs={class:"col-12 mb-3"},xs={class:"col-3"},Vs={class:"form-floating spaceBetween"},Cs=l(()=>e("label",{for:"employeeidno"},"EMPLOYEE ID NO",-1)),Ps={class:"col-3"},Ms={class:"form-floating spaceBetween"},Fs=l(()=>e("label",{for:"entrydateindswd"},"ENTRY DATE IN DSWD",-1)),Gs={class:"col-3"},ks={class:"form-floating spaceBetween"},Hs=l(()=>e("label",{for:"dateoforiginalappointment"},"DATE_OF_ORIGINAL_APPOINTMENT",-1)),Ys={class:"col-3"},zs={class:"form-floating spaceBetween"},Ws=l(()=>e("label",{for:"dateoflastpromotion"},"DATE OF LAST PROMOTION",-1)),js={class:"col-12 mb-3"},Zs={class:"col-3"},qs={class:"form-floating spaceBetween"},Ks=l(()=>e("label",{for:"gsisnumber"},"GSIS NUMBER",-1)),Xs={class:"col-3"},Js={class:"form-floating spaceBetween"},Qs=l(()=>e("label",{for:"birtinno"},"BIR TIN.NO.",-1)),$s={class:"col-3"},et={class:"form-floating spaceBetween"},ot=l(()=>e("label",{for:"sssnumber"},"SSS NUMBER",-1)),st={class:"col-3"},tt={class:"form-floating spaceBetween"},lt=l(()=>e("label",{for:"philhealthnumber"},"PHILHEALTH NUMBER",-1)),it={class:"col-12 mb-3"},dt={class:"col-3"},nt={class:"form-floating spaceBetween"},_t=l(()=>e("label",{for:"highestlvlofeligibility"},"HIGHEST LVL OF ELIGIBILITY",-1)),at={class:"col-3"},rt={class:"form-floating spaceBetween"},ct=l(()=>e("label",{for:"eligibilitycscandothers"},"ELIGIBILITY CSC and Others",-1)),mt={class:"col-3"},pt={class:"form-floating spaceBetween"},ut=l(()=>e("label",{for:"eligibilitylicense1080"},"ELIGIBILITY License RA 1080",-1)),ft={class:"col-3"},ht={class:"form-floating spaceBetween"},Ot=l(()=>e("label",{for:"license1080letrnrs"},"LICENSE",-1)),bt={class:"col-12 mb-3"},vt={class:"col-3"},gt={class:"form-floating spaceBetween"},yt=l(()=>e("label",{for:"highesteducationcompleted"},"HIGHEST_EDUCATION_COMPLETED",-1)),Et={class:"col-3"},It={class:"form-floating spaceBetween"},St=l(()=>e("label",{for:"degreeandcourse1stvocational"},"DEGREE AND COURSE (1st Course Vocational)",-1)),wt={class:"col-3"},Tt={class:"form-floating spaceBetween"},Nt=l(()=>e("label",{for:"degreeandcourse2ndcourse"},"DEGREE_AND_COURSE (2nd Course)",-1)),At={class:"col-3"},Ut={class:"form-floating spaceBetween"},Dt=l(()=>e("label",{for:"othercourse"},"OTHER_COURSE",-1)),Lt={class:"col-12 mb-3"},Bt={class:"col-6"},Rt={class:"form-floating spaceBetween"},xt=l(()=>e("label",{for:"remarksstatusofvacantposition"},"REMARKS STATUS OF VACANT POSITION",-1)),Vt={class:"col-6"},Ct={class:"col-6"},Pt={class:"form-floating spaceBetween"},Mt=l(()=>e("label",{for:"formerincumbent"},"FORMER INCUMBENT",-1)),Ft={class:"col-6"},Gt={class:"form-floating spaceBetween"},kt=l(()=>e("label",{for:"datevacated"},"DATE VACATED",-1)),Ht={class:"col-12"},Yt={class:"form-floating spaceBetween mt-3"},zt=l(()=>e("label",{for:"mastersordoctoraldegree"},"MASTERS OR DOCTORAL DEGREE",-1)),Wt={class:"md-3 col-12 buttons d-flex justify-content-end"},jt=l(()=>e("button",{class:"btn btn-secondary"},"CANCEL",-1));function Zt(_,o,i,qt,s,v){const g=h("AdminSidebar"),p=h("router-link");return r(),c(O,null,[L,B,R,x,m(g,{iconText:s.PageTitle,iconDetails:s.PageDetail},null,8,["iconText","iconDetails"]),e("div",null,[e("div",V,[C,Object.keys(this.errorList).length>0?(r(),c("ul",P,[(r(!0),c(O,null,S(this.errorList,(t,y)=>(r(),c("li",{class:"mb-0 ms-3",key:y},T(t[0]),1))),128))])):w("",!0),e("div",M,[e("section",F,[e("div",G,[e("div",k,[e("div",H,[d(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=t=>s.model.Osd.division=t),class:"form-control",id:"division",placeholder:"Division"},null,512),[[n,s.model.Osd.division]]),Y])])]),e("div",z,[e("div",W,[e("div",j,[d(e("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=t=>s.model.Osd.section_unit=t),class:"form-control",id:"section",placeholder:"Section"},null,512),[[n,s.model.Osd.section_unit]]),Z])]),e("div",q,[e("div",K,[e("div",X,[d(e("input",{type:"text","onUpdate:modelValue":o[2]||(o[2]=t=>s.model.Osd.office_location_official_station=t),class:"form-control",id:"officeLocation",placeholder:"Office Location"},null,512),[[n,s.model.Osd.office_location_official_station]]),J])]),e("div",Q,[e("div",$,[d(e("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=t=>s.model.Osd.item_number=t),class:"form-control",id:"itemNumber",placeholder:"Item Number"},null,512),[[n,s.model.Osd.item_number]]),ee])])]),e("div",oe,[e("div",se,[e("div",te,[d(e("input",{type:"text","onUpdate:modelValue":o[4]||(o[4]=t=>s.model.Osd.date_position_created=t),class:"form-control",id:"datePosition",placeholder:"Date Position"},null,512),[[n,s.model.Osd.date_position_created]]),le])]),e("div",ie,[e("div",de,[d(e("input",{type:"text","onUpdate:modelValue":o[5]||(o[5]=t=>s.model.Osd.position_title=t),class:"form-control",id:"positionTitle",placeholder:"Position Title"},null,512),[[n,s.model.Osd.position_title]]),ne])]),e("div",_e,[e("div",ae,[d(e("input",{type:"text","onUpdate:modelValue":o[6]||(o[6]=t=>s.model.Osd.parenthetical_title=t),class:"form-control",id:"parentheticalTitle",placeholder:"Parenthetical Title"},null,512),[[n,s.model.Osd.parenthetical_title]]),re])]),e("div",ce,[e("div",me,[d(e("input",{type:"text","onUpdate:modelValue":o[7]||(o[7]=t=>s.model.Osd.monthly_rate=t),class:"form-control",id:"monthlyRate",placeholder:"Monthly Rate"},null,512),[[n,s.model.Osd.monthly_rate]]),pe])])]),e("div",ue,[e("div",fe,[e("div",he,[d(e("input",{type:"number","onUpdate:modelValue":o[8]||(o[8]=t=>s.model.Osd.position_level=t),class:"form-control",id:"positionlevel",placeholder:"Position Level"},null,512),[[n,s.model.Osd.position_level]]),Oe])]),e("div",be,[e("div",ve,[d(e("input",{type:"number","onUpdate:modelValue":o[9]||(o[9]=t=>s.model.Osd.sg=t),class:"form-control",id:"salarygrade",placeholder:"Salary Grade"},null,512),[[n,s.model.Osd.sg]]),ge])]),e("div",ye,[e("div",Ee,[d(e("input",{type:"number","onUpdate:modelValue":o[10]||(o[10]=t=>s.model.Osd.salary_step_increment=t),class:"form-control",id:"salarystepincrement",placeholder:"Salary Step Increment"},null,512),[[n,s.model.Osd.salary_step_increment]]),Ie])]),e("div",Se,[e("div",we,[d(e("select",{"onUpdate:modelValue":o[11]||(o[11]=t=>s.model.Osd.status_filled_unfilled=t),class:"form-select centered-placeholder",id:"statusfilledunfilled"},Ue,512),[[a,s.model.Osd.status_filled_unfilled]]),De])])]),e("div",Le,[e("div",Be,[e("div",Re,[d(e("input",{type:"text","onUpdate:modelValue":o[12]||(o[12]=t=>s.model.Osd.designation_as_appropriate_based_on_so=t),class:"form-control",id:"designationasappropriatebasedonso",placeholder:"Designation"},null,512),[[n,s.model.Osd.designation_as_appropriate_based_on_so]]),xe])]),e("div",Ve,[e("div",Ce,[d(e("input",{type:"text","onUpdate:modelValue":o[13]||(o[13]=t=>s.model.Osd.date_of_designation=t),class:"form-control",id:"dateofdesignation",placeholder:"Date of Designation"},null,512),[[n,s.model.Osd.date_of_designation]]),Pe])]),e("div",Me,[e("div",Fe,[d(e("input",{type:"text","onUpdate:modelValue":o[14]||(o[14]=t=>s.model.Osd.special_order_no=t),class:"form-control",id:"specialorderno",placeholder:"Special Order No."},null,512),[[n,s.model.Osd.special_order_no]]),Ge])]),e("div",ke,[e("div",He,[d(e("input",{type:"text","onUpdate:modelValue":o[15]||(o[15]=t=>s.model.Osd.date_filled_up_assumption=t),class:"form-control",id:"datefilledupassumption",placeholder:"Date Filled Up Assumption"},null,512),[[n,s.model.Osd.date_filled_up_assumption]]),Ye])])]),e("div",ze,[e("div",We,[e("div",je,[d(e("input",{type:"text","onUpdate:modelValue":o[16]||(o[16]=t=>s.model.Osd.office_bureau_service_program=t),class:"form-control",id:"officebureauserviceprogram",placeholder:"Office Bureau Service Program"},null,512),[[n,s.model.Osd.office_bureau_service_program]]),Ze])]),e("div",qe,[e("div",Ke,[d(e("select",{"onUpdate:modelValue":o[17]||(o[17]=t=>s.model.Osd.employment_status=t),class:"form-control",id:"employmentStatus"},Je,512),[[a,s.model.Osd.employment_status]]),Qe])])]),e("div",$e,[e("div",eo,[e("div",oo,[d(e("input",{type:"text","onUpdate:modelValue":o[18]||(o[18]=t=>s.model.Osd.fund_source_for_contractual=t),class:"form-control",id:"fundsourceforcontractual",placeholder:"Fund Source for Contractual"},null,512),[[n,s.model.Osd.fund_source_for_contractual]]),so])]),e("div",to,[e("div",lo,[e("div",io,[d(e("input",{type:"text","onUpdate:modelValue":o[19]||(o[19]=t=>s.model.Osd.mode_of_accession_for_appointment_based_positions=t),class:"form-control",id:"modeofaccessionforappointmentbasedpositions",placeholder:"Mode of Accession"},null,512),[[n,s.model.Osd.mode_of_accession_for_appointment_based_positions]]),no])]),e("div",_o,[e("div",ao,[d(e("input",{type:"text","onUpdate:modelValue":o[20]||(o[20]=t=>s.model.Osd.mode_of_separation=t),class:"form-control",id:"modeofseparation",placeholder:"Mode of Separation"},null,512),[[n,s.model.Osd.mode_of_separation]]),ro])])])])])]),co,e("section",mo,[e("div",po,[e("div",uo,[e("div",fo,[d(e("input",{type:"text","onUpdate:modelValue":o[21]||(o[21]=t=>s.model.Osd.fullname=t),class:"form-control",id:"fullname",placeholder:"Full Name"},null,512),[[n,s.model.Osd.fullname]]),ho])]),e("div",Oo,[e("div",bo,[d(e("input",{type:"text","onUpdate:modelValue":o[22]||(o[22]=t=>s.model.Osd.lastname=t),class:"form-control",id:"lastname",placeholder:"Last Name"},null,512),[[n,s.model.Osd.lastname]]),vo])]),e("div",go,[e("div",yo,[d(e("input",{type:"text","onUpdate:modelValue":o[23]||(o[23]=t=>s.model.Osd.firstname=t),class:"form-control",id:"firstname",placeholder:"First Name"},null,512),[[n,s.model.Osd.firstname]]),Eo])]),e("div",Io,[e("div",So,[d(e("input",{type:"text","onUpdate:modelValue":o[24]||(o[24]=t=>s.model.Osd.middlename=t),class:"form-control",id:"middlename",placeholder:"Middle Name"},null,512),[[n,s.model.Osd.middlename]]),wo])]),e("div",To,[e("div",No,[d(e("input",{type:"text","onUpdate:modelValue":o[25]||(o[25]=t=>s.model.Osd.ext=t),class:"form-control",id:"ext",placeholder:"Ext."},null,512),[[n,s.model.Osd.ext]]),Ao])])]),e("div",Uo,[e("div",Do,[e("div",Lo,[e("div",Bo,[d(e("input",{type:"number","onUpdate:modelValue":o[26]||(o[26]=t=>s.model.Osd.age=t),class:"form-control",id:"age",placeholder:"Age"},null,512),[[n,s.model.Osd.age]]),Ro])]),e("div",xo,[e("div",Vo,[d(e("select",{"onUpdate:modelValue":o[27]||(o[27]=t=>s.model.Osd.gender=t),class:"form-control",id:"employmentStatus"},Go,512),[[a,s.model.Osd.gender]]),ko])])]),e("div",Ho,[e("div",Yo,[d(e("input",{type:"text","onUpdate:modelValue":o[28]||(o[28]=t=>s.model.Osd.civil_status=t),class:"form-control",id:"civilstatus",placeholder:"Civil Status"},null,512),[[n,s.model.Osd.civil_status]]),zo])]),e("div",Wo,[e("div",jo,[d(e("input",{type:"text","onUpdate:modelValue":o[29]||(o[29]=t=>s.model.Osd.date_of_birth=t),class:"form-control",id:"dateofbirth",placeholder:"Date of Birth"},null,512),[[n,s.model.Osd.date_of_birth]]),Zo])]),e("div",qo,[e("div",Ko,[d(e("input",{type:"text","onUpdate:modelValue":o[30]||(o[30]=t=>s.model.Osd.active_and_working_email_address=t),class:"form-control",id:"emailaddress",placeholder:"Email Address"},null,512),[[n,s.model.Osd.active_and_working_email_address]]),Xo])])]),e("div",Jo,[e("div",Qo,[e("div",$o,[e("div",es,[d(e("select",{"onUpdate:modelValue":o[31]||(o[31]=t=>s.model.Osd.indicate_whether_pwd=t),class:"form-control",id:"pwdStatus"},ls,512),[[a,s.model.Osd.indicate_whether_pwd]]),is])]),e("div",ds,[e("div",ns,[d(e("input",{type:"text","onUpdate:modelValue":o[32]||(o[32]=t=>s.model.Osd.type_of_disability=t),class:"form-control",id:"typeofdisability",placeholder:"Type of Disability"},null,512),[[n,s.model.Osd.type_of_disability]]),_s])])]),e("div",as,[e("div",rs,[e("div",cs,[d(e("select",{"onUpdate:modelValue":o[33]||(o[33]=t=>s.model.Osd.indicate_whether_senior_citizen=t),class:"form-control",id:"seniorCitizenStatus"},fs,512),[[a,s.model.Osd.indicate_whether_senior_citizen]]),hs])]),e("div",Os,[e("div",bs,[d(e("select",{"onUpdate:modelValue":o[34]||(o[34]=t=>s.model.Osd.indicate_whether_solo_parent=t),class:"form-control",id:"soloParentStatus"},Es,512),[[a,s.model.Osd.indicate_whether_solo_parent]]),Is])]),e("div",Ss,[e("div",ws,[d(e("select",{"onUpdate:modelValue":o[35]||(o[35]=t=>s.model.Osd.indicate_whether_member_of_indigenous_group=t),class:"form-control",id:"indigenousGroup"},Us,512),[[a,s.model.Osd.indicate_whether_member_of_indigenous_group]]),Ds])])])])]),Ls,e("section",Bs,[e("div",Rs,[e("div",xs,[e("div",Vs,[d(e("input",{type:"text","onUpdate:modelValue":o[36]||(o[36]=t=>s.model.Osd.employee_id_number=t),class:"form-control",id:"employeeidno",placeholder:"Employee ID No"},null,512),[[n,s.model.Osd.employee_id_number]]),Cs])]),e("div",Ps,[e("div",Ms,[d(e("input",{type:"text","onUpdate:modelValue":o[37]||(o[37]=t=>s.model.Osd.entry_date_in_dswd=t),class:"form-control",id:"entrydateindswd",placeholder:"Entry Date in DSWD"},null,512),[[n,s.model.Osd.entry_date_in_dswd]]),Fs])]),e("div",Gs,[e("div",ks,[d(e("input",{type:"text","onUpdate:modelValue":o[38]||(o[38]=t=>s.model.Osd.date_of_original_appointment=t),class:"form-control",id:"dateoforiginalappointment",placeholder:"Date of Original Appointment"},null,512),[[n,s.model.Osd.date_of_original_appointment]]),Hs])]),e("div",Ys,[e("div",zs,[d(e("input",{type:"text","onUpdate:modelValue":o[39]||(o[39]=t=>s.model.Osd.date_of_last_promotion=t),class:"form-control",id:"dateoflastpromotion",placeholder:"Date of Last Promotion"},null,512),[[n,s.model.Osd.date_of_last_promotion]]),Ws])])]),e("div",js,[e("div",Zs,[e("div",qs,[d(e("input",{type:"text","onUpdate:modelValue":o[40]||(o[40]=t=>s.model.Osd.gsis_number=t),class:"form-control",id:"gsisnumber",placeholder:"GSIS Number"},null,512),[[n,s.model.Osd.gsis_number]]),Ks])]),e("div",Xs,[e("div",Js,[d(e("input",{type:"text","onUpdate:modelValue":o[41]||(o[41]=t=>s.model.Osd.bir_tin_number=t),class:"form-control",id:"birtinno",placeholder:"BIR TIN No."},null,512),[[n,s.model.Osd.bir_tin_number]]),Qs])]),e("div",$s,[e("div",et,[d(e("input",{type:"text","onUpdate:modelValue":o[42]||(o[42]=t=>s.model.Osd.sss_number=t),class:"form-control",id:"sssnumber",placeholder:"SSS Number"},null,512),[[n,s.model.Osd.sss_number]]),ot])]),e("div",st,[e("div",tt,[d(e("input",{type:"text","onUpdate:modelValue":o[43]||(o[43]=t=>s.model.Osd.philhealth_number=t),class:"form-control",id:"philhealthnumber",placeholder:"PhilHealth Number"},null,512),[[n,s.model.Osd.philhealth_number]]),lt])])]),e("div",it,[e("div",dt,[e("div",nt,[d(e("input",{type:"text","onUpdate:modelValue":o[44]||(o[44]=t=>s.model.Osd.highest_level_of_eligibility=t),class:"form-control",id:"highestlvlofeligibility",placeholder:"Highest Level of Eligibility"},null,512),[[n,s.model.Osd.highest_level_of_eligibility]]),_t])]),e("div",at,[e("div",rt,[d(e("input",{type:"text","onUpdate:modelValue":o[45]||(o[45]=t=>s.model.Osd.eligibility_csc_and_other_eligibilities=t),class:"form-control",id:"eligibilitycscandothers",placeholder:"Eligibility CSC and Others"},null,512),[[n,s.model.Osd.eligibility_csc_and_other_eligibilities]]),ct])]),e("div",mt,[e("div",pt,[d(e("input",{type:"text","onUpdate:modelValue":o[46]||(o[46]=t=>s.model.Osd.eligibility_license_ra_1080=t),class:"form-control",id:"eligibilitylicense1080",placeholder:"Eligibility License RA 1080"},null,512),[[n,s.model.Osd.eligibility_license_ra_1080]]),ut])]),e("div",ft,[e("div",ht,[d(e("input",{type:"text","onUpdate:modelValue":o[47]||(o[47]=t=>s.model.Osd.license_ra_1080_let_rn_rs_etc=t),class:"form-control",id:"license1080letrnrs",placeholder:"License RA 1080 LET RN RS etc."},null,512),[[n,s.model.Osd.license_ra_1080_let_rn_rs_etc]]),Ot])])]),e("div",bt,[e("div",vt,[e("div",gt,[d(e("input",{type:"text","onUpdate:modelValue":o[48]||(o[48]=t=>s.model.Osd.highest_education_completed=t),class:"form-control",id:"highesteducationcompleted",placeholder:"Highest Education Completed"},null,512),[[n,s.model.Osd.highest_education_completed]]),yt])]),e("div",Et,[e("div",It,[d(e("input",{type:"text","onUpdate:modelValue":o[49]||(o[49]=t=>s.model.Osd.degree_and_course_1st_vocational=t),class:"form-control",id:"degreeandcourse1stvocational",placeholder:"Degree and Course (1st Course Vocational)"},null,512),[[n,s.model.Osd.degree_and_course_1st_vocational]]),St])]),e("div",wt,[e("div",Tt,[d(e("input",{type:"text","onUpdate:modelValue":o[50]||(o[50]=t=>s.model.Osd.degree_and_course_2nd_course=t),class:"form-control",id:"degreeandcourse2ndcourse",placeholder:"Degree and Course (2nd Course)"},null,512),[[n,s.model.Osd.degree_and_course_2nd_course]]),Nt])]),e("div",At,[e("div",Ut,[d(e("input",{type:"text","onUpdate:modelValue":o[51]||(o[51]=t=>s.model.Osd.other_courses=t),class:"form-control",id:"othercourse",placeholder:"Other Course"},null,512),[[n,s.model.Osd.other_courses]]),Dt])])]),e("div",Lt,[e("div",Bt,[e("div",Rt,[d(e("textarea",{style:{height:"135px"},type:"text","onUpdate:modelValue":o[52]||(o[52]=t=>s.model.Osd.remarks_status_of_vacant_position=t),class:"form-control",id:"remarksstatusofvacantposition",placeholder:"Remarks Status of Vacant Position"},null,512),[[n,s.model.Osd.remarks_status_of_vacant_position]]),xt])]),e("div",Vt,[e("div",Ct,[e("div",Pt,[d(e("input",{type:"text","onUpdate:modelValue":o[53]||(o[53]=t=>s.model.Osd.former_incumbent=t),class:"form-control",id:"formerincumbent",placeholder:"Former Incumbent"},null,512),[[n,s.model.Osd.former_incumbent]]),Mt])]),e("div",Ft,[e("div",Gt,[d(e("input",{type:"text","onUpdate:modelValue":o[54]||(o[54]=t=>s.model.Osd.date_vacated=t),class:"form-control",id:"datevacated",placeholder:"Date Vacated"},null,512),[[n,s.model.Osd.date_vacated]]),kt])]),e("div",Ht,[e("div",Yt,[d(e("input",{type:"text","onUpdate:modelValue":o[55]||(o[55]=t=>s.model.Osd.masters_or_doctoral_degree_specify=t),class:"form-control",id:"mastersordoctoraldegree",placeholder:"Masters or Doctoral Degree Specify"},null,512),[[n,s.model.Osd.masters_or_doctoral_degree_specify]]),zt])])])])])]),e("div",Wt,[m(p,{to:"/adminosp"},{default:b(()=>[jt]),_:1}),m(p,{to:"/adminosp"},{default:b(()=>[e("button",{onClick:o[56]||(o[56]=t=>v.updateOsd(_.$route.params.ID)),class:"btn btn-primary col-12"}," Save ")]),_:1})])])])],64)}const Xt=E(D,[["render",Zt],["__scopeId","data-v-3270695b"]]);export{Xt as default};