<template>
  <Sidebar :iconText="PageTitle" :iconDetails="PageDetail" />

  <br /><br /><br /><br />

  <div class="stacked-rectangle col-12 col-md-3">
    <div class="shadow3">
      <div class="rectangle" style="background-color: #ff4040">
        <div class="label">POOR</div>
        <div class="number"><b>282</b></div>
      </div>
      <div class="rectangle" style="background-color: #4e91fd">
        <div class="label">NON-POOR</div>
        <div class="number"><b>224</b></div>
      </div>
      <div class="rectangle" style="background-color: #eeb600">
        <div class="label">NO MATCH</div>
        <div class="number"><b>202</b></div>
      </div>
    </div>
  </div>

  <!-- 
  <div class="col-12 col-md-9">
    <div class="shadow1">
      <br />
      <div
        class="d-flex justify-content-around"
        style="
          margin-left: 40px;
          margin-right: 40px;
          margin-bottom: 40px;
          background-color: #133f5c;
          color: white;
          padding: 8px;
          text-align: center;
          border-radius: 5px;
        "
      >
        <h5 class="fw-bold">PROVINCE</h5>
        <h5 class="fw-bold">CITY/MUNICIPALITY</h5>
        <h5 class="fw-bold">BARANGAY</h5>
        <h5 class="fw-bold">RECORD COUNT</h5>
      </div>

      <hr class="SLPPA" />
      <div class="d-flex justify-content-around">
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
      </div>

      <hr class="SLPPA" />
      <div class="d-flex justify-content-around">
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
      </div>

      <hr class="SLPPA" />
      <div class="d-flex justify-content-around">
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
      </div>

      <hr class="SLPPA" />
      <div class="d-flex justify-content-around">
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
      </div>

      <hr class="SLPPA" />
      <div class="d-flex justify-content-around">
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
      </div>
    </div>
  </div> -->

  <!-- Revamp -->

  <div class="col-12 col-md-9">
    <div class="shadow3">
      <div class="inside" style="padding: 10px">
        <DataTable
          id="table"
          :paging="true"
          :searching="true"
          :info="true"
          :responsive="true"
          :length-change="true"
          :length-menu="[10, 25, 50, 100]"
          :language="{
            paginate: {
              previous: '<i class=\'fas fa-angle-left\'></i>',
              next: '<i class=\'fas fa-angle-right\'></i>',
            },
          }"
        >
          <thead style="background: #133f5c" class="text-white">
            <tr>
              <th>MODALITY</th>
              <th>TOTAL PROJECT COST FROM DSWD</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>No Data Available</td>
              <td>No Data Available</td>
              <td>No Data Available</td>
            </tr>
          </tbody>
        </DataTable>
      </div>
    </div>
  </div>

  <div class="col-12 col-md-12">
    <div class="shadow2 forbarchart">
      <br />
      <h5 class="fw-bold">STATUS BY MUNICIPALITY</h5>
      <br />
      <div class="Barchart1"><StackBarChart :data="CostData" /></div>
    </div>
  </div>

  <!-- <Footer /> -->
</template>

<script>
import axios from "axios";
import { backendURL } from "@/config.js";
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer";
import BarChart from "@/components/ChartJS/Barchart";
import PieChart from "@/components/ChartJS/PieChart";
import DoughnutChart from "@/components/ChartJS/DoughnutChart";
import HBarChart from "@/components/ChartJS/HBarchart";
import StackBarChart from "@/components/ChartJS/StackBarchart";
import HStackBarChart from "@/components/ChartJS/HStackBarchart";

import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
import "datatables.net-responsive";
DataTable.use(DataTablesCore);

export default {
  // name: "SLPSNM",
  name: "SLPSNM",

  components: {
    Sidebar,
    Footer,
    BarChart,
    PieChart,
    HBarChart,
    DoughnutChart,
    StackBarChart,
    HStackBarChart,
    DataTable,
  },

  data() {
    return {
      PageTitle: "Sustainable Livelihood Program",
      PageDetail: "Status Name Matching",
      CostData: {
        labels: [
          "Padada",
          "Magsaysay",
          "Manay",
          "Cateel",
          "Caraga",
          "Governor",
          "City of Mati",
          "Sta.Cruz",
          "Sulop",
          "Baganga",
          "Maragusan",
          "Laak",
          "Digos",
          "Tarragona",
          "San Isidro",
        ],
        datasets: [
          {
            label: "POOR",
            values: [
              89, 56, 12, 45, 90, 34, 67, 90, 23, 87, 54, 10, 89, 23, 56,
            ],
            backgroundColor: ["#FF4040"],
          },
          {
            label: "NON-POOR",
            values: [
              45, 78, 12, 67, 89, 23, 90, 12, 34, 56, 78, 90, 54, 32, 67,
            ],
            backgroundColor: ["#4E91FD"],
          },
          {
            label: "NO MATCH",
            values: [
              23, 76, 12, 89, 56, 43, 87, 12, 56, 89, 34, 67, 90, 45, 89,
            ],
            backgroundColor: ["#EEB600"],
          },
        ],
      },
    };
  },

  methods: {
    // inserted data for month
  },

  mounted() {},
};
</script>

<style scoped>
.shadow1 {
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.15);
  height: 480px;
  margin: 5px 5px 5px 5px;
  padding: 10px 0px 10px 0px;
}
.shadow2 {
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.15);
  height: 350px;
  margin: 5px 5px 5px 5px;
  padding: 10px 0px 10px 0px;
}

/* copy */
.shadow3 {
  height: 480px;
  border-radius: 20px;
  /*margin: 10px 15px 10px 20px;
  padding: 10px 0px 10px 0px;*/
}

.forbarchart {
  height: 250px;
  @media only screen and (min-width: 500px) {
    height: 350px;
  }
  @media only screen and (min-width: 720px) {
    height: 600px;
  }
}

.Barchart1 {
  height: 480px;
}

/* CSS FOR DATA SUMMARY */

.row {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.label {
  width: 200px;
  text-align: right;
  font-weight: bold;
}

.number {
  width: 100px;
  text-align: left;
}

/* css */

.stacked-rectangle {
  justify-content: space-between;
}

.stacked-rectangle .col-12.col-md-4 {
  width: 20%;
}

.stacked-rectangle .shadow2 {
  background: transparent;
}

.rectangle {
  padding: 10px;
  margin: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30%;
}

.rectangle .label {
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.rectangle .number {
  font-size: 40px;
  text-align: center;
}
</style>
