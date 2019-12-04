# Express Note Taker

##Introduction

As part of the Express curriculum, we created a note taking app using Express routing and methods to record, display, and delete notes. The front end HTML and JavaScript was provided, and we were tasked with developing the backend code.

The user is able to create a note title, and a body of the note, then click the save button to append the note to the left side of the screen. The user can create as many notes as they'd like. After the server is turned off and back on, the notes will persist and repopulate upon refresh. The user can delete any note they want by simply clicking the delete button.

###Technologies

The app was created in VS Code using html, css, Bootstrap, FontAwesome, JavaScript, and jQuery. 

####Launch

To run this app, you would need to do a lot of over complicated things, like go to my GitHub and copy all the code into VS Code and then run the server through the terminal, etc. etc. An easier way would be looking at the completed product through Heroku, which I haven't fully grasped how to do yet. We'll be learning more about this soon.

I plan on hosting this on Heroku for ease of display in the future. Deal?

#####Status

The program is complete.

######Sources and Inspiration

I thought this was an interesting assignment! It was fun to create Express routes and push things into a db.json. My favorite bits of code are here:

app.post("/api/notes", function (req, res) {
    var newNote = req.body;
    console.log(newNote);
    notes.push(newNote);
    res.json(newNote);
    assignID();
    fs.writeFileSync("./db/db.json", JSON.stringify(notes, null, 2), function (err) {
        if (err) 
            throw err
        
    });
});

app.delete("/api/notes/:id", function (req, res) {
    console.log(req.params.id);
    var deleteID = req.params.id;
    notes.splice(deleteID, 1);
    assignID();
    fs.writeFileSync("./db/db.json", JSON.stringify(notes), function(err) {
        if (err) throw err
    });
});

Posting and deleting the notes was really fun to figure out.