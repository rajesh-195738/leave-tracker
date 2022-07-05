import React from 'react';

export default function Main(){
    var url = 'https://script.google.com/macros/s/AKfycbyR2QRz9aXsBlNDkBVCny8KtQjj39VZeK9NudcN1YTATui2chQ/exec?action=read&table=week_1';
    fetch(url).then((response) => response.json())
    .then(function(data) {
         /* do stuff with your JSON data */
        console.log(data);
    })
    .catch((error) => console.log(error));

    return(
        <div>
            <p>Main Content</p>
        </div>        
    );
}