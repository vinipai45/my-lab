import axios from 'axios';
import { gapi } from 'gapi-script';
import { useEffect, useState } from 'react';
import useDrivePicker from 'react-google-drive-picker'
// import { gapi } from 'gapi-script';
let CLIENT_ID = "726641909222-0de6rerpfiafsai80sb0e5p1u6gjkiqi.apps.googleusercontent.com";
let API_KEY = "AIzaSyAnbfJCxvgrxfjg6zNrDjmh0Br5tRuDls0";

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