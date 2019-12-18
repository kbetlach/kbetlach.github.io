# Eat-Da-Burger! (Node Express Handlebars)

##Introduction

Eat-Da-Burger is a simple MVC (model view controller) app that utilizes express routing, handlebars.js, and stores data in a MySQL database. The app itself is very simple - there are two columns listed as "burgers ready for devouring," and "devoured burgers." Burgers listed as ready to be devoured have a button next to them called Devour! Clicking this will move the burger into the devoured burgers column.

Once in the "devoured burgers" column, the Devour! button is replaced by an Order Up! button. Clicking this will relocate the burger back into the "ready to be devoured" column. Regardless of column, burgers also have a Trash It! button which will delete the burger from the app entirely.

At the bottom, users can enter any burger they want in the "What Burger Would You Like?" text field, and clicking the "Place Your Order" button will generate the entered burger into the "burgers ready for devouring" column.

All burgers are stored in a MySQL database.

###Technologies

The app's database schema and seeds were created in the MySQL workbench, and the coding was done in VS Code using node.js, JavaScript, handlebars.js, and Express. A custom ORM was also utilized. CSS, Bootstrap and Google Fonts were used for the styling of the app.

####Launch

Link to the finished app:

()

#####Status

The program is complete.

Down the line it could be fun to add goofy sound effects or animations for whenever the burgers move between columns.

######Sources and Inspiration

Despite being a pretty silly app, this was a very valuable assignment. It was a small dose of what full stack development is like where an app utilizes both front and back end approaches. It could be quite challenging wrapping my head around the sheer breadth of files and what was supposed to go where. Understanding how the files interacted with each other and translated to the app was difficult, but a very valuable lesson.

I think my favorite code from this was the handlebars portion. 

"  <div class="row">
    <div class="col-md-6">
        <h2>Burgers Ready for Devouring</h2>
      <ul>
        {{#each burgers}}
        {{#unless devoured}}
        {{> burgers/burger-block devoured=true}}
        {{/unless}}
        {{/each}}
      </ul>
    </div>
    
    <div class="col-md-6">
        <h2>Devoured Burgers</h2>
      <ul>
        {{#each burgers}}
        {{#if devoured}}
        {{> burgers/burger-block devoured=false}}
        {{/if}}
        {{/each}}
      </ul>
    </div>
  </div>

<div class="row">

  <div class="col-md-12">

      <form class="create-form">
          <label for="ca">What Burger Would You Like?</label>
          <input type="text" id="ca" name="name">

          <button class="submit" type="submit">Place Your Order</button>

      </form>

  </div>

</div>"

This was all brand new to me, and generating a page / html using handlebars was very rewarding. Having this tool will be very valuable moving forward!