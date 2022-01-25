import axios from 'axios';
import { useEffect } from 'react';
import useDrivePicker from 'react-google-drive-picker'

import { gapi } from 'gapi-script';

function App() {
    const [openPicker, data, authResponse,] = useDrivePicker();
    // const customViewsArray = [new google.picker.DocsView()]; // custom view
    const handleOpenPicker = () => {
        openPicker({
            clientId: "487053781358-2jl9tlbjh3nn5c8mtldmqk652qo67l4o.apps.googleusercontent.com",
            developerKey: "AIzaSyDUdE47cYyovi8RXJAAxCtXydQe6TvCbfQ",
            viewId: "SPREADSHEETS",
            // token: token, // pass oauth token in case you already have one
            showUploadView: false,
            // showUploadFolders: false,
            supportDrives: true,
            multiselect: true,
            // disableDefaultView: true,
            // customViews: customViewsArray, // custom view
        })
    }

    useEffect(() => {
        // do anything with the selected/uploaded files
        if (data) {
            data.docs.map(i => {
                console.log(i)
                // gapi.client.sheets.spreadsheets.values.get({
                //     spreadsheetId: i.id,
                //     range: ['A1']
                // }).then((response) => {
                //     var result = response.result;
                //     var numRows = result.values ? result.values.length : 0;
                //     console.log(`${numRows} rows retrieved.`);
                // });
                // axios.get(i.embedUrl).then(data => {

                // })
            })
        }
    }, [data])

    useEffect(() => {
        console.log(gapi, "gapi");
    }, [])


    return (
        <div>
            <button onClick={() => handleOpenPicker()}>Open Picker</button>
        </div>
    );
}

export default App;