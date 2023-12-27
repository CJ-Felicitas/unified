import{_ as A,A as O,a as u,b,r as f,o as c,c as r,d as _,e,g as S,h as R,j as N,k as n,v as d,l as a,w as E,t as g,p as D,i as I,m as M}from"./index-6fcab6bb.js";const y={name:"AdminCBSSEdit",components:{AdminSidebar:O},data(){return{PageTitle:"Community Based Services Section",PageDetail:"Edit Current Record",CbssID:"",errorList:"",model:{Cbss:{ID:"",DATE:"",NAME:"",AGE:"",SEX:"",CASE_CATEGORY:"",SUB_CATEGORY:"",MODE_OF_ADMISSION:"",ADDRESS:"",NON_MONETARY_SERVICES:"",Purpose:"",AMOUNT:"",REMARKS:"",REPONSIBLE_PERSON:"",NUMBER_OF_SERVICES_AVAILED:""}}}},computed:{},mounted(){this.CbssID=this.$route.params.ID,this.CbssData(this.$route.params.ID)},methods:{async CbssData(i){try{const s=await u.get(`${b}/api/cbsslist/${i}/edit`),p=s.data.Cbss;console.log(s.data),Object.assign(this.model.Cbss,p)}catch(s){s.response&&s.response.status===404?alert(s.response.data.message):console.error(s)}},async updateCbss(i){try{const s=await u.put(`${b}/api/cbsslist/${i}/edit`,this.model.Cbss);console.log(s.data),await this.$swal({icon:"success",title:"Success!",text:s.data.message}),await this.$router.push("/admincbss"),window.location.reload(),this.errorList=""}catch(s){s.response?(s.response.status===422&&(this.errorList=s.response.data.errors),s.response.status===404&&alert(s.response.data.message)):s.request?console.log(s.request):console.log("error",s.message)}}}},o=i=>(D("data-v-f4d2e1a0"),i=i(),I(),i),B=o(()=>e("br",null,null,-1)),L=o(()=>e("br",null,null,-1)),T=o(()=>e("br",null,null,-1)),w=o(()=>e("br",null,null,-1)),V={class:"container-fluid"},P=o(()=>e("div",{class:"Header"},null,-1)),U={key:0,class:"alert alert-warning"},x={class:"container-fluid wrapper"},F={class:"col-12"},k={class:"col-12"},Y={class:"spaceBetween"},W={class:"form-floating"},G=o(()=>e("label",{for:"officeLocation"},"Full Name",-1)),H={class:"col-6"},K={class:"col-12"},X={class:"form-floating spaceBetween"},j=o(()=>e("label",{for:"responsiblePerson"},"Responsible Person",-1)),q={class:"col-12"},z={class:"form-floating spaceBetween"},J=o(()=>e("label",{for:"address"},"Address",-1)),Q={class:"col-12"},Z={class:"form-floating spaceBetween"},$=o(()=>e("label",{for:"age"},"Age",-1)),ee={class:"col-12"},se={class:"form-floating spaceBetween"},oe=o(()=>e("option",{value:"",disabled:"",selected:""},"Select an option",-1)),te=o(()=>e("option",{value:"MALE"},"MALE",-1)),le=o(()=>e("option",{value:"FEMALE"},"FEMALE",-1)),ne=[oe,te,le],ie=o(()=>e("label",{for:"sex"},"Sex",-1)),de={class:"col-12"},ae={class:"form-floating spaceBetween"},ce=o(()=>e("label",{for:"amount"},"Amount",-1)),re={class:"col-12"},_e={class:"form-floating spaceBetween"},pe=M('<option value="" disabled selected data-v-f4d2e1a0>Select an option</option><option value="WEDC" data-v-f4d2e1a0>WEDC</option><option value="FHONA" data-v-f4d2e1a0>FHONA</option><option value="OFW" data-v-f4d2e1a0>OFW</option><option value="OLDER PERSONS" data-v-f4d2e1a0>OLDER PERSONS</option><option value="OTHERS" data-v-f4d2e1a0>OTHERS</option>',6),me=[pe],ue=o(()=>e("label",{for:"caseCategory"},"Case Category",-1)),be={class:"col-12"},fe={class:"form-floating spaceBetween"},Se=o(()=>e("label",{for:"date"},"Date",-1)),Ee={class:"col-6"},ve={class:"col-12"},he={class:"form-floating spaceBetween"},Ce=o(()=>e("option",{value:"",disabled:"",selected:""},"Select an option",-1)),Ae=o(()=>e("option",{value:"WALK-IN"},"WALK-IN",-1)),Oe=o(()=>e("option",{value:"DSWD XI CONCERNS"},"DSWD XI CONCERNS",-1)),Re=o(()=>e("option",{value:"REFERRAL"},"REFERRAL",-1)),Ne=[Ce,Ae,Oe,Re],ge=o(()=>e("label",{for:"modeOfAdmission"},"Mode of Admission",-1)),De={class:"col-12"},Ie={class:"form-floating spaceBetween"},Me=o(()=>e("option",{value:"",disabled:"",selected:""},"Select an option",-1)),ye=o(()=>e("option",{value:"Counseling/Advice"},"Counseling/Advice",-1)),Be=o(()=>e("option",{value:"Travel Clearance"},"Travel Clearance",-1)),Le=o(()=>e("option",{value:"Referral"},"Referral",-1)),Te=[Me,ye,Be,Le],we=o(()=>e("label",{for:"nonMonetaryServices"},"Non Monetary Services",-1)),Ve={class:"col-12"},Pe={class:"form-floating spaceBetween"},Ue=o(()=>e("label",{for:"numberOfServicesAvailed"},"Number of Services Availed",-1)),xe={class:"col-12"},Fe={class:"form-floating spaceBetween"},ke=o(()=>e("option",{value:"",disabled:"",selected:""},"Select an option",-1)),Ye=o(()=>e("option",{value:"CNSP"},"CNSP",-1)),We=o(()=>e("option",{value:"EMOTIONALLY/PSYCHO DISTRESSED"}," EMOTIONALLY/PSYCHO DISTRESSED ",-1)),Ge=o(()=>e("option",{value:"OFW"},"OFW",-1)),He=[ke,Ye,We,Ge],Ke=o(()=>e("label",{for:"subCategory"},"Sub Category",-1)),Xe={class:"col-12"},je={class:"form-floating spaceBetween"},qe=o(()=>e("label",{for:"purpose"},"Purpose",-1)),ze={class:"col-12"},Je={class:"form-floating spaceBetween"},Qe=o(()=>e("label",{for:"remarks"},"Remarks",-1)),Ze={class:"md-3 col-12 buttons d-flex justify-content-end"},$e=o(()=>e("button",{class:"btn btn-secondary"},"CANCEL",-1));function es(i,s,p,ss,t,v){const h=f("AdminSidebar"),m=f("router-link");return c(),r(S,null,[B,L,T,w,_(h,{iconText:t.PageTitle,iconDetails:t.PageDetail},null,8,["iconText","iconDetails"]),e("div",null,[e("div",V,[P,Object.keys(this.errorList).length>0?(c(),r("ul",U,[(c(!0),r(S,null,R(this.errorList,(l,C)=>(c(),r("li",{class:"mb-0 ms-3",key:C},g(l[0]),1))),128))])):N("",!0),e("div",x,[e("div",F,[e("div",k,[e("div",Y,[e("div",W,[n(e("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=l=>t.model.Cbss.NAME=l),class:"form-control",id:"officeLocation",placeholder:"Responsible Person",required:""},null,512),[[d,t.model.Cbss.NAME]]),G])])]),e("div",H,[e("div",K,[e("div",X,[n(e("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=l=>t.model.Cbss.REPONSIBLE_PERSON=l),class:"form-control",id:"responsiblePerson",placeholder:"Responsible Person"},null,512),[[d,t.model.Cbss.REPONSIBLE_PERSON]]),j])]),e("div",q,[e("div",z,[n(e("input",{type:"text","onUpdate:modelValue":s[2]||(s[2]=l=>t.model.Cbss.ADDRESS=l),class:"form-control",id:"address",placeholder:"Address"},null,512),[[d,t.model.Cbss.ADDRESS]]),J])]),e("div",Q,[e("div",Z,[n(e("input",{type:"number","onUpdate:modelValue":s[3]||(s[3]=l=>t.model.Cbss.AGE=l),class:"form-control",id:"age",placeholder:"Age"},null,512),[[d,t.model.Cbss.AGE]]),$])]),e("div",ee,[e("div",se,[n(e("select",{"onUpdate:modelValue":s[4]||(s[4]=l=>t.model.Cbss.SEX=l),class:"form-select centered-placeholder",id:"sex"},ne,512),[[a,t.model.Cbss.SEX]]),ie])]),e("div",de,[e("div",ae,[n(e("input",{type:"number","onUpdate:modelValue":s[5]||(s[5]=l=>t.model.Cbss.AMOUNT=l),class:"form-control",id:"amount",placeholder:"Amount"},null,512),[[d,t.model.Cbss.AMOUNT]]),ce])]),e("div",re,[e("div",_e,[n(e("select",{"onUpdate:modelValue":s[6]||(s[6]=l=>t.model.Cbss.CASE_CATEGORY=l),class:"form-select centered-placeholder",id:"caseCategory"},me,512),[[a,t.model.Cbss.CASE_CATEGORY]]),ue])]),e("div",be,[e("div",fe,[n(e("input",{type:"date","onUpdate:modelValue":s[7]||(s[7]=l=>t.model.Cbss.DATE=l),class:"form-control",id:"date",placeholder:"Date"},null,512),[[d,t.model.Cbss.DATE]]),Se])])]),e("div",Ee,[e("div",ve,[e("div",he,[n(e("select",{"onUpdate:modelValue":s[8]||(s[8]=l=>t.model.Cbss.MODE_OF_ADMISSION=l),class:"form-select centered-placeholder",id:"modeOfAdmission"},Ne,512),[[a,t.model.Cbss.MODE_OF_ADMISSION]]),ge])]),e("div",De,[e("div",Ie,[n(e("select",{"onUpdate:modelValue":s[9]||(s[9]=l=>t.model.Cbss.NON_MONETARY_SERVICES=l),class:"form-select centered-placeholder",id:"nonMonetaryServices"},Te,512),[[a,t.model.Cbss.NON_MONETARY_SERVICES]]),we])]),e("div",Ve,[e("div",Pe,[n(e("input",{type:"number","onUpdate:modelValue":s[10]||(s[10]=l=>t.model.Cbss.NUMBER_OF_SERVICES_AVAILED=l),class:"form-control",id:"numberOfServicesAvailed",placeholder:"Number of Services Availed"},null,512),[[d,t.model.Cbss.NUMBER_OF_SERVICES_AVAILED]]),Ue])]),e("div",xe,[e("div",Fe,[n(e("select",{"onUpdate:modelValue":s[11]||(s[11]=l=>t.model.Cbss.SUB_CATEGORY=l),class:"form-select centered-placeholder",id:"subCategory"},He,512),[[a,t.model.Cbss.SUB_CATEGORY]]),Ke])]),e("div",Xe,[e("div",je,[n(e("input",{type:"text","onUpdate:modelValue":s[12]||(s[12]=l=>t.model.Cbss.Purpose=l),class:"form-control",id:"purpose",placeholder:"Purpose"},null,512),[[d,t.model.Cbss.Purpose]]),qe])]),e("div",ze,[e("div",Je,[n(e("textarea",{style:{height:"120px"},"onUpdate:modelValue":s[13]||(s[13]=l=>t.model.Cbss.REMARKS=l),class:"form-control",id:"remarks",placeholder:"Remarks"},null,512),[[d,t.model.Cbss.REMARKS]]),Qe])])])])]),e("div",Ze,[_(m,{to:"/admincbss"},{default:E(()=>[$e]),_:1}),_(m,{to:"/admincbss"},{default:E(()=>[e("button",{onClick:s[14]||(s[14]=l=>v.updateCbss(i.$route.params.ID)),class:"btn btn-primary col-12"}," Save ")]),_:1})])])])],64)}const ts=A(y,[["render",es],["__scopeId","data-v-f4d2e1a0"]]);export{ts as default};
