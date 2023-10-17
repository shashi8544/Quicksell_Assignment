import React, { useState } from 'react';
import './GroupingSortingOptions.css'; 

const GroupingSortingOptions = ({ groupBy, setGroupBy, sortOption, setSortOption }) => {
  const [displayOptions, setDisplayOptions] = useState(false);
 
  const toggleDisplayOptions = () => {
    setDisplayOptions(!displayOptions);
  };

  return (
    <div className="group-sort-options">
      <button onClick={toggleDisplayOptions} id="display_button">Display</button>
      <div className={`options-card ${displayOptions ? 'show' : ''}`}>
        <form>
          <div>
            <label>
              Grouping:
              <span></span>
              <select onChange={(e) => setGroupBy(e.target.value)}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Ordering:
              <select onChange={(e) => setSortOption(e.target.value)}>
                <option value="title">Title</option>
                <option value="priority">Priority</option>
              </select>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GroupingSortingOptions;
