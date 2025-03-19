import React from "react";

const TeamList = () => {
  return (
    <>
      {/* Render Movie Lists Here */}
      <h2>Team List Section</h2>

      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            <p>
              {team.name} Team ({team.id})
            </p>
            <ul>
              {team.children.map((child) => (
                <li key={child.id}>
                  {child.name} ({child.id})
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TeamList;
