import React, { useState, useEffect } from 'react';
import './Schedule.css';

const Schedule = () => {
    const schedule = [
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
            ]
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
            ]
        },
    ];

    const [currentDay, setCurrentDay] = useState(0);
    const [animationDirection, setAnimationDirection] = useState('right');
    const [tableRowKey, setTableRowKey] = useState(0); // Force re-render of table rows

    const handleNext = () => {
        setAnimationDirection('right');
        if (currentDay < schedule.length - 1) {
            setCurrentDay(currentDay + 1);
        }
    };

    const handlePrevious = () => {
        setAnimationDirection('left');
        if (currentDay > 0) {
            setCurrentDay(currentDay - 1);
        }
    };

    // Reset table row animations when day changes
    useEffect(() => {
        setTableRowKey(prev => prev + 1);
    }, [currentDay]);

    // Function to check if an event is currently happening
    const isEventHappeningNow = (eventTime) => {
        const [startStr, endStr] = eventTime.split(' - ');

        // Parse time strings to Date objects (using the current date)
        const parseTime = (timeStr) => {
            const [time, modifier] = timeStr.split(' ');
            let [hours, minutes] = time.split(':').map(Number);

            if (modifier === 'pm' && hours !== 12) hours += 12;
            if (modifier === 'am' && hours === 12) hours = 0;

            const date = new Date();
            date.setHours(hours, minutes, 0, 0);
            return date;
        };

        try {
            const startTime = parseTime(startStr);
            const endTime = parseTime(endStr);
            const currentTime = new Date();

            return currentTime >= startTime && currentTime <= endTime;
        } catch (error) {
            console.error("Error parsing time:", error);
            return false;
        }
    };

    const day = schedule[currentDay];

    return (
        <div className="teams-section">
            <div className="ex">
                <h2>
                    Converse 2K25 Schedule
                </h2>
            </div>

            <div className="schedule-page">
                <div className={`schedule-day ${animationDirection === 'right' ? 'animate-slideInRight' : 'animate-slideInLeft'}`}>
                    <h2>
                        {day.day}
                    </h2>

                    <table className="schedule-table">
                        <thead>
                        <tr>
                            <th>Time</th>
                            <th>Event</th>
                            <th>Location</th>
                        </tr>
                        </thead>
                        <tbody key={tableRowKey}>
                        {day.events.map((event, idx) => {
                            const isCurrent = isEventHappeningNow(event.time);
                            return (
                                <tr
                                    key={idx}
                                    className={`table-row-animate ${isCurrent ? 'current-event' : ''}`}
                                    style={{ animationDelay: `${idx * 0.05}s` }}
                                >
                                    <td>{event.time}</td>
                                    <td className="font-medium">{event.event}</td>
                                    <td>{event.location || '-'}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>

                    <div className="navigation-buttons">
                        <button
                            onClick={handlePrevious}
                            disabled={currentDay === 0}
                            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg border-2 border-blue-700 hover:bg-blue-700 hover:border-blue-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Previous Day
                        </button>
                        <div className="day-indicator">
                            <span className="mx-4">
                                Day {currentDay + 1} of {schedule.length}
                            </span>
                        </div>
                        <button
                            onClick={handleNext}
                            disabled={currentDay === schedule.length - 1}
                            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg border-2 border-blue-700 hover:bg-blue-700 hover:border-blue-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Next Day
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;