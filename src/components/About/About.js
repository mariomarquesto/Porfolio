import React from "react";
import { eachDayOfInterval, format } from "date-fns";

function generateEmptyData(startDate, endDate) {
  // Devuelve un arreglo de strings con los días entre startDate y endDate
  const days = eachDayOfInterval({
    start: startDate,
    end: endDate,
  });

  // Opcional: formatear fechas a "yyyy-MM-dd"
  return days.map(day => format(day, "yyyy-MM-dd"));
}

// Componente de ejemplo
function DateList() {
  const start = new Date(2025, 6, 1); // Julio es mes 6 (0-based)
  const end = new Date(2025, 6, 7);

  const daysArray = generateEmptyData(start, end);

  return (
    <div>
      <h3>Días entre {format(start, "yyyy-MM-dd")} y {format(end, "yyyy-MM-dd")}:</h3>
      <ul>
        {daysArray.map(dayStr => (
          <li key={dayStr}>{dayStr}</li>
        ))}
      </ul>
    </div>
  );
}

export default DateList;
