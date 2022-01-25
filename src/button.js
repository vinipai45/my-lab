import { useEffect } from 'react';
import useDrivePicker from 'react-google-drive-picker'


function App() {
    const [openPicker, data, authResponse] = useDrivePicker();
    // const customViewsArray = [new google.picker.DocsView()]; // custom view
    const handleOpenPicker = () => {
        openPicker({
            clientId: "487053781358-2jl9tlbjh3nn5c8mtldmqk652qo67l4o.apps.googleusercontent.com",
            developerKey: "AIzaSyDUdE47cYyovi8RXJAAxCtXydQe6TvCbfQ",
            viewId: "SPREADSHEETS",
            // token: token, // pass oauth token in case you already have one
            showUploadView: true,
            showUploadFolders: true,
            supportDrives: true,
            multiselect: true,
            // customViews: customViewsArray, // custom view
        })
    }

    useEffect(() => {
        // do anything with the selected/uploaded files
        if (data) {
            data.docs.map(i => console.log(i.name))
        }
    }, [data])


    return (
        <div>
            <button onClick={() => handleOpenPicker()}>Open Picker</button>
        </div>
    );
}

export default App;