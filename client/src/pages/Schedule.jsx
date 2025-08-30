import React, { useState, useMemo } from 'react';
import './Schedule.css';

// Assumes a corresponding CSS file or CSS-in-JS solution
// with the following class names:
// .schedule-container
// .schedule-header
// .day-navigation
// .nav-button
// .nav-button.disabled
// .day-indicator
// .schedule-table
// .table-header
// .table-body
// .schedule-row
// .schedule-cell
// .current-event-row

const SCHEDULE_DATA = [
    {
        day: 'Friday, 19th September, 2025',
        events: [
            { time: '8:30 am - 10:00 am', event: 'Inauguration Ceremony', location: 'Outside LAB-1' },
            { time: '10:00 am - 10:45 am', event: 'PY-IT (Round-1)', location: 'Lab-1,2,3' },
            { time: '11:00 am - 11:45 am', event: 'IT Quiz', location: 'Lab-1,2,3' },
            { time: '12:00 pm - 1:00 pm', event: 'Codathon', location: 'Lab-1,2,3' },
            { time: '12:00 pm - 1:00 pm', event: 'PY-IT Round-2', location: 'LAB-5' },
            { time: '1:00 pm - 1:30 pm', event: 'Lunch Break', location: '' },
            { time: '1:30 pm - 2:15 pm', event: 'AI Quiz', location: 'Lab-1,2,3' },
            { time: '2:30 pm - 3:00 pm', event: 'TECH TUSSLE ROUND -1 (Quiz)', location: 'Lab – 1,2,3' },
            { time: '2:30 pm - 3:00 pm', event: 'Cyber Siege Round-1 (quiz)', location: 'Lab-1,2,3' },
            { time: '3:00 pm - 4:15 pm', event: 'Web Wave', location: 'Lab-4,5' },
            { time: '3:00 pm - 4:15 pm', event: 'Cyber Siege Round-2', location: 'Lab-1,2,3' },
        ],
    },
    {
        day: 'Saturday, 20th September, 2025',
        events: [
            { time: '9:00 am - 9:45 am', event: 'Ai-Memes (Round 1)', location: 'Lab -1,2,3' },
            { time: '10:00 am - 11:00 am', event: 'Py-IT Round 3', location: 'Lab 5' },
            { time: '10:00 am - 11:00 am', event: 'Tech Tussle ROUND 2', location: 'NJ Seminar Hall' },
            { time: '11:15 am - 12:15 pm', event: 'Logo Hunt', location: 'Lab 1,2,3' },
            { time: '12:15 pm - 1:15 pm', event: 'AI-Memes (Round 2)', location: 'Lab 1,2,3' },
            { time: '12:15 pm - 1:15 pm', event: 'Bug Buzz (Round 1 and Round 2)', location: 'Lab 4,5' },
            { time: '1:00 pm - 2:00 pm', event: 'Lunch Break', location: '' },
            { time: '2:30 pm - 4:00 pm', event: 'Valedictory, Prize & Certificate distribution', location: '' },
        ],
    },
];

const Schedule = () => {
    const [currentDayIndex, setCurrentDayIndex] = useState(0);

    const currentDay = useMemo(() => SCHEDULE_DATA[currentDayIndex], [currentDayIndex]);

    const isEventHappeningNow = (eventTime) => {
        const [startStr, endStr] = eventTime.split(' - ');

        // This function needs to be robust for various time formats (am/pm, 24h)
        const parseTime = (timeString) => {
            let [time, modifier] = timeString.split(' ');
            let [hours, minutes] = time.split(':').map(Number);

            if (modifier && modifier.toLowerCase() === 'pm' && hours !== 12) {
                hours += 12;
            }
            if (modifier && modifier.toLowerCase() === 'am' && hours === 12) {
                hours = 0;
            }

            const now = new Date();
            now.setHours(hours, minutes, 0, 0);
            return now;
        };

        try {
            const startTime = parseTime(startStr);
            const endTime = parseTime(endStr);
            const currentTime = new Date();

            return currentTime >= startTime && currentTime <= endTime;
        } catch (error) {
            console.error("Error parsing event time:", error);
            return false;
        }
    };

    const handleNextDay = () => {
        if (currentDayIndex < SCHEDULE_DATA.length - 1) {
            setCurrentDayIndex(currentDayIndex + 1);
        }
    };

    const handlePreviousDay = () => {
        if (currentDayIndex > 0) {
            setCurrentDayIndex(currentDayIndex - 1);
        }
    };

    return (
        <div className="schedule-container">
            <h2 className="schedule-header">Converse 2K25 Schedule</h2>
            <div className="day-navigation">
                <button
                    onClick={handlePreviousDay}
                    disabled={currentDayIndex === 0}
                    className="nav-button"
                >
                    Previous Day
                </button>
                <span className="day-indicator">
                    Day {currentDayIndex + 1} of {SCHEDULE_DATA.length} ({currentDay.day})
                </span>
                <button
                    onClick={handleNextDay}
                    disabled={currentDayIndex === SCHEDULE_DATA.length - 1}
                    className="nav-button"
                >
                    Next Day
                </button>
            </div>
            <table className="schedule-table">
                <thead className="table-header">
                <tr>
                    <th className="schedule-cell">Time</th>
                    <th className="schedule-cell">Event</th>
                    <th className="schedule-cell">Location</th>
                </tr>
                </thead>
                <tbody className="table-body">
                {currentDay.events.map((event, idx) => (
                    <tr
                        key={idx}
                        className={`schedule-row ${isEventHappeningNow(event.time) ? 'current-event-row' : ''}`}
                    >
                        <td className="schedule-cell">{event.time}</td>
                        <td className="schedule-cell">{event.event}</td>
                        <td className="schedule-cell">{event.location || '-'}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Schedule;