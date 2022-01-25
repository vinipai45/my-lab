import axios from 'axios';
import { gapi } from 'gapi-script';
import { useEffect, useState } from 'react';
import useDrivePicker from 'react-google-drive-picker'
// import { gapi } from 'gapi-script';
let CLIENT_ID = "487053781358-2jl9tlbjh3nn5c8mtldmqk652qo67l4o.apps.googleusercontent.com";
let API_KEY = "AIzaSyDUdE47cYyovi8RXJAAxCtXydQe6TvCbfQ";

function App() {
    const [openPicker, data, authResponse,] = useDrivePicker();
    // const customViewsArray = [new google.picker.DocsView()]; // custom view


    const handleOpenPicker = () => {
        openPicker({
            clientId: CLIENT_ID,
            developerKey: API_KEY,
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
            data.docs.map(doc => {
                console.log(doc)
                gapi.client.sheets.spreadsheets.values.get({
                    spreadsheetId: doc.id,
                    range: 'A1:Z',
                }).then(res => console.log(JSON.parse(res.body)))
            })
        }
    }, [data])



    return (
        <div>
            <button onClick={() => handleOpenPicker()}>Open Picker</button>
        </div>
    );
}

export default App;