import React from 'react';
import { Gebouw } from '@types';

type Props = {
    gebouwen: Array<Gebouw>;
};

const GebouwenTable: React.FC<Props> = ({ gebouwen }: Props) => {
    return (
        <>
            {gebouwen && (
                <div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Naam</th>
                                <th>Locatie</th>
                                <th>Kamers</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gebouwen.map((gebouw) => (
                                <tr key={gebouw.gebouwID}>
                                    <td>{gebouw.eigenaar}</td>
                                    <td>{gebouw.locatie}</td>
                                    <td>
                                        {gebouw.kamers.length > 0 ? (
                                            <button>Bekijk Kamers</button>
                                        ) : (
                                            <span>Geen kamers beschikbaar</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
};

export default GebouwenTable;
