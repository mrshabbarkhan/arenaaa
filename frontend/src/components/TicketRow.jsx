import React from "react";
import { Link } from "react-router-dom";

const TicketRow = ({ ticket, index }) => {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{ticket.product}</td>
      <td>{new Date(ticket.createdAt).toLocaleDateString("en-IN")}</td>
      <td>
        <span class="badge text-bg-success rounded-0">{ticket.status}</span>
      </td>
      <td>
        <Link
          to={`/user/ticket/${ticket._id}`}
          className="btn btn-dark btn-sm rounded-0"
        >
          View
        </Link>
      </td>
    </tr>
  );
};

export default TicketRow;
