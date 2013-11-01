Here is the online version you can visit
http://wentin-twitter-data-viz.nodejitsu.com/

The project is called "!!!", the goal is to explore a question:
how emotional or dramatic people who speaks different language are. How they express themselves in a different way or manner.
I am streaming worldwide, when people uses "!!!" in their twit, it will show up on my map, color coded by the language they are using to twit. I used WebSocket to make the live update happen.

I went back and forth at twitter search API and streaming API. They all have their limitations, some ideas can not be implemented due to twitter api policy restriction. Originally my idea is do a 3d data visualization using threejs, the data is how many twit on a certain topic around a certain user's geo location, visualized by radius, show how the topic went high or goes down from the center of this user. However search api only return 100 result per result, and there is not supported way to get the accurate count of the search result. Twitter announced in their API that search shouldn't be used as data collection and research tool. So that didn't happen as I wish. 
I did this project using streaming API, it has many limitation too, for example, there is no history data, and I can only maintain one stream only at a time. I tried to stream multiple keywords, but it wound work as seperate stream, if I used "or", than stream api doesn't provide a way to tell which keywords matches this twit. So instead I only streaming a set up keyword "!!!".
The "!!!" can actually be anything user input. I hard coded it so I have more control of the project's performance, design idea and branding as well, so that I am making a point through these data.

Thanks! Any feedback is welcome!
