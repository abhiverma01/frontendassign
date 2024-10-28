import './App.css';
import DropdownMenu from './pages/DropdownMenu';
import { Dropdown, Button, Spin } from "antd";
import { useEffect, useState } from "react";
import down from './asset/icons_FEtask/down.svg';
import display from './asset/icons_FEtask/Display.svg';
import axios from "axios";
import Status from './pages/Status';
import Priority from './pages/Priority';
import User from './pages/User';
const BaseURL = "https://api.quicksell.co/v1/internal/frontend-assignment";
function App() {
  const [group, setGroup] = useState(
    localStorage.getItem("group") || "Status"
  );
  const [order, setOrder] = useState(
    localStorage.getItem("order") || "Priority"
  );
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    setLoading(true); // Start loading before fetching data
    try {
      const response = await axios.get(BaseURL);
      setData(response?.data);
      console.log("abhi",data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const GroupHandler = (value) => {
    setGroup(value);
    localStorage.setItem("group", value); // Save grouping choice to localStorage
  };

  const OrderHandler = (value) => {
    setOrder(value);
    localStorage.setItem("order", value); // Save ordering choice to localStorage
  };
  const dropdownContent = (
    <DropdownMenu
      group={group}
      order={order}
      onGroupingChange={GroupHandler}
      onOrderingChange={OrderHandler}
    />
  );
  return (
     <div style={{padding:"20px"}}>
      <Dropdown overlay={dropdownContent} trigger={["click"]}>
        <button style={{padding:"5px",backgroundColor:"white",cursor:"pointer",border:"none",boxShadow:"1px 1px 2px #888888",borderRadius:"2px"}} >
        <div style={{display:"flex",gap:"10px",alignItems:"center",justifyContent:"center"}}>
          <div> <img src={display}/></div>
          <div>Display</div>
          <div> <img src={down}/></div>
        </div>
        </button>
      </Dropdown>
      <div
        style={{
          padding: "1px",
          marginTop: "20px",
          marginLeft: "-20px",
          marginRight: "-20px",orderBottom: "1px solid #f0f0f0",
        }}
      >
        <div
          style={{
            backgroundColor: "#f4f4fc",
          }}
        >
          {/* Show loading spinner while fetching data */}
          {loading && (
            <div style={{ textAlign: "center", padding: "20px" }}>
              <Spin size="large" /> {/* Ant Design loading spinner */}
            </div>
          )}
          {!loading && group === "Status" && <Status data={data} order={order} />}
          {!loading && group === "User" && <User data={data} order={order} />}
          {!loading && group === "Priority" && <Priority data={data} order={order} />}
        </div>
      </div>
     </div>

     
  );
}

export default App;
