import React, { useEffect, useState } from 'react';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';
import GroupingSortingOptions from './components/Grouping/GroupingSortingOptions';
import './App.css'

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [sortOption, setSortOption] = useState('title');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();
        setTickets(data.tickets);
        setUsers(data.users);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="HeaderOptions">
      <div id="upper"><GroupingSortingOptions
        groupBy={groupBy}
        setGroupBy={setGroupBy}
        sortOption={sortOption}
        setSortOption={setSortOption}
      /></div>
      <div id="lower">
        <KanbanBoard tickets={tickets} users={users} groupBy={groupBy} sortOption={sortOption} />

      </div>
    </div>
  );
};

export default App;
