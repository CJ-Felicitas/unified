/**
 * Vue component for displaying the SWDA_VIEW.
 * This component renders the details of a user's SWDA (Social Welfare and Development Agency).
 * It includes information such as agency details, contact information, contact person, registration status, accreditation status, license status, programs and services, and status.
 * The data is fetched from the model object.
 *
 * @component SWDA_VIEW
 * @example
 * <SWDA_VIEW />
 */
<template>
  <div>
    <Sidebar :iconText="PageTitle" />
    <br /><br /><br /><br /><br />
    <div class="container-fluid wrapper">
      <div class="col-12 col-md-12">
        <div class="col-12">
          <p class="agencyHeader text-center">Agency</p>
          <p
            class="agencyContent text-center"
            v-if="model.Swda && model.Swda.Agency"
          >
            {{ model.Swda.Agency }}
          </p>
          <p v-else class="agencyContent error">No Data</p>
          <hr class="hr" />
        </div>

        <!-- 1ST COLUMN -->
        <div class="col-6 columns">
          <div class="col-12">
            <p class="agencyHeader">Former Name</p>
            <p
              class="agencyContent"
              v-if="model.Swda && model.Swda.Former_Name"
            >
              {{ model.Swda.Former_Name }}
            </p>
            <p v-else class="agencyContent error">No Data</p>
          </div>
          <div class="col-12">
            <div class="col-4">
              <p class="agencyHeader">Sector</p>
              <p class="agencyContent" v-if="model.Swda && model.Swda.Sector">
                {{ model.Swda.Sector }}
              </p>
              <p v-else class="agencyContent error">No Data</p>
            </div>
            <div class="col-4">
              <p class="agencyHeader">Cluster</p>
              <p class="agencyContent" v-if="model.Swda && model.Swda.Cluster">
                {{ model.Swda.Cluster }}
              </p>
              <p v-else class="agencyContent error">No Data</p>
            </div>
            <div class="col-4">
              <p class="agencyHeader">Type</p>
              <p class="agencyContent" v-if="model.Swda && model.Swda.Type">
                {{ model.Swda.Type }}
              </p>
              <p v-else class="agencyContent error">No Data</p>
            </div>
          </div>

          <div class="col-12">
            <hr class="hr" />
            <p class="agencyHead">CONTACT INFORMATION</p>

            <p class="agencyHeader">Address</p>
            <p v-if="model.Swda && model.Swda.Address" class="agencyContent">
              {{ model.Swda.Address }}
            </p>
            <p v-else class="agencyContent error">No Data</p>

            <p class="agencyHeader">Contact Number</p>
            <p
              v-if="model.Swda && model.Swda.Contact_Number"
              class="agencyContent"
            >
              {{ model.Swda.Contact_Number }}
            </p>

            <p v-else class="agencyContent error">No Data</p>

            <p class="agencyHeader">Email</p>
            <p v-if="model.Swda && model.Swda.Email" class="agencyContent">
              {{ model.Swda.Email }}
            </p>

            <p v-else class="agencyContent error">No Data</p>

            <p class="agencyHeader">Website</p>
            <p v-if="model.Swda && model.Swda.Website" class="agencyContent">
              {{ model.Swda.Website }}
            </p>

            <p v-else class="agencyContent error">No Data</p>

            <hr class="hr" />

            <p class="agencyHead">CONTACT PERSON</p>

            <p class="agencyHeader">Name</p>
            <p
              v-if="
                model.Swda &&
                model.Swda.Contact_Person &&
                model.Swda.Contact_Person !== 'null'
              "
              class="agencyContent"
            >
              {{ model.Swda.Contact_Person }}
            </p>
            <p v-else class="agencyContent error">No Data</p>

            <p class="agencyHeader">Position</p>
            <p
              v-if="
                model.Swda &&
                model.Swda.Position &&
                model.Swda.Position !== 'null'
              "
              class="agencyContent"
            >
              {{ model.Swda.Position }}
            </p>
            <p v-else class="agencyContent error">No Data</p>

            <p class="agencyHeader">Contact Number</p>
            <p
              v-if="
                model.Swda &&
                model.Swda.Mobile_Number &&
                model.Swda.Mobile_Number !== 'null'
              "
              class="agencyContent"
            >
              {{ model.Swda.Mobile_Number }}
            </p>

            <p v-else class="agencyContent error">No Data</p>
          </div>
        </div>
        <!-- 2ND COLUMN -->
        <div class="col-6 columns">
          <div class="col-12">
            <div class="col-6">
              <p class="agencyHeader">Registration Status</p>
              <p
                style="color: red"
                v-if="
                  model.Swda &&
                  model.Swda.Registration_Status &&
                  model.Swda.Registration_Status === 'Expired'
                "
                class="agencyContent"
              >
                {{ model.Swda.Registration_Status }}
              </p>

              <p
                style="color: green"
                v-else-if="
                  model.Swda &&
                  model.Swda.Registration_Status &&
                  model.Swda.Registration_Status === 'Active/Valid'
                "
                class="agencyContent"
              >
                {{ model.Swda.Registration_Status }}
              </p>

              <p v-else class="agencyContent error">No Data</p>

              <p class="agencyHeader">Accreditation Status</p>
              <p
                style="color: red"
                v-if="
                  model.Swda &&
                  model.Swda.Accreditation_Status &&
                  model.Swda.Accreditation_Status === 'Expired'
                "
                class="agencyContent"
              >
                {{ model.Swda.Accreditation_Status }}
              </p>
              <p
                style="color: green"
                v-else-if="
                  model.Swda &&
                  model.Swda.Accreditation_Status &&
                  model.Swda.Accreditation_Status === 'Active/Valid'
                "
                class="agencyContent"
              >
                {{ model.Swda.Accreditation_Status }}
              </p>

              <p v-else class="agencyContent error">No Data</p>
            </div>
            <div class="col-6">
              <p class="agencyHeader">License Status</p>
              <p
                style="color: red"
                v-if="
                  model.Swda &&
                  model.Swda.License_Status &&
                  model.Swda.License_Status === 'Expired'
                "
                class="agencyContent"
              >
                {{ model.Swda.License_Status }}
              </p>
              <p
                style="color: green"
                v-else-if="
                  model.Swda &&
                  model.Swda.License_Status &&
                  model.Swda.License_Status === 'Active/Valid'
                "
                class="agencyContent"
              >
                {{ model.Swda.License_Status }}
              </p>
              <p v-else class="agencyContent error">No Data</p>
            </div>
          </div>
          <div class="col-12">
            <hr class="hr" />
            <p class="agencyHead">PROGRAMS AND SERVICES</p>
            <p class="agencyHeader">Services Offered</p>
            <p
              class="agencyContent"
              v-if="model.Swda && model.Swda.Services_Offered"
            >
              {{ model.Swda.Services_Offered }}
            </p>

            <p v-else class="agencyContent error">No Data</p>
          </div>
          <div class="col-12">
            <div class="col-6">
              <p class="agencyHeader">Clientele</p>
              <p
                class="agencyContent"
                v-if="model.Swda && model.Swda.Clientele"
              >
                {{ model.Swda.Clientele }}
              </p>
              <p v-else class="agencyContent error">No Data</p>
            </div>
            <div class="col-6">
              <p class="agencyHeader">Mode of Delivery</p>
              <p
                class="agencyContent"
                v-if="model.Swda && model.Swda.Mode_of_Delivery"
              >
                {{ model.Swda.Mode_of_Delivery }}
              </p>
              <p v-else class="agencyContent error">No Data</p>
            </div>
          </div>
          <div class="col-12">
            <p class="agencyHeader">Specified Areas of Operation</p>
            <p
              class="agencyContent"
              v-if="model.Swda && model.Swda.Specified_Areas_of_Operation"
            >
              {{ model.Swda.Specified_Areas_of_Operation }}
            </p>
            <p v-else class="agencyContent error">No Data</p>
          </div>
          <div class="col-12">
            <hr class="hr" />
            <p class="agencyHead">STATUS</p>
            <div class="col-12">
              <div class="col-3">
                <p class="agencyHeader">Registration ID</p>
                <p
                  class="agencyContent"
                  v-if="model.Swda && model.Swda.Registration_ID"
                >
                  {{ model.Swda.Registration_ID }}
                </p>
                <p v-else class="agencyContent error">No Data</p>
              </div>
              <div class="col-3">
                <p class="agencyHeader">Date Issued</p>
                <p
                  class="agencyContent"
                  v-if="model.Swda && model.Swda.Registration_Date"
                >
                  {{ model.Swda.Registration_Date }}
                </p>
                <p v-else class="agencyContent error">No Data</p>
              </div>
              <div class="col-3">
                <p class="agencyHeader">Expiration Date</p>
                <p
                  class="agencyContent"
                  v-if="model.Swda && model.Swda.Registration_Expiration"
                >
                  {{ model.Swda.Registration_Expiration }}
                </p>
                <p v-else class="agencyContent error">No Data</p>
              </div>
              <div class="col-3">
                <p class="agencyHeader">Remarks</p>
                <p
                  class="agencyContent"
                  v-if="model.Swda && model.Swda.Remarks"
                >
                  {{ model.Swda.Remarks }}
                </p>
                <p v-else class="agencyContent error">No Data</p>
              </div>
            </div>
            <div class="col-12">
              <div class="col-3">
                <p class="agencyHeader">License ID</p>
                <p
                  class="agencyContent"
                  v-if="model.Swda && model.Swda.Licensed_ID"
                >
                  {{ model.Swda.Licensed_ID }}
                </p>
                <p v-else class="agencyContent error">No Data</p>
              </div>
              <div class="col-3">
                <p class="agencyHeader">Date Issued</p>
                <p
                  class="agencyContent"
                  v-if="model.Swda && model.Swda.License_Date_Issued"
                >
                  {{ model.Swda.License_Date_Issued }}
                </p>
                <p v-else class="agencyContent error">No Data</p>
              </div>
              <div class="col-3">
                <p class="agencyHeader">Expiration Date</p>
                <p
                  class="agencyContent"
                  v-if="model.Swda && model.Swda.License_Expiration"
                >
                  {{ model.Swda.License_Expiration }}
                </p>
                <p v-else class="agencyContent error">No Data</p>
              </div>
              <div class="col-3">
                <p class="agencyHeader">Overdue</p>
                <p
                  class="agencyContent"
                  v-if="model.Swda && model.Swda.Licensure_Overdue"
                >
                  {{ model.Swda.Licensure_Overdue }}
                </p>
                <p v-else class="agencyContent error">No Data</p>
              </div>
            </div>
            <div class="col-12">
              <div class="col-3">
                <p class="agencyHeader">Accreditation ID</p>
                <p
                  class="agencyContent"
                  v-if="model.Swda && model.Swda.Accreditation_ID"
                >
                  {{ model.Swda.Accreditation_ID }}
                </p>
                <p v-else class="agencyContent error">No Data</p>
              </div>
              <div class="col-3">
                <p class="agencyHeader">Date Issued</p>
                <p
                  class="agencyContent"
                  v-if="model.Swda && model.Swda.Accreditation_Date_Issued"
                >
                  {{ model.Swda.Accreditation_Date_Issued }}
                </p>
                <p v-else class="agencyContent error">No Data</p>
              </div>
              <div class="col-3">
                <p class="agencyHeader">Expiration Date</p>
                <p
                  class="agencyContent"
                  v-if="model.Swda && model.Swda.Accreditation_Expiration"
                >
                  {{ model.Swda.Accreditation_Expiration }}
                </p>
                <p v-else class="agencyContent error">No Data</p>
              </div>
              <div class="col-3">
                <p class="agencyHeader">Overdue</p>
                <p
                  class="agencyContent"
                  v-if="model.Swda && model.Swda.Accreditation_Overdue"
                >
                  {{ model.Swda.Accreditation_Overdue }}
                </p>
                <p v-else class="agencyContent error">No Data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import axios from "axios"; // Import Axios

export default {
  name: "SWDAView",
  components: {
    Sidebar,
  },
  data() {
    return {
      PageTitle: "SWDA VIEW",

      model: {
        Swda: {
          Type: "",
          Sector: "",
          Cluster: "",
          Agency: "",
          Address: "",
          Former_Name: "",
          Contact_Number: "",
          Fax: "",
          Email: "",
          Website: "",
          Contact_Person: "",
          Position: "",
          Mobile_Number: "",
          Registered: "",
          Licensed: "",
          Accredited: "",
          Services_Offered: "",
          Simplified_Services: "",
          Area_of_Operation: "",
          Regional_Operation: "",
          Specified_Areas_of_Operation: "",
          Mode_of_Delivery: "",
          Clientele: "",
          Registration_ID: "",
          Registration_Date: "",
          Registration_Expiration: "",
          Registration_Status: "",
          Licensed_ID: "",
          License_Date_Issued: "",
          License_Expiration: "",
          License_Status: "",
          Accreditation_ID: "",
          Accreditation_Date_Issued: "",
          Accreditation_Expiration: "",
          Accreditation_Status: "",
          Remarks: "",
          License_Days_Left: "",
          Licensure_Overdue: "",
          Accreditation_Days_Left: "",
          Accreditation_Overdue: "",
        },
      },
    };
  },
  mounted() {
    this.SwdaID = this.$route.params.ID;
    this.SwdaData(this.SwdaID);
  },
  methods: {
    // SwdaData(SwdaID) {
    //   axios
    //     .get(`http://127.0.0.1:8000/api/swdalist/${SwdaID}/edit`)

    //     .then((res) => {
    //       const swdaData = res.data.Swda;
    //       console.log(res.data.Swda);

    //       this.model.Swda.Type = swdaData.Type;
    //       this.model.Swda.Sector = swdaData.Sector;
    //       this.model.Swda.Cluster = swdaData.Cluster;
    //       this.model.Swda.Agency = swdaData.Agency;
    //       this.model.Swda.Address = swdaData.Address;
    //       this.model.Swda.Former_Name = swdaData.Former_Name;
    //       this.model.Swda.Contact_Number = swdaData.Contact_Number;
    //       this.model.Swda.Fax = swdaData.Fax;
    //       this.model.Swda.Email = swdaData.Email;
    //       this.model.Swda.Website = swdaData.Website;
    //       this.model.Swda.Contact_Person = swdaData.Contact_Person;
    //       this.model.Swda.Position = swdaData.Position;
    //       this.model.Swda.Mobile_Number = swdaData.Mobile_Number;
    //       this.model.Swda.Registered = swdaData.Registered;
    //       this.model.Swda.Licensed = swdaData.Licensed;
    //       this.model.Swda.Accredited = swdaData.Accredited;
    //       this.model.Swda.Services_Offered = swdaData.Services_Offered;
    //       this.model.Swda.Simplified_Services = swdaData.Simplified_Services;
    //       this.model.Swda.Area_of_Operation = swdaData.Area_of_Operation;
    //       this.model.Swda.Regional_Operation = swdaData.Regional_Operation;
    //       this.model.Swda.Specified_Areas_of_Operation =
    //         swdaData.Specified_Areas_of_Operation;
    //       this.model.Swda.Mode_of_Delivery = swdaData.Mode_of_Delivery;
    //       this.model.Swda.Clientele = swdaData.Clientele;
    //       this.model.Swda.Registration_ID = swdaData.Registration_ID;
    //       this.model.Swda.Registration_Date = swdaData.Registration_Date;
    //       this.model.Swda.Registration_Expiration =
    //         swdaData.Registration_Expiration;
    //       this.model.Swda.Registration_Status = swdaData.Registration_Status;
    //       this.model.Swda.Licensed_ID = swdaData.Licensed_ID;
    //       this.model.Swda.License_Date_Issued = swdaData.License_Date_Issued;
    //       this.model.Swda.License_Expiration = swdaData.License_Expiration;
    //       this.model.Swda.License_Status = swdaData.License_Status;
    //       this.model.Swda.Accreditation_ID = swdaData.Accreditation_ID;
    //       this.model.Swda.Accreditation_Date_Issued =
    //         swdaData.Accreditation_Date_Issued;
    //       this.model.Swda.Accreditation_Expiration =
    //         swdaData.Accreditation_Expiration;
    //       this.model.Swda.Accreditation_Status = swdaData.Accreditation_Status;
    //       this.model.Swda.Remarks = swdaData.Remarks;
    //       this.model.Swda.License_Days_Left = swdaData.License_Days_Left;
    //       this.model.Swda.Licensure_Overdue = swdaData.Licensure_Overdue;
    //       this.model.Swda.Accreditation_Days_Left =
    //         swdaData.Accreditation_Days_Left;
    //       this.model.Swda.Accreditation_Overdue =
    //         swdaData.Accreditation_Overdue;
    //     })
    //     .catch(function (error) {
    //       if (error.response) {
    //         if (error.response.status === 404) {
    //           alert(error.response.data.message);
    //         }
    //       }
    //     });
    // },

    SwdaData(SwdaID) {
      axios
        .get(`http://127.0.0.1:8000/api/swdalist/${SwdaID}/edit`)
        .then((res) => {
          const swdaData = res.data.Swda;
          console.log(res.data.Swda);

          // Check if swdaData is null or empty
          if (!swdaData || Object.keys(swdaData).length === 0) {
            for (const key in this.model.Swda) {
              this.model.Swda[key] = "No Data";
            }
          } else {
            // Assign values from swdaData to this.model.Swda
            for (const key in swdaData) {
              this.model.Swda[key] = swdaData[key];
            }
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            alert(error.response.data.message);
          }
        });
    },
  },
};
</script>

<style scoped>
.columns {
  padding: 0px 20px 0px 20px;
}
.AgencyTitle {
  font-family: Inter;
  font-size: 22px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
}

.agencyHeader {
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
}

.agencyHead {
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
}

.agencyContent {
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
}
.error {
  color: red;
}
</style>