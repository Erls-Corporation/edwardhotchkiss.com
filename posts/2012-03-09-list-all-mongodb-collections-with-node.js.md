--
Title: List all MongoDB Collections with Node.JS
Description: List all MongoDB Collections with Node.JS
Date: 03.09.12
Keywords: MongoDB,Node.JS,Mongoose,Collections
--

We (the privileged, hah) all know and love [MongoHQ](http://mongohq.com/) -- with it's slick interface, it's nice web-based app and it's alliance with [Heroku](http://heroku.com/).

But sometimes you need to get a list of user-available collections from a MongoDB instance without MongoHQ. The process starts with exposing the MongoDB-Native Object from within [MongooseJS](http://mongoosejs.com/):

**Accessing MongoDBNative**

<script src="https://gist.github.com/2785463.js?file=mongodb_list.js"></script>

**Install MongooseJS**

<script src="https://gist.github.com/2785463.js?file=install.sh"></script>

***In Action:***

<script src="https://gist.github.com/2785463.js?file=action.js"></script>

**Run it:**

<script src="https://gist.github.com/2785463.js?file=action.sh"></script>

**Fork & Edit:**

[https://gist.github.com/1522555/](https://gist.github.com/1522555)
