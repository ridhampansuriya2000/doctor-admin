import React, { useRef, useEffect, useState } from "react";
import Super_admin_widget from "./Super_admin_widget";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import { Dropdown } from "react-bootstrap";
import { FaChartBar, FaChartLine } from "react-icons/fa";

interface SuperAdminDashboardProps {}

const Super_admin_dashboard: React.FC<SuperAdminDashboardProps> = () => {
  const chartData: any = [
    { name: "January", Revenue: 65 },
    { name: "February", Revenue: 59 },
    { name: "March", Revenue: 80 },
    { name: "April", Revenue: 81 },
    { name: "May", Revenue: 56 },
    { name: "June", Revenue: 55 },
    { name: "July", Revenue: 40 },
  ];

  // Ref to the chart container element
  const chartContainerRef = useRef<HTMLDivElement>(null);

  // State to hold the dynamically calculated width
  const [chartWidth, setChartWidth] = useState<number>(0);

  // State to track the chart type
  const [isLineChart, setIsLineChart] = useState<boolean>(true);

  // Update chart width on mount and window resize
  useEffect(() => {
    const updateChartWidth = () => {
      if (chartContainerRef.current) {
        setChartWidth(chartContainerRef.current.offsetWidth);
      }
    };

    updateChartWidth();
    window.addEventListener("resize", updateChartWidth);

    return () => {
      window.removeEventListener("resize", updateChartWidth);
    };
  }, []);

  // Function to toggle chart type
  const toggleChartType = () => {
    setIsLineChart((prev) => !prev);
  };

  return (
    <div>
      <Super_admin_widget />
      <div className="row mt-4">
        <div className="col-lg-12 col-xl-3 col-md-12 col-sm-12">
          <h1 className="title_sm">Income Overview</h1>
        </div>
        <div className="col-lg-6 col-xl-4 col-md-6 col-sm-6 ms-auto ">
          <div className="form-group mb-3 d-flex">
            <a
              href="#"
              className="btn btn-icon btn-primary me-5 chart_btn"
              title="Switch Chart"
              onClick={toggleChartType}
            >
              <span className="m-0 text-center" id="changeChart">
                {isLineChart ? (
                  <FaChartBar className="chart" />
                ) : (
                  <FaChartLine className="chart" />
                )}
              </span>
            </a>
            <div className="date__picker">
              <Dropdown>
                <Dropdown.Toggle
                  className="btn-icon ps-3 pe-2"
                  title="Switch Chart"
                >
                  <input type="text" name="" id="" value={"12/05/2024 - 12/05/2024"} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Action</Dropdown.Item>
                  <Dropdown.Item>Another action</Dropdown.Item>
                  <Dropdown.Item>Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
      <div ref={chartContainerRef} className="line_chart">
        {isLineChart ? (
          <LineChart width={chartWidth} height={500} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Revenue" stroke="#8884d8" />
          </LineChart>
        ) : (
          <BarChart width={chartWidth} height={500} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Revenue" fill="#8884d8" />
          </BarChart>
        )}
      </div>
    </div>
  );
};

export default Super_admin_dashboard;
