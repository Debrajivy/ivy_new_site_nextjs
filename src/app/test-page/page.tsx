"use client"
import React, { useState, useEffect } from 'react';
import { Loader2, Table, AlertTriangle } from 'lucide-react';

// The Google Sheet ID provided by the user
const SHEET_ID = '1WyzeRMMJii6muBvcsEiUJPqPWTAiD8qZfc4beJ99tGk';
// Assuming the data is on the first tab (GID 0)
const SHEET_GID = '0';

// Polling configuration for automatic updates
const POLLING_INTERVAL = 86400000; // 24 hours (24 * 60 * 60 * 1000 = 86400000)
const MAX_RETRIES = 3;

// Define the structure for a single row of data
interface DataRow {
    id: number;
    [key: string]: any; // Allows for dynamic column keys
}

/**
 * Parses the raw JSONP response from the Google Sheet GQL endpoint
 * into a structured array of objects.
 * @param rawJsonp The raw text response from the API.
 * @returns An object containing headers (array of strings) and rows (array of DataRow).
 */
const parseGoogleSheetResponse = (rawJsonp: string): { headers: string[], rows: DataRow[] } => {
    try {
        // 1. Strip the JSONP wrapper: /*O_o*/\n...
        const jsonString = rawJsonp
            .replace('/*O_o*/\ngoogle.visualization.Query.setResponse(', '')
            .slice(0, -2); // Remove the trailing ');'

        const response = JSON.parse(jsonString);
        const table = response.table;
        if (!table || !table.cols || !table.rows) {
            throw new Error('Invalid table structure in response.');
        }

        // Extract headers (column labels)
        const headers = table.cols.map((col: any) => col.label || col.id);

        // Extract rows and map them to objects
        const rows: DataRow[] = table.rows.map((row: any, index: number) => {
            const rowData: DataRow = { id: index };
            row.c.forEach((cell: any, colIndex: number) => {
                const header = headers[colIndex];
                // Google Sheet values are often in 'v' (value) or 'f' (formatted value)
                rowData[header] = cell?.v !== undefined ? cell.v : cell?.f !== undefined ? cell.f : null;
            });
            return rowData;
        });

        return { headers, rows };
    } catch (error) {
        console.error("Error parsing Google Sheet data:", error);
        // Return empty state on failure
        return { headers: [], rows: [] };
    }
};


const App: React.FC = () => {
    const [data, setData] = useState<DataRow[]>([]);
    const [headers, setHeaders] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Helper function for delay
        const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

        const fetchData = async (retryCount = 0) => {
            // Only show the full loading spinner on the initial load 
            if (retryCount === 0 && data.length === 0) {
                setLoading(true);
            }
            setError(null);

            const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&gid=${SHEET_GID}`;

            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const rawJsonp = await response.text();
                const { headers, rows } = parseGoogleSheetResponse(rawJsonp);

                if (rows.length === 0) {
                    // Only show the error if we failed to get data entirely.
                    if (data.length === 0) {
                        setError("Successfully fetched data, but no rows were found. Ensure the sheet has content and is published/shared publicly.");
                        setHeaders([]);
                    }
                } else {
                    setHeaders(headers);
                    setData(rows);
                    // Clear any previous error on successful fetch
                    setError(null);
                }

            } catch (err) {
                console.error(`Fetch or Parse Error on Attempt ${retryCount + 1}:`, err);

                if (retryCount < MAX_RETRIES) {
                    // Exponential Backoff: delay 1s, 2s, 4s...
                    const waitTime = Math.pow(2, retryCount) * 1000;
                    await delay(waitTime);
                    await fetchData(retryCount + 1); // Retry recursively
                    return; // Stop current execution chain if retrying
                }

                // Final failure after all retries
                setError(`Failed to fetch or parse data after ${MAX_RETRIES + 1} attempts. Check if the Sheet ID and GID are correct, and if the sheet is publicly accessible (File > Share > Publish to web). Error details: ${err instanceof Error ? err.message : String(err)}`);
            } finally {
                // Set loading false only after all attempts/success completes
                setLoading(false);
            }
        };

        // 1. Initial fetch when component mounts
        fetchData();

        // 2. Set up polling for automatic updates
        const intervalId = setInterval(() => {
            // Call fetchData periodically
            fetchData();
        }, POLLING_INTERVAL);

        // 3. Cleanup interval when component unmounts
        return () => clearInterval(intervalId);

    }, []); // Empty dependency array ensures this runs once

    const lastUpdatedDisplay = data.length > 0 && headers.length > 0 ?
        `Last updated at: ${new Date().toLocaleTimeString()}` :
        "Awaiting initial data load...";

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-10 p-6 bg-white shadow-lg rounded-xl">
                    <h1 className="text-4xl font-extrabold text-indigo-700 mb-2">Google Sheet Polling Data Viewer</h1>
                   
                    <p className="text-sm font-medium text-indigo-500 mt-2">
                        {loading && data.length === 0 ? "Loading initial data..." : lastUpdatedDisplay}
                    </p>
                </header>

                {loading && data.length === 0 && (
                    <div className="flex justify-center items-center h-64 bg-white rounded-xl shadow-lg">
                        <Loader2 className="w-8 h-8 text-indigo-500 animate-spin mr-3" />
                        <span className="text-xl font-medium text-gray-700">Loading Sheet Data...</span>
                    </div>
                )}

                {loading && data.length > 0 && (
                    <div className="text-center p-3 text-indigo-600 font-semibold">
                        <Loader2 className="w-4 h-4 text-indigo-500 animate-spin mr-2 inline-block" />
                        Refreshing data...
                    </div>
                )}


                {error && (
                    <div className="p-6 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-xl shadow-lg flex items-start space-x-3">
                        <AlertTriangle className="w-6 h-6 flex-shrink-0 mt-1" />
                        <div>
                            <h2 className="text-lg font-bold mb-1">Data Fetching Error</h2>
                            <p className="text-sm">{error}</p>
                            <p className="text-xs mt-2 opacity-80">
                                <a
                                    href={`https://docs.google.com/spreadsheets/d/${SHEET_ID}/edit`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline font-semibold hover:text-red-600"
                                >
                                    Verify your sheet link and public access settings here.
                                </a>
                            </p>
                        </div>
                    </div>
                )}

                {!error && data.length > 0 && (
                    <div className="bg-white rounded-xl shadow-xl overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-indigo-600 sticky top-0">
                                <tr>
                                    {/* Render Table Headers */}
                                    {headers.map((header, index) => (
                                        <th
                                            key={index}
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white"
                                        >
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                                {/* Render Table Rows */}
                                {data.map((row, rowIndex) => (
                                    <tr key={row.id} className={rowIndex % 2 === 0 ? 'bg-gray-50 hover:bg-gray-100 transition duration-150' : 'bg-white hover:bg-gray-100 transition duration-150'}>
                                        {headers.map((header, colIndex) => (
                                            <td
                                                key={colIndex}
                                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                                            >
                                                {/* Display the value, handling nulls gracefully */}
                                                {row[headers[colIndex]] === null || row[headers[colIndex]] === undefined ? '-' : String(row[headers[colIndex]])}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {!loading && !error && data.length === 0 && (
                    <div className="p-6 bg-blue-100 border-l-4 border-blue-500 text-blue-700 rounded-xl shadow-lg flex items-center space-x-3">
                        <Table className="w-6 h-6 flex-shrink-0" />
                        <p className="text-lg font-medium">No data found in the sheet. Please check if the sheet is published to the web and contains content.</p>
                    </div>
                )}

            </div>
            <style>{`
        /* Global font setting for consistency */
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
        </div>
    );
};

export default App;
