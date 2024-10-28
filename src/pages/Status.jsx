import { useState } from "react";
import "./Status.css";
import Backlog from "../asset/icons_FEtask/Backlog.svg";
import Todo from "../asset/icons_FEtask/To-do.svg";
import Progress from "../asset/icons_FEtask/in-progress.svg";
import Done from "../asset/icons_FEtask/Done.svg";
import Cancelled from "../asset/icons_FEtask/Cancelled.svg";
import Plus from '../asset/icons_FEtask/add.svg';
import dotMenuSymbol from '../asset/icons_FEtask/3 dot menu.svg';
import DP from "./DP";

const Status = ({ data, order }) => {
  const [tickets, setTickets] = useState(data.tickets);

  // Group tickets by status
  const ticketGroupWithStatus = (status) => {
    let Filtered = tickets.filter((ticket) => ticket.status === status);

    if (order === "Priority") {
      // Assuming 'priority' is a numeric field
      return Filtered.sort((a, b) => b.priority - a.priority); // Descending order
    } else if (order === "Title") {
      return Filtered.sort((a, b) => a.title.localeCompare(b.title)); // Ascending order
    }

    return Filtered;
  };

  // Render a column for each status
  const renderTicketCol = (status, columnTitle) => {
    const groupedTickets = ticketGroupWithStatus(status);
    return (
      <div className="ticket-column">
        <h3 className="column-top">
          <div className="column-title">
          <div className="column-icon">
              {columnTitle === "Backlog" && <img src={Backlog} alt="img" />}
              {columnTitle === "Todo" && <img src={Todo} alt="img" />}
              {columnTitle === "In Progress" && <img src={Progress} alt="img" />}
              {columnTitle === "Completed" && <img src={Done} alt="img" />}
              {columnTitle === "Cancelled" && <img src={Cancelled} alt="img" />}
            </div>
          <div>{columnTitle}</div>
          <div className="ticket-length"> {groupedTickets.length}</div>
          </div>
          <div className="column-right">
            <div>{<img src={Plus} alt="img" />}</div>
            <div>{<img src={dotMenuSymbol} alt="img" />}</div>
          </div>
        </h3>{" "}
        {groupedTickets.map((ticket) => (
          <div key={ticket.id} className="ticket-card">
            <div className="card-header">
              <div className="ticket-icon">
                <div>
                  <div>{ticket.id}</div>
                  <h4>{ticket.title}</h4>
                </div>
                <div className="avatar">
                  {/* Replace with an actual image if available */}
                  <img
                    src={`https://via.placeholder.com/30x30?text=${ticket.userId}`}
                    alt="User"
                  />
                </div>
              </div>
            </div>
            <div className="cards">
            <div className="card-feature"><img src={dotMenuSymbol} alt="img" /></div>
            <div className="card-feature">Feature Request</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="ticket-board">
      {renderTicketCol("Backlog", "Backlog")}
      {renderTicketCol("Todo", "Todo")}
      {renderTicketCol("In progress", "In Progress")}
      {renderTicketCol("Completed", "Completed")}
      {renderTicketCol("Cancelled", "Cancelled")}
    </div>
  );
};

export default Status;
