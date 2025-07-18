/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Card, LinearProgress, Stack } from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import linearGradient from "assets/theme/functions/linearGradient";

// Vision UI Dashboard React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Dashboard layout components
import WelcomeMark from "layouts/dashboard/components/WelcomeMark";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";
import SatisfactionRate from "layouts/dashboard/components/SatisfactionRate";
import ReferralTracking from "layouts/dashboard/components/ReferralTracking";

// React icons
import { IoIosRocket } from "react-icons/io";
import { IoGlobe } from "react-icons/io5";
import { IoBuild } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

// Data
import LineChart from "examples/Charts/LineCharts/LineChart";
import BarChart from "examples/Charts/BarCharts/BarChart";
import { lineChartDataDashboard } from "layouts/dashboard/data/lineChartData";
import { lineChartOptionsDashboard } from "layouts/dashboard/data/lineChartOptions";
import { barChartDataDashboard } from "layouts/dashboard/data/barChartData";
import { barChartOptionsDashboard } from "layouts/dashboard/data/barChartOptions";

function Dashboard() {
  const { gradients } = colors;
  const { cardContent } = gradients;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>

<Grid container spacing={3}>
  {/* Brand Strategy */}
  <Grid item xs={12} md={6} xl={3}>
    <MiniStatisticsCard
      title={{ text: "Brand Awareness" }}
      count="68%"
      percentage={{ color: "success", text: "+4% vs last quarter" }}
      icon={{ color: "info", component: <IoGlobe size="22px" color="white" /> }}
    />
  </Grid>
  <Grid item xs={12} md={6} xl={3}>
    <MiniStatisticsCard
      title={{ text: "Brand Recall" }}
      count="52%"
      percentage={{ color: "success", text: "+6% vs last quarter" }}
      icon={{ color: "info", component: <IoDocumentText size="22px" color="white" /> }}
    />
  </Grid>
  <Grid item xs={12} md={6} xl={3}>
    <MiniStatisticsCard
      title={{ text: "Brand Perception" }}
      count="Positive"
      percentage={{ color: "success", text: "↑ Trust & Quality" }}
      icon={{ color: "info", component: <IoIosRocket size="22px" color="white" /> }}
    />
  </Grid>

  {/* Content Strategy */}
  <Grid item xs={12} md={6} xl={3}>
    <MiniStatisticsCard
      title={{ text: "Content Engagement" }}
      count="18%"
      percentage={{ color: "success", text: "+2% vs last month" }}
      icon={{ color: "info", component: <FaShoppingCart size="20px" color="white" /> }}
    />
  </Grid>
  <Grid item xs={12} md={6} xl={3}>
    <MiniStatisticsCard
      title={{ text: "Content Reach" }}
      count="15,000"
      percentage={{ color: "success", text: "+10% vs last month" }}
      icon={{ color: "info", component: <IoGlobe size="22px" color="white" /> }}
    />
  </Grid>
  <Grid item xs={12} md={6} xl={3}>
    <MiniStatisticsCard
      title={{ text: "Top Performing Content" }}
      count="Videos"
      percentage={{ color: "success", text: "↑ Engagement" }}
      icon={{ color: "info", component: <IoIosRocket size="22px" color="white" /> }}
    />
  </Grid>

  {/* Media Strategy */}
  <Grid item xs={12} md={6} xl={3}>
    <MiniStatisticsCard
      title={{ text: "Campaign Reach" }}
      count="25,000"
      percentage={{ color: "success", text: "+12% vs last campaign" }}
      icon={{ color: "info", component: <IoWallet size="22px" color="white" /> }}
    />
  </Grid>
  <Grid item xs={12} md={6} xl={3}>
    <MiniStatisticsCard
      title={{ text: "Impressions" }}
      count="120,000"
      percentage={{ color: "success", text: "+8% vs last campaign" }}
      icon={{ color: "info", component: <IoDocumentText size="22px" color="white" /> }}
    />
  </Grid>
  <Grid item xs={12} md={6} xl={3}>
    <MiniStatisticsCard
      title={{ text: "Share of Voice" }}
      count="32%"
      percentage={{ color: "success", text: "+5% vs competitors" }}
      icon={{ color: "info", component: <IoGlobe size="22px" color="white" /> }}
    />
  </Grid>

  {/* Budget Tracking */}
  <Grid item xs={12} md={6} xl={3}>
    <MiniStatisticsCard
      title={{ text: "Total Budget" }}
      count="$500,000"
      percentage={{ color: "info", text: "Allocated" }}
      icon={{ color: "info", component: <IoWallet size="22px" color="white" /> }}
    />
  </Grid>
  <Grid item xs={12} md={6} xl={3}>
    <MiniStatisticsCard
      title={{ text: "Budget Utilization" }}
      count="60%"
      percentage={{ color: "warning", text: "On Track" }}
      icon={{ color: "info", component: <IoBuild size="22px" color="white" /> }}
    />
  </Grid>
  <Grid item xs={12} md={6} xl={3}>
    <MiniStatisticsCard
      title={{ text: "Remaining Budget" }}
      count="$400,000"
      percentage={{ color: "info", text: "Available" }}
      icon={{ color: "info", component: <IoWallet size="22px" color="white" /> }}
    />
  </Grid>
  <Grid item xs={12} md={6} xl={3}>
    <MiniStatisticsCard
      title={{ text: "Budget Variance" }}
      count="-$10,000"
      percentage={{ color: "warning", text: "On Track" }}
      icon={{ color: "info", component: <IoDocumentText size="22px" color="white" /> }}
    />
  </Grid>

  {/* Workfront Project Tracking */}
  <Grid item xs={12} md={6} xl={3}>
    <MiniStatisticsCard
      title={{ text: "MRx Sales Toolkit" }}
      count="In Progress"
      percentage={{ color: "warning", text: "75% complete" }}
      icon={{ color: "info", component: <IoIosRocket size="22px" color="white" /> }}
    />
  </Grid>
  <Grid item xs={12} md={6} xl={3}>
    <MiniStatisticsCard
      title={{ text: "MH 340B Coalition summer" }}
      count="Completed"
      percentage={{ color: "success", text: "100% complete" }}
      icon={{ color: "info", component: <IoDocumentText size="22px" color="white" /> }}
    />
  </Grid>
  <Grid item xs={12} md={6} xl={3}>
    <MiniStatisticsCard
      title={{ text: "QTR Q2" }}
      count="In Progress"
      percentage={{ color: "warning", text: "20% complete" }}
      icon={{ color: "info", component: <IoBuild size="22px" color="white" /> }}
    />
  </Grid>
</Grid>

        <VuiBox mb={3}>
          <Grid container spacing="18px">
            <Grid item xs={12} lg={12} xl={5}>
              <WelcomeMark />
            </Grid>
            <Grid item xs={12} lg={6} xl={3}>
              <SatisfactionRate />
            </Grid>
            <Grid item xs={12} lg={6} xl={4}>
              <ReferralTracking />
            </Grid>
          </Grid>
        </VuiBox>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6} xl={7}>
              <Card>
                <VuiBox sx={{ height: "100%" }}>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    Sales Overview
                  </VuiTypography>
                  <VuiBox display="flex" alignItems="center" mb="40px">
                    <VuiTypography variant="button" color="success" fontWeight="bold">
                      +5% more{" "}
                      <VuiTypography variant="button" color="text" fontWeight="regular">
                        in 2021
                      </VuiTypography>
                    </VuiTypography>
                  </VuiBox>
                  <VuiBox sx={{ height: "310px" }}>
                    <LineChart
                      lineChartData={lineChartDataDashboard}
                      lineChartOptions={lineChartOptionsDashboard}
                    />
                  </VuiBox>
                </VuiBox>
              </Card>
            </Grid>
            <Grid item xs={12} lg={6} xl={5}>
              <Card>
                <VuiBox>
                  <VuiBox
                    mb="24px"
                    height="220px"
                    sx={{
                      background: linearGradient(
                        cardContent.main,
                        cardContent.state,
                        cardContent.deg
                      ),
                      borderRadius: "20px",
                    }}
                  >
                    <BarChart
                      barChartData={barChartDataDashboard}
                      barChartOptions={barChartOptionsDashboard}
                    />
                  </VuiBox>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    Active Users
                  </VuiTypography>
                  <VuiBox display="flex" alignItems="center" mb="40px">
                    <VuiTypography variant="button" color="success" fontWeight="bold">
                      (+23){" "}
                      <VuiTypography variant="button" color="text" fontWeight="regular">
                        than last week
                      </VuiTypography>
                    </VuiTypography>
                  </VuiBox>
                  <Grid container spacing="50px">
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <IoWallet color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Users
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        32,984
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <IoIosRocket color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Clicks
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        2,42M
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <FaShoppingCart color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Sales
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        2,400$
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <IoBuild color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Items
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        320
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                  </Grid>
                </VuiBox>
              </Card>
            </Grid>
          </Grid>
        </VuiBox>
        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="stretch">
          <Grid item xs={12} md={6} lg={8}>
            <Projects />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OrderOverview />
          </Grid>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
