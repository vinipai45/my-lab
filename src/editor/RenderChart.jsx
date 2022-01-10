import React from 'react'
import ColumnChart from '../graph/ColumnChart'
import ColumnLineChart from '../graph/ColumnLineChart'
import LineChart from '../graph/LineChart'

const RenderChart = ({ type, data }) => {
    return (
        <div>
            {
                type === 'column' ? (<ColumnChart data={ data}/>) :
                    type === 'line' ? (<LineChart data={ data}/>) :
                        type === 'column_line' ? (<ColumnLineChart data={ data}/>) :
                            <></>
            }
        </div>
    )
}

export default RenderChart
