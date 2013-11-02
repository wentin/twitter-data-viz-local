Here is the online version
http://wentin-twitter-data-viz.nodejitsu.com/

The project is called "!!!", the goal is to explore one question:
How emotional or dramatic people who speak different languages are. In another word, how do people around the word express themselves in different ways and manners.

The project is streaming twitter worldwide, when people include "!!!" in their twit, the twit will show up on this map in real time, pins of those twits are created by geo-location and color-coded according to the language its creator is using. WebSocket is used to make the live update happen.

During this project I went back and forth between twitter search API and streaming API. They all have their own pros and limitations, some ideas can not be implemented due to twitter API policy restriction. Originally my idea is to do a 3d data visualization using threejs; the data being visualized are how many twits on a certain topic are published around the user's geo-location, sampled from smaller radius to larger, to show how the topic goes up or down outward from the user. The idea behind is:
Do you care things that is beyond your life circle? Do others who lives far from you care things that you are paying attention to?
However it is not implemented because twitter search api only return 100 result per attempt, and there is not a officially twitter-supported way to get the accurate count of the result from the search. Twitter announced in their API documentation that twitter search API shouldn't be used as data collection tool and analytics research tool. So that didn't happen as I wished. 

Instead this project used twitter streaming API. It has many limitation too, for example, there is no history data, and one app can only maintain one stream at a time.

The "!!!" keyword can actually be anything, perhaps from a user input. I intentionally hard coded it so I have more control of the project's performance, for example how frequently the map gets a new data; and make a stronger design intention that it is actually making a point by visualizing these data. 

Thanks for reading! Any feedback is welcome!
