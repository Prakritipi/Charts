import React from 'react'
import { Tabs } from 'antd';
import BarChart from './BarChart';

const index: React.FC = () => {

    
    return (
        <div className="p-4 ml-11">
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Bar Chart" key="1">
                    <BarChart />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Scheme Info" key="2">
                    <div className="border border-gray-300 h-32 rounded p-4">
                        (Optional content)
                    </div>
                </Tabs.TabPane>
            </Tabs>
        </div>
        
    )
}

export default index;
