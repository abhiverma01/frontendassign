import { useState } from "react";
import HighPriority from '../asset/icons_FEtask/Img - High Priority.svg';
import MediumPriority from '../asset/icons_FEtask/Img - Medium Priority.svg';
import LowPriority from "../asset/icons_FEtask/Img - Low Priority.svg";
import UrgentPriority from "../asset/icons_FEtask/SVG - Urgent Priority colour.svg";
import NoPriority from "../asset/icons_FEtask/No-priority.svg";
import Plus from '../asset/icons_FEtask/add.svg';
import dotMenuSymbol from '../asset/icons_FEtask/3 dot menu.svg';

const Priority=({order,data})=>
{
    const [tickets, setTickets] = useState(data.tickets);

  
  const priorityLabels = {
    4: "Urgent",
    3: "High",
    2: "Medium",
    1: "Low",
    0: "No priority",
  };

  
  const TicketGroupWithPriority = (priority) => {
    let Filtered = tickets.filter(
      (ticket) => ticket.priority === priority
    );

    if (order === "Priority") {
      return Filtered.sort((a, b) => b.priority - a.priority); // Descending order
    } else if (order === "Title") {
      return Filtered.sort((a, b) => a.title.localeCompare(b.title)); // Ascending order
    }

    return Filtered;
  };

  
  const renderTicketCol = (priority) => {
    const groupedTickets = TicketGroupWithPriority(priority);
    return (
      <div className="ticket-column">
        <h3 className="column-top">
          <div className="column-title">
            <div className="column-icon">
              {priority === 3 && <img src={HighPriority} alt="img" />}
              {priority === 2 && <img src={MediumPriority} alt="img" />}
              {priority === 1 && <img src={LowPriority} alt="img" />}
              {priority === 0 && <img src={NoPriority} alt="img" />}
              {priority === 4 && <img src={UrgentPriority} alt="img" />}
            </div>
            <div>{priorityLabels[priority]}</div>
            <div className="ticket-length"> {groupedTickets.length}</div>
          </div>
          <div className="column-right">
            <div>{<img src={Plus} alt="img" />}</div>
            <div>{<img src={dotMenuSymbol} alt="img" />}</div>
          </div>
        </h3>{" "}
       
        {groupedTickets.length > 0 ? (
          groupedTickets.map((ticket) => (
            <div key={ticket.id} className="ticket-card">
              <div className="card-header">
                <div className="ticket-icon">
                  <div>
                    <div>{ticket.id}</div> {/* Ticket ID */}
                    <h4>{ticket.title}</h4> {/* Ticket Title */}
                  </div>
                  <div className="avatar">
                   
                    <img
                      src={`https://via.placeholder.com/30x30?text=${ticket.userId}`}
                      alt="User"
                    />
                  </div>
                </div>
              </div>
              
              <div className="cards">
              <div className="card-feature"><img src={dotMenuSymbol} alt="img" /></div>
              <div className="card-feature">Feature Request</div></div>
              
            </div>
          ))
        ) : (
          <p>No tickets with {priorityLabels[priority]} priority</p>
        )}
      </div>
    );
  };

  return (
    <div className="ticket-board">
      {renderTicketCol(0)} 
      {renderTicketCol(4)} 
      {renderTicketCol(3)} 
      {renderTicketCol(2)} 
      {renderTicketCol(1)} 
    </div>
  );
}
export default Priority;