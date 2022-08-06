import React from 'react';
import {ProgressBar} from 'primereact/progressbar';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-teal/theme.css';
import 'primereact/resources/primereact.css';

export const ProgressBarUnit = () => {

    return <div>
        <div className="card">
            <ProgressBar mode="indeterminate" style={{height: '6px'}}></ProgressBar>
        </div>
    </div>
}