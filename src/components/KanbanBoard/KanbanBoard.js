import React from 'react';
import Card from '../card/Card';
import { useState,useEffect } from 'react';
import './KanbanBoard.css'; 

const KanbanBoard = ({ tickets, users, groupBy, sortOption }) => {
  
  const groupedData = groupBy === 'status'
    ? groupByStatus(tickets)
    : groupBy === 'user'
    ? groupByUser(tickets, users)
    : groupByPriority(tickets);

  const sortedData = sortOption === 'title'
    ? sortAlphabetically(groupedData)
    : sortOption === 'priority'
    ? sortByPriority(groupedData)
    : groupedData;
    const getGroupTitleContent = (groupKey) => {
      if (groupBy === 'status') {
        return `${groupKey}`;
      } else if (groupBy === 'user') {
        return `${groupKey}`;
      } else if (groupBy === 'priority') {
        if(groupKey==0){
          return 'No Priority';
        }
        else if(groupKey==1){
          return 'Low';
        }
        else if(groupKey==2){
          return 'Medium';
        }
        else if(groupKey==3){
          return 'High';
        }
        else{
          return 'Urgent';
        }
      }
      return groupKey; 
    };
  
  return (
    <div className="kanban-board">

      {sortedData.map((ticketGroup) => (
        <div key={ticketGroup.groupKey} className="kanban-group-container">
            
        <h2>{getGroupTitleContent(ticketGroup.groupKey)}</h2>
          <div className="kanban-cards">
            {ticketGroup.tickets.map((ticket) => (
              <Card key={ticket.id} ticket={ticket} head = {groupBy} user={users.find((user) => user.id === ticket.userId)} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};


const groupByStatus = (tickets) => {
  const grouped = {};
  tickets.forEach((ticket) => {
    if (!grouped[ticket.status]) {
      grouped[ticket.status] = [];
    }
    grouped[ticket.status].push(ticket);
  });
  return Object.keys(grouped).map((status) => ({
    groupKey: status,
    groupTitle: status,
    tickets: grouped[status],
  }));
};

const groupByUser = (tickets, users) => {
  const grouped = {};
  tickets.forEach((ticket) => {
    const user = users.find((u) => u.id === ticket.userId);
    if (!user) return; 
    if (!grouped[user.name]) {
      grouped[user.name] = [];
    }
    grouped[user.name].push(ticket);
  });
  return Object.keys(grouped).map((userName) => ({
    groupKey: userName,
    groupTitle: userName,
    tickets: grouped[userName],
  }));
};

const groupByPriority = (tickets) => {
  const grouped = {};
  tickets.forEach((ticket) => {
    if (!grouped[ticket.priority]) {
      grouped[ticket.priority] = [];
    }
    grouped[ticket.priority].push(ticket);
  });
  return Object.keys(grouped).map((priority) => ({
    groupKey: priority,
    groupTitle: `Priority ${priority}`,
    tickets: grouped[priority],
  }));
};

const sortAlphabetically = (groups) => {
  return [...groups].sort((a, b) => a.groupTitle.localeCompare(b.groupTitle));
};

const sortByPriority = (groups) => {
  return [...groups].sort((a, b) => b.groupKey - a.groupKey);
};

export default KanbanBoard;
