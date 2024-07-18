import React from 'react';
import '../styles/styles.css';

const TableSection: React.FC = () => {
    return (
        <div className="table-section">
            <div className="table-container">
                <table className="data-table">
                    <thead>
                    <tr>
                        <th>Column 1</th>
                        <th>Column 2</th>
                        <th>Column 3</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                    </tr>
                    <tr>
                        <td>Data 4</td>
                        <td>Data 5</td>
                        <td>Data 6</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableSection;
