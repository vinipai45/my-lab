import React from 'react'
import ColumnChart from '../graph/ColumnChart'
import ColumnLineChart from '../graph/ColumnLineChart'
import LineChart from '../graph/LineChart'

const RenderChart = ({ type, data }) => {
    return (
        <div>
            {
                type === 'column' ? (<ColumnChart />) :
                    type === 'line' ? (<LineChart />) :
                        type === 'column_line' ? (<ColumnLineChart />) :
                            <></>
            }
        </div>
    )
}

export default RenderChart
